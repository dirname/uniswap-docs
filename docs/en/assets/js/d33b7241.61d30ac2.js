"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[2150],{66291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(83117),i=(r(67294),r(3905));const a={},o=void 0,c={unversionedId:"contracts/v3/reference/periphery/interfaces/IPeripheryPaymentsWithFee",id:"contracts/v3/reference/periphery/interfaces/IPeripheryPaymentsWithFee",title:"IPeripheryPaymentsWithFee",description:"Functions to ease deposits and withdrawals of ETH",source:"@site/docs/contracts/v3/reference/periphery/interfaces/IPeripheryPaymentsWithFee.md",sourceDirName:"contracts/v3/reference/periphery/interfaces",slug:"/contracts/v3/reference/periphery/interfaces/IPeripheryPaymentsWithFee",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/IPeripheryPaymentsWithFee",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/interfaces/IPeripheryPaymentsWithFee.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"IPeripheryPayments",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/IPeripheryPayments"},next:{title:"IPoolInitializer",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/interfaces/IPoolInitializer"}},s={},p=[{value:"Functions",id:"functions",level:2},{value:"unwrapWETH9WithFee",id:"unwrapweth9withfee",level:3},{value:"sweepTokenWithFee",id:"sweeptokenwithfee",level:3}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Functions to ease deposits and withdrawals of ETH"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"unwrapweth9withfee"},"unwrapWETH9WithFee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function unwrapWETH9WithFee(\n  ) external\n")),(0,i.kt)("p",null,"Unwraps the contract's WETH9 balance and sends it to recipient as ETH, with a percentage between\n0 (exclusive), and 1 (inclusive) going to feeRecipient"),(0,i.kt)("p",null,"The amountMinimum parameter prevents malicious contracts from stealing WETH9 from users."),(0,i.kt)("h3",{id:"sweeptokenwithfee"},"sweepTokenWithFee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function sweepTokenWithFee(\n  ) external\n")),(0,i.kt)("p",null,"Transfers the full amount of a token held by this contract to recipient, with a percentage between\n0 (exclusive) and 1 (inclusive) going to feeRecipient"),(0,i.kt)("p",null,"The amountMinimum parameter prevents malicious contracts from stealing the token from users"))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=i,h=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);