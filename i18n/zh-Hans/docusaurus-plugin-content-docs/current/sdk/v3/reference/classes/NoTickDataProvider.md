[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / NoTickDataProvider

# 类: NoTickDataProvider

此tick数据提供者无法获取任何tick数据。在需要时会抛出异常。如果你的使用场景中不需要加载tick数据，这将非常有用。

## 实现

- [`TickDataProvider`](../interfaces/TickDataProvider.md)

## 目录

### 构造函数

- [constructor](NoTickDataProvider.md#constructor)

### 属性

- [ERROR_MESSAGE](NoTickDataProvider.md#error_message)

### 方法

- [getTick](NoTickDataProvider.md#gettick)
- [nextInitializedTickWithinOneWord](NoTickDataProvider.md#nextinitializedtickwithinoneword)

## 构造函数

### constructor

• **新的 NoTickDataProvider**()

## 属性

### ERROR_MESSAGE

▪ `静态` `私有` **ERROR_MESSAGE**: `字符串` = `'未给定任何tick数据提供者'`

#### 定义于

[entities/tickDataProvider.ts:27](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/tickDataProvider.ts#L27)

## 方法

### getTick

▸ **getTick**(`_tick`): `Promise`<{ `liquidityNet`: `BigintIsh`  }\>

返回与特定tick对应的信息

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `_tick` | `数字` | 要加载的tick |

#### 返回

`Promise`<{ `liquidityNet`: `BigintIsh`  }\>

#### 实现了

[TickDataProvider](../interfaces/TickDataProvider.md).[getTick](../interfaces/TickDataProvider.md#gettick)

#### 定义于

[entities/tickDataProvider.ts:28](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/tickDataProvider.ts#L28)

___

### nextInitializedTickWithinOneWord

▸ **nextInitializedTickWithinOneWord**(`_tick`, `_lte`, `_tickSpacing`): `Promise`<[`数字`, `布尔`]\>

返回在单一单词内初始化的下一个tick

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `_tick` | `数字` | 当前的tick |
| `_lte` | `布尔` | 下一个tick是否应小于或等于当前tick |
| `_tickSpacing` | `数字` | 池的tick间距 |

#### 返回

`Promise`<[`数字`, `布尔`]\>

#### 实现了

[TickDataProvider](../interfaces/TickDataProvider.md).[nextInitializedTickWithinOneWord](../interfaces/TickDataProvider.md#nextinitializedtickwithinoneword)

#### 定义于

[entities/tickDataProvider.ts:32](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/entities/tickDataProvider.ts#L32)