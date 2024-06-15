---
id: connect-wallet
title: 连接到钱包
---     

## 引言

本指南将介绍如何使用 `web3-react` 连接钱包。它基于 Uniswap 代码示例 [仓库](https://github.com/Uniswap/examples) 中的 [`web3-react` 示例](https://github.com/Uniswap/examples/tree/main/web3-react)。要运行此示例，请查阅示例的 [README](https://github.com/Uniswap/examples/blob/main/web3-react/README.md)，并遵循设置说明。

在本示例中，我们将引导您设置 `web3-react` 并使用 [@web3-react/metamask](https://www.npmjs.com/package/@web3-react/metamask) 连接最受欢迎的浏览器内置连接器 [MetaMask](https://metamask.io/)。

本指南的输入参数是我们希望应用程序能够连接的链及其 RPC URL。

本指南将**涵盖**：

1. 创建 `web3-react` 的 `Web3ReactProvider`
2. 构建 `web3-react` 的 `InjectedConnector`
3. 将应用与连接器进行连接和断开连接

到本指南结束时，您应该能够将您的 dApp 连接到 MetaMask 连接器，并从其断开连接。

对于本指南，使用了以下 `web3-react` 包：

- [`@web3-react/core`](https://www.npmjs.com/package/@web3-react/core)
- [`@web3-react/types`](https://www.npmjs.com/package/@web3-react/types)
- [`@web3-react/metamask`](https://www.npmjs.com/package/@web3-react/metamask)

:::info
本指南使用 `web3-react` 版本 8，这是一个测试版。
:::

遵循示例的 [README](https://github.com/Uniswap/examples/blob/main/web3-react/README.md) 将自动安装这些。

本指南的核心代码可以在 [Web3ContextProvider](https://github.com/Uniswap/examples/blob/main/web3-react/src/libs/components/Web3ContextProvider.tsx) 和 [InjectedConnector](https://github.com/Uniswap/examples/blob/main/web3-react/src/libs/injected.ts) 中找到。

## 创建 `Web3ReactProvider`

为了能够与 `web3-react` 提供的方法进行交互，我们首先需要设置一个 `Web3ReactProvider` 并将其包裹我们的应用。`web3-react` 使用 React 的 [上下文(Context)](https://reactjs.org/docs/context.html) 来允许我们使用暴露的钩子(hooks)，而无需额外的配置。

开始时，我们创建一个名为 `Web3ContextProvider` 的 React 组件，以便封装配置 `Web3ReactProvider` 的逻辑。在这个组件中，我们首先从 [@web3-react/core](https://www.npmjs.com/package/@web3-react/core) 导入 `Web3ReactProvider`。

该组件只接收一个属性 `children`，它将为其提供 `上下文(Context)`：

```typescript reference title="定义 Web3React 组件" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/Web3ContextProvider.tsx#L24
```

然后，我们通过渲染导入的 `Web3ReactProvider` 并在其内部包含 `children` 来实现该组件：


```typescript reference title="实现组件" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/Web3ContextProvider.tsx#L30-L34
```

请注意，我们将我们的 `连接(Connections)` 列表映射到连接器 `connector` 和连接的 `hooks` 的 *元组*。连接的第三个元素指的是 `Connection` 被建立的 [类型](https://github.com/Uniswap/examples/blob/06980acc8f6d484b719d2c60f5bfe9d766cb95d6/web3-react/src/libs/connections.ts#L16)，稍后我们将使用它来跟踪当前连接的钱包。

最后，创建了 `Web3ContextProvider` 组件后，我们可以导航到我们的 [index 文件](https://github.com/Uniswap/examples/blob/feat/web3-react/web3-react/src/index.tsx) 并将其包裹整个应用：

```typescript reference title="用 web3 上下文包裹我们的应用" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/7ac3853bc465aecc428a32be584bbeb833b0a63c/web3-react/src/index.tsx#L16-L22
```

## 构建 Injected Connector

我们提供给 `Web3ReactProvider` 组件的唯一参数是优先级连接器列表，声明为 `PRIORITIZED_CONNECTORS`。优先级排序是指当多个连接器连接到我们的应用时，我们希望哪个连接器处于活动状态。该列表在我们的连接器模块中定义：
```typescript reference title="创建优先级 Connectors 列表" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L33-L39
```

这些连接器中的每一个都存在于自己的文件中，它们都遵循类似的设置模式。

列表中的一个连接器示例是 `InjectedConnector`，它支持将 *以太坊提供者(Ethereum Provider)* 注入浏览器窗口的钱包。最著名的注入连接器示例是 *MetaMask* 浏览器扩展。要设置它，我们从 [core]((https://www.npmjs.com/package/@web3-react/core)) 导入 `initializeConnector` 函数，并从 [metamask]((https://www.npmjs.com/package/@web3-react/core)) 导入 `MetaMask` 类型：

```typescript reference title="导入 Connector 依赖项" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/856dbb002e7f38120554ef226f4309c96ce6ea79/web3-react/src/libs/injected.ts#L1-L2
```

然后，我们利用带有 `MetaMask` 作为类型参数的模板化 `initializeConnector` 函数：

```typescript reference title="初始化 MetaMask 连接器" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/injected.ts#L7-L9
```

通过将 `MetaMask` 作为类型参数传递，我们定义了函数所需的输入参数。在这种情况下，我们需要传递的唯一参数是一个 `Metamask` 的实例，它接收 `actions` 和 `onError` 参数。第一个参数定义了 `web3-react` 对于连接器在其本地存储上执行的操作（这通常可以不加修改地传递），而第二个参数是在发生错误时调用的回调。

该函数的返回类型是一个初始化的 `Connector` 和我们可以在其上使用的 `Hooks` 的元组。使用这个元组，我们创建了一个 `Connection` 类型的实例，通过设置 `type` 属性为 `INJECTED`：


```typescript reference title="创建连接实例" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/856dbb002e7f38120554ef226f4309c96ce6ea79/web3-react/src/libs/injected.ts#L16-L20
```

最后，我们返回我们创建的 `Connection` 实例，它被添加到优先级连接器列表中。

:::info
有关创建此示例中其余受支持连接器的帮助，请访问我们的 [连接器](./connectors.md) 页面！
:::


## 将应用连接到连接器并断开连接

构建了 `InjectedConnector` 后，我们现在可以在上下文中使用它，使我们的应用能够使用该连接器：

```typescript reference title="创建 Option 组件" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/Option.tsx#L5-L11
```

该组件接收 5 个参数：
- `isEnabled` 确定连接器是否有资格被激活
- `isConnected` 确定连接器是否当前处于活动状态
- `connectionType` 确定 `ConnectionType`
- `onActivate` 在组件已建立连接时被调用
- `onDeactivate` 在组件已断开连接时被调用

在 *MetaMask* 的情况下，当声明 `InjectedConnector` 时，我们传递连接器特定的参数：

```typescript reference title="创建注入连接器" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/ConnectionOptions.tsx#L26-L32
```

然后，在 `Option` 的 `html` 部分，我们可以确定是否要禁用当前 `Option` 的操作按钮，以及单击该按钮是否会连接或断开连接器：

```typescript reference title="组件用户界面" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/components/Option.tsx#L38-L42
```

最后，我们有足够的信息来确定单击按钮时应采取什么行动。在点击触发连接的情况下：

```typescript reference title="连接到 Connector" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/components/Option.tsx#L38-L42
```

要连接我们的钱包，我们只需调用 `tryActivateConnector` 函数并传入 `InjectedConnector`。然后，我们调用 `onActivate` 回调，这会使 `InjectedConnector` 成为我们应用状态中的活动连接器。

`tryActivateConnector` 将我们想要激活的连接器作为其参数，并尝试在它上调用 `activate`。如果此激活成功，它会返回新的 `ConnectionType`：

```typescript reference title="tryActivateConnector 的实现" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/connections.ts#L90-L92
```


在点击触发断开连接的情况下：

```typescript reference title="从 Connector 断开连接" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/8c0e36ca8d2ba4718af944094191f39da62a9c5c/web3-react/src/libs/components/Option.tsx#L29-L36
```


要断开连接，我们只需调用 `tryDeactivateConnector` 并传入我们之前创建的 `InjectedConnector`。然后，我们调用 `onDeactivate` 回调，这会将 `InjectedConnector` 从我们应用状态中的当前活动连接器中移除。

`tryDeactivateConnector` 将我们想要停用的连接器作为其参数，并尝试在它上调用 `deactivate`。如果此停用成功，它通过调用 `resetState` 重置连接器的状态并返回 `null`：

```typescript reference title="tryDeactivateConnector 的实现" referenceLinkText="在 Github 上查看" customStyling
https://github.com/Uniswap/examples/blob/81ec93e97b0afded621e177fe5f34fc9f98f80b0/web3-react/src/libs/connections.ts#L98-L100
```

## 下一步

既然我们已经介绍了如何连接和断开 `InjectedConnector`，接下来我们将学习如何从 `web3-react` 支持的所有不同类型的连接器 [连接和断开](./02-connectors.md)。