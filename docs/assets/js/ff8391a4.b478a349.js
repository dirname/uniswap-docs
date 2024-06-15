"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[8956],{34970:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>k});var n=a(83117),r=(a(67294),a(3905));const l={},i=void 0,d={unversionedId:"contracts/v3/reference/core/interfaces/pool/IUniswapV3PoolEvents",id:"contracts/v3/reference/core/interfaces/pool/IUniswapV3PoolEvents",title:"IUniswapV3PoolEvents",description:"\u5305\u542b\u6c60\u53d1\u51fa\u7684\u6240\u6709\u4e8b\u4ef6\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v3/reference/core/interfaces/pool/IUniswapV3PoolEvents.md",sourceDirName:"contracts/v3/reference/core/interfaces/pool",slug:"/contracts/v3/reference/core/interfaces/pool/IUniswapV3PoolEvents",permalink:"/uniswap-docs/contracts/v3/reference/core/interfaces/pool/IUniswapV3PoolEvents",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v3/reference/core/interfaces/pool/IUniswapV3PoolEvents.md",tags:[],version:"current",frontMatter:{},sidebar:"contractsSidebar",previous:{title:"IUniswapV3PoolDerivedState",permalink:"/uniswap-docs/contracts/v3/reference/core/interfaces/pool/IUniswapV3PoolDerivedState"},next:{title:"IUniswapV3PoolImmutables",permalink:"/uniswap-docs/contracts/v3/reference/core/interfaces/pool/IUniswapV3PoolImmutables"}},p={},k=[{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"\u94f8\u5e01",id:"\u94f8\u5e01",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-1",level:4},{value:"\u6536\u96c6",id:"\u6536\u96c6",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-2",level:4},{value:"\u71c3\u70e7",id:"\u71c3\u70e7",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-3",level:4},{value:"\u4ea4\u6362",id:"\u4ea4\u6362",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-4",level:4},{value:"\u95ea\u8d37",id:"\u95ea\u8d37",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-5",level:4},{value:"\u589e\u52a0\u89c2\u5bdf\u6b21\u6570\u4e0a\u9650",id:"\u589e\u52a0\u89c2\u5bdf\u6b21\u6570\u4e0a\u9650",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-6",level:4},{value:"\u8bbe\u7f6e\u534f\u8bae\u8d39\u7528",id:"\u8bbe\u7f6e\u534f\u8bae\u8d39\u7528",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-7",level:4},{value:"\u6536\u96c6\u534f\u8bae\u8d39\u7528",id:"\u6536\u96c6\u534f\u8bae\u8d39\u7528",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570-8",level:4}],o={toc:k};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5305\u542b\u6c60\u53d1\u51fa\u7684\u6240\u6709\u4e8b\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Initialize(\n    uint160 sqrtPriceX96,\n    int24 tick\n  )\n")),(0,r.kt)("p",null,"\u5f53\u6c60\u9996\u6b21\u8c03\u7528#initialize\u65f6\uff0c\u6c60\u4f1a\u786e\u5207\u5730\u53d1\u51fa\u4e00\u6b21\u6b64\u4e8b\u4ef6\u3002"),(0,r.kt)("p",null,"\u5728Initialize\u4e4b\u524d\uff0c\u6c60\u65e0\u6cd5\u53d1\u51faMint/Burn/Swap\u4e8b\u4ef6\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtPriceX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6c60\u7684\u521d\u59cb\u5e73\u65b9\u6839\u4ef7\u683c\uff0c\u4f5c\u4e3aQ64.96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tick")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6c60\u7684\u521d\u59cbtick\uff0c\u5373\u6c60\u8d77\u59cb\u4ef7\u683c\u7684\u4ee51.0001\u4e3a\u5e95\u7684\u5bf9\u6570\u3002")))),(0,r.kt)("h3",{id:"\u94f8\u5e01"},"\u94f8\u5e01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Mint(\n    address sender,\n    address owner,\n    int24 tickLower,\n    int24 tickUpper,\n    uint128 amount,\n    uint256 amount0,\n    uint256 amount1\n  )\n")),(0,r.kt)("p",null,"\u5f53\u7ed9\u5b9a\u4f4d\u7f6e\u94f8\u9020\u6d41\u52a8\u6027\u65f6\u53d1\u51fa\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sender")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u94f8\u9020\u6d41\u52a8\u6027\u7684\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"owner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f4d\u7f6e\u7684\u6240\u6709\u8005\u548c\u4efb\u4f55\u94f8\u9020\u6d41\u52a8\u6027\u63a5\u6536\u8005")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickLower")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f4d\u7f6e\u7684\u4e0b\u754ctick")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickUpper")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f4d\u7f6e\u7684\u4e0a\u754ctick")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5728\u4f4d\u7f6e\u8303\u56f4\u5185\u94f8\u9020\u7684\u6d41\u52a8\u6027\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e3a\u4e86\u94f8\u9020\u6d41\u52a8\u6027\u6240\u9700token0\u7684\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e3a\u4e86\u94f8\u9020\u6d41\u52a8\u6027\u6240\u9700token1\u7684\u6570\u91cf")))),(0,r.kt)("h3",{id:"\u6536\u96c6"},"\u6536\u96c6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Collect(\n    address owner,\n    int24 tickLower,\n    int24 tickUpper,\n    uint128 amount0,\n    uint128 amount1\n  )\n")),(0,r.kt)("p",null,"\u5f53\u4f4d\u7f6e\u7684\u6240\u6709\u8005\u6536\u96c6\u8d39\u7528\u65f6\u53d1\u51fa\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8c03\u7528\u8005\u9009\u62e9\u4e0d\u6536\u96c6\u8d39\u7528\uff0cCollect\u4e8b\u4ef6\u53ef\u4ee5\u5e26\u6709\u96f6\u7684amount0\u548camount1\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"owner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6536\u96c6\u8d39\u7528\u7684\u4f4d\u7f6e\u6240\u6709\u8005")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickLower")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f4d\u7f6e\u7684\u4e0b\u754ctick")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickUpper")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f4d\u7f6e\u7684\u4e0a\u754ctick")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6536\u96c6\u7684token0\u8d39\u7528\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6536\u96c6\u7684token1\u8d39\u7528\u6570\u91cf")))),(0,r.kt)("h3",{id:"\u71c3\u70e7"},"\u71c3\u70e7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Burn(\n    address owner,\n    int24 tickLower,\n    int24 tickUpper,\n    uint128 amount,\n    uint256 amount0,\n    uint256 amount1\n  )\n")),(0,r.kt)("p",null,"\u5f53\u79fb\u9664\u4f4d\u7f6e\u7684\u6d41\u52a8\u6027\u65f6\u53d1\u51fa\u3002"),(0,r.kt)("p",null,"\u4e0d\u4f1a\u63d0\u53d6\u7531\u6d41\u52a8\u6027\u4f4d\u7f6e\u8d5a\u53d6\u7684\u4efb\u4f55\u8d39\u7528\uff0c\u8fd9\u4e9b\u8d39\u7528\u5fc5\u987b\u901a\u8fc7#collect\u63d0\u53d6\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"owner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u79fb\u9664\u6d41\u52a8\u6027\u7684\u4f4d\u7f6e\u6240\u6709\u8005")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickLower")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f4d\u7f6e\u7684\u4e0b\u754ctick")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tickUpper")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4f4d\u7f6e\u7684\u4e0a\u754ctick")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8981\u79fb\u9664\u7684\u6d41\u52a8\u6027\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u63d0\u53d6\u7684token0\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u63d0\u53d6\u7684token1\u6570\u91cf")))),(0,r.kt)("h3",{id:"\u4ea4\u6362"},"\u4ea4\u6362"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Swap(\n    address sender,\n    address recipient,\n    int256 amount0,\n    int256 amount1,\n    uint160 sqrtPriceX96,\n    uint128 liquidity,\n    int24 tick\n  )\n")),(0,r.kt)("p",null,"\u5728token0\u548ctoken1\u4e4b\u95f4\u7684\u4efb\u4f55\u4ea4\u6362\u7531\u6c60\u53d1\u51fa\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sender")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53d1\u8d77\u4ea4\u6362\u8c03\u7528\u5e76\u63a5\u6536\u56de\u8c03\u7684\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"recipient")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u6536\u4ea4\u6362\u8f93\u51fa\u7684\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6c60\u4e2dtoken0\u4f59\u989d\u7684\u53d8\u5316")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6c60\u4e2dtoken1\u4f59\u989d\u7684\u53d8\u5316")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sqrtPriceX96")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint160"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ea4\u6362\u540e\u6c60\u7684sqrt(price)\uff0c\u4f5c\u4e3aQ64.96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"liquidity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ea4\u6362\u540e\u6c60\u7684\u6d41\u52a8\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tick")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int24"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ea4\u6362\u540e\u6c60\u7684\u4ef7\u683c\u4ee51.0001\u4e3a\u5e95\u7684\u5bf9\u6570")))),(0,r.kt)("h3",{id:"\u95ea\u8d37"},"\u95ea\u8d37"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event Flash(\n    address sender,\n    address recipient,\n    uint256 amount0,\n    uint256 amount1,\n    uint256 paid0,\n    uint256 paid1\n  )\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4efb\u4f55token0/token1\u7684\u95ea\u8d37\uff0c\u6c60\u4f1a\u53d1\u51fa\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sender")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53d1\u8d77\u4ea4\u6362\u8c03\u7528\u5e76\u63a5\u6536\u56de\u8c03\u7684\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"recipient")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ece\u95ea\u8d37\u63a5\u6536\u4ee3\u5e01\u7684\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u88ab\u95ea\u8d37\u7684token0\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u88ab\u95ea\u8d37\u7684token1\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"paid0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e3a\u95ea\u8d37\u652f\u4ed8\u7684token0\u6570\u91cf\uff0c\u53ef\u4ee5\u8d85\u8fc7amount0\u52a0\u4e0a\u8d39\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"paid1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e3a\u95ea\u8d37\u652f\u4ed8\u7684token1\u6570\u91cf\uff0c\u53ef\u4ee5\u8d85\u8fc7amount1\u52a0\u4e0a\u8d39\u7528")))),(0,r.kt)("h3",{id:"\u589e\u52a0\u89c2\u5bdf\u6b21\u6570\u4e0a\u9650"},"\u589e\u52a0\u89c2\u5bdf\u6b21\u6570\u4e0a\u9650"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event IncreaseObservationCardinalityNext(\n    uint16 observationCardinalityNextOld,\n    uint16 observationCardinalityNextNew\n  )\n")),(0,r.kt)("p",null,"\u5f53\u5b58\u50a8\u7684\u89c2\u5bdf\u6b21\u6570\u589e\u52a0\u65f6\uff0c\u6c60\u4f1a\u53d1\u51fa\u3002"),(0,r.kt)("p",null,"observationCardinalityNext\u5728\u8fdb\u884c\u94f8\u5e01/\u4ea4\u6362/\u71c3\u70e7\u524d\u4e00\u4e2a\u7d22\u5f15\u5904\u5199\u5165\u89c2\u5bdf\u7ed3\u679c\u65f6\u5e76\u4e0d\u662f\u89c2\u5bdf\u6b21\u6570\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"observationCardinalityNextOld")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e0b\u4e00\u4e2a\u89c2\u5bdf\u6b21\u6570\u7684\u5148\u524d\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"observationCardinalityNextNew")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint16"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e0b\u4e00\u4e2a\u89c2\u5bdf\u6b21\u6570\u7684\u66f4\u65b0\u503c")))),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u534f\u8bae\u8d39\u7528"},"\u8bbe\u7f6e\u534f\u8bae\u8d39\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event SetFeeProtocol(\n    uint8 feeProtocol0Old,\n    uint8 feeProtocol1Old,\n    uint8 feeProtocol0New,\n    uint8 feeProtocol1New\n  )\n")),(0,r.kt)("p",null,"\u5f53\u6c60\u66f4\u6539\u534f\u8bae\u8d39\u7528\u65f6\u53d1\u51fa\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570-7"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"feeProtocol0Old")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"token0\u534f\u8bae\u8d39\u7528\u7684\u5148\u524d\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"feeProtocol1Old")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"token1\u534f\u8bae\u8d39\u7528\u7684\u5148\u524d\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"feeProtocol0New")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"token0\u534f\u8bae\u8d39\u7528\u7684\u66f4\u65b0\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"feeProtocol1New")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"token1\u534f\u8bae\u8d39\u7528\u7684\u66f4\u65b0\u503c")))),(0,r.kt)("h3",{id:"\u6536\u96c6\u534f\u8bae\u8d39\u7528"},"\u6536\u96c6\u534f\u8bae\u8d39\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  event CollectProtocol(\n    address sender,\n    address recipient,\n    uint128 amount0,\n    uint128 amount1\n  )\n")),(0,r.kt)("p",null,"\u5f53\u5de5\u5382\u6240\u6709\u8005\u63d0\u53d6\u5df2\u6536\u96c6\u7684\u534f\u8bae\u8d39\u7528\u65f6\u53d1\u51fa\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570-8"},"\u53c2\u6570\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sender")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6536\u96c6\u534f\u8bae\u8d39\u7528\u7684\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"recipient")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u63a5\u6536\u5df2\u6536\u96c6\u534f\u8bae\u8d39\u7528\u7684\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u63d0\u53d6\u7684token0\u534f\u8bae\u8d39\u7528\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount1")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u63d0\u53d6\u7684token1\u534f\u8bae\u8d39\u7528\u6570\u91cf")))))}m.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),k=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=k(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),N=k(a),f=r,u=N["".concat(p,".").concat(f)]||N[f]||m[f]||l;return a?n.createElement(u,i(i({ref:e},o),{},{components:a})):n.createElement(u,i({ref:e},o))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"}}]);