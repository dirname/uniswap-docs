"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[5569],{28180:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const l={},i=void 0,o={unversionedId:"contracts/v3/reference/core/libraries/SafeCast",id:"contracts/v3/reference/core/libraries/SafeCast",title:"SafeCast",description:"\u5305\u542b\u5728\u7c7b\u578b\u4e4b\u95f4\u5b89\u5168\u8f6c\u6362\u7684\u65b9\u6cd5\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/reference/core/libraries/SafeCast.md",sourceDirName:"contracts/v3/reference/core/libraries",slug:"/contracts/v3/reference/core/libraries/SafeCast",permalink:"/uniswap-docs/contracts/v3/reference/core/libraries/SafeCast",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/core/libraries/SafeCast.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"Position",permalink:"/uniswap-docs/contracts/v3/reference/core/libraries/Position"},next:{title:"SecondsOutside",permalink:"/uniswap-docs/contracts/v3/reference/core/libraries/SecondsOutside"}},p={},c=[{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"toUint160",id:"touint160",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:4},{value:"toInt128",id:"toint128",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c-1",level:4},{value:"toInt256",id:"toint256",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-2",level:4},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c-2",level:4}],d={toc:c};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5305\u542b\u5728\u7c7b\u578b\u4e4b\u95f4\u5b89\u5168\u8f6c\u6362\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,r.kt)("h3",{id:"touint160"},"toUint160"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function toUint160(\n    uint256 y\n  ) internal pure returns (uint160 z)\n")),(0,r.kt)("p",null,"\u5c06\u4e00\u4e2a uint256 \u8f6c\u6362\u4e3a uint160\uff0c\u6ea2\u51fa\u65f6\u56de\u9000\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8981\u5411\u4e0b\u8f6c\u6362\u7684 uint256")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"z")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5411\u4e0b\u8f6c\u6362\u540e\u7684\u6574\u6570\uff0c\u73b0\u5728\u7c7b\u578b\u4e3a uint160")))),(0,r.kt)("h3",{id:"toint128"},"toInt128"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function toInt128(\n    int256 y\n  ) internal pure returns (int128 z)\n")),(0,r.kt)("p",null,"\u5c06\u4e00\u4e2a int256 \u8f6c\u6362\u4e3a int128\uff0c\u5728\u6ea2\u51fa\u6216\u4e0b\u6ea2\u65f6\u56de\u9000\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8981\u5411\u4e0b\u8f6c\u6362\u7684 int256")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"z")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5411\u4e0b\u8f6c\u6362\u540e\u7684\u6574\u6570\uff0c\u73b0\u5728\u7c7b\u578b\u4e3a int128")))),(0,r.kt)("h3",{id:"toint256"},"toInt256"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function toInt256(\n    uint256 y\n  ) internal pure returns (int256 z)\n")),(0,r.kt)("p",null,"\u5c06\u4e00\u4e2a uint256 \u8f6c\u6362\u4e3a int256\uff0c\u5728\u6ea2\u51fa\u65f6\u56de\u9000\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8981\u8f6c\u6362\u7684 uint256")))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"z")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8f6c\u6362\u540e\u7684\u6574\u6570\uff0c\u73b0\u5728\u7c7b\u578b\u4e3a int256")))))}u.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=c(n),s=r,k=m["".concat(p,".").concat(s)]||m[s]||u[s]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);