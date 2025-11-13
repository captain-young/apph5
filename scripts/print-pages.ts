import fs from "fs";
import path from "path";
import { execSync } from "child_process";

interface RepoInfo {
  username: string;
  repo: string;
}

/** 获取 GitHub 仓库信息（用户名 + 仓库名） */
function getRepoInfo(): RepoInfo | null {
  try {
    const repoUrl = execSync("git config --get remote.origin.url")
      .toString()
      .trim();

    // 兼容两种格式：
    // - git@github.com:username/repo.git
    // - https://github.com/username/repo.git
    const match = repoUrl.match(/github\.com[:/](.+?)\/(.+?)(\.git)?$/);
    if (!match) return null;
    const [, username, repo] = match;
    return { username, repo };
  } catch {
    return null;
  }
}

/** 获取 dist 目录下的所有 HTML 文件 */
function getHtmlPages(): string[] {
  const distPath = path.resolve("dist");
  if (!fs.existsSync(distPath)) return [];
  return fs
    .readdirSync(distPath)
    .filter((f) => f.endsWith(".html"))
    .sort();
}

/** 检查是否存在 CNAME 文件（用于自定义域名） */
function getCustomDomain(): string | null {
  const cnamePath = path.resolve("dist/CNAME");
  if (fs.existsSync(cnamePath)) {
    return fs.readFileSync(cnamePath, "utf-8").trim();
  }
  return null;
}

/** 主逻辑 */
function main(): void {
  const repo = getRepoInfo();
  if (!repo) {
    console.error("❌ 未找到 GitHub 仓库信息，请确认已配置 git remote origin。");
    process.exit(1);
  }

  const pages = getHtmlPages();
  if (pages.length === 0) {
    console.error("⚠️ dist 目录中未找到任何 .html 文件，请先执行 npm run build。");
    process.exit(1);
  }

  const customDomain = getCustomDomain();
  const baseUrl = customDomain
    ? `https://${customDomain}/`
    : `https://${repo.username}.github.io/${repo.repo}/`;

  console.log("\n🚀  GitHub Pages 部署完成！");
  console.log("🌍  访问地址：\n");

  for (const page of pages) {
    console.log(`👉  ${baseUrl}${page}`);
  }

  console.log("\n✅  部署完成，复制链接即可访问！");
}

main();
