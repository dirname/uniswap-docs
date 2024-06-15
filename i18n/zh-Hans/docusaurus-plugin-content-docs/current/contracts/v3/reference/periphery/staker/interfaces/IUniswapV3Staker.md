允许将非同质化流动性代币质押以换取奖励代币。

## 函数

### factory

```solidity
  function factory(
  ) external view returns (contract IUniswapV3Factory)
```

Uniswap V3 工厂

### nonfungiblePositionManager

```solidity
  function nonfungiblePositionManager(
  ) external view returns (contract INonfungiblePositionManager)
```

与此质押合约兼容的非同质化头寸管理器

### maxIncentiveDuration

```solidity
  function maxIncentiveDuration(
  ) external view returns (uint256)
```

激励的最大持续时间（以秒为单位）

### maxIncentiveStartLeadTime

```solidity
  function maxIncentiveStartLeadTime(
  ) external view returns (uint256)
```

激励开始时间可以设置的未来秒数的最大值

### incentives

```solidity
  function incentives(
    bytes32 incentiveId
  ) external view returns (uint256 totalRewardUnclaimed, uint160 totalSecondsClaimedX128, uint96 numberOfStakes)
```

表示一个质押激励

#### 参数：

| 名称          | 类型    | 描述                                          |
| :------------ | :------ | :--------------------------------------------------- |
| `incentiveId` | bytes32 | 根据其参数计算出的激励ID |

#### 返回值：

| 名称                      | 类型    | 描述                                                       |
| :------------------------ | :------ | :---------------------------------------------------------------- |
| `totalRewardUnclaimed`    | uint256 | 用户尚未申领的奖励代币数量               |
| `totalSecondsClaimedX128` | uint160 | 总的已申领流动性质押秒数，表示为UQ32.128        |
| `numberOfStakes`          | uint96  | 当前为该激励质押的存款数量 |

### deposits

```solidity
  function deposits(
  ) external view returns (address owner, uint48 numberOfStakes, int24 tickLower, int24 tickUpper)
```

返回关于已存入 NFT 的信息

#### 返回值：

| 名称             | 类型    | 描述                                                      |
| :--------------- | :------ | :--------------------------------------------------------------- |
| `owner`          | address | 存入 NFT 的所有者                                   |
| `numberOfStakes` | uint48  | 流动性被质押在多少个激励中的计数 |
| `tickLower`      | int24   | 范围的下限                                  |
| `tickUpper`      | int24   | 范围的上限                                  |

### stakes

```solidity
  function stakes(
    uint256 tokenId,
    bytes32 incentiveId
  ) external view returns (uint160 secondsPerLiquidityInsideInitialX128, uint128 liquidity)
```

返回有关质押的流动性 NFT 的信息

#### 参数：

| 名称          | 类型    | 描述                                           |
| :------------ | :------ | :---------------------------------------------------- |
| `tokenId`     | uint256 | 质押代币的ID                            |
| `incentiveId` | bytes32 | 代币所质押的激励ID |

#### 返回值：

| 名称                                   | 类型    | 描述                                                                      |
| :------------------------------------- | :------ | :------------------------------------------------------------------------------- |
| `secondsPerLiquidityInsideInitialX128` | uint160 | 每单位流动性的秒数，表示为UQ32.128                                    |
| `liquidity`                            | uint128 | 上次计算奖励时 NFT 中的流动性数量 |

### rewards

```solidity
  function rewards(
    contract IERC20Minimal rewardToken,
    address owner
  ) external view returns (uint256 rewardsOwed)
```

根据最后一次更新所有质押以来的时间，返回应支付给指定地址的奖励代币数量

#### 参数：

| 名称          | 类型                   | 描述                                      |
| :------------ | :--------------------- | :----------------------------------------------- |
| `rewardToken` | contract IERC20Minimal | 需要检查奖励的代币             |
| `owner`       | address                | 检查其应得奖励的所有者 |

#### 返回值：

| 名称          | 类型    | 描述                                           |
| :------------ | :------ | :---------------------------------------------------- |
| `rewardsOwed` | uint256 | 所有者可申领的奖励代币数量 |

### createIncentive

