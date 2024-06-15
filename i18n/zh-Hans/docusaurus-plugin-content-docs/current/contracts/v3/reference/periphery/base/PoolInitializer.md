## 函数

### createAndInitializePoolIfNecessary

```solidity
  function createAndInitializePoolIfNecessary(
    address token0,
    address token1,
    uint24 fee,
    uint160 sqrtPriceX96
  ) external returns (address pool)
```

如果池不存在，则创建一个新的池，如果未初始化，则进行初始化。

此方法可通过 IMulticall 与其他操作捆绑，用于针对池执行的首次操作（例如：铸造）。

#### 参数：

| 名称         | 类型    | 描述                                                 |
| :----------- | :------ | :--------------------------------------------------- |
| `token0`     | address | 池中 token0 的合约地址                               |
| `token1`     | address | 池中 token1 的合约地址                               |
| `fee`        | uint24  | 特定代币对的 v3 池的费用金额                         |
| `sqrtPriceX96` | uint160 | 池的初始平方根价格作为 Q64.96 值                     |

#### 返回值：

| 名称   | 类型    | 描述                                                                                                           |
| :----- | :------ | :----------------------------------------------------------------------------------------------------------------|
| `pool` | address | 根据代币对和费用返回池地址，必要时将返回新创建的池地址 |