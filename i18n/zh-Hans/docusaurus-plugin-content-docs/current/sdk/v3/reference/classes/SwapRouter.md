[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / SwapRouter

# 类: SwapRouter

表示 Uniswap V3 的 SwapRouter，并包含用于帮助执行交易的静态方法。

## 目录

### 构造函数

- [constructor](SwapRouter.md#constructor)

### 属性

- [INTERFACE](SwapRouter.md#interface)

### 方法

- [swapCallParameters](SwapRouter.md#swapcallparameters)

## 构造函数

### constructor

• `Private` **new SwapRouter**()

无法构造。

#### 定义于

[swapRouter.ts:57](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L57)

## 属性

### INTERFACE

▪ `Static` **INTERFACE**: `Interface`

#### 定义于

[swapRouter.ts:52](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L52)

## 方法

### swapCallParameters

▸ `Static` **swapCallParameters**(`trades`, `options`): [`MethodParameters`](../interfaces/MethodParameters.md)

为给定交易生成要调用的链上方法名和作为参数传递的十六进制编码参数。

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `trades` | [`Trade`](Trade.md)<`Currency`, `Currency`, `TradeType`\> \| [`Trade`](Trade.md)<`Currency`, `Currency`, `TradeType`\>[] | - |
| `options` | [`SwapOptions`](../interfaces/SwapOptions.md) | 调用参数的选项 |

#### 返回

[`MethodParameters`](../interfaces/MethodParameters.md)

#### 定义于

[swapRouter.ts:64](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L64)