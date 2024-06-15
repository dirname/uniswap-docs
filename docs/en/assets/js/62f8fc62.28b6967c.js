"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[5622],{76395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(83117),i=(n(67294),n(3905));const o={},a=void 0,c={unversionedId:"sdk/v3/reference/interfaces/MintSpecificOptions",id:"sdk/v3/reference/interfaces/MintSpecificOptions",title:"MintSpecificOptions",description:"@uniswap/v3-sdk / Exports / MintSpecificOptions",source:"@site/docs/sdk/v3/reference/interfaces/MintSpecificOptions.md",sourceDirName:"sdk/v3/reference/interfaces",slug:"/sdk/v3/reference/interfaces/MintSpecificOptions",permalink:"/uniswap-docs/en/sdk/v3/reference/interfaces/MintSpecificOptions",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/sdk/v3/reference/interfaces/MintSpecificOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"MethodParameters",permalink:"/uniswap-docs/en/sdk/v3/reference/interfaces/MethodParameters"},next:{title:"NFTPermitOptions",permalink:"/uniswap-docs/en/sdk/v3/reference/interfaces/NFTPermitOptions"}},p={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"createPool",id:"createpool",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"recipient",id:"recipient",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:s};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../README.md"},"@uniswap/v3-sdk")," / ",(0,i.kt)("a",{parentName:"p",href:"../modules.md"},"Exports")," / MintSpecificOptions"),(0,i.kt)("h1",{id:"interface-mintspecificoptions"},"Interface: MintSpecificOptions"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/interfaces/MintSpecificOptions#createpool"},"createPool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uniswap-docs/en/sdk/v3/reference/interfaces/MintSpecificOptions#recipient"},"recipient"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"createpool"},"createPool"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"createPool"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Creates pool if not initialized before mint."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L34"},"nonfungiblePositionManager.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"recipient"},"recipient"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"recipient"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The account that should receive the minted NFT."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-sdk/blob/08a7c05/src/nonfungiblePositionManager.ts#L29"},"nonfungiblePositionManager.ts:29")))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);