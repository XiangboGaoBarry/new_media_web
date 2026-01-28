# Xiangbo Gao's Personal Website

基于 React 和 Next.js 构建的个人主页。

## 快速开始

1. **环境**: Node.js `v22` + `yarn`
2. **安装**: `yarn install`
3. **运行**: `yarn dev`
4. **构建**: `yarn build && yarn start`

## 核心脚本

- `nvm install 22`: 安装 Node.js v22
- `yarn dev`: 启动开发服务器（包含 TS 编译）。
- `yarn build`: 生产环境构建。
- `yarn update:pubs`: 从 Google Scholar 更新论文列表（需在 `.env.local` 配置 `SERPAPI_KEY`）。
- `yarn clean`: 清理构建产物。
