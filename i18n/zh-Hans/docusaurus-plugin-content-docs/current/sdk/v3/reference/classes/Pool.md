[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / Pool

# 类: Pool

表示一个 V3 池

## 目录

### 构造函数

- [constructor](Pool.md#constructor)

### 属性

- [\_token0Price](Pool.md#_token0price)
- [\_token1Price](Pool.md#_token1price)
- [fee](Pool.md#fee)
- [liquidity](Pool.md#liquidity)
- [sqrtRatioX96](Pool.md#sqrtratiox96)
- [tickCurrent](Pool.md#tickcurrent)
- [tickDataProvider](Pool.md#tickdataprovider)
- [token0](Pool.md#token0)
- [token1](Pool.md#token1)

### 访问器

- [chainId](Pool.md#chainid)
- [tickSpacing](Pool.md#tickspacing)
- [token0Price](Pool.md#token0price)
- [token1Price](Pool.md#token1price)

### 方法

- [getInputAmount](Pool.md#getinputamount)
- [getOutputAmount](Pool.md#getoutputamount)
- [involvesToken](Pool.md#involvestoken)
- [priceOf](Pool.md#priceof)
- [swap](Pool.md#swap)
- [getAddress](Pool.md#getaddress)

## 构造函数

### constructor

• **new Pool**(`tokenA`, `tokenB`, `fee`, `sqrtRatioX96`, `liquidity`, `tickCurrent`, `ticks?`)

构造一个池

#### 参数

| 名称 | 类型 | 默认值 | 描述 |
| :------ | :------ | :------ | :------ |
| `tokenA` | `Token` | `undefined` | 池中的一个代币 |
| `tokenB` | `Token` | `undefined` | 池中的另一个代币 |
| `fee` | [`FeeAmount`](../enums/FeeAmount.md) | `undefined` | 每次交易从池中收取的输入金额的百分比（以基点为单位） |
| `sqrtRatioX96` | `BigintIsh` | `undefined` | 当前 token1 对 token0 的比率的平方根 |
| `liquidity` | `BigintIsh` | `undefined` | 当前范围内流动性的值 |
| `tickCurrent` | `number` | `undefined` | 池的当前刻度 |
| `ticks` | [`TickDataProvider`](../interfaces/TickDataProvider.md) \| ([`Tick`](Tick.md) \| [`TickConstructorArgs`](../interfaces/TickConstructorArgs.md))[] | `NO_TICK_DATA_PROVIDER_DEFAULT` | 池刻度的当前状态或可以返回刻度数据的数据提供者 |

#### 定义于

[entities/pool.ts:70](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L70)

## 属性

### \_token0Price

• `私有` `可选` **\_token0Price**: `Price`<`Token`, `Token`\>

#### 定义于

[entities/pool.ts:41](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L41)

___

### \_token1Price

• `私有` `可选` **\_token1Price**: `Price`<`Token`, `Token`\>

#### 定义于

[entities/pool.ts:42](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L42)

___

### fee

• `只读` **fee**: [`FeeAmount`](../enums/FeeAmount.md)

#### 定义于

[entities/pool.ts:35](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L35)

___

### liquidity

• `只读` **liquidity**: `default`

#### 定义于

[entities/pool.ts:37](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L37)

___

### sqrtRatioX96

• `只读` **sqrtRatioX96**: `default`

#### 定义于

[entities/pool.ts:36](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L36)

___

### tickCurrent

• `只读` **tickCurrent**: `number`

#### 定义于

[entities/pool.ts:38](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L38)

___

### tickDataProvider

• `只读` **tickDataProvider**: [`TickDataProvider`](../interfaces/TickDataProvider.md)

#### 定义于

[entities/pool.ts:39](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L39)

___

### token0

• `只读` **token0**: `Token`

#### 定义于

[entities/pool.ts:33](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L33)

___

### token1

• `只读` **token1**: `Token`

#### 定义于

[entities/pool.ts:34](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L34)

## 访问器

### chainId

• `获取` **chainId**(): `number`

返回池中代币的链 ID。

#### 返回

`number`

#### 定义于

[entities/pool.ts:149](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L149)

___

### tickSpacing

• `获取` **tickSpacing**(): `number`

#### 返回

`number`

#### 定义于

[entities/pool.ts:317](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L317)

___

### token0Price

• `获取` **token0Price**(): `Price`<`Token`, `Token`\>

返回池在 token0 方面的当前中间价格，即 token1 与 token0 的比率

#### 返回

`Price`<`Token`, `Token`\>

#### 定义于

[entities/pool.ts:109](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L109)

___

### token1Price

• `获取` **token1Price**(): `Price`<`Token`, `Token`\>

返回池在 token1 方面的当前中间价格，即 token0 与 token1 的比率

#### 返回

`Price`<`Token`, `Token`\>

#### 定义于

[entities/pool.ts:124](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L124)

## 方法

### getInputAmount

▸ **getInputAmount**(`outputAmount`, `sqrtPriceLimitX96?`): `Promise`<[`CurrencyAmount`<`Token`\>, [`Pool`](Pool.md)]\>

给定一个希望输出的代币数量，返回计算后的输入数量以及一个在交易后更新状态的池

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `outputAmount` | `CurrencyAmount`<`Token`\> | 要报价输入数量的输出数量 |
| `sqrtPriceLimitX96?` | `default` | Q64.96 平方根价格限制。如果零对一，交换后的价格不能低于此值。如果一对零，交换后的价格不能高于此值 |

#### 返回

`Promise`<[`CurrencyAmount`<`Token`\>, [`Pool`](Pool.md)]\>

输入数量和更新状态的池

#### 定义于

[entities/pool.ts:185](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L185)

___

### getOutputAmount

▸ **getOutputAmount**(`inputAmount`, `sqrtPriceLimitX96?`): `Promise`<[`CurrencyAmount`<`Token`\>, [`Pool`](Pool.md)]\>

给定一个输入代币的数量，返回计算出的输出数量以及一个在交易后更新状态的池

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `inputAmount` | `CurrencyAmount`<`Token`\> | 要报价输出数量的输入数量 |
| `sqrtPriceLimitX96?` | `default` | Q64.96 平方根价格限制 |

#### 返回

`Promise`<[`CurrencyAmount`<`Token`\>, [`Pool`](Pool.md)]\>

输出数量和更新状态的池

#### 定义于

[entities/pool.ts:159](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L159)

___

### involvesToken

▸ **involvesToken**(`token`): `boolean`

如果代币是 token0 或 token1，则返回 true

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `token` | `Token` | 要检查的代币 |

#### 返回

`boolean`

如果代币是 token0 或 token，则返回 true

#### 定义于

[entities/pool.ts:102](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L102)

___

### priceOf

▸ **priceOf**(`token`): `Price`<`Token`, `Token`\>

返回池中另一种代币的给定代币的价格。

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `token` | `Token` | 要返回价格的代币 |

#### 返回

`Price`<`Token`, `Token`\>

给定代币的价格，以另一种代币为单位。

#### 定义于

[entities/pool.ts:141](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L141)

___

### swap

▸ `私有` **swap**(`zeroForOne`, `amountSpecified`, `sqrtPriceLimitX96?`): `Promise`<{ `amountCalculated`: `default` ; `liquidity`: `default` ; `sqrtRatioX96`: `default` ; `tickCurrent`: `number`  }\>

执行一次交换

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `zeroForOne` | `boolean` | 输入的金额是 token0 还是 token1 |
| `amountSpecified` | `default` | 交换的数量，这隐式配置了作为确切输入（正数）的交换，或确切输出（负数） |
| `sqrtPriceLimitX96?` | `default` | Q64.96 平方根价格限制。如果零对一，交换后的价格不能低于此值。如果一对零，交换后的价格不能高于此值 |

#### 返回

`Promise`<{ `amountCalculated`: `default` ; `liquidity`: `default` ; `sqrtRatioX96`: `default` ; `tickCurrent`: `number`  }\>

amountCalculated

sqrtRatioX96

liquidity

tickCurrent

#### 定义于

[entities/pool.ts:215](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L215)

___

### getAddress

▸ `静态` **getAddress**(`tokenA`, `tokenB`, `fee`, `initCodeHashManualOverride?`, `factoryAddressOverride?`): `string`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `tokenA` | `Token` |
| `tokenB` | `Token` |
| `fee` | [`FeeAmount`](../enums/FeeAmount.md) |
| `initCodeHashManualOverride?` | `string` |
| `factoryAddressOverride?` | `string` |

#### 返回

`string`

#### 定义于

[entities/pool.ts:44](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/pool.ts#L44)