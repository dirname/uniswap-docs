"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[6598],{10978:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(83117),n=(r(67294),r(3905));const i={},l=void 0,c={unversionedId:"contracts/v3/reference/core/libraries/TickMath",id:"contracts/v3/reference/core/libraries/TickMath",title:"TickMath",description:"\u8ba1\u7b97\u5927\u5c0f\u4e3a 1.0001 \u7684\u523b\u5ea6\u7684\u5e73\u65b9\u6839\u4ef7\u683c\uff0c\u5373 sqrt(1.0001^tick)\uff0c\u4f5c\u4e3a\u56fa\u5b9a\u70b9 Q64.96 \u6570\u5b57\u3002\u652f\u6301\u4ecb\u4e8e 2^-128 \u548c 2^128 \u4e4b\u95f4\u7684\u4ef7\u683c\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/reference/core/libraries/TickMath.md",sourceDirName:"contracts/v3/reference/core/libraries",slug:"/contracts/v3/reference/core/libraries/TickMath",permalink:"/uniswap-docs/contracts/v3/reference/core/libraries/TickMath",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/core/libraries/TickMath.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"TickBitmap",permalink:"/uniswap-docs/contracts/v3/reference/core/libraries/TickBitmap"},next:{title:"TransferHelper",permalink:"/uniswap-docs/contracts/v3/reference/core/libraries/TransferHelper"}},o={},p=[{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"getSqrtRatioAtTick",id:"getsqrtratioattick",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:4},{value:"getTickAtSqrtRatio",id:"gettickatsqrtratio",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c-1",level:4}],k={toc:p};function s(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8ba1\u7b97\u5927\u5c0f\u4e3a 1.0001 \u7684\u523b\u5ea6\u7684\u5e73\u65b9\u6839\u4ef7\u683c\uff0c\u5373 sqrt(1.0001^tick)\uff0c\u4f5c\u4e3a\u56fa\u5b9a\u70b9 Q64.96 \u6570\u5b57\u3002\u652f\u6301\u4ecb\u4e8e 2^-128 \u548c 2^128 \u4e4b\u95f4\u7684\u4ef7\u683c\u3002"),(0,n.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,n.kt)("h3",{id:"getsqrtratioattick"},"getSqrtRatioAtTick"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getSqrtRatioAtTick(\n    int24 tick\n  ) internal pure returns (uint160 sqrtPriceX96)\n")),(0,n.kt)("p",null,"\u8ba1\u7b97 sqrt(1.0001^tick) * 2^96"),(0,n.kt)("p",null,"\u5982\u679c |tick| > \u6700\u5927\u523b\u5ea6\uff0c\u5219\u629b\u51fa\u5f02\u5e38"),(0,n.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"tick")),(0,n.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e0a\u8ff0\u516c\u5f0f\u4e2d\u7684\u8f93\u5165\u523b\u5ea6")))),(0,n.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"sqrtPriceX96")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4ee3\u8868\u4e24\u79cd\u8d44\u4ea7\u6bd4\u7387\uff08token1/token0\uff09\u7684\u5e73\u65b9\u6839\u7684\u56fa\u5b9a\u70b9 Q64.96 \u6570\u5b57\uff0c\u5728\u7ed9\u5b9a\u7684\u523b\u5ea6\u4e0b")))),(0,n.kt)("h3",{id:"gettickatsqrtratio"},"getTickAtSqrtRatio"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getTickAtSqrtRatio(\n    uint160 sqrtPriceX96\n  ) internal pure returns (int24 tick)\n")),(0,n.kt)("p",null,"\u8ba1\u7b97\u6700\u5927\u7684\u523b\u5ea6\u503c\uff0c\u4f7f\u5f97 getRatioAtTick(tick) <= \u6bd4\u7387"),(0,n.kt)("p",null,"\u5982\u679c sqrtPriceX96 < MIN_SQRT_RATIO\uff0c\u5219\u629b\u51fa\u5f02\u5e38\uff0c\u56e0\u4e3a MIN_SQRT_RATIO \u662f getRatioAtTick \u53ef\u80fd\u8fd4\u56de\u7684\u6700\u4f4e\u503c\u3002"),(0,n.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"sqrtPriceX96")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8ba1\u7b97\u523b\u5ea6\u7684\u5e73\u65b9\u6839\u6bd4\u7387\uff0c\u4f5c\u4e3a Q64.96")))),(0,n.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"tick")),(0,n.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5bf9\u4e8e\u6bd4\u7387\u5c0f\u4e8e\u6216\u7b49\u4e8e\u8f93\u5165\u6bd4\u7387\u7684\u6700\u5927\u523b\u5ea6")))))}s.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>k,kt:()=>d});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),p=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},k=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,k=c(t,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return r?a.createElement(m,l(l({ref:e},k),{},{components:r})):a.createElement(m,l({ref:e},k))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=u;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);