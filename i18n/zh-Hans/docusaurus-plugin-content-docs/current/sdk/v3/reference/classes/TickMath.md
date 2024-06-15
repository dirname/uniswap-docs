[@uniswap/v3-sdk](../README.md) / [Exports](../modules.md) / TickMath

# 类: TickMath

## 目录

### 构造函数

- [constructor](TickMath.md#constructor)

### 属性

- [MAX\_SQRT\_RATIO](TickMath.md#max_sqrt_ratio)
- [MAX\_TICK](TickMath.md#max_tick)
- [MIN\_SQRT\_RATIO](TickMath.md#min_sqrt_ratio)
- [MIN\_TICK](TickMath.md#min_tick)

### 方法

- [getSqrtRatioAtTick](TickMath.md#getsqrtratioattick)
- [getTickAtSqrtRatio](TickMath.md#gettickatsqrtratio)

## 构造函数

### constructor

• `Private` **new TickMath**()

无法构造。

#### 定义于

[utils/tickMath.ts:17](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickMath.ts#L17)

## 属性

### MAX\_SQRT\_RATIO

▪ `Static` **MAX\_SQRT\_RATIO**: `default`

对应于可在任何池中使用的最大刻度的平方根比率。

#### 定义于

[utils/tickMath.ts:35](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickMath.ts#L35)

---

### MAX\_TICK

▪ `Static` **MAX\_TICK**: `number` = `-TickMath.MIN_TICK`

可在任何池中使用的最大刻度。

#### 定义于

[utils/tickMath.ts:26](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickMath.ts#L26)

---

### MIN\_SQRT\_RATIO

▪ `Static` **MIN\_SQRT\_RATIO**: `default`

对应于可在任何池中使用的最小刻度的平方根比率。

#### 定义于

[utils/tickMath.ts:31](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickMath.ts#L31)

---

### MIN\_TICK

▪ `Static` **MIN\_TICK**: `number` = `-887272`

可在任何池中使用的最小刻度。

#### 定义于

[utils/tickMath.ts:22](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickMath.ts#L22)

## 方法

### getSqrtRatioAtTick

▸ `Static` **getSqrtRatioAtTick**(`tick`): `default`

根据给定的刻度返回 Q64.96 的平方根比率。平方根比率计算为 sqrt(1.0001)^tick

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `tick` | `number` | 要计算平方根比率的刻度 |

#### 返回

`default`

#### 定义于

[utils/tickMath.ts:41](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickMath.ts#L41)

---

### getTickAtSqrtRatio

▸ `Static` **getTickAtSqrtRatio**(`sqrtRatioX96`): `number`

根据给定的平方根比率返回对应的刻度，使得 #getSqrtRatioAtTick(tick) <= sqrtRatioX96
且 #getSqrtRatioAtTick(tick + 1) > sqrtRatioX96

#### 参数

| 名称 | 类型 | 描述 |
| :------ | :------ | :------ |
| `sqrtRatioX96` | `default` | 要计算刻度的 Q64.96 的平方根比率 |

#### 返回

`number`

#### 定义于

[utils/tickMath.ts:82](https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/utils/tickMath.ts#L82)