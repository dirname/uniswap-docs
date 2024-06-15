---
sidebar_label: Uniswap V3 抵押者设计
sidebar_position: 1
---

# Uniswap V3 抵押者设计

流动性挖矿的抵押者设计包含一个标准的位置抵押合约，即 Staker。该合约的技术参考在 [这里](../../periphery/staker/UniswapV3Staker.md)，源代码在 [这里](https://github.com/Uniswap/uniswap-v3-staker)。

## 数据结构

```solidity
struct Incentive {
  uint128 totalRewardUnclaimed;
  uint128 numberOfStakes;
  uint160 totalSecondsClaimedX128;
}

struct Deposit {
  address owner;
  uint96 numberOfStakes;
}

struct Stake {
  uint160 secondsPerLiquidityInsideInitialX128;
  uint128 liquidity;
}

struct IncentiveKey {
        IERC20Minimal rewardToken;
        IUniswapV3Pool pool;
        uint256 startTime;
        uint256 endTime;
        address refundee;
}
```

状态：

```solidity
IUniswapV3Factory public immutable factory;
INonfungiblePositionManager public immutable nonfungiblePositionManager;

/// @dev bytes32 指的是 IncentiveId.compute 的返回值
mapping(bytes32 => Incentive) public incentives;

/// @dev deposits[tokenId] => Deposit
mapping(uint256 => Deposit) public deposits;

/// @dev stakes[tokenId][incentiveHash] => Stake
mapping(uint256 => mapping(bytes32 => Stake)) public stakes;

/// @dev rewards[rewardToken][msg.sender] => uint256
mapping(address => mapping(address => uint256)) public rewards;
```

参数：

```solidity
struct CreateIncentiveParams {
  address rewardToken;
  address pool;
  uint256 startTime;
  uint256 endTime;
  uint128 totalReward;
}

struct EndIncentiveParams {
  address creator;
  address rewardToken;
  address pool;
  uint256 startTime;
  uint256 endTime;
}

```

## 激励机制

### `createIncentive(CreateIncentiveParams memory params)`

`createIncentive` 创建一个流动性挖矿激励计划。用于查找 Incentive 的键是其不可变属性的哈希值。

**检查：**

- 具有这些参数的激励机制尚不存在
- 时间戳：`params.endTime >= params.startTime`，`params.startTime >= block.timestamp`
- 具有此 ID 的激励机制尚不存在。

**效果：**

- 设置 `incentives[key] = Incentive(totalRewardUnclaimed=totalReward, totalSecondsClaimedX128=0, rewardToken=rewardToken)`

**交互：**

- 将 `params.totalReward` 从 `msg.sender` 转移到自身。
  - 确保这里有检查，并且如果转移失败则失败
- 触发 `IncentiveCreated`

### `endIncentive(EndIncentiveParams memory params)`

`endIncentive` 可以由任何人调用，在 `endTime` 过后结束一个激励机制，将 `totalRewardUnclaimed` 的 `rewardToken` 转移回 `refundee`。

**检查：**

- `block.timestamp > params.endTime`
- 激励机制存在（`incentive.totalRewardUnclaimed != 0`）

**效果：**

- 删除 `incentives[key]`（这是一个新更改）

**交互：**

- 安全转移 `totalRewardUnclaimed` 的 `rewardToken` 到激励创建者 `msg.sender`
- 触发 `IncentiveEnded`

## 存入/提取代币

**交互**

- `nonfungiblePositionManager.safeTransferFrom(sender, this, tokenId)`
  - 此转移触发 onERC721Received 钩子

### `onERC721Received(address, address from, uint256 tokenId, bytes calldata data)`

**检查：**

- 确保发送者是 univ3 nft

**效果：**

- 为代币创建存款，设置存款 `owner` 为 `from`。
  - 将 `owner` 设置为 `from` 确保了代币的所有者也拥有该存款。批准的地址和操作员可能首先将代币转移到他们自己名下，然后再进行存款以获得存款所有权。
- 如果 `data.length>0`，则在一项或多项激励中质押代币

### `withdrawToken(uint256 tokenId, address to, bytes memory data)`

**检查**

- 检查是否存在针对该代币的存款，且 `msg.sender` 是该存款上的 `owner`。
- 检查该存款上的 `numberOfStakes` 是否为 0。

**效果**

- 删除存款 `delete deposits[tokenId]`。

**交互**

- 使用 `data` 将代币通过 `safeTransferFrom` 转移到 `to`。
- 触发 `DepositTransferred(token, deposit.owner, address(0))`

## 抵押/取消抵押/奖励

### `stakeToken`

**检查：**

- `deposits[params.tokenId].owner == msg.sender`
- 确保激励机制确实存在且有可申领的奖励（incentive.rewardToken != address(0)）
  - 检查此检查是否可以检查 totalRewardUnclaimed
- 确保代币尚未被抵押

### `claimReward`

**交互**

- `msg.sender` 提取他们在特定代币中的所有奖励余额到指定的 `to` 地址。

- 触发 RewardClaimed(to, reward)

### `unstakeToken`

要取消抵押 NFT，您需要调用 `unstakeToken`，它接受与 `stake` 相同的参数。

**检查**

- 它会检查你是否是存款的所有者
- 它会检查提供的键是否确实存在 `Stake`（带有 exists=true）。

**效果**

- 删除 Stake。
- 将存款的 `numberOfStakes` 减少 1。
- `totalRewardsUnclaimed` 减去 `reward`。
- `totalSecondsClaimed` 增加 `seconds`。
- 将 `getRewardInfo` 提供的数量增加到 `rewards[rewardToken][msg.sender]` 中。

### `getRewardInfo`

- 它计算给定 Stake 的 `secondsInsideX128`（应得奖励的总流动性秒数），方法是：
  - 使用 Uniswap v3 核心合约中的 `snapshotCumulativesInside` 获取 `secondsPerLiquidityInRangeX128`，然后减去 `secondsPerLiquidityInRangeInitialX128`。
  - 将其乘以 `stake.liquidity` 来得到该期间内流动性积累的总秒数
- 注意 X128 表示它是 `UQ32X128` 类型。

- 它通过获取 `max(endTime, block.timestamp) - startTime`，将其转换为 Q128 类型，然后减去 `totalSecondsClaimedX128` 来计算 `totalSecondsUnclaimed`。

- 它通过将 `incentive.totalRewardUnclaimed` 转换为 Q128 类型，然后除以 `totalSecondsUnclaimedX128` 来计算 Incentive 的 `rewardRate`。

- `reward` 然后通过 `secondsInsideX128` 乘以 `rewardRate` 计算得出，结果缩放到常规 uint128 类型。