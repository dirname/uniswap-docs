"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[6208],{37142:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(83117),a=(t(67294),t(3905));const i={},c=void 0,o={unversionedId:"contracts/v3/reference/periphery/libraries/NFTSVG",id:"contracts/v3/reference/periphery/libraries/NFTSVG",title:"NFTSVG",description:"\u4e3a\u4e0e Uniswap NFT \u76f8\u5173\u7684 SVG \u56fe\u50cf\u751f\u6210\u63d0\u4f9b\u4e86\u4e00\u4e2a\u51fd\u6570\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/reference/periphery/libraries/NFTSVG.md",sourceDirName:"contracts/v3/reference/periphery/libraries",slug:"/contracts/v3/reference/periphery/libraries/NFTSVG",permalink:"/uniswap-docs/contracts/v3/reference/periphery/libraries/NFTSVG",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/libraries/NFTSVG.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"NFTDescriptor",permalink:"/uniswap-docs/contracts/v3/reference/periphery/libraries/NFTDescriptor"},next:{title:"OracleLibrary",permalink:"/uniswap-docs/contracts/v3/reference/periphery/libraries/OracleLibrary"}},l={},s=[{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"generateSVG",id:"generatesvg",level:3},{value:"getCurve",id:"getcurve",level:3},{value:"generateSVGCurveCircle",id:"generatesvgcurvecircle",level:3},{value:"rangeLocation",id:"rangelocation",level:3},{value:"isRare",id:"israre",level:3}],p={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e3a\u4e0e Uniswap NFT \u76f8\u5173\u7684 SVG \u56fe\u50cf\u751f\u6210\u63d0\u4f9b\u4e86\u4e00\u4e2a\u51fd\u6570\u3002"),(0,a.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,a.kt)("h3",{id:"generatesvg"},"generateSVG"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function generateSVG(\n  ) internal returns (string svg)\n")),(0,a.kt)("h3",{id:"getcurve"},"getCurve"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function getCurve(\n  ) internal returns (string curve)\n")),(0,a.kt)("h3",{id:"generatesvgcurvecircle"},"generateSVGCurveCircle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function generateSVGCurveCircle(\n  ) internal returns (string svg)\n")),(0,a.kt)("h3",{id:"rangelocation"},"rangeLocation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function rangeLocation(\n  ) internal returns (string, string)\n")),(0,a.kt)("h3",{id:"israre"},"isRare"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function isRare(\n  ) internal returns (bool)\n")))}u.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=s(t),v=a,d=g["".concat(l,".").concat(v)]||g[v]||u[v]||i;return t?n.createElement(d,c(c({ref:r},p),{},{components:t})):n.createElement(d,c({ref:r},p))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=g;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);