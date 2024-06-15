---
id: token-listing
title: 代币列表
---

您感兴趣的代币可能没有包含在 [https://app.uniswap.org/#/swap?use=v1](https://app.uniswap.org/#/swap?use=v1) 的下拉菜单中，但是所有已经部署了Uniswap交易所的代币在前端都是支持的。

有三种方式可以与尚未列入默认列表的代币进行交互。

## 1. 将代币地址粘贴到搜索框中。

如果一个代币没有包含在列表中，尝试将代币地址粘贴到搜索框中。它会填充下拉菜单，显示出你正在寻找的代币。

## 2. 自定义链接

[https://app.uniswap.org/#/swap?use=v1](https://app.uniswap.org/#/swap?use=v1) 支持对所有具有Uniswap交易所的代币进行自定义链接。有关如何链接的详细信息，请参阅 [自定义链接](custom-linking)。

例如，要填充输出代币字段中的未列出代币，我们可以在URL中指定outputCurrency，并像这样传递代币的地址：

`https://app.uniswap.org/#/swap?use=v1?outputCurrency=0xfA3E941D1F6B7b10eD84A0C211bfA8aeE907965e`

## 代币详情和资产

代币信息（包括小数位数、符号、名称等）直接从代币合约中提取。Logo图像来自TrustWallet。如果你想更新你的代币Logo，请向TrustWallet资产仓库提交请求 [https://github.com/trustwallet/assets](https://github.com/trustwallet/assets)。