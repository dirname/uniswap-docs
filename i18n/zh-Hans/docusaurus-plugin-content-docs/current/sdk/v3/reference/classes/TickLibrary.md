[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / TickLibrary

# 类: TickLibrary

## 目录

### 构造函数

- [constructor](TickLibrary.md#constructor)

### 方法

- [getFeeGrowthInside](TickLibrary.md#getfeegrowthinside)

## 构造函数

### constructor

• `Private` **new TickLibrary**()

无法构造。

#### 定义于

[utils/tickLibrary.ts:25](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickLibrary.ts#L25)

## 方法

### getFeeGrowthInside

▸ `Static` **getFeeGrowthInside**(`feeGrowthOutsideLower`, `feeGrowthOutsideUpper`, `tickLower`, `tickUpper`, `tickCurrent`, `feeGrowthGlobal0X128`, `feeGrowthGlobal1X128`): `default`[]

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `feeGrowthOutsideLower` | `FeeGrowthOutside` |
| `feeGrowthOutsideUpper` | `FeeGrowthOutside` |
| `tickLower` | `number` |
| `tickUpper` | `number` |
| `tickCurrent` | `number` |
| `feeGrowthGlobal0X128` | `default` |
| `feeGrowthGlobal1X128` | `default` |

#### 返回

`default`[]

#### 定义于

[utils/tickLibrary.ts:27](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickLibrary.ts#L27)