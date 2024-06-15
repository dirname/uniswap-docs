---
id: overview
title: API 概览
---

本节解释了 Uniswap 子图以及如何与其交互。Uniswap 子图随时间索引 Uniswap 合约的数据。它整理了关于对、代币、整个 Uniswap 以及更多数据。每当在 Uniswap 上进行交易时，子图都会更新。子图运行在 [The Graph](https://thegraph.com/) 协议的托管服务上，并可以公开查询。

## 资源

[子图浏览器](https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2) - 用于查询数据和开发人员端点的沙盒。

[Uniswap V2 子图](https://github.com/Uniswap/uniswap-v2-subgraph) - 部署的子图的源代码。

## 使用

子图提供了 Uniswap 当前状态的快照，同时也跟踪历史数据。目前，它被用来为 [uniswap.info](https://uniswap.info/) 提供动力。**它不打算作为构建交易（应直接引用合约以获取最可靠实时数据）的数据源。**

## 发送查询

要了解有关查询子图的更多信息，请参阅 [The Graph 的文档](https://thegraph.com/docs/about/introduction)。

## 版本

[Uniswap V2 子图](https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2) 只追踪 Uniswap V2 的数据。对于 Uniswap V1 的信息，请参见 [V1 子图](https://thegraph.com/explorer/subgraph/graphprotocol/uniswap)。