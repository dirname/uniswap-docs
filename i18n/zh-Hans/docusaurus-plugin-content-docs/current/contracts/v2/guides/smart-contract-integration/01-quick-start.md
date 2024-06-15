---
id: quick-start
title: 智能合约快速入门
---

为以太坊开发智能合约涉及一系列离线工具，用于生成和测试在[Ethereum Virtual Machine (EVM)](<https://eth.wiki/en/concepts/evm/ethereum-virtual-machine-(evm)-awesome-list>)上运行的字节码。
一些工具还包含了将这些字节码部署到以太坊网络和测试网的工作流程。
这些工具有多种选择。本指南将引导你通过使用一组特定的工具(`truffle` + `npm` + `mocha`)编写和测试一个与Uniswap协议交互的简单智能合约。

## 要求

要遵循此指南，你必须安装以下内容：

- [nodejs >= v12.x & npm >= 6.x](https://nodejs.org/en/)

## 初始化项目

你可以从零开始，但使用像`truffle`这样的工具来初始化一个空项目会更简单。
创建一个空目录，并在该目录内运行`npx truffle init`来解包默认的[Truffle box](https://www.trufflesuite.com/boxes)。

```shell script
mkdir demo
cd demo
npx truffle init
```

## 设置npm

为了引用Uniswap V2合约，你应该使用我们部署的npm artifacts，其中包含核心和外围智能合约及接口。为了添加npm依赖项，我们首先需要初始化npm包。
我们可以在同一目录下运行`npm init`来创建一个`package.json`文件。你可以接受所有默认设置，稍后可以更改它们。

```shell script
npm init
```

## 添加依赖项

现在我们有了npm包，我们可以添加我们的依赖项。让我们同时添加
[`@uniswap/v2-core`](https://www.npmjs.com/package/@uniswap/v2-core)和
[`@uniswap/v2-periphery`](https://www.npmjs.com/package/@uniswap/v2-periphery)包。

```shell script
npm i --save @uniswap/v2-core
npm i --save @uniswap/v2-periphery
```

如果你检查`node_modules/@uniswap`目录，你现在可以找到Uniswap V2合约。

```shell script
moody@MacBook-Pro ~/I/u/demo> ls node_modules/@uniswap/v2-core/contracts
UniswapV2ERC20.sol    UniswapV2Pair.sol     libraries/
UniswapV2Factory.sol  interfaces/           test/
moody@MacBook-Pro ~/I/u/demo> ls node_modules/@uniswap/v2-periphery/contracts/
UniswapV2Migrator.sol  examples/              test/
UniswapV2Router01.sol  interfaces/
UniswapV2Router02.sol  libraries/
```

这些包既包括智能合约源代码也包括构建artifacts。

## 编写我们的合约

我们现在可以开始编写示例合约。
对于编写Solidity，我们推荐使用IntelliJ或带有Solidity插件的VSCode，但你也可以使用任何文本编辑器。
让我们编写一个合约，返回给定代币对的一定数量流动性的价值。
首先创建几个文件：

```shell script
mkdir contracts/interfaces
touch contracts/interfaces/ILiquidityValueCalculator.sol
touch contracts/LiquidityValueCalculator.sol
```

这将是我们将实现的合约的接口。将其放入`contracts/interfaces/ILiquidityValueCalculator.sol`中。

```solidity
pragma solidity ^0.6.6;

interface ILiquidityValueCalculator {
    function computeLiquidityShareValue(uint liquidity, address tokenA, address tokenB) external returns (uint tokenAAmount, uint tokenBAmount);
}
```

现在让我们从构造函数开始。为了计算代币对的地址并查找流动份额的总供应量以及储备金的数量，你需要知道`UniswapV2Factory`在哪里部署。
我们可以将此作为传递给构造函数的地址存储。

工厂地址在主网和所有测试网上是常量，所以你可能想在你的合约中将这个值设为常量，
但由于我们需要单元测试合约，它应该是一个参数。你可以使用Solidity不可变性来节省访问此变量时的gas。

```solidity
pragma solidity ^0.6.6;

import './interfaces/ILiquidityValueCalculator.sol';

contract LiquidityValueCalculator is ILiquidityValueCalculator {
    address public factory;
    constructor(address factory_) public {
        factory = factory_;
    }
}
```

现在我们需要能够查找一对的流动性的总供应量及其代币余额。
让我们把这个放在一个单独的函数中。为了实现它，我们必须：

1. 查找代币对地址
2. 获取代币对的储备金
3. 获取代币对流动性的总供应量
4. 按照tokenA、tokenB的顺序排序储备金

`UniswapV2Library`中有对此有帮助的方法。

```solidity
pragma solidity ^0.6.6;

import './interfaces/ILiquidityValueCalculator.sol';
import '@uniswap/v2-periphery/contracts/libraries/UniswapV2Library.sol';
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';

contract LiquidityValueCalculator is ILiquidityValueCalculator {
    function pairInfo(address tokenA, address tokenB) internal view returns (uint reserveA, uint reserveB, uint totalSupply) {
        IUniswapV2Pair pair = IUniswapV2Pair(UniswapV2Library.pairFor(factory, tokenA, tokenB));
        totalSupply = pair.totalSupply();
        (uint reserves0, uint reserves1,) = pair.getReserves();
        (reserveA, reserveB) = tokenA == pair.token0() ? (reserves0, reserves1) : (reserves1, reserves0);
    }
}
```

最后，我们只需要计算份额价值。我们将留给读者完成这一部分。

```solidity
pragma solidity ^0.6.6;

import './interfaces/ILiquidityValueCalculator.sol';
import '@uniswap/v2-periphery/contracts/libraries/UniswapV2Library.sol';
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol';

contract LiquidityValueCalculator is ILiquidityValueCalculator {
    address public factory;
    constructor(address factory_) public {
        factory = factory_;
    }

    function pairInfo(address tokenA, address tokenB) internal view returns (uint reserveA, uint reserveB, uint totalSupply) {
        IUniswapV2Pair pair = IUniswapV2Pair(UniswapV2Library.pairFor(factory, tokenA, tokenB));
        totalSupply = pair.totalSupply();
        (uint reserves0, uint reserves1,) = pair.getReserves();
        (reserveA, reserveB) = tokenA == pair.token0() ? (reserves0, reserves1) : (reserves1, reserves0);
    }

    function computeLiquidityShareValue(uint liquidity, address tokenA, address tokenB) external override returns (uint tokenAAmount, uint tokenBAmount) {
        revert('TODO');
    }
}
```

## 编写测试

为了测试你的合约，你需要：

1. 启动一个测试网
2. 部署`UniswapV2Factory`
3. 部署至少2个ERC20代币用于一对
4. 为工厂创建一个代币对
5. 部署你的`LiquidityValueCalculator`合约
6. 调用`LiquidityValueCalculator#computeLiquidityShareValue`
7. 使用断言验证结果

\#1由`truffle test`命令自动为你处理。

请注意，你只应在单元测试中部署`build`目录中的预编译Uniswap合约。
这是因为Solidity会在编译的合约artifacts后附加元数据哈希，其中包括合同源代码路径的哈希，而其他机器上的编译不会产生完全相同的字节码。
这存在问题，因为在Uniswap V2中，我们在v2-periphery
[`UniswapV2Library`](https://github.com/Uniswap/uniswap-v2-periphery/blob/master/contracts/libraries/UniswapV2Library.sol#L24)中使用字节码的哈希，
来计算代币对地址。

为了获取部署UniswapV2Factory的字节码，你可以通过以下方式导入文件：

```javascript
const UniswapV2FactoryBytecode = require('@uniswap/v2-core/build/UniswapV2Factory.json').bytecode
```

我们建议使用来自`@openzeppelin/contracts`的标准ERC20来部署ERC20。

你可以在这里阅读更多关于使用Truffle部署合约和编写测试的信息
[here](https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript)。

## 编译和部署合约

了解更多关于使用Truffle编译和部署合约的信息
[here](https://www.trufflesuite.com/docs/truffle/getting-started/compiling-contracts) 和
[here](https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations) 分别。

## 正在进行中

本指南正在进行中。请通过下面的编辑按钮为本指南做出贡献！