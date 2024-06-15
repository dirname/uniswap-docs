这些方法构成了池的状态，可以以任意频率变化，包括在单个交易中多次变化。

## 函数

### slot0

```solidity
  function slot0(
  ) external view returns (uint160 sqrtPriceX96, int24 tick, uint16 observationIndex, uint16 observationCardinality, uint16 observationCardinalityNext, uint8 feeProtocol, bool unlocked)
```

池的第0个存储槽存储了许多值，并作为一个单一的方法对外暴露，以节省外部访问时的燃气费。

#### 返回值：

| 名称                         | 类型    | 描述                                                                                                                                                                                                                                                                |
| :--------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sqrtPriceX96`               | uint160 | 池当前的价格，作为 sqrt(token1/token0) 的 Q64.96 值                                                                                                                                                                                                        |
| `tick`                       | int24   | 池当前的tick，即根据最后一次运行的tick转换。这个值可能不总是等于 SqrtTickMath getTickAtSqrtRatio(sqrtPriceX96)，如果价格处于tick边界上。                                                             |
| `observationIndex`           | uint16  | 最后一个写入的预言机观测的索引，                                                                                                                                                                                                                 |
| `observationCardinality`     | uint16  | 当前池中存储的最大观测数，                                                                                                                                                                                                             |
| `observationCardinalityNext` | uint16  | 下一次更新观测时的最大观测数，当观测。                                                                                                                                                                                               |
| `feeProtocol`                | uint8   | 池中两种代币的协议费用。编码为两个4位值，其中token1的协议费向左移4位，而token0的协议费是低位的4位。作为交换费用的分数的分母，例如4意味着交换费用的1/4。 |
| `unlocked`                   | bool    | 池当前是否锁定以防止重入攻击                                                                                                                                                                                                                         |

### feeGrowthGlobal0X128

```solidity
  function feeGrowthGlobal0X128(
  ) external view returns (uint256)
```

整个池生命周期中，每单位流动性收集的token0费用的增长量，作为Q128.128费用。

此值可能会溢出uint256。

### feeGrowthGlobal1X128

```solidity
  function feeGrowthGlobal1X128(
  ) external view returns (uint256)
```

整个池生命周期中，每单位流动性收集的token1费用的增长量，作为Q128.128费用。

此值可能会溢出uint256。

### protocolFees

```solidity
  function protocolFees(
  ) external view returns (uint128 token0, uint128 token1)
```

应支付给协议的token0和token1的数量。

协议费用永远不会超过任一代币的uint128最大值。

### liquidity

```solidity
  function liquidity(
  ) external view returns (uint128)
```

当前在范围内可供池使用的流动性。

此值与所有tick上的总流动性无关。

### ticks

```solidity
  function ticks(
    int24 tick
  ) external view returns (uint128 liquidityGross, int128 liquidityNet, uint256 feeGrowthOutside0X128, uint256 feeGrowthOutside1X128, int56 tickCumulativeOutside, uint160 secondsPerLiquidityOutsideX128, uint32 secondsOutside, bool initialized)
```

查询池中特定tick的信息

#### 参数：

| 名称   | 类型  | 描述         |
| :----- | :---- | :------------------ |
| `tick` | int24 | 要查询的tick |

#### 返回值：

| 名称                             | 类型    | 描述                                                                                                                                                                                                                                                                     |
| :------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `liquidityGross`                 | uint128 | 使用池作为tick下限或上限的仓位总流动性，                                                                                                                                                                                   |
| `liquidityNet`                   | int128  | 当池价格跨越tick时，流动性变化了多少，                                                                                                                                                                                                                |
| `feeGrowthOutside0X128`          | uint256 | 当前tick另一边的token0的费用增长，                                                                                                                                                                                                   |
| `feeGrowthOutside1X128`          | uint256 | 当前tick另一边的token1的费用增长，feeGrowthOutsideX128值只有在tick初始化时才能使用，即如果liquidityGross大于0。此外，这些值仅相对有效，用于计算快照。 |
| `tickCumulativeOutside`          | int56   |                                                                                                                                                                                                                                                                                 |
| `secondsPerLiquidityOutsideX128` | uint160 |                                                                                                                                                                                                                                                                                 |
| `secondsOutside`                 | uint32  |                                                                                                                                                                                                                                                                                 |
| `initialized`                    | bool    |                                                                                                                                                                                                                                                                                 |

特定的仓位。

### tickBitmap

```solidity
  function tickBitmap(
      int16 wordPosition
  ) external view returns (uint256)
```

返回256个打包的tick初始化布尔值。有关更多信息，请参阅TickBitmap。

### positions

```solidity
  function positions(
    bytes32 key
  ) external view returns (uint128 _liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)
```

通过仓位的键返回关于仓位的信息

#### 参数：

| 名称  | 类型    | 描述                                                                               |
| :---- | :------ | :---------------------------------------------------------------------------------------- |
| `key` | bytes32 | 仓位的键是由所有者、tickLower和tickUpper组成的预映像的哈希 |

#### 返回值：

| 名称                       | 类型    | 描述                                                                       |
| :------------------------- | :------ | :-------------------------------------------------------------------------------- |
| `_liquidity`               | bytes32 | 仓位中的流动性数量，                                          |
| `feeGrowthInside0LastX128` | uint256 | 截至上一次铸币/销毁/触发时，tick范围内的token0的费用增长，         |
| `feeGrowthInside1LastX128` | uint256 | 截至上一次铸币/销毁/触发时，tick范围内的token1的费用增长，         |
| `tokensOwed0`              | uint128 | 截至上一次铸币/销毁/触发时，计算得出的应归还给仓位的token0数量， |
| `tokensOwed1`              | uint128 | 截至上一次铸币/销毁/触发时，计算得出的应归还给仓位的token1数量  |

### observations

```solidity
  function observations(
    uint256 index
  ) external view returns (uint32 blockTimestamp, int56 tickCumulative, uint160 secondsPerLiquidityCumulativeX128, bool initialized)
```

返回关于特定观测索引的数据

您可能更想使用#observe()而不是这个方法来获取一段时间前的观测，而不是在数组中的特定索引。

#### 参数：

| 名称    | 类型    | 描述                                    |
| :------ | :------ | :--------------------------------------------- |
| `index` | uint256 | 要获取的观测数组元素 |

#### 返回值：

| 名称                                | 类型    | 描述                                                                                      |
| :---------------------------------- | :------ | :----------------------------------------------------------------------------------------------- |
| `blockTimestamp`                    | uint256 | 观测的时间戳，                                                                |
| `tickCumulative`                    | int56   | 截至观测时间戳，池生命周期中tick乘以已过秒数，|
| `secondsPerLiquidityCumulativeX128` | uint160 | 截至观测时间戳，池生命周期中每单位在范围内流动性的秒数      |
| `initialized`                       | bool    | 观测是否已初始化，值是否安全使用                      |