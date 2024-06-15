---
id: flash-callback
title: 闪电回调
sidebar_position: 3
---

## 设置回调

在这里，我们将用自定义逻辑覆盖闪电回调，以执行所需的交易并把利润支付给原始的 `msg.sender`。

声明 `uniswapV3FlashCallback` 函数并覆盖它。

```solidity
    function uniswapV3FlashCallback(
        uint256 fee0,
        uint256 fee1,
        bytes calldata data
    ) external override {
```

在内存中声明一个变量 `decoded` 并将其赋值为之前编码到 calldata 中的【**解码数据**】(https://docs.soliditylang.org/en/v0.7.6/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions)。

```solidity
        FlashCallbackData memory decoded = abi.decode(data, (FlashCallbackData));
```

每个回调都必须进行验证，以确认调用确实源自真实的 V3 池。否则，池合约将容易受到攻击，即外部拥有账户（EOA）操纵回调函数。

```solidity
        CallbackValidation.verifyCallback(factory, decoded.poolKey);
```

声明类型为 `address` 的本地变量 `token0` 和 `token1`，以批准路由器与从闪电借入的代币进行交互。

```solidity
        address token0 = decoded.poolKey.token0;
        address token1 = decoded.poolKey.token1;

        TransferHelper.safeApprove(token0, address(swapRouter), decoded.amount0);
        TransferHelper.safeApprove(token1, address(swapRouter), decoded.amount1);
```

为接下来的两次交易设定最小输出量，这样如果无法获得盈利交易，以下的交易将回退。

```solidity
        uint256 amount1Min = LowGasSafeMath.add(decoded.amount1, fee1);
        uint256 amount0Min = LowGasSafeMath.add(decoded.amount0, fee0);
```

## 开始交易

调用两个交易中的第一个，在【**路由器接口**】(../../reference/periphery/interfaces/ISwapRouter.md)合约上调用 `exactInputSingle`。在此调用中，我们使用先前声明的 `amount0In` 作为最小输出量，并将交易的返回余额赋值给 `amountOut0`。

这些函数参数的大多数已经在前面讨论过，除了两个新引入的概念：

`sqrtPriceLimitX96`：这个值限制了交易可以改变池子的价格。记住价格总是在池合约中以 `token1` 相对于 `token0` 的形式表达。这对于用户想要交换直到特定价格的情况非常有用。在这个例子中，我们将把它设置为 0，使该参数无效。

`deadline`：这是交易将在其后回退的时间戳，以保护交易免受因交易长时间挂起可能导致的价格环境剧烈变化的影响。为了简单起见，这个例子中我们将它设置在未来很远的时间。

第一次交易采用我们从原始池中提取的 `amount1`，并将这个数量作为单次交易的输入金额，该交易以固定输入换取尽可能多的输出。它在由我们先前的代币对确定的池上调用此函数，但使用我们三个费用层级列表中的下一个费用。

```solidity
uint256 amountOut0 =
            swapRouter.exactInputSingle(
                ISwapRouter.ExactInputSingleParams({
                    tokenIn: token1,
                    tokenOut: token0,
                    fee: decoded.poolFee2,
                    recipient: address(this),
                    deadline: block.timestamp + 200,
                    amountIn: decoded.amount1,
                    amountOutMinimum: amount0Min,
                    sqrtPriceLimitX96: 0
                })
            );
```

填充第二次交易，这次使用最后一个费用层级和我们从原始池中提取的 `amount0`。

```solidity
uint256 amountOut1 =
            swapRouter.exactInputSingle(
                ISwapRouter.ExactInputSingleParams({
                    tokenIn: token0,
                    tokenOut: token1,
                    fee: decoded.poolFee3,
                    recipient: address(this),
                    deadline: block.timestamp + 200,
                    amountIn: decoded.amount0,
                    amountOutMinimum: amount1Min,
                    sqrtPriceLimitX96: 0
                })
            );
```

## 向池子还款

要向原始池偿还闪电交易，首先计算应归还给它的余额并批准路由器将我们合约中的代币转移回池子。

```solidity
uint256 amount0Owed = LowGasSafeMath.add(decoded.amount0, fee0);
uint256 amount1Owed = LowGasSafeMath.add(decoded.amount1, fee1);

TransferHelper.safeApprove(token0, address(this), amount0Owed);
TransferHelper.safeApprove(token1, address(this), amount1Owed);
```

如果有任何余额需要支付给代币，使用简单的逻辑调用【支付】(../../reference/periphery/base/PeripheryPayments.md#pay)。记住回调函数是由池本身调用的，这就是为什么尽管该函数被标记为 `internal`，我们仍然可以调用 `pay`。

```solidity
if (amount0Owed > 0) pay(token0, address(this), msg.sender, amount0Owed);
if (amount1Owed > 0) pay(token1, address(this), msg.sender, amount1Owed);
```

将利润发送给 `payer`：即 `initFlash` 函数的原始 `msg.sender`，执行了闪电交易并触发了回调。

```solidity
    if (amountOut0 > amount0Owed) {
            uint256 profit0 = LowGasSafeMath.sub(amountOut0, amount0Owed);

            TransferHelper.safeApprove(token0, address(this), profit0);
            pay(token0, address(this), decoded.payer, profit0);
        }

    if (amountOut1 > amount1Owed) {
            uint256 profit1 = LowGasSafeMath.sub(amountOut1, amount1Owed);
            TransferHelper.safeApprove(token0, address(this), profit1);
            pay(token1, address(this), decoded.payer, profit1);
        }
```

# 完整函数

```solidity
    function uniswapV3FlashCallback(
        uint256 fee0,
        uint256 fee1,
        bytes calldata data
    ) external override {
        FlashCallbackData memory decoded = abi.decode(data, (FlashCallbackData));
        CallbackValidation.verifyCallback(factory, decoded.poolKey);

        address token0 = decoded.poolKey.token0;
        address token1 = decoded.poolKey.token1;

        TransferHelper.safeApprove(token0, address(swapRouter), decoded.amount0);
        TransferHelper.safeApprove(token1, address(swapRouter), decoded.amount1);

        // 盈利检查
        // 如果不满足这个数量，exactInputSingle 将失败
        uint256 amount1Min = LowGasSafeMath.add(decoded.amount1, fee1);
        uint256 amount0Min = LowGasSafeMath.add(decoded.amount0, fee0);

        // 调用 exactInputSingle 在具有 fee2 的池中将 token1 交换为 token0
        uint256 amountOut0 =
            swapRouter.exactInputSingle(
                ISwapRouter.ExactInputSingleParams({
                    tokenIn: token1,
                    tokenOut: token0,
                    fee: decoded.poolFee2,
                    recipient: address(this),
                    deadline: block.timestamp + 200,
                    amountIn: decoded.amount1,
                    amountOutMinimum: amount0Min,
                    sqrtPriceLimitX96: 0
                })
            );

        // 调用 exactInputSingle 在具有 fee3 的池中将 token0 交换为 token 1
        uint256 amountOut1 =
            swapRouter.exactInputSingle(
                ISwapRouter.ExactInputSingleParams({
                    tokenIn: token0,
                    tokenOut: token1,
                    fee: decoded.poolFee3,
                    recipient: address(this),
                    deadline: block.timestamp + 200,
                    amountIn: decoded.amount0,
                    amountOutMinimum: amount1Min,
                    sqrtPriceLimitX96: 0
                })
            );

        // 结果是第一次交易后得到 token0 的 amountOut0 和第二次交易后得到 token1 的 amountOut1
        uint256 amount0Owed = LowGasSafeMath.add(decoded.amount0, fee0);
        uint256 amount1Owed = LowGasSafeMath.add(decoded.amount1, fee1);

        TransferHelper.safeApprove(token0, address(this), amount0Owed);
        TransferHelper.safeApprove(token1, address(this), amount1Owed);

        if (amount0Owed > 0) pay(token0, address(this), msg.sender, amount0Owed);
        if (amount1Owed > 0) pay(token1, address(this), msg.sender, amount1Owed);

        // 如果有盈利，将利润支付给 payer
        if (amountOut0 > amount0Owed) {
            uint256 profit0 = LowGasSafeMath.sub(amountOut0, amount0Owed);

            TransferHelper.safeApprove(token0, address(this), profit0);
            pay(token0, address(this), decoded.payer, profit0);
        }
        if (amountOut1 > amount1Owed) {
            uint256 profit1 = LowGasSafeMath.sub(amountOut1, amount1Owed);
            TransferHelper.safeApprove(token0, address(this), profit1);
            pay(token1, address(this), decoded.payer, profit1);
        }
    }
```