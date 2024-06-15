Uniswap V3 工厂促进 Uniswap V3 池的创建，并控制协议费用。

## 函数

### owner

```solidity
  function owner(
  ) external view returns (address)
```

返回当前工厂的所有者。

可以通过 setOwner 由当前所有者更改。

#### 返回值：

| 类型    | 描述                  |
| :------ | :--------------------------- |
| address | 工厂所有者的地址 |

### feeAmountTickSpacing

```solidity
  function feeAmountTickSpacing(
    uint24 fee
  ) external view returns (int24)
```

对于给定的费用金额，如果启用，则返回其刻度间距，否则返回 0。

费用金额一旦启用就无法移除，因此该值应在调用上下文中硬编码或缓存。

#### 参数：

| 名称  | 类型   | 描述                                                                             |
| :---- | :----- | :-------------------------------------------------------------------------------------- |
| `fee` | uint24 | 启用的费用，以百比点为单位。在未启用费用的情况下返回 0。 |

#### 返回值：

| 类型  | 描述  |
| :---- | :----------- |
| int24 | 刻度间距 |

### getPool

```solidity
  function getPool(
    address tokenA,
    address tokenB,
    uint24 fee
  ) external view returns (address pool)
```

对于给定的一对代币和费用，返回池地址，如果不存在则返回地址 0。

tokenA 和 tokenB 可以按任意顺序传递：token0/token1 或 token1/token0。

#### 参数：

| 名称     | 类型    | 描述                                                                       |
| :------- | :------ | :-------------------------------------------------------------------------------------- |
| `tokenA` | address | 代币0或代币1的合约地址                                   |
| `tokenB` | address | 另一个代币的合约地址                                           |
| `fee`    | uint24  | 池中每次交易收取的费用，以百比点为单位 |

#### 返回值：

| 名称   | 类型    | 描述      |
| :----- | :------ | :--------------- |
| `pool` | address | 池地址 |

### createPool

```solidity
  function createPool(
    address tokenA,
    address tokenB,
    uint24 fee
  ) external returns (address pool)
```

为给定的两个代币和费用创建一个池。

tokenA 和 tokenB 的顺序可以是任意的：token0/token1 或 token1/token0。从费用中检索 tickSpacing。如果池已存在、费用无效或代币参数无效，此调用将回退。

#### 参数：

| 名称     | 类型    | 描述                                     |
| :------- | :------ | :---------------------------------------------- |
| `tokenA` | address | 所需池中的两个代币之一       |
| `tokenB` | address | 所需池中的另一个代币 |
| `fee`    | uint24  | 所需池的费用                    |

#### 返回值：

| 名称   | 类型    | 描述                           |
| :----- | :------ | :------------------------------------ |
| `pool` | address | 新创建池的地址 |

### setOwner

```solidity
  function setOwner(
    address _owner
  ) external
```

更新工厂的所有者。

必须由当前所有者调用。

#### 参数：

| 名称     | 类型    | 描述                  |
| :------- | :------ | :--------------------------- |
| `_owner` | address | 工厂的新所有者 |

### enableFeeAmount

```solidity
  function enableFeeAmount(
    uint24 fee,
    int24 tickSpacing
  ) external
```

使用给定的 tickSpacing 启用费用金额。

一旦启用，费用金额永远无法移除。

#### 参数：

| 名称          | 类型   | 描述                                                                              |
| :------------ | :----- | :--------------------------------------------------------------------------------------- |
| `fee`         | uint24 | 要启用的费用金额，以百比点为单位（即 1e-6）                 |
| `tickSpacing` | int24  | 对于所有使用给定费用金额创建的池强制执行的刻度之间的间距 |

## 事件

### OwnerChanged

```solidity
  event OwnerChanged(
    address oldOwner,
    address newOwner
  )
```

当工厂的所有者发生变化时发出。

#### 参数：

| 名称       | 类型    | 描述                            |
| :--------- | :------ | :------------------------------------- |
| `oldOwner` | address | 更改前的所有者 |
| `newOwner` | address | 更改后所有者  |

### PoolCreated

```solidity
  event PoolCreated(
    address token0,
    address token1,
    uint24 fee,
    int24 tickSpacing,
    address pool
  )
```

当创建池时发出。

#### 参数：

| 名称          | 类型    | 描述                                                                       |
| :------------ | :------ | :-------------------------------------------------------------------------------- |
| `token0`      | address | 按地址排序的池中的第一个代币                                 |
| `token1`      | address | 按地址排序的池中的第二个代币                                |
| `fee`         | uint24  | 池中每次交易收取的费用，以百比点为单位 |
| `tickSpacing` | int24   | 初始化刻度之间的最小数量                            |
| `pool`        | address | 创建的池的地址                                                   |

### FeeAmountEnabled

```solidity
  event FeeAmountEnabled(
    uint24 fee,
    int24 tickSpacing
  )
```

当通过工厂启用新的费用金额以用于池创建时发出。

#### 参数：

| 名称          | 类型   | 描述                                                                                |
| :------------ | :----- | :----------------------------------------------------------------------------------------- |
| `fee`         | uint24 | 启用的费用，以百比点为单位                                        |
| `tickSpacing` | int24  | 对于使用给定费用创建的池初始化刻度之间的最小数量 |