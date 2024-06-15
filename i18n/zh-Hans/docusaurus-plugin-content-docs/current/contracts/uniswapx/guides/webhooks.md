---
id: webhooks
title: Webhook 支持
sidebar_position: 3
---

# 签名订单的 Webhook 通知

虽然可以通过 UniswapX API 获取所有签名的未完成订单，但我们提供了注册 Webhook 通知的选项以降低延迟。填充者可以注册一个端点，并接收与他们所设过滤器匹配的所有新发布订单的通知。

## 通知

订单通知将通过 HTTP 请求发送到已注册的端点，具体格式如下：

```jsx
方法：POST
内容类型：application/json
数据：{
    orderHash: "订单的哈希标识符",
    createdAt: "订单发布的时间戳",
    signature: "包含在订单执行中的交换者签名",
    orderStatus: "当前订单状态（接收到通知时应始终为 `open`）",
    encodedOrder: "要包含在订单执行中的 ABI 编码订单。这可以使用 Uniswapx-SDK（https://github.com/uniswap/uniswapx-sdk）进行解码，以验证订单字段和签名",
    chainId: "订单来源及必须结算的链 ID",
    filler?: "如果此订单是由 RFQ 参与者报价的，则这是他们的填充者地址",
    quoteId?: "如果此订单是由 RFQ 参与者报价的，则这是报价请求中的 requestId",
    swapper?: "交换者地址",
    type?: "订单类型（例如 'Dutch_V2'、'Limit' 等）"
}
```

## 过滤
订单可以通过各种字段进行过滤。对于报价者而言，最常见的用例是根据自己的地址进行过滤，以便立即接收到成功竞标的通知。或者，Webhook 可以配置为向您的端点发送所有未完成订单。

## 请求 Webhook
要注册您的 Webhook 端点，请在 [UniswapX Fillers - 讨论](https://t.me/uniswapx_fillers_discussion) 中联系我们。