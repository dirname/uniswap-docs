---
id: getting-started
title: 快速入门
sidebar_position: 1
---

[Uniswap SDK](https://github.com/Uniswap/uniswap-sdk/tree/v1) 的设计目的是简化将 Uniswap 整合到您项目中的每一个方面。它用 [TypeScript](https://www.typescriptlang.org) 编写，拥有一个 [全面的测试套件](https://github.com/Uniswap/uniswap-sdk/tree/v1/src/__tests__)，使用 [bignumber.js](https://github.com/MikeMcl/bignumber.js) 进行数学运算，并包含一个可选的数据获取模块，该模块依赖于 [ethers.js](https://github.com/ethers-io/ethers.js/)。

SDK 被构建得非常易于使用，同时功能丰富。它提供了不同级别的抽象，几乎适用于任何场景，从黑客马拉松项目到生产级应用。

# 概览

SDK 分为几个模块化组件，执行范围明确的任务：

- [数据](/sdk/1.0.0/reference/data) - 从区块链获取 Uniswap 数据
- [计算](/sdk/1.0.0/reference/computation) - 使用区块链数据计算市场和交易特定的统计信息
- [格式化](/sdk/1.0.0/reference/format) - 格式化数据以供显示
- [编排](/sdk/1.0.0/reference/orchestration) - 提供命名的抽象函数，无缝组合低级别的数据和计算相关函数
- [交易](/sdk/1.0.0/reference/transact) - 准备计算出的交易以执行 Uniswap 智能合约
- [常量](/sdk/1.0.0/reference/constants) - 导出 SDK 中使用的各种有用常量

此外，它还导出了许多自定义类型：

- [类型](/sdk/1.0.0/reference/types) - 导出 SDK 使用的所有类型

# 安装

要开始使用 SDK，只需将其安装到您的项目中...

```bash
yarn add @uniswap/sdk
```

...导入一些函数...

```javascript
import { ... } from '@uniswap/sdk'
```

...然后深入阅读其余文档了解更多！