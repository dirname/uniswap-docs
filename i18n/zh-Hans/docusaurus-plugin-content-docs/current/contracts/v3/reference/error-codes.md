---
id: error-codes
title: 错误代码
---

LiquidityMath.sol

- `LS`: 流动性减法
- `LA`: 流动性加法

Oracle.sol

- `OLD`: 目标必须在最旧观测值之后的时间点上

- `I`: 池尚未初始化

Position.sol

- `NP`: 对于流动性为 0 的位置，不能调用燃烧操作

Tick.sol

- `LO`: LiquidityGrossAfter 必须小于最大流动性

TickMath.sol

- `T`: 给定的刻度必须小于或等于最大刻度
- `R`: 第二个不等式必须是 < 因为价格永远不会达到最大刻度处的价格

TransferHelper.sol

- `TF`: 转账失败：如果转账失败，则会报 TF 错误

UniswapV3Pool.sol

- `LOK`: 防重入保护。交易不能在交换过程中重新进入池子

- `TLU`: 下限刻度必须低于上限刻度
- `TLM`: 下限刻度必须大于或等于最小刻度
- `TUM`: 上限刻度必须小于或等于最大刻度
- `AI`: 池已初始化
- `M0`: 铸造 0，铸造前给定池中的 token0 余额必须小于或等于铸造后的余额
- `M1`: 铸造 1，铸造前给定池中的 token1 余额必须小于或等于铸造后的余额
- `AS`: `amountSpecified` 不能为零
- `SPL`: 平方根价格限制
- `IIA`: 输入量不足，在回调期间发送的输入代币量不足
- `L`: 执行闪电贷时，池中的流动性必须大于零
- `F0`: 闪电交易前给定池中的 token0 余额必须小于或等于闪电交易后 token0 的余额加上费用
- `F1`: 闪电交易前给定池中的 token1 余额必须小于或等于闪电交易后 token1 的余额加上费用