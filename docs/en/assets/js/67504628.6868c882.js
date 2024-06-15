"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[2799],{93537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(83117),o=(n(67294),n(3905));const a={id:"pool-manager-and-pool-initialization",title:"Pool Manager and Pool Initialization",sidebar_position:1},r="PoolManager",l={unversionedId:"contracts/v4/concepts/pool-manager-and-pool-initialization",id:"contracts/v4/concepts/pool-manager-and-pool-initialization",title:"Pool Manager and Pool Initialization",description:"To understand the major parts of the PoolManager, let's look at the the main interface: IPoolManager.sol.",source:"@site/docs/contracts/v4/concepts/02-2-pool-manager-and-initialization.mdx",sourceDirName:"contracts/v4/concepts",slug:"/contracts/v4/concepts/pool-manager-and-pool-initialization",permalink:"/uniswap-docs/en/contracts/v4/concepts/pool-manager-and-pool-initialization",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v4/concepts/02-2-pool-manager-and-initialization.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"pool-manager-and-pool-initialization",title:"Pool Manager and Pool Initialization",sidebar_position:1},sidebar:"contractsSidebar",previous:{title:"V4 Architecture Overview",permalink:"/uniswap-docs/en/contracts/v4/concepts/v4-architecture-overview"},next:{title:"Managing Positions",permalink:"/uniswap-docs/en/contracts/v4/concepts/managing-positions"}},s={},c=[{value:"Lifecycle Functions",id:"lifecycle-functions",level:3},{value:"Balance Functions",id:"balance-functions",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"poolmanager"},"PoolManager"),(0,o.kt)("p",null,"To understand the major parts of the PoolManager, let's look at the the main interface: ",(0,o.kt)("inlineCode",{parentName:"p"},"IPoolManager.sol"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v4-core/blob/main/src/interfaces/IPoolManager.sol"},"https://github.com/Uniswap/v4-core/blob/main/src/interfaces/IPoolManager.sol")),(0,o.kt)("h3",{id:"lifecycle-functions"},"Lifecycle Functions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"initialize"),": This function initializes a new pool with specified parameters such as pool key, initial price, and\noptional hook data, setting up the fundamental characteristics of the pool.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"swap"),": Allows users to exchange one type of currency for another within a specified pool, adhering to set limits\nand conditions, and adjusting the pool's state accordingly.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"modifyLiquidity"),": Enables users to change the amount of liquidity they've provided to a pool, either by adding or\nremoving it, based on specified upper and lower tick limits."))),(0,o.kt)("h3",{id:"balance-functions"},"Balance Functions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"mint (related to ERC6909 claims)"),": Used for creating new claim tokens (as per ERC6909 standards) for a user,\ndenoting specific rights or entitlements, but not representing liquidity provider (LP) receipt tokens.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"burn (related to ERC6909 claims)"),": Allows users to destroy their claim tokens (compliant with ERC6909),\neffectively relinquishing the rights or entitlements those tokens represented.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"take"),': This function allows users to withdraw or "net out" a specified amount of a currency, which could be seen\nas a mechanism for zero-cost flash loans under certain conditions.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"settle"),": Used by users to pay off any outstanding amounts they owe, potentially in a different currency, with\nthe function returning the amount paid."))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mint")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"burn")," functions are specifically related to handling ERC6909 claims, which are distinct from liquidity\nprovider receipt tokens. These functions deal with specific claims or entitlements rather than the representation of a\nuser's share in the liquidity pool."),(0,o.kt)("h1",{id:"pool-initialization"},"Pool Initialization"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize")," function sets up a new liquidity pool in Uniswap. It takes necessary information such as currencies\nand pricing info, and hook information as inputs, checks various conditions to ensure that the pool is set up correctly,\nand sets initial values for the pool."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v4-core/blob/main/src/PoolManager.sol"},"https://github.com/Uniswap/v4-core/blob/main/src/PoolManager.sol")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: BUSL-1.1\npragma solidity ^0.8.20;\n\n// ... [other imports and contract definitions]\n\n/// @notice Holds the state for all pools\ncontract PoolManager is IPoolManager, Fees, NoDelegateCall, ERC6909Claims {\n    // ... [other definitions and functions]\n\n    /// @inheritdoc IPoolManager\n    function initialize(PoolKey memory key, uint160 sqrtPriceX96, bytes calldata hookData)\n        external\n        override\n        onlyByLocker // Modifier ensures only the current locker can call this function\n        returns (int24 tick)\n    {\n        // Check if the fee specified in the key is too large\n        if (key.fee.isStaticFeeTooLarge()) revert FeeTooLarge();\n\n        // Validate tick spacing - it must be within defined min and max limits\n        if (key.tickSpacing > MAX_TICK_SPACING) revert TickSpacingTooLarge();\n        if (key.tickSpacing < MIN_TICK_SPACING) revert TickSpacingTooSmall();\n\n        // Ensure the currency order is correct (currency0 < currency1)\n        if (key.currency0 >= key.currency1) revert CurrenciesOutOfOrderOrEqual();\n\n        // Validate the hooks contract address\n        if (!key.hooks.isValidHookAddress(key.fee)) revert Hooks.HookAddressNotValid(address(key.hooks));\n\n        // Call before initialization hook with provided data\n        key.hooks.beforeInitialize(key, sqrtPriceX96, hookData);\n\n        // Convert the PoolKey to a PoolId\n        PoolId id = key.toId();\n\n        // Fetch protocol fee and dynamic swap fee if applicable\n        (, uint16 protocolFee) = _fetchProtocolFee(key);\n        uint24 swapFee = key.fee.isDynamicFee() ? _fetchDynamicSwapFee(key) : key.fee.getStaticFee();\n\n        // Initialize the pool with the given parameters and receive the current tick\n        tick = pools[id].initialize(sqrtPriceX96, protocolFee, swapFee);\n\n        // Call after initialization hook with the resulting data\n        key.hooks.afterInitialize(key, sqrtPriceX96, tick, hookData);\n\n        // Emit an event to signal the initialization of the pool with key details\n        emit Initialize(id, key.currency0, key.currency1, key.fee, key.tickSpacing, key.hooks);\n    }\n\n    // ... [other functions]\n}\n")),(0,o.kt)("p",null,"Upon success, the transaction announces a new pool was created by emitting an ",(0,o.kt)("inlineCode",{parentName:"p"},"Initialize")," event."),(0,o.kt)("h1",{id:"poolkey"},"PoolKey"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"PoolKey")," is a structure that uniquely identifies a liquidity pool by storing its details -- the two\ncurrencies involved (sorted numerically), the swap fee, tick spacing, and hooks (extra functionalities) of the pool."),(0,o.kt)("p",null,"It acts as a unique identifier, ensuring that each pool can be precisely specified and accessed within the code."),(0,o.kt)("p",null,"The liquidity for a PoolKey is unique to that pool alone"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"/// @notice Returns the key for identifying a pool\nstruct PoolKey {\n    /// @notice The lower currency of the pool, sorted numerically\n    Currency currency0;\n    /// @notice The higher currency of the pool, sorted numerically\n    Currency currency1;\n    /// @notice The pool swap fee, capped at 1_000_000. The upper 4 bits determine if the hook sets any fees.\n    uint24 fee;\n    /// @notice Ticks that involve positions must be a multiple of tick spacing\n    int24 tickSpacing;\n    /// @notice The hooks of the pool\n    IHooks hooks;\n}\n")),(0,o.kt)("p",null,"Since we create and pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"PoolKey")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize")," function, and as part of the PoolKey we pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks")," we\nwant to use for the pool."),(0,o.kt)("p",null,"We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks")," to customize the pool to our liking."),(0,o.kt)("h1",{id:"initialization-code"},"Initialization Code"),(0,o.kt)("p",null,"Here are the important parts of the initialization code from the ",(0,o.kt)("inlineCode",{parentName:"p"},"PoolManagerInitializeTest")," contract."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v4-core/blob/main/test/PoolManagerInitialize.t.sol"},"https://github.com/Uniswap/v4-core/blob/main/test/PoolManagerInitialize.t.sol")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'\ncontract Deployers {\n  function deployFreshManager() internal {\n    manager = new PoolManager(500000);\n  }\n\n  function deployFreshManagerAndRouters() internal {\n    deployFreshManager();\n\n    // Initialize various routers with the deployed manager. These routers likely handle\n    // different aspects of the pool\'s functionality, such as swapping, liquidity modification, etc.\n    swapRouter = new PoolSwapTest(manager);\n    modifyLiquidityRouter = new PoolModifyLiquidityTest(manager);\n    donateRouter = new PoolDonateTest(manager);\n    takeRouter = new PoolTakeTest(manager);\n    initializeRouter = new PoolInitializeTest(manager); // This is the router that is used to initialize the pool\n\n    // ... [other routers]\n  }\n}\n\ncontract PoolManagerInitializeTest is Test, Deployers, GasSnapshot {\n    function setUp() public {\n      deployFreshManagerAndRouters();\n\n      (currency0, currency1) = deployMintAndApprove2Currencies();\n\n      uninitializedKey = PoolKey({\n          currency0: currency0,\n          currency1: currency1,\n          fee: 3000,\n          hooks: IHooks(ADDRESS_ZERO),\n          tickSpacing: 60\n      });\n    }\n\n    function test_initialize_succeedsWithHooks(uint160 sqrtPriceX96) public {\n        // Assumptions tested in Pool.t.sol\n        sqrtPriceX96 = uint160(bound(sqrtPriceX96, TickMath.MIN_SQRT_RATIO, TickMath.MAX_SQRT_RATIO - 1));\n\n        address payable mockAddr = payable(address(uint160(Hooks.BEFORE_INITIALIZE_FLAG | Hooks.AFTER_INITIALIZE_FLAG)));\n        address payable hookAddr = payable(MOCK_HOOKS);\n\n        vm.etch(hookAddr, vm.getDeployedCode("EmptyTestHooks.sol:EmptyTestHooks"));\n        MockContract mockContract = new MockContract();\n        vm.etch(mockAddr, address(mockContract).code);\n\n        MockContract(mockAddr).setImplementation(hookAddr);\n\n        uninitializedKey.hooks = IHooks(mockAddr);\n\n        // Call initialize function with the uninitialized key and the specified sqrtPriceX96\n        int24 tick = initializeRouter.initialize(uninitializedKey, sqrtPriceX96, ZERO_BYTES);\n        (Pool.Slot0 memory slot0,,,) = manager.pools(uninitializedKey.toId());\n        assertEq(slot0.sqrtPriceX96, sqrtPriceX96, "sqrtPrice");\n\n    }\n}\n')))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);