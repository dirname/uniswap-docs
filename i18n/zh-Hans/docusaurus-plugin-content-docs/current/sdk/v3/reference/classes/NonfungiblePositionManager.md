[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / NonfungiblePositionManager

# 类: NonfungiblePositionManager

## 目录

### 构造函数

- [constructor](NonfungiblePositionManager.md#constructor)

### 属性

- [INTERFACE](NonfungiblePositionManager.md#interface)

### 方法

- [addCallParameters](NonfungiblePositionManager.md#addcallparameters)
- [collectCallParameters](NonfungiblePositionManager.md#collectcallparameters)
- [createCallParameters](NonfungiblePositionManager.md#createcallparameters)
- [encodeCollect](NonfungiblePositionManager.md#encodecollect)
- [encodeCreate](NonfungiblePositionManager.md#encodecreate)
- [removeCallParameters](NonfungiblePositionManager.md#removecallparameters)
- [safeTransferFromParameters](NonfungiblePositionManager.md#safetransferfromparameters)

## 构造函数

### constructor

• `私有` **new NonfungiblePositionManager**()

无法构造。

#### 定义于

[nonfungiblePositionManager.ts:181](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L181)

## 属性

### INTERFACE

▪ `静态` **INTERFACE**: `Interface`

#### 定义于

[nonfungiblePositionManager.ts:176](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L176)

## 方法

### addCallParameters

▸ `静态` **addCallParameters**(`position`, `options`): [`MethodParameters`](../interfaces/MethodParameters.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `position` | [`Position`](Position.md) |
| `options` | [`AddLiquidityOptions`](../modules.md#addliquidityoptions) |

#### 返回类型

[`MethodParameters`](../interfaces/MethodParameters.md)

#### 定义于

[nonfungiblePositionManager.ts:199](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L199)

___

### collectCallParameters

▸ `静态` **collectCallParameters**(`options`): [`MethodParameters`](../interfaces/MethodParameters.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `options` | [`CollectOptions`](../interfaces/CollectOptions.md) |

#### 返回类型

[`MethodParameters`](../interfaces/MethodParameters.md)

#### 定义于

[nonfungiblePositionManager.ts:326](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L326)

___

### createCallParameters

▸ `静态` **createCallParameters**(`pool`): [`MethodParameters`](../interfaces/MethodParameters.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `pool` | [`Pool`](Pool.md) |

#### 返回类型

[`MethodParameters`](../interfaces/MethodParameters.md)

#### 定义于

[nonfungiblePositionManager.ts:192](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L192)

___

### encodeCollect

▸ `静态` `私有` **encodeCollect**(`options`): `string`[]

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `options` | [`CollectOptions`](../interfaces/CollectOptions.md) |

#### 返回类型

`string`[]

#### 定义于

[nonfungiblePositionManager.ts:286](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L286)

___

### encodeCreate

▸ `静态` `私有` **encodeCreate**(`pool`): `string`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `pool` | [`Pool`](Pool.md) |

#### 返回类型

`string`

#### 定义于

[nonfungiblePositionManager.ts:183](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L183)

___

### removeCallParameters

▸ `静态` **removeCallParameters**(`position`, `options`): [`MethodParameters`](../interfaces/MethodParameters.md)

生成完全或部分退出仓位的调用数据

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `position` | [`Position`](Position.md) | 要退出的仓位 |
| `options` | [`RemoveLiquidityOptions`](../interfaces/RemoveLiquidityOptions.md) | 生成调用数据所需的附加信息 |

#### 返回类型

[`MethodParameters`](../interfaces/MethodParameters.md)

调用参数

#### 定义于

[nonfungiblePositionManager.ts:341](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L341)

___

### safeTransferFromParameters

▸ `静态` **safeTransferFromParameters**(`options`): [`MethodParameters`](../interfaces/MethodParameters.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `options` | [`SafeTransferOptions`](../interfaces/SafeTransferOptions.md) |

#### 返回类型

[`MethodParameters`](../interfaces/MethodParameters.md)

#### 定义于

[nonfungiblePositionManager.ts:416](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L416)