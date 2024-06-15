---
id: overview
sidebar_position: 1
title: 概览
---

# `web3-react`

> **欢迎使用 `web3-react`！**

`web3-react` 提供了抽象层，帮助你将 dApp 连接到 web3 连接器，并公开了与这些连接进行交互的方法。它目前支持以下钱包的连接：
- 网络
- 注入式钱包（如 MetaMask）
- Gnosis 安全
- Coinbase 钱包
- WalletConnect 钱包

开始前，我们建议你查看我们的 [指南](./guides/01-setting-up.md)，其中包含 [可运行示例](https://github.com/Uniswap/examples/tree/main/web3-react) 和核心用法的讲解。这些指南将帮助你更好地理解如何使用 `web3-react` 并将其集成到你的应用中。

:::info
本指南使用的是 `web3-react` 版本 8，这是一个测试版。
:::

## 安装

`web3-react` 包含多个包，每个包提供不同的功能。[核心](https://www.npmjs.com/package/@web3-react/core) 包暴露了用于与 web3 连接器交互的方法，[类型](https://www.npmjs.com/package/@web3-react/types) 包声明了有用的类型，而其他包则为了与不同连接器的交互而安装。

为了与 `web3-react` 进行交互，我们推荐通过 npm 安装：

```bash
npm install --save @web3-react/core
```

或使用 yarn：

```bash
yarn add @web3-react/core
```

## 开发者链接

- [**`web3-react` 在 Github 上**](https://github.com/Uniswap/web3-react)

[![npm 版本](https://img.shields.io/npm/v/@web3-react/core/latest.svg)](https://www.npmjs.com/package/@web3-react/core/v/latest)
[![npm 打包大小（作用域版本）](https://img.shields.io/bundlephobia/minzip/@web3-react/core/latest.svg)](https://bundlephobia.com/result?p=@web3-react/core@latest)
[![Discord](https://img.shields.io/badge/discord-加入聊天-blue.svg)](https://discord.com/channels/597638925346930701/607978109089611786)