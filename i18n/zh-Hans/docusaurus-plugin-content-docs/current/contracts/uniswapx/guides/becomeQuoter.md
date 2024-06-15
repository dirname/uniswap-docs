---
id: becomequoter
title: 成为报价者
sidebar_position: 2
---

# 在 UniswapX 测试版期间进行报价

为了确保在测试阶段交易者能有顺畅的交换体验，Uniswap 实验室将在 UniswapX 启动后筛选报价者集合，计划在不久的将来使报价系统完全无许可化。

一旦您被 Uniswap 实验室团队批准成为报价者，请遵循以下说明完成集成。如果您尚未获得批准，请通过填写我们的[信息表单](https://uniswap.typeform.com/to/UiPDKgY6)加入等待名单。

# 与 UniswapX RFQ 集成

要作为报价者参与，填充者必须托管一个服务，该服务遵循 UniswapX RFQ API 模式（如下所示），并对请求提供报价。对于给定订单提交最佳报价的 RFQ 参与者将在拍卖的_独家期限_内获得使用其执行器独家填充订单的权利。

## 性能期望值

在 UniswapX 测试版期间，报价者将被期望保持以下标准，以确保公平的拍卖流程和为交换者提供最佳体验。任何低于这些期望的报价者都可能面临暂停或从 UniswapX 测试版中移除：

1. **500毫秒响应时间：** 当报价者收到报价请求时，其服务器应在 500 毫秒内响应，无论是提供交易的报价还是返回 204 响应代码。
2. **滚动填充率 90%：** 当报价者赢得拍卖，即其合约地址出现在订单的 `exclusiveFiller` 字段中，他们必须至少 90% 的时间内填充该订单。我们将基于滚动的 7 天周期来衡量这一点。

## RFQ API 模式

为了成功接收并响应 UniswapX RFQ 报价，您必须拥有一个公开可访问的端点，该端点接收传入的报价请求，并通过实现以下模式来响应报价：

请求：

```jsx
method: POST
content-type: application/json
data: {
    requestId: "string uuid - 交换请求的唯一标识符",
    tokenInChainId: "number - `tokenIn` 的 chainId",
    tokenOutChainId: "number - `tokenOut` 的 chainId",
    swapper: "string address - 将签署订单的交易者的 EOA 地址",
    tokenIn: "string address - 交易者将提供的 ERC20 代币",
    tokenOut: "string address - 交易者将接收的 ERC20 代币",
    amount: "string number - 如果交易类型是确切输入，则这是 `tokenIn` 用户想要交换的数量，否则这是用户想要接收的 tokenOut 数量",
    type: "number - 这是 `EXACT_INPUT` 或 `EXACT_OUTPUT`",
    quoteId: "string uuid - 集成商发送回的报价的唯一标识符"
}
```

响应（状态 200 - OK）：

```jsx
{
    chainId: "number - 报价代币的 chainId",
    amountIn: "string number - 如果请求类型是确切输入，则此字段是报价请求中的 `amount`，否则这是提供的报价",
    amountOut: "string number - 如果请求类型是确切输出，则此字段是报价请求中的 `amount`，否则这是提供的报价",
    filler: "string address - 您希望对此订单具有最后一眼独家权限的执行器地址"

    { ... 下列字段应该从报价请求中回显 ...},
    requestId: "string uuid - 此报价请求的唯一标识符",
    swapper: "string address - 将签署订单的交易者的 EOA 地址",
    tokenIn: "string address - 交易者将提供的 ERC20 代币",
    tokenOut: "string address - 交易者将接收的 ERC20 代币",
    quoteId: "string uuid - 集成商发送回的报价的唯一标识符"
}
```

注册端点的响应存在延迟要求。目前设置为 500 毫秒，但可能会更改。如果您不希望响应报价请求，您必须返回一个空响应，状态代码为 `204`。

# 转移到生产环境的要求

所有新的报价实例都将从我们[Beta 环境](https://beta.api.uniswap.org/v2/uniswapx/docs)开始，他们需要在那里展示至少 **5 个有效的独家 RFQ 填充** 才能转移到生产环境。[Beta 环境](https://beta.api.uniswap.org/v2/uniswapx/docs)提供有效的主网订单，应该使用生产合约进行填充，只是它不会从任何生产接口接收流量。

为了开始在 Beta 中测试，报价者将需要：

1. **提供您的报价服务器 URL** 给您的 Uniswap 实验室联系人，以及您用于填充的合约地址。我们建议这与您计划在生产中运行的报价基础设施相同。
2. **（可选）提供通知 webhook URL** 给您的 Uniswap 实验室联系人。我们将设置对获胜订单的通知，在那里提供服务。或者，您可以轮询[Beta /orders Endpoint](https://beta.api.uniswap.org/v2/uniswapx/docs)获取获胜订单。
3. **开始通过 UniswapX CLI 向 Beta 发送报价和订单**。 
4. **发送 5 个交易的哈希值**，证明集成能够在独家期间填充；具体来说是在 [decayStartTime](https://github.com/Uniswap/UniswapX/blob/abd7a0b080148fc42ef7c86536d14de714eec4c7/src/lib/ExclusiveDutchOrderLib.sol#L12) 之前。

Uniswap 实验室团队将审查这 5 笔交易，确认它们是成功的独家填充。一旦确认，报价者的设置将被提升到生产环境，并开始接收流量。