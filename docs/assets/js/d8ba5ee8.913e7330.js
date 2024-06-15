"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[2184],{68044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(83117),a=(r(67294),r(3905));const o={id:"smart-contracts",title:"\u667a\u80fd\u5408\u7ea6"},c=void 0,p={unversionedId:"contracts/v2/concepts/protocol-overview/smart-contracts",id:"contracts/v2/concepts/protocol-overview/smart-contracts",title:"\u667a\u80fd\u5408\u7ea6",description:"Uniswap V2 \u662f\u4e00\u4e2a\u7531\u4e8c\u5143\u667a\u80fd\u5408\u7ea6\u7cfb\u7edf\u7ec4\u6210\u7684\u3002\u6838\u5fc3\u5408\u7ea6\u63d0\u4f9b\u4e86\u6240\u6709\u4e0e Uniswap \u4ea4\u4e92\u7684\u5404\u65b9\u7684\u57fa\u672c\u5b89\u5168\u4fdd\u8bc1\u3002\u5916\u56f4\u5408\u7ea6\u4e0e\u4e00\u4e2a\u6216\u591a\u4e2a\u6838\u5fc3\u5408\u7ea6\u8fdb\u884c\u4ea4\u4e92\uff0c\u4f46\u5b83\u4eec\u672c\u8eab\u5e76\u4e0d\u5c5e\u4e8e\u6838\u5fc3\u90e8\u5206\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v2/concepts/01-protocol-overview/03-smart-contracts.md",sourceDirName:"contracts/v2/concepts/01-protocol-overview",slug:"/contracts/v2/concepts/protocol-overview/smart-contracts",permalink:"/uniswap-docs/contracts/v2/concepts/protocol-overview/smart-contracts",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v2/concepts/01-protocol-overview/03-smart-contracts.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"smart-contracts",title:"\u667a\u80fd\u5408\u7ea6"},sidebar:"contractsSidebar",previous:{title:"\u751f\u6001\u7cfb\u7edf\u53c2\u4e0e\u8005",permalink:"/uniswap-docs/contracts/v2/concepts/protocol-overview/ecosystem-participants"},next:{title:"\u8bcd\u6c47\u8868",permalink:"/uniswap-docs/contracts/v2/concepts/protocol-overview/glossary"}},i={},s=[{value:"\u5de5\u5382",id:"\u5de5\u5382",level:2},{value:"\u5bf9",id:"\u5bf9",level:2},{value:"\u5e93",id:"\u5e93",level:2},{value:"\u8def\u7531\u5668",id:"\u8def\u7531\u5668",level:2},{value:"\u53d1\u9001\u4ee3\u5e01",id:"\u53d1\u9001\u4ee3\u5e01",level:2},{value:"WETH",id:"weth",level:2},{value:"\u6700\u5c0f\u6d41\u52a8\u6027",id:"\u6700\u5c0f\u6d41\u52a8\u6027",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Uniswap V2 \u662f\u4e00\u4e2a\u7531\u4e8c\u5143\u667a\u80fd\u5408\u7ea6\u7cfb\u7edf\u7ec4\u6210\u7684\u3002",(0,a.kt)("a",{parentName:"p",href:"#core"},"\u6838\u5fc3"),"\u5408\u7ea6\u63d0\u4f9b\u4e86\u6240\u6709\u4e0e Uniswap \u4ea4\u4e92\u7684\u5404\u65b9\u7684\u57fa\u672c\u5b89\u5168\u4fdd\u8bc1\u3002",(0,a.kt)("a",{parentName:"p",href:"#periphery"},"\u5916\u56f4"),"\u5408\u7ea6\u4e0e\u4e00\u4e2a\u6216\u591a\u4e2a\u6838\u5fc3\u5408\u7ea6\u8fdb\u884c\u4ea4\u4e92\uff0c\u4f46\u5b83\u4eec\u672c\u8eab\u5e76\u4e0d\u5c5e\u4e8e\u6838\u5fc3\u90e8\u5206\u3002"),(0,a.kt)("h1",{id:"\u6838\u5fc3"},"\u6838\u5fc3"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-core"},"\u6e90\u4ee3\u7801")),(0,a.kt)("p",null,"\u6838\u5fc3\u5305\u542b\u4e00\u4e2a\u5355\u4e00\u7684",(0,a.kt)("a",{parentName:"p",href:"#factory"},"\u5de5\u5382"),"\u548c\u8bb8\u591a",(0,a.kt)("a",{parentName:"p",href:"#pairs"},"\u5bf9"),"\uff0c\u5de5\u5382\u8d1f\u8d23\u521b\u5efa\u5e76\u5bf9\u8fd9\u4e9b\u5bf9\u8fdb\u884c\u7d22\u5f15\u3002\u8fd9\u4e9b\u5408\u7ea6\u975e\u5e38\u7cbe\u7b80\uff0c\u751a\u81f3\u53ef\u4ee5\u8bf4\u662f\u6781\u7b80\u4e3b\u4e49\u98ce\u683c\u3002\u8fd9\u6837\u505a\u7684\u7b80\u5355\u7406\u7531\u662f\uff0c\u8868\u9762\u533a\u57df\u8f83\u5c0f\u7684\u5408\u7ea6\u66f4\u5bb9\u6613\u7406\u89e3\u3001\u66f4\u5c11\u51fa\u73b0\u9519\u8bef\uff0c\u5e76\u4e14\u5728\u529f\u80fd\u4e0a\u66f4\u52a0\u4f18\u96c5\u3002\u8fd9\u79cd\u8bbe\u8ba1\u7684\u6700\u5927\u4f18\u52bf\u53ef\u80fd\u5728\u4e8e\uff0c\u7cfb\u7edf\u7684\u8bb8\u591a\u6240\u9700\u5c5e\u6027\u53ef\u4ee5\u76f4\u63a5\u5728\u4ee3\u7801\u4e2d\u58f0\u660e\uff0c\u7559\u7ed9\u9519\u8bef\u7684\u7a7a\u95f4\u5f88\u5c0f\u3002\u7136\u800c\uff0c\u7f3a\u70b9\u4e4b\u4e00\u662f\u6838\u5fc3\u5408\u7ea6\u5bf9\u4e8e\u7528\u6237\u6765\u8bf4\u4e0d\u592a\u53cb\u597d\u3002\u5b9e\u9645\u4e0a\uff0c\u5bf9\u4e8e\u5927\u591a\u6570\u4f7f\u7528\u573a\u666f\uff0c\u76f4\u63a5\u4e0e\u8fd9\u4e9b\u5408\u7ea6\u4ea4\u4e92\u5e76\u4e0d\u63a8\u8350\u3002\u76f8\u53cd\uff0c\u5e94\u4f7f\u7528\u5916\u56f4\u5408\u7ea6\u3002"),(0,a.kt)("h2",{id:"\u5de5\u5382"},"\u5de5\u5382"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../../reference/smart-contracts/factory"},"\u53c2\u8003\u6587\u6863")),(0,a.kt)("p",null,"\u5de5\u5382\u6301\u6709\u4e3a\u5bf9\u63d0\u4f9b\u52a8\u529b\u7684\u901a\u7528\u5b57\u8282\u7801\u3002\u5176\u4e3b\u8981\u5de5\u4f5c\u662f\u4e3a\u6bcf\u4e2a\u552f\u4e00\u7684\u4ee3\u5e01\u5bf9\u521b\u5efa\u4e00\u4e2a\u4e14\u4ec5\u4e00\u4e2a\u667a\u80fd\u5408\u7ea6\u3002\u5b83\u8fd8\u5305\u542b\u4e86\u5f00\u542f\u534f\u8bae\u8d39\u7528\u7684\u903b\u8f91\u3002"),(0,a.kt)("h2",{id:"\u5bf9"},"\u5bf9"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../../reference/smart-contracts/pair"},"\u53c2\u8003\u6587\u6863")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../../reference/smart-contracts/pair-erc-20"},"\u53c2\u8003\u6587\u6863 (ERC-20)")),(0,a.kt)("p",null,"\u5bf9\u6709\u4e24\u4e2a\u4e3b\u8981\u76ee\u7684\uff1a\u4f5c\u4e3a\u81ea\u52a8\u505a\u5e02\u5546\u548c\u8ddf\u8e2a\u6c60\u4ee3\u5e01\u4f59\u989d\u3002\u5b83\u4eec\u8fd8\u516c\u5f00\u4e86\u53ef\u4ee5\u7528\u4e8e\u6784\u5efa\u53bb\u4e2d\u5fc3\u5316\u4ef7\u683c\u9884\u8a00\u673a\u7684\u6570\u636e\u3002"),(0,a.kt)("h1",{id:"\u5916\u56f4"},"\u5916\u56f4"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v2-periphery"},"\u6e90\u4ee3\u7801")),(0,a.kt)("p",null,"\u5916\u56f4\u662f\u4e00\u7cfb\u5217\u667a\u80fd\u5408\u7ea6\u7684\u96c6\u5408\uff0c\u65e8\u5728\u652f\u6301\u9488\u5bf9\u6838\u5fc3\u7684\u9886\u57df\u7279\u5b9a\u4ea4\u4e92\u3002\u7531\u4e8e Uniswap \u7684\u65e0\u8bb8\u53ef\u6027\u8d28\uff0c\u4e0b\u9762\u63cf\u8ff0\u7684\u5408\u7ea6\u6ca1\u6709\u4efb\u4f55\u7279\u6b8a\u6743\u9650\uff0c\u5b9e\u9645\u4e0a\u53ea\u662f\u53ef\u80fd\u7684\u5916\u56f4\u7c7b\u4f3c\u5408\u7ea6\u5b87\u5b99\u7684\u4e00\u5c0f\u90e8\u5206\u3002\u7136\u800c\uff0c\u5b83\u4eec\u662f\u5b89\u5168\u9ad8\u6548\u5730\u4e0e Uniswap V2 \u4ea4\u4e92\u7684\u6709\u7528\u793a\u4f8b\u3002"),(0,a.kt)("h2",{id:"\u5e93"},"\u5e93"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../../reference/smart-contracts/library"},"\u53c2\u8003\u6587\u6863")),(0,a.kt)("p",null,"\u5e93\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u7528\u4e8e\u83b7\u53d6\u6570\u636e\u548c\u5b9a\u4ef7\u7684\u4fbf\u5229\u51fd\u6570\u3002"),(0,a.kt)("h2",{id:"\u8def\u7531\u5668"},"\u8def\u7531\u5668"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../../reference/smart-contracts/router-02"},"\u53c2\u8003\u6587\u6863")),(0,a.kt)("p",null,"\u8def\u7531\u5668\u4f7f\u7528\u5e93\uff0c\u5b8c\u5168\u652f\u6301\u524d\u7aef\u63d0\u4f9b\u4ea4\u6613\u548c\u6d41\u52a8\u6027\u7ba1\u7406\u529f\u80fd\u7684\u6240\u6709\u57fa\u672c\u9700\u6c42\u3002\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u5b83\u539f\u751f\u652f\u6301\u591a\u5bf9\u4ea4\u6613\uff08\u4f8b\u5982 x \u5230 y \u5230 z\uff09\uff0c\u5c06 ETH \u89c6\u4e3a\u5934\u7b49\u516c\u6c11\uff0c\u5e76\u63d0\u4f9b\u5143\u4ea4\u6613\u4ee5\u79fb\u9664\u6d41\u52a8\u6027\u3002"),(0,a.kt)("h1",{id:"\u8bbe\u8ba1\u51b3\u7b56"},"\u8bbe\u8ba1\u51b3\u7b56"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u90e8\u5206\u63cf\u8ff0\u4e86\u5728 Uniswap V2 \u4e2d\u505a\u51fa\u7684\u4e00\u4e9b\u503c\u5f97\u6ce8\u610f\u7684\u8bbe\u8ba1\u51b3\u7b56\u3002\u9664\u975e\u4f60\u6709\u5174\u8da3\u6df1\u5165\u4e86\u89e3 V2 \u5185\u90e8\u7684\u5de5\u4f5c\u539f\u7406\uff0c\u6216\u8005\u7f16\u5199\u667a\u80fd\u5408\u7ea6\u96c6\u6210\uff0c\u5426\u5219\u8fd9\u4e9b\u5185\u5bb9\u53ef\u4ee5\u8df3\u8fc7\uff01"),(0,a.kt)("h2",{id:"\u53d1\u9001\u4ee3\u5e01"},"\u53d1\u9001\u4ee3\u5e01"),(0,a.kt)("p",null,"\u901a\u5e38\uff0c\u9700\u8981\u4ee3\u5e01\u6765\u6267\u884c\u67d0\u4e9b\u529f\u80fd\u7684\u667a\u80fd\u5408\u7ea6\u8981\u6c42\u6f5c\u5728\u7684\u4ea4\u4e92\u8005\u9996\u5148\u5728\u4ee3\u5e01\u5408\u7ea6\u4e0a\u8fdb\u884c\u6279\u51c6\uff0c\u7136\u540e\u8c03\u7528\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u53cd\u8fc7\u6765\u5728\u4ee3\u5e01\u5408\u7ea6\u4e0a\u8c03\u7528 transferFrom\u3002\u8fd9\u4e0d\u662f V2 \u5bf9\u5982\u4f55\u63a5\u53d7\u4ee3\u5e01\u7684\u65b9\u5f0f\u3002\u76f8\u53cd\uff0c\u5bf9\u5728\u6bcf\u6b21\u4ea4\u4e92\u7684",(0,a.kt)("em",{parentName:"p"},"\u7ed3\u675f"),"\u68c0\u67e5\u5176\u4ee3\u5e01\u4f59\u989d\u3002\u7136\u540e\uff0c\u5728\u4e0b\u4e00\u6b21\u4ea4\u4e92\u7684\u5f00\u59cb\uff0c\u5f53\u524d\u4f59\u989d\u4e0e\u5b58\u50a8\u7684\u503c\u8fdb\u884c\u5dee\u5206\uff0c\u4ee5\u786e\u5b9a\u5f53\u524d\u4ea4\u4e92\u8005\u53d1\u9001\u7684\u4ee3\u5e01\u6570\u91cf\u3002\u8bf7\u53c2\u9605",(0,a.kt)("a",{href:"/whitepaper.pdf",target:"_blank",rel:"noopener noreferrer"},"\u767d\u76ae\u4e66"),"\u4e86\u89e3\u4e3a\u4ec0\u4e48\u662f\u8fd9\u79cd\u60c5\u51b5\u7684\u89e3\u91ca\uff0c\u4f46\u8981\u70b9\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5728\u8c03\u7528\u4efb\u4f55\u9700\u8981\u4ee3\u5e01\u7684\u65b9\u6cd5\u4e4b\u524d\uff0c\u5fc5\u987b\u5c06\u4ee3\u5e01\u8f6c\u79fb\u7ed9\u5bf9"),"\uff08\u6b64\u89c4\u5219\u7684\u4e00\u4e2a\u4f8b\u5916\u662f",(0,a.kt)("a",{parentName:"p",href:"../core-concepts/flash-swaps"},"\u95ea\u7535\u4ea4\u6362"),"\uff09\u3002"),(0,a.kt)("h2",{id:"weth"},"WETH"),(0,a.kt)("p",null,"\u4e0e Uniswap V1 \u6c60\u4e0d\u540c\uff0cV2 \u5bf9\u4e0d\u76f4\u63a5\u652f\u6301 ETH\uff0c\u56e0\u6b64 ETH\u21c4ERC-20 \u5bf9\u5fc5\u987b\u901a\u8fc7 WETH \u6765\u6a21\u62df\u3002\u505a\u51fa\u8fd9\u4e00\u9009\u62e9\u7684\u52a8\u673a\u662f\u4e3a\u4e86\u4ece\u6838\u5fc3\u4e2d\u5220\u9664 ETH \u7279\u5b9a\u7684\u4ee3\u7801\uff0c\u4ece\u800c\u4ea7\u751f\u66f4\u7cbe\u7b80\u7684\u4ee3\u7801\u5e93\u3002\u7136\u800c\uff0c\u7ec8\u7aef\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u5730\u5728\u5468\u8fb9\u5c01\u88c5/\u89e3\u5c01\u88c5 ETH \u6765\u5b8c\u5168\u5ffd\u7565\u8fd9\u4e2a\u5b9e\u73b0\u7ec6\u8282\u3002"),(0,a.kt)("p",null,"\u8def\u7531\u5668\u5b8c\u5168\u652f\u6301\u901a\u8fc7 ETH \u4e0e\u4efb\u4f55 WETH \u5bf9\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("h2",{id:"\u6700\u5c0f\u6d41\u52a8\u6027"},"\u6700\u5c0f\u6d41\u52a8\u6027"),(0,a.kt)("p",null,"\u4e3a\u4e86\u7f13\u89e3\u820d\u5165\u8bef\u5dee\u5e76\u589e\u52a0\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u7684\u7406\u8bba\u6700\u5c0f\u523b\u5ea6\u5927\u5c0f\uff0c\u5bf9\u4f1a\u71c3\u70e7\u7b2c\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"../../reference/smart-contracts/pair#minimum_liquidity"},"MINIMUM_LIQUIDITY")," \u6c60\u4ee3\u5e01\u3002\u5bf9\u4e8e\u7edd\u5927\u591a\u6570\u5bf9\u800c\u8a00\uff0c\u8fd9\u5c06\u4ee3\u8868\u4e00\u4e2a\u5fae\u4e0d\u8db3\u9053\u7684\u4ef7\u503c\u3002\u71c3\u70e7\u5728\u7b2c\u4e00\u6b21\u6d41\u52a8\u6027\u63d0\u4f9b\u65f6\u81ea\u52a8\u53d1\u751f\uff0c\u6b64\u540e ",(0,a.kt)("a",{parentName:"p",href:"../../reference/smart-contracts/pair-erc-20#totalsupply"},"totalSupply")," \u5c06\u6c38\u8fdc\u53d7\u5230\u9650\u5236\u3002"))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,v=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(v,c(c({ref:t},l),{},{components:r})):n.createElement(v,c({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);