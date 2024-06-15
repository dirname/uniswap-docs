将 Uniswap V3 的仓位封装为非同质化代币接口，允许它们进行转移和授权。

## 参数结构体

### MintParams

```solidity
  struct MintParams {
        address token0;
        address token1;
        uint24 fee;
        int24 tickLower;
        int24 tickUpper;
        uint256 amount0Desired;
        uint256 amount1Desired;
        uint256 amount0Min;
        uint256 amount1Min;
        address recipient;
        uint256 deadline;
    }
```

### IncreaseLiquidityParams

```solidity
   struct IncreaseLiquidityParams {
        uint256 tokenId;
        uint256 amount0Desired;
        uint256 amount1Desired;
        uint256 amount0Min;
        uint256 amount1Min;
        uint256 deadline;
    }
```

### DecreaseLiquidityParams

```solidity
    struct DecreaseLiquidityParams {
        uint256 tokenId;
        uint128 liquidity;
        uint256 amount0Min;
        uint256 amount1Min;
        uint256 deadline;
    }
```

### CollectParams

```solidity
    struct CollectParams {
        uint256 tokenId;
        address recipient;
        uint128 amount0Max;
        uint128 amount1Max;
    }
```

## 函数

### positions

```solidity
  function positions(
    uint256 tokenId
  ) external view returns (uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)
```

返回与给定代币ID相关的仓位信息。

如果代币ID无效，则会抛出异常。

#### 参数：

| 名称      | 类型    | 描述                                      |
| :-------- | :------ | :----------------------------------------------- |
| `tokenId` | uint256 | 代表仓位的代币的ID |

#### 返回值：

| 名称                       | 类型    | 描述                                                                      |
| :------------------------- | :------ | :------------------------------------------------------------------------------- |
| `nonce`                    | uint96  | 用于许可的随机数                                                             |
| `operator`                 | address | 被批准进行花费的地址                                                         |
| `token0`                   | address | 特定池中的token0的地址                                                      |
| `token1`                   | address | 特定池中的token1的地址                                                      |
| `fee`                      | uint24  | 与池相关联的费用                                                             |
| `tickLower`                | int24   | 仓位的下限tick范围                                                          |
| `tickUpper`                | int24   | 仓位的上限tick范围                                                          |
| `liquidity`                | uint128 | 仓位的流动性                                                                |
| `feeGrowthInside0LastX128` | uint256 | 在上次对个人仓位执行操作时的token0的费用增长                                |
| `feeGrowthInside1LastX128` | uint256 | 在上次对个人仓位执行操作时的token1的费用增长                                |
| `tokensOwed0`              | uint128 | 在上次计算时未收集的应支付给仓位的token0的数量                             |
| `tokensOwed1`              | uint128 | 在上次计算时未收集的应支付给仓位的token1的数量                             |

### createAndInitializePoolIfNecessary

```solidity
  function createAndInitializePoolIfNecessary(
    address tokenA,
    address tokenB,
    uint24 fee,
    uint160 sqrtPriceX96
  ) external returns (address pool)
```

如果池不存在则创建一个新池，然后在未初始化的情况下初始化它。

此方法可以与mint捆绑使用，以在首次铸币时创建、初始化池并同时铸币。

#### 参数：

| 名称           | 类型    | 描述                                                 |
| :------------- | :------ | :---------------------------------------------------------- |
| `tokenA`       | address | token0或token1的任意一个的合约地址             |
| `tokenB`       | address | 另一个代币的合约地址                     |
| `fee`          | uint24  | 指定代币对的v3池的费用金额                          |
| `sqrtPriceX96` | uint160 | 池的初始平方根价格作为一个Q64.96值 |

当提到未排序或无序的代币时，我们使用tokenA和tokenB。

#### 返回值：

| 名称   | 类型    | 描述                                                                                                           |
| :----- | :------ | :-------------------------------------------------------------------------------------------------------------------- |
| `pool` | address | 根据一对代币和费用返回池地址，必要时返回新创建的池地址 |

### mint

```solidity
  function mint(
    struct INonfungiblePositionManager.MintParams params
  ) external returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)
```

创建一个用NFT包裹的新仓位。

当池存在且已初始化时调用此方法。请注意，如果池已创建但未初始化，则不存在方法，即假定池已初始化。

#### 参数：

| 名称     | 类型                                          | 描述                                                                  |
| :------- | :-------------------------------------------- | :--------------------------------------------------------------------------- |
| `params` | struct INonfungiblePositionManager.MintParams | 铸造仓位所需的参数，编码为`MintParams`在calldata中 |

#### 返回值：

| 名称        | 类型    | 描述                                             |
| :---------- | :------ | :------------------------------------------------------ |
| `tokenId`   | uint256 | 代表铸造仓位的代币ID |
| `liquidity` | uint128 | 此仓位的流动性数量               |
| `amount0`   | uint256 | token0的数量                                    |
| `amount1`   | uint256 | token1的数量                                    |

