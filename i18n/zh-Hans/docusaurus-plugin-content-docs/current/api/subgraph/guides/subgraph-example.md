---
id: examples
title: 查询示例
sidebar_position: 3
---

# 子图查询示例

本文档将教你如何通过在子图上编写 GraphQL 查询来查询 Uniswap V3 的分析数据。你可以获取如下数据点：

- [某个仓位的已收取费用](#一般仓位数据)
- [池子的当前流动性](#池子数据)
- [特定日期的交易量](#历史全局数据)

等等。以下是一些示例查询。要运行一个查询，复制并粘贴到 [v3 探索器](https://thegraph.com/hosted-service/subgraph/uniswap/uniswap-v3) 中以获取最新数据。

## 全局数据

全局数据是指关于 Uniswap v3 协议整体的数据点。一些全局数据点的例子是协议中锁定的总价值、部署的总池数或总交易次数。因此，要查询全局数据，你必须传入 Uniswap V3 工厂地址 `0x1F98431c8aD98523631AE4a59f267346ea31F984` 并选择所需的字段。参考完整的 [工厂模式](https://github.com/Uniswap/v3-subgraph/blob/main/schema.graphql#L1) 来查看所有可能的字段。

### 当前全局数据

一个示例查询总池数、交易数和以美元和 ETH 计价的总交易量：

```graphql
{
  factory(id: "0x1F98431c8aD98523631AE4a59f267346ea31F984" ) {
    poolCount
    txCount
    totalVolumeUSD
    totalVolumeETH
  }
}
```

### 历史全局数据

你也可以通过指定区块号来查询历史数据。

```graphql
{
  factory(id: "0x1F98431c8aD98523631AE4a59f267346ea31F984", block: {number: 13380584}){
    poolCount
    txCount
    totalVolumeUSD
    totalVolumeETH
  }
}
```

## 池子数据

为了获取关于某个池子的数据，传入池子地址。参考完整的 [池子模式](https://github.com/Uniswap/v3-subgraph/blob/main/schema.graphql#L75)，并调整查询字段以检索你想要的数据点。

### 一般池子查询

下面的查询返回 ETH-USDC 池的 feeTier、现货价格和流动性。

```graphql
{
  pool(id: "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8") {
    tick
    token0 {
      symbol
      id
      decimals
    }
    token1 {
      symbol
      id
      decimals
    }
    feeTier
    sqrtPrice
    liquidity
  }
}
```

### 所有可能的池子

你一次可以查询的最大项目数是 1000。因此，为了获取所有可能的池子，你可以使用 skip 变量进行迭代。要获取超过前 1000 个的池子，你也可以设置 skip 如下所示。

### 跳过前 1000 个池子

这个查询设置了 skip 值，并返回了前 10 个响应，跳过了前 1000 个。

```graphql
{
  pools(first:10, skip:1000){
    id
    token0 {
      id
      symbol
    }
    token1 {
      id
      symbol
    }
  }
}
```

### 创建一个 skip 变量

下一个查询设置了一个 skip 变量。在你选择的语言和环境中，你可以遍历循环，每次查询获取 1000 个池子，并持续调整 skip 为 1000，直到所有池子响应都返回。

检查我们接口的 [这个示例](https://github.com/Uniswap/v3-info/blob/770a05dc1a191cf229432ebc43c1f2ceb3666e3b/src/data/pools/chartData.ts#L14)，它为 poolDayData 做了类似的事情。

注意：这个查询在图形探索器中不会工作，更类似于你传递给像 Apollo 这样的 GraphQL 中间件的查询结构。

```graphql
query pools( $skip: Int!) {
    pools(
      first: 1000
      skip: $skip
      orderDirection: asc
    ) {
      id
      sqrtPrice
      token0 {
        id
      }
      token1 {
        id
      }
    }
  }
```

### 流动性最强的池子

检索流动性最强的前 1000 个池子。你可以用类似的设置按其他变量排序，如交换次数或交易量。

```graphql
{
 pools(first: 1000, orderBy: liquidity, orderDirection: desc) {
   id
 }
}
```

### 池子每日聚合

此查询返回自给定时间戳以来的前 10 天内 UNI-ETH 池的每日聚合数据。

```graphql
{
  poolDayDatas(first: 10, orderBy: date, where: {
    pool: "0x1d42064fc4beb5f8aaf85f4617ae8b3b5b8bd801",
    date_gt: 1633642435
  } ) {
    date
    liquidity
    sqrtPrice
    token0Price
    token1Price
    volumeToken0
    volumeToken1
  }
}
```

## 交换数据

### 一般交换数据

要查询关于特定交换的数据，输入交易哈希 + "#" + 交易数组中的交换索引。
这是完整的 [交换模式](https://github.com/Uniswap/v3-subgraph/blob/main/schema.graphql#L353) 的参考。

这个查询获取关于特定交换的发送者、接收者、金额、交易数据和时间戳的数据。

```graphql
{
   swap(id: "0x000007e1111cbd97f74cfc6eea2879a5b02020f26960ac06f4af0f9395372b64#66785") {
    sender
    recipient
    amount0
    amount1
    transaction {
      id
      blockNumber
      gasUsed
      gasPrice
    }
    timestamp
    token0 {
      id
      symbol
    }
    token1 {
      id
      symbol
    }
   }
 }
```

### 池子内的最近交换

你可以设置 `where` 字段，根据池子地址过滤交换数据。这个例子获取 USDC-USDT 池的多次交换数据，按时间戳排序。

```graphql
{
swaps(orderBy: timestamp, orderDirection: desc, where:
 { pool: "0x7858e59e0c01ea06df3af3d20ac7b0003275d4bf" }
) {
  pool {
    token0 {
      id
      symbol
    }
    token1 {
      id
      symbol
    }
  }
  sender
  recipient
  amount0
  amount1
 }
}
```

## 代币数据

输入代币合约地址以获取代币数据。任何存在于至少一个 Uniswap V3 池中的代币都可以被查询。输出将在所有包含该代币的 v3 池中汇总数据。

### 一般代币数据

这查询 UNI 代币的小数位数、符号、名称、池数和美元计价的交易量。参考完整的 [代币模式](https://github.com/Uniswap/v3-subgraph/blob/main/schema.graphql#L38)，以查询所有可能的字段。

```graphql
{
  token(id:"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984") {
    symbol
    name
    decimals
    volumeUSD
    poolCount
  }
}
```

### 代币每日聚合

你可以获取特定代币在 24 小时周期内的聚合数据。这个查询获取 UNI 代币 10 天的 24 小时交易量数据，从最旧到最新排序。

```graphql
{
  tokenDayDatas(first: 10, where: {token: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"}, orderBy: date, orderDirection: asc) {
    date
    token {
      id
      symbol
    }
    volumeUSD
  }
}
```

### 所有代币

与检索所有池子类似，你可以使用 skip 来获取所有代币。
注意：这个查询在图形沙箱中不会工作，更类似于你传递给像 Apollo 这样的 GraphQL 中间件的查询结构。

```graphql
query tokens($skip: Int!) {
  tokens(first: 1000, skip: $skip) {
    id
    symbol
    name
  }
}
```

## 仓位数据

### 一般仓位数据

为了获取关于特定仓位的数据，输入 NFT tokenId。这查询 tokenId 为 3 的仓位的 token0 和 token1 的已收取费用和当前流动性。参考完整的 [仓位模式](https://github.com/Uniswap/v3-subgraph/blob/main/schema.graphql#L192) 来查看所有字段。

```graphql
{
  position(id:3) {
    id
    collectedFeesToken0
    collectedFeesToken1
    liquidity
    token0 {
      id
      symbol
    }
    token1
    {
      id
      symbol
    }
  }
}
```

## 贡献

使用 Uniswap v3 子图可以执行许多其他查询，包括与 ticks、mints、positions 和 burns 相关的数据。再次，你可以在这里参考完整的模式 [这里](https://github.com/Uniswap/v3-subgraph/blob/main/schema.graphql)。如果你想建议更多示例查询来展示，可以在 [discord](https://discord.com/invite/uniswap) 的 #dev-chat 频道下提出一些建议，或者通过向文档仓库提交拉取请求来[贡献](../../../../CONTRIBUTING.md)你自己的查询。