"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[2334],{84551:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(83117),a=(t(67294),t(3905));const o={},c=void 0,i={unversionedId:"contracts/v3/reference/periphery/interfaces/external/IWETH9",id:"contracts/v3/reference/periphery/interfaces/external/IWETH9",title:"IWETH9",description:"Functions",source:"@site/docs/contracts/v3/reference/periphery/interfaces/external/IWETH9.md",sourceDirName:"contracts/v3/reference/periphery/interfaces/external",slug:"/contracts/v3/reference/periphery/interfaces/external/IWETH9",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/external/IWETH9",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/interfaces/external/IWETH9.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"IERC20PermitAllowed",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/external/IERC20PermitAllowed"},next:{title:"Quoter",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/lens/Quoter"}},p={},l=[{value:"Functions",id:"functions",level:2},{value:"deposit",id:"deposit",level:3},{value:"withdraw",id:"withdraw",level:3}],s={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"deposit"},"deposit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deposit(\n  ) external\n")),(0,a.kt)("p",null,"Deposit ether to get wrapped ether"),(0,a.kt)("h3",{id:"withdraw"},"withdraw"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) external\n")),(0,a.kt)("p",null,"Withdraw wrapped ether to get ether"))}u.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(t),d=a,y=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return t?n.createElement(y,c(c({ref:r},s),{},{components:t})):n.createElement(y,c({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);