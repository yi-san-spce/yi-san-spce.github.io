# Yisan AI Lab

> Building Ideas with AI

Yisan AI Lab 是王奕（yisan）的个人 AI 开发者作品集。网站以“个人 AI 实验室”为核心概念，展示 AI 应用开发、Vibe Coding、产品思考与独立项目实践。

## 技术栈

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Lucide React
- GitHub Pages / GitHub Actions

网站是纯静态前端，不需要数据库、API Key 或环境变量。

## 本地运行

需要 Node.js 20.19+ 或 22.12+。

```bash
npm install
npm run dev
```

开发服务器启动后，打开终端中显示的本地地址。

## 质量检查与构建

```bash
npm run lint
npm run build
npm run preview
```

生产文件会生成在 `dist/` 目录。

## 更新项目内容

作品集的文字、链接、技能、实验日志和时间线集中在：

```text
src/data/portfolio.ts
```

### 添加项目截图

1. 将截图放入 `src/assets/projects/<project-name>/`，推荐保留清晰、压缩后的 JPG 或 WebP。
2. 在 `src/data/portfolio.ts` 导入图片。
3. 在对应项目的 `visual.images` 中添加图片：

```ts
visual: {
  kind: 'gallery',
  coverLayout: 'desktop-stack',
  featured: [0, 2, 3],
  images: [
    {
      src: importedScreenshot,
      alt: '项目界面描述',
      caption: 'Feature · 这张截图展示的功能',
      frame: 'desktop', // desktop | phone | app-window
    },
  ],
},
```

`featured` 决定展开区域直接展示哪些图片，`View all` 灯箱会包含全部图片。未设置 `visual` 时，页面仍会显示统一的 `Preview Coming Soon` 玻璃占位框。

当前支持三种封面布局：

- `desktop-stack`：横向桌面应用 + 悬浮窗口
- `device-stack`：微信小程序/手机界面组合
- `app-stack`：窄版桌面窗口组合

没有 UI 的项目可以使用 `kind: 'workflow'`，用真实流程、文件树与技术产物替代虚构截图。

## 部署到 GitHub Pages

本项目配置为 GitHub 用户主页根地址：

```text
https://yi-san-spce.github.io
```

### 推荐方式：GitHub Actions

1. 在 GitHub 创建公开仓库 `yi-san-spce.github.io`。
2. 将本项目内容提交并推送到该仓库的 `main` 分支。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中将 Source 设为 **GitHub Actions**。
5. 推送后，`.github/workflows/deploy.yml` 会自动安装依赖、构建并发布网站。

如果部署到项目子路径而非用户根地址，需要同时修改 `vite.config.ts` 中的 `base` 和 `index.html` 中的 canonical/OG URL。

## 项目结构

```text
src/
├─ components/       # 导航、Hero、技能、项目、实验日志、时间线等组件
├─ data/             # 类型化作品集内容
├─ hooks/            # Intersection Observer 动画 Hook
├─ pages/            # 页面组合
├─ App.tsx
├─ index.css         # Tailwind 入口与 Liquid Glass 设计系统
└─ main.tsx
public/              # 静态资源与 favicon
.github/workflows/   # GitHub Pages 自动部署
```

## 可访问性

- 语义化页面结构与跳过导航链接
- 键盘可操作的项目详情和移动端导航
- 明确的焦点状态
- 支持 `prefers-reduced-motion`
- 外部链接和不可用的私有项目状态具有明确标签

## License

Portfolio content © yisan / 王奕. Source code may be reused for learning with attribution.
