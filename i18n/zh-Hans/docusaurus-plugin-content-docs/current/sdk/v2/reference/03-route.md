---
id: route
title: 路径
---

```typescript
constructor(pairs: Pair[], input: Token, output: Token)
```

路径实体表示一个或多个有序的 Uniswap 对，具有从输入代币到输出代币的完全指定路径。

# 示例

```typescript
import { ChainId, Token, CurrencyAmount } from '@uniswap/sdk-core'
import { Pair, Route } from '@uniswap/v2-sdk'

const HOT = new Token(ChainId.MAINNET, '0xc0FFee0000000000000000000000000000000000', 18, 'HOT', 'Caffeine')
const NOT = new Token(ChainId.MAINNET, '0xDeCAf00000000000000000000000000000000000', 18, 'NOT', 'Caffeine')
const HOT_NOT = new Pair(CurrencyAmount.fromRawAmount(HOT, '2000000000000000000'), CurrencyAmount.fromRawAmount(NOT, '1000000000000000000'))

const route = new Route([HOT_NOT], NOT, HOT)
```

# 属性

## pairs

```typescript
pairs: Pair[]
```

构成路径的有序对。

## path

```typescript
path: Token[]
```

从输入代币到输出代币的完整路径。

## input

```typescript
input: Token
```

输入代币。

## output

```typescript
output: Token
```

输出代币。

## midPrice

```typescript
midPrice: Price
```

返回沿路径的当前中间价格。