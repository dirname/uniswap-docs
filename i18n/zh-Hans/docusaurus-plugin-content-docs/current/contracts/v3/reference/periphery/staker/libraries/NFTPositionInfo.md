封装了获取 NFT 代币 ID 信息的逻辑

## 函数

### getPositionInfo

```solidity
  function getPositionInfo(
    contract IUniswapV3Factory factory,
    contract INonfungiblePositionManager nonfungiblePositionManager,
    uint256 tokenId
  ) internal view returns (contract IUniswapV3Pool pool, int24 tickLower, int24 tickUpper, uint128 liquidity)
```

#### 参数:

| 名称                           | 类型                                    | 描述                                                                  |
| :----------------------------- | :-------------------------------------- | :-------------------------------------------------------------------- |
| `factory`                      | contract IUniswapV3Factory              | 用于计算池地址的 Uniswap V3 工厂的地址                                |
| `nonfungiblePositionManager`   | contract INonfungiblePositionManager    | 要查询的非同质化头寸管理器的地址                                      |
| `tokenId`                      | uint256                                 | Uniswap V3 LP 代币的唯一标识符                                        |

#### 返回值:

| 名称       | 类型            | 描述                                         |
| :--------- | :-------------- | :------------------------------------------- |
| `pool`     | IUniswapV3Pool  | Uniswap V3 池的地址                          |
| `tickLower` | int24           | Uniswap V3 头寸的下界刻度                     |
| `tickUpper` | int24           | Uniswap V3 头寸的上界刻度                     |
| `liquidity` | uint128         | 抵押的流动性数量                             |