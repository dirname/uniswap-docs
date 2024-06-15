"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[1403],{96705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>w,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const i={id:"overview",sidebar_position:1,title:"Overview"},s="The Uniswap Swap Widget",o={unversionedId:"sdk/swap-widget/overview",id:"sdk/swap-widget/overview",title:"Overview",description:"Welcome to the Uniswap Swap Widget. To begin, we recommend looking at the Guides and for deeper reference see the Swap Widget Github repo.",source:"@site/docs/sdk/swap-widget/overview.md",sourceDirName:"sdk/swap-widget",slug:"/sdk/swap-widget/overview",permalink:"/uniswap-docs/en/sdk/swap-widget/overview",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/sdk/swap-widget/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",sidebar_position:1,title:"Overview"},sidebar:"sdkSidebar",previous:{title:"WithdrawOptions",permalink:"/uniswap-docs/en/sdk/v3/reference/interfaces/WithdrawOptions"},next:{title:"Getting Started",permalink:"/uniswap-docs/en/sdk/swap-widget/guides/getting-started"}},p={},c=[],d={toc:c};function w(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-uniswap-swap-widget"},"The Uniswap Swap Widget"),(0,a.kt)("p",null,"Welcome to the Uniswap Swap Widget. To begin, we recommend looking at the ",(0,a.kt)("a",{parentName:"p",href:"/uniswap-docs/en/sdk/swap-widget/guides/getting-started"},(0,a.kt)("strong",{parentName:"a"},"Guides"))," and for deeper reference see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/widgets"},(0,a.kt)("strong",{parentName:"a"},"Swap Widget Github"))," repo."),(0,a.kt)("h1",{id:"alpha-software"},"Alpha software"),(0,a.kt)("p",null,"The latest version of the Swap Widget is in production in the Uniswap Interface,\nbut it is considered Alpha software and may contain bugs or change significantly between patch versions.\nIf you have questions about how to use the SDK, please reach out in the ",(0,a.kt)("inlineCode",{parentName:"p"},"#dev-chat")," channel of our Discord.\nPull requests are welcome!"),(0,a.kt)("h1",{id:"uniswap-swap-widget"},"Uniswap Swap Widget"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Uniswap/widgets"},(0,a.kt)("strong",{parentName:"a"},"Swap Widget Github Repo"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@uniswap/widgets"},(0,a.kt)("strong",{parentName:"a"},"Swap Widget NPM Package")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-sdk/actions?query=workflow%3A%22Unit+Tests%22"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/Uniswap/widgets/workflows/Unit%20Tests/badge.svg",alt:"Unit Tests"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-sdk/actions?query=workflow%3ALint"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/Uniswap/widgets/workflows/Lint/badge.svg",alt:"Lint"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@uniswap/v3-sdk/v/latest"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@uniswap/widgets/latest.svg",alt:"npm version"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://bundlephobia.com/result?p=@uniswap/v3-sdk@latest"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/bundlephobia/minzip/@uniswap/widgets/latest.svg",alt:"npm bundle size (scoped version)"}))))}w.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},w={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),l=c(n),u=a,g=l["".concat(p,".").concat(u)]||l[u]||w[u]||i;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=l;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);