[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / IncentiveKey

# 接口：IncentiveKey

表示一个独特的质押计划。

## 目录

### 属性

- [endTime](IncentiveKey.md#endtime)
- [pool](IncentiveKey.md#pool)
- [refundee](IncentiveKey.md#refundee)
- [rewardToken](IncentiveKey.md#rewardtoken)
- [startTime](IncentiveKey.md#starttime)

## 属性

### endTime

• **endTime**: `BigintIsh`

激励计划结束的时间。

#### 定义于

[staker.ts:28](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L28)

___

### pool

• **pool**: [`Pool`](../classes/Pool.md)

必须在其中提供质押头寸的池子。

#### 定义于

[staker.ts:20](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L20)

___

### refundee

• **refundee**: `string`

在`endTime`接收任何剩余奖励代币的地址。

#### 定义于

[staker.ts:32](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L32)

___

### rewardToken

• **rewardToken**: `Token`

参与质押计划所获得的奖励代币。

#### 定义于

[staker.ts:16](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L16)

___

### startTime

• **startTime**: `BigintIsh`

激励计划开始的时间。

#### 定义于

[staker.ts:24](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L24)