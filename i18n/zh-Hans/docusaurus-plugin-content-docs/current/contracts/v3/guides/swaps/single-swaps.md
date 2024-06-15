---
id: single-swaps
title: 单一交换
sidebar_position: 1
---

交换是与 Uniswap 协议最普遍的交互方式。以下示例向您展示如何实现一个单一路径交换合约，该合约使用两个由您创建的函数：

- `swapExactInputSingle`
- `swapExactOutputSingle`

`swapExactInputSingle` 函数用于执行“确切输入”交换，即以固定数量的一种代币换取另一种代币的最大可能数量。此函数使用了来自 [ISwapRouter](../../reference/periphery/interfaces/ISwapRouter.md) 接口的 `ExactInputSingleParams` 结构体和 `exactInputSingle` 函数。

`swapExactOutputSingle` 函数用于执行“确切输出”交换，即以一种代币的最小可能数量换取另一种代币的固定数量。此函数使用了来自 [ISwapRouter](../../reference/periphery/interfaces/ISwapRouter.md) 接口的 `ExactOutputSingleParams` 结构体和 `exactOutputSingle` 函数。

为了简化，示例硬编码了代币合约地址，但如下面进一步解释的那样，合约可以修改为在每次交易的基础上更改池和代币。

当从智能合约进行交易时，最重要的是需要访问外部价格源。没有这个，交易可能会遭受相当大的损失被抢先执行。

**注意：** 交换示例不是生产就绪代码，并且为了学习目的以简化的形式实现。

## 设置合约

声明用于编译合约的 Solidity 版本，并使用 `abicoder v2` 来允许在 calldata 中对任意嵌套数组和结构体进行编码和解码，这是执行交换时使用的功能。

```solidity
// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;
```

从 npm 包安装中导入两个相关合约

```solidity
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
```

创建一个名为 `SwapExamples` 的合约，并声明一个类型为 `ISwapRouter` 的公共不可变变量 `swapRouter`。这使我们能够调用 `ISwapRouter` 接口中定义的函数。

```solidity
contract SwapExamples {
    // 对于这些交换示例的范围，
    // 我们将详细阐述在使用 `exactInput`、`exactInputSingle`、`exactOutput` 和 `exactOutputSingle` 时的设计考虑。
    // 应当注意的是，出于这些示例的目的，我们将交换路由器作为构造函数参数传递，而不是继承它。
    // 更高级的示例合约将详细介绍如何安全地继承交换路由器。
    // 此示例针对单一路径交换进行 DAI/WETH9 交换，对于多路径交换则进行 DAI/USDC/WETH9 交换。

    ISwapRouter public immutable swapRouter;
```

为示例硬编码代币合约地址和池费用层级。在生产环境中，你可能希望使用输入参数来代替，将输入传递给内存变量，使得合约可以在每次交易的基础上更改其交互的池和代币，但为了概念上的简单性，我们在这里将其硬编码。

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

## 确切输入交换

调用者必须“批准”合约从调用地址的账户中提取代币以执行交换。请记住，因为我们的合约本身是一个合约，而不是调用者（我们）的扩展；我们也必须批准 Uniswap 协议路由器合约使用我们的合约在从调用地址（我们）处提取后将持有的代币。

然后，将“amount”数量的 Dai 从调用地址转入我们的合约，并使用“amount”作为第二个“approve”的传递值。

```solidity
    /// @notice swapExactInputSingle 使用 DAI/WETH9 0.3% 池通过调用交换路由器中的 `exactInputSingle` 方法，以固定数量的 DAI 换取最大可能数量的 WETH9。
    /// @dev 调用地址必须批准此合约至少花费 `amountIn` 数量的 DAI 才能使此功能成功执行。
    /// @param amountIn 将用于换取 WETH9 的确切数量的 DAI。
    /// @return amountOut 收到的 WETH9 数量。
    function swapExactInputSingle(uint256 amountIn) external returns (uint256 amountOut) {
        // msg.sender 必须批准此合约

        // 将指定数量的 DAI 转移到此合约。
        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountIn);

        // 批准路由器花费 DAI。
        TransferHelper.safeApprove(DAI, address(swapRouter), amountIn);

```

### 交换输入参数

