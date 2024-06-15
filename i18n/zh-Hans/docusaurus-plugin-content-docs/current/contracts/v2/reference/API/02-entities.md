---
id: entities
title: 实体
---

实体定义了子图的模式，并表示可以查询的数据。每个实体中都有一组字段，用于存储与实体相关的信息。以下是 Uniswap 子图中可用实体的列表，以及对可用字段的描述。

要查看所有实体的交互式沙箱，请访问 [Graph Explorer](https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2)。

每个实体都用值类型定义，这将始终是一个基础 AssemblyScript 类型，或者由 Graph 的自定义 TypeScript 库提供的自定义类型。有关值类型的更多信息，请参阅[这里](https://thegraph.com/docs/en/developing/assemblyscript-api/#api-reference)。

### Uniswap 工厂

Uniswap 工厂实体负责存储所有 Uniswap 对的所有汇总信息。它可以用来查看关于总流动性、交易量、对的数量等统计数据。在子图中只有一个 UniswapFactory 实体。

| 字段名称         | 值类型 | 描述                                                         |
|------------------|--------|--------------------------------------------------------------|
| id               | ID     | 工厂地址                                                     |
| pairCount        | Int    | Uniswap 工厂创建的对数量                                     |
| totalVolumeUSD   | BigDecimal | 所有对上所有时间的美元交易量（美元是衍生出来的）       |
| totalVolumeETH   | BigDecimal | 所有对上所有时间的以太币交易量（以太币是衍生出来的） |
| totalLiquidityUSD | BigDecimal | 所有对上的总流动性，以衍生美元金额存储             |
| totalLiquidityETH | BigDecimal | 所有对上的总流动性，以衍生以太币金额存储        |
| txCount          | BigInt | 所有对上所有时间的交易数量                                  |

### 代币

为特定代币在所有包含该代币的对中存储汇总信息。

| 字段名称          | 值类型 | 描述                                                                                                    |
|-------------------|--------|---------------------------------------------------------------------------------------------------------|
| id                | ID     | 代币地址                                                                                                |
| symbol            | String | 代币符号                                                                                                |
| name              | String | 代币名称                                                                                                |
| decimals          | BigInt | 代币小数位数                                                                                            |
| tradeVolume       | BigDecimal | 所有对上所有时间的代币交易量                                             |
| tradeVolumeUSD    | BigDecimal | 所有对上所有时间的美元交易量（仅对于流动性高于最低阈值的代币） |
| untrackedVolumeUSD | BigDecimal | 所有对上所有时间的美元交易量（无最低流动性阈值）                       |
| txCount           | BigInt | 包含代币的所有对上所有时间的交易数量                                       |
| totalLiquidity    | BigDecimal | 所有对上作为流动性提供的代币总量                                         |
| derivedETH        | BigDecimal | 每个代币的以太币价值                                                       |

### 对

关于一对的信息。包括对内的每个代币的引用、交易量信息、流动性信息等。对实体镜像了对智能合约，同时也包含了使用情况的汇总信息。

| 字段名称             | 值类型           | 描述                                                                                                          |
|----------------------|------------------|----------------------------------------------------------------------------------------------------------------|
| id                   | ID               | 对合约地址                                                                                                   |
| factory              | UniswapFactory   | 引用到 Uniswap 工厂实体                                                                                    |
| token0               | Token            | 引用到存储在对合约中的 token0                                                                            |
| token1               | Token            | 引用到存储在对合约中的 token1                                                                            |
| reserve0             | BigDecimal       | token0 的储备量                                                                                              |
| reserve1             | BigDecimal       | token1 的储备量                                                                                              |
| totalSupply          | BigDecimal       | 分发给 LP 的流动性代币的总供应量                                                                          |
| reserveETH           | BigDecimal       | 对上总流动性，以一定数量的以太币存储                                                                     |
| reserveUSD           | BigDecimal       | 对上总流动性的美元金额                                                                                  |
| trackedReserveETH    | BigDecimal       | 只跟踪的总流动性（见跟踪金额）                                                                            |
| token0Price          | BigDecimal       | 每个 token1 的 token0 价格                                                                              |
| token1Price          | BigDecimal       | 每个 token0 的 token1 价格                                                                              |
| volumeToken0         | BigDecimal       | 在此对上交换的 token0 数量                                                                              |
| volumeToken1         | BigDecimal       | 在此对上交换的 token1 数量                                                                              |
| volumeUSD            | BigDecimal       | 此对上所有时间的总交换量，以美元存储（仅在美元流动性高于最低阈值时跟踪）                          |
| untrackedVolumeUSD   | BigDecimal       | 此对上所有时间的总交换量，以美元存储，无最低流动性阈值                                                   |
| txCount              | BigInt           | 此对上所有时间的交易数量                                                                                 |
| createdAtTimestamp   | BigInt           | 合约创建的时间戳                                                                                       |
| createdAtBlockNumber | BigInt           | 以太坊区块合同创建的时间                                                                                 |
| liquidityPositions   | [LiquidityPosition] | 流动性提供者数组，用作 LP 实体的参考                                                                       |

### 用户

为任何在 Uniswap 池中提供流动性的地址创建用户实体。这个实体可用于跟踪用户的开放仓位。LiquidyPosition 实体可以被引用以获取关于每个仓位的具体数据。

| 字段名称           | 值类型           | 描述                                    |
|--------------------|------------------|-----------------------------------------|
| id                 | ID               | 用户地址                                |
| liquidityPositions | [LiquidityPosition] | 用户所有开放的流动性仓位数组             |
| usdSwapped         | BigDecimal       | 总美元价值交换量                                                      |

### LiquidityPosition

这个实体用于存储关于用户流动性仓位的数据。这些信息，加上来自对本身的信息，可用于提供仓位大小、代币存款等。

| 字段名称                 | 值类型 | 描述                                                      |
|--------------------------|--------|-----------------------------------------------------------|
| id                       | ID     | 用户地址和对地址用破折号连接而成                           |
| user                     | User   | 引用到用户                                                |
| pair                     | Pair   | 引用到正在提供流动性的对                                  |
| liquidityTokenBalance    | BigDecimal | 为此仓位铸造的 LP 代币数量                               |

### 交易

交易实体为包含在 Uniswap 合约中的每次以太坊交易创建。这个子图跟踪 Uniswap 核心合约上的 Mint、Burn 和 Swap 事件。每笔交易包含 3 个数组，其中至少有一个数组的长度为 1。

| 字段名称   | 值类型 | 描述                                               |
|------------|--------|----------------------------------------------------|
| id         | ID     | 以太坊交易哈希                                     |
| blockNumber | BigInt | 交易被挖出的区块                                  |
| timestamp  | BigInt | 交易的时间戳                                       |
| mints      | [Mint] | 交易内的 Mint 事件数组，0 或更多                    |
| burns      | [Burn] | 交易内的 Burn 事件数组，0 或更多                    |
| swaps      | [Swap] | 交易内的 Swap 事件数组，0 或更多                    |

### Mint

每当 Uniswap 核心合约发出 Mint 事件时，都会创建 Mint 实体。Mint 实体存储有关事件的关键数据，如代币数量、发送交易的人、接收流动性的人等。这个实体可用于跟踪对上的流动性提供。

| 字段名称   | 值类型  | 描述                                                 |
|------------|---------|------------------------------------------------------|
| id         | ID      | 交易哈希加上交易中 mint 数组的索引                   |
| transaction| Transaction | 包含 Mint 的交易引用                                 |
| timestamp  | BigInt  | Mint 的时间戳，用于排序最近的流动性提供              |
| pair       | Pair    | 引用到对                                              |
| to         | Bytes   | 流动性代币的接收者                                   |
| liquidity  | BigDecimal | 铸造的流动性代币数量                                 |
| sender     | Bytes   | 发起流动性提供的地址                                 |
| amount0    | BigDecimal | 提供的 token0 数量                                   |
| amount1    | BigDecimal | 提供的 token1 数量                                   |
| logIndex   | BigInt  | 交易中事件发出的索引                                 |
| amountUSD  | BigDecimal | token0 数量加 token1 数量的衍生美元价值               |
| feeTo      | Bytes   | 费用接收者的地址（如果开启费用）                       |
| feeLiquidity | BigDecimal | 发送给费用接收者的流动性数量（如果开启费用）       |

### Burn

每当 Uniswap 核心合约发出 Burn 事件时，都会创建 Burn 实体。Burn 实体存储有关事件的关键数据，如代币数量、燃烧 LP 代币的人、接收代币的人等。这个实体可用于跟踪对上的流动性移除。

| 字段名称   | 值类型  | 描述                                               |
|------------|---------|----------------------------------------------------|
| id         | ID      | 交易哈希加上交易中 burn 数组的索引                 |
| transaction| Transaction | 包含 Burn 的交易引用                               |
| timestamp  | BigInt  | Burn 的时间戳，用于排序最近的流动性移除            |
| pair       | Pair    | 引用到对                                             |
| to         | Bytes   | 代币的接收者                                        |
| liquidity  | BigDecimal | 燃烧的流动性代币数量                                |
| sender     | Bytes   | 发起流动性移除的地址                                |
| amount0    | BigDecimal | 移除的 token0 数量                                  |
| amount1    | BigDecimal | 移除的 token1 数量                                  |
| logIndex   | BigInt  | 交易中事件发出的索引                                 |
| amountUSD  | BigDecimal | token0 数量加 token1 数量的衍生美元价值             |
| feeTo      | Bytes   | 费用接收者的地址（如果开启费用）                     |
| feeLiquidity | BigDecimal | 发送给费用接收者的代币数量（如果开启费用）         |

### Swap

为每对内的每次代币交换创建 Swap 实体。Swap 实体可用于获取交换大小（以代币和美元计）、发送者、接收者等。请参阅 Swap 概览页面以获取更多关于金额的信息。

| 字段名称   | 值类型  | 描述                                           |
|------------|---------|------------------------------------------------|
| id         | ID      | 交易哈希加上 Transaction swap 数组的索引       |
| transaction| Transaction | 包含 Swap 的交易引用                             |
| timestamp  | BigInt  | Swap 的时间戳，用于排序查找                     |
| pair       | Pair    | 引用到对                                          |
| sender     | Bytes   | 发起交换的地址                                   |
| amount0In  | BigDecimal | 出售的 token0 数量                               |
| amount1In  | BigDecimal | 出售的 token1 数量                               |
| amount0Out | BigDecimal | 收到的 token0 数量                               |
| amount1Out | BigDecimal | 收到的 token1 数量                               |
| to         | Bytes   | 输出代币的接收者                                  |
| logIndex   | BigInt  | 交易中的事件索引                                 |
| amountUSD  | BigDecimal | 以美元计的出售代币数量的衍生金额                 |

### Bundle

Bundle 作为以美元为单位的衍生以太币价格的全局存储。因为没有保证所有对都有共同的基础代币，所以一个美元价格的全局参考对于衍生其他美元值是有用的。Bundle 实体存储更新的以太币 <-> 稳定币对价格的加权平均值。这提供了以太币美元价格的强估计值，可以在子图的其他地方使用。

| 字段名称 | 值类型 | 描述                                           |
|----------|--------|------------------------------------------------|
| id       | ID     | 常量 1                                          |
| ethPrice | BigDecimal | 基于稳定币对的以太币美元衍生价格               |

## 历史实体

子图跟踪按天分组的汇总信息，以提供 Uniswap 日常活动的洞察。虽然[时间旅行查询](https://blocklytics.org/blog/ethereum-blocks-subgraph-made-for-time-travel/)可用于直接与过去的值进行比较，但查询分组数据要昂贵得多。出于这个原因，子图按天分桶跟踪信息，使用合约事件提供的时间戳。这些实体可用于查询某一天的总交易量、某一天的代币价格等。

对于每个 DayData 类型，每天都会创建一个新的实体。

### UniswapDayData

跟踪所有对上的数据，按天分组。

| 字段名称        | 值类型      | 描述                                                                       |
|-----------------|-------------|----------------------------------------------------------------------------|
| id              | ID          | 一天开始的 Unix 时间戳 / 86400，给出唯一的一天索引                         |
| date            | Int         | 一天开始的 Unix 时间戳                                                     |
| dailyVolumeETH  | BigDecimal  | 这一天所有对上的总交易量，存储为一定数量的以太币                          |
| dailyVolumeUSD  | BigDecimal  | 这一天所有对上的总交易量，存储为一定数量的美元                            |
| totalVolumeETH  | BigDecimal  | 所有时间所有对上到这一天为止的总交易量，以以太币计算                     |
| totalLiquidityETH | BigDecimal  | 到这一天为止所有对上在以太币中的总流动性                                 |
| totalVolumeUSD  | BigDecimal  | 所有时间所有对上到这一天为止的总交易量，以美元计算                     |
| totalLiquidityUSD | BigDecimal  | 到这一天为止所有对上在美元中的总流动性                                 |
| maxStored       | Int         | 用于存储流动性最高代币的引用，用于历史流动性图表                        |
| mostLiquidTokens | [TokenDayData!] | Uniswap 中流动性最高的代币                                             |
| txCount         | BigInt      | 这一天的交易数量                                                         |

### PairDayData

跟踪每天的对数据。

| 字段名称        | 值类型 | 描述                                                                                     |
|-----------------|--------|----------------------------------------------------------------------------------------|
| id              | ID     | 对合约地址和一天的 id（Unix 时间戳 / 86400 的一天开始）用破折号连接                   |
| date            | Int    | 一天开始的 Unix 时间戳                                                                  |
| pairAddress     | Bytes  | 对合约地址                                                                            |
| token0          | Token  | 引用到 token0                                                                         |
| token1          | Token  | 引用到 token1                                                                         |
| reserve0        | BigDecimal | token0 的储备量（在对上的每次交易期间更新）                                        |
| reserve1        | BigDecimal | token1 的储备量（在对上的每次交易期间更新）                                        |
| totalSupply     | BigDecimal | 分发给 LP 的流动性代币的总供应量                                                      |
| reserveUSD      | BigDecimal | token0 加上 token1 的储备量，以美元表示                                                |
| dailyVolumeToken0 | BigDecimal | 整天交换的 token0 总量                                                                |
| dailyVolumeToken1 | BigDecimal | 整天交换的 token1 总量                                                                |
| dailyVolumeUSD  | BigDecimal | 对内整天的总交易量                                                                    |
| dailyTxns       | BigInt | 整天对上的交易数量                                                                    |

### TokenDayData

跟踪所有包含代币的对中汇总的代币数据。

| 字段名称          | 值类型    | 描述                                                                                                                            |
|-------------------|-----------|------------------------------------------------------------------------------------------------------------------------------|
| id                | ID        | 代币地址和一天的 id（Unix 时间戳 / 86400 的一天开始）用破折号连接                                                              |
| date              | Int       | 一天开始的 Unix 时间戳                                                                                                        |
| token             | Token     | 引用到代币实体                                                                                                                |
| dailyVolumeToken  | BigDecimal | 整天在所有对上交换的代币数量                                                                                                |
| dailyVolumeETH    | BigDecimal | 整天在所有对上交换的代币数量，以一定数量的以太币表示                                                                        |
| dailyVolumeUSD    | BigDecimal | 整天在所有对上交换的代币数量，以一定数量的美元表示                                                                        |
| dailyTxns         | BigInt    | 整天在所有对上涉及此代币的交易数量                                                                                      |
| totalLiquidityToken | BigDecimal | 在所有对上作为流动性存入的代币总量                                                                                        |
| totalLiquidityETH  | BigDecimal | 在所有对上作为流动性存入的代币总量，以一定数量的以太币表示                                                                |
| totalLiquidityUSD  | BigDecimal | 在所有对上作为流动性存入的代币总量，以一定数量的美元表示                                                                |
| priceUSD          | BigDecimal | 以衍生美元表示的代币价格                                                                                              |
| maxStored         | Int       | 在流动性最高对中存入的代币数量 - 仅作为存储此代币最流动性对的参考                                                         |
| mostLiquidPairs   | [PairDayData] | 此代币流动性最高的对                                                                       |