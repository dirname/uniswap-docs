[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / SqrtPriceMath

# 类: SqrtPriceMath

## 目录

### 构造函数

- [constructor](SqrtPriceMath.md#constructor)

### 方法

- [getAmount0Delta](SqrtPriceMath.md#getamount0delta)
- [getAmount1Delta](SqrtPriceMath.md#getamount1delta)
- [getNextSqrtPriceFromAmount0RoundingUp](SqrtPriceMath.md#getnextsqrtpricefromamount0roundingup)
- [getNextSqrtPriceFromAmount1RoundingDown](SqrtPriceMath.md#getnextsqrtpricefromamount1roundingdown)
- [getNextSqrtPriceFromInput](SqrtPriceMath.md#getnextsqrtpricefrominput)
- [getNextSqrtPriceFromOutput](SqrtPriceMath.md#getnextsqrtpricefromoutput)

## 构造函数

### constructor

• `Private` **new SqrtPriceMath**()

无法构造。

#### 定义于

[utils/sqrtPriceMath.ts:23](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/sqrtPriceMath.ts#L23)

## 方法

### getAmount0Delta

▸ `Static` **getAmount0Delta**(`sqrtRatioAX96`, `sqrtRatioBX96`, `liquidity`, `roundUp`): `default`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `sqrtRatioAX96` | `default` |
| `sqrtRatioBX96` | `default` |
| `liquidity` | `default` |
| `roundUp` | `boolean` |

#### 返回

`default`

#### 定义于

[utils/sqrtPriceMath.ts:25](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/sqrtPriceMath.ts#L25)

___

### getAmount1Delta

▸ `Static` **getAmount1Delta**(`sqrtRatioAX96`, `sqrtRatioBX96`, `liquidity`, `roundUp`): `default`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `sqrtRatioAX96` | `default` |
| `sqrtRatioBX96` | `default` |
| `liquidity` | `default` |
| `roundUp` | `boolean` |

#### 返回

`default`

#### 定义于

[utils/sqrtPriceMath.ts:38](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/sqrtPriceMath.ts#L38)

___

### getNextSqrtPriceFromAmount0RoundingUp

▸ `Static` `Private` **getNextSqrtPriceFromAmount0RoundingUp**(`sqrtPX96`, `liquidity`, `amount`, `add`): `default`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `sqrtPX96` | `default` |
| `liquidity` | `default` |
| `amount` | `default` |
| `add` | `boolean` |

#### 返回

`default`

#### 定义于

[utils/sqrtPriceMath.ts:71](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/sqrtPriceMath.ts#L71)

___

### getNextSqrtPriceFromAmount1RoundingDown

▸ `Static` `Private` **getNextSqrtPriceFromAmount1RoundingDown**(`sqrtPX96`, `liquidity`, `amount`, `add`): `default`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `sqrtPX96` | `default` |
| `liquidity` | `default` |
| `amount` | `default` |
| `add` | `boolean` |

#### 返回

`default`

#### 定义于

[utils/sqrtPriceMath.ts:100](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/sqrtPriceMath.ts#L100)

___

### getNextSqrtPriceFromInput

▸ `Static` **getNextSqrtPriceFromInput**(`sqrtPX96`, `liquidity`, `amountIn`, `zeroForOne`): `default`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `sqrtPX96` | `default` |
| `liquidity` | `default` |
| `amountIn` | `default` |
| `zeroForOne` | `boolean` |

#### 返回

`default`

#### 定义于

[utils/sqrtPriceMath.ts:48](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/sqrtPriceMath.ts#L48)

___

### getNextSqrtPriceFromOutput

▸ `Static` **getNextSqrtPriceFromOutput**(`sqrtPX96`, `liquidity`, `amountOut`, `zeroForOne`): `default`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `sqrtPX96` | `default` |
| `liquidity` | `default` |
| `amountOut` | `default` |
| `zeroForOne` | `boolean` |

#### 返回

`default`

#### 定义于

[utils/sqrtPriceMath.ts:57](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/sqrtPriceMath.ts#L57)