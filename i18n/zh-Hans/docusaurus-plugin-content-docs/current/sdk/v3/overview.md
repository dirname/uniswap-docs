---
id: overview
sidebar_position: 1
title: 概览
---

# Uniswap V3 SDK

> **欢迎来到 V3 Uniswap SDK！**

Uniswap V3 SDK 提供了抽象层，帮助你在 TypeScript/JavaScript 环境中（如网站、节点脚本）与 Uniswap V3 智能合约进行交互。它利用了 [**核心 SDK**](../core/overview.md)，以访问在 Uniswap SDKs 中通用的抽象层。借助 SDK，你可以使用辅助库来操作从 [EVM](https://ethereum.org/en/developers/docs/evm/) 查询到的数据，这些库帮助你处理数据建模、防止舍入误差和执行编译时类型检查等需求。

开始前，我们建议先阅读我们的 [**指南**](./guides/01-background.md)，其中包括 [可运行示例](https://github.com/Uniswap/examples/tree/main/v3-sdk) 和核心用法的教程。这些指南将帮助你更好地理解如何使用 SDK，并将其集成到你的应用中。

对于 SDK 的完整文档，请参阅 [**技术参考**](./reference/overview.md)。

## 安装

为了与 V3 SDK 进行交互，我们推荐通过 npm 进行安装：

```bash
npm i --save @uniswap/v3-sdk
npm i --save @uniswap/sdk-core
```

## 开发者链接

- [**V3 SDK Github 仓库**](https://github.com/Uniswap/v3-sdk)
- [**核心 SDK Github 仓库**](https://github.com/Uniswap/sdk-core)
- [**V3 SDK NPM 包**](https://www.npmjs.com/package/@uniswap/v3-sdk)

[![单元测试](https://github.com/Uniswap/uniswap-v3-sdk/workflows/Unit%20Tests/badge.svg)](https://github.com/Uniswap/uniswap-v3-sdk/actions?query=workflow%3A%22Unit+Tests%22)
[![代码规范](https://github.com/Uniswap/uniswap-v3-sdk/workflows/Lint/badge.svg)](https://github.com/Uniswap/uniswap-v3-sdk/actions?query=workflow%3ALint)
[![npm 版本](https://img.shields.io/npm/v/@uniswap/v3-sdk/latest.svg)](https://www.npmjs.com/package/@uniswap/v3-sdk/v/latest)
[![npm 打包大小（作用域版本）](https://img.shields.io/bundlephobia/minzip/@uniswap/v3-sdk/latest.svg)](https://bundlephobia.com/result?p=@uniswap/v3-sdk@latest)
[![Discord](https://img.shields.io/badge/discord-join%20chat-blue.svg)](https://discord.com/channels/597638925346930701/607978109089611786)