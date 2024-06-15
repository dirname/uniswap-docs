---
id: overview
sidebar_position: 1
title: 概览
---

## 目录

### 枚举

- [Rounding](enums/Rounding.md)
- [ChainId](enums/ChainId.md)
- [NativeCurrencyName](enums/NativeCurrencyName.md)
- [TradeType](enums/TradeType.md)

### 类

- [CurrencyAmount](classes/CurrencyAmount.md)
- [Ether](classes/Ether.md)
- [Fraction](classes/Fraction.md)
- [NativeCurrency](classes/NativeCurrency.md)
- [Percent](classes/Percent.md)
- [Price](classes/Price.md)
- [Token](classes/Token.md)

### 类型别名

- [BigintIsh](modules.md#bigintish)
- [Currency](modules.md#currency)

### 变量

- [MaxUint256](modules.md#maxuint256)
- [WETH9](modules.md#weth9)

### 函数

- [computePriceImpact](modules.md#computepriceimpact)
- [sortedInsert](modules.md#sortedinsert)
- [sqrt](modules.md#sqrt)
- [validateAndParseAddress](modules.md#validateandparseaddress)

## 类型别名

### BigintIsh

Ƭ **BigintIsh**: `JSBI` \| `string` \| `number`

#### 定义于

[constants.ts:24](https://github.com/Uniswap/sdk-core/blob/9997e88/src/constants.ts#L24)

___

### Currency

Ƭ **Currency**: [`NativeCurrency`](classes/NativeCurrency.md) \| [`Token`](classes/Token.md)

#### 定义于

[entities/currency.ts:4](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/currency.ts#L4)

## 变量

### MaxUint256

• `Const` **MaxUint256**: `default`

#### 定义于

[constants.ts:37](https://github.com/Uniswap/sdk-core/blob/9997e88/src/constants.ts#L37)

___

### WETH9

• `Const` **WETH9**: `Object`

已知的 WETH9 实现地址，用于我们的 Ether#wrapped 实现

#### 索引签名

▪ [chainId: `number`]: [`Token`](classes/Token.md)

#### 定义于

[entities/weth9.ts:6](https://github.com/Uniswap/sdk-core/blob/9997e88/src/entities/weth9.ts#L6)

## 函数

### computePriceImpact

▸ **computePriceImpact**<`TBase`, `TQuote`\>(`midPrice`, `inputAmount`, `outputAmount`): [`Percent`](classes/Percent.md)

计算中间价格与执行价格之间的百分比差异，即价格影响。

#### 泛型参数

| 名称 | 类型 |
| :------ | :------ |
| `TBase` | extends [`Currency`](modules.md#currency) |
| `TQuote` | extends [`Currency`](modules.md#currency) |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `midPrice` | [`Price`](classes/Price.md)<`TBase`, `TQuote`\> | 交易前的中间价格 |
| `inputAmount` | [`CurrencyAmount`](classes/CurrencyAmount.md)<`TBase`\> | 交易的输入金额 |
| `outputAmount` | [`CurrencyAmount`](classes/CurrencyAmount.md)<`TQuote`\> | 交易的输出金额 |

#### 返回

[`Percent`](classes/Percent.md)

#### 定义于

[utils/computePriceImpact.ts:9](https://github.com/Uniswap/sdk-core/blob/9997e88/src/utils/computePriceImpact.ts#L9)

___

### sortedInsert

▸ **sortedInsert**<`T`\>(`items`, `add`, `maxSize`, `comparator`): `T` \| ``null``

#### 泛型参数

| 名称 |
| :------ |
| `T` |

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `items` | `T`[] |
| `add` | `T` |
| `maxSize` | `number` |
| `comparator` | (`a`: `T`, `b`: `T`) => `number` |

#### 返回

`T` \| ``null``

#### 定义于

[utils/sortedInsert.ts:5](https://github.com/Uniswap/sdk-core/blob/9997e88/src/utils/sortedInsert.ts#L5)

___

### sqrt

▸ **sqrt**(`value`): `JSBI`

计算 value 的平方根（向下取整）

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `value` | `default` | 要计算平方根的值，向下取整 |

#### 返回

`JSBI`

#### 定义于

[utils/sqrt.ts:14](https://github.com/Uniswap/sdk-core/blob/9997e88/src/utils/sqrt.ts#L14)

___

### validateAndParseAddress

▸ **validateAndParseAddress**(`address`): `string`

验证一个地址并返回该地址的解析（校验和）版本

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `address` | `string` | 未校验的十六进制地址 |

#### 返回

`string`

#### 定义于

[utils/validateAndParseAddress.ts:7](https://github.com/Uniswap/sdk-core/blob/9997e88/src/utils/validateAndParseAddress.ts#L7)