"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[8460],{15369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(83117),i=(n(67294),n(3905));const a={},o=void 0,c={unversionedId:"contracts/v3/reference/periphery/base/PeripheryPaymentsWithFee",id:"contracts/v3/reference/periphery/base/PeripheryPaymentsWithFee",title:"PeripheryPaymentsWithFee",description:"Functions",source:"@site/docs/contracts/v3/reference/periphery/base/PeripheryPaymentsWithFee.md",sourceDirName:"contracts/v3/reference/periphery/base",slug:"/contracts/v3/reference/periphery/base/PeripheryPaymentsWithFee",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/base/PeripheryPaymentsWithFee",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/base/PeripheryPaymentsWithFee.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"PeripheryPayments",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/base/PeripheryPayments"},next:{title:"PoolInitializer",permalink:"/uniswap-docs/en/contracts/v3/reference/periphery/base/PoolInitializer"}},s={},p=[{value:"Functions",id:"functions",level:2},{value:"unwrapWETH9WithFee",id:"unwrapweth9withfee",level:3},{value:"sweepTokenWithFee",id:"sweeptokenwithfee",level:3}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"unwrapweth9withfee"},"unwrapWETH9WithFee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function unwrapWETH9WithFee(\n        uint256 amountMinimum,\n        address recipient,\n        uint256 feeBips,\n        address feeRecipient\n  ) public\n")),(0,i.kt)("p",null,"Unwraps the contract's WETH9 balance and sends it to recipient as ETH, with a percentage between\n0 (exclusive), and 1 (inclusive) going to feeRecipient"),(0,i.kt)("p",null,"The amountMinimum parameter prevents malicious contracts from stealing WETH9 from users."),(0,i.kt)("h3",{id:"sweeptokenwithfee"},"sweepTokenWithFee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function sweepTokenWithFee(\n        address token,\n        uint256 amountMinimum,\n        address recipient,\n        uint256 feeBips,\n        address feeRecipient\n  ) public\n")),(0,i.kt)("p",null,"Transfers the full amount of a token held by this contract to recipient, with a percentage between\n0 (exclusive) and 1 (inclusive) going to feeRecipient"),(0,i.kt)("p",null,"The amountMinimum parameter prevents malicious contracts from stealing the token from users"))}l.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=i,y=f["".concat(s,".").concat(m)]||f[m]||l[m]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);