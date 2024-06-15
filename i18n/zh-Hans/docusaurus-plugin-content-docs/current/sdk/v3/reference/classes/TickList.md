[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / TickList

# 类: TickList

用于与排序的刻度列表交互的实用方法

## 目录

### 构造函数

- [constructor](TickList.md#constructor)

### 方法

- [binarySearch](TickList.md#binarysearch)
- [getTick](TickList.md#gettick)
- [isAtOrAboveLargest](TickList.md#isatorabovelargest)
- [isBelowSmallest](TickList.md#isbelowsmallest)
- [nextInitializedTick](TickList.md#nextinitializedtick)
- [nextInitializedTickWithinOneWord](TickList.md#nextinitializedtickwithinoneword)
- [validateList](TickList.md#validatelist)

## 构造函数

### constructor

• `Private` **new TickList**()

无法构造

#### 定义于

[utils/tickList.ts:18](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L18)

## 方法

### binarySearch

▸ `Static` `Private` **binarySearch**(`ticks`, `tick`): `number`

在刻度列表中查找小于或等于刻度的最大刻度

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `ticks` | readonly [`Tick`](Tick.md)[] | 刻度列表 |
| `tick` | `number` | 要查找小于或等于它的最大刻度 |

#### 返回

`number`

#### 定义于

[utils/tickList.ts:62](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L62)

___

### getTick

▸ `Static` **getTick**(`ticks`, `index`): [`Tick`](Tick.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `ticks` | readonly [`Tick`](Tick.md)[] |
| `index` | `number` |

#### 返回

[`Tick`](Tick.md)

#### 定义于

[utils/tickList.ts:50](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L50)

___

### isAtOrAboveLargest

▸ `Static` **isAtOrAboveLargest**(`ticks`, `tick`): `boolean`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `ticks` | readonly [`Tick`](Tick.md)[] |
| `tick` | `number` |

#### 返回

`boolean`

#### 定义于

[utils/tickList.ts:45](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L45)

___

### isBelowSmallest

▸ `Static` **isBelowSmallest**(`ticks`, `tick`): `boolean`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `ticks` | readonly [`Tick`](Tick.md)[] |
| `tick` | `number` |

#### 返回

`boolean`

#### 定义于

[utils/tickList.ts:40](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L40)

___

### nextInitializedTick

▸ `Static` **nextInitializedTick**(`ticks`, `tick`, `lte`): [`Tick`](Tick.md)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `ticks` | readonly [`Tick`](Tick.md)[] |
| `tick` | `number` |
| `lte` | `boolean` |

#### 返回

[`Tick`](Tick.md)

#### 定义于

[utils/tickList.ts:83](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L83)

___

### nextInitializedTickWithinOneWord

▸ `Static` **nextInitializedTickWithinOneWord**(`ticks`, `tick`, `lte`, `tickSpacing`): [`number`, `boolean`]

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `ticks` | readonly [`Tick`](Tick.md)[] |
| `tick` | `number` |
| `lte` | `boolean` |
| `tickSpacing` | `number` |

#### 返回

[`number`, `boolean`]

#### 定义于

[utils/tickList.ts:101](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L101)

___

### validateList

▸ `Static` **validateList**(`ticks`, `tickSpacing`): `void`

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `ticks` | [`Tick`](Tick.md)[] |
| `tickSpacing` | `number` |

#### 返回

`void`

#### 定义于

[utils/tickList.ts:20](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickList.ts#L20)