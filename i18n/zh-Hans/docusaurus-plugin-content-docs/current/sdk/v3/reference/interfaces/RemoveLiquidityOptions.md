[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / RemoveLiquidityOptions

# 接口: RemoveLiquidityOptions

退出仓位时生成调用数据的选项。

## 目录

### 属性

- [burnToken](RemoveLiquidityOptions.md#burntoken)
- [collectOptions](RemoveLiquidityOptions.md#collectoptions)
- [deadline](RemoveLiquidityOptions.md#deadline)
- [liquidityPercentage](RemoveLiquidityOptions.md#liquiditypercentage)
- [permit](RemoveLiquidityOptions.md#permit)
- [slippageTolerance](RemoveLiquidityOptions.md#slippagetolerance)
- [tokenId](RemoveLiquidityOptions.md#tokenid)

## 属性

### burnToken

• `可选` **burnToken**: `布尔值`

如果整个仓位正在退出，是否应销毁 NFT，默认为 false。

#### 定义于

[nonfungiblePositionManager.ts:162](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L162)

___

### collectOptions

• **collectOptions**: `省略`<[`CollectOptions`](CollectOptions.md), ``"tokenId"``\>

传递给 collect 的参数

#### 定义于

[nonfungiblePositionManager.ts:172](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L172)

___

### deadline

• **deadline**: `BigintIsh`

交易过期的时间，以纪元秒为单位。

#### 定义于

[nonfungiblePositionManager.ts:157](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L157)

___

### liquidityPercentage

• **liquidityPercentage**: `Percent`

要退出的仓位流动性的百分比。

#### 定义于

[nonfungiblePositionManager.ts:147](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L147)

___

### permit

• `可选` **permit**: [`NFTPermitOptions`](NFTPermitOptions.md)

正在退出的令牌 ID 的可选许可，如果退出交易是由不拥有 NFT 的账户发送的情况。

#### 定义于

[nonfungiblePositionManager.ts:167](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L167)

___

### slippageTolerance

• **slippageTolerance**: `Percent`

允许池价格变动的程度。

#### 定义于

[nonfungiblePositionManager.ts:152](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L152)

___

### tokenId

• **tokenId**: `BigintIsh`

要退出的令牌的 ID

#### 定义于

[nonfungiblePositionManager.ts:142](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L142)