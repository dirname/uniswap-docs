---
id: using-the-api
title: '使用 API'
---

在本指南中，我们将创建一个 Web 界面，用于消费和显示来自 Uniswap 子图的数据。目标是提供一个快速概览，您可以在此基础上扩展以创建自己的 UI 和围绕 Uniswap 数据的分析。

可以使用许多不同的库来创建界面并连接到子图的 graphql 端点，但在本指南中，我们将使用 [React](https://reactjs.org/) 作为界面，并使用 [Apollo Client](https://www.apollographql.com/docs/react/) 来发送查询。我们还将使用 yarn 进行依赖项管理。

### 设置与安装

我们需要为应用程序创建基本框架。我们将使用 [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) 来完成此操作。我们还需要添加所需的依赖项。在命令行中导航到您的根位置并运行：

```javascript
yarn create react-app uniswap-demo
cd uniswap-demo
yarn add  apollo-client apollo-cache-inmemory apollo-link-http graphql graphql-tag @apollo/react-hooks
yarn start
```

在浏览器中，您应该看到默认的 React 应用程序正在运行。在文本编辑器中打开 `src` 目录下的 `App.js` 并将内容替换为这个精简的样板代码。我们将逐步添加内容。

```javascript
import React from 'react'
import './App.css'

function App() {
  return <div></div>
}

export default App
```

### GraphQL 客户端

我们需要设置一些中间件以便向 Uniswap 子图发出请求并接收数据。为此，我们将使用 Apollo 并创建一个 graphql 客户端来处理此操作。

1. 添加下面所示的导入，并实例化一个新的客户端。请注意，我们在这里使用了指向 Uniswap 子图的链接。

```javascript
import React from 'react'
import './App.css'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
  }),
  cache: new InMemoryCache(),
})

function App() {
  return <div></div>
}

export default App
```

2. 我们还需要添加一个上下文，以便 Apollo 可以正确处理请求。在 `index.js` 文件中，导入适当的提供者并像这样将其包裹在根目录中：

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import { ApolloProvider } from 'react-apollo'
import { client } from './App'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
```

### 编写查询

接下来，我们将构建查询并获取数据。在这个例子中，我们将获取有关 Uniswap V2 上 Dai 代币的一些数据。我们将获取当前价格和所有对中的总流动性。我们将使用 Dai 地址作为此查询中的 ID。我们还将获取 ETH 的美元价格，以帮助为 Dai 数据创建美元转换。

1. 首先，我们需要定义查询本身。我们将使用 `gql` 将查询字符串解析为 GraphQL AST 标准。将 `gql` 辅助工具导入到应用中，并使用它来创建查询。将以下内容添加到 `App.js` 文件中：

```javascript
import gql from 'graphql-tag'

const DAI_QUERY = gql`
  query tokens($tokenAddress: Bytes!) {
    tokens(where: { id: $tokenAddress }) {
      derivedETH
      totalLiquidity
    }
  }
`

const ETH_PRICE_QUERY = gql`
  query ethPrice {
    bundle(id: "1") {
      ethPrice
    }
  }
`
```

我们使用 `1` 作为 bundle 的 id，因为子图中只有一个硬编码的 bundle。

### 获取数据

现在，我们准备使用这些查询从 Uniswap V2 子图获取数据。要做到这一点，我们可以使用 `useQuery` 钩子，它使用我们的客户端实例获取数据，并给我们关于请求状态的实时信息。为此，在 `App.js` 文件中添加以下内容：

```javascript
import { useQuery } from '@apollo/react-hooks'

const { loading, error, data: ethPriceData } = useQuery(ETH_PRICE_QUERY)
const {
  loading: daiLoading,
  error: daiError,
  data: daiData,
} = useQuery(DAI_QUERY, {
  variables: {
    tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
  },
})
```

请注意，我们正在使用 Dai 代币地址来获取有关 Dai 的数据。

### 格式化响应

现在我们有了数据，我们可以格式化它并在 UI 中显示。首先，我们解析返回数据以获取我们实际想要的数据。然后，我们将使用它来获取 Dai 的美元价格。最后，我们将把这些数据插入到 UI 本身。

这些查询将为每个查询返回一个响应对象。在每一个中，我们对在查询定义中定义的根字段感兴趣。对于 `daiData` 响应，我们将其定义为 `tokens`，而对于 `ethPriceData` 查询，我们将其定义为 `ethPrice`。在每一个中，我们将得到一个结果数组。因为我们只查询单个实体，所以我们将引用数据数组中的 `0` 索引。

在 `App.js` 文件中添加以下行来解析响应：

```javascript
const daiPriceInEth = daiData && daiData.tokens[0].derivedETH
const daiTotalLiquidity = daiData && daiData.tokens[0].totalLiquidity
const ethPriceInUSD = ethPriceData && ethPriceData.bundles[0].ethPrice
```

### 在 UI 中显示

最后，我们可以使用解析后的响应数据填充 UI。我们将分两步进行。

1. 首先，我们将创建加载状态。要检测查询是否仍在等待响应，我们可以引用已经定义的加载变量。我们将添加两个加载状态，一个用于 Dai 价格，另一个用于 Dai 总流动性。这些可能会快速闪烁，因为查询时间很快。

2. 使用加载数据填充。一旦检测到查询已停止加载，我们可以用真实数据填充 UI。

为此，在 `App.js` 文件的返回函数中添加以下行：

```javascript
return (
  <div>
    <div>
      Dai 价格：{' '}
      {ethLoading || daiLoading
        ? '正在加载代币数据...'
        : '$' +
          // 将响应解析为浮点数并固定为两位小数
          (parseFloat(daiPriceInEth) * parseFloat(ethPriceInUSD)).toFixed(2)}
    </div>
    <div>
      Dai 总流动性：{' '}
      {daiLoading
        ? '正在加载代币数据...'
        : // 显示分布在所有池中的 DAI 总量
          parseFloat(daiTotalLiquidity).toFixed(0)}
    </div>
  </div>
)
```

### 下一步

这应该渲染一个非常基础的页面，其中包含关于 Uniswap 内部 Dai 代币的这两个统计数据。这是使用 Uniswap 子图可以做的一个非常基础的例子，我们鼓励您构建更复杂和有趣的工具！

您可以访问我们的 [分析站点](https://uniswap.info/) 查看一个更高级的分析页面，或者访问 [GitHub](https://github.com/Uniswap/uniswap-info) 查看使用 Uniswap 子图创建 UI 的更多详细示例。

### 回顾

最终，您的 `App.js` 文件应如下所示：

```javascript
import React, { useEffect } from 'react'
import './App.css'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
  }),
  fetchOptions: {
    mode: 'no-cors',
  },
  cache: new InMemoryCache(),
})

