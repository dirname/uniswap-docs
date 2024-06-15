"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[4301],{5983:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(83117),r=(a(67294),a(3905));const l={},i=void 0,p={unversionedId:"contracts/v3/reference/periphery/interfaces/ISwapRouter",id:"contracts/v3/reference/periphery/interfaces/ISwapRouter",title:"ISwapRouter",description:"Functions for swapping tokens via Uniswap V3",source:"@site/docs/contracts/v3/reference/periphery/interfaces/ISwapRouter.md",sourceDirName:"contracts/v3/reference/periphery/interfaces",slug:"/contracts/v3/reference/periphery/interfaces/ISwapRouter",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/ISwapRouter",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/interfaces/ISwapRouter.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"ISelfPermit",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/ISelfPermit"},next:{title:"ITickLens",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/ITickLens"}},u={},s=[{value:"Parameter Structs",id:"parameter-structs",level:2},{value:"ExactInputSingleParams",id:"exactinputsingleparams",level:3},{value:"ExactInputParams",id:"exactinputparams",level:3},{value:"ExactOutputSingleParams",id:"exactoutputsingleparams",level:3},{value:"ExactOutputParams",id:"exactoutputparams",level:3},{value:"Functions",id:"functions",level:2},{value:"exactInputSingle",id:"exactinputsingle",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"exactInput",id:"exactinput",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values-1",level:4},{value:"exactOutputSingle",id:"exactoutputsingle",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-2",level:4},{value:"exactOutput",id:"exactoutput",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Return Values:",id:"return-values-3",level:4}],o={toc:s};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Functions for swapping tokens via Uniswap V3"),(0,r.kt)("h2",{id:"parameter-structs"},"Parameter Structs"),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"fee")," is in hundredths of basis points (e.g. the ",(0,r.kt)("inlineCode",{parentName:"p"},"fee")," for a pool at the 0.3% tier is 3000; the ",(0,r.kt)("inlineCode",{parentName:"p"},"fee")," for a pool at the 0.01% tier is 100)."),(0,r.kt)("h3",{id:"exactinputsingleparams"},"ExactInputSingleParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    struct ExactInputSingleParams {\n        address tokenIn;\n        address tokenOut;\n        uint24 fee;\n        address recipient;\n        uint256 deadline;\n        uint256 amountIn;\n        uint256 amountOutMinimum;\n        uint160 sqrtPriceLimitX96;\n    }\n")),(0,r.kt)("h3",{id:"exactinputparams"},"ExactInputParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"   struct ExactInputParams {\n        bytes path;\n        address recipient;\n        uint256 deadline;\n        uint256 amountIn;\n        uint256 amountOutMinimum;\n    }\n")),(0,r.kt)("h3",{id:"exactoutputsingleparams"},"ExactOutputSingleParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    struct ExactOutputSingleParams {\n        address tokenIn;\n        address tokenOut;\n        uint24 fee;\n        address recipient;\n        uint256 deadline;\n        uint256 amountOut;\n        uint256 amountInMaximum;\n        uint160 sqrtPriceLimitX96;\n    }\n")),(0,r.kt)("h3",{id:"exactoutputparams"},"ExactOutputParams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"    struct ExactOutputParams {\n        bytes path;\n        address recipient;\n        uint256 deadline;\n        uint256 amountOut;\n        uint256 amountInMaximum;\n    }\n")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"exactinputsingle"},"exactInputSingle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function exactInputSingle(\n    struct ISwapRouter.ExactInputSingleParams params\n  ) external returns (uint256 amountOut)\n")),(0,r.kt)("p",null,"Swaps ",(0,r.kt)("inlineCode",{parentName:"p"},"amountIn")," of one token for as much as possible of another token"),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct ISwapRouter.ExactInputSingleParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The parameters necessary for the swap, encoded as ",(0,r.kt)("inlineCode",{parentName:"td"},"ExactInputSingleParams")," in calldata")))),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct ISwapRouter.ExactInputSingleParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of the received token")))),(0,r.kt)("h3",{id:"exactinput"},"exactInput"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function exactInput(\n    struct ISwapRouter.ExactInputParams params\n  ) external returns (uint256 amountOut)\n")),(0,r.kt)("p",null,"Swaps ",(0,r.kt)("inlineCode",{parentName:"p"},"amountIn")," of one token for as much as possible of another along the specified path"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct ISwapRouter.ExactInputParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The parameters necessary for the multi-hop swap, encoded as ",(0,r.kt)("inlineCode",{parentName:"td"},"ExactInputParams")," in calldata")))),(0,r.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct ISwapRouter.ExactInputParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of the received token")))),(0,r.kt)("h3",{id:"exactoutputsingle"},"exactOutputSingle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function exactOutputSingle(\n    struct ISwapRouter.ExactOutputSingleParams params\n  ) external returns (uint256 amountIn)\n")),(0,r.kt)("p",null,"Swaps as little as possible of one token for ",(0,r.kt)("inlineCode",{parentName:"p"},"amountOut")," of another token"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct ISwapRouter.ExactOutputSingleParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The parameters necessary for the swap, encoded as ",(0,r.kt)("inlineCode",{parentName:"td"},"ExactOutputSingleParams")," in calldata")))),(0,r.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountIn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct ISwapRouter.ExactOutputSingleParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of the input token")))),(0,r.kt)("h3",{id:"exactoutput"},"exactOutput"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function exactOutput(\n    struct ISwapRouter.ExactOutputParams params\n  ) external returns (uint256 amountIn)\n")),(0,r.kt)("p",null,"Swaps as little as possible of one token for ",(0,r.kt)("inlineCode",{parentName:"p"},"amountOut")," of another along the specified path (reversed)"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct ISwapRouter.ExactOutputParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The parameters necessary for the multi-hop swap, encoded as ",(0,r.kt)("inlineCode",{parentName:"td"},"ExactOutputParams")," in calldata")))),(0,r.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountIn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"struct ISwapRouter.ExactOutputParams"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of the input token")))))}m.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),s=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),c=s(a),d=r,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(k,i(i({ref:e},o),{},{components:a})):n.createElement(k,i({ref:e},o))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);