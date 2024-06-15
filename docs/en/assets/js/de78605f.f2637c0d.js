"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[4553],{2202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(83117),i=(n(67294),n(3905));const a={},o=void 0,s={unversionedId:"sdk/v3/reference/interfaces/WithdrawOptions",id:"sdk/v3/reference/interfaces/WithdrawOptions",title:"WithdrawOptions",description:"@uniswap/v3-sdk / Exports / WithdrawOptions",source:"@site/docs/sdk/v3/reference/interfaces/WithdrawOptions.md",sourceDirName:"sdk/v3/reference/interfaces",slug:"/sdk/v3/reference/interfaces/WithdrawOptions",permalink:"/uniswap-docs/en/sdk/v3/reference/interfaces/WithdrawOptions",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/sdk/v3/reference/interfaces/WithdrawOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"TickDataProvider",permalink:"/uniswap-docs/en/sdk/v3/reference/interfaces/TickDataProvider"},next:{title:"Overview",permalink:"/uniswap-docs/en/sdk/swap-widget/overview"}},p={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"data",id:"data",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"owner",id:"owner",level:3},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README.md"},"@uniswap/v3-sdk")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules.md"},"Exports")," / WithdrawOptions"),(0,i.kt)("h1",{id:"interface-withdrawoptions"},"Interface: WithdrawOptions"),(0,i.kt)("p",null,"Options to specify when withdrawing a position."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/interfaces/WithdrawOptions#data"},"data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/interfaces/WithdrawOptions#owner"},"owner"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"data"},"data"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"data"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Set when withdrawing. ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"safeTransferFrom")," when transferring the position from contract back to owner."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L66"},"staker.ts:66")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"owner"},"owner"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"owner"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Set when withdrawing. The position will be sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," on withdraw."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/staker.ts#L61"},"staker.ts:61")))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=l(n),u=i,w=f["".concat(p,".").concat(u)]||f[u]||c[u]||a;return n?r.createElement(w,o(o({ref:t},d),{},{components:n})):r.createElement(w,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);