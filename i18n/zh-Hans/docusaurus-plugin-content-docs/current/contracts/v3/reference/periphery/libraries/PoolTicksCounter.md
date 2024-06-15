## 函数

### countInitializedTicksCrossed

```solidity
  function countInitializedTicksCrossed(
  ) internal view returns (uint32 initializedTicksCrossed)
```

此函数计算在 tickBefore 和 tickAfter 之间会引发燃气费成本的已初始化刻度数量。
当 tickBefore 和/或 tickAfter 本身被初始化时，我们是否应该计算它们的逻辑取决于交换的方向。如果我们向上交换（tickAfter > tickBefore），我们不想计算 tickBefore，但我们确实想计算 tickAfter。如果我们向下交换，则情况相反。

请注意，此函数仅用于内部视图调用，并返回一个表示跨过的已初始化刻度数量的 uint32 类型值。这在计算交易费用和确定跨过价格范围内的流动性时特别有用。