提供了一种方法来创建和初始化池（如果需要的话），以便与其他需要池存在的方法捆绑使用。

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

如果池不存在，则创建一个新的池，然后如果未初始化则进行初始化。

此方法可以通过IMulticall与其它方法捆绑，用于针对池执行的首次操作（例如：铸币）。

#### 参数：

| 名称           | 类型    | 描述                                                 |
| :------------- | :------ | :--------------------------------------------------- |
| `token0`       | address | 池中token0的合约地址                                 |
| `token1`       | address | 池中token1的合约地址                                 |
| `fee`          | uint24  | 特定代币对的v3池的手续费金额                         |
| `sqrtPriceX96` | uint160 | 池的初始平方根价格，作为Q64.96值                     |

#### 返回值：

| 名称   | 类型    | 描述                                                                                                           |
| :----- | :------ | :----------------------------------------------------------------------------------------------------------------|
| `pool` | address | 根据代币对和手续费返回池地址，必要时将返回新创建的池地址 |