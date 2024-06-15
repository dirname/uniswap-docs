"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[9965],{43812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(83117),o=(n(67294),n(3905));const r={id:"multihop-swaps",title:"Multihop Swaps",sidebar_position:2},s=void 0,i={unversionedId:"contracts/v3/guides/swaps/multihop-swaps",id:"contracts/v3/guides/swaps/multihop-swaps",title:"Multihop Swaps",description:"Introduction",source:"@site/docs/contracts/v3/guides/swaps/multihop-swaps.md",sourceDirName:"contracts/v3/guides/swaps",slug:"/contracts/v3/guides/swaps/multihop-swaps",permalink:"/uniswap-docs/en/contracts/v3/guides/swaps/multihop-swaps",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/guides/swaps/multihop-swaps.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"multihop-swaps",title:"Multihop Swaps",sidebar_position:2},sidebar:"contractsSidebar",previous:{title:"Single Swaps",permalink:"/uniswap-docs/en/contracts/v3/guides/swaps/single-swaps"},next:{title:"Set Up Your Contract",permalink:"/uniswap-docs/en/contracts/v3/guides/providing-liquidity/setting-up"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Setting up the Contract",id:"setting-up-the-contract",level:2},{value:"Exact Input Multi Hop Swaps",id:"exact-input-multi-hop-swaps",level:2},{value:"Input Parameters",id:"input-parameters",level:3},{value:"Calling the function",id:"calling-the-function",level:3},{value:"Exact Output Multihop Swap",id:"exact-output-multihop-swap",level:2},{value:"Input Parameters",id:"input-parameters-1",level:3},{value:"Calling the function",id:"calling-the-function-1",level:3},{value:"The Full Contract",id:"the-full-contract",level:2}],l={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The examples below are implementations of the two styles of multi-hop swapping available on v3. The examples below are not production ready code, and are implemented in a simplistic manner for the purpose of learning."),(0,o.kt)("h2",{id:"setting-up-the-contract"},"Setting up the Contract"),(0,o.kt)("p",null,"Declare the solidity version that will be used to compile the contract, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"abicoder v2")," to allow arbitrary nested arrays and structs\nto be encoded and decoded in calldata, a feature we use when executing a swap."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: GPL-2.0-or-later\npragma solidity =0.7.6;\npragma abicoder v2;\n")),(0,o.kt)("p",null,"Import the two needed contracts from the npm package installation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';\nimport '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';\n")),(0,o.kt)("p",null,"Create a contract called ",(0,o.kt)("inlineCode",{parentName:"p"},"SwapExamples"),", and declare an immutable public variable ",(0,o.kt)("inlineCode",{parentName:"p"},"swapRouter")," of type ",(0,o.kt)("inlineCode",{parentName:"p"},"ISwapRouter"),".\nThis allows us to call functions in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ISwapRouter")," interface."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"contract SwapExamples {\n    // For the scope of these swap examples,\n    // we will detail the design considerations when using `exactInput`, `exactInputSingle`, `exactOutput`, and  `exactOutputSingle`.\n    // It should be noted that for the sake of these examples we pass in the swap router as a constructor argument instead of inheriting it.\n    // More advanced example contracts will detail how to inherit the swap router safely.\n    // This example swaps DAI/WETH9 for single path swaps and DAI/USDC/WETH9 for multi path swaps.\n\n    ISwapRouter public immutable swapRouter;\n")),(0,o.kt)("p",null,"Hardcode the token contract addresses and pool fee tiers for the example. In production, you would likely use an input parameter for this and pass the input into a memory variable, allowing the contract to change the pools and tokens it interacts with on a per transaction basis, but for conceptual simplicity, we are hardcoding them here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;\n    address public constant WETH9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;\n    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;\n\n    // For this example, we will set the pool fee to 0.3%.\n    uint24 public constant poolFee = 3000;\n\n    constructor(ISwapRouter _swapRouter) {\n        swapRouter = _swapRouter;\n    }\n")),(0,o.kt)("h2",{id:"exact-input-multi-hop-swaps"},"Exact Input Multi Hop Swaps"),(0,o.kt)("p",null,"Exact input multi hop swaps will swap a fixed amount on a given input token for the maximum amount possible for a given output, and can include an arbitrary number of intermediary swaps."),(0,o.kt)("h3",{id:"input-parameters"},"Input Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": The path is a sequence of (",(0,o.kt)("inlineCode",{parentName:"li"},"tokenAddress")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"fee")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"tokenAddress"),"), which are the variables needed to compute each pool contract address in our sequence of swaps. The multihop swap router code will automatically find the correct pool with these variables, and execute the swap needed within each pool in our sequence."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"recipient"),": the destination address of the outbound asset."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deadline"),": the unix time after which a transaction will be reverted, to protect against long delays and the increased chance of large price swings therein."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"amountIn"),": the amount of the inbound asset"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"amountOutMin"),": the minimum amount of the outbound asset, less than which will cause the transaction to revert. For the sake of this example we will set it to ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),", in production one will need to use the SDK to quote an expected price, or an on chain price oracle for more advanced manipulation resistant systems.")),(0,o.kt)("h3",{id:"calling-the-function"},"Calling the function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"    /// @notice swapExactInputMultihop swaps a fixed amount of DAI for a maximum possible amount of WETH9 through an intermediary pool.\n    /// For this example, we will swap DAI to USDC, then USDC to WETH9 to achieve our desired output.\n    /// @dev The calling address must approve this contract to spend at least `amountIn` worth of its DAI for this function to succeed.\n    /// @param amountIn The amount of DAI to be swapped.\n    /// @return amountOut The amount of WETH9 received after the swap.\n    function swapExactInputMultihop(uint256 amountIn) external returns (uint256 amountOut) {\n        // Transfer `amountIn` of DAI to this contract.\n        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountIn);\n\n        // Approve the router to spend DAI.\n        TransferHelper.safeApprove(DAI, address(swapRouter), amountIn);\n\n        // Multiple pool swaps are encoded through bytes called a `path`. A path is a sequence of token addresses and poolFees that define the pools used in the swaps.\n        // The format for pool encoding is (tokenIn, fee, tokenOut/tokenIn, fee, tokenOut) where tokenIn/tokenOut parameter is the shared token across the pools.\n        // Since we are swapping DAI to USDC and then USDC to WETH9 the path encoding is (DAI, 0.3%, USDC, 0.3%, WETH9).\n        ISwapRouter.ExactInputParams memory params =\n            ISwapRouter.ExactInputParams({\n                path: abi.encodePacked(DAI, poolFee, USDC, poolFee, WETH9),\n                recipient: msg.sender,\n                deadline: block.timestamp,\n                amountIn: amountIn,\n                amountOutMinimum: 0\n            });\n\n        // Executes the swap.\n        amountOut = swapRouter.exactInput(params);\n    }\n")),(0,o.kt)("h2",{id:"exact-output-multihop-swap"},"Exact Output Multihop Swap"),(0,o.kt)("p",null,"An exact output swap will swap a variable amount of the input token for a fixed amount of the outbound token. This is the less common technique for multihop swaps. The code for swapping is largely the same except for one notable difference, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Path")," is encoded backwards, as an exact output swap is executed in reverse order to pass down the necessary variables for the chain of transactions"),(0,o.kt)("h3",{id:"input-parameters-1"},"Input Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": The path is a sequence of ",(0,o.kt)("inlineCode",{parentName:"li"},"tokenAddress")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Fee")," ",(0,o.kt)("inlineCode",{parentName:"li"},"tokenAddress"),", ",(0,o.kt)("em",{parentName:"li"},"encoded in reverse order"),", which are the variables needed to compute each pool contract address in our sequence of swaps. The multihop swap router code will automatically find the correct pool with these variables, and execute the swap needed within each pool in our sequence."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"recipient"),": the destination address of the outbound asset."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deadline"),": the unix time after which a transaction will be reverted, to protect against long delays and the increased chance of large price swings therein."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"amountOut"),": The desired amount of WETH9."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"amountInMaximum"),": The maximum amount of DAI willing to be swapped for the specified amountOut of WETH9.")),(0,o.kt)("h3",{id:"calling-the-function-1"},"Calling the function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'    /// @notice swapExactOutputMultihop swaps a minimum possible amount of DAI for a fixed amount of WETH through an intermediary pool.\n    /// For this example, we want to swap DAI for WETH9 through a USDC pool but we specify the desired amountOut of WETH9. Notice how the path encoding is slightly different in for exact output swaps.\n    /// @dev The calling address must approve this contract to spend its DAI for this function to succeed. As the amount of input DAI is variable,\n    /// the calling address will need to approve for a slightly higher amount, anticipating some variance.\n    /// @param amountOut The desired amount of WETH9.\n    /// @param amountInMaximum The maximum amount of DAI willing to be swapped for the specified amountOut of WETH9.\n    /// @return amountIn The amountIn of DAI actually spent to receive the desired amountOut.\n    function swapExactOutputMultihop(uint256 amountOut, uint256 amountInMaximum) external returns (uint256 amountIn) {\n        // Transfer the specified `amountInMaximum` to this contract.\n        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountInMaximum);\n        // Approve the router to spend  `amountInMaximum`.\n        TransferHelper.safeApprove(DAI, address(swapRouter), amountInMaximum);\n\n        // The parameter path is encoded as (tokenOut, fee, tokenIn/tokenOut, fee, tokenIn)\n        // The tokenIn/tokenOut field is the shared token between the two pools used in the multiple pool swap. In this case USDC is the "shared" token.\n        // For an exactOutput swap, the first swap that occurs is the swap which returns the eventual desired token.\n        // In this case, our desired output token is WETH9 so that swap happens first, and is encoded in the path accordingly.\n        ISwapRouter.ExactOutputParams memory params =\n            ISwapRouter.ExactOutputParams({\n                path: abi.encodePacked(WETH9, poolFee, USDC, poolFee, DAI),\n                recipient: msg.sender,\n                deadline: block.timestamp,\n                amountOut: amountOut,\n                amountInMaximum: amountInMaximum\n            });\n\n        // Executes the swap, returning the amountIn actually spent.\n        amountIn = swapRouter.exactOutput(params);\n\n        // If the swap did not require the full amountInMaximum to achieve the exact amountOut then we refund msg.sender and approve the router to spend 0.\n        if (amountIn < amountInMaximum) {\n            TransferHelper.safeApprove(DAI, address(swapRouter), 0);\n            TransferHelper.safeTransferFrom(DAI, address(this), msg.sender, amountInMaximum - amountIn);\n        }\n    }\n')),(0,o.kt)("h2",{id:"the-full-contract"},"The Full Contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: GPL-2.0-or-later\npragma solidity =0.7.6;\npragma abicoder v2;\n\nimport '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';\nimport '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';\n\ncontract SwapExamples {\n    // For the scope of these swap examples,\n    // we will detail the design considerations when using\n    // `exactInput`, `exactInputSingle`, `exactOutput`, and  `exactOutputSingle`.\n\n    // It should be noted that for the sake of these examples, we purposefully pass in the swap router instead of inherit the swap router for simplicity.\n    // More advanced example contracts will detail how to inherit the swap router safely.\n\n    ISwapRouter public immutable swapRouter;\n\n    // This example swaps DAI/WETH9 for single path swaps and DAI/USDC/WETH9 for multi path swaps.\n\n    address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;\n    address public constant WETH9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;\n    address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;\n\n    // For this example, we will set the pool fee to 0.3%.\n    uint24 public constant poolFee = 3000;\n\n    constructor(ISwapRouter _swapRouter) {\n        swapRouter = _swapRouter;\n    }\n\n    /// @notice swapInputMultiplePools swaps a fixed amount of DAI for a maximum possible amount of WETH9 through an intermediary pool.\n    /// For this example, we will swap DAI to USDC, then USDC to WETH9 to achieve our desired output.\n    /// @dev The calling address must approve this contract to spend at least `amountIn` worth of its DAI for this function to succeed.\n    /// @param amountIn The amount of DAI to be swapped.\n    /// @return amountOut The amount of WETH9 received after the swap.\n    function swapExactInputMultihop(uint256 amountIn) external returns (uint256 amountOut) {\n        // Transfer `amountIn` of DAI to this contract.\n        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountIn);\n\n        // Approve the router to spend DAI.\n        TransferHelper.safeApprove(DAI, address(swapRouter), amountIn);\n\n        // Multiple pool swaps are encoded through bytes called a `path`. A path is a sequence of token addresses and poolFees that define the pools used in the swaps.\n        // The format for pool encoding is (tokenIn, fee, tokenOut/tokenIn, fee, tokenOut) where tokenIn/tokenOut parameter is the shared token across the pools.\n        // Since we are swapping DAI to USDC and then USDC to WETH9 the path encoding is (DAI, 0.3%, USDC, 0.3%, WETH9).\n        ISwapRouter.ExactInputParams memory params =\n            ISwapRouter.ExactInputParams({\n                path: abi.encodePacked(DAI, poolFee, USDC, poolFee, WETH9),\n                recipient: msg.sender,\n                deadline: block.timestamp,\n                amountIn: amountIn,\n                amountOutMinimum: 0\n            });\n\n        // Executes the swap.\n        amountOut = swapRouter.exactInput(params);\n    }\n\n    /// @notice swapExactOutputMultihop swaps a minimum possible amount of DAI for a fixed amount of WETH through an intermediary pool.\n    /// For this example, we want to swap DAI for WETH9 through a USDC pool but we specify the desired amountOut of WETH9. Notice how the path encoding is slightly different in for exact output swaps.\n    /// @dev The calling address must approve this contract to spend its DAI for this function to succeed. As the amount of input DAI is variable,\n    /// the calling address will need to approve for a slightly higher amount, anticipating some variance.\n    /// @param amountOut The desired amount of WETH9.\n    /// @param amountInMaximum The maximum amount of DAI willing to be swapped for the specified amountOut of WETH9.\n    /// @return amountIn The amountIn of DAI actually spent to receive the desired amountOut.\n    function swapExactOutputMultihop(uint256 amountOut, uint256 amountInMaximum) external returns (uint256 amountIn) {\n        // Transfer the specified `amountInMaximum` to this contract.\n        TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountInMaximum);\n        // Approve the router to spend  `amountInMaximum`.\n        TransferHelper.safeApprove(DAI, address(swapRouter), amountInMaximum);\n\n        // The parameter path is encoded as (tokenOut, fee, tokenIn/tokenOut, fee, tokenIn)\n        // The tokenIn/tokenOut field is the shared token between the two pools used in the multiple pool swap. In this case USDC is the \"shared\" token.\n        // For an exactOutput swap, the first swap that occurs is the swap which returns the eventual desired token.\n        // In this case, our desired output token is WETH9 so that swap happpens first, and is encoded in the path accordingly.\n        ISwapRouter.ExactOutputParams memory params =\n            ISwapRouter.ExactOutputParams({\n                path: abi.encodePacked(WETH9, poolFee, USDC, poolFee, DAI),\n                recipient: msg.sender,\n                deadline: block.timestamp,\n                amountOut: amountOut,\n                amountInMaximum: amountInMaximum\n            });\n\n        // Executes the swap, returning the amountIn actually spent.\n        amountIn = swapRouter.exactOutput(params);\n\n        // If the swap did not require the full amountInMaximum to achieve the exact amountOut then we refund msg.sender and approve the router to spend 0.\n        if (amountIn < amountInMaximum) {\n            TransferHelper.safeApprove(DAI, address(swapRouter), 0);\n            TransferHelper.safeTransferFrom(DAI, address(this), msg.sender, amountInMaximum - amountIn);\n        }\n    }\n}\n")))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,s(s({ref:t},l),{},{components:n})):a.createElement(h,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);