[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / Trade

# 类: Trade<TInput, TOutput, TTradeType\>

表示针对一组路线执行的交易，其中输入的一部分按百分比分配到每条路线上。

每条路线都有自己的池。池不能在不同的路线之间重复使用。

不考虑滑点，即，在交易提交和执行之间价格环境可能发生的变化。

## 类型参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `TInput` | extends `Currency` | 输入代币，可以是 Ether 或 ERC-20 |
| `TOutput` | extends `Currency` | 输出代币，可以是 Ether 或 ERC-20 |
| `TTradeType` | extends `TradeType` | 交易类型，可以是确定输入或确定输出 |

## 目录

### 构造函数

- [constructor](Trade.md#constructor)

### 属性

- [\_executionPrice](Trade.md#_executionprice)
- [\_inputAmount](Trade.md#_inputamount)
- [\_outputAmount](Trade.md#_outputamount)
- [\_priceImpact](Trade.md#_priceimpact)
- [swaps](Trade.md#swaps)
- [tradeType](Trade.md#tradetype)

### 访问器

- [executionPrice](Trade.md#executionprice)
- [inputAmount](Trade.md#inputamount)
- [outputAmount](Trade.md#outputamount)
- [priceImpact](Trade.md#priceimpact)
- [route](Trade.md#route)

### 方法

- [maximumAmountIn](Trade.md#maximumamountin)
- [minimumAmountOut](Trade.md#minimumamountout)
- [worstExecutionPrice](Trade.md#worstexecutionprice)
- [bestTradeExactIn](Trade.md#besttradeexactin)
- [bestTradeExactOut](Trade.md#besttradeexactout)
- [createUncheckedTrade](Trade.md#createuncheckedtrade)
- [createUncheckedTradeWithMultipleRoutes](Trade.md#createuncheckedtradewithmultipleroutes)
- [exactIn](Trade.md#exactin)
- [exactOut](Trade.md#exactout)
- [fromRoute](Trade.md#fromroute)
- [fromRoutes](Trade.md#fromroutes)

## 构造函数

### constructor

• `Private` **new Trade**<`TInput`, `TOutput`, `TTradeType`\>(`__namedParameters`)

通过传递预计算属性值来构造交易

#### 类型参数

| 名称 | 类型 |
| :------ | :------ |
| `TInput` | extends `Currency` |
| `TOutput` | extends `Currency` |
| `TTradeType` | extends `TradeType` |

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.routes` | { `inputAmount`: `CurrencyAmount`<`TInput`\> ; `outputAmount`: `CurrencyAmount`<`TOutput`\> ; `route`: [`Route`](Route.md)<`TInput`, `TOutput`\>  }[] |
| `__namedParameters.tradeType` | `TTradeType` |

#### 定义于

[entities/trade.ts:397](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L397)

## 属性

### \_executionPrice

• `Private` **\_executionPrice**: `undefined` \| `Price`<`TInput`, `TOutput`\>

计算出的执行价格缓存结果

#### 定义于

[entities/trade.ts:143](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L143)

___

### \_inputAmount

• `Private` **\_inputAmount**: `undefined` \| `CurrencyAmount`<`TInput`\>

输入金额计算的缓存结果

#### 定义于

[entities/trade.ts:97](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L97)

___

### \_outputAmount

• `Private` **\_outputAmount**: `undefined` \| `CurrencyAmount`<`TOutput`\>

输出金额计算的缓存结果

#### 定义于

[entities/trade.ts:120](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L120)

___

### \_priceImpact

• `Private` **\_priceImpact**: `undefined` \| `Percent`

价格影响计算的缓存结果

#### 定义于

[entities/trade.ts:164](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L164)

___

### swaps

• `Readonly` **swaps**: { `inputAmount`: `CurrencyAmount`<`TInput`\> ; `outputAmount`: `CurrencyAmount`<`TOutput`\> ; `route`: [`Route`](Route.md)<`TInput`, `TOutput`\>  }[]

交易的交换，即，构成交易的哪些路线以及每条路线上的交换量。

#### 定义于

[entities/trade.ts:82](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L82)

___

### tradeType

• `Readonly` **tradeType**: `TTradeType`

交易的类型，可以是确定输入或确定输出。

#### 定义于

[entities/trade.ts:91](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L91)

## 访问器

### executionPrice

• `get` **executionPrice**(): `Price`<`TInput`, `TOutput`\>

以输出金额/输入金额的形式表示的价格。

#### 返回

`Price`<`TInput`, `TOutput`\>

#### 定义于

[entities/trade.ts:148](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L148)

___

### inputAmount

• `get` **inputAmount**(): `CurrencyAmount`<`TInput`\>

假设没有滑点的情况下，交易的输入金额。

#### 返回

`CurrencyAmount`<`TInput`\>

#### 定义于

[entities/trade.ts:102](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L102)

___

### outputAmount

• `get` **outputAmount**(): `CurrencyAmount`<`TOutput`\>

假设没有滑点的情况下，交易的输出金额。

#### 返回

`CurrencyAmount`<`TOutput`\>

#### 定义于

[entities/trade.ts:125](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L125)

___

### priceImpact

• `get` **priceImpact**(): `Percent`

返回路线的中间价格与价格影响之间的百分比差异

#### 返回

`Percent`

#### 定义于

[entities/trade.ts:169](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L169)

___

### route

• `get` **route**(): [`Route`](Route.md)<`TInput`, `TOutput`\>

**`过时`**

为了支持'swaps'属性而过时。如果交易包含多条路线，这将返回错误。

当交易只包含一条路线时，这会返回交易的路线，即交易经过的池。

#### 返回

[`Route`](Route.md)<`TInput`, `TOutput`\>

#### 定义于

[entities/trade.ts:73](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L73)

## 方法

### maximumAmountIn

▸ **maximumAmountIn**(`slippageTolerance`, `amountIn?`): `CurrencyAmount`<`TInput`\>

根据给定的滑点容忍度，获取此交易中可以花费的最大输入金额

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `slippageTolerance` | `Percent` | 此交易执行价格的不利滑点容忍度 |
| `amountIn` | `CurrencyAmount`<`TInput`\> | - |

#### 返回

`CurrencyAmount`<`TInput`\>

输入金额

#### 定义于

[entities/trade.ts:456](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L456)

___

### minimumAmountOut

▸ **minimumAmountOut**(`slippageTolerance`, `amountOut?`): `CurrencyAmount`<`TOutput`\>

根据给定的滑点容忍度，获取此交易必须接收的最小输出金额

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `slippageTolerance` | `Percent` | 此交易执行价格的不利滑点容忍度 |
| `amountOut` | `CurrencyAmount`<`TOutput`\> | - |

#### 返回

`CurrencyAmount`<`TOutput`\>

输出金额

#### 定义于

[entities/trade.ts:438](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L438)

___

### worstExecutionPrice

▸ **worstExecutionPrice**(`slippageTolerance`): `Price`<`TInput`, `TOutput`\>

在考虑到滑点容忍度后返回执行价格

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `slippageTolerance` | `Percent` | 允许的滑点容忍度 |

#### 返回

`Price`<`TInput`, `TOutput`\>

执行价格

#### 定义于

[entities/trade.ts:471](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L471)

___

### bestTradeExactIn

▸ `Static` **bestTradeExactIn**<`TInput`, `TOutput`\>(`pools`, `currencyAmountIn`, `currencyOut`, `__namedParameters?`, `currentPools?`, `nextAmountIn?`, `bestTrades?`): `Promise`<[`Trade`](Trade.md)<`TInput`, `TOutput`, `EXACT_INPUT`\>[]\>

给定一系列池和固定输入金额，返回最多`maxNumResults`个交易，这些交易从输入代币金额转换为输出代币，最多进行`maxHops`次跳跃。
注意这不会考虑聚合，因为路线是线性的。可能存在通过将输入金额分割到多个路线中更好的路线。

#### 类型参数

| 名称 | 类型 |
| :------ | :------ |
| `TInput` | extends `Currency` |
| `TOutput` | extends `Currency` |

#### 参数

| 名称 | 类型 | 默认值 | 描述 |
| :------ | :------ | :------ | :------ |
| `pools` | [`Pool`](Pool.md)[] | `undefined` | 考虑在寻找最佳交易中的池 |
| `currencyAmountIn` | `CurrencyAmount`<`TInput`\> | `undefined` | 递归中使用的；原始的currencyAmountIn参数的值 |
| `currencyOut` | `TOutput` | `undefined` | 所需的输出代币 |
| `__namedParameters` | [`BestTradeOptions`](../interfaces/BestTradeOptions.md) | `{}` | - |
| `currentPools` | [`Pool`](Pool.md)[] | `[]` | 递归中使用的；当前的池列表 |
| `nextAmountIn` | `CurrencyAmount`<`Currency`\> | `currencyAmountIn` | 确切的输入代币金额 |
| `bestTrades` | [`Trade`](Trade.md)<`TInput`, `TOutput`, `EXACT_INPUT`\>[] | `[]` | 递归中使用的；当前的最佳交易列表 |

#### 返回

`Promise`<[`Trade`](Trade.md)<`TInput`, `TOutput`, `EXACT_INPUT`\>[]\>

确切输入交易

#### 定义于

[entities/trade.ts:495](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L495)

___

### bestTradeExactOut

▸ `Static` **bestTradeExactOut**<`TInput`, `TOutput`\>(`pools`, `currencyIn`, `currencyAmountOut`, `__namedParameters?`, `currentPools?`, `nextAmountOut?`, `bestTrades?`): `Promise`<[`Trade`](Trade.md)<`TInput`, `TOutput`, `EXACT_OUTPUT`\>[]\>

类似于上面的方法，但目标是一个固定的输出金额
给定一系列池和固定输出金额，返回最多`maxNumResults`个交易，这些交易从输入代币转换为输出代币金额，最多进行`maxHops`次跳跃。
请注意，这不会考虑聚合，因为路线是线性的。可能通过将输入金额分割到多个路线中存在一个更好的路线。

#### 类型参数

| 名称 | 类型 |
| :------ | :------ |
| `TInput` | extends `Currency` |
| `TOutput` | extends `Currency` |

#### 参数

| 名称 | 类型 | 默认值 | 描述 |
| :------ | :------ | :------ | :------ |
| `pools` | [`Pool`](Pool.md)[] | `undefined` | 考虑在寻找最佳交易中的池 |
| `currencyIn` | `TInput` | `undefined` | 要花费的代币 |
| `currencyAmountOut` | `CurrencyAmount`<`TOutput`\> | `undefined` | 所需的代币输出金额 |
| `__namedParameters` | [`BestTradeOptions`](../interfaces/BestTradeOptions.md) | `{}` | - |
| `currentPools` | [`Pool`](Pool.md)[] | `[]` | 递归中使用的；当前的池列表 |
| `nextAmountOut` | `CurrencyAmount`<`Currency`\> | `currencyAmountOut` | 确切的输出代币金额 |
| `bestTrades` | [`Trade`](Trade.md)<`TInput`, `TOutput`, `EXACT_OUTPUT`\>[] | `[]` | 递归中使用的；当前的最佳交易列表 |

#### 返回

`Promise`<[`Trade`](Trade.md)<`TInput`, `TOutput`, `EXACT_OUTPUT`\>[]\>

确切输出交易

#### 定义于

[entities/trade.ts:576](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L576)

___

### createUncheckedTrade

▸ `Static` **createUncheckedTrade**<`TInput`, `TOutput`, `TTradeType`\>(`constructorArguments`): [`Trade`](Trade.md)<`TInput`, `TOutput`, `TTradeType`\>

创建交易而不计算通过路线交换的结果。当你在其他地方模拟了交易并且没有任何tick数据时非常有用

#### 类型参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `TInput` | extends `Currency` | 输入代币，可以是 Ether 或 ERC-20 |
| `TOutput` | extends `Currency` | 输出代币，可以是 Ether 或 ERC-20 |
| `TTradeType` | extends `TradeType` | 交易类型，可以是确定输入或确定输出 |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `constructorArguments` | `Object` | 传递给交易构造函数的参数 |
| `constructorArguments.inputAmount` | `CurrencyAmount`<`TInput`\> | - |
| `constructorArguments.outputAmount` | `CurrencyAmount`<`TOutput`\> | - |
| `constructorArguments.route` | [`Route`](Route.md)<`TInput`, `TOutput`\> | - |
| `constructorArguments.tradeType` | `TTradeType` | - |

#### 返回

[`Trade`](Trade.md)<`TInput`, `TOutput`, `TTradeType`\>

未检查的交易

#### 定义于

[entities/trade.ts:346](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L346)

___

### createUncheckedTradeWithMultipleRoutes

▸ `Static` **createUncheckedTradeWithMultipleRoutes**<`TInput`, `TOutput`, `TTradeType`\>(`constructorArguments`): [`Trade`](Trade.md)<`TInput`, `TOutput`, `TTradeType`\>

创建交易而不计算通过路线交换的结果。当你在其他地方模拟了交易并且没有任何tick数据时非常有用

#### 类型参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `TInput` | extends `Currency` | 输入代币，可以是 Ether 或 ERC-20 |
| `TOutput` | extends `Currency` | 输出代币，可以是 Ether 或 ERC-20 |
| `TTradeType` | extends `TradeType` | 交易类型，可以是确定输入或确定输出 |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `constructorArguments` | `Object` | 传递给交易构造函数的参数 |
| `constructorArguments.routes` | { `inputAmount`: `CurrencyAmount`<`TInput`\> ; `outputAmount`: `CurrencyAmount`<`TOutput`\> ; `route`: [`Route`](Route.md)<`TInput`, `TOutput`\>  }[] | - |
| `constructorArguments.tradeType` | `TTradeType` | - |

#### 返回

[`Trade`](Trade.md)<`TInput`, `TOutput`, `TTradeType`\>

未检查的交易

#### 定义于

[entities/trade.ts:377](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L377)

___

### exactIn

▸ `Static` **exactIn**<`TInput`, `TOutput`\>(`route`, `amountIn`): `Promise`<[`Trade`](Trade.md)<`TInput`, `TOutput`, `EXACT_INPUT`\>\>

使用给定的输入金额和路线构建确切输入交易

#### 类型参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `TInput` | extends `Currency` | 输入代币，可以是 Ether 或 ERC-20 |
| `TOutput` | extends `Currency` | 输出代币，可以是 Ether 或 ERC-20 |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `route` | [`Route`](Route.md)<`TInput`, `TOutput`\> | 确切输入交易的路线 |
| `amountIn` | `CurrencyAmount`<`TInput`\> | 输入的金额 |

#### 返回

`Promise`<[`Trade`](Trade.md)<`TInput`, `TOutput`, `EXACT_INPUT`\>\>

确切输入交易

#### 定义于

[entities/trade.ts:194](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L194)

___

### exactOut

▸ `Static` **exactOut**<`TInput`, `TOutput`\>(`route`, `amountOut`): `Promise`<[`Trade`](Trade.md)<`TInput`, `TOutput`, `EXACT_OUTPUT`\>\>

使用给定的输出金额和路线构建确切输出交易

#### 类型参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `TInput` | extends `Currency` | 输入代币，可以是 Ether 或 ERC-20 |
| `TOutput` | extends `Currency` | 输出代币，可以是 Ether 或 ERC-20 |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `route` | [`Route`](Route.md)<`TInput`, `TOutput`\> | 确切输出交易的路线 |
| `amountOut` | `CurrencyAmount`<`TOutput`\> | 交易返回的金额 |

#### 返回

`Promise`<[`Trade`](Trade.md)<`TInput`, `TOutput`, `EXACT_OUTPUT`\>\>

确切输出交易

#### 定义于

[entities/trade.ts:209](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L209)

___

### fromRoute

▸ `Static` **fromRoute**<`TInput`, `TOutput`, `TTradeType`\>(`route`, `amount`, `tradeType`): `Promise`<[`Trade`](Trade.md)<`TInput`, `TOutput`, `TTradeType`\>\>

通过模拟通过给定路线的交换来构建交易

#### 类型参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `TInput` | extends `Currency` | 输入代币，可以是 Ether 或 ERC-20。 |
| `TOutput` | extends `Currency` | 输出代币，可以是 Ether 或 ERC-20。 |
| `TTradeType` | extends `TradeType` | 交易类型，可以是确定输入或确定输出。 |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `route` | [`Route`](Route.md)<`TInput`, `TOutput`\> | 交换路线 |
| `amount` | `TTradeType` extends `EXACT_INPUT` ? `CurrencyAmount`<`TInput`\> : `CurrencyAmount`<`TOutput`\> | 指定的金额，可以是输入或输出，取决于tradeType |
| `tradeType` | `TTradeType` | 交易是否为确切输入或确切输出交换 |

#### 返回

`Promise`<[`Trade`](Trade.md)<`TInput`, `TOutput`, `TTradeType`\>\>

路线

#### 定义于

[entities/trade.ts:226](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L226)

___

### fromRoutes

▸ `Static` **fromRoutes**<`TInput`, `TOutput`, `TTradeType`\>(`routes`, `tradeType`): `Promise`<[`Trade`](Trade.md)<`TInput`, `TOutput`, `TTradeType`\>\>

通过模拟交换来构建交易

#### 类型参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `TInput` | extends `Currency` | 输入代币，可以是 Ether 或 ERC-20。 |
| `TOutput` | extends `Currency` | 输出代币，可以是 Ether 或 ERC-20。 |
| `TTradeType` | extends `TradeType` | 交易类型，可以是确定输入或确定输出。 |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `routes` | { `amount`: `TTradeType` extends `EXACT_INPUT` ? `CurrencyAmount`<`TInput`\> : `CurrencyAmount`<`TOutput`\> ; `route`: [`Route`](Route.md)<`TInput`, `TOutput`\>  }[] | 交换路线及应通过每条路线路由的金额比例 |
| `tradeType` | `TTradeType` | 交易是否为确切输入或确切输出交换 |

#### 返回

`Promise`<[`Trade`](Trade.md)<`TInput`, `TOutput`, `TTradeType`\>\>

交易

#### 定义于

[entities/trade.ts:276](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L276)