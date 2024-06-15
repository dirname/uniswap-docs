---
id: queries
title: 查询
---

可以使用子图来查询有关 Uniswap、交易对、代币、交易、用户等的重要信息。本页面将提供常见查询的示例。

要尝试这些查询并运行您自己的查询，请访问 [子图沙箱](https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2)。

### 全局数据

为了查询全局数据，您可以传入 Uniswap 工厂地址，并从可用字段中选择。

#### 全局统计

所有时间内的美元计价交易量、总流动性（以美元计）、所有时间内的交易数量。

```
{
 uniswapFactory(id: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"){
   totalVolumeUSD
   totalLiquidityUSD
   txCount
 }
}
```

#### 全局历史查找

为了获取过去状态的快照，使用 The Graph 的区块查询功能，并在之前的区块进行查询。参阅此帖子以获取更多关于 [从时间戳获取区块编号](https://blocklytics.org/blog/ethereum-blocks-subgraph-made-for-time-travel/) 的信息。这可以用来计算像24小时交易量这样的数据。

```
{
 uniswapFactory(id: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", block: {number: 10291203}){
   totalVolumeUSD
   totalLiquidityUSD
   txCount
 }
}
```

### 交易对数据

#### 交易对概览

使用常用值获取当前交易对状态的快照。此示例获取 DAI/WETH 交易对。

```
{
 pair(id: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"){
     token0 {
       id
       symbol
       name
       derivedETH
     }
     token1 {
       id
       symbol
       name
       derivedETH
     }
     reserve0
     reserve1
     reserveUSD
     trackedReserveETH
     token0Price
     token1Price
     volumeUSD
     txCount
 }
}
```

#### Uniswap 中的所有交易对

目前，The Graph 将每个查询的实体返回数量限制为1000。为了获取 Uniswap 上的所有交易对，使用循环和 graphql 跳过查询来分批获取1000个交易对。查询将如下所示（其中 skip 是传递到查询中的某个递增变量）。

```
{
 query pairs($skip: Int!) {
   pairs(first: 1000, skip: $skip) {
     id
   }
 }
}
```

#### 流动性最强的交易对

按流动性排序以获取 Uniswap 中流动性最强的交易对。

```
{
 pairs(first: 1000, orderBy: reserveUSD, orderDirection: desc) {
   id
 }
}
```

#### 交易对内的最近交换

通过获取 Swap 事件并传入交易对地址来获取交易对上最后100次交换。你通常还会想要代币信息。

```
{
swaps(orderBy: timestamp, orderDirection: desc, where:
 { pair: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11" }
) {
     pair {
       token0 {
         symbol
       }
       token1 {
         symbol
       }
     }
     amount0In
     amount0Out
     amount1In
     amount1Out
     amountUSD
     to
 }
}
```

#### 每日交易对汇总

日数据对于构建围绕实体的图表和历史视图非常有用。为了获取关于交易对的每日统计数据，按时间戳范围查询日实体。此查询获取给定 Unix 时间戳后 DAI/WETH 交易对的前100天的数据。

```
{
 pairDayDatas(first: 100, orderBy: date, orderDirection: asc,
   where: {
     pairAddress: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
     date_gt: 1592505859
   }
 ) {
     date
     dailyVolumeToken0
     dailyVolumeToken1
     dailyVolumeUSD
     reserveUSD
 }
}
```

### 代币数据

使用代币合约地址作为 ID 来获取代币数据。代币数据会跨包含该代币的所有交易对进行聚合。Uniswap 中包含的任何代币都可以被查询。

#### 代币概览

获取 Uniswap 中代币的当前统计信息。此查询获取 DAI 的当前统计信息。
allPairs 字段获取 DAI 包含的前200个交易对，按派生 USD 流动性排序。

```
{
 token(id: "0x6b175474e89094c44da98b954eedeac495271d0f"){
   name
   symbol
   decimals
   derivedETH
   tradeVolumeUSD
   totalLiquidity
 }
}
```

#### Uniswap 中的所有代币

与获取所有交易对类似（见上文），你可以查询 Uniswap 中的所有代币。因为 The Graph 服务将返回大小限制为1000个实体，所以使用 graphql 跳过查询。（请注意，此查询在图形沙箱中不会起作用，更类似于传递给某些 graphql 中间件（如 [Apollo](https://www.apollographql.com/)）的查询结构。）

```
{
 query tokens($skip: Int!) {
   tokens(first: 1000, skip: $skip) {
     id
     name
     symbol
   }
 }
}
```

#### 代币交易

为了获取包含代币的交易，您需要先获取一个数组，其中包含代币所包含的交易对（这可以通过 Token 实体上的 allPairs 字段完成。）一旦你有了包含代币的交易对数组，在交易查找时过滤这个数组。

此查询获取涉及 DAI 的最新30次铸币、交换和销毁。allPairs 数组可能看起来像这样，其中我们包括 DAI/WETH 交易对地址和 DAI/USDC 交易对地址。

```
allPairs = [
 "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
 "0xae461ca67b15dc8dc81ce7615e0320da1a9ab8d5"
]
```

```
query($allPairs: [String!]) {
 mints(first: 30, where: { pair_in: $allPairs }, orderBy: timestamp, orderDirection: desc) {
   transaction {
     id
     timestamp
   }
   to
   liquidity
   amount0
   amount1
   amountUSD
 }
 burns(first: 30, where: { pair_in: $allPairs }, orderBy: timestamp, orderDirection: desc) {
   transaction {
     id
     timestamp
   }
   to
   liquidity
   amount0
   amount1
   amountUSD
 }
 swaps(first: 30, where: { pair_in: $allPairs }, orderBy: timestamp, orderDirection: desc) {
   transaction {
     id
     timestamp
   }
   amount0In
   amount0Out
   amount1In
   amount1Out
   amountUSD
   to
 }
}
```

#### 代币每日汇总

与交易对和全局每日查找类似，代币也有可以查询的每日实体。此查询获取 DAI 的每日信息。请注意，您可能希望按升序排序，以便在返回数组中接收从最旧到最新的日期。

```
{
 tokenDayDatas(orderBy: date, orderDirection: asc,
  where: {
    token: "0x6b175474e89094c44da98b954eedeac495271d0f"
  }
 ) {
    id
    date
    priceUSD
    totalLiquidityToken
    totalLiquidityUSD
    totalLiquidityETH
    dailyVolumeETH
    dailyVolumeToken
    dailyVolumeUSD
 }
}
```

### ETH 价格

您可以使用 Bundle 实体来查询基于稳定币加权平均的 Uniswap 中 ETH 当前的美元价格。

```
{
 bundle(id: "1" ) {
   ethPrice
 }
}
```