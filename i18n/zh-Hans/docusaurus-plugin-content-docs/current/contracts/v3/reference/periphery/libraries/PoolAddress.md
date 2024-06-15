## 函数

### getPoolKey

```solidity
  function getPoolKey(
    address tokenA,
    address tokenB,
    uint24 fee
  ) internal returns (struct PoolAddress.PoolKey)
```

返回 PoolKey：按顺序排列的代币及其匹配的手续费级别

#### 参数：

| 名称     | 类型    | 描述                          |
| :------- | :------ | :----------------------------------- |
| `tokenA` | address | 池中的第一个代币，未排序  |
| `tokenB` | address | 池中的第二个代币，未排序 |
| `fee`    | uint24  | 池的手续费级别            |

#### 返回值：

| 名称      | 类型                | 描述                                                 |
| :-------- | :------------------ | :---------------------------------------------------------- |
| `Poolkey` | PoolAddress.PoolKey | 包含有序的 token0 和 token1 分配的池详细信息 |

### computeAddress

```solidity
  function computeAddress(
    address factory,
    struct PoolAddress.PoolKey key
  ) internal returns (address pool)
```

根据工厂和 PoolKey 确定性地计算池地址

#### 参数：

| 名称      | 类型                       | 描述                             |
| :-------- | :------------------------- | :-------------------------------------- |
| `factory` | address                    | Uniswap V3 工厂合约地址 |
| `key`     | struct PoolAddress.PoolKey | PoolKey                             |

#### 返回值：

| 名称   | 类型    | 描述                         |
| :----- | :------ | :---------------------------------- |
| `pool` | address | V3 池的合约地址 |