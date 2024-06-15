[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / CollectOptions

# 接口: CollectOptions

## 目录

### 属性

- [expectedCurrencyOwed0](CollectOptions.md#expectedcurrencyowed0)
- [expectedCurrencyOwed1](CollectOptions.md#expectedcurrencyowed1)
- [recipient](CollectOptions.md#recipient)
- [tokenId](CollectOptions.md#tokenid)

## 属性

### expectedCurrencyOwed0

• **expectedCurrencyOwed0**: `CurrencyAmount`<`Currency`\>

预期的 tokensOwed0 的价值，包括尚未计入的费用/将被烧毁的流动性价值

#### 定义于

[nonfungiblePositionManager.ts:114](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L114)

___

### expectedCurrencyOwed1

• **expectedCurrencyOwed1**: `CurrencyAmount`<`Currency`\>

预期的 tokensOwed1 的价值，包括尚未计入的费用/将被烧毁的流动性价值

#### 定义于

[nonfungiblePositionManager.ts:119](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L119)

___

### recipient

• **recipient**: `string`

应该接收代币的账户。

#### 定义于

[nonfungiblePositionManager.ts:124](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L124)

___

### tokenId

• **tokenId**: `BigintIsh`

指示要收集的位置的 ID。

#### 定义于

[nonfungiblePositionManager.ts:109](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L109)