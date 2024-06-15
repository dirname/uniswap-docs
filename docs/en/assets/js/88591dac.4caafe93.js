"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[1050],{86145:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(83117),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"contracts/v3/reference/periphery/interfaces/IQuoter",id:"contracts/v3/reference/periphery/interfaces/IQuoter",title:"IQuoter",description:"Supports quoting the calculated amounts from exact input or exact output swaps",source:"@site/docs/contracts/v3/reference/periphery/interfaces/IQuoter.md",sourceDirName:"contracts/v3/reference/periphery/interfaces",slug:"/contracts/v3/reference/periphery/interfaces/IQuoter",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/IQuoter",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/interfaces/IQuoter.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"IPoolInitializer",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/IPoolInitializer"},next:{title:"IQuoterV2",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/IQuoterV2"}},p={},u=[{value:"Functions",id:"functions",level:2},{value:"quoteExactInput",id:"quoteexactinput",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"quoteExactInputSingle",id:"quoteexactinputsingle",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values-1",level:4},{value:"quoteExactOutput",id:"quoteexactoutput",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-2",level:4},{value:"quoteExactOutputSingle",id:"quoteexactoutputsingle",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Return Values:",id:"return-values-3",level:4}],d={toc:u};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Supports quoting the calculated amounts from exact input or exact output swaps"),(0,r.kt)("p",null,"These functions are not marked view because they rely on calling non-view functions and reverting\nto compute the result. They are also not gas efficient and should not be called on-chain."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"quoteexactinput"},"quoteExactInput"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function quoteExactInput(\n    bytes path,\n    uint256 amountIn\n  ) external returns (uint256 amountOut)\n")),(0,r.kt)("p",null,"Returns the amount out received for a given exact input swap without executing the swap"),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The path of the swap, i.e. each token pair and the pool fee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountIn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of the first token to swap")))),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of the last token that would be received")))),(0,r.kt)("h3",{id:"quoteexactinputsingle"},"quoteExactInputSingle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function quoteExactInputSingle(\n    address tokenIn,\n    address tokenOut,\n    uint24 fee,\n    uint256 amountIn,\n    uint160 sqrtPriceLimitX96\n  ) external returns (uint256 amountOut)\n")),(0,r.kt)("p",null,"Returns the amount out received for a given exact input but for a swap of a single pool"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenIn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The token being swapped in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenOut")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The token being swapped out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fee")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The fee of the token pool to consider for the pair")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountIn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The desired input amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtPriceLimitX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The price limit of the pool that cannot be exceeded by the swap")))),(0,r.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of ",(0,r.kt)("inlineCode",{parentName:"td"},"tokenOut")," that would be received")))),(0,r.kt)("h3",{id:"quoteexactoutput"},"quoteExactOutput"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function quoteExactOutput(\n    bytes path,\n    uint256 amountOut\n  ) external returns (uint256 amountIn)\n")),(0,r.kt)("p",null,"Returns the amount in required for a given exact output swap without executing the swap"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The path of the swap, i.e. each token pair and the pool fee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of the last token to receive")))),(0,r.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountIn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of first token required to be paid")))),(0,r.kt)("h3",{id:"quoteexactoutputsingle"},"quoteExactOutputSingle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function quoteExactOutputSingle(\n    address tokenIn,\n    address tokenOut,\n    uint24 fee,\n    uint256 amountOut,\n    uint160 sqrtPriceLimitX96\n  ) external returns (uint256 amountIn)\n")),(0,r.kt)("p",null,"Returns the amount in required to receive the given exact output amount but for a swap of a single pool"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenIn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The token being swapped in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenOut")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The token being swapped out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fee")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The fee of the token pool to consider for the pair")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountOut")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The desired output amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtPriceLimitX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The price limit of the pool that cannot be exceeded by the swap")))),(0,r.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amountIn")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount required as the input for the swap in order to receive ",(0,r.kt)("inlineCode",{parentName:"td"},"amountOut"))))))}m.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(a),k=r,c=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);