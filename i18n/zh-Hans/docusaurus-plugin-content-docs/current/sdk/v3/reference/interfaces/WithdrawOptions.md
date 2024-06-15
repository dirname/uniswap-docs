[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / WithdrawOptions

# 接口: WithdrawOptions

在撤回仓位时指定的选项。

## 目录

### 属性

- [data](WithdrawOptions.md#data)
- [owner](WithdrawOptions.md#owner)

## 属性

### data

• `可选` **data**: `字符串`

在撤回时设置。`data` 在将仓位从合约转回所有者时传递给 `safeTransferFrom`。

#### 定义于

[staker.ts:66](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L66)

___

### owner

• **owner**: `字符串`

在撤回时设置。撤回时，仓位将被发送到 `owner`。

#### 定义于

[staker.ts:61](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L61)