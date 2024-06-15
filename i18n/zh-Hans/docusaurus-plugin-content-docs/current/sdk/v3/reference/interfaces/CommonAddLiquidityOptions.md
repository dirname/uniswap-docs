[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / CommonAddLiquidityOptions

# 接口：CommonAddLiquidityOptions

为添加流动性生成调用数据的选项。

## 目录

### 属性

- [deadline](CommonAddLiquidityOptions.md#deadline)
- [slippageTolerance](CommonAddLiquidityOptions.md#slippagetolerance)
- [token0Permit](CommonAddLiquidityOptions.md#token0permit)
- [token1Permit](CommonAddLiquidityOptions.md#token1permit)
- [useNative](CommonAddLiquidityOptions.md#usenative)

## 属性

### deadline

• **deadline**: `BigintIsh`

交易过期的时间，以纪元秒为单位。

#### 定义于

[nonfungiblePositionManager.ts:56](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L56)

___

### slippageTolerance

• **slippageTolerance**: `Percent`

允许池价格波动的程度。

#### 定义于

[nonfungiblePositionManager.ts:51](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L51)

___

### token0Permit

• `可选` **token0Permit**: [`PermitOptions`](../modules.md#permitoptions)

花费 token0 的可选许可参数

#### 定义于

[nonfungiblePositionManager.ts:66](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L66)

___

### token1Permit

• `可选` **token1Permit**: [`PermitOptions`](../modules.md#permitoptions)

花费 token1 的可选许可参数

#### 定义于

[nonfungiblePositionManager.ts:71](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L71)

___

### useNative

• `可选` **useNative**: `NativeCurrency`

是否花费以太币。如果为 true，则其中一个资金池代币必须是 WETH，默认情况下为 false

#### 定义于

[nonfungiblePositionManager.ts:61](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L61)