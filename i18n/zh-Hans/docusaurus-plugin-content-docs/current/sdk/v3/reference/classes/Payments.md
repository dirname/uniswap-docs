[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / Payments

# 类: Payments

## 目录

### 构造函数

- [constructor](Payments.md#constructor)

### 属性

- [INTERFACE](Payments.md#interface)

### 方法

- [encodeFeeBips](Payments.md#encodefeebips)
- [encodeRefundETH](Payments.md#encoderefundeth)
- [encodeSweepToken](Payments.md#encodesweeptoken)
- [encodeUnwrapWETH9](Payments.md#encodeunwrapweth9)

## 构造函数

### constructor

• `Private` **new Payments**()

无法构造。

#### 定义于

[payments.ts:25](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/payments.ts#L25)

## 属性

### INTERFACE

▪ `Static` **INTERFACE**: `Interface`

#### 定义于

[payments.ts:20](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/payments.ts#L20)

## 方法

### encodeFeeBips

▸ `Static` `Private` **encodeFeeBips**(`fee`): `string`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `fee` | `Percent` |

#### 返回

`string`

#### 定义于

[payments.ts:27](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/payments.ts#L27)

___

### encodeRefundETH

▸ `Static` **encodeRefundETH**(): `string`

#### 返回

`string`

#### 定义于

[payments.ts:73](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/payments.ts#L73)

___

### encodeSweepToken

▸ `Static` **encodeSweepToken**(`token`, `amountMinimum`, `recipient`, `feeOptions?`): `string`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `token` | `Token` |
| `amountMinimum` | `default` |
| `recipient` | `string` |
| `feeOptions?` | [`FeeOptions`](../interfaces/FeeOptions.md) |

#### 返回

`string`

#### 定义于

[payments.ts:49](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/payments.ts#L49)

___

### encodeUnwrapWETH9

▸ `Static` **encodeUnwrapWETH9**(`amountMinimum`, `recipient`, `feeOptions?`): `string`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `amountMinimum` | `default` |
| `recipient` | `string` |
| `feeOptions?` | [`FeeOptions`](../interfaces/FeeOptions.md) |

#### 返回

`string`

#### 定义于

[payments.ts:31](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/payments.ts#L31)