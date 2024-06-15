---
id: inheritance-constructors
title: 入门指南
sidebar_position: 1
---

在本指南中，我们将编写一个智能合约，该合约调用 V3 池上的 `flash` 函数，并在具有相同代币对但不同费用层级的相应池中交换全部提取的 `token0` 和 `token1`。交换后，合约将向第一个池支付款项，并将利润转移至原始调用地址。

## Flash 交易概述

Flash 交易是一种在以太坊上转移代币的方法，它在满足代币余额转移的必要条件之前就先转移了代币余额。在交换的上下文中，这意味着输出在接收输入之前就从交换发送出去。

Uniswap V3 在 Pool 合约中引入了一个新函数 `flash`。`Flash` 将指定数量的 `token0` 和 `token1` 提取到 `recipient` 地址。提取的金额加上交换费用，在交易结束时将归还给池。`flash` 包括第四个参数 `data`，允许调用者使用 abi.encode 编码任何必要的数据通过此函数并稍后解码。

```solidity
    function flash(
        address recipient,
        uint256 amount0,
        uint256 amount1,
        bytes calldata data
    ) external override lock noDelegateCall {
```

## Flash 回调

`flash` 会提取代币，但是它们如何被偿还呢？要理解这一点，我们必须查看 flash 函数代码的内部。在 [**flash**](https://github.com/Uniswap/uniswap-v3-core/blob/main/contracts/UniswapV3Pool.sol#L791) 函数中间部分，我们看到：

```solidity
IUniswapV3FlashCallback(msg.sender).uniswapV3FlashCallback(fee0, fee1, data);
```

这一步调用了 `msg.sender` 上的 `FlashCallback` 函数 - 它传递了计算池应得余额所需的费用数据，以及任何编码到 `data` 参数中的数据。

在 V3 中，有三个独立的回调函数，`uniswapV3SwapCallback`、`uniswapV3MintCallback` 和 `uniswapV3FlashCallback`，每个都可以覆盖自定义逻辑。为了编写我们的套利合约，我们将调用 `flash` 并覆盖 `uniswapV3FlashCallback`，其中包含完成执行我们交易所需步骤。

## 继承 V3 合约

继承 `IUniswapV3FlashCallback` 和 `PeripheryPayments`，因为我们将在这两个合约中使用。请注意，这两个继承的合约已经扩展了我们将使用的许多其他合约，例如 [LowGasSafeMath](../../reference/core/libraries/LowGasSafeMath.md)，我们使用 [attach](https://docs.soliditylang.org/en/v0.7.6/contracts.html?highlight=using#using-for) 连接到类型 `uint256` 和 `int256`。

```solidity
contract PairFlash is IUniswapV3FlashCallback, PeripheryPayments {
    using LowGasSafeMath for uint256;
    using LowGasSafeMath for int256;
```

声明一个不可变的公共变量 `swapRouter` 类型为 `ISwapRouter`：

```solidity
    ISwapRouter public immutable swapRouter;
```

在这里声明构造函数，当合约部署时只执行一次。我们的构造函数硬编码了 V3 路由器、工厂和 weth9 地址，即以太币的 [ERC-20 包装器](https://weth.io/)。

```solidity
    constructor(
        ISwapRouter _swapRouter,
        address _factory,
        address _WETH9
    ) PeripheryImmutableState(_factory, _WETH9) {
        swapRouter = _swapRouter;
    }
```

完整的导入部分和合约声明：

```solidity
pragma solidity =0.7.6;
pragma abicoder v2;

import '@uniswap/v3-core/contracts/interfaces/callback/IUniswapV3FlashCallback.sol';
import '@uniswap/v3-core/contracts/libraries/LowGasSafeMath.sol';

import '@uniswap/v3-periphery/contracts/base/PeripheryPayments.sol';
import '@uniswap/v3-periphery/contracts/base/PeripheryImmutableState.sol';
import '@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol';
import '@uniswap/v3-periphery/contracts/libraries/CallbackValidation.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';

contract PairFlash is IUniswapV3FlashCallback, PeripheryPayments {
    using LowGasSafeMath for uint256;
    using LowGasSafeMath for int256;

    ISwapRouter public immutable swapRouter;

    constructor(
        ISwapRouter _swapRouter,
        address _factory,
        address _WETH9
    ) PeripheryImmutableState(_factory, _WETH9) {
        swapRouter = _swapRouter;
    }
```