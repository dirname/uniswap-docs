---
id: using-flash-swaps
title: 闪电兑换
---

闪电兑换是 Uniswap V2 的核心特性之一。实际上，在幕后，所有兑换本质上都是闪电兑换！这意味着对等合约会在确认收到足够的输入代币之前，先将输出代币发送给接收者。这可能有些不寻常，因为人们通常会期望对等方在交付前确保已收到付款。然而，由于以太坊交易的“原子性”，如果最终交易中合约没有收到足够的代币来确保其资产完整，我们可以回滚整个兑换。

要了解这一切是如何运作的，我们首先来看看 `swap` 函数接口：

```solidity
function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data);
```

为了举例说明，假设我们正在处理一个 DAI/WETH 对，其中 DAI 是 `token0` 而 WETH 是 `token1`。`amount0Out` 和 `amount1Out` 指定了对等方应向 `to` 地址发送的 DAI 和 WETH 数量（这两个数量中的一个可能是 0）。此时你可能会想，合约是如何“接收”代币的呢？对于典型的（非闪电）兑换，实际上是 `msg.sender` 的责任，确保在调用 `swap` 之前已经向对等方发送了足够的 WETH 或 DAI（在交易场景下，这通常由路由器合约优雅地处理）。但在执行闪电兑换时，_无需在调用 `swap` 前向合约发送代币_。相反，它们必须从对等方触发的 _回调函数_ 内部发送，该函数在 `to` 地址上运行。

# 触发闪电兑换

为了区分“典型”的交易情况和闪电兑换情况，对等方使用 `data` 参数。具体来说，如果 `data.length` 等于 0，合约假定付款已经收到，并直接将代币转移到 `to` 地址。但是，如果 `data.length` 大于 0，合约转移代币然后在 `to` 地址上调用以下函数：

```solidity
function uniswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data);
```

这种识别策略背后的逻辑很简单：绝大多数有效的闪电兑换用例都涉及与外部协议的交互。传递指导这些交互发生的信息（函数参数、安全参数、地址等）的最佳方式是通过 `data` 参数。预期 `data` 将在 `uniswapV2Call` 中被 `abi.decode`。在罕见的情况下，如果不需要数据，调用者应确保 `data.length` 等于 1（即编码一个无用字节作为 `bytes`），然后在 `uniswapV2Call` 中忽略此参数。

对等方调用 `uniswapV2Call`，并将 `sender` 参数设置为 `swap` 的 `msg.sender`。`amount0` 和 `amount1` 简单地就是 `amount0Out` 和 `amount1Out`。

# 使用 uniswapV2Call

所有 `uniswapV2Call` 函数都应该检查以下几个条件：

```solidity
function uniswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) {
  address token0 = IUniswapV2Pair(msg.sender).token0(); // 获取 token0 的地址
  address token1 = IUniswapV2Pair(msg.sender).token1(); // 获取 token1 的地址
  assert(msg.sender == IUniswapV2Factory(factoryV2).getPair(token0, token1)); // 确保 msg.sender 是一个 V2 对等方地址
  // 其余函数内容在此处！
}
```

前两行简单地从对等方获取代币地址，第三行则确保 `msg.sender` 实际上是一个 Uniswap V2 对等方地址。

# 还款

在 `uniswapV2Call` 结束时，合约必须向对等方返回足够的代币以保证其资产完整。具体而言，这意味着扣除所有通过 0.3% LP 费用后的兑换后对等方储备乘积必须大于兑换前。

## 多代币

在请求提取的代币与返还的代币 _不同_ 的情况下（例如，在闪电兑换中请求了 DAI 并返还了 WETH，或反之亦然），费用简化为简单的兑换情况。这意味着应该使用标准的 `getAmountIn` 定价函数来计算，例如，必须返还多少 WETH 来换取请求的 DAI 数量。

这种类型的费用计算给予调用者一定的优势，因为基于对应代币偿还而产生的费用总是会略低于直接代币偿还产生的费用，这是由于支付兑换所需的金额与提取并直接返还的金额之间的差异导致的。费用的大致比较约为 30 bps 的兑换费用对比 30.09 bps 的直接偿还费用。

## 单一代币

在请求提取的代币与返还的代币 _相同_ 的情况下（例如，在闪电兑换中请求了 DAI，使用后再返还，或反之亦然的 WETH），必须满足以下条件：

`DAIReservePre - DAIWithdrawn + (DAIReturned * .997) >= DAIReservePre`

可能重写这个公式以直观地表示为对 _提取_ 金额的“费用”更有助于理解（尽管 Uniswap 总是对输入金额征收费用，但在这个情况下，_返还_ 的金额，这里我们可以简化为对 _提取_ 金额的有效费用）。如果我们重新排列，公式看起来像：

`(DAIReturned * .997) - DAIWithdrawn >= 0`

`DAIReturned >= DAIWithdrawn / .997`

因此，对提取金额的有效费用是 `.003 / .997 ≈ 0.3009027%`。

# 资源

若要进一步探索闪电兑换，请参阅 [白皮书](/whitepaper.pdf)。

# 示例

一个完全功能性的闪电兑换示例可在这里找到：[`ExampleFlashSwap.sol`](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/examples/ExampleFlashSwap.sol)。

# 接口

```solidity
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Callee.sol';
```

```solidity
pragma solidity >=0.5.0;

interface IUniswapV2Callee {
  function uniswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
```