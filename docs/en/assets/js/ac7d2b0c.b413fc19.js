"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[3553],{10130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(83117),o=(r(67294),r(3905));const s={},i=void 0,a={unversionedId:"contracts/v3/reference/periphery/test/PathTest",id:"contracts/v3/reference/periphery/test/PathTest",title:"PathTest",description:"Functions",source:"@site/docs/contracts/v3/reference/periphery/test/PathTest.md",sourceDirName:"contracts/v3/reference/periphery/test",slug:"/contracts/v3/reference/periphery/test/PathTest",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/test/PathTest",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/test/PathTest.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"NFTDescriptorTest",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/test/NFTDescriptorTest"},next:{title:"PeripheryImmutableStateTest",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/test/PeripheryImmutableStateTest"}},c={},l=[{value:"Functions",id:"functions",level:2},{value:"hasMultiplePools",id:"hasmultiplepools",level:3},{value:"decodeFirstPool",id:"decodefirstpool",level:3},{value:"getFirstPool",id:"getfirstpool",level:3},{value:"skipToken",id:"skiptoken",level:3},{value:"getGasCostOfDecodeFirstPool",id:"getgascostofdecodefirstpool",level:3}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"hasmultiplepools"},"hasMultiplePools"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function hasMultiplePools(\n  ) public returns (bool)\n")),(0,o.kt)("h3",{id:"decodefirstpool"},"decodeFirstPool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function decodeFirstPool(\n  ) public returns (address tokenA, address tokenB, uint24 fee)\n")),(0,o.kt)("h3",{id:"getfirstpool"},"getFirstPool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getFirstPool(\n  ) public returns (bytes)\n")),(0,o.kt)("h3",{id:"skiptoken"},"skipToken"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function skipToken(\n  ) public returns (bytes)\n")),(0,o.kt)("h3",{id:"getgascostofdecodefirstpool"},"getGasCostOfDecodeFirstPool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getGasCostOfDecodeFirstPool(\n  ) public returns (uint256)\n")))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);