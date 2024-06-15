"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[8120],{61e3:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(83117),r=(a(67294),a(3905));const l={},p=void 0,o={unversionedId:"contracts/v3/reference/periphery/SwapRouter",id:"contracts/v3/reference/periphery/SwapRouter",title:"SwapRouter",description:"Router for stateless execution of swaps against Uniswap V3",source:"@site/docs/contracts/v3/reference/periphery/SwapRouter.md",sourceDirName:"contracts/v3/reference/periphery",slug:"/contracts/v3/reference/periphery/SwapRouter",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/SwapRouter",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/SwapRouter.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"NonfungibleTokenPositionDescriptor",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/NonfungibleTokenPositionDescriptor"},next:{title:"V3Migrator",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/V3Migrator"}},i={},u=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"uniswapV3SwapCallback",id:"uniswapv3swapcallback",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"exactInputSingle",id:"exactinputsingle",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"exactInput",id:"exactinput",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-1",level:4},{value:"exactOutputSingle",id:"exactoutputsingle",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Return Values:",id:"return-values-2",level:4},{value:"exactOutput",id:"exactoutput",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Return Values:",id:"return-values-3",level:4}],s={toc:u};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Router for stateless execution of swaps against Uniswap V3"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Input parameters are viewable on the ",(0,r.kt)("a",{parentName:"p",href:"./interfaces/ISwapRouter"},(0,r.kt)("strong",{parentName:"a"},"Swap Router Interface")))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,r.kt)("h3",{id:"uniswapv3swapcallback"},"uniswapV3SwapCallback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function uniswapV3SwapCallback(\n    int256 amount0Delta,\n    int256 amount1Delta,\n    bytes data\n  ) external\n")),(0,r.kt)("p",null,"Called to ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender")," after executing a swap via IUniswapV3Pool#swap."),(0,r.kt)("p",null,"In the implementation you must pay the pool tokens owed for the swap.\nThe caller of this method must be checked to be a UniswapV3Pool deployed by the canonical UniswapV3Factory.\namount0Delta and amount1Delta can both be 0 if no tokens were swapped."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0Delta")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token0 to the pool.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount1Delta")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 that was sent (negative) or must be received (positive) by the pool by the end of the swap. If positive, the callback must send that amount of token1 to the pool.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any data passed through by the caller via the IUniswapV3PoolActions#swap call")))),(0,r.kt)("h3",{id:"exactinputsingle"},"exactInputSingle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function exactInputSingle(\n    struct ISwapRouter.ExactInputSingleParams params\n  ) external returns (uint256 amountOut)\n")),(0,r.kt)("p",null,"Swaps ",(0,r.kt)("inlineCode",{parentName:"p"},"amountIn")," of one token for as much as possible of another token"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct ISwapRouter.ExactInputSingleParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The parameters necessary for the swap, encoded as ",(0,r.kt)("inlineCode",{parentName:"td"},"ExactInputSingleParams")," in calldata")))),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of the received token")))),(0,r.kt)("h3",{id:"exactinput"},"exactInput"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function exactInput(\n    struct ISwapRouter.ExactInputParams params\n  ) external returns (uint256 amountOut)\n")),(0,r.kt)("p",null,"Swaps ",(0,r.kt)("inlineCode",{parentName:"p"},"amountIn")," of one token for as much as possible of another along the specified path"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct ISwapRouter.ExactInputParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The parameters necessary for the multi-hop swap, encoded as ",(0,r.kt)("inlineCode",{parentName:"td"},"ExactInputParams")," in calldata")))),(0,r.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of the received token")))),(0,r.kt)("h3",{id:"exactoutputsingle"},"exactOutputSingle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function exactOutputSingle(\n    struct ISwapRouter.ExactOutputSingleParams params\n  ) external returns (uint256 amountIn)\n")),(0,r.kt)("p",null,"Swaps as little as possible of one token for ",(0,r.kt)("inlineCode",{parentName:"p"},"amountOut")," of another token"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct ISwapRouter.ExactOutputSingleParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The parameters necessary for the swap, encoded as ",(0,r.kt)("inlineCode",{parentName:"td"},"ExactOutputSingleParams")," in calldata")))),(0,r.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountIn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of the input token")))),(0,r.kt)("h3",{id:"exactoutput"},"exactOutput"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function exactOutput(\n    struct ISwapRouter.ExactOutputParams params\n  ) external returns (uint256 amountIn)\n")),(0,r.kt)("p",null,"Swaps as little as possible of one token for ",(0,r.kt)("inlineCode",{parentName:"p"},"amountOut")," of another along the specified path (reversed)"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct ISwapRouter.ExactOutputParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The parameters necessary for the multi-hop swap, encoded as ",(0,r.kt)("inlineCode",{parentName:"td"},"ExactOutputParams")," in calldata")))),(0,r.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountIn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of the input token")))))}m.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=u(a),d=r,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(k,p(p({ref:e},s),{},{components:a})):n.createElement(k,p({ref:e},s))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=c;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,p[1]=o;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);