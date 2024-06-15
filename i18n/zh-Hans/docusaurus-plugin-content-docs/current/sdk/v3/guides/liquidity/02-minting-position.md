---
id: minting
title: 创建流动性头寸
---

## 引言

本指南将介绍如何在 Uniswap V3 协议上创建（或铸造）流动性头寸。
它基于 [铸造流动性头寸代码示例](https://github.com/Uniswap/examples/tree/main/v3-sdk/minting-position)，该示例可在 Uniswap 代码示例 [仓库](https://github.com/Uniswap/examples) 中找到。
要运行此示例，请查阅示例的 [README](https://github.com/Uniswap/examples/blob/main/v3-sdk/minting-position/README.md)，并遵循设置说明。

:::info
如果您需要了解 SDK 的简介，以及这些指南如何与示例仓库相连，请访问我们的 [背景](../01-background.md) 页面！
:::

在 Uniswap V3 协议中，流动性头寸通过非同质化代币表示。在本指南中，我们将使用 `NonfungiblePositionManager` 类帮助我们为 **USDC - DAI** 对铸造流动性头寸。本指南的输入包括我们提供流动性的 **两个代币**、每个代币提供的 **数量** 以及 Pool 的 **费用**。

本指南将 **涵盖**：

1. 授权转移我们的代币
2. 创建 `Pool` 实例
3. 根据输入代币计算我们的 `Position`
4. 配置并执行我们的铸造交易

在指南结束时，根据上述输入，我们应该能够通过点击按钮铸造流动性头寸，并在 Web 应用程序的 UI 上查看该头寸。

对于本指南，使用了以下 Uniswap 包：

- [`@uniswap/v3-sdk`](https://www.npmjs.com/package/@uniswap/v3-sdk)
- [`@uniswap/sdk-core`](https://www.npmjs.com/package/@uniswap/sdk-core)
- [`@uniswap/smart-order-router`](https://www.npmjs.com/package/@uniswap/smart-order-router)

本指南的核心代码可以在 [`mintPosition()`](https://github.com/Uniswap/examples/blob/main/v3-sdk/minting-position/src/libs/positions.ts#L37) 中找到

## 授权转移我们的代币

我们希望使用 `NonfungiblePositionManager` 合约来创建我们的流动性头寸。
在智能合约代表我们转移代币的情况下，我们需要给予它这样做的授权。
这是通过与合约的 Contract 进行交互实现的，考虑到 ERC20 代币本身就是它们自己的智能合约。

鉴于此，创建我们头寸的第一步是授予协议的 `NonfungiblePositionManager` 转移我们代币的权限：

```typescript
const token0Approval = await getTokenTransferApproval(
  token0Address,
  amount0
)
const token1Approval = await getTokenTransferApproval(
  token1Address,
  amount1
)
```

实现这一点的逻辑被封装在 `getTokenTransferApprovals` 函数中。简而言之，由于 **USDC** 和 **DAI** 都是 ERC20 代币，我们设置对它们智能合约的引用并调用 `approve` 函数：

```typescript
import { ethers, BigNumber } from 'ethers'

async function getTokenTransferApproval(address: string, amount: BigNumber) {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl)

    const tokenContract = new ethers.Contract(
        token.address,
        ERC20_ABI,
        provider
    )

    return tokenContract.approve(
        NONFUNGIBLE_POSITION_MANAGER_CONTRACT_ADDRESS,
        amount
    )
}
```

我们可以从 [Github](https://github.com/Uniswap/v3-periphery/blob/main/deploys.md) 获取 NonfungiblePositionManager 合约的 Contract 地址。
对于以太坊主网或主网的本地分叉，我们看到合约地址是 `0xC36442b4a4522E871399CD717aBDD847Ab11FE88`。
在我们的示例中，这在 [`constants.ts`](https://github.com/Uniswap/examples/blob/main/v3-sdk/minting-position/src/libs/constants.ts) 文件中定义。

## 创建 `Pool` 实例

已经授权了代币的转移，我们现在需要获取我们提供流动性的池的相关数据，以便实例化一个 Pool 类。

首先，我们通过使用辅助函数并传入池的唯一标识符 - **两个代币** 和 Pool 的 **费用** 来计算我们池的地址。
**费用** 输入参数代表在交换发生时分配给所有范围内流动性的交换费。

```typescript
import { computePoolAddress, FeeAmount } from '@uniswap/v3-sdk'
import { Token } from '@uniswap/sdk-core'

const token0: Token = ...
const token1: Token = ...
const fee: FeeAmount = ...
const POOL_FACTORY_CONTRACT_ADDRESS: string = ...

const currentPoolAddress = computePoolAddress({
  factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
  tokenA: token0,
  tokenB: token1,
  fee: poolFee,
})
```

再次，我们可以从 [Github](https://github.com/Uniswap/v3-periphery/blob/main/deploys.md) 获取工厂合约地址。
对于以太坊主网或主网的本地分叉，它是 `0x1F98431c8aD98523631AE4a59f267346ea31F984`。
在我们的示例中，它在 [`constants.ts`](https://github.com/Uniswap/examples/blob/main/v3-sdk/minting-position/src/libs/constants.ts) 中定义。

然后，我们通过创建对 Pool 智能合约的引用并访问其方法来获取 Pool 的数据，这与我们在 [报价指南](../swaps/01-quoting.md#referencing-the-pool-contract-and-fetching-metadata)中所做的非常相似：

```typescript
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'

const poolContract = new ethers.Contract(
  currentPoolAddress,
  IUniswapV3PoolABI.abi,
  provider
)

const [liquidity, slot0] =
  await Promise.all([
    poolContract.liquidity(),
    poolContract.slot0(),
  ])
```

收集到所需数据后，我们现在可以创建 `Pool` 类的实例：

```typescript
import { Pool } from '@uniswap/v3-sdk'

const configuredPool = new Pool(
  token0,
  token1,
  poolFee,
  slot0.sqrtPriceX96.toString(),
  liquidity.toString(),
  slot0.tick
)
```

我们需要 Pool 实例来创建我们的 Position，因为流动性头寸的各个参数取决于它们创建时所在 Pool 的状态。
一个例子是当前价格（命名为 *sqrtPriceX96*，以其编码方式命名），以了解我们需要发送到 Pool 的两种代币的比例。

在当前价格以下提供的流动性将由 Pool 的第一个代币提供，而高于当前价格提供的流动性则由第二个代币组成。

## 根据输入代币计算我们的 `Position`

创建了 `Pool` 类的实例后，我们现在可以使用它来创建一个 `Position` 类的实例，该类表示 LPs 选择提供流动性的特定池的价格范围：

```typescript
import { Position } from '@uniswap/v3-sdk'
import { BigIntish } from '@uniswap/sdk-core'

// 我们想要提供的最大代币数量。BigIntish 接受 number、string 或 JSBI
const amount0: BigIntish = ...
const amount1: BigIntish = ...

const position = Position.fromAmounts({
  pool: configuredPool,
  tickLower:
    nearestUsableTick(configuredPool.tickCurrent, configuredPool.tickSpacing) -
    configuredPool.tickSpacing * 2,
  tickUpper:
    nearestUsableTick(configuredPool.tick, configuredPool.tickSpacing) +
    configuredPool.tickSpacing * 2,
  amount0: amount0,
  amount1: amount1,
  useFullPrecision: true,
})
```

我们使用 `Position` 类的 `fromAmounts` 静态函数来创建它的实例，该函数使用以下参数：

- **tickLower** 和 **tickUpper** 参数指定了提供流动性的价格范围。这个示例调用 **nearestUsableTick** 来获取当前可用的 tick 并调整较低参数使其低于该值两个 **tickSpacing**，并将较高的参数调整为高于该值两个 tickSpacing。这保证了提供的流动性“在范围内”，意味着在铸造这个头寸时将赚取费用
- **amount0** 和 **amount1** 定义流动性头寸可以使用的货币的最大金额。在这个示例中，我们从我们的配置参数提供这些。

给定这些参数，`fromAmounts` 将尝试计算我们能够提供的最大流动性。

## 配置并执行我们的铸造交易

然后，Position 实例作为输入传递给 `NonfungiblePositionManager` 的 `addCallParameters` 函数。该函数还需要一个作为其第二个参数的 [`AddLiquidityOptions`](https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/nonfungiblePositionManager.ts#L77) 对象。这可以是类型为 [`MintOptions`](https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/nonfungiblePositionManager.ts#L74) 用于铸造新头寸，或类型为 [`IncreaseOptions`](https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/nonfungiblePositionManager.ts#L75) 用于向现有头寸添加流动性。对于此示例，我们使用 `MintOptions` 来创建我们的头寸。

```typescript
import { MintOptions, NonfungiblePositionManager } from '@uniswap/v3-sdk'
import { Percent } from '@uniswap/sdk-core'

const mintOptions: MintOptions = {
  recipient: address,
  deadline: Math.floor(Date.now() / 1000) + 60 * 20,
  slippageTolerance: new Percent(50, 10_000),
}

// 获取铸造头寸的 calldata
const { calldata, value } = NonfungiblePositionManager.addCallParameters(
  position,
  mintOptions
)
```

`MintOptions` 接口要求三个键：

- `recipient` 定义 Position 所有者的地址，因此在我们的情况下是我们的钱包地址。
- `deadline` 定义我们希望交易包含在区块链中的最晚时间点。
- `slippageTolerance` 定义我们提供的代币 **比率变化** 的最大量。如果例如改变 Pool 价格的 **交易** 在我们的交易之前被包含，比率可能会发生变化。

`addCallParameters` 函数返回执行交易所需的 calldata 以及 value：

```typescript
const transaction = {
  data: calldata,
  to: NONFUNGIBLE_POSITION_MANAGER_CONTRACT_ADDRESS,
  value: value,
  from: address,
  maxFeePerGas: MAX_FEE_PER_GAS,
  maxPriorityFeePerGas: MAX_PRIORITY_FEE_PER_GAS,
}
```

我们使用我们的钱包发送交易。由于这是一个写调用，我们需要使用有效的私钥签署交易。

```typescript
const wallet = new ethers.Wallet(privateKey, provider)

const txRes = await wallet.sendTransaction(transaction)
```

写调用不会返回交易的结果。如果我们想读取结果，我们可以使用例如 `trace_transaction`。
您可以在 [区间订单指南](../advanced/05-range-orders.md) 中找到一个这样的示例。
在此示例中，我们不需要交易的结果。

交易的效果是铸造一个新的 Position NFT。我们应该在我们的头寸列表中看到具有流动性的新头寸。

## 下一步

一旦您铸造了头寸，我们的下一个指南 ([添加和移除流动性](./03-modifying-position.md)) 将演示如何向铸造的头寸添加和移除流动性！