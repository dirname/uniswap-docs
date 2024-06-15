"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[5067],{10500:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const i={},l=void 0,o={unversionedId:"contracts/v3/reference/core/libraries/Position",id:"contracts/v3/reference/core/libraries/Position",title:"Position",description:"\u4ed3\u4f4d\u8868\u793a\u5728\u67d0\u4e00\u8f83\u4f4e\u548c\u8f83\u9ad8\u523b\u5ea6\u8fb9\u754c\u4e4b\u95f4\u7684\u6240\u6709\u8005\u5730\u5740\u7684\u6d41\u52a8\u6027\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/reference/core/libraries/Position.md",sourceDirName:"contracts/v3/reference/core/libraries",slug:"/contracts/v3/reference/core/libraries/Position",permalink:"/uniswap-docs/contracts/v3/reference/core/libraries/Position",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/core/libraries/Position.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"Oracle",permalink:"/uniswap-docs/contracts/v3/reference/core/libraries/Oracle"},next:{title:"SafeCast",permalink:"/uniswap-docs/contracts/v3/reference/core/libraries/SafeCast"}},p={},c=[{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"get",id:"get",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:4},{value:"update",id:"update",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-1",level:4}],d={toc:c};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4ed3\u4f4d\u8868\u793a\u5728\u67d0\u4e00\u8f83\u4f4e\u548c\u8f83\u9ad8\u523b\u5ea6\u8fb9\u754c\u4e4b\u95f4\u7684\u6240\u6709\u8005\u5730\u5740\u7684\u6d41\u52a8\u6027\u3002"),(0,a.kt)("p",null,"\u4ed3\u4f4d\u5b58\u50a8\u989d\u5916\u7684\u72b6\u6001\u4fe1\u606f\uff0c\u7528\u4e8e\u8ffd\u8e2a\u8be5\u4ed3\u4f4d\u5e94\u5f97\u7684\u8d39\u7528\u3002"),(0,a.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,a.kt)("h3",{id:"get"},"get"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function get(\n    mapping(bytes32 => struct Position.Info) self,\n    address owner,\n    int24 tickLower,\n    int24 tickUpper\n  ) internal view returns (struct Position.Info position)\n")),(0,a.kt)("p",null,"\u7ed9\u5b9a\u6240\u6709\u8005\u548c\u4ed3\u4f4d\u8fb9\u754c\uff0c\u8fd4\u56de\u4ed3\u4f4d\u7684Info\u7ed3\u6784\u4f53\u3002"),(0,a.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"self")),(0,a.kt)("td",{parentName:"tr",align:"left"},"mapping(bytes32 => struct Position.Info)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b\u6240\u6709\u7528\u6237\u4ed3\u4f4d\u7684\u6620\u5c04")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"owner")),(0,a.kt)("td",{parentName:"tr",align:"left"},"address"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4ed3\u4f4d\u6240\u6709\u8005\u7684\u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"tickLower")),(0,a.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4ed3\u4f4d\u7684\u8f83\u4f4e\u523b\u5ea6\u8fb9\u754c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"tickUpper")),(0,a.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4ed3\u4f4d\u7684\u8f83\u9ad8\u523b\u5ea6\u8fb9\u754c")))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"position")),(0,a.kt)("td",{parentName:"tr",align:"left"},"struct Position.Info"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u7ed9\u5b9a\u6240\u6709\u8005\u4ed3\u4f4d\u7684\u4fe1\u606f\u7ed3\u6784\u4f53")))),(0,a.kt)("h3",{id:"update"},"update"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function update(\n    struct Position.Info self,\n    int128 liquidityDelta,\n    uint256 feeGrowthInside0X128,\n    uint256 feeGrowthInside1X128\n  ) internal\n")),(0,a.kt)("p",null,"\u5c06\u7d2f\u79ef\u7684\u8d39\u7528\u8bb0\u5165\u7528\u6237\u7684\u4ed3\u4f4d\u3002"),(0,a.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"self")),(0,a.kt)("td",{parentName:"tr",align:"left"},"struct Position.Info"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5305\u542b\u6240\u6709\u7528\u6237\u4ed3\u4f4d\u7684\u6620\u5c04")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"liquidityDelta")),(0,a.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u7531\u4e8e\u4ed3\u4f4d\u66f4\u65b0\u800c\u5bfc\u81f4\u7684\u6c60\u6d41\u52a8\u6027\u53d8\u5316")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"feeGrowthInside0X128")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5728\u4ed3\u4f4d\u7684\u523b\u5ea6\u8fb9\u754c\u5185\uff0c\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u7684token0\u5168\u65f6\u8d39\u7528\u589e\u957f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"feeGrowthInside1X128")),(0,a.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5728\u4ed3\u4f4d\u7684\u523b\u5ea6\u8fb9\u754c\u5185\uff0c\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u7684token1\u5168\u65f6\u8d39\u7528\u589e\u957f")))))}s.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),f=c(n),m=a,u=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(u,l(l({ref:e},d),{},{components:n})):r.createElement(u,l({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);