### increaseLiquidity

```solidity
  function increaseLiquidity(
    struct INonfungiblePositionManager.IncreaseLiquidityParams params
  ) external returns (uint128 liquidity, uint256 amount0, uint256 amount1)
```

增加一个仓位中的流动性，由`msg.sender`支付代币。

#### 参数：

| 名称     | 类型                                                       | 描述                                                         |
| :------- | :--------------------------------------------------------- | :------------------------------------------------------------------ |
| `params` | struct INonfungiblePositionManager.IncreaseLiquidityParams | tokenId 增加流动性的代币ID，|

#### 返回值：

| 名称        | 类型    | 描述                                          |
| :---------- | :------ | :--------------------------------------------------- |
| `liquidity` | uint128 | 因增加而产生的新的流动性数量 |
| `amount0`   | uint256 | 实现结果流动性所需的token0数量  |
| `amount1`   | uint256 | 实现结果流动性所需的token1数量  |

### decreaseLiquidity

```solidity
  function decreaseLiquidity(
    struct INonfungiblePositionManager.DecreaseLiquidityParams params
  ) external returns (uint256 amount0, uint256 amount1)
```

减少一个仓位中的流动性，并将其记入仓位。

#### 参数：

| 名称     | 类型                                                       | 描述                                                        |
| :------- | :--------------------------------------------------------- | :----------------------------------------------------------------- |
| `params` | struct INonfungiblePositionManager.DecreaseLiquidityParams | tokenId 流动性减少的代币ID，|

#### 返回值：

| 名称      | 类型    | 描述                            |
| :-------- | :------ | :------------------------------------- |
| `amount0` | uint256 | 发送给接收者的token0数量 |
| `amount1` | uint256 | 发送给接收者的token1数量 |

### collect

```solidity
  function collect(
    struct INonfungiblePositionManager.CollectParams params
  ) external returns (uint256 amount0, uint256 amount1)
```

收集分配给特定仓位的最大金额的费用至接收者。

#### 参数：

| 名称     | 类型                                             | 描述                                                     |
| :------- | :----------------------------------------------- | :-------------------------------------------------------------- |
| `params` | struct INonfungiblePositionManager.CollectParams | tokenId 收集代币的NFT的ID，|

#### 返回值：

| 名称      | 类型    | 描述                            |
| :-------- | :------ | :------------------------------------- |
| `amount0` | uint256 | 在token0中收集的费用金额 |
| `amount1` | uint256 | 在token1中收集的费用金额 |

### burn

```solidity
  function burn(
    uint256 tokenId
  ) external
```

销毁一个代币ID，这将从NFT合约中删除它。该代币必须具有0流动性，并且必须先收集所有代币。

#### 参数：

| 名称      | 类型    | 描述                              |
| :-------- | :------ | :--------------------------------------- |
| `tokenId` | uint256 | 正在销毁的代币的ID |

## 事件

### IncreaseLiquidity

```solidity
  event IncreaseLiquidity(
    uint256 tokenId,
    uint128 liquidity,
    uint256 amount0,
    uint256 amount1
  )
```

当为仓位NFT增加流动性时触发。

在代币被铸造时也会触发。

#### 参数：

| 名称        | 类型    | 描述                                                      |
| :---------- | :------ | :--------------------------------------------------------------- |
| `tokenId`   | uint256 | 流动性增加的代币ID            |
| `liquidity` | uint128 | NFT仓位的流动性增加量 |
| `amount0`   | uint256 | 为增加流动性支付的token0数量 |
| `amount1`   | uint256 | 为增加流动性支付的token1数量 |

### DecreaseLiquidity

```solidity
  event DecreaseLiquidity(
    uint256 tokenId,
    uint128 liquidity,
    uint256 amount0,
    uint256 amount1
  )
```

当为仓位NFT减少流动性时触发。

#### 参数：

| 名称        | 类型    | 描述                                                           |
| :---------- | :------ | :-------------------------------------------------------------------- |
| `tokenId`   | uint256 | 流动性减少的代币ID                 |
| `liquidity` | uint128 | NFT仓位的流动性减少量      |
| `amount0`   | uint256 | 为减少流动性计入的token0数量 |
| `amount1`   | uint256 | 为减少流动性计入的token1数量 |

### Collect

```solidity
  event Collect(
    uint256 tokenId,
    address recipient,
    uint256 amount0,
    uint256 amount1
  )
```

当为仓位NFT收集代币时触发。

报告的金额可能不会与转账的金额完全等价，这是由于四舍五入行为造成的。

#### 参数：

| 名称        | 类型    | 描述                                                    |
| :---------- | :------ | :------------------------------------------------------------- |
| `tokenId`   | uint256 | 收集基础代币的代币ID |
| `recipient` | address | 接收收集到的代币的账户地址  |
| `amount0`   | uint256 | 收集到的归因于仓位的token0数量   |
| `amount1`   | uint256 | 收集到的归因于仓位的token1数量   |