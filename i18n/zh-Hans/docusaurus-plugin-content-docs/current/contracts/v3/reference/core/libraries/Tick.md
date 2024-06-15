包含用于管理刻度过程和相关计算的函数。

## 函数

### tickSpacingToMaxLiquidityPerTick

```solidity
  function tickSpacingToMaxLiquidityPerTick(
    int24 tickSpacing
  ) internal pure returns (uint128)
```

根据给定的刻度间距推导出每刻度的最大流动性。

在池构造函数中执行。

#### 参数：

| 名称          | 类型  | 描述                                                                                                                                                                             |
| :------------ | :---- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tickSpacing` | int24 | 所需的刻度间隔量，以`tickSpacing`的倍数实现，例如，一个3的tickSpacing要求每隔3个刻度初始化一次刻度，即...，-6，-3，0，3，6，... |

#### 返回值：

| 类型    | 描述            |
| :------ | :--------------------- |
| uint128 | 每刻度的最大流动性 |

### getFeeGrowthInside

```solidity
  function getFeeGrowthInside(
    mapping(int24 => struct Tick.Info) self,
    int24 tickLower,
    int24 tickUpper,
    int24 tickCurrent,
    uint256 feeGrowthGlobal0X128,
    uint256 feeGrowthGlobal1X128
  ) internal view returns (uint256 feeGrowthInside0X128, uint256 feeGrowthInside1X128)
```

检索费用增长数据

#### 参数：

| 名称                   | 类型                               | 描述                                                       |
| :--------------------- | :--------------------------------- | :-------------------------------------------------------------------------------------------- |
| `self`                 | mapping(int24 => struct Tick.Info) | 包含所有已初始化刻度信息的映射 |
| `tickLower`            | int24                              | 位置的下界刻度 |
| `tickUpper`            | int24                              | 位置的上界刻度 |
| `tickCurrent`          | int24                              | 当前刻度 |
| `feeGrowthGlobal0X128` | uint256                            | 在token0中的每单位流动性的全球总费用增长 |
| `feeGrowthGlobal1X128` | uint256                            | 在token1中的每单位流动性的全球总费用增长 |

#### 返回值：

| 名称                   | 类型    | 描述                                                                                     |
| :--------------------- | :------ | :---------------------------------------------------------------------------------------------- |
| `feeGrowthInside0X128` | uint256 | 在位置的刻度边界内的token0的每单位流动性总费用增长 |
| `feeGrowthInside1X128` | uint256 | 在位置的刻度边界内的token1的每单位流动性总费用增长 |

### update

```solidity
  function update(
    mapping(int24 => struct Tick.Info) self,
    int24 tick,
    int24 tickCurrent,
    int128 liquidityDelta,
    uint256 feeGrowthGlobal0X128,
    uint256 feeGrowthGlobal1X128,
    bool upper,
    uint128 maxLiquidity
  ) internal returns (bool flipped)
```

更新一个刻度，并返回true如果刻度从已初始化变为未初始化，或者反之亦然。

#### 参数：

| 名称                   | 类型                               | 描述                                                                                                |
| :--------------------- | :--------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `self`                 | mapping(int24 => struct Tick.Info) | 包含所有已初始化刻度信息的映射 |
| `tick`                 | int24                              | 将被更新的刻度 |
| `tickCurrent`          | int24                              | 当前刻度 |
| `liquidityDelta`       | int128                             | 当从左向右（或从右向左）穿过刻度时，要添加（减去）的新流动性数量 |
| `feeGrowthGlobal0X128` | uint256                            | 在token0中的每单位流动性的全球总费用增长 |
| `feeGrowthGlobal1X128` | uint256                            | 在token1中的每单位流动性的全球总费用增长 |
| `upper`                | bool                               | 更新位置的上界刻度为真，否则更新位置的下界刻度为假 |
| `maxLiquidity`         | uint128                            | 单个刻度的最大流动性分配 |

#### 返回值：

| 名称      | 类型 | 描述                                                                   |
| :-------- | :--- | :---------------------------------------------------------------------------- |
| `flipped` | bool | 刻度是否从已初始化变为未初始化，或者反之亦然 |

### clear

```solidity
  function clear(
    mapping(int24 => struct Tick.Info) self,
    int24 tick
  ) internal
```

清除刻度数据

#### 参数：

| 名称   | 类型                               | 描述                                                                   |
| :----- | :--------------------------------- | :---------------------------------------------------------------------------- |
| `self` | mapping(int24 => struct Tick.Info) | 包含所有已初始化刻度信息的映射 |
| `tick` | int24                              | 将被清除的刻度 |

### cross

```solidity
  function cross(
    mapping(int24 => struct Tick.Info) self,
    int24 tick,
    uint256 feeGrowthGlobal0X128,
    uint256 feeGrowthGlobal1X128
  ) internal returns (int128 liquidityNet)
```

根据价格变动过渡到下一个刻度。

#### 参数：

| 名称                   | 类型                               | 描述                                                       |
| :--------------------- | :--------------------------------- | :-------------------------------------------------------------------------------------------- |
| `self`                 | mapping(int24 => struct Tick.Info) | 包含所有已初始化刻度信息的映射 |
| `tick`                 | int24                              | 过渡的目标刻度 |
| `feeGrowthGlobal0X128` | uint256                            | 在token0中的每单位流动性的全球总费用增长 |
| `feeGrowthGlobal1X128` | uint256                            | 在token1中的每单位流动性的全球总费用增长 |

#### 返回值：

| 名称           | 类型   | 描述                                                                                        |
| :------------- | :----- | :------------------------------------------------------------------------------------------------- |
| `liquidityNet` | int128 | 当从左向右（或从右向左）穿过刻度时，添加（减去）的流动性数量 |