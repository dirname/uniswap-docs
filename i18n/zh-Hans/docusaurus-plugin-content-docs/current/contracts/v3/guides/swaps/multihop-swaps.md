---
id: multihop-swaps
title: 多跳交换
sidebar_position: 2
---

## 引言

下面的示例是 V3 上可用的两种多跳交换风格的实现。下面的示例代码并不适合生产环境使用，而是以简化的方式实现，便于学习。

## 设置合约

声明将用于编译合约的 Solidity 版本以及 `abicoder v2`，允许在 calldata 中对任意嵌套数组和结构进行编码和解码，这是我们在执行交换时使用的一个特性。

```solidity
// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;
```

从 npm 包安装中导入所需的两个合约。

```solidity
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
```

创建一个名为 `SwapExamples` 的合约，并声明一个不可变的公共变量 `swapRouter`，类型为 `ISwapRouter`。这使我们能够调用 `ISwapRouter` 接口中的函数。

```solidity
contract SwapExamples {
    // 在这些交换示例的范围内，
    // 我们将详细介绍在使用 `exactInput`、`exactInputSingle`、`exactOutput` 和 `exactOutputSingle` 时的设计考虑。
    // 需要注意的是，为了这些示例的目的，我们将交换路由器作为构造函数参数传递，而不是继承它。
    // 更高级的示例合约将详细说明如何安全地继承交换路由器。
    // 此示例为单路径交换交换 DAI/WETH9，为多路径交换交换 DAI/USDC/WETH9。

    ISwapRouter public immutable swapRouter;
```

为示例硬编码代币合约地址和池费用层级。在生产环境中，您可能会使用输入参数为此目的，并将输入传入内存变量，允许合约根据每笔交易更改其交互的池和代币，但为了概念上的简单性，我们在这里硬编码它们。

```solidity
    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant WETH9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    // 对于此示例，我们将池费用设置为 0.3%。
    uint24 public constant poolFee = 3000;

    constructor(ISwapRouter _swapRouter) {
        swapRouter = _swapRouter;
    }
```

## 确定输入的多跳交换

确定输入的多跳交换将以给定输入代币的固定金额交换尽可能多的给定输出，并可以包含任意数量的中间交换。

### 输入参数

- `path`：路径是一个序列（`tokenAddress` - `fee` - `tokenAddress`），这是我们交换序列中计算每个池合约地址所需变量。多跳交换路由器代码将自动使用这些变量找到正确的池，并执行我们序列中每个池所需的交换。
- `recipient`：出站资产的目标地址。
- `deadline`：在此之后交易将被撤销的 Unix 时间，以防止长时间延迟和随之而来的大幅价格波动增加的可能性。
- `amountIn`：入站资产的金额
- `amountOutMin`：出站资产的最小金额，低于此金额将导致交易回退。为了这个示例的简洁性，我们将其设置为 `0`；在生产环境中，需要使用 SDK 来报价预期价格，或者使用链上价格预言机进行更高级的防操纵系统。

### 调用函数

```solidity
    /// @notice swapExactInputMultihop 通过中介池以固定的 DAI 数量交换最大可能的 WETH9 数量。
    /// 对于此示例，我们将在 DAI 和 USDC 之间交换，然后在 USDC 和 WETH9 之间交换以达到我们期望的输出。
    /// @dev 调用地址必须批准本合约花费至少 `amountIn` 的 DAI 才能使此功能成功。
    /// @param amountIn 要交换的 DAI 数量。
    /// @return amountOut 交换后收到的 WETH9 数量。
    function swapExactInputMultihop(uint256 amountIn) external returns (uint256 amountOut) {
        // 将 `amountIn` 的 DAI 转移到此合约。
        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountIn);

        // 批准路由器花费 DAI。
        TransferHelper.safeApprove(DAI, address(swapRouter), amountIn);

        // 多个池交换通过称为 `path` 的字节编码。路径是一系列代币地址和 poolFees，定义了用于交换的池。
        // 池编码的格式为 (tokenIn, fee, tokenOut/tokenIn, fee, tokenOut)，其中 tokenIn/tokenOut 参数是在池间共享的代币。
        // 由于我们正在从 DAI 到 USDC，然后再从 USDC 到 WETH9 进行交换，因此路径编码为 (DAI, 0.3%, USDC, 0.3%, WETH9)。
        ISwapRouter.ExactInputParams memory params =
            ISwapRouter.ExactInputParams({
                path: abi.encodePacked(DAI, poolFee, USDC, poolFee, WETH9),
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: amountIn,
                amountOutMinimum: 0
            });

        // 执行交换。
        amountOut = swapRouter.exactInput(params);
    }
```

