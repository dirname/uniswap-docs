---
id: connectors
title: 支持的连接器
---     

## 引言

本指南将涵盖如何将我们的 dApp 连接到 `web3-react` 支持的所有不同连接器。它基于 [`web3-react` 示例](https://github.com/Uniswap/examples/tree/main/web3-react)，可以在 Uniswap 代码示例 [仓库](https://github.com/Uniswap/examples) 中找到。要运行此示例，请查看示例的 [README](https://github.com/Uniswap/examples/blob/main/web3-react/README.md) 并遵循设置说明。

在本示例中，我们将覆盖以下连接器与 dApp 的连接：
- Coinbase 钱包
- WalletConnect 钱包
- 网络
- Gnosis 安全


:::info
有关设置 `web3-react` 和与 MetaMask 钱包交互的帮助，请访问我们的 [连接到钱包](./01-connect-wallet.md) 页面！
:::


本指南的输入参数是我们希望 dApp 能够连接的链及其 RPC URL。

该指南将 **涵盖**：

1. 构建 Coinbase 钱包连接器
2. 构建 WalletConnect 钱包连接器
3. 构建网络连接器
4. 构建 Gnosis 安全连接器


完成本指南后，我们应该能够连接和断开与上述列出的不同连接器的应用程序。

对于本指南，使用了以下 `web3-react` 包：

- [`@web3-react/core`](https://www.npmjs.com/package/@web3-react/core)
- [`@web3-react/types`](https://www.npmjs.com/package/@web3-react/types)
- [`@web3-react/coinbase-wallet`](https://www.npmjs.com/package/@web3-react/coinbase-wallet)
- [`@web3-react/walletconnect`](https://www.npmjs.com/package/@web3-react/walletconnect)
- [`@web3-react/network`](https://www.npmjs.com/package/@web3-react/network)
- [`@web3-react/gnosis-safe`](https://www.npmjs.com/package/@web3-react/gnosis-safe)

:::info
本指南使用 `web3-react` 版本 8，这是一个测试版。
:::

本指南的核心代码可以在我们 [示例仓库](https://github.com/Uniswap/examples/tree/main/web3-react) 的顶级下找到，位于每个连接器的名称下。例如，Coinbase 钱包连接器的代码可以在 [coinbase 文件](https://github.com/Uniswap/examples/blob/main/web3-react/src/libs/coinbase.ts) 中找到。

## 构建 Coinbase 钱包连接器

我们在 [提供的](./01-connect-wallet.md/#building-an-injected-connector)优先连接器列表中的第二个连接器是 *Coinbase 钱包* 连接器：

```typescript reference title="创建优先级连接器列表" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L33-L39
```

为了连接到 *Coinbase 钱包* 连接器，我们首先需要安装 [`@web3-react/coinbase-wallet`](https://www.npmjs.com/package/@web3-react/coinbase-wallet) 以及 [`@coinbase/wallet-sdk`](https://github.com/coinbase/coinbase-wallet-sdk)。安装了这些包后，我们可以从 `@web3-react/coinbase-wallet` 导入 `CoinbaseWallet` 类，以及从 `@web3-react/core` 包导入 `initializeConnector` 函数：

```typescript reference title="导入 Coinbase 钱包连接器" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/coinbase.ts#L1-L2
```
我们现在可以构建连接器，提供所需的参数：

```typescript reference title="初始化 Coinbase 钱包连接器" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/coinbase.ts#L8-L19
```

我们传递 `CoinbaseWallet` 作为 `initializeConnector` 的模板参数类型参数。与 `InjectedConnector` 情况类似，`CoinbaseWallet` 类是一个扩展 `AbstractConnector` 类的类，该类是 `@web3-react/core` 包的一部分。传递给 `initializeConnector` 的参数是一个接收 `actions` 对象的函数，并期望返回一个 `CoinbaseWallet` 实例（以匹配类型参数）。

我们通过传递 `actions` 对象、一个 `options` 对象和一个 `onError` 回调来构建新的 `CoinbaseWallet` 实例。`onError` 处理在与连接器交互过程中发生的错误，而 `options` 用于配置连接器。在我们的情况下，我们传递了 `url`、`appName` 和 `reloadOnDisconnect` 选项：`url` 是连接到的 *RPC URL*，作为示例应用程序的参数提供；`appName` 是我们的应用程序名称；`reloadOnDisconnect` 是一个 `boolean`，表示当用户从钱包断开连接时应用程序是否应重新加载。

构建连接器后，我们使用其两种返回类型，即 `Connector` 及其相应的钩子，并通过将连接的类型设置为 Coinbase 钱包来构建 `Connection` 对象：

```typescript reference title="构建 Coinbase 钱包连接" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/coinbase.ts#L20-L24
```

构建了连接器后，剩下的就是构建用户界面并将其提供给我们的 [`ConnectionOptions`](https://github.com/Uniswap/examples/blob/feat/web3-react/web3-react/src/libs/components/ConnectionOptions.tsx) 组件，就像我们对 `InjectedConnector` 所做的一样：

```typescript reference title="构建 Coinbase 钱包组件" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/ConnectionOptions.tsx#L39-L46
```
## 构建 WalletConnect 钱包连接器

我们在提供给 [`Web3ReactProvider`](https://github.com/Uniswap/examples/blob/feat/web3-react/web3-react/src/libs/components/Web3ContextProvider.tsx) 的优先连接器列表中的第三个连接器是 WalletConnect 钱包连接器。

为了连接到 WalletConnect 钱包连接器，我们首先需要安装 [`@web3-react/walletconnect`](https://www.npmjs.com/package/@web3-react/walletconnect) 以及 [`@walletconnect/ethereum-provider`](https://www.npmjs.com/package/@walletconnect/ethereum-provider)。安装了这些包后，我们可以从 `@web3-react/walletconnect` 导入 `WalletConnect` 类，以及从 `@web3-react/core` 包导入 `initializeConnector` 函数：

```typescript reference title="导入 WalletConnect 钱包连接器" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/wallet-connect.ts#L1-L2
```
我们现在可以构建连接器，提供所需的参数：

```typescript reference title="初始化 WalletConnect 钱包连接器" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/wallet-connect.ts#L8-L17
```

与 Coinbase 钱包连接器的主要区别在于 `WalletConnect` 类实例化所需参数的差异。`web3-react` 知道这个区别，因为我们向 `initializeConnector` 传递了类型参数 `WalletConnect`，从而特化了 `AbstractConnector` 的类型。在这种情况下，类接收三个参数，包括与 Coinbase 钱包连接器案例中提供的相同的 `actions` 和 `onError`。

区别在于第二个参数，它是一个 `options` 对象。在这种情况下，我们正在传递 `rpc` 参数，该参数是一个对象，将链ID映射到要连接的RPC URL。我们已经在我们的 [`constants`](https://github.com/Uniswap/examples/blob/feat/web3-react/web3-react/src/libs/constants.ts) 文件中使用示例参数创建了这个 [映射](https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/constants.ts#L11)。我们正在传递的另一个选项是 `qrcode`，这是一个 `boolean`，指示浏览器中是否应显示二维码。在我们的情况下，我们正在传递 `true`，因为我们想显示二维码。

构建了连接器后，我们只需要构建用户界面以启用用户与连接器的交互，并将其提供给我们的 `ConnectionOptions`：
    
```typescript reference title="构建 WalletConnect 钱包组件" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/ConnectionOptions.tsx#L49-L56
```
## 构建网络连接器

*网络连接器* 和 *Gnosis 安全连接器* 是我们不通过用户界面公开的两个连接器，而是通过编程方式连接到它们。与之前的 *连接器* 不同，这些连接器没有为用户提供任何预构建的交互界面。我们尝试通过一个钩子在我们的 [`Web3ContextProvider`](https://github.com/Uniswap/examples/blob/feat/web3-react/web3-react/src/libs/components/Web3ContextProvider.tsx) 组件中 **急切地** 连接到它们：
    
```typescript reference title="急切连接的钩子" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/Web3ContextProvider.tsx#L9-L13
```

`useEagerlyConnect` 钩子在 `Web3ContextProvider` 组件中调用，并尝试连接到网络连接器和 Gnosis 安全连接器。钩子被称为 **急切地**，因为它在组件首次渲染时作为 [React 效果](https://reactjs.org/docs/hooks-effect.html) 在组件体中调用。在钩子实现中，我们尝试调用连接器上的 `web3-react` 的 `connectEagerly` 函数，如果不存在则调用 `activate` 否则。`connectEagerly` 函数尝试将我们的应用连接到连接器，并在不成功时 **静默失败**：

```typescript reference title="急切连接" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/hooks.ts#L15-L19
```

在急切连接之前，我们首先需要初始化连接器。我们开始构建网络连接器，首先需要安装 [`@web3-react/network`](https://www.npmjs.com/package/@web3-react/network)，并从中导入 `Network` 类。请注意，此连接不需要除了其 `web3-react` 包之外的任何包即可运行。我们还需要从 `@web3-react/core` 导入 `initializeConnector` 函数：

```typescript reference title="导入网络连接器" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/network.ts#L1-L2
```
我们现在可以构建连接器，提供所需的参数：

```typescript reference title="初始化网络连接器" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/network.ts#L8-L15
```

与其他连接器的主要区别在于 `Network` 类实例化所需参数的差异。`web3-react` 知道这个区别，因为我们向 `initializeConnector` 传递了类型参数 `Network`，从而特化了 `AbstractConnector` 的类型。在这种情况下，类接收 `actions`，这与在其他连接器中提供的相同；`urlMap`，这是一个将链ID映射到要连接的RPC URL的对象，我们已经在我们的 [`constants`](https://github.com/Uniswap/examples/blob/feat/web3-react/web3-react/src/libs/constants.ts) 文件中创建；和 `defaultChainId`，这是默认连接的链ID。

构建连接器后，我们可以通过向它提供 `initializeConnector` 函数的返回值和 `Network` 类来创建 `Connection` 实例：

```typescript reference title="创建网络连接" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/network.ts#L16-L20
```
剩下的就是返回构造的 `Connection` 实例。

## 构建 Gnosis 安全连接器

与网络连接器类似，我们构建 Gnosis 安全连接器。我们首先安装 [`@web3-react/gnosis-safe`](https://www.npmjs.com/package/@web3-react/gnosis-safe)，并从中导入 `GnosisSafe` 类。我们还需要从 `@web3-react/core` 导入 `initializeConnector` 函数：

```typescript reference title="导入 Gnosis 安全连接器" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/gnosis.tsx#L1-L2
```

Gnosis 安全连接器是最简单的，因为它除了 `actions` 之外不需要任何额外的参数化：

```typescript reference title="初始化 Gnosis 安全连接器" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/gnosis.tsx#L6-L9
```

初始化连接器后，我们现在可以构建 `Connection` 实例并返回它：

```typescript reference title="创建 Gnosis 安全连接" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/gnosis.tsx#L10-L14
```

## 下一步

现在我们已经完成了所有支持的连接器类型的构建，我们将学习如何 [切换链](03-switch-chains.md)。