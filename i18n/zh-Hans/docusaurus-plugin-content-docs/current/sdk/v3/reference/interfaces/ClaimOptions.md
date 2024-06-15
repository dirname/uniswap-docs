[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / ClaimOptions

# 接口：ClaimOptions

在申领奖励时指定的选项。

## 目录

### 属性

- [amount](ClaimOptions.md#amount)
- [recipient](ClaimOptions.md#recipient)
- [tokenId](ClaimOptions.md#tokenid)

## 属性

### amount

• `可选` **amount**: `BigintIsh`

要申领的 `rewardToken` 的数量。0 表示申领全部。

#### 定义于

[staker.ts:52](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L52)

___

### recipient

• **recipient**: `string`

发送奖励的目标地址。

#### 定义于

[staker.ts:47](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L47)

___

### tokenId

• **tokenId**: `BigintIsh`

NFT 的 ID

#### 定义于

[staker.ts:42](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L42)