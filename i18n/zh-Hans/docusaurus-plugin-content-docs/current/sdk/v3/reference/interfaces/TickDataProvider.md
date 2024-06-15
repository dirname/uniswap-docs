[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / TickDataProvider

# 接口：TickDataProvider

提供关于ticks的信息

## 实现者

- [`NoTickDataProvider`](../classes/NoTickDataProvider.md)
- [`TickListDataProvider`](../classes/TickListDataProvider.md)

## 目录

### 方法

- [getTick](TickDataProvider.md#gettick)
- [nextInitializedTickWithinOneWord](TickDataProvider.md#nextinitializedtickwithinoneword)

## 方法

### getTick

▸ **getTick**(`tick`): `Promise`<{ `liquidityNet`: `BigintIsh`  }\>

返回对应于特定tick的信息

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `tick` | `number` | 要加载的tick |

#### 返回

`Promise`<{ `liquidityNet`: `BigintIsh`  }\>

#### 定义于

[entities/tickDataProvider.ts:11](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/tickDataProvider.ts#L11)

___

### nextInitializedTickWithinOneWord

▸ **nextInitializedTickWithinOneWord**(`tick`, `lte`, `tickSpacing`): `Promise`<[`number`, `boolean`]\>

返回在单个字内初始化的下一个tick

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `tick` | `number` | 当前的tick |
| `lte` | `boolean` | 下一个tick是否应小于等于当前tick |
| `tickSpacing` | `number` | 池的tick间距 |

#### 返回

`Promise`<[`number`, `boolean`]\>

#### 定义于

[entities/tickDataProvider.ts:19](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/tickDataProvider.ts#L19)