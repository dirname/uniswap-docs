---
sidebar_label: Uniswap V3 抵押合约
sidebar_position: 2
---

# Uniswap V3 抵押合约

以下是抵押合约的技术参考，[`UniswapV3Staker.sol`](https://github.com/Uniswap/uniswap-v3-staker/blob/main/contracts/UniswapV3Staker.sol)。很快将发布与该抵押合约交互的技术指南。

## 函数

### stakes

```solidity
  function stakes(
    uint256 tokenId,
    bytes32 incentiveId
  ) public view override returns (uint160 secondsPerLiquidityInsideInitialX128, uint128 liquidity)
```

返回关于已抵押流动性 NFT 的信息

#### 参数：

| 名称          | 类型    | 描述                                           |
| :------------ | :------ | :---------------------------------------------------- |
| `tokenId`     | uint256 | 已抵押代币的 ID                            |
| `incentiveId` | bytes32 | 代币所参与的激励的 ID |

#### 返回值：

| 名称                                   | 类型    | 描述                                                                      |
| :------------------------------------- | :------ | :------------------------------------------------------------------------------- |
| `secondsPerLiquidityInsideInitialX128` | uint160 | 以 UQ32.128 表示的 secondsPerLiquidity                                    |
| `liquidity`                            | bytes32 | 上次计算奖励时 NFT 中的流动性金额 |

### constructor

```solidity
  function constructor(
    contract IUniswapV3Factory _factory,
    contract INonfungiblePositionManager _nonfungiblePositionManager,
    uint256 _maxIncentiveStartLeadTime,
    uint256 _maxIncentiveDuration
  ) public
```

#### 参数：

| 名称                          | 类型                                 | 描述                                                                  |
| :---------------------------- | :----------------------------------- | :--------------------------------------------------------------------------- |
| `_factory`                    | contract IUniswapV3Factory           | Uniswap V3 工厂                                                       |
| `_nonfungiblePositionManager` | contract INonfungiblePositionManager | NFT 位置管理器合约地址                                    |
| `_maxIncentiveStartLeadTime`  | uint256                              | 激励开始时间的最大持续时间（秒）                                  |
| `_maxIncentiveDuration`       | uint256                              | 可设置激励开始时间的最大未来秒数 |

### createIncentive

```solidity
  function createIncentive(
    struct IUniswapV3Staker.IncentiveKey key,
    uint256 reward
  ) external
```

创建新的流动性挖矿激励计划

#### 参数：

| 名称     | 类型                                 | 描述                                   |
| :------- | :----------------------------------- | :-------------------------------------------- |
| `key`    | struct IUniswapV3Staker.IncentiveKey | 要创建的激励详情            |
| `reward` | uint256                              | 要分配的奖励代币数量 |

### endIncentive

```solidity
  function endIncentive(
    struct IUniswapV3Staker.IncentiveKey key
  ) external returns (uint256 refund)
```

在激励结束时间已过且所有抵押已撤回后结束激励

#### 参数：

| 名称  | 类型                                 | 描述                     |
| :---- | :----------------------------------- | :------------------------------ |
| `key` | struct IUniswapV3Staker.IncentiveKey | 要结束的激励详情 |

#### 返回值：

| 名称     | 类型    | 描述                                             |
| :------- | :------ | :------------------------------------------------------ |
| `refund` | uint256 | 结束激励时剩余的奖励代币 |

### onERC721Received

```solidity
  function onERC721Received(
  ) external returns (bytes4)
```

接收到 Uniswap V3 ERC721 时，创建代币存款并将所有者设置为 `from`。如果格式正确的 `data` 长度大于 0，则也会抵押代币
在一项或多项激励中。

每当 {IERC721} `tokenId` 代币通过 {IERC721-safeTransferFrom}
由 `operator` 从 `from` 转移到本合约时，此函数将被调用。
它必须返回其 Solidity 选择器来确认代币转移。
如果返回任何其他值或接收方未实现该接口，转移将被撤销。
选择器可以通过 `IERC721.onERC721Received.selector` 在 Solidity 中获得。

### transferDeposit

```solidity
  function transferDeposit(
    uint256 tokenId,
    address to
  ) external
```

将存款的所有权从发送方转移到给定的接收方

#### 参数：

| 名称      | 类型    | 描述                                       |
| :-------- | :------ | :------------------------------------------------ |
| `tokenId` | uint256 | 要转移的代币（和存款）的 ID |
| `to`      | address | 存款的新所有者                      |

### withdrawToken

```solidity
  function withdrawToken(
    uint256 tokenId,
    address to,
    bytes data
  ) external
```

从本合约中提取 Uniswap V3 LP 代币 `tokenId` 并将其转移到接收方 `to`

#### 参数：

| 名称      | 类型    | 描述                                                                                       |
| :-------- | :------ | :------------------------------------------------------------------------------------------------ |
| `tokenId` | uint256 | Uniswap V3 LP 代币的唯一标识符                                                   |
| `to`      | address | LP 代币将被发送的地址                                                       |
| `data`    | bytes   | 可选的数据数组，将在 NFT safeTransferFrom 过程中传递给 `to` 地址 |

### stakeToken

```solidity
  function stakeToken(
    struct IUniswapV3Staker.IncentiveKey key,
    uint256 tokenId
  ) external
```

抵押 Uniswap V3 LP 代币

#### 参数：

| 名称      | 类型                                 | 描述                                         |
| :-------- | :----------------------------------- | :-------------------------------------------------- |
| `key`     | struct IUniswapV3Staker.IncentiveKey | 要抵押 NFT 的激励的键 |
| `tokenId` | uint256                              | 要抵押的代币 ID                        |

### unstakeToken

```solidity
  function unstakeToken(
    struct IUniswapV3Staker.IncentiveKey key,
    uint256 tokenId
  ) external
```

解除抵押 Uniswap V3 LP 代币

#### 参数：

| 名称      | 类型                                 | 描述                                           |
| :-------- | :----------------------------------- | :---------------------------------------------------- |
| `key`     | struct IUniswapV3Staker.IncentiveKey | 要解除抵押 NFT 的激励的键 |
| `tokenId` | uint256                              | 要解除抵押的代币 ID                        |

### claimReward

```solidity
  function claimReward(
    contract IERC20Minimal rewardToken,
    address to,
    uint256 amountRequested
  ) external override returns (uint256 reward)
```

从合约向接收方 `to` 转移累积的 `rewardToken` 奖励 `amountRequested`

#### 参数：

| 名称              | 类型                   | 描述                                                                    |
| :---------------- | :--------------------- | :----------------------------------------------------------------------------- |
| `rewardToken`     | contract IERC20Minimal | 作为奖励分发的代币                                        |
| `to`              | address                | 所有申领奖励将被发送到的地址                              |
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
  ) external view override returns (uint256 reward, uint160 secondsInsideX128)
```

计算给定抵押将获得的奖励金额

#### 参数：

| 名称      | 类型                                 | 描述              |
| :-------- | :----------------------------------- | :----------------------- |
| `key`     | struct IUniswapV3Staker.IncentiveKey | 激励的键 |
| `tokenId` | uint256                              | 代币 ID      |

#### 返回值：

| 名称                | 类型    | 描述                                                    |
| :------------------ | :------ | :------------------------------------------------------------- |
| `reward`            | uint256 | 对于给定激励而言 NFT 累积的奖励至今 |
| `secondsInsideX128` | uint160 | 处于价格范围内的秒数                              |