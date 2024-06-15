为来自 Uniswap V3 池的回调提供验证

## 函数

### verifyCallback

```solidity
  function verifyCallback(
    address factory,
    address tokenA,
    address tokenB,
    uint24 fee
  ) internal returns (contract IUniswapV3Pool pool)
```

返回一个有效的 Uniswap V3 池的地址

#### 参数：

| 名称       | 类型    | 描述                                                                       |
| :--------- | :------ | :-------------------------------------------------------------------------------- |
| `factory`  | address | Uniswap V3 工厂的合约地址                                    |
| `tokenA`   | address | token0 或 token1 的任一合约地址                                   |
| `tokenB`   | address | 另一个代币的合约地址                                           |
| `fee`      | uint24  | 池中每次交易收取的费用，以基点的百分之一表示 |

#### 返回值：

| 名称   | 类型           | 描述                  |
| :----- | :------------- | :--------------------------- |
| `pool` | IUniswapV3Pool | V3 池的合约地址 |

### verifyCallback

```solidity
  function verifyCallback(
    address factory,
    struct PoolAddress.PoolKey poolKey
  ) internal returns (contract IUniswapV3Pool pool)
```

返回一个有效的 Uniswap V3 池的地址

#### 参数：

| 名称       | 类型                       | 描述                                    |
| :--------- | :------------------------- | :--------------------------------------------- |
| `factory`  | address                    | Uniswap V3 工厂的合约地址                    |
| `poolKey`  | struct PoolAddress.PoolKey | V3 池的标识键             |

#### 返回值：

| 名称   | 类型           | 描述                  |
| :----- | :------------- | :--------------------------- |
| `pool` | IUniswapV3Pool | V3 池的合约地址 |