## 确定输出的多跳交换

确定输出交换将以输入代币的可变金额交换固定数量的出站代币。这是多跳交换较少使用的技巧。交换代码在很大程度上是相同的，只有一个值得注意的区别，即 `Path` 是反向编码的，因为确定输出交换是以相反的顺序执行的，以便向下传递交易链中必要的变量。

### 输入参数

- `path`：路径是一个序列 `tokenAddress` `Fee` `tokenAddress`，_反向编码_，是我们交换序列中计算每个池合约地址所需变量。多跳交换路由器代码将自动使用这些变量找到正确的池，并执行我们序列中每个池所需的交换。
- `recipient`：出站资产的目标地址。
- `deadline`：在此之后交易将被撤销的 Unix 时间，以防止长时间延迟和随之而来的大幅价格波动增加的可能性。
- `amountOut`：所需的 WETH9 数量。
- `amountInMaximum`：愿意为指定数量的 WETH9 输出交换的最大 DAI 数量。

### 调用函数

```solidity
    /// @notice swapExactOutputMultihop 通过中介池以最小可能的 DAI 数量交换固定数量的 WETH9。
    /// 对于此示例，我们想通过 USDC 池将 DAI 交换为 WETH9，但我们指定了所需的 WETH9 数量。注意，对于确定输出交换，路径编码略有不同。
    /// @dev 调用地址必须批准本合约花费其 DAI 才能使此功能成功。由于 DAI 的输入数量是可变的，
    /// 调用地址将需要批准稍高的金额，以应对一些变动。
    /// @param amountOut 所需的 WETH9 数量。
    /// @param amountInMaximum 愿意为指定数量的 WETH9 输出交换的最大 DAI 数量。
    /// @return amountIn 实际花费以获得所需数量的 DAI 数量。
    function swapExactOutputMultihop(uint256 amountOut, uint256 amountInMaximum) external returns (uint256 amountIn) {
        // 将指定的 `amountInMaximum` 转移至本合约。
        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountInMaximum);
        // 批准路由器花费 `amountInMaximum`。
        TransferHelper.safeApprove(DAI, address(swapRouter), amountInMaximum);

        // 参数路径编码为 (tokenOut, fee, tokenIn/tokenOut, fee, tokenIn)
        // tokenIn/tokenOut 字段是用于多个池交换的两个池之间的共享代币。在这种情况下，USDC 是“共享”代币。
        // 对于确定输出交换，首先发生的交换是返回最终所需代币的交换。
        // 在这种情况下，我们期望的输出代币是 WETH9，所以首先发生这个交换，并相应地在路径中编码。
        ISwapRouter.ExactOutputParams memory params =
            ISwapRouter.ExactOutputParams({
                path: abi.encodePacked(WETH9, poolFee, USDC, poolFee, DAI),
                recipient: msg.sender,
                deadline: block.timestamp,
                amountOut: amountOut,
                amountInMaximum: amountInMaximum
            });

        // 执行交换，返回实际花费的 amountIn。
        amountIn = swapRouter.exactOutput(params);

        // 如果交换不需要全部 amountInMaximum 来实现确切的 amountOut，那么我们将退款给 msg.sender 并批准路由器花费 0。
        if (amountIn < amountInMaximum) {
            TransferHelper.safeApprove(DAI, address(swapRouter), 0);
            TransferHelper.safeTransferFrom(DAI, address(this), msg.sender, amountInMaximum - amountIn);
        }
    }
```

## 完整合约

