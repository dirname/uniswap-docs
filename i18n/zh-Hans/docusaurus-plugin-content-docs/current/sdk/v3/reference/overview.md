---
id: overview
sidebar_position: 1
title: 概览
---

## 目录

### 枚举

- [FeeAmount](enums/FeeAmount.md)

### 类

- [FullMath](classes/FullMath.md)
- [LiquidityMath](classes/LiquidityMath.md)
- [Multicall](classes/Multicall.md)
- [NoTickDataProvider](classes/NoTickDataProvider.md)
- [NonfungiblePositionManager](classes/NonfungiblePositionManager.md)
- [Payments](classes/Payments.md)
- [Pool](classes/Pool.md)
- [Position](classes/Position.md)
- [PositionLibrary](classes/PositionLibrary.md)
- [Route](classes/Route.md)
- [SelfPermit](classes/SelfPermit.md)
- [SqrtPriceMath](classes/SqrtPriceMath.md)
- [Staker](classes/Staker.md)
- [SwapMath](classes/SwapMath.md)
- [SwapQuoter](classes/SwapQuoter.md)
- [SwapRouter](classes/SwapRouter.md)
- [Tick](classes/Tick.md)
- [TickLibrary](classes/TickLibrary.md)
- [TickList](classes/TickList.md)
- [TickListDataProvider](classes/TickListDataProvider.md)
- [TickMath](classes/TickMath.md)
- [Trade](classes/Trade.md)

### 接口

- [AllowedPermitArguments](interfaces/AllowedPermitArguments.md)
- [BestTradeOptions](interfaces/BestTradeOptions.md)
- [ClaimOptions](interfaces/ClaimOptions.md)
- [CollectOptions](interfaces/CollectOptions.md)
- [CommonAddLiquidityOptions](interfaces/CommonAddLiquidityOptions.md)
- [FeeOptions](interfaces/FeeOptions.md)
- [IncentiveKey](interfaces/IncentiveKey.md)
- [IncreaseSpecificOptions](interfaces/IncreaseSpecificOptions.md)
- [MethodParameters](interfaces/MethodParameters.md)
- [MintSpecificOptions](interfaces/MintSpecificOptions.md)
- [NFTPermitOptions](interfaces/NFTPermitOptions.md)
- [QuoteOptions](interfaces/QuoteOptions.md)
- [RemoveLiquidityOptions](interfaces/RemoveLiquidityOptions.md)
- [SafeTransferOptions](interfaces/SafeTransferOptions.md)
- [StandardPermitArguments](interfaces/StandardPermitArguments.md)
- [SwapOptions](interfaces/SwapOptions.md)
- [TickConstructorArgs](interfaces/TickConstructorArgs.md)
- [TickDataProvider](interfaces/TickDataProvider.md)
- [WithdrawOptions](interfaces/WithdrawOptions.md)

### 类型别名

