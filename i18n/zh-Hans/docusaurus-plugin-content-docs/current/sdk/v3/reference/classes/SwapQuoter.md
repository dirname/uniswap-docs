[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / SwapQuoter

# 类: SwapQuoter

表示具有用于返回调用报价合约所需格式化的 calldata 方法的 Uniswap V3 QuoterV1 合约。

## 目录

### 构造函数

- [constructor](SwapQuoter.md#constructor)

### 属性

- [V1INTERFACE](SwapQuoter.md#v1interface)
- [V2INTERFACE](SwapQuoter.md#v2interface)

### 方法

- [quoteCallParameters](SwapQuoter.md#quotecallparameters)

## 构造函数

### constructor

• **new SwapQuoter**()

## 属性

### V1INTERFACE

▪ `Static` **V1INTERFACE**: `Interface`

#### 定义于

[quoter.ts:37](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/quoter.ts#L37)

___

### V2INTERFACE

▪ `Static` **V2INTERFACE**: `Interface`

#### 定义于

[quoter.ts:38](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/quoter.ts#L38)

## 方法

### quoteCallParameters

▸ `Static` **quoteCallParameters**<`TInput`, `TOutput`\>(`route`, `amount`, `tradeType`, `options?`): [`MethodParameters`](../interfaces/MethodParameters.md)

生成在 QuoterV2 中适当函数的链上方法名称，以及相关联的十六进制编码参数。

#### 泛型参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `TInput` | extends `Currency` | 输入代币，可以是 Ether 或 ERC-20 |
| `TOutput` | extends `Currency` | 输出代币，可以是 Ether 或 ERC-20 |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `route` | [`Route`](Route.md)<`TInput`, `TOutput`\> | 交换路线，一系列可以通过的池子 |
| `amount` | `CurrencyAmount`<`TInput` \| `TOutput`\> | 报价金额，可以是输入金额或输出金额 |
| `tradeType` | `TradeType` | 交易类型，要么是精确输入，要么是精确输出 |
| `options` | [`QuoteOptions`](../interfaces/QuoteOptions.md) | 可选参数，包括价格限制和报价合约开关 |

#### 返回

[`MethodParameters`](../interfaces/MethodParameters.md)

格式化的 calldata

#### 定义于

[quoter.ts:51](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/quoter.ts#L51)