```solidity
  function createIncentive(
    struct IUniswapV3Staker.IncentiveKey key,
    uint256 reward
  ) external
```

创建一个新的流动性挖矿激励计划

#### 参数：

| 名称     | 类型                                 | 描述                                   |
| :------- | :----------------------------------- | :-------------------------------------------- |
| `key`    | struct IUniswapV3Staker.IncentiveKey | 要创建的激励详情            |
| `reward` | uint256                              | 将要分发的奖励代币数量 |

### endIncentive

```solidity
  function endIncentive(
    struct IUniswapV3Staker.IncentiveKey key
  ) external returns (uint256 refund)
```

在激励结束时间已过且所有质押已被撤回后，终止激励

#### 参数：

| 名称  | 类型                                 | 描述                     |
| :---- | :----------------------------------- | :------------------------------ |
| `key` | struct IUniswapV3Staker.IncentiveKey | 要终止的激励详情 |

#### 返回值：

| 名称     | 类型    | 描述                                             |
| :------- | :------ | :------------------------------------------------------ |
| `refund` | uint256 | 激励结束后剩余的奖励代币数量 |

### transferDeposit

```solidity
  function transferDeposit(
    uint256 tokenId,
    address to
  ) external
```

将存款的所有权从发送方转移到指定的接收方

#### 参数：

| 名称      | 类型    | 描述                                       |
| :-------- | :------ | :------------------------------------------------ |
| `tokenId` | uint256 | 要转移的代币（和存款）的ID |
| `to`      | address | 存款的新所有者                      |

### withdrawToken

```solidity
  function withdrawToken(
    uint256 tokenId,
    address to,
    bytes data
  ) external
```

从本合约中撤回 Uniswap V3 LP 代币 `tokenId` 到接收者 `to`

#### 参数：

| 名称      | 类型    | 描述                                                                                       |
| :-------- | :------ | :------------------------------------------------------------------------------------------------ |
| `tokenId` | uint256 | Uniswap V3 LP 代币的唯一标识符                                                   |
| `to`      | address | LP 代币将被发送到的地址                                                       |
| `data`    | bytes   | 可选的数据数组，将在 NFT safeTransferFrom 中传递给 `to` 地址 |

### stakeToken

```solidity
  function stakeToken(
    struct IUniswapV3Staker.IncentiveKey key,
    uint256 tokenId
  ) external
```

质押 Uniswap V3 LP 代币

#### 参数：

| 名称      | 类型                                 | 描述                                         |
| :-------- | :----------------------------------- | :-------------------------------------------------- |
| `key`     | struct IUniswapV3Staker.IncentiveKey | 要质押 NFT 的激励键 |
| `tokenId` | uint256                              | 要质押的代币ID                        |

### unstakeToken

```solidity
  function unstakeToken(
    struct IUniswapV3Staker.IncentiveKey key,
    uint256 tokenId
  ) external
```

取消质押 Uniswap V3 LP 代币

#### 参数：

| 名称      | 类型                                 | 描述                                           |
| :-------- | :----------------------------------- | :---------------------------------------------------- |
| `key`     | struct IUniswapV3Staker.IncentiveKey | 要取消质押 NFT 的激励键 |
| `tokenId` | uint256                              | 要取消质押的代币ID                        |

### claimReward

```solidity
  function claimReward(
    contract IERC20Minimal rewardToken,
    address to,
    uint256 amountRequested
  ) external returns (uint256 reward)
```

从合约中向接收者 `to` 转移 `amountRequested` 的累计 `rewardToken` 奖励

#### 参数：

| 名称              | 类型                   | 描述                                                                    |
| :---------------- | :--------------------- | :----------------------------------------------------------------------------- |
| `rewardToken`     | contract IERC20Minimal | 分发作为奖励的代币                                        |
| `to`              | address                | 申领奖励将被发送到的地址                              |
| `amountRequested` | uint256                | 要申领的奖励代币数量。如果设置为 0，则申领全部奖励金额。 |

#### 返回值：

| 名称     | 类型    | 描述                         |
| :------- | :------ | :---------------------------------- |
| `reward` | uint256 | 申领的奖励代币数量 |

### getRewardInfo

