---
id: computation
title: 计算
---

# getMarketDetails

此函数为传递的储备数据计算市场详情。市场被定义为 ETH&lt;&gt;ERC20、ERC20&lt;&gt;ETH 或 ERC20&lt;&gt;ERC20 的配对，其中第一个货币是输入，第二个是输出。必须为输入和输出货币指定储备。

- 在处理 ETH 的情况下，应将 `undefined` 作为储备数据传递。可以使用 [`getTokenReserves`](/sdk/1.0.0/reference/data/#getttokenreserves) 格式的 ERC20 储备，或者手动获取所需数据并传递进来。

- 汇率计算至 18 位小数精度。

## 函数签名

```typescript
export function getMarketDetails(
  optionalReservesInput: OptionalReserves,
  optionalReservesOutput: OptionalReserves
): MarketDetails
```

## 输入参数

| 参数                | 类型               | 描述                            |
| :------------------ | :----------------- | :------------------------------------- |
| optionalReservesInput  | `OptionalReserves` | 输入货币的储备数据。  |
| optionalReservesOutput | `OptionalReserves` | 输出货币的储备数据。 |

## 示例用法

```typescript
const reserves: ChainIdOrProvider = await getTokenReserves(tokenAddress)

const marketDetails: MarketDetails = getMarketDetails(undefined, reserves) // ETH<>ERC20

/*
{
  // 市场类型
  tradeType: 'ETH_TO_TOKEN',

  // 假设的 ETH 储备
  inputReserves: {
    token: {
      chainId: 1,
      address: 'ETH',
      decimals: 18
    }
  },

  // 归一化的代币储备
  outputReserves: <NormalizedReserves>,

  // 计算至 18 位小数精度的市场汇率
  marketRate: {
    rate: <BigNumber>,        // x 输出 / 1 输入
    rateInverted: <BigNumber> // x 输入 / 1 输出
  }
}
*/
```

# getTradeDetails

此函数为传递的市场数据计算交易详情。

- 如果传递的 \_tradeAmount 大于相关 Uniswap 交易所中的 ETH/代币数量，此函数会抛出错误。

- 交易金额必须以非十进制形式传递（例如，1 ETH 表示为 1000000000000000000 wei）。

## 函数签名

```typescript
export function getTradeDetails(
  tradeExact: TRADE_EXACT,
  _tradeAmount: BigNumberish,
  marketDetails: MarketDetails
): TradeDetails
```

## 输入参数

| 参数       | 类型            | 描述                                                                      |
| :--------- | :-------------- | :------------------------------------------------------------------------------- |
| tradeExact | `TRADE_EXACT`   | 输入或输出货币是否为确切数量。             |
| \_tradeAmount | `BigNumberish`  | 要购买/卖出的数量（取决于 tradeExact 的输出/输入货币）。 |
| marketDetails | `MarketDetails` | 市场详情。                                                                  |

## 示例用法

```typescript
const _purchaseAmount: BigNumber = new BigNumber('2.5')
const _decimals: number = 18
const tradeAmount: BigNumber = _purchaseAmount.multipliedBy(10 ** _decimals)
const marketDetails: MarketDetails = getMarketDetails(undefined, reserves) // ETH<>ERC20

// 使用 ETH 精确购买 2.5 个 18 位小数的 ERC20
const tradeDetails: TradeDetails = getTradeDetails(TRADE_EXACT.OUTPUT, tradeAmount, marketDetails)

/*
{
  marketDetailsPre: <MarketDetails>,

  marketDetailsPost: <MarketDetails>,

  tradeType: 'ETH_TO_TOKEN',

  tradeExact: 'OUTPUT',

  inputAmount: {
    token: <Token>,
    amount: <BigNumber>
  },

  outputAmount: {
    token: <Token>,
    amount: <BigNumber>
  },

  // 执行汇率计算至 18 位小数精度
  executionRate: {
    rate: <BigNumber>         // x 输出 / 1 输入
    rateInverted: <BigNumber> // x 输入 / 1 输出
  },

  // 交易前后的市场汇率之间的滑点，以基点表示，计算至 18 位小数精度
  marketRateSlippage: <BigNumber>,

  // 执行汇率与交易前市场汇率之间的滑点，以基点表示，计算至 18 位小数精度
  executionRateSlippage: <BigNumber>
}
*/
```