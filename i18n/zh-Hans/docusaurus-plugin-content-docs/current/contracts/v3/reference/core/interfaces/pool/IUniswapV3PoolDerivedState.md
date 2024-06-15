包含视图函数，用于提供关于池的信息，这些信息是计算得出的，而不是存储在区块链上的。这里的方法可能具有可变的燃气费用。

## 函数

### observe

```solidity
  function observe(
    uint32[] secondsAgos
  ) external view returns (int56[] tickCumulatives, uint160[] secondsPerLiquidityCumulativeX128s)
```

返回每个时间戳 `secondsAgo` 从当前区块时间戳起的累计刻度和流动性

要获取时间段加权平均刻度或流动性范围内的值，你必须用两个值调用此方法，一个代表期初，另一个代表期末。例如，要获取过去一小时的时间加权平均刻度，你必须用 secondsAgos = [3600, 0] 调用它。
时间加权平均刻度代表池的几何时间加权平均价格，在 log 基于 sqrt(1.0001) 的 token1 / token0。可以使用 TickMath 库从刻度值转换为比率。

#### 参数：

| 名称           | 类型       | 描述                                                                                     |
| :------------- | :--------- | :--------------------------------------------------------------------------------------- |
| `secondsAgos`  | uint32[]   | 应返回每个累计刻度和流动性值的时间段（秒）前                                            |

#### 返回值：

| 名称                                   | 类型         | 描述                                                                                                  |
| :------------------------------------- | :----------- | :---------------------------------------------------------------------------------------------------- |
| `tickCumulatives`                      | int56[]      | 截至每个 `secondsAgos` 从当前区块时间戳起的累计刻度值                                                 |
| `secondsPerLiquidityCumulativeX128s`   | uint160[]    | 截至每个 `secondsAgos` 从当前区块起的每单位流动性累计秒数（以 X128 格式）                             |

时间戳

### snapshotCumulativesInside

```solidity
  function snapshotCumulativesInside(
    int24 tickLower,
    int24 tickUpper
  ) external returns (int56 tickCumulativeInside, uint160 secondsPerLiquidityInsideX128, uint32 secondsInside)
```

返回刻度范围内刻度累计、每单位流动性和范围内的秒数快照

快照只能与其它在同一持仓期内拍摄的快照进行比较。即，如果在第一次拍摄快照和第二次拍摄快照之间，没有持续持有仓位，则不能比较快照。

#### 参数：

| 名称        | 类型  | 描述                           |
| :---------- | :---- | :----------------------------- |
| `tickLower` | int24 | 刻度范围的下限                 |
| `tickUpper` | int24 | 刻度范围的上限                 |

#### 返回值：

| 名称                                | 类型    | 描述                                                  |
| :---------------------------------- | :------ | :---------------------------------------------------- |
| `tickCumulativeInside`              | int56   | 范围内的刻度累计快照                                  |
| `secondsPerLiquidityInsideX128`     | uint160 | 范围内每单位流动性秒数的快照（以 X128 格式）         |
| `secondsInside`                     | uint32  | 范围内秒数的快照（表示该范围内有流动性的时间长度）   |