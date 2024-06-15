---
id: setting-up
title: 设置您的合约
sidebar_position: 1
---

## 设置合约

本指南是一个托管合约的示例，用于管理 Uniswap V3 的仓位，它允许通过铸造仓位、向仓位添加流动性、减少流动性以及收集费用来与 Uniswap V3 周边环境进行交互。

首先，声明用于编译合约的 Solidity 版本和 `abicoder v2`，以允许在 calldata 中对任意嵌套数组和结构进行编码和解码，这是我们与池交易时使用的一个特性。

```solidity
// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;
```

从 npm 包安装中导入所需的合约。

```solidity
import '@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol';
import '@uniswap/v3-core/contracts/libraries/TickMath.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol';
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
import '@uniswap/v3-periphery/contracts/base/LiquidityManagement.sol';
```

创建一个名为 `LiquidityExamples` 的合约，并继承自 `IERC721Receiver` 和 `LiquidityManagement`。

我们选择为示例硬编码代币合约地址和池费用等级。在生产环境中，你可能会为这个使用输入参数，这将允许你根据每笔交易更改你正在交互的池和代币。

```solidity
contract LiquidityExamples is IERC721Receiver {

    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    uint24 public constant poolFee = 3000;
```

声明一个不可变的公共变量 `nonfungiblePositionManager` 类型为 `INonfungiblePositionManager`。

```solidity
    INonfungiblePositionManager public immutable nonfungiblePositionManager;
```

## 允许 ERC721 交互

每个 [NFT](https://ethereum.org/en/nft/) 在 ERC-721 智能合约中都由一个唯一的 uint256 ID 标识，声明为 `tokenId`。

为了允许 ERC721 流动性表达形式的存款，创建一个名为 `Deposit` 的结构体，一个 `uint256` 到 `Deposit` 结构体的映射，然后声明该映射为公共变量 `deposits`。

```solidity
    struct Deposit {
        address owner;
        uint128 liquidity;
        address token0;
        address token1;
    }

    mapping(uint256 => Deposit) public deposits;
```

## 构造函数

在这里声明构造函数，当部署合约时只执行一次。我们的构造函数硬编码了非同质化位置管理器接口的地址、V3 路由器以及周边不可变状态构造函数，后者需要工厂和 weth9（ether 的 [ERC-20 包装器](https://weth.io/)）的地址。

```solidity
    constructor(
        INonfungiblePositionManager _nonfungiblePositionManager,
        address _factory,
        address _WETH9
    ) PeripheryImmutableState(_factory, _WETH9) {
        nonfungiblePositionManager = _nonfungiblePositionManager;
    }
```

## 允许托管 ERC721 代币

为了允许合约托管 ERC721 代币，在继承的 `IERC721Receiver.sol` [合约](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/IERC721Receiver.sol)中实现 `onERC721Received` 函数。

可以省略标识符 `from`，因为它没有被使用。

```solidity
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
```

## 创建存款

为了向 `deposits` 映射中添加 `Deposit` 实例，创建一个内部函数 `_createDeposit`，它解构了 `nonfungiblePositionManager.sol` 中 `positions` 返回的 `positions` 结构体。将相关变量 `token0`、`token1` 和 `liquidity` 传递给 `deposits` 映射。

```solidity
    function _createDeposit(address owner, uint256 tokenId) internal {
        (, , address token0, address token1, , , , uint128 liquidity, , , , ) =
            nonfungiblePositionManager.positions(tokenId);

        // 设置仓位的所有者和数据
        // 操作者是 msg.sender
        deposits[tokenId] = Deposit({owner: owner, liquidity: liquidity, token0: token0, token1: token1});
    }
```

## 完整的合约设置

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

    /// @notice 表示 NFT 的存款
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
        // 操作者是 msg.sender
        deposits[tokenId] = Deposit({owner: owner, liquidity: liquidity, token0: token0, token1: token1});
    }
}
```