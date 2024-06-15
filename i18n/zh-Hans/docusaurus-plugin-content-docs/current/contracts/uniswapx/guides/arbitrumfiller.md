---
id: arbitrumfiller
title: Arbitrum 预览版
sidebar_position: 4
---

# Arbitrum 预览版概览
自 2024 年 6 月 19 日起，Uniswap 团队将通过 UniswapX 在 Arbitrum 上试点运行部分交易。与主网上的 UniswapX 不同，在此试点期间，这些订单将**不包含 RFQ（请求报价）部分，因此没有独家性**。

然而，在 Arbitrum 上完成订单遵循与主网上相同的两步流程：
1. 检索已签名的订单  
2. 完成订单

## 检索已签名的订单
所有通过 Uniswap 用户界面在 Arbitrum 上创建的已签名荷兰式订单都可通过 UniswapX 订单端点获取。我们有[Swagger 文档](https://api.uniswap.org/v2/uniswapx/docs)，但下面是一个快速示例的 cURL 命令。

```
GET https://api.uniswap.org/v2/orders?orderStatus=open&chainId=42161&limit=1000
```

使用[UniswapX SDK](https://github.com/Uniswap/sdks/tree/main/sdks/uniswapx-sdk)解析从端点返回的 `encodedOrder` 字段。这些 `Orders` 中的每一个都代表一个可填充的用户交易者。

作为轮询 API 的低延迟替代方案，填充者也可以申请注册 webhook 并接收所有开放订单的数据流。注册详情请参阅[这里](./webhooks)

## 完成订单
为了执行发现的订单，填充者需要调用从检索到的 `encodedOrder` 主体中指定的 Reactor 的 [execute](https://github.com/Uniswap/UniswapX/blob/main/src/reactors/BaseReactor.sol#L31) 方法。目前，Uniswap 界面使用的 Reactor 位于：

[0x1bd1aAdc9E230626C44a139d7E70d842749351eb](https://arbiscan.io/address/0x1bd1aAdc9E230626C44a139d7E70d842749351eb)

在提交前，务必确认从检索到的订单中获得的地址。

最简单的填充策略被称为 `直接填充者`，其中交易直接针对填充者地址中持有的代币进行。要使用此策略，填充者只需批准订单的输出代币至 Reactor，并从他们的地址调用 `execute` 或 `executeBatch`。（参见 [源代码](https://github.com/Uniswap/UniswapX/blob/v2.0.0-deploy/src/reactors/BaseReactor.sol))：

```solidity
// 执行直接填充者订单
outputToken.approve(reactor, type(uint256).max);
reactor.execute(order);
```

更复杂的填充者可以通过部署他们自己的 Executor 合约来实现任意复杂的策略。此合约应实现 [IReactorCallback](https://github.com/Uniswap/UniswapX/blob/v2.0.0-deploy/src/interfaces/IReactorCallback.sol) 接口，该接口接收带有输入代币的订单并为调用者获取相应数量的输出代币。它必须批准输出代币给 Reactor，后者再将它们转移给订单输出接收者以结算订单。Executor 合约必须调用 `reactor.executeWithCallback` 或 `reactor.executeBatchWithCallback`。它们还可以指定任意回调数据，这些数据将在 `reactorCallback` 调用时传递。

```solidity
contract Executor {
  function execute(Order calldata order, bytes calldata callbackData) {
    reactor.executeWithCallback(order, callbackData)
  }

  function reactorCallback(ResolvedOrder[] calldata orders, bytes calldata callbackData) {
    // 在这里实现策略
  }
}

// 执行自定义填充策略
address executor = /* 已部署的 Executor 合约地址 */ ;
bytes fillData = /* 发送给您的 Executor 合约的调用数据 */;
executor.execute(order, fillData);
```

为了方便起见，我们提供了一个[示例 Executor 合约](https://github.com/Uniswap/UniswapX/blob/v2.0.0-deploy/src/sample-executors/SwapRouter02Executor.sol)，展示了填充者如何实施一种策略，即针对 Uniswap V3 池执行 UniswapX 订单。这些合约应部署到填充者希望支持的每个链上。


# 联系我们
- 若要了解最新动态，请加入我们的 [公告频道](https://t.me/uniswapx_fillers)
- 若要提问和讨论，请加入我们的 [填充者群组](https://t.me/uniswapx_fillers_discussion)