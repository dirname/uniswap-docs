"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[4536],{92894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const c={},l=void 0,i={unversionedId:"contracts/v3/reference/core/interfaces/callback/IUniswapV3MintCallback",id:"contracts/v3/reference/core/interfaces/callback/IUniswapV3MintCallback",title:"IUniswapV3MintCallback",description:"\u4efb\u4f55\u8c03\u7528 IUniswapV3PoolActions#mint \u7684\u5408\u7ea6\u5fc5\u987b\u5b9e\u73b0\u6b64\u63a5\u53e3\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/reference/core/interfaces/callback/IUniswapV3MintCallback.md",sourceDirName:"contracts/v3/reference/core/interfaces/callback",slug:"/contracts/v3/reference/core/interfaces/callback/IUniswapV3MintCallback",permalink:"/uniswap-docs/contracts/v3/reference/core/interfaces/callback/IUniswapV3MintCallback",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/core/interfaces/callback/IUniswapV3MintCallback.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"IUniswapV3FlashCallback",permalink:"/uniswap-docs/contracts/v3/reference/core/interfaces/callback/IUniswapV3FlashCallback"},next:{title:"IUniswapV3SwapCallback",permalink:"/uniswap-docs/contracts/v3/reference/core/interfaces/callback/IUniswapV3SwapCallback"}},o={},p=[{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"uniswapV3MintCallback",id:"uniswapv3mintcallback",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4efb\u4f55\u8c03\u7528 IUniswapV3PoolActions#mint \u7684\u5408\u7ea6\u5fc5\u987b\u5b9e\u73b0\u6b64\u63a5\u53e3\u3002"),(0,r.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,r.kt)("h3",{id:"uniswapv3mintcallback"},"uniswapV3MintCallback"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function uniswapV3MintCallback(\n    uint256 amount0Owed,\n    uint256 amount1Owed,\n    bytes data\n  ) external\n")),(0,r.kt)("p",null,"\u5728\u4ece IUniswapV3Pool#mint \u5411\u4ed3\u4f4d\u6ce8\u5165\u6d41\u52a8\u6027\u540e\uff0c\u88ab\u8c03\u7528\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender"),"\u3002"),(0,r.kt)("p",null,"\u5728\u5b9e\u73b0\u4e2d\uff0c\u4f60\u5fc5\u987b\u4e3a\u6ce8\u5165\u7684\u6d41\u52a8\u6027\u652f\u4ed8\u7ed9\u6c60\u5b50\u5e94\u5f97\u7684\u4ee3\u5e01\u3002\n\u8c03\u7528\u6b64\u65b9\u6cd5\u7684\u5bf9\u8c61\u5fc5\u987b\u662f\u901a\u8fc7\u6807\u51c6 UniswapV3Factory \u90e8\u7f72\u7684 UniswapV3Pool\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0Owed")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6c60\u5b50\u56e0\u6ce8\u5165\u6d41\u52a8\u6027\u800c\u5e94\u5f97\u7684 token0 \u7684\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount1Owed")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6c60\u5b50\u56e0\u6ce8\u5165\u6d41\u52a8\u6027\u800c\u5e94\u5f97\u7684 token1 \u7684\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8c03\u7528\u8005\u901a\u8fc7 IUniswapV3PoolActions#mint \u8c03\u7528\u4f20\u9012\u7684\u4efb\u610f\u6570\u636e")))))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||c;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<c;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);