- [AddLiquidityOptions](modules.md#addliquidityoptions)
- [FullWithdrawOptions](modules.md#fullwithdrawoptions)
- [IncreaseOptions](modules.md#increaseoptions)
- [MintOptions](modules.md#mintoptions)
- [PermitOptions](modules.md#permitoptions)

### 变量

- [ADDRESS_ZERO](modules.md#address_zero)
- [FACTORY_ADDRESS](modules.md#factory_address)
- [POOL_INIT_CODE_HASH](modules.md#pool_init_code_hash)
- [TICK_SPACINGS](modules.md#tick_spacings)

### 函数

- [computePoolAddress](modules.md#computepooladdress)
- [encodeRouteToPath](modules.md#encoderoutetopath)
- [encodeSqrtRatioX96](modules.md#encodesqrtratiox96)
- [isSorted](modules.md#issorted)
- [maxLiquidityForAmounts](modules.md#maxliquidityforamounts)
- [mostSignificantBit](modules.md#mostsignificantbit)
- [nearestUsableTick](modules.md#nearestusabletick)
- [priceToClosestTick](modules.md#pricetoclosesttick)
- [subIn256](modules.md#subin256)
- [tickToPrice](modules.md#ticktoprice)
- [toHex](modules.md#tohex)
- [tradeComparator](modules.md#tradecomparator)

## 类型别名

### AddLiquidityOptions

Ƭ **AddLiquidityOptions**: [`MintOptions`](modules.md#mintoptions) \| [`IncreaseOptions`](modules.md#increaseoptions)

#### 定义于

[nonfungiblePositionManager.ts:77](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L77)

___

### FullWithdrawOptions

Ƭ **FullWithdrawOptions**: [`ClaimOptions`](interfaces/ClaimOptions.md) & [`WithdrawOptions`](interfaces/WithdrawOptions.md)

#### 定义于

[staker.ts:8](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L8)

___

### IncreaseOptions

Ƭ **IncreaseOptions**: [`CommonAddLiquidityOptions`](interfaces/CommonAddLiquidityOptions.md) & [`IncreaseSpecificOptions`](interfaces/IncreaseSpecificOptions.md)

#### 定义于

[nonfungiblePositionManager.ts:75](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L75)

___

### MintOptions

Ƭ **MintOptions**: [`CommonAddLiquidityOptions`](interfaces/CommonAddLiquidityOptions.md) & [`MintSpecificOptions`](interfaces/MintSpecificOptions.md)

#### 定义于

[nonfungiblePositionManager.ts:74](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L74)

___

### PermitOptions

Ƭ **PermitOptions**: [`StandardPermitArguments`](interfaces/StandardPermitArguments.md) \| [`AllowedPermitArguments`](interfaces/AllowedPermitArguments.md)

#### 定义于

[selfPermit.ts:22](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/selfPermit.ts#L22)

## 变量

### ADDRESS_ZERO

• `Const` **ADDRESS_ZERO**: ``"0x0000000000000000000000000000000000000000"``

#### 定义于

[constants.ts:3](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/constants.ts#L3)

___

### FACTORY_ADDRESS

• `Const` **FACTORY_ADDRESS**: ``"0x1F98431c8aD98523631AE4a59f267346ea31F984"``

#### 定义于

[constants.ts:1](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/constants.ts#L1)

___

### POOL_INIT_CODE_HASH

• `Const` **POOL_INIT_CODE_HASH**: ``"0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54"``

#### 定义于

[constants.ts:5](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/constants.ts#L5)

___

### TICK_SPACINGS

• `Const` **TICK_SPACINGS**: { [amount in FeeAmount]: number }

默认的工厂按费用金额设置的刻度间隔。

#### 定义于

[constants.ts:20](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/constants.ts#L20)

## 函数

### computePoolAddress

▸ **computePoolAddress**(`__namedParameters`): `string`

计算池地址

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.factoryAddress` | `string` |
| `__namedParameters.fee` | [`FeeAmount`](enums/FeeAmount.md) |
| `__namedParameters.initCodeHashManualOverride?` | `string` |
| `__namedParameters.tokenA` | `Token` |
| `__namedParameters.tokenB` | `Token` |

#### 返回

`string`

池地址

#### 定义于

[utils/computePoolAddress.ts:16](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/computePoolAddress.ts#L16)

___

### encodeRouteToPath

▸ **encodeRouteToPath**(`route`, `exactOutput`): `string`

将路径转换为十六进制编码路径

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `route` | [`Route`](classes/Route.md)<`Currency`, `Currency`\> | 要转换为编码路径的v3路径 |
| `exactOutput` | `boolean` | 是否应反向编码路径，以进行精确输出交换 |

#### 返回

`string`

#### 定义于

[utils/encodeRouteToPath.ts:11](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/encodeRouteToPath.ts#L11)

___

### encodeSqrtRatioX96

▸ **encodeSqrtRatioX96**(`amount1`, `amount0`): `JSBI`

返回对应于给定的amount1和amount0比率的Q64.96平方根比率

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `amount1` | `BigintIsh` | 分子金额，即token1的数量 |
| `amount0` | `BigintIsh` | 分母金额，即token0的数量 |

#### 返回

`JSBI`

平方根比率

#### 定义于

[utils/encodeSqrtRatioX96.ts:11](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/encodeSqrtRatioX96.ts#L11)

___

### isSorted

▸ **isSorted**<`T`\>(`list`, `comparator`): `boolean`

确定一个刻度列表是否已排序

#### 类型参数

| 名称 |
| :------ |
| `T` |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `list` | `T`[] | 刻度列表 |
| `comparator` | (`a`: `T`, `b`: `T`) => `number` | 比较器 |

#### 返回

`boolean`

如果已排序则为真

#### 定义于

[utils/isSorted.ts:7](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/isSorted.ts#L7)

___

### maxLiquidityForAmounts

▸ **maxLiquidityForAmounts**(`sqrtRatioCurrentX96`, `sqrtRatioAX96`, `sqrtRatioBX96`, `amount0`, `amount1`, `useFullPrecision`): `JSBI`

根据给定的token0、token1数量以及刻度边界的价格计算可接收的最大流动性

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `sqrtRatioCurrentX96` | `default` | 当前价格 |
| `sqrtRatioAX96` | `default` | 较低边界价格 |
| `sqrtRatioBX96` | `default` | 较高边界价格 |
| `amount0` | `BigintIsh` | token0数量 |
| `amount1` | `BigintIsh` | token1数量 |
| `useFullPrecision` | `boolean` | 如果为false，流动性将根据路由器可以计算的最大值进行最大化，而不是核心理论上支持的最大值 |

#### 返回

`JSBI`

#### 定义于

[utils/maxLiquidityForAmounts.ts:68](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/maxLiquidityForAmounts.ts#L68)

___

### mostSignificantBit

▸ **mostSignificantBit**(`x`): `number`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `x` | `default` |

#### 返回

`number`

#### 定义于

[utils/mostSignificantBit.ts:12](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/mostSignificantBit.ts#L12)

___

### nearestUsableTick

▸ **nearestUsableTick**(`tick`, `tickSpacing`): `number`

返回最接近给定刻度且适用于给定刻度间距的刻度

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `tick` | `number` | 目标刻度 |
| `tickSpacing` | `number` | 池的刻度间隔 |

#### 返回

`number`

#### 定义于

[utils/nearestUsableTick.ts:9](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/nearestUsableTick.ts#L9)

___

### priceToClosestTick

▸ **priceToClosestTick**(`price`): `number`

返回第一个刻度，该刻度对于给定的价格大于或等于刻度价格

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `price` | `Price`<`Token`, `Token`\> | 对于返回表示小于或等于输入价格的输入价格的刻度，即返回的刻度价格小于或等于输入价格 |

#### 返回

`number`

#### 定义于

[utils/priceTickConversions.ts:29](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/priceTickConversions.ts#L29)

___

### subIn256

▸ **subIn256**(`x`, `y`): `JSBI`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `x` | `default` |
| `y` | `default` |

#### 返回

`JSBI`

#### 定义于

[utils/tickLibrary.ts:11](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickLibrary.ts#L11)

___

### tickToPrice

▸ **tickToPrice**(`baseToken`, `quoteToken`, `tick`): `Price`<`Token`, `Token`\>

返回与输入刻度和基价/报价代币对应的price对象
输入必须是代币，因为地址顺序用于解释刻度所代表的价格

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `baseToken` | `Token` | 价格的基本代币 |
| `quoteToken` | `Token` | 价格的报价代币 |
| `tick` | `number` | 要返回价格的刻度 |

#### 返回

`Price`<`Token`, `Token`\>

#### 定义于

[utils/priceTickConversions.ts:14](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/priceTickConversions.ts#L14)

___

### toHex

▸ **toHex**(`bigintIsh`): `string`

将大整数转换为十六进制字符串

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `bigintIsh` | `BigintIsh` |

#### 返回

`string`

十六进制编码的调用数据

#### 定义于

[utils/calldata.ts:23](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/calldata.ts#L23)

___

### tradeComparator

▸ **tradeComparator**<`TInput`, `TOutput`, `TTradeType`\>(`a`, `b`): `number`

交易比较器，输入输出比较器的扩展，还考虑了其他维度的交易来对它们进行排名

#### 类型参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `TInput` | extends `Currency` | 输入代币，无论是Ether还是ERC-20 |
| `TOutput` | extends `Currency` | 输出代币，无论是Ether还是ERC-20 |
| `TTradeType` | extends `TradeType` | 交易类型，无论是确切输入还是确切输出 |

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `a` | [`Trade`](classes/Trade.md)<`TInput`, `TOutput`, `TTradeType`\> | 第一个要比较的交易 |
| `b` | [`Trade`](classes/Trade.md)<`TInput`, `TOutput`, `TTradeType`\> | 第二个要比较的交易 |

#### 返回

`number`

交易数组中两个相邻元素的排序顺序

#### 定义于

[entities/trade.ts:16](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/trade.ts#L16)