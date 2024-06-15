"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[8173],{47176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(83117),i=(n(67294),n(3905));const r={id:"hook-deployment",title:"Hook Deployment",sidebar_position:6},o="Hook Deployment",s={unversionedId:"contracts/v4/concepts/hook-deployment",id:"contracts/v4/concepts/hook-deployment",title:"Hook Deployment",description:"Each hook is associated with a specific flag, represented as a constant within the contract. These constants are",source:"@site/docs/contracts/v4/concepts/07-deployment.mdx",sourceDirName:"contracts/v4/concepts",slug:"/contracts/v4/concepts/hook-deployment",permalink:"/uniswap-docs/en/contracts/v4/concepts/hook-deployment",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v4/concepts/07-deployment.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"hook-deployment",title:"Hook Deployment",sidebar_position:6},sidebar:"contractsSidebar",previous:{title:"Lock Mechanism - Flash Accounting",permalink:"/uniswap-docs/en/contracts/v4/concepts/lock-mechanism"},next:{title:"Building your own hook",permalink:"/uniswap-docs/en/contracts/v4/first-hook/building-your-own-hook"}},l={},d=[{value:"1. One Hook",id:"1-one-hook",level:3},{value:"<strong>Example 1: Just BEFORE_SWAP_FLAG</strong>",id:"example-1-just-before_swap_flag",level:4},{value:"<strong>Example 2: Just AFTER_DONATE_FLAG</strong>",id:"example-2-just-after_donate_flag",level:4},{value:"2. Two Hooks",id:"2-two-hooks",level:3},{value:"<strong>Example 3: BEFORE_SWAP_FLAG and AFTER_SWAP_FLAG</strong>",id:"example-3-before_swap_flag-and-after_swap_flag",level:4},{value:"<strong>Example 4: BEFORE_INITIALIZE_FLAG and AFTER_INITIALIZE_FLAG</strong>",id:"example-4-before_initialize_flag-and-after_initialize_flag",level:4}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hook-deployment"},"Hook Deployment"),(0,i.kt)("p",null,"Each hook is associated with a specific flag, represented as a constant within the contract. These constants are\nbit positions in an address. For instance, the ",(0,i.kt)("inlineCode",{parentName:"p"},"BEFORE_INITIALIZE_FLAG")," is represented by a bit shift of ",(0,i.kt)("inlineCode",{parentName:"p"},"1 << 159"),",\nindicating it corresponds to the 160th bit in the address. When a hooks contract is deployed, its address's leading\nbits are inspected to determine which hooks are enabled."),(0,i.kt)("p",null,"The PoolManager, during initialization, calls the Hooks library to verify if the hooks are deployed at the correct addresses."),(0,i.kt)("p",null,"For example, a hooks contract deployed at the address ",(0,i.kt)("inlineCode",{parentName:"p"},"0x9000000000000000000000000000000000000000")," has leading bits\n'1001'. This configuration activates the hooks corresponding to these bits, such as the 'before initialize' and 'after\nadd liquidity' hooks. This approach provides a compact and efficient method for encoding permissions directly into\nthe contract's address."),(0,i.kt)("p",null,"This encoding indicates that two specific hooks ('before initialize' and 'after add liquidity') will be triggered. In the provided address:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The leading ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," at the second-highest position aligns with the ",(0,i.kt)("inlineCode",{parentName:"li"},"BEFORE_INITIALIZE_FLAG")," (bit 159), and"),(0,i.kt)("li",{parentName:"ul"},"The trailing ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," in the sequence ",(0,i.kt)("inlineCode",{parentName:"li"},"1001")," aligns with the ",(0,i.kt)("inlineCode",{parentName:"li"},"AFTER_ADD_LIQUIDITY_FLAG")," (bit 156).")),(0,i.kt)("p",null,"The other two ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"s in the sequence indicate that the ",(0,i.kt)("inlineCode",{parentName:"p"},"AFTER_INITIALIZE_FLAG")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BEFORE_ADD_LIQUIDITY_FLAG")," are not set."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Hex Hook Address"),(0,i.kt)("th",{parentName:"tr",align:null},"Binary Address"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x8000000000000000000000000000000000000000")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1000 0000...")," (bit 159)"),(0,i.kt)("td",{parentName:"tr",align:null},"BEFORE_INITIALIZE_FLAG")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x4000000000000000000000000000000000000000")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0100 0000...")," (bit 158)"),(0,i.kt)("td",{parentName:"tr",align:null},"AFTER_INITIALIZE_FLAG")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x2000000000000000000000000000000000000000")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0010 0000...")," (bit 157)"),(0,i.kt)("td",{parentName:"tr",align:null},"BEFORE_ADD_LIQUIDITY_FLAG")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x1000000000000000000000000000000000000000")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0001 0000...")," (bit 156)"),(0,i.kt)("td",{parentName:"tr",align:null},"AFTER_ADD_LIQUIDITY_FLAG")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x0800000000000000000000000000000000000000")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0000 1000...")," (bit 155)"),(0,i.kt)("td",{parentName:"tr",align:null},"BEFORE_REMOVE_LIQUIDITY_FLAG")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x0400000000000000000000000000000000000000")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0000 0100...")," (bit 154)"),(0,i.kt)("td",{parentName:"tr",align:null},"AFTER_REMOVE_LIQUIDITY_FLAG")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x0200000000000000000000000000000000000000")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0000 0010...")," (bit 153)"),(0,i.kt)("td",{parentName:"tr",align:null},"BEFORE_SWAP_FLAG")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x0100000000000000000000000000000000000000")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0000 0001...")," (bit 152)"),(0,i.kt)("td",{parentName:"tr",align:null},"AFTER_SWAP_FLAG")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x0080000000000000000000000000000000000000")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0000 0000 1000...")," (bit 151)"),(0,i.kt)("td",{parentName:"tr",align:null},"BEFORE_DONATE_FLAG")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x0040000000000000000000000000000000000000")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0000 0000 0100...")," (bit 150)"),(0,i.kt)("td",{parentName:"tr",align:null},"AFTER_DONATE_FLAG")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x0020000000000000000000000000000000000000")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0000 0000 0010...")," (bit 149)"),(0,i.kt)("td",{parentName:"tr",align:null},"NO_OP_FLAG")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0x0010000000000000000000000000000000000000")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0000 0000 0001...")," (bit 148)"),(0,i.kt)("td",{parentName:"tr",align:null},"ACCESS_LOCK_FLAG")))),(0,i.kt)("p",null,"To generate valid hook addresses based on the code provided, we focus on the leading bits that indicate\nwhich hooks are invoked. Each flag corresponds to specific leading bits in the address, as indicated by\nthe constants provided."),(0,i.kt)("p",null,"Here are some example addresses based on the flags:"),(0,i.kt)("h3",{id:"1-one-hook"},"1. One Hook"),(0,i.kt)("h4",{id:"example-1-just-before_swap_flag"},(0,i.kt)("strong",{parentName:"h4"},"Example 1: Just BEFORE_SWAP_FLAG")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Address: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x2000000000000000000000000000000000000000")),(0,i.kt)("li",{parentName:"ul"},"Leading bits: '0010...'"),(0,i.kt)("li",{parentName:"ul"},"Explanation: The flag for \"before swap\" is set by having a '1' in the 153rd bit (from the right), represented by ",(0,i.kt)("inlineCode",{parentName:"li"},"0x2000000000000000000000000000000000000000")," in hexadecimal.")),(0,i.kt)("h4",{id:"example-2-just-after_donate_flag"},(0,i.kt)("strong",{parentName:"h4"},"Example 2: Just AFTER_DONATE_FLAG")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Address: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x4000000000000000000000000000000000000000")),(0,i.kt)("li",{parentName:"ul"},"Leading bits: '0100...'"),(0,i.kt)("li",{parentName:"ul"},"Explanation: The flag for \"after donate\" is set by having a '1' in the 150th bit, indicated by ",(0,i.kt)("inlineCode",{parentName:"li"},"0x4000000000000000000000000000000000000000"),".")),(0,i.kt)("h3",{id:"2-two-hooks"},"2. Two Hooks"),(0,i.kt)("h4",{id:"example-3-before_swap_flag-and-after_swap_flag"},(0,i.kt)("strong",{parentName:"h4"},"Example 3: BEFORE_SWAP_FLAG and AFTER_SWAP_FLAG")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Address: ",(0,i.kt)("inlineCode",{parentName:"li"},"0x3000000000000000000000000000000000000000")),(0,i.kt)("li",{parentName:"ul"},"Leading bits: '0011...'"),(0,i.kt)("li",{parentName:"ul"},'Explanation: Combining flags for "before swap" and "after swap" requires setting bits 153 and 152, resulting in ',(0,i.kt)("inlineCode",{parentName:"li"},"0x3000000000000000000000000000000000000000"),".")),(0,i.kt)("h4",{id:"example-4-before_initialize_flag-and-after_initialize_flag"},(0,i.kt)("strong",{parentName:"h4"},"Example 4: BEFORE_INITIALIZE_FLAG and AFTER_INITIALIZE_FLAG")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Address: ",(0,i.kt)("inlineCode",{parentName:"li"},"0xC000000000000000000000000000000000000000")),(0,i.kt)("li",{parentName:"ul"},"Leading bits: '1100...'"),(0,i.kt)("li",{parentName:"ul"},'Explanation: The combination of "before initialize" and "after initialize" sets bits 159 and 158, represented by ',(0,i.kt)("inlineCode",{parentName:"li"},"0xC000000000000000000000000000000000000000"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"library Hooks {\n    // These flags are defined using bitwise left shifts. The `1 << n` operation means that the binary number `1` is shifted\n    // to the left by `n` positions, effectively placing a `1` at the `n`th bit position (counting from the right and\n    // starting from 0). This technique is commonly used in programming to set a specific bit in a number, which can be used\n    // as a flag. In Ethereum addresses, which are 160 bits long, these flags correspond to the leading bits because of the\n    // high positions of the shift (e.g., 159, 158).\n\n    uint256 internal constant BEFORE_INITIALIZE_FLAG = 1 << 159; // (Bit 159)\n    uint256 internal constant AFTER_INITIALIZE_FLAG = 1 << 158; // (Bit 158)\n    uint256 internal constant BEFORE_ADD_LIQUIDITY_FLAG = 1 << 157; // (Bit 157)\n    uint256 internal constant AFTER_ADD_LIQUIDITY_FLAG = 1 << 156; // (Bit 156)\n    uint256 internal constant BEFORE_REMOVE_LIQUIDITY_FLAG = 1 << 155; // (Bit 155)\n    uint256 internal constant AFTER_REMOVE_LIQUIDITY_FLAG = 1 << 154; // (Bit 154)\n    uint256 internal constant BEFORE_SWAP_FLAG = 1 << 153; // (Bit 153)\n    uint256 internal constant AFTER_SWAP_FLAG = 1 << 152; // (Bit 152)\n    uint256 internal constant BEFORE_DONATE_FLAG = 1 << 151; // (Bit 151)\n    uint256 internal constant AFTER_DONATE_FLAG = 1 << 150; // (Bit 150)\n    uint256 internal constant NO_OP_FLAG = 1 << 149; // (Bit 149)\n    uint256 internal constant ACCESS_LOCK_FLAG = 1 << 148; // (Bit 148)\n\n\n    /// @notice Utility function intended to be used in hook constructors to ensure\n    /// the deployed hooks address causes the intended hooks to be called\n    /// @param permissions The hooks that are intended to be called\n    /// @dev permissions param is memory as the function will be called from constructors\n    function validateHookPermissions(IHooks self, Permissions memory permissions) internal pure {\n        if (\n            permissions.beforeInitialize != self.hasPermission(BEFORE_INITIALIZE_FLAG)\n                || permissions.afterInitialize != self.hasPermission(AFTER_INITIALIZE_FLAG)\n                || permissions.beforeAddLiquidity != self.hasPermission(BEFORE_ADD_LIQUIDITY_FLAG)\n                || permissions.afterAddLiquidity != self.hasPermission(AFTER_ADD_LIQUIDITY_FLAG)\n                || permissions.beforeRemoveLiquidity != self.hasPermission(BEFORE_REMOVE_LIQUIDITY_FLAG)\n                || permissions.afterRemoveLiquidity != self.hasPermission(AFTER_REMOVE_LIQUIDITY_FLAG)\n                || permissions.beforeSwap != self.hasPermission(BEFORE_SWAP_FLAG)\n                || permissions.afterSwap != self.hasPermission(AFTER_SWAP_FLAG)\n                || permissions.beforeDonate != self.hasPermission(BEFORE_DONATE_FLAG)\n                || permissions.afterDonate != self.hasPermission(AFTER_DONATE_FLAG)\n                || permissions.noOp != self.hasPermission(NO_OP_FLAG)\n                || permissions.accessLock != self.hasPermission(ACCESS_LOCK_FLAG)\n        ) {\n            revert HookAddressNotValid(address(self));\n        }\n    }\n\n   function hasPermission(IHooks self, uint256 flag) internal pure returns (bool) {\n        return uint256(uint160(address(self))) & flag != 0;\n    }\n}\n")),(0,i.kt)("h1",{id:"create2"},"CREATE2"),(0,i.kt)("p",null,"Ethereum blockchain allows you to create contracts. There are two ways to create\nthese contracts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"CREATE"),": This is the regular way. Every time you create a contract using this, it gets a new, unique\naddress (like a house getting a unique postal address).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"CREATE2"),": This is a advanced way. Here, you use your address, a ",(0,i.kt)("inlineCode",{parentName:"p"},"salt")," which is a unique number you choose, and\nthe contract's code called ",(0,i.kt)("inlineCode",{parentName:"p"},"bytecode")," to create the contract. The magic of ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE2")," is that if you use the same\nfields, you'll get the same contract address every time."))),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE2")," helps ensure that the hook is deployed to the exact right address."),(0,i.kt)("p",null,"Here's a small code that predicts the address where a contract will be deployed using ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE2")," before actually\ndeploying it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"bytes32 salt = keccak256(abi.encodePacked(someData));\naddress predictedAddress = address(uint(keccak256(abi.encodePacked(\n    byte(0xff),\n    deployerAddress,\n    salt,\n    keccak256(bytecode)\n))));\n")),(0,i.kt)("h1",{id:"deterministic-deployment-proxy"},"Deterministic Deployment Proxy"),(0,i.kt)("p",null,"Many developers use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Arachnid/deterministic-deployment-proxy"},"https://github.com/Arachnid/deterministic-deployment-proxy")," to deploy contracts to a specific\naddress. The main feature of this project is the use of the Ethereum CREATE2 opcode, which allows for deterministic\ndeployment of contracts. The deployment proxy also enables the same address across different networks."),(0,i.kt)("p",null,"Most of the chains do have the deployment proxy at ",(0,i.kt)("inlineCode",{parentName:"p"},"0x4e59b44847b379578588920cA78FbF26c0B4956C"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v4-periphery/issues/59#issuecomment-1716379675"},"here"),"\nfor more details."),(0,i.kt)("h1",{id:"hook-deployment-code"},"Hook Deployment Code"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/uniswapfoundation/v4-template"},"https://github.com/uniswapfoundation/v4-template")," repository contains some helper utilities for deploying hooks."),(0,i.kt)("p",null,"Here is the code for deploying the hooks using Deterministic Deployment Proxy which is deployed at ",(0,i.kt)("inlineCode",{parentName:"p"},"0x4e59b44847b379578588920cA78FbF26c0B4956C"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'contract CounterScript is Script {\n    address constant CREATE2_DEPLOYER = address(0x4e59b44847b379578588920cA78FbF26c0B4956C);\n    address constant GOERLI_POOLMANAGER = address(0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b);\n\n    function setUp() public {}\n\n    function run() public {\n        // hook contracts must have specific flags encoded in the address\n        uint160 flags = uint160(\n            Hooks.BEFORE_SWAP_FLAG | Hooks.AFTER_SWAP_FLAG | Hooks.BEFORE_ADD_LIQUIDITY_FLAG\n                | Hooks.BEFORE_REMOVE_LIQUIDITY_FLAG\n        );\n\n        // Mine a salt that will produce a hook address with the correct flags\n        (address hookAddress, bytes32 salt) =\n            HookMiner.find(CREATE2_DEPLOYER, flags, type(Counter).creationCode, abi.encode(address(GOERLI_POOLMANAGER)));\n\n        // Deploy the hook using CREATE2\n        vm.broadcast();\n        Counter counter = new Counter{salt: salt}(IPoolManager(address(GOERLI_POOLMANAGER)));\n        require(address(counter) == hookAddress, "CounterScript: hook address mismatch");\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/uniswapfoundation/v4-template/blob/main/script/CounterDeploy.s.sol"},"https://github.com/uniswapfoundation/v4-template/blob/main/script/CounterDeploy.s.sol")),(0,i.kt)("p",null,"Note: This is a Foundry script, and it won't work for hardhat."),(0,i.kt)("p",null,"Read more about deploying your own hooks ",(0,i.kt)("a",{parentName:"p",href:"/contracts/v4/first-hook/hook-deployment"},"here"),"."))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);