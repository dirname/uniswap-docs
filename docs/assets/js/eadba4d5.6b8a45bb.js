"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[4102],{35736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const o={id:"oracle",title:"\u9884\u8a00\u673a",sidebar_position:3},i=void 0,p={unversionedId:"concepts/protocol/oracle",id:"concepts/protocol/oracle",title:"\u9884\u8a00\u673a",description:"\u5bf9\u9884\u8a00\u673a\u7684\u6982\u5ff5\u611f\u5230\u964c\u751f\uff1f\u9996\u5148\u67e5\u770b\u4ee5\u592a\u574a\u57fa\u91d1\u4f1a\u7684 \u9884\u8a00\u673a\u6982\u8ff0\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/concepts/protocol/oracle.md",sourceDirName:"concepts/protocol",slug:"/concepts/protocol/oracle",permalink:"/uniswap-docs/concepts/protocol/oracle",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/concepts/protocol/oracle.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"oracle",title:"\u9884\u8a00\u673a",sidebar_position:3},sidebar:"conceptsSidebar",previous:{title:"\u8d39\u7528",permalink:"/uniswap-docs/concepts/protocol/fees"},next:{title:"\u8303\u56f4\u8ba2\u5355",permalink:"/uniswap-docs/concepts/protocol/range-orders"}},l={},c=[{value:"\u89c2\u5bdf\u503c",id:"\u89c2\u5bdf\u503c",level:2},{value:"\u523b\u5ea6\u7d2f\u52a0\u5668",id:"\u523b\u5ea6\u7d2f\u52a0\u5668",level:2},{value:"\u6d41\u52a8\u6027\u7d2f\u52a0\u5668",id:"\u6d41\u52a8\u6027\u7d2f\u52a0\u5668",level:2},{value:"\u4ece\u523b\u5ea6\u63a8\u5bfc\u4ef7\u683c",id:"\u4ece\u523b\u5ea6\u63a8\u5bfc\u4ef7\u683c",level:2}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5bf9\u9884\u8a00\u673a\u7684\u6982\u5ff5\u611f\u5230\u964c\u751f\uff1f\u9996\u5148\u67e5\u770b\u4ee5\u592a\u574a\u57fa\u91d1\u4f1a\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/oracles/"},"\u9884\u8a00\u673a\u6982\u8ff0"),"\u3002"))),(0,r.kt)("p",null,"\u6240\u6709Uniswap v3\u6c60\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u9884\u8a00\u673a\uff0c\u63d0\u4f9b\u5386\u53f2\u4ef7\u683c\u548c\u6d41\u52a8\u6027\u6570\u636e\u8bbf\u95ee\u3002\u8fd9\u79cd\u80fd\u529b\u89e3\u9501\u4e86\u5e7f\u6cdb\u7684\u94fe\u4e0a\u5e94\u7528\u573a\u666f\u3002"),(0,r.kt)("p",null,"\u5386\u53f2\u6570\u636e\u5b58\u50a8\u4e3a\u89c2\u5bdf\u503c\u6570\u7ec4\u7684\u5f62\u5f0f\u3002\u6700\u521d\uff0c\u6bcf\u4e2a\u6c60\u53ea\u8ffd\u8e2a\u4e00\u4e2a\u89c2\u5bdf\u503c\uff0c\u968f\u7740\u65f6\u95f4\u5757\u7684\u6d41\u901d\u800c\u8986\u76d6\u5b83\u3002\u8fd9\u9650\u5236\u4e86\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u7684\u5386\u53f2\u6570\u636e\u7684\u65f6\u95f4\u8de8\u5ea6\u3002\u7136\u800c\uff0c\u4efb\u4f55\u613f\u610f\u652f\u4ed8\u4ea4\u6613\u8d39\u7528\u7684\u65b9\u90fd\u53ef\u4ee5",(0,r.kt)("a",{parentName:"p",href:"../../contracts/v3/reference/core/UniswapV3Pool#increaseobservationcardinalitynext"},"\u589e\u52a0\u8ffd\u8e2a\u7684\u89c2\u5bdf\u503c\u6570\u91cf"),"\uff08\u6700\u591a\u53ef\u8fbe",(0,r.kt)("inlineCode",{parentName:"p"},"65535"),"\uff09\uff0c\u5c06\u6570\u636e\u53ef\u7528\u671f\u6269\u5c55\u5230\u5927\u7ea69\u5929\u6216\u66f4\u957f\u3002"),(0,r.kt)("p",null,"\u76f4\u63a5\u5728\u6c60\u5408\u7ea6\u4e2d\u5b58\u50a8\u4ef7\u683c\u548c\u6d41\u52a8\u6027\u5386\u53f2\u6570\u636e\u5927\u5927\u51cf\u5c11\u4e86\u8c03\u7528\u5408\u7ea6\u903b\u8f91\u9519\u8bef\u7684\u53ef\u80fd\u6027\uff0c\u5e76\u901a\u8fc7\u6d88\u9664\u5b58\u50a8\u5386\u53f2\u503c\u7684\u9700\u6c42\u964d\u4f4e\u4e86\u96c6\u6210\u6210\u672c\u3002\u6b64\u5916\uff0cv3\u9884\u8a00\u673a\u7684\u663e\u8457\u6700\u5927\u957f\u5ea6\u4f7f\u5f97\u64cd\u7eb5\u9884\u8a00\u673a\u4ef7\u683c\u53d8\u5f97\u6781\u5176\u56f0\u96be\uff0c\u56e0\u4e3a\u8c03\u7528\u5408\u7ea6\u53ef\u4ee5\u5ec9\u4ef7\u5730\u6784\u5efa\u4efb\u610f\u8303\u56f4\u5185\u7684\u65f6\u95f4\u52a0\u6743\u5e73\u5747\u503c\uff0c\u8be5\u8303\u56f4\u53ef\u4ee5\u4f4d\u4e8e\uff08\u6216\u5b8c\u5168\u5305\u542b\uff09\u9884\u8a00\u673a\u6570\u7ec4\u7684\u957f\u5ea6\u5185\u3002"),(0,r.kt)("h2",{id:"\u89c2\u5bdf\u503c"},"\u89c2\u5bdf\u503c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Observation"),"\u91c7\u7528\u4ee5\u4e0b\u5f62\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Observation {\n    // \u89c2\u5bdf\u65f6\u7684\u533a\u5757\u65f6\u95f4\u6233\n    uint32 blockTimestamp;\n    // \u7d2f\u79ef\u523b\u5ea6\uff0c\u5373\u81ea\u6c60\u9996\u6b21\u521d\u59cb\u5316\u4ee5\u6765\u7684\u523b\u5ea6*\u7ecf\u8fc7\u7684\u65f6\u95f4\n    int56 tickCumulative;\n    // \u6bcf\u6d41\u52a8\u6027\u7684\u79d2\u6570\uff0c\u5373\u81ea\u6c60\u9996\u6b21\u521d\u59cb\u5316\u4ee5\u6765\u7684\u5df2\u8fc7\u79d2\u6570 / \u6700\u5927(1, \u6d41\u52a8\u6027)\n    uint160 secondsPerLiquidityCumulativeX128;\n    // \u662f\u5426\u5df2\u521d\u59cb\u5316\u89c2\u5bdf\u503c\n    bool initialized;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Observation"),"\u53ef\u4ee5\u901a\u8fc7v3\u6c60\u4e0a\u7684",(0,r.kt)("a",{parentName:"p",href:"../../contracts/v3/reference/core/interfaces/pool/IUniswapV3PoolState#observations"},(0,r.kt)("inlineCode",{parentName:"a"},"observations")),"\u65b9\u6cd5\u83b7\u53d6\u3002\u4f46\u662f\uff0c\u8fd9\u4e0d\u662f\u63a8\u8350\u7684\u6d88\u8d39\u9884\u8a00\u673a\u6570\u636e\u7684\u65b9\u5f0f\u3002\u76f8\u53cd\uff0c\u4f18\u5148\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"observe"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function observe(uint32[] calldata secondsAgos)\n    external\n    view\n    returns (int56[] memory tickCumulatives, uint160[] memory secondsPerLiquidityCumulativeX128s);\n")),(0,r.kt)("p",null,"\u6bcf\u6b21\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"observe"),"\u65f6\uff0c\u8c03\u7528\u8005\u5fc5\u987b\u6307\u5b9a\u4e00\u4e2a\u5305\u542b\u4efb\u610f\u6570\u91cf\u79d2\u524d\u7684\u6570\u7ec4\uff0c\u8868\u793a\u8fd4\u56de\u89c2\u5bdf\u503c\u7684\u65f6\u95f4\u3002\u6ce8\u610f\uff0c\u7ed9\u5b9a\u7684\u6240\u6709\u65f6\u95f4\u90fd\u5fc5\u987b\u6bd4\u5b58\u50a8\u7684\u6700\u65e7\u89c2\u5bdf\u503c\u66f4\u65b0\uff08\u6216\u540c\u6837\u65e7\uff09\u3002\u6ce8\u610f\uff1a\u5982\u679c\u8fd9\u4e9b\u65f6\u95f4\u5e76\u4e0d\u7cbe\u786e\u5bf9\u5e94\u4e8e\u5199\u5165\u89c2\u5bdf\u503c\u7684\u533a\u5757\uff0c\u5219\u4f1a\u6784\u9020\u4e00\u4e2a\u5047\u8bbe\u89c2\u5bdf\u503c\uff0c\u6d88\u9664\u4e86\u8c03\u7528\u8005\u624b\u52a8\u63d2\u503c\u7684\u9700\u8981\u3002\u8fd9\u662f\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"observe"),"\u800c\u4e0d\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"observations"),"\u7684\u4e3b\u8981\u539f\u56e0\u4e4b\u4e00\u3002"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u7531\u4e8e\u9884\u8a00\u673a\u6bcf\u533a\u5757\u6700\u591a\u53ea\u66f4\u65b0\u4e00\u6b21\uff0c\u56e0\u6b64\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"secondsAgo"),"\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"observe"),"\u5c06\u8fd4\u56de\u6700\u8fd1\u5199\u5165\u7684\u89c2\u5bdf\u503c\uff0c\u8fd9\u53ea\u80fd\u4e0e\u5f53\u524d\u533a\u5757\u5f00\u59cb\u65f6\uff08\u6216\u66f4\u65e9\uff09\u4e00\u6837\u65b0\u3002"),(0,r.kt)("h2",{id:"\u523b\u5ea6\u7d2f\u52a0\u5668"},"\u523b\u5ea6\u7d2f\u52a0\u5668"),(0,r.kt)("p",null,"\u523b\u5ea6\u7d2f\u52a0\u5668\u5b58\u50a8\u89c2\u5bdf\u65f6\u523b\u7684\u6d3b\u52a8\u523b\u5ea6\u7d2f\u8ba1\u603b\u548c\u3002\u523b\u5ea6\u7d2f\u52a0\u5668\u7684\u503c\u5355\u8c03\u9012\u589e\uff0c\u6bcf\u79d2\u589e\u957f\u5f53\u524d\u523b\u5ea6\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5f97\u51fa\u533a\u95f4\u5185\u7684\u7b97\u672f\u5e73\u5747\u523b\u5ea6\uff0c\u8c03\u7528\u8005\u9700\u8981\u68c0\u7d22\u4e24\u4e2a\u8fde\u7eed\u7684\u89c2\u5bdf\u503c\uff0c\u53d6\u8fd9\u4e24\u4e2a\u503c\u7684\u5dee\u503c\uff0c\u7136\u540e\u9664\u4ee5\u5b83\u4eec\u4e4b\u95f4\u7684\u65f6\u95f4\u95f4\u9694\u3002\u4ece\u523b\u5ea6\u7d2f\u52a0\u5668\u8ba1\u7b97TWAP\u4e5f\u5728",(0,r.kt)("a",{parentName:"p",href:"https://uniswap.org/whitepaper-v3.pdf"},(0,r.kt)("strong",{parentName:"a"},"\u767d\u76ae\u4e66")),"\u4e2d\u6709\u6240\u6d89\u53ca\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528\u7b97\u672f\u5e73\u5747\u523b\u5ea6\u63a8\u5bfc\u51fa\u7684\u4ef7\u683c\u5bf9\u5e94\u4e8e",(0,r.kt)("em",{parentName:"p"},"\u51e0\u4f55"),"\u5e73\u5747\u4ef7\u683c\u3002"),(0,r.kt)("p",null,"\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-v3-periphery/blob/main/contracts/libraries/OracleLibrary.sol"},"OracleLibrary"),"\uff0c\u4e86\u89e3\u5982\u4f55\u4f7f\u7528\u523b\u5ea6\u7d2f\u52a0\u5668\u7684\u793a\u4f8b\u3002"),(0,r.kt)("h2",{id:"\u6d41\u52a8\u6027\u7d2f\u52a0\u5668"},"\u6d41\u52a8\u6027\u7d2f\u52a0\u5668"),(0,r.kt)("p",null,"\u6d41\u52a8\u6027\u7d2f\u52a0\u5668\u5b58\u50a8\u89c2\u5bdf\u65f6\u523b\u7684\u79d2\u6570 / \u5728\u8303\u56f4\u5185\u7684\u6d41\u52a8\u6027\u503c\u3002\u6d41\u52a8\u6027\u7d2f\u52a0\u5668\u7684\u503c\u5355\u8c03\u9012\u589e\uff0c\u6bcf\u79d2\u589e\u957f\u79d2\u6570 / \u5728\u8303\u56f4\u5185\u7684\u6d41\u52a8\u6027\u503c\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5f97\u51fa\u533a\u95f4\u5185\u7684\u8c03\u548c\u5e73\u5747\u6d41\u52a8\u6027\uff0c\u8c03\u7528\u8005\u9700\u8981\u68c0\u7d22\u4e24\u4e2a\u8fde\u7eed\u7684\u89c2\u5bdf\u503c\uff0c\u53d6\u8fd9\u4e24\u4e2a\u503c\u7684\u5dee\u503c\uff0c\u7136\u540e\u5c06\u7ecf\u8fc7\u7684\u65f6\u95f4\u9664\u4ee5\u8fd9\u4e2a\u503c\u3002\u8ba1\u7b97TWAL\u5728",(0,r.kt)("a",{parentName:"p",href:"https://uniswap.org/whitepaper-v3.pdf"},(0,r.kt)("strong",{parentName:"a"},"\u767d\u76ae\u4e66")),"\u4e2d\u6709\u66f4\u8be6\u7ec6\u7684\u8bf4\u660e\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728\u8303\u56f4\u5185\u7684\u6d41\u52a8\u6027\u7d2f\u52a0\u5668\u5e94\u8c28\u614e\u4f7f\u7528\u3002\u56e0\u4e3a\u5f53\u524d\u523b\u5ea6\u548c\u5f53\u524d\u5728\u8303\u56f4\u5185\u7684\u6d41\u52a8\u6027\u53ef\u80fd\u5b8c\u5168\u4e0d\u76f8\u5173\uff0c\u5b58\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5728\u540c\u4e00\u6c60\u7684\u533a\u95f4\u5185\u91c7\u53d6\u7b97\u672f\u5e73\u5747\u523b\u5ea6\u548c\u8c03\u548c\u5e73\u5747\u6d41\u52a8\u6027\u53ef\u80fd\u4f1a\u4e0d\u51c6\u786e\u5730\u63cf\u8ff0\u8fd9\u4e2a\u6c60\u76f8\u5bf9\u4e8e\u53e6\u4e00\u4e2a\u6c60\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6c60A\u7684\u5f53\u524d\u523b\u5ea6\u57285\u79d2\u5185\u662f0\uff0c\u63a5\u4e0b\u67655\u79d2\u5185\u662f100\uff0c\u523b\u5ea6\u7d2f\u52a0\u5668\u5c06\u662f50\u3002\u5982\u679c\u5728\u540c\u4e00\u533a\u95f4\u5185\uff0c\u5728\u8303\u56f4\u5185\u6d41\u52a8\u6027\u4e3a5000\u548c50\uff0c\u8c03\u548c\u5e73\u5747\u6d41\u52a8\u6027\u5c06\u662f~99\u3002\u5c06\u6b64\u4e0e\u6c60B\uff08\u7531\u76f8\u540c\u7684\u8d44\u4ea7\u7ec4\u6210\uff09\u8fdb\u884c\u6bd4\u8f83\uff0c\u5176\u4e2d\u523b\u5ea6\u662f50\uff0c\u5728\u8303\u56f4\u5185\u6d41\u52a8\u6027\u7ea6\u4e3a99\uff0c\u6301\u7eed10\u79d2\u3002\u7d2f\u52a0\u5668\u7684\u503c\u5c06\u76f8\u540c\uff0c\u4f46\u5e95\u5c42\u884c\u4e3a\u5f53\u7136\u975e\u5e38\u4e0d\u540c\u3002"))),(0,r.kt)("h2",{id:"\u4ece\u523b\u5ea6\u63a8\u5bfc\u4ef7\u683c"},"\u4ece\u523b\u5ea6\u63a8\u5bfc\u4ef7\u683c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'\u5f53\u6211\u4eec\u4f7f\u7528"\u6d3b\u52a8\u523b\u5ea6"\u6216\u5176\u4ed6\u65b9\u5f0f\u6765\u6307\u4ee3\u6c60\u7684\u5f53\u524d\u523b\u5ea6\u65f6\uff0c\u6211\u4eec\u7684\u610f\u601d\u662f\u79bb\u5f53\u524d\u4ef7\u683c\u6700\u8fd1\u7684\u4e0b\u754c\u523b\u5ea6\u3002')),(0,r.kt)("p",null,"\u5f53\u521b\u5efa\u6c60\u65f6\uff0c\u6bcf\u4e2a\u4ee3\u5e01\u6839\u636e\u4ee3\u5e01\u5bf9\u4e2d\u7684\u4ee3\u5e01\u5408\u7ea6\u5730\u5740\u88ab\u5206\u914d\u7ed9",(0,r.kt)("inlineCode",{parentName:"p"},"token0"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"token1"),"\u3002\u4ee3\u5e01\u662f\u5426\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"token0"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"token1"),"\u662f\u6ca1\u6709\u610f\u4e49\u7684\uff1b\u5b83\u4ec5\u7528\u4e8e\u7ef4\u62a4\u76f8\u5bf9\u4f30\u503c\u548c\u6c60\u5408\u7ea6\u4e2d\u901a\u7528\u903b\u8f91\u7684\u56fa\u5b9a\u5206\u914d\u76ee\u7684\u3002"),(0,r.kt)("p",null,"\u4ece\u5f53\u524d\u523b\u5ea6\u63a8\u5bfc\u8d44\u4ea7\u4ef7\u683c\u662f\u53ef\u884c\u7684\uff0c\u56e0\u4e3a\u5728\u6c60\u5408\u7ea6\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"token0"),"\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"token1"),"\u7684\u56fa\u5b9a\u8868\u8fbe\u5f0f\u8868\u793a\u3002"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u5728WETH / USDC\u6c60\u4e2d\u627e\u5230WETH\u4ef7\u683c\u7684\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5176\u4e2dWETH\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"token0"),"\uff0cUSDC\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"token1"),"\uff1a"),(0,r.kt)("p",null,"\u4f60\u6709\u4e00\u4e2a\u9884\u8a00\u673a\u8bfb\u6570\uff0c\u663e\u793a",(0,r.kt)("inlineCode",{parentName:"p"},"tickCumulative"),"\u7684\u8fd4\u56de\u503c\u4e3a","[",(0,r.kt)("inlineCode",{parentName:"p"},"70_000"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1_070_000"),"]","\uff0c\u4e24\u6b21\u89c2\u5bdf\u4e4b\u95f4\u7684\u7ecf\u8fc7\u65f6\u95f4\u4e3a10\u79d2\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u53d6\u7d2f\u52a0\u5668\u503c\u4e4b\u5dee\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"1_070_000")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"70_000")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"1_000_000"),"\uff09\uff0c\u7136\u540e\u9664\u4ee5\u7ecf\u8fc7\u7684\u65f6\u95f4\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"1_000_000")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"100_000"),"\uff09\u6765\u63a8\u5bfc\u8fd9\u4e2a\u533a\u95f4\u5185\u7684\u5e73\u5747\u523b\u5ea6\u3002"),(0,r.kt)("p",null,"\u6709\u4e86\u523b\u5ea6\u8bfb\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"100_000"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5f53\u524d\u523b\u5ea6\u4f5c\u4e3a\u516c\u5f0f",(0,r.kt)("inlineCode",{parentName:"p"},"p(i) = 1.0001**i"),"\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"i"),"\uff08\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://uniswap.org/whitepaper-v3.pdf"},"\u767d\u76ae\u4e66"),"\u76846.1\u8282\uff09\u6765\u627e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"token1"),"\uff08USDC\uff09\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"token0"),"\uff08WETH\uff09\u7684\u503c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"1.0001**100_000 \u2245 22015.5")," USDC / WETH"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u523b\u5ea6\u662f\u5e26\u7b26\u53f7\u6574\u6570\uff0c\u53ef\u4ee5\u8868\u793a\u4e3a\u8d1f\u6570\uff0c\u56e0\u6b64\u5728\u4efb\u4f55",(0,r.kt)("inlineCode",{parentName:"p"},"token0"),"\u7684\u4ef7\u503c\u4f4e\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"token1"),"\u7684\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"tickCumulative"),"\u5c06\u8fd4\u56de\u8d1f\u523b\u5ea6\u503c\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"token0"),"\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"token1"),"\u8ba1\u7b97\u7684\u7ed3\u679c\u5c06\u8fd4\u56de\u76f8\u5bf9\u503c",(0,r.kt)("inlineCode",{parentName:"p"},"< 0"),"\u3002"))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,u=m["".concat(l,".").concat(k)]||m[k]||d[k]||o;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);