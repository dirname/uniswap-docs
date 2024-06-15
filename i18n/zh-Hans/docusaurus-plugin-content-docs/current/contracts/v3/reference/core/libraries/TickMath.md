计算大小为 1.0001 的刻度的平方根价格，即 sqrt(1.0001^tick)，作为固定点 Q64.96 数字。支持介于 2^-128 和 2^128 之间的价格。

## 函数

### getSqrtRatioAtTick

```solidity
  function getSqrtRatioAtTick(
    int24 tick
  ) internal pure returns (uint160 sqrtPriceX96)
```

计算 sqrt(1.0001^tick) * 2^96

如果 |tick| > 最大刻度，则抛出异常

#### 参数：

| 名称   | 类型  | 描述                          |
| :----- | :---- | :----------------------------------- |
| `tick` | int24 | 上述公式中的输入刻度           |

#### 返回值：

| 名称           | 类型    | 描述                                                                                      |
| :------------- | :------ | :----------------------------------------------------------------------------------------------- |
| `sqrtPriceX96` | uint160 | 代表两种资产比率（token1/token0）的平方根的固定点 Q64.96 数字，在给定的刻度下 |

### getTickAtSqrtRatio

```solidity
  function getTickAtSqrtRatio(
    uint160 sqrtPriceX96
  ) internal pure returns (int24 tick)
```

计算最大的刻度值，使得 getRatioAtTick(tick) <= 比率

如果 sqrtPriceX96 < MIN_SQRT_RATIO，则抛出异常，因为 MIN_SQRT_RATIO 是 getRatioAtTick 可能返回的最低值。

#### 参数：

| 名称           | 类型    | 描述                                              |
| :------------- | :------ | :------------------------------------------------------- |
| `sqrtPriceX96` | uint160 | 计算刻度的平方根比率，作为 Q64.96                       |

#### 返回值：

| 名称   | 类型  | 描述                                                                    |
| :----- | :---- | :----------------------------------------------------------------------------- |
| `tick` | int24 | 对于比率小于或等于输入比率的最大刻度 |