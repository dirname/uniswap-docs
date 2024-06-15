"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[3338],{2128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(83117),o=(n(67294),n(3905));const r={id:"trading",title:"Executing a Trade"},i=void 0,s={unversionedId:"sdk/v3/guides/swaps/trading",id:"sdk/v3/guides/swaps/trading",title:"Executing a Trade",description:"Introduction",source:"@site/docs/sdk/v3/guides/swaps/02-trading.md",sourceDirName:"sdk/v3/guides/swaps",slug:"/sdk/v3/guides/swaps/trading",permalink:"/uniswap-docs/en/sdk/v3/guides/swaps/trading",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/sdk/v3/guides/swaps/02-trading.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"trading",title:"Executing a Trade"},sidebar:"sdkSidebar",previous:{title:"Getting a Quote",permalink:"/uniswap-docs/en/sdk/v3/guides/swaps/quoting"},next:{title:"Routing a Swap",permalink:"/uniswap-docs/en/sdk/v3/guides/swaps/routing"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Using a wallet extension",id:"using-a-wallet-extension",level:2},{value:"Constructing a route from pool information",id:"constructing-a-route-from-pool-information",level:2},{value:"Creating a Route",id:"creating-a-route",level:2},{value:"Constructing an unchecked trade",id:"constructing-an-unchecked-trade",level:2},{value:"Executing a trade",id:"executing-a-trade",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This guide will build off our ",(0,o.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/guides/swaps/quoting"},"quoting guide")," and show how to use a quote to construct and execute a trade on the Uniswap V3 protocol. It is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/tree/main/v3-sdk/trading"},"Trading code example"),", found in the Uniswap code examples ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples"},"repository"),". To run this example, check out the guide's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/README.md"},"README")," and follow the setup instructions."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you need a briefer on the SDK and to learn more about how these guides connect to the examples repository, please visit our ",(0,o.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/guides/background"},"background")," page!"),(0,o.kt)("p",{parentName:"div"},"To get started with local development, also check out the ",(0,o.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/guides/local-development"},"local development guide"),"."))),(0,o.kt)("p",null,"In this example we will trade between two ERC20 tokens: ",(0,o.kt)("strong",{parentName:"p"},"WETH and USDC"),". The tokens, amount of input token, and the fee level can be configured as inputs."),(0,o.kt)("p",null,"The guide will ",(0,o.kt)("strong",{parentName:"p"},"cover"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Constructing a route from pool information"),(0,o.kt)("li",{parentName:"ol"},"Constructing an unchecked trade"),(0,o.kt)("li",{parentName:"ol"},"Executing a trade")),(0,o.kt)("p",null,"At the end of the guide, we should be able to create and execute a trade between any two ERC20 tokens using the example's included UI."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Included in the example application is functionality to wrap/unwrap ETH as needed to fund the example ",(0,o.kt)("inlineCode",{parentName:"p"},"WETH")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"USDC")," swap directly from an ",(0,o.kt)("inlineCode",{parentName:"p"},"ETH")," balance."))),(0,o.kt)("p",null,"For this guide, the following Uniswap packages are used:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@uniswap/v3-sdk"},(0,o.kt)("inlineCode",{parentName:"a"},"@uniswap/v3-sdk"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@uniswap/sdk-core"},(0,o.kt)("inlineCode",{parentName:"a"},"@uniswap/sdk-core")))),(0,o.kt)("p",null,"The core code of this guide can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/src/libs/trading.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"trading.ts"))),(0,o.kt)("h2",{id:"using-a-wallet-extension"},"Using a wallet extension"),(0,o.kt)("p",null,"Like in the previous guide, our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/blob/main/v3-sdk/trading"},"example")," uses a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/src/config.ts"},"config file ")," to configurate the inputs used.\nThe strucuture is similar to the quoting config, but we also have the option to select an environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ExampleConfig {\n  env: Environment\n  rpc: {\n    local: string\n    mainnet: string\n  }\n  wallet: {\n    address: string\n    privateKey: string\n  }\n  tokens: {\n    in: Token\n    amountIn: number\n    out: Token\n    poolFee: number\n  }\n}\n")),(0,o.kt)("p",null,"Per default, the env field is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment.LOCAL"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const CurrentConfig: ExampleConfig = {\n  env: Environment.LOCAL,\n  rpc: {\n    local: 'http://localhost:8545',\n    mainnet: '',\n  },\n  wallet: {\n    address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',\n    privateKey:\n      '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',\n  },\n  tokens: {\n    in: WETH_TOKEN,\n    amountIn: 1,\n    out: USDC_TOKEN,\n    poolFee: FeeAmount.MEDIUM,\n  },\n}\n")),(0,o.kt)("p",null,"In this example, we have the option to use a Wallet Extension like Metamask to sign the transactions we are sending. To do so, let's change the Environment to ",(0,o.kt)("inlineCode",{parentName:"p"},"Environment.WALLET_EXTENSION"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const CurrentConfig: ExampleConfig = {\n  env: Environment.WALLET_EXTENSION,\n  rpc: {\n    local: 'http://localhost:8545',\n  },\n  wallet: {\n    ...\n  },\n  tokens: {\n    ...\n  },\n}\n")),(0,o.kt)("p",null,"Run the example and then add the local network to your wallet browser extension, if you are using Metamask for example, follow ",(0,o.kt)("a",{parentName:"p",href:"https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC"},"this guide"),".\nYou should also import a private key to use on your local network, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80")," from Foundry's example wallets."),(0,o.kt)("p",null,"Consider checking out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/README.md"},"README")," of the example."),(0,o.kt)("p",null,"If you cannot see the Tokens traded in your wallet, you possibly have to ",(0,o.kt)("a",{parentName:"p",href:"https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask"},"import them"),"."),(0,o.kt)("h2",{id:"constructing-a-route-from-pool-information"},"Constructing a route from pool information"),(0,o.kt)("p",null,"To construct our trade, we will first create an model instance of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Pool"),". We create an ",(0,o.kt)("strong",{parentName:"p"},"ethers")," contract like in the ",(0,o.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/guides/swaps/quoting#referencing-the-pool-contract-and-fetching-metadata"},"previous guide"),".\nWe will first extract the needed metadata from the relevant pool contract. Metadata includes both constant information about the pool as well as information about its current state stored in its first slot:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"async function getPoolInfo() {\n    const [token0, token1, fee, liquidity, slot0] =\n    await Promise.all([\n        poolContract.fee(),\n        poolContract.liquidity(),\n        poolContract.slot0(),\n    ])\n\n    return {\n        fee,\n        liquidity,\n        sqrtPriceX96: slot0[0],\n        tick: slot0[1],\n    } \n}\n")),(0,o.kt)("p",null,"Before continuing, let's talk about the values we fetched here and what they represent:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fee")," is the fee that is taken from every swap that is executed on the pool in 1 per million - if the ",(0,o.kt)("inlineCode",{parentName:"li"},"fee")," value of a pool is 500, ",(0,o.kt)("inlineCode",{parentName:"li"},"500/ 1000000")," (or 0.05%) of the trade amount is taken as a fee. This fee goes to the liquidity providers of the Pool."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"liquidity")," is the amount of liquidity the Pool can use for trades at the current price."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sqrtPriceX96")," is the current Price of the pool, encoded as a ratio between ",(0,o.kt)("inlineCode",{parentName:"li"},"token0")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"token1"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tick")," is the tick at the current price of the pool.")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://uniswap.org/whitepaper-v3.pdf"},"whitepaper")," to learn more on how liquidity and ticks work in Uniswap V3."),(0,o.kt)("p",null,"You can find the full code in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/src/libs/pool.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"pool.ts")),"."),(0,o.kt)("p",null,"Using this metadata along with our inputs, we will then construct a ",(0,o.kt)("inlineCode",{parentName:"p"},"Pool"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const poolInfo = await getPoolInfo()\n\nconst pool = new Pool(\n  CurrentConfig.tokens.in,\n  CurrentConfig.tokens.out,\n  CurrentConfig.tokens.poolFee,\n  poolInfo.sqrtPriceX96.toString(),\n  poolInfo.liquidity.toString(),\n  poolInfo.tick\n)\n")),(0,o.kt)("h2",{id:"creating-a-route"},"Creating a Route"),(0,o.kt)("p",null,"With this ",(0,o.kt)("inlineCode",{parentName:"p"},"Pool"),", we can now construct a route to use in our trade. Routes represent a route over one or more pools from one Token to another. Let's imagine we have three pools:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- PoolA: USDC/ WETH\n- PoolB: USDT/ WETH\n- PoolC: USDT/ DAI\n")),(0,o.kt)("p",null,"We would like to trade from USDC to DAI, so we create a route through our 3 pools:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PoolA -> PoolB -> PoolC\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," object can find this route from an array of given pools and an input and output Token."),(0,o.kt)("p",null,"To keep it simple for this guide, we only swap over one Pool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Route } from '@uniswap/v3-sdk'\n\nconst swapRoute = new Route(\n  [pool],\n  CurrentConfig.tokens.in,\n  CurrentConfig.tokens.out\n)\n")),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"Route")," understands that ",(0,o.kt)("inlineCode",{parentName:"p"},"CurrentConfig.tokens.in")," should be traded for ",(0,o.kt)("inlineCode",{parentName:"p"},"CurrentConfig.tokens.out")," over the Array of pools ",(0,o.kt)("inlineCode",{parentName:"p"},"[pool]"),"."),(0,o.kt)("h2",{id:"constructing-an-unchecked-trade"},"Constructing an unchecked trade"),(0,o.kt)("p",null,"Once we have constructed the route object, we now need to obtain a quote for the given ",(0,o.kt)("inlineCode",{parentName:"p"},"inputAmount")," of the example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const amountOut = await getOutputQuote(swapRoute)\n")),(0,o.kt)("p",null,"As shown below, the quote is obtained using the ",(0,o.kt)("inlineCode",{parentName:"p"},"v3-sdk"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"SwapQuoter"),", in contrast to the ",(0,o.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/guides/swaps/quoting"},"previous quoting guide"),", where we directly accessed the smart contact:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwapQuoter } from '@uniswap/v3-sdk'\nimport { CurrencyAmount, TradeType } from '@uniswap/sdk-core'\n\nconst { calldata } = await SwapQuoter.quoteCallParameters(\n  swapRoute,\n  CurrencyAmount.fromRawAmount(\n    CurrentConfig.tokens.in,\n    fromReadableAmount(\n      CurrentConfig.tokens.amountIn,\n      CurrentConfig.tokens.in.decimals\n    )\n  ),\n  TradeType.EXACT_INPUT,\n  {\n    useQuoterV2: true,\n  }\n)\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SwapQuoter"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"quoteCallParameters")," function, gives us the calldata needed to make the call to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Quoter"),", and we then decode the returned quote:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const quoteCallReturnData = await provider.call({\n  to: QUOTER_CONTRACT_ADDRESS,\n  data: calldata,\n})\n\nreturn ethers.utils.defaultAbiCoder.decode(['uint256'], quoteCallReturnData)\n")),(0,o.kt)("p",null,"With the quote and the route, we can now construct a trade using the route in addition to the output amount from a quote based on our input.\nBecause we already know the expected output of our Trade, we do not have to check it again. We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"uncheckedTrade")," function to create our Trade:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Trade } from 'uniswap/v3-sdk'\nimport { CurrencyAmount, TradeType } from '@uniswap/sdk-core'\nimport JSBI from 'jsbi'\n\nconst uncheckedTrade = Trade.createUncheckedTrade({\n  route: swapRoute,\n  inputAmount: CurrencyAmount.fromRawAmount(\n    CurrentConfig.tokens.in,\n    fromReadableAmount(\n      CurrentConfig.tokens.amountIn,\n      CurrentConfig.tokens.in.decimals\n    )\n  ),\n  outputAmount: CurrencyAmount.fromRawAmount(\n    CurrentConfig.tokens.out,\n    JSBI.BigInt(amountOut)\n  ),\n  tradeType: TradeType.EXACT_INPUT,\n})\n")),(0,o.kt)("p",null,"This example uses an exact input trade, but we can also construct a trade using exact output assuming we adapt our quoting code accordingly."),(0,o.kt)("h2",{id:"executing-a-trade"},"Executing a trade"),(0,o.kt)("p",null,"Once we have created a trade, we can now execute this trade with our provider. First, we must give the ",(0,o.kt)("inlineCode",{parentName:"p"},"SwapRouter")," approval to spend our tokens for us:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const tokenApproval = await getTokenTransferApproval(CurrentConfig.tokens.in)\n")),(0,o.kt)("p",null,"You can find the approval function ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/blob/main/v3-sdk/trading/src/libs/trading.ts#L151"},"here"),".\nWe will use this function or similar implementations in most guides."),(0,o.kt)("p",null,"Then, we set our options that define how much time and slippage can occur in our execution as well as the address to use for our wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwapOptions } from '@uniswap/v3-sdk'\nimport { Percent } from '@uniswap/sdk-core'\n\nconst options: SwapOptions = {\n  slippageTolerance: new Percent(50, 10_000), // 50 bips, or 0.50%\n  deadline: Math.floor(Date.now() / 1000) + 60 * 20, // 20 minutes from the current Unix time\n  recipient: walletAddress,\n}\n")),(0,o.kt)("p",null,"The slippage of our trade is the maximum decrease from our calculated output amount that we are willing to accept for this trade.\nThe deadline is the latest point in time when we want the transaction to go through.\nIf we set this value too high, the transaction could be left waiting for days and we would need to pay gas fees to cancel it."),(0,o.kt)("p",null,"Next, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"SwapRouter")," class, a representation of the Uniswap ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-periphery/blob/v1.0.0/contracts/SwapRouter.sol"},"SwapRouter Contract"),", to get the associated call parameters for our trade and options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SwapRouter } from '@uniswap/v3-sdk'\n\nconst methodParameters = SwapRouter.swapCallParameters([uncheckedTrade], options)\n")),(0,o.kt)("p",null,"Finally, we can construct a transaction from the method parameters and send the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const tx = {\n  data: methodParameters.calldata,\n  to: SWAP_ROUTER_ADDRESS,\n  value: methodParameters.value,\n  from: walletAddress,\n  maxFeePerGas: MAX_FEE_PER_GAS,\n  maxPriorityFeePerGas: MAX_PRIORITY_FEE_PER_GAS,\n}\n\nconst res = await wallet.sendTransaction(tx)\n")),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"The resulting example allows for trading between any two ERC20 tokens, but this can be suboptimal for the best pricing and fees. To achieve the best possible price, we use the Uniswap auto router to route through pools to get an optimal cost. Our ",(0,o.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/guides/swaps/routing"},"routing")," guide will show you how to use this router and execute optimal swaps."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);