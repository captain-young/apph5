import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import fs from 'fs'

// 自动获取所有页面入口
function getPageEntries() {
  const pagesDir = resolve(__dirname, 'src/pages')
  const entries: Record<string, string> = {}
  fs.readdirSync(pagesDir).forEach((dir: string) => {
    const fullPath = resolve(pagesDir, dir, 'index.html')
    if (fs.existsSync(fullPath)) {
      entries[dir] = fullPath
    }
  })
  return entries
}

// 从命令行参数中获取 --page=xxx
function getTargetPage() {
  const args = process.argv.slice(2)
  const pageArg = args.find((arg) => arg.startsWith('--page='))
  return pageArg ? pageArg.split('=')[1] : null
}

export default defineConfig(() => {
  const allEntries = getPageEntries()
  const targetPage = getTargetPage()

  // 如果指定了页面，则只编译该页面
  const input = targetPage
    ? { [targetPage]: allEntries[targetPage] }
    : allEntries

  console.log(
    targetPage
      ? `🚀 开发页面: ${targetPage}`
      : `🌍 开发所有页面（性能较低，仅调试用）`
  )

  return {
    base: './',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      open: targetPage ? `/${targetPage}.html` : false, // 自动打开目标页面
      port: 8081,
      host: '0.0.0.0',
    },
    build: {
      rollupOptions: {
        input,
        output: {
        // 输出 HTML 文件直接在 dist 根目录
        entryFileNames: "assets/js/[name].[hash].js",
        chunkFileNames: "assets/js/[name].[hash].js",
        assetFileNames: "assets/[ext]/[name].[hash].[ext]",
        },
      },
      outDir: 'dist', // 输出目录
      emptyOutDir: true, // 每次构建前清空输出目录
    },
    plugins: [
      vue(),
      {
        name: 'move-html-to-root',
        closeBundle() {
          const distDir = resolve(__dirname, 'dist')
          const pages = Object.keys(allEntries)
          pages.forEach((page) => {
            const srcHtml = resolve(distDir, `src/pages/${page}/index.html`)
            const destHtml = resolve(distDir, `${page}.html`)
            if (fs.existsSync(srcHtml)) {
              fs.renameSync(srcHtml, destHtml)
              // 删除中间目录
              fs.rmSync(resolve(distDir, 'src'), { recursive: true, force: true })
              console.log(`✅ 页面 ${page}.html 已移动到 dist 根目录`)
            }
          })
        },
      },
    ],
    // 开发模式下指定根目录
    root: targetPage ? resolve(__dirname, `src/pages/${targetPage}`) : undefined,
  
  }
})