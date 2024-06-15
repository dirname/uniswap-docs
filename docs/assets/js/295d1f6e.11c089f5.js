"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[2687],{3214:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(83117),o=(r(67294),r(3905));const a={id:"fees",title:"\u8d39\u7528",sidebar_position:2},p=void 0,c={unversionedId:"concepts/protocol/fees",id:"concepts/protocol/fees",title:"\u8d39\u7528",description:"\u4ea4\u6613\u8d39\u7528",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/protocol/fees.md",sourceDirName:"concepts/protocol",slug:"/concepts/protocol/fees",permalink:"/uniswap-docs/concepts/protocol/fees",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/concepts/protocol/fees.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"fees",title:"\u8d39\u7528",sidebar_position:2},sidebar:"conceptsSidebar",previous:{title:"\u96c6\u4e2d\u6d41\u52a8\u6027",permalink:"/uniswap-docs/concepts/protocol/concentrated-liquidity"},next:{title:"\u9884\u8a00\u673a",permalink:"/uniswap-docs/concepts/protocol/oracle"}},i={},l=[{value:"\u4ea4\u6613\u8d39\u7528",id:"\u4ea4\u6613\u8d39\u7528",level:2},{value:"\u6c60\u8d39\u5c42",id:"\u6c60\u8d39\u5c42",level:2},{value:"\u5bfb\u627e\u5408\u9002\u7684\u6c60\u8d39",id:"\u5bfb\u627e\u5408\u9002\u7684\u6c60\u8d39",level:2},{value:"\u534f\u8bae\u8d39\u7528",id:"\u534f\u8bae\u8d39\u7528",level:2}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4ea4\u6613\u8d39\u7528"},"\u4ea4\u6613\u8d39\u7528"),(0,o.kt)("p",null,"\u4ea4\u6613\u8d39\u7528\u6309\u6bd4\u4f8b\u5206\u914d\u7ed9\u4ea4\u6613\u65f6\u523b\u6240\u6709\u5728\u8303\u56f4\u5185\u7684",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u6d41\u52a8\u6027\u3002\u5982\u679c\u73b0\u8d27\u4ef7\u683c\u79fb\u51fa\u67d0\u4e2a\u4ed3\u4f4d\u7684\u8303\u56f4\uff0c\u76f8\u5e94\u7684\u6d41\u52a8\u6027\u5c31\u4e0d\u518d\u6d3b\u8dc3\uff0c\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u8d39\u7528\u3002\u5982\u679c\u73b0\u8d27\u4ef7\u683c\u53cd\u8f6c\u5e76\u91cd\u65b0\u8fdb\u5165\u4ed3\u4f4d\u7684\u8303\u56f4\uff0c\u8be5\u4ed3\u4f4d\u7684\u6d41\u52a8\u6027\u518d\u6b21\u53d8\u5f97\u6d3b\u8dc3\uff0c\u5e76\u5c06\u751f\u6210\u8d39\u7528\u3002"),(0,o.kt)("p",null,"\u4e0e Uniswap \u7684\u524d\u51e0\u4e2a\u7248\u672c\u4e0d\u540c\uff0c\u4ea4\u6613\u8d39\u7528\u4e0d\u4f1a\u81ea\u52a8\u518d\u6295\u8d44\u3002\u76f8\u53cd\uff0c\u5b83\u4eec\u4ece\u6c60\u4e2d\u5355\u72ec\u6536\u96c6\uff0c\u5fc5\u987b\u5728\u6240\u6709\u8005\u5e0c\u671b\u6536\u53d6\u8d39\u7528\u65f6\u624b\u52a8\u8d4e\u56de\u3002"),(0,o.kt)("h2",{id:"\u6c60\u8d39\u5c42"},"\u6c60\u8d39\u5c42"),(0,o.kt)("p",null,"Uniswap v3 \u5f15\u5165\u4e86\u9488\u5bf9\u6bcf\u5bf9\u4ee3\u5e01\u7684\u591a\u4e2a\u6c60\uff0c\u6bcf\u4e2a\u6c60\u5177\u6709\u4e0d\u540c\u7684\u4ea4\u6613\u8d39\u7528\u3002\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u6700\u521d\u53ef\u4ee5\u5728\u4e09\u4e2a\u8d39\u7528\u7ea7\u522b\u521b\u5efa\u6c60\uff1a0.05%\uff0c0.30%\uff0c\u548c 1%\u3002UNI \u6cbb\u7406\u53ef\u4ee5\u6dfb\u52a0\u66f4\u591a\u7684\u8d39\u7528\u7ea7\u522b\uff0c\u4f8b\u5982\uff0c\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://app.uniswap.org/#/vote/2/9"},"\u8fd9\u4e2a"),"\u6cbb\u7406\u63d0\u6848\u5728 2021 \u5e74 11 \u6708\u6dfb\u52a0\u7684 0.01% \u8d39\u7528\u7ea7\u522b\uff0c\u6267\u884c\u8bb0\u5f55\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/tx/0x5c84f89a67237db7500538b81af61ebd827c081302dd73a1c20c8f6efaaf4f3c"},"\u8fd9\u91cc"),"\u3002"),(0,o.kt)("p",null,"\u4ee5\u524d\uff0c\u5c06\u4ee3\u5e01\u5bf9\u62c6\u5206\u4e3a\u72ec\u7acb\u7684\u6c60\u662f\u4e0d\u53ef\u884c\u7684\uff0c\u56e0\u4e3a\u5b58\u5728\u6d41\u52a8\u6027\u788e\u7247\u5316\u7684\u95ee\u9898\u3002\u4efb\u4f55\u901a\u8fc7\u63d0\u4f9b\u66f4\u591a\u8d39\u7528\u9009\u9879\u5b9e\u73b0\u7684\u6fc0\u52b1\u4e00\u81f4\u6027\u603b\u662f\u5bfc\u81f4\u4ea4\u6613\u8005\u51c0\u635f\u5931\uff0c\u8fd9\u662f\u56e0\u4e3a\u8f83\u4f4e\u7684\u914d\u5bf9\u6d41\u52a8\u6027\u548c\u7531\u6b64\u4ea7\u751f\u7684\u4ea4\u6613\u4ef7\u683c\u5f71\u54cd\u589e\u52a0\u3002"),(0,o.kt)("p",null,"\u96c6\u4e2d\u6d41\u52a8\u6027\u6982\u5ff5\u7684\u5f15\u5165\u4f7f\u603b\u6d41\u52a8\u6027\u548c\u4ef7\u683c\u5f71\u54cd\u8131\u94a9\u3002\u6d88\u9664\u4e86\u4ef7\u683c\u5f71\u54cd\u7684\u62c5\u5fe7\u540e\uff0c\u5c06\u4ee3\u5e01\u5bf9\u62c6\u5206\u4e3a\u591a\u4e2a\u6c60\u6210\u4e3a\u6539\u5584\u4e4b\u524d\u7531 0.30% \u4ea4\u6613\u8d39\u7528\u670d\u52a1\u4e0d\u8db3\u7684\u8d44\u4ea7\u6c60\u529f\u80fd\u7684\u4e00\u79cd\u53ef\u884c\u65b9\u6cd5\u3002"),(0,o.kt)("h2",{id:"\u5bfb\u627e\u5408\u9002\u7684\u6c60\u8d39"},"\u5bfb\u627e\u5408\u9002\u7684\u6c60\u8d39"),(0,o.kt)("p",null,"\u6211\u4eec\u9884\u8ba1\u67d0\u4e9b\u7c7b\u578b\u7684\u8d44\u4ea7\u4f1a\u503e\u5411\u4e8e\u7279\u5b9a\u7684\u8d39\u7528\u5c42\u7ea7\uff0c\u57fa\u4e8e\u4ea4\u6613\u8005\u548c\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u7684\u6fc0\u52b1\u6700\u63a5\u8fd1\u4e00\u81f4\u7684\u5730\u65b9\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u9884\u8ba1\u4f4e\u6ce2\u52a8\u6027\u8d44\u4ea7\uff08\u7a33\u5b9a\u5e01\uff09\u53ef\u80fd\u4f1a\u96c6\u4e2d\u5728\u6700\u4f4e\u7684\u8d39\u7528\u5c42\u7ea7\uff0c\u56e0\u4e3a\u6301\u6709\u8fd9\u4e9b\u8d44\u4ea7\u7684\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u7684\u4ef7\u683c\u98ce\u9669\u975e\u5e38\u4f4e\uff0c\u800c\u8fdb\u884c\u4ea4\u6613\u7684\u4eba\u5c06\u88ab\u6fc0\u52b1\u8ffd\u6c42\u5c3d\u53ef\u80fd\u63a5\u8fd1 1:1 \u7684\u6267\u884c\u4ef7\u683c\u3002"),(0,o.kt)("p",null,"\u540c\u6837\uff0c\u6211\u4eec\u9884\u671f\u66f4\u7279\u6b8a\u7684\u8d44\u4ea7\u6216\u4ea4\u6613\u9891\u7387\u8f83\u4f4e\u7684\u8d44\u4ea7\u81ea\u7136\u4f1a\u503e\u5411\u4e8e\u66f4\u9ad8\u7684\u8d39\u7528\u2014\u2014\u56e0\u4e3a\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u5c06\u88ab\u6fc0\u52b1\u62b5\u6d88\u6301\u6709\u8fd9\u4e9b\u8d44\u4ea7\u5728\u5176\u6301\u4ed3\u671f\u95f4\u7684\u6210\u672c\u98ce\u9669\u3002"),(0,o.kt)("h2",{id:"\u534f\u8bae\u8d39\u7528"},"\u534f\u8bae\u8d39\u7528"),(0,o.kt)("p",null,"Uniswap v3 \u8bbe\u6709\u534f\u8bae\u8d39\u7528\uff0c\u53ef\u7531 UNI \u6cbb\u7406\u5f00\u542f\u3002\u4e0e v2 \u76f8\u6bd4\uff0cUNI \u6cbb\u7406\u5728\u9009\u62e9\u4ea4\u6613\u8d39\u7528\u4e2d\u6d41\u5411\u534f\u8bae\u7684\u6bd4\u4f8b\u65b9\u9762\u62e5\u6709\u66f4\u591a\u7075\u6d3b\u6027\u3002\u6709\u5173\u534f\u8bae\u8d39\u7528\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://uniswap.org/whitepaper-v3.pdf"},"\u767d\u76ae\u4e66"),"\u3002"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"\u5728\u8303\u56f4\u5185\u6d41\u52a8\u6027\u6307\u7684\u662f\u5305\u542b\u5728\u73b0\u8d27\u4ef7\u683c\u4e24\u4fa7\u7684\u6240\u6709\u4ed3\u4f4d\u4e2d\u7684\u6d41\u52a8\u6027\u3002",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);