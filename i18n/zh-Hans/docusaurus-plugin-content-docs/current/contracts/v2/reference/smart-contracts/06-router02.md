---
id: router-02
title: Router02
---

由于路由器是无状态的，并不持有代币余额，因此在必要时可以安全且无需信任地替换它们。这可能发生在发现更高效的智能合约模式，或者需要额外功能的情况下。出于这个原因，路由器具有_版本号_，从`01`开始。当前推荐的版本是`02`。

# 代码

[`UniswapV2Router02.sol`](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/UniswapV2Router02.sol)

# 地址

`UniswapV2Router02`部署在以太坊[主网](https://etherscan.io/address/0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D)上的`0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D`，以及[Ropsten](https://ropsten.etherscan.io/address/0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D)，[Rinkeby](https://rinkeby.etherscan.io/address/0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D)，[Görli](https://goerli.etherscan.io/address/0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D)，和[Kovan](https://kovan.etherscan.io/address/0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D)测试网上。它构建于提交[6961711](https://github.com/Uniswap/uniswap-v2-periphery/tree/69617118cda519dab608898d62aaa79877a61004)之上。

# 只读函数

## factory

```solidity
function factory() external pure returns (address);
```

返回[工厂地址](../smart-contracts/factory#address)。

## WETH

```solidity
function WETH() external pure returns (address);
```

返回以太坊[主网](https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2)上或[Ropsten](https://ropsten.etherscan.io/address/0xc778417e063141139fce010982780140aa0cd5ab)，[Rinkeby](https://rinkeby.etherscan.io/address/0xc778417e063141139fce010982780140aa0cd5ab)，[Görli](https://goerli.etherscan.io/address/0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6)，和[Kovan](https://kovan.etherscan.io/address/0xd0a1e359811322d97991e03f863a0c30c2cf029c)测试网上[规范的WETH地址](https://blog.0xproject.com/canonical-weth-a9aa7d0279dd)。

## quote

参见[quote](../smart-contracts/library#quote)。

## getAmountOut

参见[getAmountOut](../smart-contracts/library#getamountout)。

## getAmountIn

参见[getAmountIn](../smart-contracts/library#getamountin)。

## getAmountsOut

```solidity
function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts);
```

参见[getAmountsOut](../smart-contracts/library#getamountsout)。

## getAmountsIn

```solidity
function getAmountsIn(uint amountOut, address[] memory path) public view returns (uint[] memory amounts);
```

参见[getAmountsIn](../smart-contracts/library#getamountsin)。

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

向ERC-20⇄ERC-20池添加流动性。

- 为了覆盖所有可能的情况，`msg.sender`应该已经给予路由器在tokenA/tokenB上至少amountADesired/amountBDesired的允许。
- 总是根据交易执行时的价格，按理想比例添加资产。
- 如果传递的代币不存在池，则会自动创建一个，并且正好添加amountADesired/amountBDesired个代币。

| 名称           | 类型      | 描述                                                                                                                |
| :------------- | :-------- | :------------------------------------------------------------------------------------------------------------------ |
| tokenA         | `address` | 池中的一个代币。                                                                                                    |
| tokenB         | `address` | 池中的一个代币。                                                                                                    |
| amountADesired | `uint`    | 如果B/A价格<= amountBDesired/amountADesired（A贬值）时，作为流动性添加的tokenA的数量。                                 |
| amountBDesired | `uint`    | 如果A/B价格<= amountADesired/amountBDesired（B贬值）时，作为流动性添加的tokenB的数量。                                 |
| amountAMin     | `uint`    | 限制B/A价格在交易回退前能上升的程度。必须<= amountADesired。                                                      |
| amountBMin     | `uint`    | 限制A/B价格在交易回退前能上升的程度。必须<= amountBDesired。                                                      |
| to             | `address` | 流动性代币的接收者。                                                                                               |
| deadline       | `uint`    | 交易将在该Unix时间戳后回退。                                                                                       |
|                |           |                                                                                                                    |
| amountA        | `uint`    | 发送到池中的tokenA数量。                                                                                           |
| amountB        | `uint`    | 发送到池中的tokenB数量。                                                                                           |
| liquidity      | `uint`    | 铸造的流动性代币数量。                                                                                            |

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

使用ETH向ERC-20⇄WETH池添加流动性。

- 为了覆盖所有可能的情况，`msg.sender`应该已经给予路由器在token上至少amountTokenDesired的允许。
- 总是根据交易执行时的价格，按理想比例添加资产。
- `msg.value`被视为amountETHDesired。
- 如果有的话，剩余的ETH将退还给`msg.sender`。
- 如果传递的代币和WETH之间不存在池，则会自动创建一个，并且正好添加amountTokenDesired/`msg.value`个代币。

| 名称                           | 类型      | 描述                                                                                                                             |
| :----------------------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------- |
| token                          | `address` | 池中的一个代币。                                                                                                                 |
| amountTokenDesired             | `uint`    | 如果WETH/token价格<= `msg.value`/amountTokenDesired（token贬值）时，作为流动性添加的token数量。                                  |
| `msg.value` (amountETHDesired) | `uint`    | 如果token/WETH价格<= amountTokenDesired/`msg.value`（WETH贬值）时，作为流动性添加的ETH数量。                                       |
| amountTokenMin                 | `uint`    | 限制WETH/token价格在交易回退前能上升的程度。必须<= amountTokenDesired。                                                         |
| amountETHMin                   | `uint`    | 限制token/WETH价格在交易回退前能上升的程度。必须<= `msg.value`。                                                              |
| to                             | `address` | 流动性代币的接收者。                                                                             |
| deadline                       | `uint`    | 交易将在该Unix时间戳后回退。                                                                                       |
|                                |           |                                                                                                                                |
| amountToken                    | `uint`    | 发送到池中的token数量。                                                                                     |
| amountETH                      | `uint`    | 转换为WETH并发送到池中的ETH数量。                                                                                     |
| liquidity                      | `uint`    | 铸造的流动性代币数量。                                                                                            |

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

从ERC-20⇄ERC-20池移除流动性。

- `msg.sender`应该已经给予路由器在池中至少liquidity的允许。

| 名称       | 类型      | 描述                                                                                       |
| :--------- | :-------- | :----------------------------------------------------------------------------------------- |
| tokenA     | `address` | 池中的一个代币。                                                                         |
| tokenB     | `address` | 池中的一个代币。                                                                         |
| liquidity  | `uint`    | 要移除的流动性代币数量。                                                                 |
| amountAMin | `uint`    | 交易不回退所需的最小tokenA数量。                                                         |
| amountBMin | `uint`    | 交易不回退所需的最小tokenB数量。                                                         |
| to         | `address` | 标的资产的接收者。                                                                       |
| deadline   | `uint`    | 交易将在该Unix时间戳后回退。                                                             |
|            |           |                                                                                           |
| amountA    | `uint`    | 收到的tokenA数量。                                                                       |
| amountB    | `uint`    | 收到的tokenB数量。                                                                       |

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

从ERC-20⇄WETH池移除流动性并接收ETH。

- `msg.sender`应该已经给予路由器在池中至少liquidity的允许。

| 名称           | 类型      | 描述                                                                                      |
| :------------- | :-------- | :---------------------------------------------------------------------------------------- |
| token          | `address` | 池中的一个代币。                                                                        |
| liquidity      | `uint`    | 要移除的流动性代币数量。                                                                |
| amountTokenMin | `uint`    | 交易不回退所需的最小token数量。                                                         |
| amountETHMin   | `uint`    | 交易不回退所需的最小ETH数量。                                                            |
| to             | `address` | 标的资产的接收者。                                                                       |
| deadline       | `uint`    | 交易将在该Unix时间戳后回退。                                                             |
|                |           |                                                                                          |
| amountToken    | `uint`    | 收到的token数量。                                                                       |
| amountETH      | `uint`    | 收到的ETH数量。                                                                         |

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

利用[permit](pair-erc-20#permit)，在无需预批准的情况下，从ERC-20⇄ERC-20池移除流动性。

| 名称       | 类型      | 描述                                                                                       |
| :--------- | :-------- | :----------------------------------------------------------------------------------------- |
| tokenA     | `address` | 池中的一个代币。                                                                         |
| tokenB     | `address` | 池中的一个代币。                                                                         |
| liquidity  | `uint`    | 要移除的流动性代币数量。                                                                 |
| amountAMin | `uint`    | 交易不回退所需的最小tokenA数量。                                                         |
| amountBMin | `uint`    | 交易不回退所需的最小tokenB数量。                                                         |
| to         | `address` | 标的资产的接收者。                                                                       |
| deadline   | `uint`    | 交易将在该Unix时间戳后回退。                                                             |
| approveMax | `bool`    | 签名中的批准金额是否为liquidity或`uint(-1)`。                                          |
| v          | `uint8`   | permit签名的v组件。                                                                      |
| r          | `bytes32` | permit签名的r组件。                                                                      |
| s          | `bytes32` | permit签名的s组件。                                                                      |
|            |           |                                                                                           |
| amountA    | `uint`    | 收到的tokenA数量。                                                                       |
| amountB    | `uint`    | 收到的tokenB数量。                                                                       |

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

利用[permit](pair-erc-20#permit)，在无需预批准的情况下，从ERC-20⇄WETTH池移除流动性并接收ETH。

| 名称           | 类型      | 描述                                                                                      |
| :------------- | :-------- | :---------------------------------------------------------------------------------------- |
| token          | `address` | 池中的一个代币。                                                                        |
| liquidity      | `uint`    | 要移除的流动性代币数量。                                                                |
| amountTokenMin | `uint`    | 交易不回退所需的最小token数量。                                                         |
| amountETHMin   | `uint`    | 交易不回退所需的最小ETH数量。                                                            |
| to             | `address` | 标的资产的接收者。                                                                       |
| deadline       | `uint`    | 交易将在该Unix时间戳后回退。                                                             |
| approveMax     | `bool`    | 签名中的批准金额是否为liquidity或`uint(-1)`。                                          |
| v              | `uint8`   | permit签名的v组件。                                                                      |
| r              | `bytes32` | permit签名的r组件。                                                                      |
| s              | `bytes32` | permit签名的s组件。                                                                      |
|                |           |                                                                                          |
| amountToken    | `uint`    | 收到的token数量。                                                                       |
| amountETH      | `uint`    | 收到的ETH数量。                                                                         |

## removeLiquidityETHSupportingFeeOnTransferTokens

```solidity
function removeLiquidityETHSupportingFeeOnTransferTokens(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline
) external returns (uint amountETH);
```

与[removeLiquidityETH](#removeliquidityeth)相同，但适用于在转账时收取费用的代币。

- `msg.sender`应该已经给予路由器在池中至少liquidity的允许。

| 名称           | 类型      | 描述                                                                                      |
| :------------- | :-------- | :---------------------------------------------------------------------------------------- |
| token          | `address` | 池中的一个代币。                                                                        |
| liquidity      | `uint`    | 要移除的流动性代币数量。                                                                |
| amountTokenMin | `uint`    | 交易不回退所需的最小token数量。                                                         |
| amountETHMin   | `uint`    | 交易不回退所需的最小ETH数量。                                                            |
| to             | `address` | 标的资产的接收者。                                                                       |
| deadline       | `uint`    | 交易将在该Unix时间戳后回退。                                                             |
|                |           |                                                                                          |
| amountETH      | `uint`    | 收到的ETH数量。                                                                         |

## removeLiquidityETHWithPermitSupportingFeeOnTransferTokens

```solidity
function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountETH);
```

与[removeLiquidityETHWithPermit](#removeliquidityethwithpermit)相同，但适用于在转账时收取费用的代币。

| 名称           | 类型      | 描述                                                                                      |
| :------------- | :-------- | :---------------------------------------------------------------------------------------- |
| token          | `address` | 池中的一个代币。                                                                        |
| liquidity      | `uint`    | 要移除的流动性代币数量。                                                                |
| amountTokenMin | `uint`    | 交易不回退所需的最小token数量。                                                         |
| amountETHMin   | `uint`    | 交易不回退所需的最小ETH数量。                                                            |
| to             | `address` | 标的资产的接收者。                                                                       |
| deadline       | `uint`    | 交易将在该Unix时间戳后回退。                                                             |
| approveMax     | `bool`    | 签名中的批准金额是否为liquidity或`uint(-1)`。                                          |
| v              | `uint8`   | permit签名的v组件。                                                                      |
| r              | `bytes32` | permit签名的r组件。                                                                      |
| s              | `bytes32` | permit签名的s组件。                                                                      |
|                |           |                                                                                          |
| amountETH      | `uint`    | 收到的ETH数量。                                                                         |

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

沿着由路径确定的路线，以精确数量的输入代币交换尽可能多的输出代币。路径的第一个元素是输入代币，最后一个元素是输出代币，任何中间元素代表中间对（如果例如，直接对不存在）。

- `msg.sender`应该已经给予路由器在输入代币上至少amountIn的允许。

| 名称         | 类型                 | 描述                                                                                                                                      |
| :----------- | :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| amountIn     | `uint`               | 要发送的输入代币数量。                                                                                                                  |
| amountOutMin | `uint`               | 交易不回退所需的最小输出代币数量。                                                                                                        |
| path         | `address[] calldata` | 代币地址数组。`path.length`必须>=2。每个连续地址对之间的池必须存在并且有流动性。                                                        |
| to           | `address`            | 输出代币的接收者。                                                                                                                       |
| deadline     | `uint`               | 交易将在该Unix时间戳后回退。                                                                                                             |
|              |                      |                                                                                                                                          |
| amounts      | `uint[] memory`      | 输入代币数量和所有后续输出代币数量。                                                                                                     |

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

沿着由路径确定的路线，以尽可能少的输入代币接收精确数量的输出代币。路径的第一个元素是输入代币，最后一个元素是输出代币，任何中间元素代表中间代币（如果例如，直接对不存在）。

- `msg.sender`应该已经给予路由器在输入代币上至少amountInMax的允许。

| 名称        | 类型                 | 描述                                                                                                                                      |
| :---------- | :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| amountOut   | `uint`               | 要接收的输出代币数量。                                                                                                                   |
| amountInMax | `uint`               | 交易回退前可要求的最大输入代币数量。                                                                                                      |
| path        | `address[] calldata` | 代币地址数组。`path.length`必须>=2。每个连续地址对之间的池必须存在并且有流动性。                                                        |
| to          | `address`            | 输出代币的接收者。                                                                                                                       |
| deadline    | `uint`               | 交易将在该Unix时间戳后回退。                                                                                                             |
|             |                      |                                                                                                                                          |
| amounts     | `uint[] memory`      | 输入代币数量和所有后续输出代币数量。                                                                                                     |

## swapExactETHForTokens

```solidity
function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

沿着由路径确定的路线，以精确数量的ETH交换尽可能多的输出代币。路径的第一个元素必须是[WETH](#weth)，最后一个元素是输出代币，任何中间元素代表中间对（如果例如，直接对不存在）。

| 名称                   | 类型                 | 描述                                                                                                                                      |
| :--------------------- | :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `msg.value` (amountIn) | `uint`               | 要发送的ETH数量。                                                                                                                         |
| amountOutMin           | `uint`               | 交易不回退所需的最小输出代币数量。                                                                                                        |
| path                   | `address[] calldata` | 代币地址数组。`path.length`必须>=2。每个连续地址对之间的池必须存在并且有流动性。                                                        |
| to                     | `address`            | 输出代币的接收者。                                                                                                                       |
| deadline               | `uint`               | 交易将在该Unix时间戳后回退。                                                                                                             |
|                        |                      |                                                                                                                                          |
| amounts                | `uint[] memory`      | 输入代币数量和所有后续输出代币数量。                                                                                                     |

## swapTokensForExactETH

```solidity
function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```

沿着由路径确定的路线，以尽可能少的输入代币接收精确数量的ETH。路径的第一个元素是输入代币，最后一个元素必须是[WETH](#weth)，任何中间元素代表中间对（如果例如，直接对不存在）。

- `msg.sender`应该已经给予路由器在输入代币上至少amountInMax的允许。
- 如果to地址是一个智能合约，它必须有能力接收ETH。

| 名称        | 类型                 | 描述                                                                                                                                      |
| :---------- | :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| amountOut   | `uint`               | 要接收的ETH数量。                                                                                                                        |
| amountInMax | `uint`               | 交易回退前可要求的最大输入代币数量。                                                                                                      |
| path        | `address[] calldata` | 代币地址数组。`path.length`必须>=2。每个连续地址对之间的池必须存在并且有流动性。                                                        |
| to          | `address`            | ETH的接收者。                                                                                                                            |
| deadline    | `uint`               | 交易将在该Unix时间戳后回退。                                                                                                             |
|             |                      |                                                                                                                                          |
| amounts     | `uint[] memory`      | 输入代币数量和所有后续输出代币数量。                                                                                                     |

## swapExactTokensForETH

```solidity
function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```

沿着由路径确定的路线，以精确数量的代币交换尽可能多的ETH。路径的第一个元素是输入代币，最后一个元素必须是[WETH](#weth)，任何中间元素代表中间对（如果例如，直接对不存在）。

- 如果to地址是一个智能合约，它必须有能力接收ETH。

| 名称         | 类型                 | 描述                                                                                                                                      |
| :----------- | :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| amountIn     | `uint`               | 要发送的输入代币数量。                                                                                                                   |
| amountOutMin | `uint`               | 交易不回退所需的最小输出代币数量。                                                                                                        |
| path         | `address[] calldata` | 代币地址数组。`path.length`必须>=2。每个连续地址对之间的池必须存在并且有流动性。                                                        |
| to           | `address`            | ETH的接收者。                                                                                                                            |
| deadline     | `uint`               | 交易将在该Unix时间戳后回退。                                                                                                             |
|              |                      |                                                                                                                                          |
| amounts      | `uint[] memory`      | 输入代币数量和所有后续输出代币数量。                                                                                                     |

## swapETHForExactTokens

```solidity
function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

沿着由路径确定的路线，以尽可能少的ETH接收精确数量的代币。路径的第一个元素必须是[WETH](#weth)，最后一个元素是输出代币，任何中间元素代表中间对（如果例如，直接对不存在）。

- 剩余的ETH，如果有，将退还给`msg.sender`。

| 名称                      | 类型                 | 描述                                                                                                                                      |
| :------------------------ | :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| amountOut                 | `uint`               | 要接收的代币数量。                                                                                                                       |
| `msg.value` (amountInMax) | `uint`               | 交易回退前可要求的最大ETH数量。                                                                                                           |
| path                      | `address[] calldata` | 代币地址数组。`path.length`必须>=2。每个连续地址对之间的池必须存在并且有流动性。                                                        |
| to                        | `address`            | 输出代币的接收者。                                                                                                                       |
| deadline                  | `uint`               | 交易将在该Unix时间戳后回退。                                                                                                             |
|                           |                      |                                                                                                                                          |
| amounts                   | `uint[] memory`      | 输入代币数量和所有后续输出代币数量。                                                                                                     |

## swapExactTokensForTokensSupportingFeeOnTransferTokens

```solidity
function swapExactTokensForTokensSupportingFeeOnTransferTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,