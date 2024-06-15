[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / Position

# 类: Position

表示在 Uniswap V3 池上的一个位置

## 目录

### 构造函数

- [constructor](Position.md#constructor)

### 属性

- [\_mintAmounts](Position.md#_mintamounts)
- [\_token0Amount](Position.md#_token0amount)
- [\_token1Amount](Position.md#_token1amount)
- [liquidity](Position.md#liquidity)
- [pool](Position.md#pool)
- [tickLower](Position.md#ticklower)
- [tickUpper](Position.md#tickupper)

### 访问器

- [amount0](Position.md#amount0)
- [amount1](Position.md#amount1)
- [mintAmounts](Position.md#mintamounts)
- [token0PriceLower](Position.md#token0pricelower)
- [token0PriceUpper](Position.md#token0priceupper)

### 方法

- [burnAmountsWithSlippage](Position.md#burnamountswithslippage)
- [mintAmountsWithSlippage](Position.md#mintamountswithslippage)
- [ratiosAfterSlippage](Position.md#ratiosafterslippage)
- [fromAmount0](Position.md#fromamount0)
- [fromAmount1](Position.md#fromamount1)
- [fromAmounts](Position.md#fromamounts)

## 构造函数

### constructor

• **new Position**(`__namedParameters`)

为给定的池和给定的流动性构建一个位置

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `__namedParameters` | `PositionConstructorArgs` |

#### 定义于

[entities/position.ts:40](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L40)

## 属性

### \_mintAmounts

• `私有` **\_mintAmounts**: ``null`` \| `只读`<{ `amount0`: `默认` ; `amount1`: `默认`  }\> = `null`

#### 定义于

[entities/position.ts:31](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L31)

___

### \_token0Amount

• `私有` **\_token0Amount**: ``null`` \| `CurrencyAmount`<`Token`\> = `null`

#### 定义于

[entities/position.ts:29](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L29)

___

### \_token1Amount

• `私有` **\_token1Amount**: ``null`` \| `CurrencyAmount`<`Token`\> = `null`

#### 定义于

[entities/position.ts:30](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L30)

___

### liquidity

• `只读` **liquidity**: `默认`

#### 定义于

[entities/position.ts:26](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L26)

___

### pool

• `只读` **pool**: [`Pool`](Pool.md)

#### 定义于

[entities/position.ts:23](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L23)

___

### tickLower

• `只读` **tickLower**: `数字`

#### 定义于

[entities/position.ts:24](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L24)

___

### tickUpper

• `只读` **tickUpper**: `数字`

#### 定义于

[entities/position.ts:25](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L25)

## 访问器

### amount0

• `获取` **amount0**(): `CurrencyAmount`<`Token`\>

返回在当前池价格下，此位置的流动性可以燃烧以换取的 token0 数量

#### 返回

`CurrencyAmount`<`Token`\>

#### 定义于

[entities/position.ts:68](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L68)

___

### amount1

• `获取` **amount1**(): `CurrencyAmount`<`Token`\>

返回在当前池价格下，此位置的流动性可以燃烧以换取的 token1 数量

#### 返回

`CurrencyAmount`<`Token`\>

#### 定义于

[entities/position.ts:100](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L100)

___

### mintAmounts

• `获取` **mintAmounts**(): `只读`<{ `amount0`: `默认` ; `amount1`: `默认`  }\>

返回为了铸造与位置持有的流动性相等的数量，在当前池价格下必须发送的最小数量

#### 返回

`只读`<{ `amount0`: `默认` ; `amount1`: `默认`  }\>

#### 定义于

[entities/position.ts:258](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L258)

___

### token0PriceLower

• `获取` **token0PriceLower**(): `Price`<`Token`, `Token`\>

返回在下限 tick 处的 token0 价格

#### 返回

`Price`<`Token`, `Token`\>

#### 定义于

[entities/position.ts:54](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L54)

___

### token0PriceUpper

• `获取` **token0PriceUpper**(): `Price`<`Token`, `Token`\>

返回在上限 tick 处的 token0 价格

#### 返回

`Price`<`Token`, `Token`\>

#### 定义于

[entities/position.ts:61](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L61)

## 方法

### burnAmountsWithSlippage

▸ **burnAmountsWithSlippage**(`slippageTolerance`): `只读`<{ `amount0`: `默认` ; `amount1`: `默认`  }\>

返回为了安全地燃烧与位置持有的流动性相等的数量，并且具有给定的滑点容限，应该请求的最小数量

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `slippageTolerance` | `Percent` | 当前价格不利滑点的容限 |

#### 返回

`只读`<{ `amount0`: `默认` ; `amount1`: `默认`  }\>

带有滑点的数量

#### 定义于

[entities/position.ts:213](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L213)

___

### mintAmountsWithSlippage

▸ **mintAmountsWithSlippage**(`slippageTolerance`): `只读`<{ `amount0`: `默认` ; `amount1`: `默认`  }\>

返回为了安全地铸造与位置持有的流动性相等的数量，并且具有给定的滑点容限，必须发送的最小数量

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `slippageTolerance` | `Percent` | 当前价格不利滑点的容限 |

#### 返回

`只读`<{ `amount0`: `默认` ; `amount1`: `默认`  }\>

带有滑点的数量

#### 定义于

[entities/position.ts:157](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L157)

___

### ratiosAfterSlippage

▸ `私有` **ratiosAfterSlippage**(`slippageTolerance`): `对象`

如果价格在滑点容限百分比内“滑动”，返回较低和较高的平方根比率

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `slippageTolerance` | `Percent` | 交易将回退之前价格可以“滑动”的程度 |

#### 返回

`对象`

滑点后的平方根比率

| 名称 | 类型 |
| :------ | :------ |
| `sqrtRatioX96Lower` | `默认` |
| `sqrtRatioX96Upper` | `默认` |

#### 定义于

[entities/position.ts:134](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L134)

___

### fromAmount0

▸ `静态` **fromAmount0**(`__namedParameters`): [`Position`](Position.md)

假设无限的 token1 数量，计算出用于给定 token0 数量的最大流动性接收位置

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `__namedParameters` | `对象` |
| `__namedParameters.amount0` | `BigintIsh` |
| `__namedParameters.pool` | [`Pool`](Pool.md) |
| `__namedParameters.tickLower` | `数字` |
| `__namedParameters.tickUpper` | `数字` |
| `__namedParameters.useFullPrecision` | `布尔值` |

#### 返回

[`Position`](Position.md)

该位置

#### 定义于

[entities/position.ts:354](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L354)

___

### fromAmount1

▸ `静态` **fromAmount1**(`__namedParameters`): [`Position`](Position.md)

假设无限的 token0 数量，计算出用于给定 token1 数量的最大流动性接收位置

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `__namedParameters` | `对象` |
| `__namedParameters.amount1` | `BigintIsh` |
| `__namedParameters.pool` | [`Pool`](Pool.md) |
| `__namedParameters.tickLower` | `数字` |
| `__namedParameters.tickUpper` | `数字` |

#### 返回

[`Position`](Position.md)

该位置

#### 定义于

[entities/position.ts:378](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L378)

___

### fromAmounts

▸ `静态` **fromAmounts**(`__namedParameters`): [`Position`](Position.md)

计算用于给定 token0、token1 数量以及在 tick 边界的价格处的最大流动性接收位置。

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `__namedParameters` | `对象` |
| `__namedParameters.amount0` | `BigintIsh` |
| `__namedParameters.amount1` | `BigintIsh` |
| `__namedParameters.pool` | [`Pool`](Pool.md) |
| `__namedParameters.tickLower` | `数字` |
| `__namedParameters.tickUpper` | `数字` |
| `__namedParameters.useFullPrecision` | `布尔值` |

#### 返回

[`Position`](Position.md)

该位置的流动性数量

#### 定义于

[entities/position.ts:312](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/position.ts#L312)