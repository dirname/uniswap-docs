"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[6279],{60979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(83117),o=(n(67294),n(3905));const a={id:"modifying-position",title:"Adding & Removing Liquidity"},r=void 0,s={unversionedId:"sdk/v3/guides/liquidity/modifying-position",id:"sdk/v3/guides/liquidity/modifying-position",title:"Adding & Removing Liquidity",description:"Introduction",source:"@site/docs/sdk/v3/guides/liquidity/04-modifying-position.md",sourceDirName:"sdk/v3/guides/liquidity",slug:"/sdk/v3/guides/liquidity/modifying-position",permalink:"/uniswap-docs/en/sdk/v3/guides/liquidity/modifying-position",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/sdk/v3/guides/liquidity/04-modifying-position.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"modifying-position",title:"Adding & Removing Liquidity"},sidebar:"sdkSidebar",previous:{title:"Fetching Positions",permalink:"/uniswap-docs/en/sdk/v3/guides/liquidity/fetching-positions"},next:{title:"Collecting Fees",permalink:"/uniswap-docs/en/sdk/v3/guides/liquidity/liquidity-fees"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration and utils",id:"configuration-and-utils",level:2},{value:"Adding liquidity to our position",id:"adding-liquidity-to-our-position",level:2},{value:"Removing liquidity from our position",id:"removing-liquidity-from-our-position",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This guide will cover how to modify a liquidity position by adding or removing liquidity on the Uniswap V3 protocol. It is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/tree/main/v3-sdk/modifying-position"},"modifying a position code example"),", found in the Uniswap code examples ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples"},"repository"),". To run this example, check out the examples's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/blob/main/v3-sdk/modifying-position/README.md"},"README")," and follow the setup instructions."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you need a briefer on the SDK and to learn more about how these guides connect to the examples repository, please visit our ",(0,o.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/guides/background"},"background")," page!"))),(0,o.kt)("p",null,"In the Uniswap V3 protocol, liquidity positions are represented using non-fungible tokens. In this guide we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"NonfungiblePositionManager")," class to help us mint a liquidity position and then modify the provided liquidity for the  ",(0,o.kt)("strong",{parentName:"p"},"USDC - DAI")," pair. The inputs to our guide are the ",(0,o.kt)("strong",{parentName:"p"},"two tokens")," that we are pooling for, the ",(0,o.kt)("strong",{parentName:"p"},"amount")," of each token we are pooling for, the Pool ",(0,o.kt)("strong",{parentName:"p"},"fee")," and the ",(0,o.kt)("strong",{parentName:"p"},"fraction")," by which to ",(0,o.kt)("strong",{parentName:"p"},"add and remove")," from our position."),(0,o.kt)("p",null,"The guide will ",(0,o.kt)("strong",{parentName:"p"},"cover"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Adding liquidity to our position"),(0,o.kt)("li",{parentName:"ol"},"Removing liquidity from our position")),(0,o.kt)("p",null,"At the end of the guide, given the inputs above, we should be able to add or remove liquidity from a minted position with the press of a button and see the change reflected in our position and the balance of our tokens."),(0,o.kt)("p",null,"For this guide, the following Uniswap packages are used:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@uniswap/v3-sdk"},(0,o.kt)("inlineCode",{parentName:"a"},"@uniswap/v3-sdk"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@uniswap/sdk-core"},(0,o.kt)("inlineCode",{parentName:"a"},"@uniswap/sdk-core")))),(0,o.kt)("p",null,"The core code of this guide can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/blob/d34a53412dbf905802da2249391788a225719bb8/v3-sdk/modifying-position/src/example/Example.tsx#L33"},(0,o.kt)("inlineCode",{parentName:"a"},"addLiquidity()"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/blob/733d586070afe2c8cceb35d557a77eac7a19a656/v3-sdk/modifying-position/src/example/Example.tsx#L83"},(0,o.kt)("inlineCode",{parentName:"a"},"removeLiquidity()"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide assumes you are familiar with our ",(0,o.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/guides/liquidity/minting"},"Minting a Position")," guide. A minted position is required to add or remove liquidity from, so the buttons will be disabled until a position is minted."),(0,o.kt)("p",{parentName:"div"},"Also note that we do not need to give approval to the ",(0,o.kt)("inlineCode",{parentName:"p"},"NonfungiblePositionManager")," to transfer our tokens as we will have already done that when minting our position."))),(0,o.kt)("h2",{id:"configuration-and-utils"},"Configuration and utils"),(0,o.kt)("p",null,"The example can be configured in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/blob/d34a53412dbf905802da2249391788a225719bb8/v3-sdk/modifying-position/src/config.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"config.ts"))," file.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"CurrentConfig")," object has this structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const CurrentConfig: ExampleConfig = {\n  env: Environment.LOCAL,\n  rpc: {\n    local: 'http://localhost:8545',\n    mainnet: 'https://mainnet.infura.io/v3/0ac57a06f2994538829c14745750d721',\n  },\n  wallet: {\n    address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',\n    privateKey:\n      '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',\n  },\n  tokens: {\n    token0: USDC_TOKEN,\n    token0Amount: 1000,\n    token1: DAI_TOKEN,\n    token1Amount: 1000,\n    poolFee: FeeAmount.LOW,\n    fractionToRemove: 1,\n    fractionToAdd: 0.5,\n  },\n}\n")),(0,o.kt)("p",null,"You should already be familiar with the ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet")," and token parameters, they are used in the same way as in the guides earlier in our v3-sdk series.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"fractionToAdd")," variable is the multiplicator by which we will increase the Position. A fraction of ",(0,o.kt)("strong",{parentName:"p"},"0.5")," means we increase the liquidity by ",(0,o.kt)("strong",{parentName:"p"},"50%"),".\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"fractionToRemove")," variable is the fraction of the Position that we want to remove later in the guide. A fraction of ",(0,o.kt)("strong",{parentName:"p"},"1")," means we remove ",(0,o.kt)("strong",{parentName:"p"},"100%")," of the liquidity."),(0,o.kt)("h2",{id:"adding-liquidity-to-our-position"},"Adding liquidity to our position"),(0,o.kt)("p",null,"Assuming we have already minted a position, our first step is to construct the modified position using our original position to calculate the amount by which we want to increase our current position:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const fractionToAdd: number = ...\n\nconst amount0Increased: JSBI = fromReadableAmount(\n    readableAmount0 * fractionToAdd, \n    token0.decimals\n)\nconst amount1Increase: JSBI = fromReadableAmount(\n    readableAmount1 * fractionToAdd, \n    token1.decimals\n)\n\nconst positionToIncreaseBy = constructPosition(\n    amount0Increased,\n    amount1Increase\n  )\n)\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"fromReadableAmount()")," function calculates the amount of tokens in their smallest unit, so for example 1 ETH would be ",(0,o.kt)("inlineCode",{parentName:"p"},"1000000000000000000")," Wei as ETH has 18 decimals."),(0,o.kt)("p",null,"A better way to get the amounts might be to fetch them with the positionId directly from the blockchain.\nWe demonstrated how to do that in the ",(0,o.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/guides/liquidity/position-data#fetching-positions"},"first guide")," of this series."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Pool, Position } from '@uniswap/v3-sdk'\nimport JSBI from 'jsbi'\n\nfunction constructPosition(\n    amount0: JSBI,\n    amount1: JSBI\n): Position {\n    // create Pool same as in the previous guide\n    const pool = new Pool(...)\n\n    // create position using the maximum liquidity from input amounts\n    return Position.fromAmounts({\n        pool,\n        tickLower:\n            nearestUsableTick(pool.tickCurrent, pool.tickSpacing) -\n            pool.tickSpacing * 2,\n        tickUpper:\n            nearestUsableTick(pool.tickCurrent, pool.tickSpacing) +\n            pool.tickSpacing * 2,\n        amount0,\n        amount1,\n        useFullPrecision: true,\n    })\n}\n")),(0,o.kt)("p",null,"The function receives two arguments, which are the amounts that are used to construct the Position instance. In this example, both of the arguments follow the same logic: we multiply the parameterized ",(0,o.kt)("inlineCode",{parentName:"p"},"tokenAmount")," by the parameterized ",(0,o.kt)("inlineCode",{parentName:"p"},"fractionToAdd")," since the new liquidity position will be added on top of the already minted liquidity position."),(0,o.kt)("p",null,"We then need to construct an options object of type ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/nonfungiblePositionManager.ts#L77"},(0,o.kt)("inlineCode",{parentName:"a"},"AddLiquidityOptions"))," similar to how we did in the minting case. In this case, we will use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/nonfungiblePositionManager.ts#L75"},(0,o.kt)("inlineCode",{parentName:"a"},"IncreaseOptions")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AddLiquidityOptions } from '@uniswap/v3-sdk'\n\nconst addLiquidityOptions: AddLiquidityOptions = {\n  deadline: Math.floor(Date.now() / 1000) + 60 * 20,\n  slippageTolerance: new Percent(50, 10_000),\n  tokenId,\n}\n")),(0,o.kt)("p",null,"Compared to minting, we have we have omitted the ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient")," parameter and instead passed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tokenId")," of the position we previously minted.\nAs the Position already exists, the recipient doesn't change, instead the NonfungiblePositionManager contract can modify the existing Position by accessing it with its id."),(0,o.kt)("p",null,"The tokenId can be fetched with the tokenOfOwnerByIndex function of the NonfungiblePositionManager Contract as described ",(0,o.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/guides/liquidity/position-data#fetching-positions"},"here"),"."),(0,o.kt)("p",null,"The newly created position along with the options object are then passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"NonfungiblePositionManager"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"addCallParameters"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { NonfungiblePositionManager } from '@uniswap/v3-sdk'\n\nconst positionToIncreaseBy = constructPosition(CurrentConfig.tokens.amount0, CurrentConfig.tokens.amount1)\n\nconst { calldata, value } = NonfungiblePositionManager.addCallParameters(\n  positionToIncreaseBy,\n  addLiquidityOptions\n)\n")),(0,o.kt)("p",null,"The return values of ",(0,o.kt)("inlineCode",{parentName:"p"},"addCallParameters")," are the calldata and value of the transaction we need to submit to increase our position's liquidity. We can now build and execute the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ethers } from 'ethers'\n\nconst transaction = {\n  data: calldata,\n  to: NONFUNGIBLE_POSITION_MANAGER_CONTRACT_ADDRESS,\n  value: value,\n  from: address,\n  maxFeePerGas: MAX_FEE_PER_GAS,\n  maxPriorityFeePerGas: MAX_PRIORITY_FEE_PER_GAS,\n}\n\nconst wallet = new ethers.Wallet(privateKey, provider)\n\nconst txRes = await wallet.sendTransaction(transaction)\n")),(0,o.kt)("p",null,"We can get the Contract address for the NonfungiblePositionManager from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-periphery/blob/main/deploys.md"},"Github"),"."),(0,o.kt)("p",null,"After pressing the button, note how the balance of USDC and DAI drops and our position's liquidity increases."),(0,o.kt)("h2",{id:"removing-liquidity-from-our-position"},"Removing liquidity from our position"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"removeLiquidity")," function is the mirror action of adding liquidity and will be somewhat similar as a result, requiring a position to already be minted."),(0,o.kt)("p",null,"To start, we create a position identical to the one we minted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const amount0: JSBI = fromReadableAmount(\n    readableAmount0 * fractionToAdd, \n    token0.decimals\n)\nconst amount1: JSBI = fromReadableAmount(\n    readableAmount1 * fractionToAdd, \n    token1.decimals\n)\n\nconst currentPosition = constructPosition(\n  amount0,\n  amount1\n)\n")),(0,o.kt)("p",null,"We then need to construct an options object of type ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/nonfungiblePositionManager.ts#L138"},(0,o.kt)("inlineCode",{parentName:"a"},"RemoveLiquidityOptions")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RemoveLiquidityOptions } from '@uniswap/v3-sdk'\nimport { Percent } from '@uniswap/sdk-core'\n\nconst removeLiquidityOptions: RemoveLiquidityOptions = {\n  deadline: Math.floor(Date.now() / 1000) + 60 * 20,\n  slippageTolerance: new Percent(50, 10_000),\n  tokenId: positionId,\n  // percentage of liquidity to remove\n  liquidityPercentage: new Percent(0.5),\n  collectOptions,\n}\n")),(0,o.kt)("p",null,"Just as with adding liquidity, we have we have omitted the ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient")," parameter and instead passed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tokenId")," of the position we previously minted."),(0,o.kt)("p",null,"We have also provide two additional parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"liquidityPercentage")," determines how much liquidity is removed from our initial position (as a ",(0,o.kt)("inlineCode",{parentName:"li"},"Percentage"),"), and transfers the removed liquidity back to our address. We set this percentage from our guide configuration ranging from 0 (0%) to 1 (100%). In this example we would remove 50% of the liquidity."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c050cba00377843497030f502c05982b1c43/src/nonfungiblePositionManager.ts#L105"},(0,o.kt)("inlineCode",{parentName:"a"},"collectOptions"))," gives us the option to collect the fees, if any, that we have accrued for this position. In this example, we won't collect any fees, so we provide zero values. If you'd like to see how to collect fees without modifying your position, check out our ",(0,o.kt)("a",{parentName:"li",href:"./03-collecting-fees.md"},"collecting fees")," guide!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CurrencyAmount } from '@uniswap/sdk-core'\nimport { CollectOptions } from '@uniswap/v3-sdk'\n\nconst collectOptions: Omit<CollectOptions, 'tokenId'> = {\n  expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(\n    token0,\n    0\n  ),\n  expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(\n    token1,\n    0\n  ),\n  recipient: address,\n}\n")),(0,o.kt)("p",null,"The position object along with the options object is passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"NonfungiblePositionManager"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"removeCallParameters"),", similar to how we did in the adding liquidity case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const { calldata, value } = NonfungiblePositionManager.removeCallParameters(\n  currentPosition,\n  removeLiquidityOptions\n)\n")),(0,o.kt)("p",null,"The return values ",(0,o.kt)("inlineCode",{parentName:"p"},"removeCallParameters")," are the calldata and value that are needed to construct the transaction to remove liquidity from our position. We can build the transaction and send it for execution:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const transaction = {\n  data: calldata,\n  to: NONFUNGIBLE_POSITION_MANAGER_CONTRACT_ADDRESS,\n  value: value,\n  from: address,\n  maxFeePerGas: MAX_FEE_PER_GAS,\n  maxPriorityFeePerGas: MAX_PRIORITY_FEE_PER_GAS,\n}\n\nconst txRes = await wallet.sendTransaction(transaction)\n")),(0,o.kt)("p",null,"After pressing the button, note how the balance of USDC and DAI increases and our position's liquidity drops."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Now that you can mint and modify a position, check out how to ",(0,o.kt)("a",{parentName:"p",href:"./04-collecting-fees.md"},"collect fees")," from the position!"))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);