## 函数

### deploy

```solidity
  function deploy(
    address factory,
    address token0,
    address token1,
    uint24 fee,
    int24 tickSpacing
  ) internal returns (address pool)
```

通过暂时设置参数存储槽，然后在部署池后清除它，以此来使用给定的参数部署一个池。

#### 参数：

| 名称           | 类型    | 描述                                                                       |
| :------------- | :------ | :-------------------------------------------------------------------------------- |
| `factory`      | address | Uniswap V3 工厂的合约地址                                    |
| `token0`       | address | 按地址排序的池中的第一个代币                                 |
| `token1`       | address | 按地址排序的池中的第二个代币                                |
| `fee`          | uint24  | 在池中每次交易时收取的费用，以基点的百分之一表示 |
| `tickSpacing`  | int24   | 可用刻度之间的间距                                                  |