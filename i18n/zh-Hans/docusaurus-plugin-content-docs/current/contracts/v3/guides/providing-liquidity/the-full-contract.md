---
id: the-full-contract
title: 完整的合约
sidebar_position: 6
---

以下是完整功能代码示例：一个能够托管 Uniswap V3 仓位 NFT 并通过收取费用、增加或减少流动性以及铸造新仓位来操作其中的仓位和流动性的合约。在 Github 上查看 [这里](https://github.com/Uniswap/uniswap-docs/blob/main/examples/smart-contracts/LiquidityExamples.sol)。

```solidity
// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import '@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol';
import '@uniswap/v3-core/contracts/libraries/TickMath.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol';
import '../libraries/TransferHelper.sol';
import '../interfaces/INonfungiblePositionManager.sol';
import '../base/LiquidityManagement.sol';

contract LiquidityExamples is IERC721Receiver {
    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    uint24 public constant poolFee = 3000;

    INonfungiblePositionManager public immutable nonfungiblePositionManager;

    /// @notice 代表 NFT 的存款
    struct Deposit {
        address owner;
        uint128 liquidity;
        address token0;
        address token1;
    }

    /// @dev deposits[tokenId] => Deposit
    mapping(uint256 => Deposit) public deposits;

    constructor(
        INonfungiblePositionManager _nonfungiblePositionManager
    ) {
        nonfungiblePositionManager = _nonfungiblePositionManager;
    }

    // 实现 `onERC721Received`，以便此合约可以接收 erc721 代币的托管
    function onERC721Received(
        address operator,
        address,
        uint256 tokenId,
        bytes calldata
    ) external override returns (bytes4) {
        // 获取仓位信息

        _createDeposit(operator, tokenId);

        return this.onERC721Received.selector;
    }

    function _createDeposit(address owner, uint256 tokenId) internal {
        (, , address token0, address token1, , , , uint128 liquidity, , , , ) =
            nonfungiblePositionManager.positions(tokenId);

        // 设置仓位的所有者和数据
        // operator 是 msg.sender
        deposits[tokenId] = Deposit({owner: owner, liquidity: liquidity, token0: token0, token1: token1});
    }

    /// @notice 调用外围定义的 mint 函数，以相同数量的每个代币进行铸造。
    /// 在这个例子中，我们为 DAI 和 USDC 提供了 1000 的流动性
    /// @return tokenId 新铸 ERC721 的 ID
    /// @return liquidity 仓位的流动性量
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
        // 对于这个例子，我们将为两种资产提供相等的流动性量。
        // 向两种资产提供流动性意味着流动性将赚取费用，并被认为在范围内。
        uint256 amount0ToMint = 1000;
        uint256 amount1ToMint = 1000;

        // 将代币转移到合约
        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amount0ToMint);
        TransferHelper.safeTransferFrom(USDC, msg.sender, address(this), amount1ToMint);

        // 批准仓位管理器
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

        // 注意，由 DAI/USDC 和 0.3% 费率层级定义的池必须已经创建并初始化才能进行铸造
        (tokenId, liquidity, amount0, amount1) = nonfungiblePositionManager.mint(params);

        // 创建一个存款
        _createDeposit(msg.sender, tokenId);

        // 取消批准并退还两种资产。
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

    /// @notice 收集与提供的流动性相关的费用
    /// @dev 合约必须持有 erc721 代币才能收集费用
    /// @param tokenId erc721 代币的 ID
    /// @return amount0 代币0收集到的费用金额
    /// @return amount1 代币1收集到的费用金额
    function collectAllFees(uint256 tokenId) external returns (uint256 amount0, uint256 amount1) {
        // 调用者必须拥有 ERC721 仓位，这意味着它必须是一个存款

        // 将 amount0Max 和 amount1Max 设置为 uint256.max 来收集所有费用
        // 或者可以将 recipient 设置为 msg.sender 以避免在 `sendToOwner` 中的另一笔交易
        INonfungiblePositionManager.CollectParams memory params =
            INonfungiblePositionManager.CollectParams({
                tokenId: tokenId,
                recipient: address(this),
                amount0Max: type(uint128).max,
                amount1Max: type(uint128).max
            });

        (amount0, amount1) = nonfungiblePositionManager.collect(params);

        // 将收集到的费用送回给所有者
        _sendToOwner(tokenId, amount0, amount1);
    }

    /// @notice 一个将当前流动性减半的功能。一个示例，展示如何调用外围定义的 `decreaseLiquidity` 函数。
    /// @param tokenId erc721 代币的 ID
    /// @return amount0 返回的代币0金额
    /// @return amount1 返回的代币1金额
    function decreaseLiquidityInHalf(uint256 tokenId) external returns (uint256 amount0, uint256 amount1) {
        // 调用者必须是 NFT 的所有者
        require(msg.sender == deposits[tokenId].owner, 'Not the owner');
        // 获取 tokenId 的流动性数据
        uint128 liquidity = deposits[tokenId].liquidity;
        uint128 halfLiquidity = liquidity / 2;

        // amount0Min 和 amount1Min 是价格滑点检查
        // 如果燃烧后收到的金额不大于这些最小值，交易将失败
        INonfungiblePositionManager.DecreaseLiquidityParams memory params =
            INonfungiblePositionManager.DecreaseLiquidityParams({
                tokenId: tokenId,
                liquidity: halfLiquidity,
                amount0Min: 0,
                amount1Min: 0,
                deadline: block.timestamp
            });

        (amount0, amount1) = nonfungiblePositionManager.decreaseLiquidity(params);

        // 发送流动性回给所有者
        _sendToOwner(tokenId, amount0, amount1);
    }

    /// @notice 增加当前范围内的流动性
    /// @dev 池必须已经初始化才能添加流动性
    /// @param tokenId erc721 代币的 ID
    /// @param amount0 要添加的 token0 数量
    /// @param amount1 要添加的 token1 数量
    function increaseLiquidityCurrentRange(
        uint256 tokenId,
        uint256 amountAdd0,
        uint256 amountAdd1
    )
        external
        returns (
            uint128 liquidity,
            uint256 amount0,
            uint256 amount1
        ) {

        TransferHelper.safeTransferFrom(deposits[tokenId].token0, msg.sender, address(this), amountAdd0);
        TransferHelper.safeTransferFrom(deposits[tokenId].token1, msg.sender, address(this), amountAdd1);

        TransferHelper.safeApprove(deposits[tokenId].token0, address(nonfungiblePositionManager), amountAdd0);
        TransferHelper.safeApprove(deposits[tokenId].token1, address(nonfungiblePositionManager), amountAdd1);

        INonfungiblePositionManager.IncreaseLiquidityParams memory params = INonfungiblePositionManager.IncreaseLiquidityParams({
            tokenId: tokenId,
            amount0Desired: amountAdd0,
            amount1Desired: amountAdd1,
            amount0Min: 0,
            amount1Min: 0,
            deadline: block.timestamp
        });

        (liquidity, amount0, amount1) = nonfungiblePositionManager.increaseLiquidity(params);

    }

    /// @notice 将资金转移给 NFT 的所有者
    /// @param tokenId erc721 的 ID
    /// @param amount0 代币0的数量
    /// @param amount1 代币1的数量
    function _sendToOwner(
        uint256 tokenId,
        uint256 amount0,
        uint256 amount1
    ) internal {
        // 获取合约的所有者
        address owner = deposits[tokenId].owner;

        address token0 = deposits[tokenId].token0;
        address token1 = deposits[tokenId].token1;
        // 发送收集到的费用给所有者
        TransferHelper.safeTransfer(token0, owner, amount0);
        TransferHelper.safeTransfer(token1, owner, amount1);
    }

    /// @notice 将 NFT 转移给所有者
    /// @param tokenId erc721 的 ID
    function retrieveNFT(uint256 tokenId) external {
        // 必须是 NFT 的所有者
        require(msg.sender == deposits[tokenId].owner, 'Not the owner');
        // 将所有权转移给原始所有者
        nonfungiblePositionManager.safeTransferFrom(address(this), msg.sender, tokenId);
        // 删除与 tokenId 相关的信息
        delete deposits[tokenId];
    }
}
```