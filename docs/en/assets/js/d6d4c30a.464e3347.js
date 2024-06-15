"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[5902],{35150:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(83117),r=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"contracts/v3/reference/periphery/libraries/LiquidityAmounts",id:"contracts/v3/reference/periphery/libraries/LiquidityAmounts",title:"LiquidityAmounts",description:"Provides functions for computing liquidity amounts from token amounts and prices",source:"@site/docs/contracts/v3/reference/periphery/libraries/LiquidityAmounts.md",sourceDirName:"contracts/v3/reference/periphery/libraries",slug:"/contracts/v3/reference/periphery/libraries/LiquidityAmounts",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/libraries/LiquidityAmounts",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/libraries/LiquidityAmounts.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"HexStrings",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/libraries/HexStrings"},next:{title:"NFTDescriptor",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/libraries/NFTDescriptor"}},p={},u=[{value:"Functions",id:"functions",level:2},{value:"getLiquidityForAmount0",id:"getliquidityforamount0",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"getLiquidityForAmount1",id:"getliquidityforamount1",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values-1",level:4},{value:"getLiquidityForAmounts",id:"getliquidityforamounts",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Values:",id:"return-values-2",level:4},{value:"getAmount0ForLiquidity",id:"getamount0forliquidity",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Return Values:",id:"return-values-3",level:4},{value:"getAmount1ForLiquidity",id:"getamount1forliquidity",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Return Values:",id:"return-values-4",level:4},{value:"getAmountsForLiquidity",id:"getamountsforliquidity",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"Return Values:",id:"return-values-5",level:4}],m={toc:u};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Provides functions for computing liquidity amounts from token amounts and prices"),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"getliquidityforamount0"},"getLiquidityForAmount0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getLiquidityForAmount0(\n    uint160 sqrtRatioAX96,\n    uint160 sqrtRatioBX96,\n    uint256 amount0\n  ) internal returns (uint128 liquidity)\n")),(0,r.kt)("p",null,"Computes the amount of liquidity received for a given amount of token0 and price range"),(0,r.kt)("p",null,"Calculates amount0 ",(0,r.kt)("em",{parentName:"p"}," (sqrt(upper) ")," sqrt(lower)) / (sqrt(upper) - sqrt(lower))"),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioAX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the first tick boundary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioBX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the second tick boundary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount0 being sent in")))),(0,r.kt)("h4",{id:"return-values"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of returned liquidity")))),(0,r.kt)("h3",{id:"getliquidityforamount1"},"getLiquidityForAmount1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getLiquidityForAmount1(\n    uint160 sqrtRatioAX96,\n    uint160 sqrtRatioBX96,\n    uint256 amount1\n  ) internal returns (uint128 liquidity)\n")),(0,r.kt)("p",null,"Computes the amount of liquidity received for a given amount of token1 and price range"),(0,r.kt)("p",null,"Calculates amount1 / (sqrt(upper) - sqrt(lower))."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioAX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the first tick boundary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioBX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the second tick boundary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount1 being sent in")))),(0,r.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of returned liquidity")))),(0,r.kt)("h3",{id:"getliquidityforamounts"},"getLiquidityForAmounts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getLiquidityForAmounts(\n    uint160 sqrtRatioX96,\n    uint160 sqrtRatioAX96,\n    uint160 sqrtRatioBX96,\n    uint256 amount0,\n    uint256 amount1\n  ) internal returns (uint128 liquidity)\n")),(0,r.kt)("p",null,"Computes the maximum amount of liquidity received for a given amount of token0, token1, the current\npool prices and the prices at the tick boundaries"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the current pool prices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioAX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the first tick boundary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioBX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the second tick boundary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of token0 being sent in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of token1 being sent in")))),(0,r.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum amount of liquidity received")))),(0,r.kt)("h3",{id:"getamount0forliquidity"},"getAmount0ForLiquidity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getAmount0ForLiquidity(\n    uint160 sqrtRatioAX96,\n    uint160 sqrtRatioBX96,\n    uint128 liquidity\n  ) internal returns (uint256 amount0)\n")),(0,r.kt)("p",null,"Computes the amount of token0 for a given amount of liquidity and a price range"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioAX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the first tick boundary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioBX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the second tick boundary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The liquidity being valued")))),(0,r.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of token0")))),(0,r.kt)("h3",{id:"getamount1forliquidity"},"getAmount1ForLiquidity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getAmount1ForLiquidity(\n    uint160 sqrtRatioAX96,\n    uint160 sqrtRatioBX96,\n    uint128 liquidity\n  ) internal returns (uint256 amount1)\n")),(0,r.kt)("p",null,"Computes the amount of token1 for a given amount of liquidity and a price range"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioAX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the first tick boundary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioBX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the second tick boundary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The liquidity being valued")))),(0,r.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of token1")))),(0,r.kt)("h3",{id:"getamountsforliquidity"},"getAmountsForLiquidity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getAmountsForLiquidity(\n    uint160 sqrtRatioX96,\n    uint160 sqrtRatioAX96,\n    uint160 sqrtRatioBX96,\n    uint128 liquidity\n  ) internal returns (uint256 amount0, uint256 amount1)\n")),(0,r.kt)("p",null,"Computes the token0 and token1 value for a given amount of liquidity, the current\npool prices and the prices at the tick boundaries"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the current pool prices")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioAX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the first tick boundary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtRatioBX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A sqrt price representing the second tick boundary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The liquidity being valued")))),(0,r.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of token0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of token1")))))}d.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=u(a),s=r,N=k["".concat(p,".").concat(s)]||k[s]||d[s]||i;return a?n.createElement(N,l(l({ref:e},m),{},{components:a})):n.createElement(N,l({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"}}]);