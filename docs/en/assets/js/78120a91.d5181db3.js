"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[3401],{3873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(83117),o=(n(67294),n(3905));const r={id:"local-environment",title:"Set Up Your Local Environment",sidebar_position:.5},i=void 0,s={unversionedId:"contracts/v3/guides/local-environment",id:"contracts/v3/guides/local-environment",title:"Set Up Your Local Environment",description:"One of the most common questions we get asked is what development toolset to use to build on-chain integrations with Uniswap. There\u2019s no right answer to this question but for this guide we\u2019ll recommend a common one: Node.js , NPM and Hardhat.",source:"@site/docs/contracts/v3/guides/local-environment.mdx",sourceDirName:"contracts/v3/guides",slug:"/contracts/v3/guides/local-environment",permalink:"/uniswap-docs/en/contracts/v3/guides/local-environment",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/guides/local-environment.mdx",tags:[],version:"current",sidebarPosition:.5,frontMatter:{id:"local-environment",title:"Set Up Your Local Environment",sidebar_position:.5},sidebar:"contractsSidebar",previous:{title:"Overview",permalink:"/uniswap-docs/en/contracts/v3/overview"},next:{title:"Single Swaps",permalink:"/uniswap-docs/en/contracts/v3/guides/swaps/single-swaps"}},l={},p=[{value:"Set Up Dependencies",id:"set-up-dependencies",level:2},{value:"Compile a Basic Contract",id:"compile-a-basic-contract",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One of the most common questions we get asked is what development toolset to use to build on-chain integrations with Uniswap. There\u2019s no right answer to this question but for this guide we\u2019ll recommend a common one: ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"NPM")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Hardhat"),"."),(0,o.kt)("p",null,"At the end of this guide you\u2019ll have a development environment set up that you can use to build the rest of the examples in the Guides section of the docs, or start your own integration project!"),(0,o.kt)("p",null,"To get you started as quickly as possible, we have provided the ",(0,o.kt)("inlineCode",{parentName:"p"},"Quick Start")," section below where you can clone some boiler plate and get building. To start from scratch and learn the underlying concepts, jump to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Start from Scratch")," section."),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"The Uniswap ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-first-contract-example"},"boilerplate repo")," provides a basic Hardhat environment with required imports already pre-loaded for you. You can simply clone it and install the dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Uniswap/uniswap-first-contract-example\ncd uniswap-first-contract-example\nnpm install\n")),(0,o.kt)("p",null,"Then hop to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Local Node with a Mainnet Fork")," to complete your set up and start developing."),(0,o.kt)("h1",{id:"start-from-scratch"},"Start from Scratch"),(0,o.kt)("p",null,"In the following sections, we\u2019ll walk through the steps to create the same environment set up as the boiler plate from scratch and learn the underlying concepts."),(0,o.kt)("h2",{id:"set-up-dependencies"},"Set Up Dependencies"),(0,o.kt)("p",null,"Node is one of the most common Javascript runtimes. For our purposes it will provide scripting we can use to compile and test our contracts. If you haven\u2019t already, install NodeJS and its package manager NPM (",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"instructions"),"). Once those dependencies are set up, we can initialize our project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat")," is an Ethereum development toolset that provides a number of powerful features including Solidity compilation, testing and deployment, all in a single convenient wrapper. We\u2019ll use NPM to add Hardhat to our project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm add --save-dev hardhat\n")),(0,o.kt)("p",null,"With Hardhat installed we can invoke it to scaffold our development environment. When you first run Hardhat you\u2019ll have the option of starting with a templated Javascript or Typescript project or an empty project. Since Hardhat relies heavily on folder structure, we recommend starting  with either of the templated options. Initialize Hardhat and follow the prompts to make your selection and answer yes to the follow up prompts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat init\n")),(0,o.kt)("p",null,"Once the Hardhat initialization completes, take a look around at what got set up. The folder structure should be intuitive, ",(0,o.kt)("inlineCode",{parentName:"p"},"./contracts")," is where you\u2019ll write your Solidity contracts, ",(0,o.kt)("inlineCode",{parentName:"p"},"./test")," is where you\u2019ll write your tests and ",(0,o.kt)("inlineCode",{parentName:"p"},"./scripts")," is where you can write scripts to perform actions like deploying. Out of the box, Hardhat is configured to use this folder structure so don\u2019t change it unless you know what you\u2019re doing!"),(0,o.kt)("p",null,"Next we\u2019ll use NPM to add the Uniswap V3 contracts which will allow us to seamlessly integrate with the protocol in our new contracts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm add @uniswap/v3-periphery @uniswap/v3-core\n")),(0,o.kt)("p",null,"The Uniswap V3 contracts were written using a past version of the solidity compiler. Since we\u2019re building integrations on V3 we have to tell Hardhat to use the correct compiler to build these files. Go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"./hardhat.config.js")," file and change the Solidity version to \u201c0.7.6\u201d:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// ...\nmodule.exports = {\n  solidity: "0.7.6",\n};\n')),(0,o.kt)("p",null,"That\u2019s it! You should now have a functional development environment to start building on chain Uniswap integrations. Let\u2019s run a quick test to confirm everything is set up properly."),(0,o.kt)("h2",{id:"compile-a-basic-contract"},"Compile a Basic Contract"),(0,o.kt)("p",null,"To confirm that our environment is configured correctly we\u2019ll attempt to compile a basic Swap contract. Create a new file, ",(0,o.kt)("inlineCode",{parentName:"p"},"./contracts/Swap.sol")," and paste the following code into it (a detailed guide to this contract can be found ",(0,o.kt)("a",{parentName:"p",href:"./swaps/single-swaps"},"here"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// SPDX-License-Identifier: GPL-2.0-or-later\npragma solidity =0.7.6;\npragma abicoder v2;\n\nimport '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';\nimport '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';\n\ncontract SimpleSwap {\n    ISwapRouter public immutable swapRouter;\n    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;\n    address public constant WETH9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;\n    uint24 public constant feeTier = 3000;\n\n    constructor(ISwapRouter _swapRouter) {\n        swapRouter = _swapRouter;\n    }\n\n    function swapWETHForDAI(uint256 amountIn) external returns (uint256 amountOut) {\n\n        // Transfer the specified amount of WETH9 to this contract.\n        TransferHelper.safeTransferFrom(WETH9, msg.sender, address(this), amountIn);\n        // Approve the router to spend WETH9.\n        TransferHelper.safeApprove(WETH9, address(swapRouter), amountIn);\n        // Note: To use this example, you should explicitly set slippage limits, omitting for simplicity\n        uint256 minOut = /* Calculate min output */ 0;\n        uint160 priceLimit = /* Calculate price limit */ 0;\n        // Create the params that will be used to execute the swap\n        ISwapRouter.ExactInputSingleParams memory params =\n            ISwapRouter.ExactInputSingleParams({\n                tokenIn: WETH9,\n                tokenOut: DAI,\n                fee: feeTier,\n                recipient: msg.sender,\n                deadline: block.timestamp,\n                amountIn: amountIn,\n                amountOutMinimum: minOut,\n                sqrtPriceLimitX96: priceLimit\n            });\n        // The call to `exactInputSingle` executes the swap.\n        amountOut = swapRouter.exactInputSingle(params);\n    }\n}\n")),(0,o.kt)("p",null,"To compile all the contracts in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./contracts")," folder, we\u2019ll use the Hardhat compile command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat compile\n")),(0,o.kt)("p",null,"If the environment is compiled correctly you should see the message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Compiled { x } Solidity files successfully\n")),(0,o.kt)("h1",{id:"local-node-with-a-mainnet-fork"},"Local Node with a Mainnet Fork"),(0,o.kt)("p",null,"When building and testing integrations with on chain protocols, developers often hit a problem: the liquidity on the live chain is critical to thoroughly testing their code but testing against a live network like Mainnet can be extremely expensive."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"../../../sdk/v3/guides/02-local-development"},"the SDK getting started guide")," for a full example on how to use forks."),(0,o.kt)("p",null,"With your local node up and running, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--network localhost")," flag in tests to point the Hardhat testing suite to that local node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat test --network localhost\n")),(0,o.kt)("h1",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"With your environment set up you\u2019re ready to start building. Jump over to the guides section to learn about the Uniswap functions you can integrate with. Remember to add all contracts (.sol files) to the ",(0,o.kt)("inlineCode",{parentName:"p"},"./contracts")," folder and their subsequent tests to the ",(0,o.kt)("inlineCode",{parentName:"p"},"./tests")," folder. You can then test them against your local forked node by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat test --network localhost\n")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);