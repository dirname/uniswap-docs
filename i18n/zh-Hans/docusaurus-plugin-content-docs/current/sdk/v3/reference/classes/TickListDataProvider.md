[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / TickListDataProvider

# 类: TickListDataProvider

一个由内存中的 ticks 数组支持的 ticks 数据提供者。

## 实现了

- [`TickDataProvider`](../interfaces/TickDataProvider.md)

## 目录

### 构造函数

- [constructor](TickListDataProvider.md#constructor)

### 属性

- [ticks](TickListDataProvider.md#ticks)

### 方法

- [getTick](TickListDataProvider.md#gettick)
- [nextInitializedTickWithinOneWord](TickListDataProvider.md#nextinitializedtickwithinoneword)

## 构造函数

### constructor

• **new TickListDataProvider**(`ticks`, `tickSpacing`)

#### 参数

| 名称 | 类型 |
| :------ | :------ |
| `ticks` | ([`Tick`](Tick.md) \| [`TickConstructorArgs`](../interfaces/TickConstructorArgs.md))[] |
| `tickSpacing` | `number` |

#### 定义于

[entities/tickListDataProvider.ts:12](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/tickListDataProvider.ts#L12)

## 属性

### ticks

• `私有` **ticks**: readonly [`Tick`](Tick.md)[]

#### 定义于

[entities/tickListDataProvider.ts:10](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/tickListDataProvider.ts#L10)

## 方法

### getTick

▸ **getTick**(`tick`): `Promise`<{ `liquidityGross`: `BigintIsh` ; `liquidityNet`: `BigintIsh`  }\>

返回对应特定 tick 的信息

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `tick` | `number` | 要加载的 tick |

#### 返回

`Promise`<{ `liquidityGross`: `BigintIsh` ; `liquidityNet`: `BigintIsh`  }\>

#### 实现了

[TickDataProvider](../interfaces/TickDataProvider.md).[getTick](../interfaces/TickDataProvider.md#gettick)

#### 定义于

[entities/tickListDataProvider.ts:18](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/tickListDataProvider.ts#L18)

___

### nextInitializedTickWithinOneWord

▸ **nextInitializedTickWithinOneWord**(`tick`, `lte`, `tickSpacing`): `Promise`<[`number`, `boolean`]\>

返回在单个字内初始化的下一个 tick

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `tick` | `number` | 当前的 tick |
| `lte` | `boolean` | 下一个 tick 是否应该小于等于当前的 tick |
| `tickSpacing` | `number` | 池的 tick 间距 |

#### 返回

`Promise`<[`number`, `boolean`]\>

#### 实现了

[TickDataProvider](../interfaces/TickDataProvider.md).[nextInitializedTickWithinOneWord](../interfaces/TickDataProvider.md#nextinitializedtickwithinoneword)

#### 定义于

[entities/tickListDataProvider.ts:22](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/tickListDataProvider.ts#L22)