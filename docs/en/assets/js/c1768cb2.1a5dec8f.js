"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[2520],{52249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(83117),o=(n(67294),n(3905));const r={id:"single-swaps",title:"Single Swaps",sidebar_position:1},s=void 0,i={unversionedId:"contracts/v3/guides/swaps/single-swaps",id:"contracts/v3/guides/swaps/single-swaps",title:"Single Swaps",description:"Swaps are the most common interaction with the Uniswap protocol. The following example shows you how to implement a single-path swap contract that uses two functions that you create:",source:"@site/docs/contracts/v3/guides/swaps/single-swaps.md",sourceDirName:"contracts/v3/guides/swaps",slug:"/contracts/v3/guides/swaps/single-swaps",permalink:"/uniswap-docs/en/contracts/v3/guides/swaps/single-swaps",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/guides/swaps/single-swaps.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"single-swaps",title:"Single Swaps",sidebar_position:1},sidebar:"contractsSidebar",previous:{title:"Set Up Your Local Environment",permalink:"/uniswap-docs/en/contracts/v3/guides/local-environment"},next:{title:"Multihop Swaps",permalink:"/uniswap-docs/en/contracts/v3/guides/swaps/multihop-swaps"}},p={},u=[{value:"Set Up the Contract",id:"set-up-the-contract",level:2},{value:"Exact Input Swaps",id:"exact-input-swaps",level:2},{value:"Swap Input Parameters",id:"swap-input-parameters",level:3},{value:"Call the function",id:"call-the-function",level:3},{value:"Exact Output Swaps",id:"exact-output-swaps",level:2},{value:"Call the function",id:"call-the-function-1",level:3},{value:"A Complete Single Swap Contract",id:"a-complete-single-swap-contract",level:2}],l={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Swaps are the most common interaction with the Uniswap protocol. The following example shows you how to implement a single-path swap contract that uses two functions that you create:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"swapExactInputSingle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"swapExactOutputSingle"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"swapExactInputSingle")," function is for performing ",(0,o.kt)("em",{parentName:"p"},"exact input")," swaps, which swap a fixed amount of one token for a maximum possible amount of another token. This function uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExactInputSingleParams")," struct and the ",(0,o.kt)("inlineCode",{parentName:"p"},"exactInputSingle")," function from the ",(0,o.kt)("a",{parentName:"p",href:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/ISwapRouter"},"ISwapRouter")," interface."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"swapExactOutputSingle")," function is for performing ",(0,o.kt)("em",{parentName:"p"},"exact output")," swaps, which swap a minimum possible amount of one token for a fixed amount of another token. This function uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExactOutputSingleParams")," struct and the ",(0,o.kt)("inlineCode",{parentName:"p"},"exactOutputSingle")," function from the ",(0,o.kt)("a",{parentName:"p",href:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/ISwapRouter"},"ISwapRouter")," interface."),(0,o.kt)("p",null,"For simplification, the example hardcodes the token contract addresses, but as explained further below the contract could be modified to change pools and tokens on a per transaction basis."),(0,o.kt)("p",null,"When trading from a smart contract, the most important thing to keep in mind is that access to an external price source is required. Without this, trades can be frontrun for considerable loss."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," The swap examples are not production ready code, and are implemented in a simplistic manner for the purpose of learning."),(0,o.kt)("h2",{id:"set-up-the-contract"},"Set Up the Contract"),(0,o.kt)("p",null,"Declare the solidity version used to compile the contract, and ",(0,o.kt)("inlineCode",{parentName:"p"},"abicoder v2")," to allow arbitrary nested arrays and structs\nto be encoded and decoded in calldata, a feature used when executing a swap."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: GPL-2.0-or-later\npragma solidity =0.7.6;\npragma abicoder v2;\n")),(0,o.kt)("p",null,"Import the two relevant contracts from the npm package installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';\nimport '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';\n")),(0,o.kt)("p",null,"Create a contract called ",(0,o.kt)("inlineCode",{parentName:"p"},"SwapExamples"),", and declare an immutable public variable ",(0,o.kt)("inlineCode",{parentName:"p"},"swapRouter")," of type ",(0,o.kt)("inlineCode",{parentName:"p"},"ISwapRouter"),".\nThis allows us to call functions in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ISwapRouter")," interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"contract SwapExamples {\n    // For the scope of these swap examples,\n    // we will detail the design considerations when using `exactInput`, `exactInputSingle`, `exactOutput`, and  `exactOutputSingle`.\n    // It should be noted that for the sake of these examples we pass in the swap router as a constructor argument instead of inheriting it.\n    // More advanced example contracts will detail how to inherit the swap router safely.\n    // This example swaps DAI/WETH9 for single path swaps and DAI/USDC/WETH9 for multi path swaps.\n\n    ISwapRouter public immutable swapRouter;\n")),(0,o.kt)("p",null,"Hardcode the token contract addresses and pool fee tiers for the example. In production, you would likely use an input parameter for this and pass the input into a memory variable, allowing the contract to change the pools and tokens it interacts with on a per transaction basis, but for conceptual simplicity, we are hardcoding them here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;\n    address public constant WETH9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;\n    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;\n\n    // For this example, we will set the pool fee to 0.3%.\n    uint24 public constant poolFee = 3000;\n\n    constructor(ISwapRouter _swapRouter) {\n        swapRouter = _swapRouter;\n    }\n")),(0,o.kt)("h2",{id:"exact-input-swaps"},"Exact Input Swaps"),(0,o.kt)("p",null,"The caller must ",(0,o.kt)("inlineCode",{parentName:"p"},"approve")," the contract to withdraw the tokens from the calling address's account to execute a swap. Remember that because\nour contract is a contract itself and not an extension of the caller (us); we must also approve the Uniswap protocol router contract to use the tokens that our contract will be in possession of after they have been withdrawn from the calling address (us)."),(0,o.kt)("p",null,"Then, transfer the ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," of Dai from the calling address into our contract, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," as the value passed to the second ",(0,o.kt)("inlineCode",{parentName:"p"},"approve"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /// @notice swapExactInputSingle swaps a fixed amount of DAI for a maximum possible amount of WETH9\n    /// using the DAI/WETH9 0.3% pool by calling `exactInputSingle` in the swap router.\n    /// @dev The calling address must approve this contract to spend at least `amountIn` worth of its DAI for this function to succeed.\n    /// @param amountIn The exact amount of DAI that will be swapped for WETH9.\n    /// @return amountOut The amount of WETH9 received.\n    function swapExactInputSingle(uint256 amountIn) external returns (uint256 amountOut) {\n        // msg.sender must approve this contract\n\n        // Transfer the specified amount of DAI to this contract.\n        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountIn);\n\n        // Approve the router to spend DAI.\n        TransferHelper.safeApprove(DAI, address(swapRouter), amountIn);\n\n")),(0,o.kt)("h3",{id:"swap-input-parameters"},"Swap Input Parameters"),(0,o.kt)("p",null,"To execute the swap function, we need to populate the ",(0,o.kt)("inlineCode",{parentName:"p"},"ExactInputSingleParams")," with the necessary swap data. These parameters are found in the smart contract interfaces, which can be browsed ",(0,o.kt)("a",{parentName:"p",href:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/ISwapRouter"},"here"),"."),(0,o.kt)("p",null,"A brief overview of the parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tokenIn")," The contract address of the inbound token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tokenOut")," The contract address of the outbound token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fee")," The fee tier of the pool, used to determine the correct pool contract in which to execute the swap"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"recipient")," the destination address of the outbound token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deadline"),": the unix time after which a swap will fail, to protect against long-pending transactions and wild swings in prices"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"amountOutMinimum"),": we are setting to zero, but this is a significant risk in production. For a real deployment, this value should be calculated using our SDK or an onchain price oracle - this helps protect against getting an unusually bad price for a trade due to a front running sandwich or another type of price manipulation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sqrtPriceLimitX96"),": We set this to zero - which makes this parameter inactive. In production, this value can be used to set the limit for the price the swap will push the pool to, which can help protect against price impact or for setting up logic in a variety of price-relevant mechanisms.")),(0,o.kt)("h3",{id:"call-the-function"},"Call the function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"        // Naively set amountOutMinimum to 0. In production, use an oracle or other data source to choose a safer value for amountOutMinimum.\n        // We also set the sqrtPriceLimitx96 to be 0 to ensure we swap our exact input amount.\n        ISwapRouter.ExactInputSingleParams memory params =\n            ISwapRouter.ExactInputSingleParams({\n                tokenIn: DAI,\n                tokenOut: WETH9,\n                fee: poolFee,\n                recipient: msg.sender,\n                deadline: block.timestamp,\n                amountIn: amountIn,\n                amountOutMinimum: 0,\n                sqrtPriceLimitX96: 0\n            });\n\n        // The call to `exactInputSingle` executes the swap.\n        amountOut = swapRouter.exactInputSingle(params);\n    }\n")),(0,o.kt)("h2",{id:"exact-output-swaps"},"Exact Output Swaps"),(0,o.kt)("p",null,"Exact Output swaps a minimum possible amount of the input token for a fixed amount of the outbound token. This is the less common swap style - but useful in a variety of circumstances."),(0,o.kt)("p",null,"Because this example transfers in the inbound asset in anticipation of the swap - its possible that some of the inbound token will be left over after the swap is executed, which is why we pay it back to the calling address at the end of the swap."),(0,o.kt)("h3",{id:"call-the-function-1"},"Call the function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"/// @notice swapExactOutputSingle swaps a minimum possible amount of DAI for a fixed amount of WETH.\n/// @dev The calling address must approve this contract to spend its DAI for this function to succeed. As the amount of input DAI is variable,\n/// the calling address will need to approve for a slightly higher amount, anticipating some variance.\n/// @param amountOut The exact amount of WETH9 to receive from the swap.\n/// @param amountInMaximum The amount of DAI we are willing to spend to receive the specified amount of WETH9.\n/// @return amountIn The amount of DAI actually spent in the swap.\nfunction swapExactOutputSingle(uint256 amountOut, uint256 amountInMaximum) external returns (uint256 amountIn) {\n        // Transfer the specified amount of DAI to this contract.\n        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountInMaximum);\n\n        // Approve the router to spend the specified `amountInMaximum` of DAI.\n        // In production, you should choose the maximum amount to spend based on oracles or other data sources to achieve a better swap.\n        TransferHelper.safeApprove(DAI, address(swapRouter), amountInMaximum);\n\n        ISwapRouter.ExactOutputSingleParams memory params =\n            ISwapRouter.ExactOutputSingleParams({\n                tokenIn: DAI,\n                tokenOut: WETH9,\n                fee: poolFee,\n                recipient: msg.sender,\n                deadline: block.timestamp,\n                amountOut: amountOut,\n                amountInMaximum: amountInMaximum,\n                sqrtPriceLimitX96: 0\n            });\n\n        // Executes the swap returning the amountIn needed to spend to receive the desired amountOut.\n        amountIn = swapRouter.exactOutputSingle(params);\n\n        // For exact output swaps, the amountInMaximum may not have all been spent.\n        // If the actual amount spent (amountIn) is less than the specified maximum amount, we must refund the msg.sender and approve the swapRouter to spend 0.\n        if (amountIn < amountInMaximum) {\n            TransferHelper.safeApprove(DAI, address(swapRouter), 0);\n            TransferHelper.safeTransfer(DAI, msg.sender, amountInMaximum - amountIn);\n        }\n    }\n\n")),(0,o.kt)("h2",{id:"a-complete-single-swap-contract"},"A Complete Single Swap Contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: GPL-2.0-or-later\npragma solidity =0.7.6;\npragma abicoder v2;\n\nimport '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';\nimport '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';\n\ncontract SwapExamples {\n    // For the scope of these swap examples,\n    // we will detail the design considerations when using\n    // `exactInput`, `exactInputSingle`, `exactOutput`, and  `exactOutputSingle`.\n\n    // It should be noted that for the sake of these examples, we purposefully pass in the swap router instead of inherit the swap router for simplicity.\n    // More advanced example contracts will detail how to inherit the swap router safely.\n\n    ISwapRouter public immutable swapRouter;\n\n    // This example swaps DAI/WETH9 for single path swaps and DAI/USDC/WETH9 for multi path swaps.\n\n    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;\n    address public constant WETH9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;\n    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;\n\n    // For this example, we will set the pool fee to 0.3%.\n    uint24 public constant poolFee = 3000;\n\n    constructor(ISwapRouter _swapRouter) {\n        swapRouter = _swapRouter;\n    }\n\n    /// @notice swapExactInputSingle swaps a fixed amount of DAI for a maximum possible amount of WETH9\n    /// using the DAI/WETH9 0.3% pool by calling `exactInputSingle` in the swap router.\n    /// @dev The calling address must approve this contract to spend at least `amountIn` worth of its DAI for this function to succeed.\n    /// @param amountIn The exact amount of DAI that will be swapped for WETH9.\n    /// @return amountOut The amount of WETH9 received.\n    function swapExactInputSingle(uint256 amountIn) external returns (uint256 amountOut) {\n        // msg.sender must approve this contract\n\n        // Transfer the specified amount of DAI to this contract.\n        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountIn);\n\n        // Approve the router to spend DAI.\n        TransferHelper.safeApprove(DAI, address(swapRouter), amountIn);\n\n        // Naively set amountOutMinimum to 0. In production, use an oracle or other data source to choose a safer value for amountOutMinimum.\n        // We also set the sqrtPriceLimitx96 to be 0 to ensure we swap our exact input amount.\n        ISwapRouter.ExactInputSingleParams memory params =\n            ISwapRouter.ExactInputSingleParams({\n                tokenIn: DAI,\n                tokenOut: WETH9,\n                fee: poolFee,\n                recipient: msg.sender,\n                deadline: block.timestamp,\n                amountIn: amountIn,\n                amountOutMinimum: 0,\n                sqrtPriceLimitX96: 0\n            });\n\n        // The call to `exactInputSingle` executes the swap.\n        amountOut = swapRouter.exactInputSingle(params);\n    }\n\n    /// @notice swapExactOutputSingle swaps a minimum possible amount of DAI for a fixed amount of WETH.\n    /// @dev The calling address must approve this contract to spend its DAI for this function to succeed. As the amount of input DAI is variable,\n    /// the calling address will need to approve for a slightly higher amount, anticipating some variance.\n    /// @param amountOut The exact amount of WETH9 to receive from the swap.\n    /// @param amountInMaximum The amount of DAI we are willing to spend to receive the specified amount of WETH9.\n    /// @return amountIn The amount of DAI actually spent in the swap.\n    function swapExactOutputSingle(uint256 amountOut, uint256 amountInMaximum) external returns (uint256 amountIn) {\n        // Transfer the specified amount of DAI to this contract.\n        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountInMaximum);\n\n        // Approve the router to spend the specifed `amountInMaximum` of DAI.\n        // In production, you should choose the maximum amount to spend based on oracles or other data sources to acheive a better swap.\n        TransferHelper.safeApprove(DAI, address(swapRouter), amountInMaximum);\n\n        ISwapRouter.ExactOutputSingleParams memory params =\n            ISwapRouter.ExactOutputSingleParams({\n                tokenIn: DAI,\n                tokenOut: WETH9,\n                fee: poolFee,\n                recipient: msg.sender,\n                deadline: block.timestamp,\n                amountOut: amountOut,\n                amountInMaximum: amountInMaximum,\n                sqrtPriceLimitX96: 0\n            });\n\n        // Executes the swap returning the amountIn needed to spend to receive the desired amountOut.\n        amountIn = swapRouter.exactOutputSingle(params);\n\n        // For exact output swaps, the amountInMaximum may not have all been spent.\n        // If the actual amount spent (amountIn) is less than the specified maximum amount, we must refund the msg.sender and approve the swapRouter to spend 0.\n        if (amountIn < amountInMaximum) {\n            TransferHelper.safeApprove(DAI, address(swapRouter), 0);\n            TransferHelper.safeTransfer(DAI, msg.sender, amountInMaximum - amountIn);\n        }\n    }\n}\n")))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,s(s({ref:t},l),{},{components:n})):a.createElement(h,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);