const DAI_QUERY = gql`
  query tokens($tokenAddress: Bytes!) {
    tokens(where: { id: $tokenAddress }) {
      derivedETH
      totalLiquidity
    }
  }
`

const ETH_PRICE_QUERY = gql`
  query bundles {
    bundles(where: { id: "1" }) {
      ethPrice
    }
  }
`

function App() {
  const { loading: ethLoading, data: ethPriceData } = useQuery(ETH_PRICE_QUERY)
  const { loading: daiLoading, data: daiData } = useQuery(DAI_QUERY, {
    variables: {
      tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
  })

  const daiPriceInEth = daiData && daiData.tokens[0].derivedETH
  const daiTotalLiquidity = daiData && daiData.tokens[0].totalLiquidity
  const ethPriceInUSD = ethPriceData && ethPriceData.bundles[0].ethPrice

  return (
    <div>
      <div>
        Dai 价格：{' '}
        {ethLoading || daiLoading
          ? '正在加载代币数据...'
          : '$' +
            // 将响应解析为浮点数并固定为两位小数
            (parseFloat(daiPriceInEth) * parseFloat(ethPriceInUSD)).toFixed(2)}
      </div>
      <div>
        Dai 总流动性：{' '}
        {daiLoading
          ? '正在加载代币数据...'
          : // 显示分布在所有池中的 DAI 总量
            parseFloat(daiTotalLiquidity).toFixed(0)}
      </div>
    </div>
  )
}

export default App
```