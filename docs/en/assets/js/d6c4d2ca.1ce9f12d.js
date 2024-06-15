"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[2545],{37098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const i={},c=void 0,o={unversionedId:"contracts/v3/reference/periphery/staker/libraries/IncentiveId",id:"contracts/v3/reference/periphery/staker/libraries/IncentiveId",title:"IncentiveId",description:"Functions",source:"@site/docs/contracts/v3/reference/periphery/staker/libraries/IncentiveId.md",sourceDirName:"contracts/v3/reference/periphery/staker/libraries",slug:"/contracts/v3/reference/periphery/staker/libraries/IncentiveId",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/staker/libraries/IncentiveId",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/staker/libraries/IncentiveId.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"IUniswapV3Staker",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/staker/interfaces/IUniswapV3Staker"},next:{title:"NFTPositionInfo",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/staker/libraries/NFTPositionInfo"}},l={},p=[{value:"Functions",id:"functions",level:2},{value:"compute",id:"compute",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"compute"},"compute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function compute(\n    struct IUniswapV3Staker.IncentiveKey key\n  ) internal pure returns (bytes32 incentiveId)\n")),(0,a.kt)("p",null,"Calculate the key for a staking incentive"),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"key")),(0,a.kt)("td",{parentName:"tr",align:"left"},"struct IUniswapV3Staker.IncentiveKey"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The components used to compute the incentive identifier")))),(0,a.kt)("h4",{id:"return-values"},"Return Values:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"incentiveId")),(0,a.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The identifier for the incentive")))))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);