"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[3497],{28612:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(83117),a=(r(67294),r(3905));const o={},i=void 0,c={unversionedId:"contracts/v3/reference/periphery/test/TestCallbackValidation",id:"contracts/v3/reference/periphery/test/TestCallbackValidation",title:"TestCallbackValidation",description:"\u51fd\u6570",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/reference/periphery/test/TestCallbackValidation.md",sourceDirName:"contracts/v3/reference/periphery/test",slug:"/contracts/v3/reference/periphery/test/TestCallbackValidation",permalink:"/uniswap-docs/contracts/v3/reference/periphery/test/TestCallbackValidation",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/periphery/test/TestCallbackValidation.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"SelfPermitTest",permalink:"/uniswap-docs/contracts/v3/reference/periphery/test/SelfPermitTest"},next:{title:"TestERC20",permalink:"/uniswap-docs/contracts/v3/reference/periphery/test/TestERC20"}},l={},s=[{value:"\u51fd\u6570",id:"\u51fd\u6570",level:2},{value:"verifyCallback",id:"verifycallback",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,a.kt)("h3",{id:"verifycallback"},"verifyCallback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function verifyCallback(\n  ) external \u8fd4\u56de (\u5408\u7ea6 IUniswapV3Pool pool)\n")),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u91cc\u7684\u8fd4\u56de\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"IUniswapV3Pool pool")," \u5e94\u8be5\u662f\u4e00\u4e2a\u5177\u4f53\u7684 Solidity \u5408\u7ea6\u63a5\u53e3\u7c7b\u578b\uff0c\u4f46\u5728\u4e2d\u6587\u7ffb\u8bd1\u4e2d\u6211\u4eec\u4fdd\u7559\u4e86\u82f1\u6587\u539f\u6587\u4ee5\u907f\u514d\u53ef\u80fd\u7684\u8bef\u89e3\u3002\u5728\u5b9e\u9645\u7684 Solidity \u4ee3\u7801\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"IUniswapV3Pool")," \u662f\u4e00\u4e2a\u63a5\u53e3\uff0c\u7528\u4e8e\u4e0e Uniswap V3 \u6c60\u4ea4\u4e92\u3002"))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,y=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);