"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[1679],{74205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(83117),a=(n(67294),n(3905));const o={id:"background",title:"Background",position:1},r=void 0,s={unversionedId:"sdk/v3/guides/background",id:"sdk/v3/guides/background",title:"Background",description:"Before integrating with Uniswap, it may be helpful for newcomers to review the following background information on some important developer web3 concepts, the structure of our examples, and SDK concepts.",source:"@site/docs/sdk/v3/guides/01-background.md",sourceDirName:"sdk/v3/guides",slug:"/sdk/v3/guides/background",permalink:"/uniswap-docs/en/sdk/v3/guides/background",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/sdk/v3/guides/01-background.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"background",title:"Background",position:1},sidebar:"sdkSidebar",previous:{title:"Overview",permalink:"/uniswap-docs/en/sdk/v3/overview"},next:{title:"Local Development",permalink:"/uniswap-docs/en/sdk/v3/guides/local-development"}},l={},c=[{value:"Providers",id:"providers",level:2},{value:"Uniswap&#39;s Runnable Examples",id:"uniswaps-runnable-examples",level:2},{value:"Developing and Testing",id:"developing-and-testing",level:3},{value:"Utility Libraries",id:"utility-libraries",level:3},{value:"Provider Utilities",id:"provider-utilities",level:4},{value:"Wallet Utilities",id:"wallet-utilities",level:4},{value:"Pool Information",id:"pool-information",level:4},{value:"Display Utilities",id:"display-utilities",level:4},{value:"Notable SDK Structures and Concepts",id:"notable-sdk-structures-and-concepts",level:2},{value:"ABI&#39;s",id:"abis",level:3},{value:"CurrencyAmount and JSBI",id:"currencyamount-and-jsbi",level:3},{value:"Currency",id:"currency",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before integrating with Uniswap, it may be helpful for newcomers to review the following background information on some important developer web3 concepts, the structure of our examples, and SDK concepts."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Already familiar with web3 development and/or the basics of our SDK and want to get right to the code? Start with our first guide, ",(0,a.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/guides/swaps/quoting"},"Getting a Quote"),"!"))),(0,a.kt)("h2",{id:"providers"},"Providers"),(0,a.kt)("p",null,"Communication with the blockchain is typically done through a provider and local models of smart contracts and their ",(0,a.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/guides/background#abis"},"ABIs"),"."),(0,a.kt)("p",null,"To achieve this, our examples use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/"},"ethers.js")," library. To instantiate a provider you will need a data source. Our examples offer two options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"JSON RPC URL"),": If you are working directly with the Ethereum mainnet or a local fork, products such as ",(0,a.kt)("a",{parentName:"p",href:"https://infura.io/"},"Infura")," offer JSON RPC URLs for a wide variety of chains and testnets. For our examples, we'll only be using the Ethereum mainnet.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Wallet Extension"),": If you are connecting to a wallet browser extension, these wallets embed a source directly into the Javascript window object as ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum"),". This object surfaces information about the user's wallets and provides the ability to communicate with the connected chain. Importantly for our examples, it can be used with ",(0,a.kt)("inlineCode",{parentName:"p"},"ethers.js")," to construct a provider."))),(0,a.kt)("h2",{id:"uniswaps-runnable-examples"},"Uniswap's Runnable Examples"),(0,a.kt)("p",null,"Each guide is accompanied and driven by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/examples/tree/main/v3-sdk"},"runnable examples")," using React to provide a basic UI for interacting with the example. Each examples provides relevant options such as running against a local blockchain or connecting to the Ethereum mainnet directly. You also have the option of using a wallet extension which can be connected to either environment."),(0,a.kt)("p",null,"Inputs and environment settings are configured in each example's ",(0,a.kt)("inlineCode",{parentName:"p"},"config.ts")," and allows for simple setup and configuration."),(0,a.kt)("h3",{id:"developing-and-testing"},"Developing and Testing"),(0,a.kt)("p",null,"To test your code, we recommend utilizing a local fork of the Ethereum mainnet. To help facilitate easy testing, each example includes a quickstart for running the local chain with a test wallet. To further test, we also recommend using a wallet extension and connecting to the local chain. Finally, each example can be run against the Ethereum mainnet if desired. Full development instructs can be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md")," of each code example."),(0,a.kt)("h3",{id:"utility-libraries"},"Utility Libraries"),(0,a.kt)("p",null,"Each example is concentrated into a single file within the ",(0,a.kt)("inlineCode",{parentName:"p"},"libs/")," folder of the example, with the entry points noted in each guide and README."),(0,a.kt)("p",null,"To allow the guides to focus on the SDK's core functionality, additional basic building blocks can be found in each example's ",(0,a.kt)("inlineCode",{parentName:"p"},"libs")," folder. The exported functionality from these files is intended to be the minimum needed for each example and not a complete library for production usage. These also include storing core constants such as definitions for tokens, ABI's, and blockchain addresses that can distract from the core concepts. Below are summaries of the helping libraries you will encounter."),(0,a.kt)("h4",{id:"provider-utilities"},"Provider Utilities"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"provider.ts")," wraps the basics of ",(0,a.kt)("inlineCode",{parentName:"p"},"ethers.js")," and connecting to wallet extensions into an abstracted view of a provider, a wallet address, and the ability to send transactions. It also helps abstract the configured environment you wish to run against in your example without making code changes outside of your configuration."),(0,a.kt)("h4",{id:"wallet-utilities"},"Wallet Utilities"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"wallet.ts")," offers the ability to query a wallet (whether connected via an extension or defined in code/config) for its balances and other essential information."),(0,a.kt)("h4",{id:"pool-information"},"Pool Information"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pool.ts")," contains the basic querying of pool information when not essential / core to the relevant guide"),(0,a.kt)("h4",{id:"display-utilities"},"Display Utilities"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"conversion.ts")," provides display and light math wrappers to help show human readable prices when dealing with currency amounts (typically stored as raw numbers and the decimal placement separate for precision reasons) in the form of two functions: ",(0,a.kt)("inlineCode",{parentName:"p"},"fromReadableAmount")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"toReadableAmount")),(0,a.kt)("h2",{id:"notable-sdk-structures-and-concepts"},"Notable SDK Structures and Concepts"),(0,a.kt)("p",null,"When working with the SDK it can be helpful to understand some of the design choices and why they are needed. Below you can find a few important concepts."),(0,a.kt)("h3",{id:"abis"},"ABI's"),(0,a.kt)("p",null,"To allow others to interact with a smart contract, each contract exposes an ABI (Application Binary Interface). As these are defined on the blockchain, we must ensure the correct definitions are provided to our Javascript functions. ABI's are provided from various SDK's and imported in as needed. Some examples will define an ABI directly as needed."),(0,a.kt)("h3",{id:"currencyamount-and-jsbi"},"CurrencyAmount and JSBI"),(0,a.kt)("p",null,"Cryptocurrency applications often work with very small fractions of tokens. As a result, high precision is very important. To ensure precision is upheld, the ",(0,a.kt)("inlineCode",{parentName:"p"},"CurrencyAmount")," class helps store exact values as fractions and utilizes ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GoogleChromeLabs/jsbi"},"JSBI")," for compatibility across the web. To display these amounts nicely to users, additional work is sometimes required."),(0,a.kt)("h3",{id:"currency"},"Currency"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Currency")," class can represent both native currency (ETH) and an ERC20 ",(0,a.kt)("inlineCode",{parentName:"p"},"Token"),". Currencies vary in their relative value, so the ",(0,a.kt)("inlineCode",{parentName:"p"},"Token")," class allows your application to define the number of decimals needed for each currency along with the currency's address, symbol, and name."))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);