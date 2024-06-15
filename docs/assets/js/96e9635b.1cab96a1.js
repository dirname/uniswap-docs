"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[5188],{21746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const i={},l=void 0,c={unversionedId:"contracts/v3/reference/periphery/interfaces/external/IERC1271",id:"contracts/v3/reference/periphery/interfaces/external/IERC1271",title:"IERC1271",description:"\u9a8c\u8bc1\u7ed9\u5b9a\u6570\u636e\u7684\u7b7e\u540d\u7684\u63a5\u53e3",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/reference/periphery/interfaces/external/IERC1271.md",sourceDirName:"contracts/v3/reference/periphery/interfaces/external",slug:"/contracts/v3/reference/periphery/interfaces/external/IERC1271",permalink:"/uniswap-docs/contracts/v3/reference/periphery/interfaces/external/IERC1271",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/interfaces/external/IERC1271.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"IV3Migrator",permalink:"/uniswap-docs/contracts/v3/reference/periphery/interfaces/IV3Migrator"},next:{title:"IERC20PermitAllowed",permalink:"/uniswap-docs/contracts/v3/reference/periphery/interfaces/external/IERC20PermitAllowed"}},o={},p=[{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"isValidSignature",id:"isvalidsignature",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:4}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9a8c\u8bc1\u7ed9\u5b9a\u6570\u636e\u7684\u7b7e\u540d\u7684\u63a5\u53e3"),(0,a.kt)("p",null,"\u7531EIP-1271\u5b9a\u4e49\u7684\u63a5\u53e3"),(0,a.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,a.kt)("h3",{id:"isvalidsignature"},"isValidSignature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function isValidSignature(\n    bytes32 hash,\n    bytes signature\n  ) external returns (bytes4 magicValue)\n")),(0,a.kt)("p",null,"\u5224\u65ad\u63d0\u4f9b\u7684\u7b7e\u540d\u662f\u5426\u5bf9\u63d0\u4f9b\u7684\u6570\u636e\u6709\u6548"),(0,a.kt)("p",null,"\u5f53\u51fd\u6570\u901a\u8fc7\u65f6\uff0c\u5fc5\u987b\u8fd4\u56de\u5b57\u82824\u9b54\u6cd5\u503c0x1626ba7e\u3002\n\u4e0d\u5f97\u4fee\u6539\u72b6\u6001\uff08\u5bf9\u4e8esolc < 0.5\u4f7f\u7528STATICCALL\uff0c\u5bf9\u4e8esolc > 0.5\u4f7f\u7528view\u4fee\u9970\u7b26\uff09\u3002\n\u5fc5\u987b\u5141\u8bb8\u5916\u90e8\u8c03\u7528\u3002"),(0,a.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"hash")),(0,a.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8981\u7b7e\u540d\u7684\u6570\u636e\u7684\u54c8\u5e0c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"signature")),(0,a.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4e0e","_","data\u5173\u8054\u7684\u7b7e\u540d\u5b57\u8282\u6570\u7ec4")))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"magicValue")),(0,a.kt)("td",{parentName:"tr",align:"left"},"bytes4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5b57\u82824\u9b54\u6cd5\u503c 0x1626ba7e")))))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);