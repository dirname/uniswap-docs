---
id: pair
title: 对
---

```typescript
constructor(tokenAmountA: CurrencyAmount, tokenAmountB: CurrencyAmount)
```

对实体表示具有每对代币余额的 Uniswap 对。

# 示例

```typescript
import { Pair } from '@uniswap/sdk-core'
import {ChainId, Token, CurrencyAmount } from '@uniswap/v2-sdk'

const HOT = new Token(ChainId.MAINNET, '0xc0FFee0000000000000000000000000000000000', 18, 'HOT', 'Caffeine')
const NOT = new Token(ChainId.MAINNET, '0xDeCAf00000000000000000000000000000000000', 18, 'NOT', 'Caffeine')

const pair = new Pair(CurrencyAmount.fromRawAmount(HOT, '2000000000000000000'), CurrencyAmount.fromRawAmount(NOT, '1000000000000000000'))
```

# 静态方法

## getAddress

```typescript
getAddress(tokenA: Token, tokenB: Token): string
```

为传递的 [代币](token) 计算对地址。参阅 [对地址](../../../contracts/v2/guides/smart-contract-integration/getting-pair-addresses)。

# 属性

## liquidityToken

```typescript
liquidityToken: Token
```

一个代表对流动性代币的 Token。参阅 [对（ERC-20）](../../../contracts/v2/reference/smart-contracts/pair-erc-20)。

## token0

```typescript
token0: Token
```

参阅 [Token0](../../../contracts/v2/reference/smart-contracts/pair#token0)。

## token1

```typescript
token1: Token
```

参阅 [Token1](../../../contracts/v2/reference/smart-contracts/pair#token1)。

## reserve0

```typescript
reserve0: CurrencyAmount
```

token0 的储备金。

## reserve1

```typescript
reserve1: CurrencyAmount
```

token1 的储备金。

# 方法

## reserveOf

```typescript
reserveOf(token: Token): CurrencyAmount
```

根据是传递了 token0 还是 token1，返回 reserve0 或 reserve1。

## getOutputAmount

```typescript
getOutputAmount(inputAmount: CurrencyAmount): [CurrencyAmount, Pair]
```

用于精确输入量的定价函数。基于当前储备金和如果执行交易后将存在的新对，返回最大输出量。

## getInputAmount

```typescript
getInputAmount(outputAmount: CurrencyAmount): [CurrencyAmount, Pair]
```

用于精确输出量的定价函数。基于当前储备金和如果执行交易后将存在的新对，返回最小输入量。

## getLiquidityMinted

```typescript
getLiquidityMinted(totalSupply: CurrencyAmount, tokenAmountA: CurrencyAmount, tokenAmountB: CurrencyAmount): CurrencyAmount
```

从给定的 token0 和 token1 数量计算出确切的流动性代币铸造量。

- 必须在链上查找 totalSupply。
- 从这个函数返回的值 _不能_ 作为 getLiquidityValue 的输入。

## getLiquidityValue

```typescript
getLiquidityValue(
  token: Token,
  totalSupply: CurrencyAmount,
  liquidity: CurrencyAmount,
  feeOn: boolean = false,
  kLast?: BigintIsh
): CurrencyAmount
```

计算给定的流动性代币数量代表的确切 token0 或 token1 数量。

- 必须在链上查找 totalSupply。
- 如果协议费用开启，feeOn 必须设置为 true，并且必须从链上查找提供 kLast。
- 从这个函数返回的值 _不能_ 作为 getLiquidityMinted 的输入。