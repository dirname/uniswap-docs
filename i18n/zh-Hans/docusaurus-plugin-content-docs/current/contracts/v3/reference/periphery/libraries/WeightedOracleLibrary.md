提供了与同一V3对的不同层级预言机集成的功能。

## 功能

### consult

```solidity
  function consult(
    address pool,
    uint32 period
  ) internal view returns (struct WeightedOracleLibrary.PeriodObservation observation)
```

为给定的Uniswap V3池获取时间加权观察值。

#### 参数：

| 名称     | 类型    | 描述                                                                      |
| :------- | :------ | :------------------------------------------------------------------------------- |
| `pool`   | address | 我们想要观察的池的地址                                      |
| `period` | uint32  | 从过去开始计算时间加权观察值的秒数 |

#### 返回值：

| 名称          | 类型    | 描述                                                                                   |
| :------------ | :------ | :-------------------------------------------------------------------------------------------- |
| `observation` | address | 从（block.timestamp - period）到block.timestamp的时间加权观察值 |

### getArithmeticMeanTickWeightedByLiquidity

```solidity
  function getArithmeticMeanTickWeightedByLiquidity(
    struct WeightedOracleLibrary.PeriodObservation[] observations
  ) internal pure returns (int24 arithmeticMeanWeightedTick)
```

给定一些时间加权观察值，根据流动性计算算术平均tick。

在大多数情况下，`observations`的每个条目应该具有相同的`period`和底层`pool`代币。
如果`period`在观察值之间不同，结果变得难以解释并且可能有偏见/可操纵。
如果底层`pool`代币在观察值之间不同，必须极其小心以确保价格和流动性值都是可比较的。
即使价格是可比较的（例如，两种不同的USD稳定资产对比ETH），流动性值可能不是，因为小数位数可以在代币之间不同。

#### 参数：

| 名称           | 类型                                             | 描述                          |
| :------------- | :----------------------------------------------- | :----------------------------------- |
| `observations` | struct WeightedOracleLibrary.PeriodObservation[] | 时间加权观察值列表 |

#### 返回值：

| 名称                         | 类型                                             | 描述                                                                                      |
| :--------------------------- | :----------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| `arithmeticMeanWeightedTick` | struct WeightedOracleLibrary.PeriodObservation[] | 根据观察值的时间加权调和平均流动性加权的算术平均tick | 

请注意，这里的返回类型描述有误。正确的返回类型应为 `int24` 而非 `struct WeightedOracleLibrary.PeriodObservation[]`。这看起来像是文档中的一个错误。正确的描述应该是：

| 名称                         | 类型       | 描述                                                                                      |
| :--------------------------- | :--------- | :----------------------------------------------------------------------------------------------- |
| `arithmeticMeanWeightedTick` | int24      | 根据观察值的时间加权调和平均流动性加权的算术平均tick |