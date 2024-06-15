部署 Uniswap V3 池并管理池协议费用的所有权和控制权

## 函数

### createPool

```solidity
  function createPool(
    address tokenA,
    address tokenB,
    uint24 fee
  ) external returns (address pool)
```

为给定的两个代币和费用创建一个池

`tokenA` 和 `tokenB` 可以按任意顺序传递：`token0/token1` 或 `token1/token0`。从费用中检索 `tickSpacing`。如果池已存在、费用无效或代币参数无效，调用将回退。

#### 参数：

| 名称     | 类型    | 描述                                     |
| :------- | :------ | :---------------------------------------- |
| `tokenA` | address | 所需池中的两个代币之一                   |
| `tokenB` | address | 所需池中的另一个代币                     |
| `fee`    | uint24  | 所需池的费用                             |

#### 返回值：

| 名称   | 类型    | 描述                           |
| :----- | :------ | :---------------------------- |
| `pool` | address | 新创建池的地址               |

### setOwner

```solidity
  function setOwner(
    address _owner
  ) external
```

更新工厂的所有者

必须由当前所有者调用

#### 参数：

| 名称     | 类型    | 描述                  |
| :------- | :------ | :-------------------- |
| `_owner` | address | 工厂的新所有者        |

### enableFeeAmount

```solidity
  function enableFeeAmount(
    uint24 fee,
    int24 tickSpacing
  ) public
```

使用给定的 `tickSpacing` 启用费用金额

启用后，费用金额永远不能移除

#### 参数：

| 名称          | 类型   | 描述                                                                              |
| :------------ | :----- | :-------------------------------------------------------------------------------- |
| `fee`         | uint24 | 要启用的费用金额，以百比点（即 1e-6）表示                                        |
| `tickSpacing` | int24  | 对于使用给定费用金额创建的所有池强制执行的刻度间距                                |