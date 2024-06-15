---
id: iframe-integration
title: Iframe 集成
---

Uniswap 可以在其他网站中作为 Iframe 使用。Iframe 显示的是 app.uniswap.org 网站的精确版本，并且可以拥有自定义预填充设置。

# 你可能需要此功能的原因

直接将 Uniswap 网站集成到你的 Web 应用程序中，出于多种原因可能是有用的。

v1.app.uniswap.org 允许用户购买、出售、发送或为 ERC20 代币提供流动性。如果你的应用程序围绕这些 ERC20 代币提供服务，那么 Iframe 集成可能会很有用。（例如，用户可以通过你网站上的 Uniswap Iframe 购买 DAI，然后允许用户在你的网站上借出该 DAI）。

如果应用程序要求用户获取某种代币才能使用某些服务，这也可能很有用（例如，允许用户购买“REP”代币，以便他们可以在 Augur Dapp 上参与预测市场）。

# Iframe 与自定义 UI

Iframe 集成的一个好处是，你的站点会自动跟上对 v1.app.uniswap.org 站点所做的任何改进/添加。初始集成设置完成后，无需做进一步的工作来拉取更新，因为随着交易所站点随时间更新，更新会自动应用。

# 实时示例

在 FOAM 网站上可以找到 Iframe 集成的示例：[https://map.foam.space/](https://map.foam.space/#/at/?lng=-74.0045300&lat=40.6771800&zoom=5.00)

要查看 Iframe，请点击右上角的下拉菜单，然后点击“获取泡沫”。

# 添加到你的网站

要在你的网站内包含 Uniswap Iframe，只需在你的网站代码中添加 Iframe 元素并链接到 Uniswap 交易所。

链接到 ETH <-> DAI 交换页面看起来可能像这样。要链接到你选择的代币，只需将“outputCurrency”后面的地址替换为你想要链接的代币地址即可。

```text
<iframe
  src="https://app.uniswap.org/#/swap?use=v1?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
  height="660px"
  width="100%"
  style="
    border: 0;
    margin: 0 auto;
    display: block;
    border-radius: 10px;
    max-width: 600px;
    min-width: 300px;
  "
  id="myId"
/>
```

你可以使用 URL 查询参数来自定义选定页面、选定的自定义代币等。请参阅 [自定义链接](custom-linking)。