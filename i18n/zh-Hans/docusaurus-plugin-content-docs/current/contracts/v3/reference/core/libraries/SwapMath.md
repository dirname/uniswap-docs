包含在单一刻度价格范围内（即，单一刻度）计算交换结果的方法。

## 函数

### computeSwapStep

```solidity
  function computeSwapStep(
    uint160 sqrtRatioCurrentX96,
    uint160 sqrtRatioTargetX96,
    uint128 liquidity,
    int256 amountRemaining,
    uint24 feePips
  ) internal pure returns (uint160 sqrtRatioNextX96, uint256 amountIn, uint256 amountOut, uint256 feeAmount)
```

根据交换参数计算输入或输出一定数量的结果。

如果交换的 `amountSpecified` 是正数，费用加上输入金额将永远不会超过剩余金额。

#### 参数：

| 名称                  | 类型    | 描述                                                                         |
| :-------------------- | :------ | :---------------------------------------------------------------------------------- |
| `sqrtRatioCurrentX96` | uint160 | 池的当前平方根价格                                                  |
| `sqrtRatioTargetX96`  | uint160 | 不可超过的价格，从中推断出交换的方向 |
| `liquidity`           | uint128 | 可用流动性                                                                |
| `amountRemaining`     | int256  | 剩余待交换的输入或输出金额                   |
| `feePips`             | uint24  | 从输入金额中收取的费用，以百万分之一的百分比表示               |

#### 返回值：

| 名称               | 类型    | 描述                                                                                 |
| :----------------- | :------ | :------------------------------------------------------------------------------------------ |
| `sqrtRatioNextX96` | uint160 | 根据输入/输出金额交换后的价格，不会超过价格目标                  |
| `amountIn`         | uint256 | 根据交换方向，基于token0或token1的输入金额 |
| `amountOut`        | uint256 | 根据交换方向，基于token0或token1的接收金额   |
| `feeAmount`        | uint256 | 将作为费用收取的输入金额的一部分                                             |