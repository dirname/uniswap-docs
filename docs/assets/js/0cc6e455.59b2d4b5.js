"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[4366],{95617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(83117),i=(r(67294),r(3905));const a={id:"quick-start",title:"SDK \u5feb\u901f\u5165\u95e8"},o=void 0,s={unversionedId:"sdk/v2/guides/quick-start",id:"sdk/v2/guides/quick-start",title:"SDK \u5feb\u901f\u5165\u95e8",description:"Uniswap SDK \u7684\u5b58\u5728\u662f\u4e3a\u4e86\u5e2e\u52a9\u5f00\u53d1\u8005\u5728 Uniswap \u57fa\u7840\u4e0a\u6784\u5efa\u5e94\u7528\u3002\u5b83\u8bbe\u8ba1\u7528\u4e8e\u4efb\u4f55\u53ef\u4ee5\u6267\u884c JavaScript \u7684\u73af\u5883\uff08\u6bd4\u5982\u7f51\u7ad9\uff0c\u8282\u70b9\u811a\u672c\u7b49\uff09\u3002\u5b83\u7b80\u5355\u5230\u8db3\u4ee5\u5728\u9ed1\u5ba2\u9a6c\u62c9\u677e\u9879\u76ee\u4e2d\u4f7f\u7528\uff0c\u540c\u65f6\u4e5f\u8db3\u591f\u5f3a\u5927\u4ee5\u9a71\u52a8\u751f\u4ea7\u7ea7\u5e94\u7528\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/sdk/v2/guides/01-quick-start.md",sourceDirName:"sdk/v2/guides",slug:"/sdk/v2/guides/quick-start",permalink:"/uniswap-docs/sdk/v2/guides/quick-start",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/sdk/v2/guides/01-quick-start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"quick-start",title:"SDK \u5feb\u901f\u5165\u95e8"},sidebar:"sdkSidebar",previous:{title:"\u6982\u89c8",permalink:"/uniswap-docs/sdk/v2/overview"},next:{title:"\u83b7\u53d6\u6570\u636e",permalink:"/uniswap-docs/sdk/v2/guides/fetching-data"}},p={},c=[{value:"ES6 (import)",id:"es6-import",level:2},{value:"CommonJS (require)",id:"commonjs-require",level:2}],u={toc:c};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Uniswap SDK \u7684\u5b58\u5728\u662f\u4e3a\u4e86\u5e2e\u52a9\u5f00\u53d1\u8005\u5728 Uniswap \u57fa\u7840\u4e0a\u6784\u5efa\u5e94\u7528\u3002\u5b83\u8bbe\u8ba1\u7528\u4e8e\u4efb\u4f55\u53ef\u4ee5\u6267\u884c JavaScript \u7684\u73af\u5883\uff08\u6bd4\u5982\u7f51\u7ad9\uff0c\u8282\u70b9\u811a\u672c\u7b49\uff09\u3002\u5b83\u7b80\u5355\u5230\u8db3\u4ee5\u5728\u9ed1\u5ba2\u9a6c\u62c9\u677e\u9879\u76ee\u4e2d\u4f7f\u7528\uff0c\u540c\u65f6\u4e5f\u8db3\u591f\u5f3a\u5927\u4ee5\u9a71\u52a8\u751f\u4ea7\u7ea7\u5e94\u7528\u3002"),(0,i.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)("p",null,"\u4f7f\u7528 SDK \u6700\u7b80\u4fbf\u7684\u65b9\u5f0f\u662f\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-sdk"},"npm"),"\u3002\u8981\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u5b89\u88c5\u5b83\uff0c\u53ea\u9700\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add @uniswap/v2-sdk"),"\uff08\u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install @uniswap/v2-sdk"),"\uff09\u3002\u8fd9\u4e5f\u4f1a\u5c06 V2 \u548c V3 SDK \u5171\u7528\u7684 sdk-core \u5305\u4ee5\u53ca ethers \u4f5c\u4e3a\u4f9d\u8d56\u4e00\u5e76\u5b89\u88c5\u3002"),(0,i.kt)("h1",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,i.kt)("p",null,"\u8981\u5728\u4f60\u7684\u5e94\u7528\u4e2d\u8fd0\u884c SDK \u7684\u4ee3\u7801\uff0c\u6839\u636e\u4f60\u6240\u5904\u73af\u5883\u652f\u6301\u7684\u65b9\u5f0f\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," \u8bed\u53e5\u3002\u8bf7\u6ce8\u610f\uff0c\u63a5\u4e0b\u6765\u7684\u6307\u5357\u4f1a\u4f7f\u7528 ES6 \u8bed\u6cd5\u3002"),(0,i.kt)("h2",{id:"es6-import"},"ES6 (import)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChainId } from '@uniswap/sdk-core'\nimport { Pair } from '@uniswap/v2-sdk'\nconsole.log(`\u4e3b\u7f51\u7684 chainId \u662f ${ChainId.MAINNET}\u3002`)\n")),(0,i.kt)("h2",{id:"commonjs-require"},"CommonJS (require)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const CORE = require('@uniswap/sdk-core')\nconst V2_SDK = require('@uniswap/v2-sdk')\nconsole.log(`\u4e3b\u7f51\u7684 chainId \u662f ${CORE.ChainId.MAINNET}\u3002`)\n")),(0,i.kt)("h1",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,i.kt)("p",null,"SDK \u7684\u5168\u9762\u53c2\u8003\u8d44\u6599\u516c\u5f00\u53d1\u5e03\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap"},"Uniswap Labs Github")," \u4e0a\u3002"))}l.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,k=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);