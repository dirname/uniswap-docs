---
id: fetching-positions
title: 获取仓位信息
---

## 引言

本指南将介绍如何在 Uniswap V3 协议上创建（或铸造）流动性仓位。
就像 [流动性仓位指南](./01-position-data.md) 一样，这里没有配套的示例，但本指南中使用到的概念和函数可以在各种与流动性仓位交互的例子中找到。

:::info
如果您需要了解流动性仓位的基础知识，请查阅 [流动性仓位指南](./01-position-data.md)
:::

[NonfungiblePositionManager 合约](../../../../contracts/v3/reference/periphery/NonfungiblePositionManager.md) 可用于创建仓位，以及获取 **现有仓位** 的信息。
在本指南中，我们将获取 **所有仓位** 对于一个地址，并为这些仓位获取 **详细的仓位数据**。

本指南将 **涵盖**：

1. 创建一个 ethersJS 合约以与 NonfungiblePositionManager 进行交互。
2. 获取某个地址的所有仓位。
3. 获取这些仓位的仓位信息。

在本指南结束时，根据上述输入，我们应该能够通过点击按钮铸造一个流动性仓位，并在 Web 应用程序的用户界面查看该仓位。

对于本指南，我们不需要使用 Uniswap SDK，我们只会从 `@uniswap/v3-periphery` 导入 NonfungiblePositionManager 合约的合同 ABI。

## 连接到 NFTPositionManager 合约

我们使用 **ethersJS** 来与 NonfungiblePositionManager 合约进行交互。让我们创建一个 ethers 合约：

```typescript
import { ethers } from 'ethers'
import INONFUNGIBLE_POSITION_MANAGER from '@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json'

const provider = new ethers.providers.JsonRpcProvider(rpcUrl)

const nfpmContract = new ethers.Contract(
    NONFUNGIBLE_POSITION_MANAGER_CONTRACT_ADDRESS,
    INONFUNGIBLE_POSITION_MANAGER.abi,
    provider
)
```

我们从 'v3-periphery` 包中获取合约的 ABI，并从 [Github](https://github.com/Uniswap/v3-periphery/blob/main/deploys.md) 获取合约地址。

## 获取仓位 ID

我们想要获取我们地址的所有仓位 ID。我们首先获取仓位数量，然后通过其索引获取 ID。

我们使用 `balanceOf` 读取调用来获取仓位的数量：

```typescript

const numPositions = await nfpmContract.balanceOf(address)
```

接下来，我们遍历仓位数量并获取 ID：

```typescript
const calls = []

for (let i = 0; i < numPositions; i++) {
    calls.push(
        nfpmContract.tokenOfOwnerByIndex(address, i)
    )
}

const positionIds = await Promise.all(calls)
```

## 获取仓位信息

现在，我们已经获得了与我们的地址关联的仓位的 ID，我们可以使用 `positions` 函数来获取仓位信息。

Solidity 函数返回大量描述仓位的值：

```solidity
function positions(
    uint256 tokenId
  ) external view returns (
    uint96 nonce, 
    address operator, 
    address token0, 
    address token1, 
    uint24 fee, 
    int24 tickLower, 
    int24 tickUpper, 
    uint128 liquidity, 
    uint256 feeGrowthInside0LastX128, 
    uint256 feeGrowthInside1LastX128, 
    uint128 tokensOwed0, 
    uint128 tokensOwed1
    )
```

在此示例中，我们只关心与仓位交互所需的值，因此我们创建了一个接口 `PositionInfo`：

```typescript
interface PositionInfo {
  tickLower: number
  tickUpper: number
  liquidity: JSBI
  feeGrowthInside0LastX128: JSBI
  feeGrowthInside1LastX128: JSBI
  tokensOwed0: JSBI
  tokensOwed1: JSBI
}
```

我们使用 `positions` 获取仓位数据：

```typescript
const positionCalls = []

for (let id of positionIds) {
    positionCalls.push(
        nfpmContract.positions(id)
    )
}

const callResponses = await Promise.all(positionCalls)
```

最后，我们将 RPC 响应映射到我们的接口：

```typescript
const positionInfos = callResponses.map((position) => {
    return {
        tickLower: position.tickLower,
        tickUpper: position.tickUpper,
        liquidity: JSBI.BigInt(position.liquidity),
        feeGrowthInside0LastX128: JSBI.BigInt(position.feeGrowthInside0LastX128),
        feeGrowthInside1LastX128: JSBI.BigInt(position.feeGrowthInside1LastX128),
        tokensOwed0: JSBI.BigInt(position.tokensOwed0),
        tokensOwed1: JSBI.BigInt(position.tokensOwed1),
  }
})
```

我们现在有了一个数组，其中包含我们地址持有的所有仓位的 PositionInfo。