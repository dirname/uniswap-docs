---
id: quick-start
title: SDK 快速入门
---

Uniswap SDK 的存在是为了帮助开发者在 Uniswap 基础上构建应用。它设计用于任何可以执行 JavaScript 的环境（比如网站，节点脚本等）。它简单到足以在黑客马拉松项目中使用，同时也足够强大以驱动生产级应用。

# 安装

使用 SDK 最简便的方式是通过 [npm](https://github.com/Uniswap/uniswap-v2-sdk)。要在你的项目中安装它，只需运行 `yarn add @uniswap/v2-sdk`（或 `npm install @uniswap/v2-sdk`）。这也会将 V2 和 V3 SDK 共用的 sdk-core 包以及 ethers 作为依赖一并安装。

# 使用

要在你的应用中运行 SDK 的代码，根据你所处环境支持的方式使用 `import` 或 `require` 语句。请注意，接下来的指南会使用 ES6 语法。

## ES6 (import)

```typescript
import { ChainId } from '@uniswap/sdk-core'
import { Pair } from '@uniswap/v2-sdk'
console.log(`主网的 chainId 是 ${ChainId.MAINNET}。`)
```

## CommonJS (require)

```typescript
const CORE = require('@uniswap/sdk-core')
const V2_SDK = require('@uniswap/v2-sdk')
console.log(`主网的 chainId 是 ${CORE.ChainId.MAINNET}。`)
```

# 参考

SDK 的全面参考资料公开发布在 [Uniswap Labs Github](https://github.com/Uniswap) 上。