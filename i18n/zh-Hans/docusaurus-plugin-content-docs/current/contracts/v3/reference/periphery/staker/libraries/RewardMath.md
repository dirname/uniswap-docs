允许根据权益和激励措施的某些参数计算奖励

## 函数

### computeRewardAmount

```solidity
  function computeRewardAmount(
    uint256 totalRewardUnclaimed,
    uint160 totalSecondsClaimedX128,
    uint256 startTime,
    uint256 endTime,
    uint128 liquidity,
    uint160 secondsPerLiquidityInsideInitialX128,
    uint160 secondsPerLiquidityInsideX128,
    uint256 currentTime
  ) internal pure returns (uint256 reward, uint160 secondsInsideX128)
```

根据激励和权益的参数计算应得的奖励金额

#### 参数：

| 名称                                   | 类型    | 描述                                                                                           |
| :------------------------------------- | :------ | :---------------------------------------------------------------------------------------------------- |
| `totalRewardUnclaimed`                 | uint256 | 对于激励措施，未认领奖励的总金额                                           |
| `totalSecondsClaimedX128`              | uint160 | 已经为激励措施认领的完整流动性秒数                           |
| `startTime`                            | uint256 | 激励奖励开始的纪元秒数                                                     |
| `endTime`                              | uint256 | 奖励不再以滴定方式发放的纪元秒数                                         |
| `liquidity`                            | uint128 | 在测量快照的周期内假设保持不变的流动性金额 |
| `secondsPerLiquidityInsideInitialX128` | uint160 | 期初的流动性刻度范围内的每单位流动性秒数               |
| `secondsPerLiquidityInsideX128`        | uint160 | 当前区块时间戳时的流动性刻度范围内的每单位流动性秒数               |
| `currentTime`                          | uint256 | 当前区块时间戳，必须大于或等于开始时间                    |

#### 返回值：

| 名称                | 类型    | 描述                                                                           |
| :------------------ | :------ | :------------------------------------------------------------------------------------ |
| `reward`            | uint256 | 应得的奖励金额                                                            |
| `secondsInsideX128` | uint160 | 在权益期间，位置范围内总流动性秒数 |