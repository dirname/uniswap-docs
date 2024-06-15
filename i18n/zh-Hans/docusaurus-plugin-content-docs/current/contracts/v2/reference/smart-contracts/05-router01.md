---
id: router-01
title: Router01
---

> 不应再使用 UniswapV2Router01，因为它存在一个 [低严重性漏洞](../smart-contracts/router-01#getamountin)，以及某些方法无法与在转账时收取费用的代币一起工作。当前的推荐是使用 [UniswapV2Router02](../smart-contracts/router-02)。

# 代码

[`UniswapV2Router01.sol`](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/UniswapV2Router01.sol)

# 地址

`UniswapV2Router01` 在以太坊 [主网](https://etherscan.io/address/0xf164fC0Ec4E93095b804a4795bBe1e041497b92a) 上部署于 `0xf164fC0Ec4E93095b804a4795bBe1e041497b92a`，并在 [Ropsten](https://ropsten.etherscan.io/address/0xf164fC0Ec4E93095b804a4795bBe1e041497b92a)、[Rinkeby](https://rinkeby.etherscan.io/address/0xf164fC0Ec4E93095b804a4795bBe1e041497b92a)、[Görli](https://goerli.etherscan.io/address/0xf164fC0Ec4E93095b804a4795bBe1e041497b92a) 和 [Kovan](https://kovan.etherscan.io/address/0xf164fC0Ec4E93095b804a4795bBe1e041497b92a) 测试网上也可以找到。它是从提交 [2ad7da2](https://github.com/Uniswap/uniswap-v2-periphery/tree/2ad7da28a6f70ec4299364bc1608af8f30e7646b) 构建的。

# 只读函数

## factory

```solidity
function factory() external pure returns (address);
```

返回 [工厂地址](../smart-contracts/factory#address)。

## WETH

```solidity
function WETH() external pure returns (address);
```

返回以太坊 [主网](https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) 上的 [标准 WETH 地址](https://blog.0xproject.com/canonical-weth-a9aa7d0279dd)，或 [Ropsten](https://ropsten.etherscan.io/address/0xc778417e063141139fce010982780140aa0cd5ab)、[Rinkeby](https://rinkeby.etherscan.io/address/0xc778417e063141139fce010982780140aa0cd5ab)、[Görli](https://goerli.etherscan.io/address/0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6) 和 [Kovan](https://kovan.etherscan.io/address/0xd0a1e359811322d97991e03f863a0c30c2cf029c) 测试网上的相应地址。

# 状态更改函数

## addLiquidity

```solidity
function addLiquidity(
  address tokenA,
  address tokenB,
  uint amountADesired,
  uint amountBDesired,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB, uint liquidity);
```

向 ERC-20⇄ERC-20 池添加流动性。

- 为了涵盖所有可能的情况，`msg.sender` 应该已经给予路由器在 tokenA/tokenB 上至少 amountADesired/amountBDesired 的允许额度。
- 总是以交易执行时的理想比率添加资产。
- 如果传递的代币不存在池，则自动创建一个，并且正好添加 amountADesired/amountBDesired 的代币。

| 名称           | 类型      | 描述 |
| :------------- | :-------- | :-- |
| tokenA         | `address` | 池中的一个代币。 |
| tokenB         | `address` | 池中的另一个代币。 |
| amountADesired | `uint`    | 如果 B/A 价格 <= amountBDesired/amountADesired（A 贬值）时，作为流动性添加的 tokenA 数量。 |
| amountBDesired | `uint`    | 如果 A/B 价格 <= amountADesired/amountBDesired（B 贬值）时，作为流动性添加的 tokenB 数量。 |
| amountAMin     | `uint`    | 交易回退前 B/A 价格可以升高的程度的限制。必须 <= amountADesired。 |
| amountBMin     | `uint`    | 交易回退前 A/B 价格可以升高的程度的限制。必须 <= amountBDesired。 |
| to             | `address` | 流动性代币的接收者。 |
| deadline       | `uint`    | 交易将在该时间戳后回退的 Unix 时间戳。 |
|                |           |     |
| amountA        | `uint`    | 发送到池中的 tokenA 数量。 |
| amountB        | `uint`    | 发送到池中的 tokenB 数量。 |
| liquidity      | `uint`    | 铸造的流动性代币数量。 |

## addLiquidityETH

```solidity
function addLiquidityETH(
  address token,
  uint amountTokenDesired,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline
) external payable returns (uint amountToken, uint amountETH, uint liquidity);
```

使用 ETH 向 ERC-20⇄WETH 池添加流动性。

- 为了涵盖所有可能的情况，`msg.sender` 应该已经给予路由器在 token 上至少 amountTokenDesired 的允许额度。
- 总是以交易执行时的理想比率添加资产。
- `msg.value` 被视为 amountETHDesired。
- 剩余的 ETH（如果有）将退还给 `msg.sender`。
- 如果传递的代币和 WETH 之间不存在池，则自动创建一个，并且正好添加 amountTokenDesired/`msg.value` 的代币。

| 名称                           | 类型      | 描述 |
| :----------------------------- | :-------- | :-- |
| token                          | `address` | 池中的一个代币。 |
| amountTokenDesired             | `uint`    | 如果 WETH/token 价格 <= `msg.value`/amountTokenDesired（token 贬值）时，作为流动性添加的 token 数量。 |
| `msg.value` (amountETHDesired) | `uint`    | 如果 token/WETH 价格 <= amountTokenDesired/`msg.value`（WETH 贬值）时，作为流动性添加的 ETH 数量。 |
| amountTokenMin                 | `uint`    | 交易回退前 WETH/token 价格可以升高的程度的限制。必须 <= amountTokenDesired。 |
| amountETHMin                   | `uint`    | 交易回退前 token/WETH 价格可以升高的程度的限制。必须 <= `msg.value`。 |
| to                             | `address` | 流动性代币的接收者。 |
| deadline                       | `uint`    | 交易将在该时间戳后回退的 Unix 时间戳。 |
|                                |           |     |
| amountToken                    | `uint`    | 发送到池中的 token 数量。 |
| amountETH                      | `uint`    | 转换为 WETH 并发送到池中的 ETH 数量。 |
| liquidity                      | `uint`    | 铸造的流动性代币数量。 |

## removeLiquidity

```solidity
function removeLiquidity(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB);
```

从 ERC-20⇄ERC-20 池中移除流动性。

- `msg.sender` 应该已经给予路由器在池上至少 liquidity 的允许额度。

| 名称       | 类型      | 描述 |
| :--------- | :-------- | :-- |
| tokenA     | `address` | 池中的一个代币。 |
| tokenB     | `address` | 池中的另一个代币。 |
| liquidity  | `uint`    | 要移除的流动性代币数量。 |
| amountAMin | `uint`    | 交易不回退所必需的 tokenA 最小接收量。 |
| amountBMin | `uint`    | 交易不回退所必需的 tokenB 最小接收量。 |
| to         | `address` | 标的资产的接收者。 |
| deadline   | `uint`    | 交易将在该时间戳后回退的 Unix 时间戳。 |
|            |           |     |
| amountA    | `uint`    | 接收到的 tokenA 数量。 |
| amountB    | `uint`    | 接收到的 tokenB 数量。 |

## removeLiquidityETH

```solidity
function removeLiquidityETH(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline
) external returns (uint amountToken, uint amountETH);
```

从 ERC-20⇄WETH 池中移除流动性并接收 ETH。

- `msg.sender` 应该已经给予路由器在池上至少 liquidity 的允许额度。

| 名称           | 类型      | 描述 |
| :------------- | :-------- | :-- |
| token          | `address` | 池中的一个代币。 |
| liquidity      | `uint`    | 要移除的流动性代币数量。 |
| amountTokenMin | `uint`    | 交易不回退所必需的 token 最小接收量。 |
| amountETHMin   | `uint`    | 交易不回退所必需的 ETH 最小接收量。 |
| to             | `address` | 标的资产的接收者。 |
| deadline       | `uint`    | 交易将在该时间戳后回退的 Unix 时间戳。 |
|                |           |     |
| amountToken    | `uint`    | 接收到的 token 数量。 |
| amountETH      | `uint`    | 接收到的 ETH 数量。 |

## removeLiquidityWithPermit

```solidity
function removeLiquidityWithPermit(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountA, uint amountB);
```

无需预先批准，通过 [permit](pair-erc-20#permit) 从 ERC-20⇄ERC-20 池中移除流动性。

| 名称       | 类型      | 描述 |
| :--------- | :-------- | :-- |
| tokenA     | `address` | 池中的一个代币。 |
| tokenB     | `address` | 池中的另一个代币。 |
| liquidity  | `uint`    | 要移除的流动性代币数量。 |
| amountAMin | `uint`    | 交易不回退所必需的 tokenA 最小接收量。 |
| amountBMin | `uint`    | 交易不回退所必需的 tokenB 最小接收量。 |
| to         | `address` | 标的资产的接收者。 |
| deadline   | `uint`    | 交易将在该时间戳后回退的 Unix 时间戳。 |
| approveMax | `bool`    | 签名中的批准金额是否为 liquidity 或 `uint(-1)`。 |
| v          | `uint8`   | permit 签名的 v 组件。 |
| r          | `bytes32` | permit 签名的 r 组件。 |
| s          | `bytes32` | permit 签名的 s 组件。 |
|            |           |     |
| amountA    | `uint`    | 接收到的 tokenA 数量。 |
| amountB    | `uint`    | 接收到的 tokenB 数量。 |

## removeLiquidityETHWithPermit

```solidity
function removeLiquidityETHWithPermit(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountToken, uint amountETH);
```

无需预先批准，通过 [permit](pair-erc-20#permit) 从 ERC-20⇄WETTH 池中移除流动性并接收 ETH。

| 名称           | 类型      | 描述 |
| :------------- | :-------- | :-- |
| token          | `address` | 池中的一个代币。 |
| liquidity      | `uint`    | 要移除的流动性代币数量。 |
| amountTokenMin | `uint`    | 交易不回退所必需的 token 最小接收量。 |
| amountETHMin   | `uint`    | 交易不回退所必需的 ETH 最小接收量。 |
| to             | `address` | 标的资产的接收者。 |
| deadline       | `uint`    | 交易将在该时间戳后回退的 Unix 时间戳。 |
| approveMax     | `bool`    | 签名中的批准金额是否为 liquidity 或 `uint(-1)`。 |
| v              | `uint8`   | permit 签名的 v 组件。 |
| r              | `bytes32` | permit 签名的 r 组件。 |
| s              | `bytes32` | permit 签名的 s 组件。 |
|                |           |     |
| amountToken    | `uint`    | 接收到的 token 数量。 |
| amountETH      | `uint`    | 接收到的 ETH 数量。 |

## swapExactTokensForTokens

```solidity
function swapExactTokensForTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external returns (uint[] memory amounts);
```

沿着由路径确定的路线，用精确数量的输入代币换取尽可能多的输出代币。路径的第一个元素是输入代币，最后一个元素是输出代币，任何中间元素代表要交易的中间对（例如，如果直接对不存在）。

- `msg.sender` 应该已经给予路由器在输入代币上至少 amountIn 的允许额度。

| 名称         | 类型                 | 描述 |
| :----------- | :------------------- | :-- |
| amountIn     | `uint`               | 要发送的输入代币数量。 |
| amountOutMin | `uint`               | 交易不回退所必需的最小输出代币数量。 |
| path         | `address[] calldata` | 代币地址数组。`path.length` 必须 >= 2。每个连续地址对之间的池必须存在并且有流动性。 |
| to           | `address`            | 输出代币的接收者。 |
| deadline     | `uint`               | 交易将在该时间戳后回退的 Unix 时间戳。 |
|              |                      |     |
| amounts      | `uint[] memory`      | 输入代币数量和所有后续输出代币数量。 |

## swapTokensForExactTokens

```solidity
function swapTokensForExactTokens(
  uint amountOut,
  uint amountInMax,
  address[] calldata path,
  address to,
  uint deadline
) external returns (uint[] memory amounts);
```

沿着由路径确定的路线，用尽可能少的输入代币换取精确数量的输出代币。路径的第一个元素是输入代币，最后一个元素是输出代币，任何中间元素代表要交易的中间对（例如，如果直接对不存在）。

- `msg.sender` 应该已经给予路由器在输入代币上至少 amountInMax 的允许额度。

| 名称        | 类型                 | 描述 |
| :---------- | :------------------- | :-- |
| amountOut   | `uint`               | 要接收的输出代币数量。 |
| amountInMax | `uint`               | 交易回退前可以要求的最大输入代币数量。 |
| path        | `address[] calldata` | 代币地址数组。`path.length` 必须 >= 2。每个连续地址对之间的池必须存在并且有流动性。 |
| to          | `address`            | 输出代币的接收者。 |
| deadline    | `uint`               | 交易将在该时间戳后回退的 Unix 时间戳。 |
|             |                      |     |
| amounts     | `uint[] memory`      | 输入代币数量和所有后续输出代币数量。 |

## swapExactETHForTokens

```solidity
function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

沿着由路径确定的路线，用精确数量的 ETH 换取尽可能多的输出代币。路径的第一个元素必须是 [WETH](#weth)，最后一个元素是输出代币，任何中间元素代表要交易的中间对（例如，如果直接对不存在）。

| 名称                   | 类型                 | 描述 |
| :--------------------- | :------------------- | :-- |
| `msg.value` (amountIn) | `uint`               | 要发送的 ETH 数量。 |
| amountOutMin           | `uint`               | 交易不回退所必需的最小输出代币数量。 |
| path                   | `address[] calldata` | 代币地址数组。`path.length` 必须 >= 2。每个连续地址对之间的池必须存在并且有流动性。 |
| to                     | `address`            | 输出代币的接收者。 |
| deadline               | `uint`               | 交易将在该时间戳后回退的 Unix 时间戳。 |
|                        |                      |     |
| amounts                | `uint[] memory`      | 输入代币数量和所有后续输出代币数量。 |

## swapTokensForExactETH

```solidity
function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```

沿着由路径确定的路线，用尽可能少的输入代币换取精确数量的 ETH。路径的第一个元素是输入代币，最后一个元素必须是 [WETH](#weth)，任何中间元素代表要交易的中间对（例如，如果直接对不存在）。

- `msg.sender` 应该已经给予路由器在输入代币上至少 amountInMax 的允许额度。
- 如果 to 地址是一个智能合约，它必须有能力接收 ETH。

| 名称        | 类型                 | 描述 |
| :---------- | :------------------- | :-- |
| amountOut   | `uint`               | 要接收的 ETH 数量。 |
| amountInMax | `uint`               | 交易回退前可以要求的最大输入代币数量。 |
| path        | `address[] calldata` | 代币地址数组。`path.length` 必须 >= 2。每个连续地址对之间的池必须存在并且有流动性。 |
| to          | `address`            | ETH 的接收者。 |
| deadline    | `uint`               | 交易将在该时间戳后回退的 Unix 时间戳。 |
|             |                      |     |
| amounts     | `uint[] memory`      | 输入代币数量和所有后续输出代币数量。 |

## swapExactTokensForETH

```solidity
function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```

沿着由路径确定的路线，用精确数量的代币换取尽可能多的 ETH。路径的第一个元素是输入代币，最后一个元素必须是 [WETH](#weth)，任何中间元素代表要交易的中间对（例如，如果直接对不存在）。

- 如果 to 地址是一个智能合约，它必须有能力接收 ETH。

| 名称         | 类型                 | 描述 |
| :----------- | :------------------- | :-- |
| amountIn     | `uint`               | 要发送的输入代币数量。 |
| amountOutMin | `uint`               | 交易不回退所必需的最小输出代币数量。 |
| path         | `address[] calldata` | 代币地址数组。`path.length` 必须 >= 2。每个连续地址对之间的池必须存在并且有流动性。 |
| to           | `address`            | ETH 的接收者。 |
| deadline     | `uint`               | 交易将在该时间戳后回退的 Unix 时间戳。 |
|              |                      |     |
| amounts      | `uint[] memory`      | 输入代币数量和所有后续输出代币数量。 |

## swapETHForExactTokens

```solidity
function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

沿着由路径确定的路线，用尽可能少的 ETH 换取精确数量的代币。路径的第一个元素必须是 [WETH](#weth)，最后一个元素是输出代币，任何中间元素代表要交易的中间对（例如，如果直接对不存在）。

- 剩余的 ETH（如果有）将退还给 `msg.sender`。

| 名称                      | 类型                 | 描述 |
| :------------------------ | :------------------- | :-- |
| amountOut                 | `uint`               | 要接收的代币数量。 |
| `msg.value` (amountInMax) | `uint`               | 交易回退前可以要求的最大 ETH 数量。 |
| path                      | `address[] calldata` | 代币地址数组。`path.length` 必须 >= 2。每个连续地址对之间的池必须存在并且有流动性。 |
| to                        | `address`            | 输出代币的接收者。 |
| deadline                  | `uint`               | 交易将在该时间戳后回退的 Unix 时间戳。 |
|                           |                      |     |
| amounts                   | `uint[] memory`      | 输入代币数量和所有后续输出代币数量。 |

## quote

参见 [quote](library#quote)。

## getAmountOut

参见 [getAmountOut](library#getamountout)。

## getAmountIn

**此函数包含一个低严重性漏洞，不要使用。**

## getAmountsOut

```solidity
function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts);
```

参见 [getAmountsOut](library#getamountsout)。

## getAmountsIn

```solidity
function getAmountsIn(uint amountOut, address[] memory path) public view returns (uint[] memory amounts);
```

参见[getAmountsIn](library#getamountsin)。

# 接口

```solidity
import '@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router01.sol';
```

```solidity
pragma solidity >=0.6.2;

interface IUniswapV2Router01 {
  // ... (接口定义省略，与原文相同)
}
```

# ABI

```typescript
import IUniswapV2Router01 from '@uniswap/v2-periphery/build/IUniswapV2Router01.json'
```

[https://unpkg.com/@uniswap/v2-periphery@1.0.0-beta.0/build/IUniswapV2Router01.json](https://unpkg.com/@uniswap/v2-periphery@1.0.0-beta.0/build/IUniswapV2Router01.json)