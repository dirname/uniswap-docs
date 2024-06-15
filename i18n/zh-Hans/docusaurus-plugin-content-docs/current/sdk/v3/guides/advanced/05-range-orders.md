---
id: range-orders
title: 范围订单
---

## 引言

本指南将介绍如何使用单边流动性提供在 Uniswap V3 池中执行 **限价订单**。
为了展示这一概念，可以在 [范围订单示例](https://github.com/Uniswap/examples/tree/main/v3-sdk/range-order) 中找到一个示例，在 Uniswap 的代码示例 [仓库](https://github.com/Uniswap/example) 中。
要运行这个示例，请参阅指南的 [README](https://github.com/Uniswap/examples/blob/main/v3-sdk/price-oracle/README.md)，并遵循设置说明。

:::info
本指南基于 [流动性池指南](../liquidity/01-position-data.md) 构建。
我们建议在实施范围订单之前先浏览这部分文档。
:::

在这个示例中，我们将使用 [NonfungiblePositionManager](../../../../contracts/v3/reference/periphery/NonfungiblePositionManager.md) 合约创建一个单边流动性仓位。
然后，我们将使用 **ethers JS** 来观察新块上的池价格，并在达到目标时撤回流动性。

本指南将 **涵盖**：

1. 理解范围订单
2. 计算我们的刻度范围
3. 创建单边流动性仓位
4. 观察池的价格
5. 关闭限价订单

在开始本指南之前，考虑查看范围订单的 [概念页面](../../../../concepts/protocol/range-orders.md)，以了解如何使用 Uniswap V3 执行限价订单。

对于此指南，使用了以下 Uniswap 包：
  
- [`@uniswap/v3-sdk`](https://www.npmjs.com/package/@uniswap/v3-sdk)
- [`@uniswap/sdk-core`](https://www.npmjs.com/package/@uniswap/sdk-core)

本指南的核心代码可以在 [`range-order.ts`](https://github.com/Uniswap/examples/tree/main/v3-sdk/range-order/src/libs/range-order.ts) 中找到。

## 理解范围订单

如果你已经阅读了 [范围订单概念页面](../../../../concepts/protocol/range-orders.md)，可以跳过本节。

V3 池中的仓位始终会与一个刻度范围一起创建，在这个范围内，仓位的流动性可以供池中的交易使用。
让我们看一下当使用一个仓位的 `tokenId` 调用 NonfungiblePositionManager 合约的 `positions` 函数时的返回值。

```solidity
function positions(
    uint256 tokenId
  ) external view returns (
    uint96 nonce, 
    address operator, 
    address token0, 
    address token1, 
    uint24 fee, 
    int24 tickLower,    // 仓位下界
    int24 tickUpper,    // 仓位上界
    uint128 liquidity,  // 流动性
    uint256 feeGrowthInside0LastX128, 
    uint256 feeGrowthInside1LastX128, 
    uint128 tokensOwed0, 
    uint128 tokensOwed1
    )
```

我们看到，一个仓位只存储了一个 `liquidity` 值，以及定义了仓位可以用于交易的范围的 `tickLower` 和 `tickUpper` 值。
实际 **数量** 的 `token0` 和 `token1` 那个池欠仓位所有者的，是根据当前刻度左侧和右侧的仓位流动性的部分计算得出的。
当前刻度左侧的流动性表示为 `token0`，而右侧的流动性表示为 `token1`。

如果创建了一个新的仓位，且该仓位的刻度范围不包含池的当前刻度，则只能向池中的两个代币之一提供流动性。

我们将这称为 **单边流动性仓位**。

<img src={require('./images/range-order.png').default} alt="RangeOrder" box-shadow="none"/>

当池的当前刻度穿过仓位时，`token0` 和 `token1` 的比例会发生变化，并最终在当前刻度从另一边移出仓位时反转。

我们将利用这种行为来用 `token1` 提供流动性，并在它转换为 `token0` 时撤回仓位。

## 计算刻度范围

本指南的目标是创建一个 [获利了结订单](../../../../concepts/protocol/range-orders.md#take-profit-orders)，当 `token0` 的价格上升 5% 时，将 `token0` 交易为 `token1`。
为了创建我们的仓位，我们首先需要决定我们想要提供流动性的刻度范围。

### 上限刻度

我们 [创建一个池](./02-pool-data.md) 来表示我们正在交互的 V3 池，并获取 `token0Price`。
在这个示例中，我们不需要完整的刻度数据。

```typescript
import { Pool } from '@uniswap/v3-sdk'

... 
const pool = new Pool(token0, token1, fee, sqrtPriceX96, liquidity, tickCurrent)

const currentPrice = pool.token0Price
```

接下来，我们将 `价格` 提高 5%。我们创建一个新的价格，其分子比当前价格高 5%：

```typescript
import { Price, Fraction } from '@uniswap/sdk-core'

const targetFraction = Price.asFraction.multiply(new Fraction(100 + 5, 100))

const targetPrice = new Price(
    currentPrice.baseCurrency,
    currentPrice.quoteCurrency,
    targetFraction.denominator,
    targetFraction.numerator
)
```

请注意，`Fraction` 和 `Price` 构造函数中的 `numerator` 和 `denominator` 参数的顺序不同。

我们已经计算出了目标价格，但我们仍然需要找到创建仓位的 **最接近可用的刻度**。

:::info
由于仓位只能在池的可初始化刻度开始和结束，因此我们只能创建到正好匹配可初始化刻度的价格的范围订单。
:::

我们使用 `priceToClosestTick` 函数来找到最接近我们的 `targetPrice` 的刻度。
然后，我们使用 `nearestUsableTick` 函数来找到 `Pool` 的 `tickSpacing` 的最接近的可初始化刻度。

```typescript
import {priceToClosestTick, nearestUsableTick} from '@uniswap/v3-sdk'

let targetTick = nearestUsableTick(
    priceToClosestTick(targetPrice),
    pool.tickSpacing
)
```

这个最近的刻度很可能不会 **精确** 匹配我们的价格目标。

根据个人偏好，我们可以选择高于或低于目标，通过增加或减去 `tickSpacing`，如果可初始化刻度低于或高于理论上的最近刻度。

### 下限刻度

我们现在通过从上限刻度中减去 `tickSpacing` 来找到下限刻度：

```typescript
let lowerTick = targetTick - pool.tickSpacing
```

如果价格差异太低，下限刻度可能会在池的当前刻度左边。
在这种情况下，我们无法提供单边流动性。
我们可以抛出一个错误或者将我们的仓位增加一个刻度。

```typescript
if (tickLower <= pool.tickCurrent) {
    tickLower += pool.tickSpacing
    targetTick += pool.tickSpacing
}
```

现在我们有了仓位的下限和上限，接下来我们需要构建并铸造它。

## 创建单边流动性仓位

我们将使用 `v3-sdk` 中的 `NonfungiblePositionManager` 和 `Position` 类来构建我们的仓位。然后，我们使用 **etherJS** 钱包在链上铸造我们的仓位。

如果你对流动性仓位不熟悉，可以查看 [流动性仓位指南](../liquidity/01-position-data.md)。

### 铸造仓位

我们使用我们的刻度和我们想要存入的代币数量来创建一个 `Position` 对象：

```typescript
import { Position } from '@uniswap/v3-sdk'

const position = Position.fromAmount0({
    pool: pool,
    tickLower: tickLower,
    tickUpper: targetTick,
    amount0: amount,
    useFullPrecision: true
})
```

在我们铸造仓位之前，我们需要给 `NonfungiblePositionManager` 合约一个批准，让它可以转移我们的代币。
我们可以在官方 [Uniswap Github](https://github.com/Uniswap/v3-periphery/blob/main/deploys.md) 上找到合约地址。
对于本地开发，合约地址与我们正在分叉的网络相同。
所以如果我们像 [本地开发指南](../02-local-development.md) 中描述的那样使用主网的本地分叉，合约地址将与主网相同。

```typescript
import ethers from 'ethers'

const provider = new ethers.providers.JsonRpcProvider(rpcUrl)
const wallet = new ethers.Wallet(privateKey, provider)

const tokenContract = new ethers.Contract(
    pool.token0.address,
    ERC20_ABI,
    wallet
)

await tokenContract['approve'](
    NONFUNGIBLE_POSITION_MANAGER_CONTRACT_ADDRESS,
    ethers.BigNumber.from(amount)
    )
```

一旦我们获得了批准，我们就使用 `NonfungiblePositionManager` 来创建 **铸造** 调用的 calldata：

```typescript
import {MintOptions, NonfungiblePositionManager}
import { Percent } from '@uniswap/sdk-core'

const mintOptions: MintOptions = {
    recipient: wallet.address,
    deadline: Math.floor(Date.now() / 1000) + 60 * 20,
    slippageTolerance: new Percent(50, 10_000),
}

const { calldata, value } = NonfungiblePositionManager.addCallParameters(
    order.position,
    mintOptions
)
```

我们可以填充我们的铸造交易并用我们的钱包发送它：

```typescript
 const transaction = {
    data: calldata,
    to: NONFUNGIBLE_POSITION_MANAGER_CONTRACT_ADDRESS,
    value: ethers.BigNumber.from(value),
    from: address,
    maxFeePerGas: MAX_FEE_PER_GAS,
    maxPriorityFeePerGas: MAX_PRIORITY_FEE_PER_GAS,
  }

const txRes = await wallet.sendTransaction(transaction)
```

你可以在 [`range-order.ts`](https://github.com/uniswap/examples/blob/main/v3-sdk/range-order/src/libs/range-order.ts) 中找到这些代码片段的完整代码示例。

### 获取 tokenId

我们想读取 `Mint` 函数调用的响应，以获得 **仓位 ID**。
我们将需要 positionId 从 NFTPositionManager 合约获取仓位信息。
我们等待交易收据，并使用 `trace_transaction` 来获取结果：

```typescript
let receipt = null
let mintCallOutput

while (receipt === null) {
    try {
        receipt = await provider.getTransactionReceipt(txRes.hash)

        if (receipt === null) {
            continue
        } else {
            const callTraces = await provider.send('trace_transaction', [
                txRes.hash
            ])
            mintCallOutput = callTraces[0].result.output
        }
    } catch (e) {
        break
    }
}
```

你的节点提供商可能不支持这个调用。在这种情况下，你也可以用钱包地址调用 NonfungiblePositionManager 合约，并手动识别范围订单仓位：

```typescript
const mintCallOutput = await wallet.call(transaction)
```

我们从这个函数得到一个原始字节字符串作为返回值，我们必须自己解析它。
我们使用 **ethers AbiCoder** 解码结果。Solidity 函数有这个签名：

```solidity
function mint(
    struct INonfungiblePositionManager.MintParams params
) external returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)
```

所以我们需要第一个参数来获取 `tokenId`：

```typescript
const decodedOutput = ethers.utils.defaultAbiCoder.decode(
    ['tuple(uint256, uint128, uint256, uint256)'],
    mintCallOutput
  )[0]

const tokenId = decodedOutput.toString()
```

Ethers 处理了我们得到的字节字符串的字符串解码，并将其解析为其内部数据类型。
从 AbiCoder 得到的 decodedOutput 是一个 `ethers.Bignumber`，所以我们需要将其转换为字符串以便与 SDK 一起使用。

我们已经创建了范围订单仓位，现在我们需要监控它。

在 [代码示例](https://github.com/uniswap/examples/blob/main/v3-sdk/range-order/src/libs/range-order.ts#L180) 中，我们使用 `wallet.call` 来获取仓位 ID。
`call` 和 `trace_call` 都在连接的节点上模拟一个交易并返回预期的输出，`trace_call` 给我们更详细的输出。
根据使用情况，任选其一都可能是更好的选择。
在生产环境中，你可能更愿意像前面描述的那样等待 `transactionReceipt`，以确保交易实际上被包含在区块链中。

## 观察价格

我们需要观察池的价格，并在 `tickCurrent` 移动过我们的仓位后撤回我们的仓位。

我们使用 **ethers JS** 来监听新区块并获取最新的池数据：

```typescript

provider.on('block', refreshPool())

function refreshPool() {

    ... // 构建 Pool 合约
    
    const slot0 = await poolContract.slot0()
    const tickCurrent = slot0.tick
}
```

没有必要从我们获取的刻度计算价格，因为执行限价订单取决于我们定义的刻度范围，而不是我们从中计算出的价格。

```typescript

if (tickCurrent > targetTick) {
    // 撤回仓位
}
```

我们检查刻度是否穿过了我们的仓位，如果是，我们就撤回仓位。

## 关闭限价订单

我们调用 NonfungiblePositionManager 合约，使用 `tokenId` 来获取我们仓位的所有信息，因为我们可能已经从池中的交易中获得了费用：

```typescript
import INON_FUNGIBLE_POSITION_MANAGER from '@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json'

const positionManagerContract = new ethers.Contract(
    NONFUNGIBLE_POSITION_MANAGER_CONTRACT_ADDRESS,
    INON_FUNGIBLE_POSITION_MANAGER.abi,
    provider
)

const positionInfo = await positionManagerContract.positions(tokenId)
```

我们使用 `NonfungiblePositionManager`、`pool`、`positionInfo` 和 `tokenId` 来为 `decreaseLiquidity` 调用创建调用参数。

我们从创建 `CollectOptions` 开始：

```typescript
import { Percent, CurrencyAmount } from '@uniswap/sdk-core'
import { CollectOptions, RemoveLiquidityOptions } from '@uniswap/v3-sdk'
import JSBI from 'jsbi'

const collectOptions: Omit<CollectOptions, 'tokenId'> = {
    expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(
        pool.token0,
        JSBI.BigInt(positionInfo.tokensOwed0.toString())
    ),
    expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(
        pool.token1,
        JSBI.BigInt(positionInfo.tokensOwed1.toString())
    ),
    recipient: wallet.address,
}
```

接下来我们创建 `RemoveLiquidityOptions`。我们撤回所有流动性，所以我们将 liquidityPercentage 设置为 `1`：

```typescript
const removeLiquidityOptions: RemoveLiquidityOptions = {
      deadline: Math.floor(Date.now() / 1000) + 60 * 20,
      slippageTolerance: new Percent(50, 10_000),
      tokenId,
      // 撤回的流动性百分比
      liquidityPercentage: new Percent(1),
      collectOptions,
    }
```

我们从更新的 `positionInfo` 信息创建一个新的 `Position` 对象：

```typescript

const updatedPosition = new Position{
    pool,
    liquidity: JSBI.BigInt(currentPositionInfo.liquidity.toString()),
    tickLower: currentPositionInfo.tickLower,
    tickUpper: currentPositionInfo.tickUpper,
}
```

我们现在有了创建我们的 calldata 的一切，并准备进行合约调用：

```typescript

const { calldata, value } = NonfungiblePositionManager.removeCallParameters(
      updatedPosition,
      removeLiquidityOptions
    )
const transaction = {
    data: calldata,
    to: NONFUNGIBLE_POSITION_MANAGER_CONTRACT_ADDRESS,
    value: value,
    from: address,
    maxFeePerGas: MAX_FEE_PER_GAS,
    maxPriorityFeePerGas: MAX_PRIORITY_FEE_PER_GAS,
}

const result = await wallet.sendTransaction(transaction)
```

我们的流动性仓位被移除，我们按照我们指定的价格收到了 `token1`。
我们成功地执行了一个范围订单。

## 需要注意的问题

执行范围订单有一定的限制，这些限制可能在本指南的过程中已经变得明显。

- 如果池的价格下降到 `tickUpper` 以下，而我们已经决定撤回我们的流动性，我们的订单可能会失败，我们可能收到 `token0`、`token0` 和 `token1` 或者我们的交易失败，具体取决于我们的确切实现。
- 范围订单只能在可初始化的刻度之间创建，可能不能完全代表我们的限价订单价格目标。
- 根据池中代币的价格比率，最低价格差异可能与当前价格显著不同。
- 收到的代币是范围订单的 `tickUpper` 和 `tickLower` 价格之间的平均值。这对于刻度当前远离 0 的池来说可能是一个显著的差异，例如具有不同小数位数的代币（WETH/ USDT，WETH/USDC）。默认配置下的示例很好地展示了这种行为。

## 下一步

本指南展示了你需要的所有内容，以便自己实现范围订单，但仅演示了在 `token0` 到 `token1` 方向创建获利了结订单。
考虑实现如 [范围订单概念页面](../../../../concepts/protocol/range-orders.md#buy-limit-orders) 中所述的买入限价订单。

这目前是 `v3-sdk` 系列的最后一个指南。考虑加入 [Uniswap Discord](https://discord.com/invite/uniswap) 或者查看官方 [Github](https://github.com/Uniswap) 以了解更多关于 Uniswap 协议的信息。