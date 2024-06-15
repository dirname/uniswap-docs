---
id: mint-a-position
title: 铸造新头寸
sidebar_position: 2
---

## 输入参数

为了铸造一个新的头寸，我们使用 `nonFungiblePositionManager` 并调用 `mint`。

出于本示例的目的，我们将要铸造的代币数量硬编码。在生产环境中，这将是一个用户可配置的函数参数。

```solidity
    /// @notice 调用外围定义的 mint 函数，以相同数量铸造每种代币。在这个例子中，我们提供 1000 DAI 和 1000 USDC 的流动性
    /// @return tokenId 新铸造的 ERC721 的 ID
    /// @return liquidity 头寸的流动性数量
    /// @return amount0 代币0的数量
    /// @return amount1 代币1的数量
    function mintNewPosition()
        external
        returns (
            uint256 tokenId,
            uint128 liquidity,
            uint256 amount0,
            uint256 amount1
        )
    {
        // 对于这个例子，我们将在两种资产中提供相等的流动性。
        // 在两种资产中提供流动性意味着流动性将赚取费用，并被认为是范围内的。
        uint256 amount0ToMint = 1000;
        uint256 amount1ToMint = 1000;
```

## 调用 Mint

在这里，我们批准 `nonfungiblePositionManager` 使用合约的代币，然后填充 `MintParams` 结构体并将其赋值给一个局部变量 `params`，该变量将在我们调用 `mint` 时传递给 `nonfungiblePositionManager`。

- 通过使用 `TickMath.MIN_TICK` 和 `TickMath.MAX_TICK`，我们在整个池子范围内提供流动性。在生产中，您可能希望指定一个更集中的位置。

- 我们为示例将 `amount0Min` 和 `amount1Min` 设置为零 - 但在生产中，这将是一个漏洞。一个没有滑点保护的调用 `mint` 的函数将容易受到设计用于在不准确价格执行 `mint` 调用的抢先交易攻击。
- 为了更安全的做法，开发人员需要实现一个滑点估计过程。

- 注意，此功能不会初始化一个尚未存在的池子。

```solidity
        // 批准位置管理器
        TransferHelper.safeApprove(DAI, address(nonfungiblePositionManager), amount0ToMint);
        TransferHelper.safeApprove(USDC, address(nonfungiblePositionManager), amount1ToMint);

        INonfungiblePositionManager.MintParams memory params =
            INonfungiblePositionManager.MintParams({
                token0: DAI,
                token1: USDC,
                fee: poolFee,
                tickLower: TickMath.MIN_TICK,
                tickUpper: TickMath.MAX_TICK,
                amount0Desired: amount0ToMint,
                amount1Desired: amount1ToMint,
                amount0Min: 0,
                amount1Min: 0,
                recipient: address(this),
                deadline: block.timestamp
            });

        // 注意由 DAI/USDC 和 0.3% 费率层级定义的池必须已经创建和初始化才能铸造
        (tokenId, liquidity, amount0, amount1) = nonfungiblePositionManager.mint(params);

```

## 更新存款映射并退还调用地址

现在我们可以调用之前在 [设置您的合约](./setting-up-your-contract.md) 中编写的内部函数。之后，我们可以将铸造后剩余的任何流动性退还给 `msg.sender`。

```solidity
        // 创建一个存款
        _createDeposit(msg.sender, tokenId);

        // 取消许可并在两种资产中退款。
        if (amount0 < amount0ToMint) {
            TransferHelper.safeApprove(DAI, address(nonfungiblePositionManager), 0);
            uint256 refund0 = amount0ToMint - amount0;
            TransferHelper.safeTransfer(DAI, msg.sender, refund0);
        }

        if (amount1 < amount1ToMint) {
            TransferHelper.safeApprove(USDC, address(nonfungiblePositionManager), 0);
            uint256 refund1 = amount1ToMint - amount1;
            TransferHelper.safeTransfer(USDC, msg.sender, refund1);
        }
    }
```

## 完整示例

```solidity
    /// @notice 调用外围定义的 mint 函数，以相同数量铸造每种代币。在这个例子中，我们提供 1000 DAI 和 1000 USDC 的流动性
    /// @return tokenId 新铸造的 ERC721 的 ID
    /// @return liquidity 头寸的流动性数量
    /// @return amount0 代币0的数量
    /// @return amount1 代币1的数量
    function mintNewPosition()
        external
        returns (
            uint256 tokenId,
            uint128 liquidity,
            uint256 amount0,
            uint256 amount1
        )
    {
        // 对于这个例子，我们将在两种资产中提供相等的流动性。
        // 在两种资产中提供流动性意味着流动性将赚取费用，并被认为是范围内的。
        uint256 amount0ToMint = 1000;
        uint256 amount1ToMint = 1000;

        // 批准位置管理器
        TransferHelper.safeApprove(DAI, address(nonfungiblePositionManager), amount0ToMint);
        TransferHelper.safeApprove(USDC, address(nonfungiblePositionManager), amount1ToMint);

        INonfungiblePositionManager.MintParams memory params =
            INonfungiblePositionManager.MintParams({
                token0: DAI,
                token1: USDC,
                fee: poolFee,
                tickLower: TickMath.MIN_TICK,
                tickUpper: TickMath.MAX_TICK,
                amount0Desired: amount0ToMint,
                amount1Desired: amount1ToMint,
                amount0Min: 0,
                amount1Min: 0,
                recipient: address(this),
                deadline: block.timestamp
            });

        // 注意由 DAI/USDC 和 0.3% 费率层级定义的池必须已经创建和初始化才能铸造
        (tokenId, liquidity, amount0, amount1) = nonfungiblePositionManager.mint(params);

        // 创建一个存款
        _createDeposit(msg.sender, tokenId);

        // 取消许可并在两种资产中退款。
        if (amount0 < amount0ToMint) {
            TransferHelper.safeApprove(DAI, address(nonfungiblePositionManager), 0);
            uint256 refund0 = amount0ToMint - amount0;
            TransferHelper.safeTransfer(DAI, msg.sender, refund0);
        }

        if (amount1 < amount1ToMint) {
            TransferHelper.safeApprove(USDC, address(nonfungiblePositionManager), 0);
            uint256 refund1 = amount1ToMint - amount1;
            TransferHelper.safeTransfer(USDC, msg.sender, refund1);
        }
    }
```