要执行交换函数，我们需要使用必要的交换数据填充 `ExactInputSingleParams`。这些参数可以在智能合约接口中找到，可以在 [这里](../../reference/periphery/interfaces/ISwapRouter.md) 浏览。

参数的简要概述：

- `tokenIn` 入站代币的合约地址
- `tokenOut` 出站代币的合约地址
- `fee` 池的费用层级，用于确定执行交换的正确池合约
- `recipient` 出站代币的目标地址
- `deadline`：在此时间戳之后交换将失败的 Unix 时间，以保护不受长时间待处理交易和价格大幅波动的影响
- `amountOutMinimum`：我们将其设置为零，但在生产中这是一个重大风险。对于实际部署，应使用我们的 SDK 或链上价格预言机计算此值 - 这有助于防止由于三明治攻击或另一种价格操纵导致的交易价格异常糟糕
- `sqrtPriceLimitX96`：我们将其设置为零 - 这使得此参数无效。在生产中，此值可用于设置交换将推动池达到的价格限制，这可以帮助防止价格影响或用于设置各种价格相关机制中的逻辑。

### 调用函数

```solidity
        // 将 amountOutMinimum 天真地设置为 0。在生产中，应使用预言机或其他数据源选择更安全的 amountOutMinimum 值。
        // 我们还将 sqrtPriceLimitx96 设置为 0，以确保我们以确切的输入金额进行交换。
        ISwapRouter.ExactInputSingleParams memory params =
            ISwapRouter.ExactInputSingleParams({
                tokenIn: DAI,
                tokenOut: WETH9,
                fee: poolFee,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: amountIn,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });

        // 调用 `exactInputSingle` 执行交换。
        amountOut = swapRouter.exactInputSingle(params);
    }
```

## 确切输出交换

确切输出交换以最小可能数量的输入代币换取固定数量的出站代币。这是较少见的交换风格 - 但在多种情况下很有用。

因为此示例在预期交换的情况下转移入站资产 - 可能会在执行交换后留下一些入站代币，这就是为什么我们在交换结束时将其退还给调用地址的原因。

### 调用函数

```solidity
/// @notice swapExactOutputSingle 以最小可能数量的 DAI 换取固定数量的 WETH。
/// @dev 调用地址必须批准此合约花费其 DAI 才能使此功能成功执行。由于 DAI 输入的数量是可变的，
/// 调用地址需要批准稍高的金额，以应对一些变化。
/// @param amountOut 从交换中收到的精确数量的 WETH9。
/// @param amountInMaximum 我们愿意花费以收到指定数量 WETH9 的 DAI 数量。
/// @return amountIn 实际在交换中花费的 DAI 数量。
function swapExactOutputSingle(uint256 amountOut, uint256 amountInMaximum) external returns (uint256 amountIn) {
        // 将指定数量的 DAI 转移到此合约。
        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountInMaximum);

        // 批准路由器花费指定的 `amountInMaximum` 的 DAI。
        // 在生产中，你应该根据预言机或其他数据源选择最大金额来花费，以实现更好的交换。
        TransferHelper.safeApprove(DAI, address(swapRouter), amountInMaximum);

        ISwapRouter.ExactOutputSingleParams memory params =
            ISwapRouter.ExactOutputSingleParams({
                tokenIn: DAI,
                tokenOut: WETH9,
                fee: poolFee,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountOut: amountOut,
                amountInMaximum: amountInMaximum,
                sqrtPriceLimitX96: 0
            });

        // 执行交换，返回需要花费的 amountIn 来获得期望的 amountOut。
        amountIn = swapRouter.exactOutputSingle(params);

        // 对于确切输出交换，amountInMaximum 可能并非全部被花费。
        // 如果实际花费的金额（amountIn）小于规定的最大金额，我们必须将差额退还给 msg.sender 并批准 swapRouter 花费 0。
        if (amountIn < amountInMaximum) {
            TransferHelper.safeApprove(DAI, address(swapRouter), 0);
            TransferHelper.safeTransfer(DAI, msg.sender, amountInMaximum - amountIn);
        }
    }

```

## 完整的单一交换合约

