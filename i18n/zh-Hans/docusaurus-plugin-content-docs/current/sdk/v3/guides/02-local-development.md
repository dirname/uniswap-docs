---
id: local-development
title: 本地开发
position: 2
---

## 引言

开发你的 dApps 或智能合约需要一些调整以获得一个既能够良好模拟主网行为，同时又足够灵活以适应开发环境需求的恰当设置。

一种非常常见的方法是在离线环境下创建你自己的自定义链，并在其上进行开发。
这种方法的问题在于，如果你正在集成像 Uniswap 这样的主网上运行的协议，很难在你的本地链上模拟，因为来自主网的智能合约并不在那里。

另一种方法是使用如 Ethereum Goerli 这样的测试网。虽然大多数协议（包括 Uniswap）在常见测试网上都有它们智能合约的版本，但存在某些行为差异。例如，并非所有在主网上的池子都在 Goerli 上。另外，很难获取到足够的测试网 ETH 来满足真实的测试需求。如果没有大量的测试网 ETH，那么在你的开发环境中通过 Uniswap 交换其他代币将更加困难，如果这是你需要做的。

本指南将重点介绍本地开发的另一种方法：主网分叉。

主网分叉是一个本地链，它复制了给定区块高度下以太坊主网的状态。然后它为你提供了作弊码，比如拥有数千个 ETH 的钱包和 RPC URL，你可以将这些作为真实主网 RPC 的直接替代品使用。

这种方法结合了所有其他方法的优点。你有一个可以随意操作的本地链，同时你有所有你需要测试和开发你的 dApp 或智能合约的真实协议部署。

:::info
本指南专注于以太坊主网。但是，你只需简单地将 RPC URL 替换为你想要使用的网络，就可以轻松地分叉任何其他链。
:::

对于本指南，使用了以下包：

- [`@uniswap/v3-sdk`](https://www.npmjs.com/package/@uniswap/v3-sdk)
- [`@uniswap/sdk-core`](https://www.npmjs.com/package/@uniswap/sdk-core)
- [`ethers@5`](https://www.npmjs.com/package/ethers)

请注意，我们使用的是 ethers 版本 5，因为这仍然是最常用的 ethers.js 版本。
如果你使用的是版本 6，则需要稍微更改下面示例中的语法。

:::info
分叉链需要存档数据和跟踪调用。Infura 和普通的 geth 实例默认不提供存档服务。
你可以访问 [Chainnodes](https://www.chainnodes.org/) 获取免费的存档 RPC，以便遵循本指南并分叉主网。
:::

## 使用 Foundry 和 Anvil

有几种开发者工具可以分叉主网。
由 foundry 提供的 [Anvil](https://github.com/foundry-rs/foundry/blob/master/anvil/README.md) 是一个新出现的、快速且易于设置的工具。
本指南将专注于 Anvil。

首先，遵循 foundry 书籍中的 [安装指南](https://book.getfoundry.sh/getting-started/installation)。

完成之后，你将能够立即分叉主网。在终端中运行以下命令：

确保你：

- 将你的 API 密钥替换掉（通过访问 [Chainnodes](https://app.chainnodes.org/) 获得）
- 将区块号替换为最近的一个，可以在 [Etherscan](https://etherscan.io/) 中检查
- 如果你分叉的不是以太坊主网链，请在 [Chainlist](https://chainlist.org/) 中检查正确的链 ID 并替换下面命令中的两个实例

```bash
anvil --fork-url https://mainnet.chainnodes.org/api_key --fork-block-number 17480237 --fork-chain-id 1 --chain-id 1
```

运行 `anvil --help` 查看所有可用选项。

完成后，你应该会看到类似以下的内容：

<img src={require('./images/anvil-result.png').default} alt="调用后 anvil 的结果" box-shadow="none"/>

你的本地主网分叉现在正在运行！

如上图所示，anvil 打印出了一堆每个都加载了 10k ETH 的私钥。
我们将使用它们来发送交易，包括在 Uniswap 池中的交换。

:::warning
安全考虑：这是一个主网的分叉，使用了相同的链 ID。你没有针对以太坊主网的重播保护。所以你需要做到：1. 永远不要在真实链上使用 anvil 私钥或向其发送资金（它们到处泄露）；2. 不要在你的本地分叉链上使用你在以太坊主网或其他真实链上使用的账户发送任何交易。
:::

如果你在终端中向下滚动，接近 anvil 日志底部的位置，你会找到你的 RPC URL。
如果你没有更改任何配置，它应该是 `127.0.0.1:8545`。
这就是你现在可以在开发环境中的任何地方作为直接替代品使用的 RPC URL，并与之交互，就像它是真实的以太坊主网一样。你可以使用 http 提供者 `http://127.0.0.1:8545` 以及 Websocket 提供者 `ws://127.0.0.1:8545`。

现在，你可以使用 [Postman](https://www.postman.com/) 根据以下内容向你的 http 提供者发出一个样本 RPC 请求：

POST `http://127.0.0.1:8545`

主体：

```JSON
{
    "jsonrpc": "2.0",
    "method": "eth_chainId",
    "params": [],
    "id": 1
}
```

结果应该如下所示（也可以参见下图）：

```JSON
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x1"
}
```

<img src={require('./images/postman-chainid-result.png').default} alt="调用后 anvil 的结果" box-shadow="none"/>

如你所见，链 ID 是 `1`，就像在主网上一样！

你可以在 [这个 Postman 工作区](https://www.postman.com/chainnodes/workspace/uniswap-examples) 的“本地开发”部分找到上面的例子和更多内容。

## 使用你的主网分叉

现在你有了一个运行中的主网分叉，你将能够在你的开发设置中的任何地方使用它。
使用 anvil 提供的其中一个私钥，你将有足够的 ETH 来进行无限次的交换和智能合约调用。

如果你需要任何其他代币，现在你有灵活性将你的 ETH 交换成任何在主网上部署了池子的代币。
你基本上用你的假 ETH 交换你需要的代币。

查看其中一个关于交换的 [指南](./swaps/02-trading.md)，并将 RPC URL 替换为上面提到的本地 anvil HTTP 链接。

## 下一步

使用上述内容，你已经完全准备好继续跟随如何使用 Uniswap 的指南，在进入主网之前进行本地测试。
当你开发自己的协议或 dApps 时，你也可以重新利用你学到的知识。

你还可以继续探索其他使智能合约开发更容易的开发者工具，如来自 foundry 的 [forge](https://github.com/foundry-rs/foundry/tree/master/forge)。
要了解更多关于 foundry 及其开发者工具的信息，可以访问他们的 [Github](https://github.com/foundry-rs/foundry) 或 [foundry 书籍](https://book.getfoundry.sh/)。