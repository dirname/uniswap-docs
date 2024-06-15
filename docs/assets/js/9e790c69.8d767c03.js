"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[5265],{22360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(83117),n=(r(67294),r(3905));const l={},o=void 0,i={unversionedId:"contracts/v3/reference/periphery/libraries/PoolAddress",id:"contracts/v3/reference/periphery/libraries/PoolAddress",title:"PoolAddress",description:"\u51fd\u6570",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/reference/periphery/libraries/PoolAddress.md",sourceDirName:"contracts/v3/reference/periphery/libraries",slug:"/contracts/v3/reference/periphery/libraries/PoolAddress",permalink:"/uniswap-docs/contracts/v3/reference/periphery/libraries/PoolAddress",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/libraries/PoolAddress.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"Path",permalink:"/uniswap-docs/contracts/v3/reference/periphery/libraries/Path"},next:{title:"PoolTicksCounter",permalink:"/uniswap-docs/contracts/v3/reference/periphery/libraries/PoolTicksCounter"}},p={},d=[{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"getPoolKey",id:"getpoolkey",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:4},{value:"computeAddress",id:"computeaddress",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c-1",level:4}],s={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,n.kt)("h3",{id:"getpoolkey"},"getPoolKey"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getPoolKey(\n    address tokenA,\n    address tokenB,\n    uint24 fee\n  ) internal returns (struct PoolAddress.PoolKey)\n")),(0,n.kt)("p",null,"\u8fd4\u56de PoolKey\uff1a\u6309\u987a\u5e8f\u6392\u5217\u7684\u4ee3\u5e01\u53ca\u5176\u5339\u914d\u7684\u624b\u7eed\u8d39\u7ea7\u522b"),(0,n.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"tokenA")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6c60\u4e2d\u7684\u7b2c\u4e00\u4e2a\u4ee3\u5e01\uff0c\u672a\u6392\u5e8f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"tokenB")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6c60\u4e2d\u7684\u7b2c\u4e8c\u4e2a\u4ee3\u5e01\uff0c\u672a\u6392\u5e8f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fee")),(0,n.kt)("td",{parentName:"tr",align:"left"},"uint24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6c60\u7684\u624b\u7eed\u8d39\u7ea7\u522b")))),(0,n.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Poolkey")),(0,n.kt)("td",{parentName:"tr",align:"left"},"PoolAddress.PoolKey"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b\u6709\u5e8f\u7684 token0 \u548c token1 \u5206\u914d\u7684\u6c60\u8be6\u7ec6\u4fe1\u606f")))),(0,n.kt)("h3",{id:"computeaddress"},"computeAddress"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function computeAddress(\n    address factory,\n    struct PoolAddress.PoolKey key\n  ) internal returns (address pool)\n")),(0,n.kt)("p",null,"\u6839\u636e\u5de5\u5382\u548c PoolKey \u786e\u5b9a\u6027\u5730\u8ba1\u7b97\u6c60\u5730\u5740"),(0,n.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"factory")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Uniswap V3 \u5de5\u5382\u5408\u7ea6\u5730\u5740")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"key")),(0,n.kt)("td",{parentName:"tr",align:"left"},"struct PoolAddress.PoolKey"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PoolKey")))),(0,n.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"pool")),(0,n.kt)("td",{parentName:"tr",align:"left"},"address"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V3 \u6c60\u7684\u5408\u7ea6\u5730\u5740")))))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(r),u=n,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return r?a.createElement(k,o(o({ref:t},s),{},{components:r})):a.createElement(k,o({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);