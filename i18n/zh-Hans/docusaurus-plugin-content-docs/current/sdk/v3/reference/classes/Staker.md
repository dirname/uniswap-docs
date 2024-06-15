[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / Staker

# 类: Staker

## 目录

### 构造函数

- [constructor](Staker.md#constructor)

### 属性

- [INCENTIVE\_KEY\_ABI](Staker.md#incentive_key_abi)
- [INTERFACE](Staker.md#interface)

### 方法

- [\_encodeIncentiveKey](Staker.md#_encodeincentivekey)
- [collectRewards](Staker.md#collectrewards)
- [encodeClaim](Staker.md#encodeclaim)
- [encodeDeposit](Staker.md#encodedeposit)
- [withdrawToken](Staker.md#withdrawtoken)

## 构造函数

### constructor

• `受保护` **new Staker**()

#### 定义于

[staker.ts:72](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L72)

## 属性

### INCENTIVE\_KEY\_ABI

▪ `静态` `私有` **INCENTIVE\_KEY\_ABI**: `字符串` = `'tuple(address rewardToken, address pool, uint256 startTime, uint256 endTime, address refundee)'`

#### 定义于

[staker.ts:73](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L73)

___

### INTERFACE

▪ `静态` **INTERFACE**: `接口`

#### 定义于

[staker.ts:70](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L70)

## 方法

### \_encodeIncentiveKey

▸ `静态` `私有` **_encodeIncentiveKey**(`incentiveKey`): `对象`

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `incentiveKey` | [`IncentiveKey`](../interfaces/IncentiveKey.md) | 一个 `IncentiveKey`，表示一个独特的质押程序。 |

#### 返回类型

`对象`

一个被 ethers 解析的编码后的 IncentiveKey

#### 定义于

[staker.ts:194](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L194)

___

### collectRewards

▸ `静态` **collectRewards**(`incentiveKeys`, `options`): [`MethodParameters`](../interfaces/MethodParameters.md)

注意：一个 `tokenId` 可以在多个程序中进行质押，但要领取奖励并继续该程序，你必须先解除质押，领取奖励，然后再重新质押。

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `incentiveKeys` | [`IncentiveKey`](../interfaces/IncentiveKey.md) \| [`IncentiveKey`](../interfaces/IncentiveKey.md)[] | 一个 IncentiveKey 或者 IncentiveKey 数组，表示 `tokenId` 被质押在哪些程序中。输入 IncentiveKey 数组可以为每个程序领取奖励。 |
| `options` | [`ClaimOptions`](../interfaces/ClaimOptions.md) | ClaimOptions 用于指定 tokenId、接收人以及想要收集的数量。注意，如果你同时从多个程序收集奖励，你只能为所有程序指定一个金额和一个接收人。 |

#### 返回类型

[`MethodParameters`](../interfaces/MethodParameters.md)

#### 定义于

[staker.ts:107](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L107)

___

### encodeClaim

▸ `静态` `私有` **encodeClaim**(`incentiveKey`, `options`): `字符串`[]

为了领取奖励，必须先解除质押，然后才能领取。

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `incentiveKey` | [`IncentiveKey`](../interfaces/IncentiveKey.md) | 一个质押程序的独特标识符。 |
| `options` | [`ClaimOptions`](../interfaces/ClaimOptions.md) | 用于生成 claim 的 calldata 的选项。除非你解除质押，否则无法领取。 |

#### 返回类型

`字符串`[]

用于 'unstakeToken' 和 'claimReward' 的 calldatas。

#### 定义于

[staker.ts:82](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L82)

___

### encodeDeposit

▸ `静态` **encodeDeposit**(`incentiveKeys`): `字符串`

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `incentiveKeys` | [`IncentiveKey`](../interfaces/IncentiveKey.md) \| [`IncentiveKey`](../interfaces/IncentiveKey.md)[] | 单个 IncentiveKey 或 IncentiveKey 数组，用于编码并在 `safeTransferFrom` 的数据参数中使用 |

#### 返回类型

`字符串`

一个作为字符串的 IncentiveKey

#### 定义于

[staker.ts:173](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L173)

___

### withdrawToken

▸ `静态` **withdrawToken**(`incentiveKeys`, `withdrawOptions`): [`MethodParameters`](../interfaces/MethodParameters.md)

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `incentiveKeys` | [`IncentiveKey`](../interfaces/IncentiveKey.md) \| [`IncentiveKey`](../interfaces/IncentiveKey.md)[] | 要解除质押的一系列激励密钥。应包括 `options.tokenId` 所有质押的激励密钥（独特的质押程序）。 |
| `withdrawOptions` | [`FullWithdrawOptions`](../modules.md#fullwithdrawoptions) | 用于生成 claim calldata 和 withdraw calldata 的选项。没有为 `tokenId` 解除所有程序的质押，就不能提取资金。 |

#### 返回类型

[`MethodParameters`](../interfaces/MethodParameters.md)

用于解除质押、领取和提取的 calldata。

#### 定义于

[staker.ts:136](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L136)