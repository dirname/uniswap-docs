---
id: trade
title: 交易
---

```typescript
constructor(route: Route, amount: CurrencyAmount, tradeType: TradeType)
```

交易实体表示一个完全指定的沿着特定路径的交易。此实体提供了创建路由器交易所需的所有信息。

# 示例

```typescript
import { ChainId, Token, CurrencyAmount, TradeType } from '@uniswap/sdk-core'
import { Pair, Trade, Route }

const HOT = new Token(ChainId.MAINNET, '0xc0FFee0000000000000000000000000000000000', 18, 'HOT', 'Caffeine')
const NOT = new Token(ChainId.MAINNET, '0xDeCAf00000000000000000000000000000000000', 18, 'NOT', 'Caffeine')
const HOT_NOT = new Pair(CurrencyAmount.fromRawAmount(HOT, '2000000000000000000'), CurrencyAmount.fromRawAmount(NOT, '1000000000000000000'))
const NOT_TO_HOT = new Route([HOT_NOT], NOT, HOT)

const trade = new Trade(NOT_TO_HOT, CurrencyAmount.fromRawAmount(NOT, '1000000000000000'), TradeType.EXACT_INPUT)
```

# 属性

## 路径

```typescript
route: Route
```

路径的[路径](route#path)属性应作为路径参数传递给路由器函数。

## tradeType

```typescript
tradeType: TradeType
```

`TradeType.EXACT_INPUT`对应于`swapExact*For*`路由器函数。`TradeType.EXACT_OUTPUT`对应于`swap*ForExact*`路由器函数。

## inputAmount

```typescript
inputAmount: CurrencyAmount
```

对于确切输入交易，此值应作为amountIn传递给路由器函数。对于确切输出交易，此值应乘以大于1的因子，代表滑点容忍度，并作为amountInMax传递给路由器函数。

## outputAmount

```typescript
outputAmount: CurrencyAmount
```

对于确切输出交易，此值应作为amountOut传递给路由器函数。对于确切输入交易，此值应乘以小于1的因子，代表滑点容忍度，并作为amountOutMin传递给路由器函数。

## executionPrice

```typescript
executionPrice: Price
```

交易将执行的平均价格。

## priceImpact

```typescript
priceImpact: Percent
```

交易前中间价格与交易执行价格之间的百分比差异。

# 方法

在以下两个方法的上下文中，滑点指的是实际价格与交易`executionPrice`之间的百分比差异。

## minimumAmountOut（自2.0.4版本起）

```typescript
minimumAmountOut(slippageTolerance: Percent): CurrencyAmount
```

根据滑点容忍度返回从交易中应收到的输出代币的最小金额。

在构造类型为`EXACT_INPUT`的交易时非常有用。

## maximumAmountIn（自2.0.4版本起）

```typescript
maximumAmountIn(slippageTolerance: Percent): CurrencyAmount
```

根据滑点容忍度返回应在交易上花费的输入代币的最大金额。

在构造类型为`EXACT_OUTPUT`的交易时非常有用。

## worstExecutionPrice

返回考虑滑点容忍度后的执行价格

```typescript
worstExecutionPrice(slippageTolerance: Percent): Price
```

# 静态方法

这些静态方法提供了从一对列表构建理想交易的方法。
请注意，这些方法不会在路径间进行任何聚合，因为路径是线性的。
通过组合不同路径上的多个交易，可能会获得更好的价格。

## exactIn

使用给定的输入金额和路径构建确切输入交易。

```typescript
Trade.exactIn(route: Route, amountIn: CurrencyAmount): Trade
```

## exactOut

使用给定的输出金额和路径构建确切输出交易

```typescript
Trade.exactOut(route: Route, amountOut: CurrencyAmount): Trade
```

## bestTradeExactIn

给定一对列表和固定的输入金额，返回前`maxNumResults`个交易，这些交易从输入代币金额到输出代币，最多进行`maxHops`次跳转。
请注意，这不考虑聚合，因为路径是线性的。通过将输入金额分配到多个路径上，可能存在更优的路径。

```typescript
Trade.bestTradeExactIn(
    pairs: Pair[],
    nextAmountIn: CurrencyAmount,
    currencyOut: Token,
    { maxNumResults = 3, maxHops = 3 }: BestTradeOptions = {}): Trade[]
```

## bestTradeExactOut

类似于上述方法，但针对固定输出金额，给定一对列表，
以及固定的输出金额，返回前`maxNumResults`个交易，这些交易从输入代币到输出代币金额，最多进行`maxHops`次跳转。
请注意，这不考虑聚合，因为路径是线性的。
通过将输入金额分配到多个路径上，可能存在更优的路线。

```typescript
Trade.bestTradeExactOut(
    pairs: Pair[],
    currencyIn: Token,
    nextAmountOut: CurrencyAmount,
    { maxNumResults = 3, maxHops = 3 }: BestTradeOptions = {}): Trade[]
```