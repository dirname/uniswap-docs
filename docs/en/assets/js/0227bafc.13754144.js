"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[7304],{30981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(83117),i=(n(67294),n(3905));const a={},p=void 0,o={unversionedId:"sdk/v3/reference/interfaces/SwapOptions",id:"sdk/v3/reference/interfaces/SwapOptions",title:"SwapOptions",description:"@uniswap/v3-sdk / Exports / SwapOptions",source:"@site/docs/sdk/v3/reference/interfaces/SwapOptions.md",sourceDirName:"sdk/v3/reference/interfaces",slug:"/sdk/v3/reference/interfaces/SwapOptions",permalink:"/uniswap-docs/en/sdk/v3/reference/interfaces/SwapOptions",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/sdk/v3/reference/interfaces/SwapOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"StandardPermitArguments",permalink:"/uniswap-docs/en/sdk/v3/reference/interfaces/StandardPermitArguments"},next:{title:"TickConstructorArgs",permalink:"/uniswap-docs/en/sdk/v3/reference/interfaces/TickConstructorArgs"}},s={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"deadline",id:"deadline",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"fee",id:"fee",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"inputTokenPermit",id:"inputtokenpermit",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"recipient",id:"recipient",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"slippageTolerance",id:"slippagetolerance",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"sqrtPriceLimitX96",id:"sqrtpricelimitx96",level:3},{value:"Defined in",id:"defined-in-5",level:4}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README.md"},"@uniswap/v3-sdk")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules.md"},"Exports")," / SwapOptions"),(0,i.kt)("h1",{id:"interface-swapoptions"},"Interface: SwapOptions"),(0,i.kt)("p",null,"Options for producing the arguments to send calls to the router."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/interfaces/SwapOptions#deadline"},"deadline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/interfaces/SwapOptions#fee"},"fee")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/interfaces/SwapOptions#inputtokenpermit"},"inputTokenPermit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/interfaces/SwapOptions#recipient"},"recipient")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/interfaces/SwapOptions#slippagetolerance"},"slippageTolerance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/interfaces/SwapOptions#sqrtpricelimitx96"},"sqrtPriceLimitX96"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"deadline"},"deadline"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"deadline"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigintIsh")),(0,i.kt)("p",null,"When the transaction expires, in epoch seconds."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L30"},"swapRouter.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fee"},"fee"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fee"),": ",(0,i.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/v3/reference/interfaces/FeeOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"FeeOptions"))),(0,i.kt)("p",null,"Optional information for taking a fee on output."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L45"},"swapRouter.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inputtokenpermit"},"inputTokenPermit"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"inputTokenPermit"),": ",(0,i.kt)("a",{parentName:"p",href:"../modules.md#permitoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"PermitOptions"))),(0,i.kt)("p",null,"The optional permit parameters for spending the input."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L35"},"swapRouter.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"recipient"},"recipient"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"recipient"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The account that should receive the output."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L25"},"swapRouter.ts:25")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"slippagetolerance"},"slippageTolerance"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"slippageTolerance"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Percent")),(0,i.kt)("p",null,"How much the execution price is allowed to move unfavorably from the trade execution price."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L20"},"swapRouter.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sqrtpricelimitx96"},"sqrtPriceLimitX96"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"sqrtPriceLimitX96"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BigintIsh")),(0,i.kt)("p",null,"The optional price limit for the trade."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/swapRouter.ts#L40"},"swapRouter.ts:40")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,k=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);