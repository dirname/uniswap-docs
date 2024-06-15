---
id: overview
sidebar_position: 1
title: 概览
---

# Uniswap 子图

Uniswap 使用多个 [子图](https://thegraph.com/docs/about/introduction#what-the-graph-is) 来索引和组织来自 Uniswap 智能合约的数据。
这些子图托管在 The Graph 托管服务上，可用于查询 Uniswap 数据。

## 版本与生产端点

Uniswap 的每个版本都有其专用的子图，治理合约也有一个专门的子图。

每个子图都有一个用于查询数据的专用端点，以及一个在 [The Graph 探索器](https://thegraph.com/explorer/)上的页面，该页面公开了模式和可查询的字段。

##### V3

- 探索页面：https://thegraph.com/explorer/subgraph/uniswap/uniswap-v3
- GraphQL 端点：https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3
- 代码：https://github.com/Uniswap/uniswap-v3-subgraph

##### 治理

- 探索页面：https://thegraph.com/explorer/subgraph/ianlapham/governance-tracking
- GraphQL 端点：https://api.thegraph.com/subgraphs/name/ianlapham/governance-tracking
- 代码：https://github.com/ianlapham/uniswap-governance-subgraph

##### V2

- 探索页面：https://thegraph.com/explorer/subgraph/ianlapham/uniswapv2
- GraphQL 端点：https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2
- 代码：https://github.com/Uniswap/uniswap-v2-subgraph

##### V1

- 探索页面：https://thegraph.com/explorer/subgraph/ianlapham/uniswap
- GraphQL 端点：https://api.thegraph.com/subgraphs/name/ianlapham/uniswap
- 代码：https://github.com/graphprotocol/uniswap-subgraph