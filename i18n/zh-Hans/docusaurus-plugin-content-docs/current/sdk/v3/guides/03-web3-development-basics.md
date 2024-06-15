---
id: web3-development-basics
title: Web3 开发基础
position: 3
---

## 引言

开发 dApps 和与智能合约交互与 Web2 大相径庭，有时颇具挑战性，因为相比其他软件开发领域，关于这一主题的信息相对较少。

本开发者指南是对该领域的快速概览，包括对库和指南的引用，这些都是很好的起点。阅读本指南应该能帮助你识别出可能需要进一步学习的领域，并为你接下来阅读特定于 Uniswap 的指南做好准备。

假设你已经了解了关于以太坊和区块链的基础知识，包括一些术语。
如果你已经知道如何使用 ethersJS 等构建 dApps 并与之交互，你可以安全地跳过本指南。

## RPCs

访问区块链的切入点是 RPC 节点。它们是读取智能合约数据、发送交易以及与链上协议交互的[标准化接口](https://ethereum.org/zh/developers/docs/apis/json-rpc/)。

RPCs 可以是[全节点或归档节点](https://ethereum.org/zh/developers/docs/nodes-and-clients/archive-nodes/)，具有([JSON-RPC](https://www.jsonrpc.org/))接口。

为了支持以太坊的去中心化，你可以自行托管一个节点，例如使用下面列出的一些实现：

* [geth](https://github.com/ethereum/go-ethereum) - 以太坊协议的原始（参考）实现
* [erigon](https://github.com/ledgerwatch/erigon) - 非常高效的归档节点实现
* [Nethermind](https://github.com/NethermindEth/nethermind) - 专注于稳定性的以太坊实现

然而，要达到高可用性和确保你的节点始终同步，事实证明这相当具有挑战性，因此有作为服务提供的节点（RPC）提供商可以供你使用，特别是在生产环境中。
在选择 RPC 提供商时，我们建议你寻找支持 websocket 的 RPC 服务，因为它们提供的性能远超 HTTP 连接。
为了确保互操作性，你还应确保你的 RPC 提供商严格遵守 JSON-RPC 标准，不需要自定义请求。

[Chainnodes](https://www.chainnodes.org/) 是一个强大的 RPC 提供商，提供慷慨的免费层级，你可以在开发和生产环境中使用。
出于测试目的，你也可以使用来自 [Chainlist](https://chainlist.org/) 的免费公共 RPC 端点。

### JSON-RPC 标准

RPCs 通过 [JSON-RPC](https://www.jsonrpc.org/) 标准进行通信。要发送请求，你采用 RPC URL 并
使用带有 JSON 主体的 POST 请求。参见下面的例子：

`POST https://mainnet.chainnodes.org/API_KEY`

主体：

```json
{
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 1
}
```

在撰写本文时，此请求将返回以下内容：

```json
{
    "id": 1,
    "result": "0x11527c0",
    "jsonrpc": "2.0"
}
```

检查结果，我们看到结果是一个编码的十六进制字符串。
解码后，我们看到它返回了我们网络的当前区块号，`18163648`。

你可以在 [这个 Postman 集合](https://www.postman.com/chainnodes/workspace/uniswap-examples) 中找到上面的例子，包括更多示例。

要查看所有可能的 RPC 请求，请参阅 [Chainnodes 文档](https://www.chainnodes.org/docs)。

### 客户端实现

由于直接通过 HTTP 使用 POST 请求进行通信可能相当困难，尤其是如果你想正确
编码和解码响应并处理失败和指数回退，有客户端实现可以为你完成繁重的工作。这些 SDK 具有友好的开发者 API，并且内部处理
创建正确的 RPC 请求，将其发送到你选择的端点，并为你解码响应。

下面列出了主要的一些实现：

* [ethers.js](https://github.com/ethers-io/ethers.js) - 用于 NodeJS 和浏览器的 Javascript/Typescript SDK。在整个 Uniswap 文档中都有使用。
* [wagmi](https://github.com/wagmi-dev/wagmi) 和 [viem](https://github.com/wagmi-dev/viem) - Javascript/Typescript，适用于现代 Web3 浏览器开发的优秀组合。
* [web3js](https://github.com/web3/web3.js) - 由 ChainSafe 提供的用于 NodeJS 和浏览器的 Javascript/Typescript SDK。

Web3 开发不仅仅局限于 JS。各种语言的 Web3 库包括：

* [Web3.swift](https://github.com/Boilertalk/Web3.swift) - 用于 iOS 应用程序和后端的 Swift SDK。
* [KEthereum](https://github.com/komputing/KEthereum) - 用于 Android 开发的 Kotlin SDK。
* [ethers-rs](https://github.com/gakonst/ethers-rs) - Rust SDK。
* [ethclient](https://github.com/ethereum/go-ethereum/tree/master/ethclient) - Go SDK，是 geth 的一部分，即以太坊节点的参考实现。

目前，Uniswap 仅提供 Typescript SDK。

如你所见，有很多 SDK 可以使通过 RPC 与区块链通信变得更容易。

### 本地开发

要模拟本地的 RPCs 和交易，你可以查阅 [这份指南](./02-local-development)。

## 索引器

由于 RPCs 仅仅是区块链中存储的数据的简单抽象，有些事情很难
或通过常规的 RPC 请求来访问成本高昂。

一个常见的例子是特定钱包地址的交易。想象一下，你想要获取所有源自（或发往）特定
钱包的所有交易的列表。人们可能会认为应该有一个叫做 `eth_getTransactionsForWallet` 或类似名称的 RPC 方法。
但由于数据存储的方式，这种 RPC 方法并不可行，因此并未实现。

现在，与其通过遍历区块链中的每个区块来访问这类信息，你可以使用索引器，它们被设计为实时索引此类数据，并提供易于访问的途径。

### TheGraph

一个知名的、标准化的索引器实现是 [TheGraph](https://thegraph.com/)。它被大多数主要协议使用，
包括 Uniswap，用于索引数据并使其对用户和仪表板可访问。

使用 TheGraph，你可以通过 GraphQL 查询语言访问开放的 [子图](https://thegraph.com/explorer)，或者 [创建你自己的](https://thegraph.com/docs/en/developing/creating-a-subgraph/) 并部署它。

在文档中，你会看到如何无需接触 RPC 即可与 Uniswap 子图交互以获取刻度数据等。

关于索引器的一个重要注意事项：

虽然它们可能有所帮助，但你需要意识到最终的真实来源来自于 RPCs。由于重组发生和
索引器上的某些问题出现，索引器上可能有某些数据点要么不是完全最新的，甚至
完全错误。如果你的应用场景要求数据始终完美正确，直接使用 RPCs。
如果你只是进行数据可视化或构建仪表板，如果它们符合你的需求，则使用索引器。

一些流行的子图，你可以尝试从中轻松获取区块链数据（点击 playground 来试一试）：

* [Uniswap Messari 子图](https://thegraph.com/explorer/subgraphs/ELUcwgpm14LKPLrBRuVvPvNKHQ9HvwmtKgKSH6123cr7?view=Overview&chain=mainnet)
* [Snapshot 子图](https://thegraph.com/explorer/subgraphs/3Q4vnuSqemXnSNHoiLD7wdBbGCXszUYnUbTz191kDMNn?view=Overview&chain=mainnet)
* [Aave V3 Messari 子图](https://thegraph.com/explorer/subgraphs/HB1Z2EAw4rtPRYVb2Nz8QGFLHCpym6ByBX6vbCViuE9F?view=Overview&chain=mainnet)

## 智能合约开发

智能合约通常使用 [Solidity 语言](https://soliditylang.org/) 开发。

有一些 VSCode 插件可以使使用 Solidity 开发变得更加容易。其中之一是 Juan Blanco 的 "Solidity"，你可以在
[这里](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) 找到它。

你通常也会选择一个具备测试、编译和部署能力的开发者套件：

* [Foundry](https://github.com/foundry-rs/foundry) - 快速且现代的智能合约工程师开发工具。
* [Hardhat](https://github.com/NomicFoundation/hardhat) - 可脚本化、易用且经过实战检验的 JS 智能合约开发者套件。

要从智能合约读取数据或与其交互，使用上述提到的 [客户端 SDKs](#client-implementations)。
它们帮助你生成必要的 RPC 调用来从/向区块链发送交易并交互你的
智能合约。
你可以在 [ethers.js 文档](https://docs.ethers.org/v5/api/contract/contract/) 中了解更多相关信息。

## 区块链浏览器

手动收集信息和检查存储在区块链中的数据是一项繁琐的任务。
几乎所有链都至少有一个伴随的区块浏览器，以帮助可视化地址、交易、合约等。

对于以太坊主网，我们建议使用 [Etherscan](https://etherscan.io/)。
你可以使用 Etherscan 来检查 [合约](https://etherscan.io/address/0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45#code)、交易、区块等等。

如果你正在调试一笔交易，[Tenderly](https://dashboard.tenderly.co/tx/mainnet/0xa4affe1abfaf28d1763d6c3ccda33e717462a928abca89415fc6e661dd7e0c55) 也可能是一个非常有用的工具。
在这个 Uniswap V2 路由器上的失败交易示例中，你可以很容易地看到执行为何失败以及失败的位置。

## Uniswap 开发套件

Uniswap 提供了几种 SDK，它们协同工作，使你能够轻松地与 Uniswap 协议交互
最重要的 SDK 包括：

* [sdk-core](https://github.com/Uniswap/sdk-core)：Uniswap SDKs 的核心，定义了跨所有 SDK 共享的类和类型
* [v2-sdk](https://github.com/Uniswap/v2-sdk)：用于与 Uniswap V2 协议交互的 SDK。
* [v3-sdk](https://github.com/Uniswap/v3-sdk)：用于与 Uniswap V3 协议交互的 SDK。
* [router-sdk](https://github.com/Uniswap/router-sdk)：提供了与（较旧的）SwapRouter 合约交互的抽象。
* [universal-router-sdk](https://github.com/Uniswap/universal-router-sdk)：抽象了与 Universal Router 的交互。
* [smart-order-router](https://github.com/Uniswap/smart-order-router)：搜索最有效的交易路线。
* [permit2-sdk](https://github.com/Uniswap/permit2-sdk)：简化了 JS 中与 Permit2 的交互。
* [uniswapx-sdk](https://github.com/Uniswap/uniswapx-sdk)：用于 UniswapX 协议的 SDK。

正如你已经知道的，所有与区块链的交互都是通过 RPCs 进行的。所以，如你将在指南中看到的那样，
Uniswap SDKs 需要你能够访问像 [Chainnodes](https://www.chainnodes.org) 这样的 RPC 端点。
当读取数据时，数据是从给定的 RPC 端点读取的。当你实际进行交换时，你将需要使用私钥
签署一笔交易。

我们正在持续改进 Uniswap 开发套件，敬请期待更多更新。

## 下一步

首先浏览基本指南并尝试获取一些数据并稍微与 Uniswap 生态系统互动。你甚至可以
[发送你的第一笔交换交易](./swaps/02-trading) 在本地分叉上！

尽管 Web3 中的一些概念需要跳出框框思考，但本指南应该能为你提供一个良好的开端。
你现在应该已经准备好跟随我们的其他指南了。