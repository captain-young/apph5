import fs from 'fs'
import path from 'path'

// 获取项目根路径
const root = process.cwd()
const pagesDir = path.resolve(root, 'src/pages')
const pkgPath = path.resolve(root, 'package.json')

const pageName = process.argv[2]

if (!pageName) {
  console.error('❌ 请输入页面名称：npm run create-page <pageName>')
  process.exit(1)
}

const pagePath = path.join(pagesDir, pageName)

if (fs.existsSync(pagePath)) {
  console.error(`⚠️ 页面 ${pageName} 已存在！`)
  process.exit(1)
}

// 创建页面目录
fs.mkdirSync(pagePath, { recursive: true })

// 1️⃣ 写入 index.html
fs.writeFileSync(
  path.join(pagePath, 'index.html'),
  `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>${pageName}</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="./main.ts"></script>
  </body>
</html>
`
)

// 2️⃣ 写入 main.ts
fs.writeFileSync(
  path.join(pagePath, 'main.ts'),
  `import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
`
)

// 3️⃣ 写入 App.vue
fs.writeFileSync(
  path.join(pagePath, 'App.vue'),
  `<template>
  <div class="${pageName}">
    <CommonHeader title="${pageName}" />
    <main>
      <h1>${pageName} 页面</h1>
      <p>这是 ${pageName} 的内容区域。</p>
    </main>
    <CommonFooter />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.${pageName} {
  padding: 20px;
}
</style>
`
)

// 4️⃣ 更新 package.json
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))

const scriptKey = `dev:${pageName}`
const scriptVal = `vite -- --page=${pageName}`

pkg.scripts = pkg.scripts || {}
if (!pkg.scripts[scriptKey]) {
  pkg.scripts[scriptKey] = scriptVal
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
  console.log(`✅ 已在 package.json 中添加脚本: "${scriptKey}"`)
}

// ✅ 输出结果
console.log(`✅ 页面创建成功: src/pages/${pageName}/`)
console.log(`👉 运行命令: npm run ${scriptKey}`)
