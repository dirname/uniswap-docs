---
id: createfiller
title: 在主网上作为填充者集成
sidebar_position: 1
---

# 作为填充者集成

作为填充者集成包括两个主要部分：定义填充执行策略和检索与执行已发现的订单。

## 1\. 定义填充执行策略

为了执行已发现的订单，填充者需要调用订单反应器的其中一个`execute`方法([源码](https://github.com/Uniswap/UniswapX/blob/v1.1.0/src/reactors/BaseReactor.sol#L31))，并向其提供要执行的订单。

最简单的填充策略被称为`直接填充者`，其中交易直接针对填充者地址中持有的代币进行。要使用此策略，填充者只需批准订单的输出代币给反应器，并从他们的地址调用`execute`或`executeBatch`。（参见[源码](https://github.com/Uniswap/UniswapX/blob/v1.1.0/src/reactors/BaseReactor.sol#L35))：

```solidity
// 执行直接填充者订单
outputToken.approve(reactor, type(uint256).max);
reactor.execute(order);
```

更复杂的填充者可以通过部署他们自己的执行器合约来实现任意复杂的策略。该合约应实现[IReactorCallback](https://github.com/Uniswap/UniswapX/blob/v1.1.0/src/interfaces/IReactorCallback.sol)接口，该接口接收一个带有输入代币的订单并为调用者获取相应数量的输出代币。它必须批准输出代币给反应器，后者再将它们转移给订单输出接收者以结算订单。执行器合约必须调用`reactor.executeWithCallback`或`reactor.executeBatchWithCallback`。它们还可以指定任意的回调数据，这些数据将在`reactorCallback`调用时传入。

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
address executor = /* 部署的执行器合约地址 */ ;
bytes fillData = /* 发送到您的执行器合约的调用数据 */;
executor.execute(order, fillData);
```

为了方便起见，我们提供了一个[示例执行器合约](https://github.com/Uniswap/UniswapX/tree/v1.1.0/src/sample-executors)，展示了填充者如何实现一种策略，即在Uniswap V3池上执行UniswapX订单。这些合约应部署到填充者希望支持的每个链上。

## 2A. 检索与执行签名的荷兰式拍卖订单

通过Uniswap用户界面创建的所有签名荷兰式拍卖订单都将通过UniswapX订单端点提供。我们有[Swagger文档](https://api.uniswap.org/v2/uniswapx/docs)，但以下是一个快速的curl示例。

```
GET https://api.uniswap.org/v2/orders?orderStatus=open&chainId=1&limit=1
```

作为轮询API的低延迟替代方案，填充者也可以申请注册Webhook并接收所有开放订单的数据流。注册详情请参阅[这里](./webhooks)。

由各个填充者自行设计其系统以寻找和执行有利可图的订单，但基本流程如下：

1. 调用`GET`请求到UniswapX订单端点的`/orders`，如上所述，以检索开放的签名订单。荷兰式拍卖订单在主网(`chainId=1`)和Arbitrum(`chainId=42161`)上可用。
2. 使用[UniswapX SDK](https://github.com/Uniswap/UniswapX-sdk/#parsing-orders)解码返回的订单。
3. 确定您想要执行的订单。
4. 向[Dutch Order Reactor](https://github.com/Uniswap/UniswapX/blob/main/src/reactors/DutchOrderReactor.sol)的[execute](https://github.com/Uniswap/UniswapX/blob/a2025e3306312fc284a29daebdcabb88b50037c2/src/reactors/BaseReactor.sol#L29)或[executeBatch](https://github.com/Uniswap/UniswapX/blob/a2025e3306312fc284a29daebdcabb88b50037c2/src/reactors/BaseReactor.sol#L37)方法发送一个新的交易，指定您想要填充的签名订单以及您的执行器合约地址。

## 2B. 检索与执行签名的限价订单
检索和执行限价订单的过程与荷兰式拍卖订单相同，只是限价订单将从[LIMIT Orders Endpoint](https://api.uniswap.org/v2/limit-orders)（完整API文档[这里](https://api.uniswap.org/v2/uniswapx/docs)）检索，并在[LIMIT Order Reactor](https://github.com/Uniswap/UniswapX/blob/main/src/reactors/LimitOrderReactor.sol)上执行。过程是：

1. 调用`GET`请求到UniswapX限价订单端点的`/limit-orders`，如上所述，以检索开放的签名订单。
2. 使用[UniswapX SDK](https://github.com/Uniswap/UniswapX-sdk/#parsing-orders)解码返回的订单。
3. 向[LIMIT Order Reactor](https://github.com/Uniswap/UniswapX/blob/main/src/reactors/LimitOrderReactor.sol)的[execute](https://github.com/Uniswap/UniswapX/blob/a2025e3306312fc284a29daebdcabb88b50037c2/src/reactors/BaseReactor.sol#L29)或[executeBatch](https://github.com/Uniswap/UniswapX/blob/a2025e3306312fc284a29daebdcabb88b50037c2/src/reactors/BaseReactor.sol#L37)方法发送一个新的交易，指定您想要填充的签名订单以及您的执行器合约地址。

对于荷兰式拍卖和限价订单，如果订单有效，它将在燃气拍卖中与其他填充者的执行尝试竞争。出于这个原因，我们建议通过像[Flashbots Protect](https://docs.flashbots.net/flashbots-protect/overview)这样的服务提交这些交易。

## 帮助链接

- [UniswapX填充者 - 公告频道](https://t.me/uniswapx_fillers)
- [UniswapX填充者 - 讨论](https://t.me/uniswapx_fillers_discussion)