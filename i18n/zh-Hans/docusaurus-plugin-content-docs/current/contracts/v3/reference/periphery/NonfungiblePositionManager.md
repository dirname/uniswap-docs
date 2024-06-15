将 Uniswap V3 的仓位封装为 ERC721 非同质化代币接口。

## 函数

### 构造函数

```solidity
  function constructor(
  ) public
```

### 仓位信息

```solidity
  function positions(
    uint256 tokenId
  ) external view returns (uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)
```

返回与给定的令牌 ID 关联的仓位信息。

如果令牌 ID 无效，将抛出异常。

#### 参数：

| 名称       | 类型    | 描述                                      |
| :--------- | :------ | :---------------------------------------- |
| `tokenId`  | uint256 | 表示仓位的令牌的 ID                        |

#### 返回值：

| 名称                           | 类型    | 描述                                                                                     |
| :----------------------------- | :------ | :--------------------------------------------------------------------------------------- |
| `nonce`                        | uint96  | 用于许可的随机数                                                                         |
| `operator`                     | address | 被批准进行花费的地址                                                                     |
| `token0`                       | address | 指定池中的 token0 的地址                                                                 |
| `token1`                       | address | 指定池中的 token1 的地址                                                                 |
| `fee`                          | uint24  | 与池相关的费用                                                                           |
| `tickLower`                    | int24   | 仓位的下限范围                                                                          |
| `tickUpper`                    | int24   | 仓位的上限范围                                                                          |
| `liquidity`                    | uint128 | 仓位的流动性                                                                            |
| `feeGrowthInside0LastX128`     | uint256 | 最后一次对个人仓位操作时的 token0 费用增长                                               |
| `feeGrowthInside1LastX128`     | uint256 | 最后一次对个人仓位操作时的 token1 费用增长                                               |
| `tokensOwed0`                  | uint128 | 截至最后一次计算，应支付给仓位但未收集的 token0 数量                                     |
| `tokensOwed1`                  | uint128 | 截至最后一次计算，应支付给仓位但未收集的 token1 数量                                     |

### 铸造

```solidity
  function mint(
    struct INonfungiblePositionManager.MintParams params
  ) external returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)
```

创建一个新的被 NFT 包装的仓位

当池存在并已初始化时调用此方法。请注意，如果池已创建但未初始化，则不存在该方法，即假设池已被初始化。

#### 参数：

| 名称     | 类型                                          | 描述                                                                  |
| :------- | :-------------------------------------------- | :-------------------------------------------------------------------- |
| `params` | struct INonfungiblePositionManager.MintParams | 创建仓位所需的参数，编码为 calldata 中的 `MintParams`                 |

#### 返回值：

| 名称        | 类型    | 描述                                       |
| :---------- | :------ | :----------------------------------------- |
| `tokenId`   | uint256 | 表示铸造的仓位的令牌 ID                     |
| `liquidity` | uint128 | 此仓位的流动性数量                         |
| `amount0`   | uint256 | token0 的数量                              |
| `amount1`   | uint256 | token1 的数量                              |

### 令牌 URI

```solidity
  function tokenURI(
    uint256 tokenId
  ) public view returns (string)
```

返回描述特定令牌 ID 的 URI

#### 参数：

| 名称      | 类型    | 描述                                       |
| :-------- | :------ | :----------------------------------------- |
| `tokenId` | uint256 | 表示铸造的仓位的令牌 ID                     |

#### 返回值：

一个带有 URI 数据的 base64 字符串。

### 基础 URI

```solidity
  function baseURI(
  ) public returns (string)
```

### 增加流动性

```solidity
  function increaseLiquidity(
    struct INonfungiblePositionManager.IncreaseLiquidityParams params
  ) external returns (uint128 liquidity, uint256 amount0, uint256 amount1)
```

增加仓位中的流动性，由 `msg.sender` 支付的代币

#### 参数：

| 名称     | 类型                                                       | 描述                                                         |
| :------- | :--------------------------------------------------------- | :------------------------------------------------------------------ |
| `params` | struct INonfungiblePositionManager.IncreaseLiquidityParams | tokenId 用于增加流动性的令牌的 ID                               |

#### 返回值：

| 名称        | 类型    | 描述                                         |
| :---------- | :------ | :------------------------------------------- |
| `liquidity` | uint128 | 因增加而产生的新流动性金额                 |
| `amount0`   | uint256 | 达到结果流动性所需的 token0 数量             |
| `amount1`   | uint256 | 达到结果流动性所需的 token1 数量             |

### 减少流动性

```solidity
  function decreaseLiquidity(
    struct INonfungiblePositionManager.DecreaseLiquidityParams params
  ) external returns (uint256 amount0, uint256 amount1)
```

减少仓位中的流动性，并将其记入仓位

#### 参数：

| 名称     | 类型                                                       | 描述                                                         |
| :------- | :--------------------------------------------------------- | :------------------------------------------------------------------ |
| `params` | struct INonfungiblePositionManager.DecreaseLiquidityParams | tokenId 用于减少流动性的令牌的 ID                               |

#### 返回值：

| 名称      | 类型    | 描述                                                  |
| :-------- | :------ | :----------------------------------------------------------- |
| `amount0` | uint256 | 记入仓位的欠款中的 token0 数量                         |
| `amount1` | uint256 | 记入仓位的欠款中的 token1 数量                         |

### 收集

```solidity
  function collect(
    struct INonfungiblePositionManager.CollectParams params
  ) external returns (uint256 amount0, uint256 amount1)
```

收集归属于特定仓位的最多一定数量的费用到接收者

#### 参数：

| 名称     | 类型                                             | 描述                                                     |
| :------- | :----------------------------------------------- | :-------------------------------------------------------------- |
| `params` | struct INonfungiblePositionManager.CollectParams | tokenId 收集代币的 NFT 的 ID                                  |

receiver 应该接收代币的账户，
amount0Max 收集的 token0 的最大数量，
amount1Max 收集的 token1 的最大数量

#### 返回值：

| 名称      | 类型    | 描述                            |
| :-------- | :------ | :------------------------------------- |
| `amount0` | uint256 | 在 token0 中收集的费用数量         |
| `amount1` | uint256 | 在 token1 中收集的费用数量         |

### 烧毁

```solidity
  function burn(
    uint256 tokenId
  ) external
```

烧毁一个令牌 ID，这会从 NFT 合约中删除它。该令牌必须具有 0 流动性，并且必须先收集所有代币。

#### 参数：

| 名称      | 类型    | 描述                              |
| :-------- | :------ | :-------------------------------- |
| `tokenId` | uint256 | 正在烧毁的令牌的 ID               |

### \_getAndIncrementNonce

```solidity
  function _getAndIncrementNonce(
  ) internal returns (uint256)
```

### getApproved

```solidity
  function getApproved(
  ) public view returns (address)
```

返回被批准用于 `tokenId` 代币的账户。
要求：

- 必须存在 `tokenId`。

### \_approve

```solidity
  function _approve(
  ) internal
```

重写 \_approve 以使用仓位中的操作员，该操作员与仓位许可的随机数打包在一起。