```solidity
// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';

contract SwapExamples {
    // 在这些交换示例的范围内，
    // 我们将详细介绍在使用
    // `exactInput`、`exactInputSingle`、`exactOutput` 和 `exactOutputSingle` 时的设计考虑。

    // 需要注意的是，出于这些示例的目的，我们故意传递交换路由器而不是继承交换路由器以简化处理。
    // 更高级的示例合约将详细说明如何安全地继承交换路由器。

    ISwapRouter public immutable swapRouter;

    // 此示例为单路径交换交换 DAI/WETH9，为多路径交换交换 DAI/USDC/WETH9。

    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant WETH9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    // 对于此示例，我们将池费用设置为 0.3%。
    uint24 public constant poolFee = 3000;

    constructor(ISwapRouter _swapRouter) {
        swapRouter = _swapRouter;
    }

    /// @notice swapInputMultiplePools 通过中介池以固定的 DAI 数量交换最大可能的 WETH9 数量。
    /// 对于此示例，我们将在 DAI 和 USDC 之间交换，然后在 USDC 和 WETH9 之间交换以达到我们期望的输出。
    /// @dev 调用地址必须批准本合约花费至少 `amountIn` 的 DAI 才能使此功能成功。
    /// @param amountIn 要交换的 DAI 数量。
    /// @return amountOut 交换后收到的 WETH9 数量。
    function swapExactInputMultihop(uint256 amountIn) external returns (uint256 amountOut) {
        // 将 `amountIn` 的 DAI 转移到此合约。
        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountIn);

        // 批准路由器花费 DAI。
        TransferHelper.safeApprove(DAI, address(swapRouter), amountIn);

        // 多个池交换通过称为 `path` 的字节编码。路径是一系列代币地址和 poolFees，定义了用于交换的池。
        // 池编码的格式为 (tokenIn, fee, tokenOut/tokenIn, fee, tokenOut)，其中 tokenIn/tokenOut 参数是在池间共享的代币。
        // 由于我们正在从 DAI 到 USDC，然后再从 USDC 到 WETH9 进行交换，因此路径编码为 (DAI, 0.3%, USDC, 0.3%, WETH9)。
        ISwapRouter.ExactInputParams memory params =
            ISwapRouter.ExactInputParams({
                path: abi.encodePacked(DAI, poolFee, USDC, poolFee, WETH9),
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: amountIn,
                amountOutMinimum: 0
            });

        // 执行交换。
        amountOut = swapRouter.exactInput(params);
    }

    /// @notice swapExactOutputMultihop 通过中介池以最小可能的 DAI 数量交换固定数量的 WETH9。
    /// 对于此示例，我们想通过 USDC 池将 DAI 交换为 WETH9，但我们指定了所需的 WETH9 数量。注意，对于确定输出交换，路径编码略有不同。
    /// @dev 调用地址必须批准本合约花费其 DAI 才能使此功能成功。由于 DAI 的输入数量是可变的，
    /// 调用地址将需要批准稍高的金额，以应对一些变动。
    /// @param amountOut 所需的 WETH9 数量。
    /// @param amountInMaximum 愿意为指定数量的 WETH9 输出交换的最大 DAI 数量。
    /// @return amountIn 实际花费以获得所需数量的 DAI 数量。
    function swapExactOutputMultihop(uint256 amountOut, uint256 amountInMaximum) external returns (uint256 amountIn) {
        // 将指定的 `amountInMaximum` 转移至本合约。
        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountInMaximum);
        // 批准路由器花费 `amountInMaximum`。
        TransferHelper.safeApprove(DAI, address(swapRouter), amountInMaximum);

        // 参数路径编码为 (tokenOut, fee, tokenIn/tokenOut, fee, tokenIn)
        // tokenIn/tokenOut 字段是用于多个池交换的两个池之间的共享代币。在这种情况下，USDC 是“共享”代币。
        // 对于确定输出交换，首先发生的交换是返回最终所需代币的交换。
        // 在这种情况下，我们期望的输出代币是 WETH9，所以首先发生这个交换，并相应地在路径中编码。
        ISwapRouter.ExactOutputParams memory params =
            ISwapRouter.ExactOutputParams({
                path: abi.encodePacked(WETH9, poolFee, USDC, poolFee, DAI),
                recipient: msg.sender,
                deadline: block.timestamp,
                amountOut: amountOut,
                amountInMaximum: amountInMaximum
            });

        // 执行交换，返回实际花费的 amountIn。
        amountIn = swapRouter.exactOutput(params);

        // 如果交换不需要全部 amountInMaximum 来实现确切的 amountOut，那么我们将退款给 msg.sender 并批准路由器花费 0。
        if (amountIn < amountInMaximum) {
            TransferHelper.safeApprove(DAI, address(swapRouter), 0);
            TransferHelper.safeTransferFrom(DAI, address(this), msg.sender, amountInMaximum - amountIn);
        }
    }
}
```