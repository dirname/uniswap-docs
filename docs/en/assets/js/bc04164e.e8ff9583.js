"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[4697],{80045:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(83117),i=(t(67294),t(3905));const o={},c=void 0,s={unversionedId:"contracts/v3/reference/periphery/libraries/PoolTicksCounter",id:"contracts/v3/reference/periphery/libraries/PoolTicksCounter",title:"PoolTicksCounter",description:"Functions",source:"@site/docs/contracts/v3/reference/periphery/libraries/PoolTicksCounter.md",sourceDirName:"contracts/v3/reference/periphery/libraries",slug:"/contracts/v3/reference/periphery/libraries/PoolTicksCounter",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/libraries/PoolTicksCounter",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/libraries/PoolTicksCounter.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"PoolAddress",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/libraries/PoolAddress"},next:{title:"PositionKey",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/libraries/PositionKey"}},a={},l=[{value:"Functions",id:"functions",level:2},{value:"countInitializedTicksCrossed",id:"countinitializedtickscrossed",level:3}],u={toc:l};function p(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"countinitializedtickscrossed"},"countInitializedTicksCrossed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function countInitializedTicksCrossed(\n  ) internal view returns (uint32 initializedTicksCrossed)\n")),(0,i.kt)("p",null,"This function counts the number of initialized ticks that would incur a gas cost between tickBefore and tickAfter.\nWhen tickBefore and/or tickAfter themselves are initialized, the logic over whether we should count them depends on the\ndirection of the swap. If we are swapping upwards (tickAfter > tickBefore) we don't want to count tickBefore but we do\nwant to count tickAfter. The opposite is true if we are swapping downwards."))}p.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=n.createContext({}),l=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(a.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,y=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(y,c(c({ref:r},u),{},{components:t})):n.createElement(y,c({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=d;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);