```solidity
// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';

contract SwapExamples {
    // 对于这些交换示例的范围，
    // 我们将详细阐述在使用
    // `exactInput`、`exactInputSingle`、`exactOutput` 和 `exactOutputSingle` 时的设计考虑。

    // 应当注意的是，出于这些示例的目的，我们故意将交换路由器作为参数传递而不是继承交换路由器以简化操作。
    // 更高级的示例合约将详细介绍如何安全地继承交换路由器。

    ISwapRouter public immutable swapRouter;

    // 此示例针对单一路径交换进行 DAI/WETH9 交换，对于多路径交换则进行 DAI/USDC/WETH9 交换。

    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant WETH9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    // 对于此示例，我们将池费用设置为 0.3%。
    uint24 public constant poolFee = 3000;

    constructor(ISwapRouter _swapRouter) {
        swapRouter = _swapRouter;
    }

    /// @notice swapExactInputSingle 使用 DAI/WETH9 0.3% 池通过调用交换路由器中的 `exactInputSingle` 方法，以固定数量的 DAI 换取最大可能数量的 WETH9。
    /// @dev 调用地址必须批准此合约至少花费 `amountIn` 数量的 DAI 才能使此功能成功执行。
    /// @param amountIn 将用于换取 WETH9 的确切数量的 DAI。
    /// @return amountOut 收到的 WETH9 数量。
    function swapExactInputSingle(uint256 amountIn) external returns (uint256 amountOut) {
        // msg.sender 必须批准此合约

        // 将指定数量的 DAI 转移到此合约。
        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountIn);

        // 批准路由器花费 DAI。
        TransferHelper.safeApprove(DAI, address(swapRouter), amountIn);

        // 将 amountOutMinimum 天真地设置为 0。在生产中，应使用预言机或其他数据源选择更安全的 amountOutMinimum 值。
        // 我们还将 sqrtPriceLimitx96 设置为 0，以确保我们以确切的输入金额进行交换。
        ISwapRouter.ExactInputSingleParams memory params =
            ISwapRouter.ExactInputSingleParams({
                tokenIn: DAI,
                tokenOut: WETH9,
                fee: poolFee,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountIn: amountIn,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });

        // 调用 `exactInputSingle` 执行交换。
        amountOut = swapRouter.exactInputSingle(params);
    }

    /// @notice swapExactOutputSingle 以最小可能数量的 DAI 换取固定数量的 WETH。
    /// @dev 调用地址必须批准此合约花费其 DAI 才能使此功能成功执行。由于 DAI 输入的数量是可变的，
    /// 调用地址需要批准稍高的金额，以应对一些变化。
    /// @param amountOut 从交换中收到的精确数量的 WETH9。
    /// @param amountInMaximum 我们愿意花费以收到指定数量 WETH9 的 DAI 数量。
    /// @return amountIn 实际在交换中花费的 DAI 数量。
    function swapExactOutputSingle(uint256 amountOut, uint256 amountInMaximum) external returns (uint256 amountIn) {
        // 将指定数量的 DAI 转移到此合约。
        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountInMaximum);

        // 批准路由器花费指定的 `amountInMaximum` 的 DAI。
        // 在生产中，你应该根据预言机或其他数据源选择最大金额来花费，以实现更好的交换。
        TransferHelper.safeApprove(DAI, address(swapRouter), amountInMaximum);

        ISwapRouter.ExactOutputSingleParams memory params =
            ISwapRouter.ExactOutputSingleParams({
                tokenIn: DAI,
                tokenOut: WETH9,
                fee: poolFee,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountOut: amountOut,
                amountInMaximum: amountInMaximum,
                sqrtPriceLimitX96: 0
            });

        // 执行交换，返回需要花费的 amountIn 来获得期望的 amountOut。
        amountIn = swapRouter.exactOutputSingle(params);

        // 对于确切输出交换，amountInMaximum 可能并非全部被花费。
        // 如果实际花费的金额（amountIn）小于规定的最大金额，我们必须将差额退还给 msg.sender 并批准 swapRouter 花费 0。
        if (amountIn < amountInMaximum) {
            TransferHelper.safeApprove(DAI, address(swapRouter), 0);
            TransferHelper.safeTransfer(DAI, msg.sender, amountInMaximum - amountIn);
        }
    }
}
```