```solidity
  function getRewardInfo(
    struct IUniswapV3Staker.IncentiveKey key,
    uint256 tokenId
  ) external returns (uint256 reward, uint160 secondsInsideX128)
```

计算给定质押将获得的奖励金额

#### 参数：

| 名称      | 类型                                 | 描述              |
| :-------- | :----------------------------------- | :----------------------- |
| `key`     | struct IUniswapV3Staker.IncentiveKey | 激励的键 |
| `tokenId` | uint256                              | 代币的ID      |

#### 返回值：

| 名称                | 类型    | 描述                                                    |
| :------------------ | :------ | :------------------------------------------------------------- |
| `reward`            | uint256 | 对于给定激励，NFT 已累积的奖励金额至此为止 |
| `secondsInsideX128` | uint160 | 在价格范围内的秒数                              |

## 事件

### IncentiveCreated

```solidity
  event IncentiveCreated(
    contract IERC20Minimal rewardToken,
    contract IUniswapV3Pool pool,
    uint256 startTime,
    uint256 endTime,
    address refundee,
    uint256 reward
  )
```

当创建了流动性挖矿激励时发出的事件

#### 参数：

| 名称          | 类型                    | 描述                                                               |
| :------------ | :---------------------- | :------------------------------------------------------------------------ |
| `rewardToken` | contract IERC20Minimal  | 分发作为奖励的代币                                   |
| `pool`        | contract IUniswapV3Pool | Uniswap V3 池                                                       |
| `startTime`   | uint256                 | 激励计划开始的时间                                |
| `endTime`     | uint256                 | 奖励停止累积的时间                                       |
| `refundee`    | address                 | 结束时间后接收任何剩余奖励代币的地址 |
| `reward`      | uint256                 | 将要分发的奖励代币数量                             |

### IncentiveEnded

```solidity
  event IncentiveEnded(
    bytes32 incentiveId,
    uint256 refund
  )
```

当流动性挖矿激励结束时可能发出的事件

#### 参数：

| 名称          | 类型    | 描述                          |
| :------------ | :------ | :----------------------------------- |
| `incentiveId` | bytes32 | 正在结束的激励        |
| `refund`      | uint256 | 退还的奖励代币数量 |

### DepositTransferred

```solidity
  event DepositTransferred(
    uint256 tokenId,
    address oldOwner,
    address newOwner
  )
```

当存款所有权发生变更时发出

#### 参数：

| 名称       | 类型    | 描述                                                 |
| :--------- | :------ | :---------------------------------------------------------- |
| `tokenId`  | uint256 | 正在转移的存款（和代币）的ID |
| `oldOwner` | address | 存款转移前的所有者                |
| `newOwner` | address | 存款转移后的所有者                 |

### TokenStaked

```solidity
  event TokenStaked(
    uint256 tokenId,
    bytes32 liquidity,
    uint128 incentiveId
  )
```

当 Uniswap V3 LP 代币已被质押时发出的事件

#### 参数：

| 名称          | 类型    | 描述                                     |
| :------------ | :------ | :---------------------------------------------- |
| `tokenId`     | uint256 | Uniswap V3 LP 代币的唯一标识符 |
| `liquidity`   | bytes32 | 质押的流动性数量                  |
| `incentiveId` | uint128 | 代币正在质押的激励ID     |

### TokenUnstaked

```solidity
  event TokenUnstaked(
    uint256 tokenId,
    bytes32 incentiveId
  )
```

当 Uniswap V3 LP 代币已被取消质押时发出的事件

#### 参数：

| 名称          | 类型    | 描述                                     |
| :------------ | :------ | :---------------------------------------------- |
| `tokenId`     | uint256 | Uniswap V3 LP 代币的唯一标识符 |
| `incentiveId` | bytes32 | 代币正在质押的激励ID     |

### RewardClaimed

```solidity
  event RewardClaimed(
    address to,
    uint256 reward
  )
```

当奖励代币已被申领时发出的事件

#### 参数：

| 名称     | 类型    | 描述                                    |
| :------- | :------ | :--------------------------------------------- |
| `to`     | address | 申领奖励被发送到的地址 |
| `reward` | uint256 | 申领的奖励代币数量            |