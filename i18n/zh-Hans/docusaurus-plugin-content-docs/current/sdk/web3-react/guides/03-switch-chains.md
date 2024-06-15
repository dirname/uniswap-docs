---
id: switch-chains
title: 切换网络
---     

## 引言

本指南将介绍如何提示已连接到我们 dApp 的钱包使用 `web3-react` 切换网络。它基于 Uniswap 代码示例库中的 [`web3-react` 示例](https://github.com/Uniswap/examples/tree/main/web3-react)。要运行此示例，请参阅示例的 [README](https://github.com/Uniswap/examples/blob/main/web3-react/README.md)，并遵循设置说明。

:::info
如需帮助设置 `web3-react` 并与 MetaMask 钱包交互，请访问我们的 [连接至钱包](./01-connect-wallet.md) 页面！
:::


本指南的输入参数是我们希望 dApp 能够连接的网络及其 RPC URL。

在本指南结束时，我们应该能够切换连接钱包上的网络。

对于本指南，使用了以下 `web3-react` 包：

- [`@web3-react/core`](https://www.npmjs.com/package/@web3-react/core)

:::info
本指南使用的是 `web3-react` 版本 8，这是一个测试版。
:::

本指南的核心代码可以在 [connections](https://github.com/Uniswap/examples/blob/feat/web3-react/web3-react/src/libs/connections.ts) 中找到。

## 切换网络

在 [设置我们的应用](./01-connect-wallet.md) 使用 `web3-react` 以及构建 [连接和断开钱包](./02-connectors.md) 的能力后，我们现在可以继续进行网络切换。

切换网络需要两个参数：我们要切换到的 `chainId` 和当前的 `connectionType`：

```typescript reference title="定义函数" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L64
```

根据 `ConnectionType`，我们可以检索实际的连接器：

```typescript reference title="检索连接器" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L69
```

然后，根据 `ConnectionType`，我们确定如何切换网络。对于 `Network` 或 `WalletConnect` 情况，我们使用提供的 `chainId` 调用 `web3-react` 的 `activate` 函数：

```typescript reference title="为 Network 和 WalletConnect 切换网络" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L71-L74
```

其余的连接器要求我们构建一个 `AddEthereumChainParameter` 对象，并将其传递给 `web3-react` 的 `activate` 函数：

```typescript reference title="为其他连接器切换网络" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L77-L84
```

构建 `AddEthereumChainParameter` 所需的元数据在我们的常量文件中定义：
    
```typescript reference title="定义链参数" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/constants.ts#L27-L40
```

## 下一步

现在你已经知道如何支持 `web3-react` 最常见的使用案例了！敬请关注后续指南。