"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[1122],{15787:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const i={id:"understanding-returns",title:"\u4e86\u89e3\u6536\u76ca"},o=void 0,l={unversionedId:"contracts/v2/concepts/advanced-topics/understanding-returns",id:"contracts/v2/concepts/advanced-topics/understanding-returns",title:"\u4e86\u89e3\u6536\u76ca",description:"Uniswap \u901a\u8fc7\u5956\u52b1\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u5728\u5176\u4ed6\u7528\u6237\u4e0e\u8fd9\u4e9b\u8d44\u91d1\u6c60\u4ea4\u6613\u65f6\u4ea7\u751f\u7684\u624b\u7eed\u8d39\uff0c\u6fc0\u52b1\u7528\u6237\u5411\u4ea4\u6613\u8d44\u91d1\u6c60\u6dfb\u52a0\u6d41\u52a8\u6027\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u505a\u5e02\u6d3b\u52a8\u662f\u4e00\u9879\u590d\u6742\u7684\u6d3b\u52a8\u3002\u4e0e\u5355\u7eaf\u6301\u6709\u8d44\u4ea7\u76f8\u6bd4\uff0c\u5728\u57fa\u7840\u8d44\u4ea7\u4ef7\u683c\u5927\u5e45\u4e14\u6301\u7eed\u6ce2\u52a8\u7684\u60c5\u51b5\u4e0b\uff0c\u5b58\u5728\u4e8f\u635f\u7684\u98ce\u9669\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v2/concepts/03-advanced-topics/03-understanding-returns.md",sourceDirName:"contracts/v2/concepts/03-advanced-topics",slug:"/contracts/v2/concepts/advanced-topics/understanding-returns",permalink:"/uniswap-docs/contracts/v2/concepts/advanced-topics/understanding-returns",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v2/concepts/03-advanced-topics/03-understanding-returns.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"understanding-returns",title:"\u4e86\u89e3\u6536\u76ca"},sidebar:"contractsSidebar",previous:{title:"\u5b9a\u4ef7",permalink:"/uniswap-docs/contracts/v2/concepts/advanced-topics/pricing"},next:{title:"\u5b89\u5168\u6027",permalink:"/uniswap-docs/contracts/v2/concepts/advanced-topics/security"}},p={},c=[{value:"\u4e3a\u4ec0\u4e48\u6211\u7684\u6d41\u52a8\u6027\u4ef7\u503c\u4f4e\u4e8e\u6211\u6295\u5165\u7684\uff1f",id:"\u4e3a\u4ec0\u4e48\u6211\u7684\u6d41\u52a8\u6027\u4ef7\u503c\u4f4e\u4e8e\u6211\u6295\u5165\u7684",level:2}],s={toc:c};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Uniswap \u901a\u8fc7\u5956\u52b1\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u5728\u5176\u4ed6\u7528\u6237\u4e0e\u8fd9\u4e9b\u8d44\u91d1\u6c60\u4ea4\u6613\u65f6\u4ea7\u751f\u7684\u624b\u7eed\u8d39\uff0c\u6fc0\u52b1\u7528\u6237\u5411\u4ea4\u6613\u8d44\u91d1\u6c60\u6dfb\u52a0\u6d41\u52a8\u6027\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u505a\u5e02\u6d3b\u52a8\u662f\u4e00\u9879\u590d\u6742\u7684\u6d3b\u52a8\u3002\u4e0e\u5355\u7eaf\u6301\u6709\u8d44\u4ea7\u76f8\u6bd4\uff0c\u5728\u57fa\u7840\u8d44\u4ea7\u4ef7\u683c\u5927\u5e45\u4e14\u6301\u7eed\u6ce2\u52a8\u7684\u60c5\u51b5\u4e0b\uff0c\u5b58\u5728\u4e8f\u635f\u7684\u98ce\u9669\u3002"),(0,a.kt)("h1",{id:"\u98ce\u9669"},"\u98ce\u9669"),(0,a.kt)("p",null,"\u8981\u7406\u89e3\u63d0\u4f9b\u6d41\u52a8\u6027\u76f8\u5173\u7684\u98ce\u9669\uff0c\u4f60\u53ef\u4ee5\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@pintail/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2"},"https://medium.com/@pintail/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2"),"\uff0c\u6df1\u5165\u4e86\u89e3\u5982\u4f55\u6982\u5ff5\u5316\u4e00\u4e2a\u6d41\u52a8\u6027\u5934\u5bf8\u3002"),(0,a.kt)("h1",{id:"\u6587\u7ae0\u4e2d\u7684\u793a\u4f8b"},"\u6587\u7ae0\u4e2d\u7684\u793a\u4f8b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",null,"\u5047\u8bbe\u4e00\u4e2a\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u5411\u8d44\u91d1\u6c60\u4e2d\u6dfb\u52a0\u4e86 10,000 DAI \u548c 100 WETH\uff08\u603b\u4ef7\u503c\u4e3a $20,000\uff09\uff0c\u90a3\u4e48\u8d44\u91d1\u6c60\u73b0\u5728\u603b\u5171\u5305\u542b 100,000 DAI \u548c 1,000 ETH\u3002\u56e0\u4e3a\u63d0\u4f9b\u7684\u91d1\u989d\u7b49\u4e8e\u603b\u6d41\u52a8\u6027\u768410%\uff0c\u5408\u7ea6\u4f1a\u94f8\u9020\u5e76\u53d1\u9001\u7ed9\u505a\u5e02\u5546\u201c\u6d41\u52a8\u6027\u4ee3\u5e01\u201d\uff0c\u4f7f\u4ed6\u4eec\u6709\u6743\u83b7\u5f97\u8d44\u91d1\u6c60\u4e2d10%\u7684\u6d41\u52a8\u6027\u3002\u8fd9\u4e9b\u5e76\u4e0d\u662f\u6295\u673a\u6027\u4ee3\u5e01\uff0c\u7528\u4e8e\u4ea4\u6613\u3002\u5b83\u4eec\u4ec5\u4ec5\u662f\u4f1a\u8ba1\u6216\u8bb0\u8d26\u5de5\u5177\uff0c\u7528\u6765\u8ddf\u8e2a\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u5e94\u5f97\u7684\u4efd\u989d\u3002\u5982\u679c\u5176\u4ed6\u4eba\u968f\u540e\u589e\u51cf\u8d44\u91d1\uff0c\u5c06\u94f8\u9020\u6216\u9500\u6bc1\u65b0\u7684\u6d41\u52a8\u6027\u4ee3\u5e01\uff0c\u4ee5\u786e\u4fdd\u6bcf\u4e2a\u4eba\u5728\u8d44\u91d1\u6c60\u4e2d\u7684\u76f8\u5bf9\u767e\u5206\u6bd4\u4efd\u989d\u4fdd\u6301\u4e0d\u53d8\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u73b0\u5728\u5047\u8bbeCoinbase\u4e0a\u7684\u4ef7\u683c\u4ece $100 \u53d8\u52a8\u5230 $150\u3002\u7ecf\u8fc7\u4e00\u4e9b\u5957\u5229\u540e\uff0cUniswap \u5408\u7ea6\u4e5f\u5e94\u8be5\u53cd\u6620\u8fd9\u4e00\u53d8\u5316\u3002\u4ea4\u6613\u8005\u5c06\u589e\u52a0DAI\u5e76\u79fb\u9664ETH\uff0c\u76f4\u5230\u65b0\u7684\u6bd4\u4f8b\u53d8\u4e3a150:1\u3002")),(0,a.kt)("p",null,"\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u4f1a\u600e\u4e48\u6837\uff1f\u5408\u7ea6\u53cd\u6620\u7684\u60c5\u51b5\u66f4\u63a5\u8fd1\u4e8e122,400 DAI\u548c817 ETH\uff08\u8981\u9a8c\u8bc1\u8fd9\u4e9b\u6570\u5b57\u662f\u5426\u51c6\u786e\uff0c122,400 * 817 = 100,000,000\uff08\u6211\u4eec\u7684\u5e38\u6570\u4e58\u79ef\uff09\uff0c\u5e76\u4e14 122,400 / 817 = 150\uff0c\u8fd9\u662f\u6211\u4eec\u65b0\u7684\u4ef7\u683c\uff09\u3002\u63d0\u53d6\u6211\u4eec\u6709\u6743\u83b7\u5f97\u768410%\u5c06\u73b0\u5728\u4ea7\u751f12,240 DAI\u548c81.7 ETH\u3002\u8fd9\u91cc\u7684\u603b\u5e02\u503c\u662f$24,500\u3002\u5927\u7ea6\u9519\u8fc7\u4e86$500\u7684\u5229\u6da6\uff0c\u8fd9\u662f\u5e02\u573a\u505a\u5e02\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u663e\u7136\u6ca1\u6709\u4eba\u51fa\u4e8e\u6148\u5584\u76ee\u7684\u63d0\u4f9b\u6d41\u52a8\u6027\uff0c\u800c\u6536\u5165\u5e76\u4e0d\u53d6\u51b3\u4e8e\u80fd\u591f\u4ece\u597d\u4ea4\u6613\u4e2d\u5feb\u901f\u83b7\u5229\u7684\u80fd\u529b\uff08\u8fd9\u91cc\u6ca1\u6709\u6240\u8c13\u7684\u201c\u7ffb\u8f6c\u201d\uff09\u3002\u76f8\u53cd\uff0c\u6240\u6709\u4ea4\u6613\u91cf\u76840.3%\u6309\u6bd4\u4f8b\u5206\u914d\u7ed9\u6240\u6709\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e9b\u8d39\u7528\u88ab\u91cd\u65b0\u6295\u5165\u6d41\u52a8\u6027\u6c60\u4e2d\uff0c\u4f46\u968f\u65f6\u53ef\u4ee5\u63d0\u53d6\u3002\u5728\u4e0d\u77e5\u9053\u4e2d\u95f4\u4ea4\u6613\u6570\u91cf\u7684\u60c5\u51b5\u4e0b\uff0c\u5f88\u96be\u77e5\u9053\u8d39\u7528\u6536\u5165\u4e0e\u65b9\u5411\u6027\u53d8\u52a8\u635f\u5931\u4e4b\u95f4\u7684\u6743\u8861\u3002\u4ea4\u6613\u8d8a\u9891\u7e41\u3001\u6765\u56de\u8d8a\u591a\uff0c\u8d8a\u597d\u3002")),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u6211\u7684\u6d41\u52a8\u6027\u4ef7\u503c\u4f4e\u4e8e\u6211\u6295\u5165\u7684"},"\u4e3a\u4ec0\u4e48\u6211\u7684\u6d41\u52a8\u6027\u4ef7\u503c\u4f4e\u4e8e\u6211\u6295\u5165\u7684\uff1f"),(0,a.kt)("p",null,"\u8981\u7406\u89e3\u4e3a\u4ec0\u4e48\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u7684\u80a1\u4efd\u4ef7\u503c\u53ef\u80fd\u4f1a\u4e0b\u964d\uff0c\u5c3d\u7ba1\u6709\u6765\u81ea\u8d39\u7528\u7684\u6536\u5165\uff0c\u6211\u4eec\u9700\u8981\u66f4\u4ed4\u7ec6\u5730\u770b\u770bUniswap\u7528\u6765\u7ba1\u7406\u4ea4\u6613\u7684\u516c\u5f0f\u3002\u8fd9\u4e2a\u516c\u5f0f\u771f\u7684\u975e\u5e38\u7b80\u5355\u3002\u5982\u679c\u6211\u4eec\u5ffd\u7565\u4ea4\u6613\u8d39\u7528\uff0c\u6211\u4eec\u6709\u4ee5\u4e0b\u7b49\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eth_liquidity_pool * token_liquidity_pool = constant_product"))),(0,a.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u4ea4\u6613\u8005\u7528\u4ed6\u4eec\u7684ETH\u6362\u53d6\u4ee3\u5e01\u7684\u6570\u91cf\u4ee5\u53ca\u53cd\u4e4b\u4ea6\u7136\uff0c\u662f\u8fd9\u6837\u8ba1\u7b97\u7684\uff1a\u4ea4\u6613\u540e\uff0c\u4e24\u4e2a\u6d41\u52a8\u6027\u6c60\u7684\u4e58\u79ef\u4e0e\u4ea4\u6613\u524d\u76f8\u540c\u3002\u8fd9\u4e2a\u516c\u5f0f\u7684\u540e\u679c\u662f\uff0c\u5bf9\u4e8e\u4e0e\u8d44\u91d1\u6c60\u89c4\u6a21\u76f8\u6bd4\u975e\u5e38\u5c0f\u7684\u4ea4\u6613\u4ef7\u503c\uff0c\u6211\u4eec\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eth_price = token_liquidity_pool / eth_liquidity_pool"))),(0,a.kt)("p",null,"\u7ed3\u5408\u8fd9\u4e24\u4e2a\u65b9\u7a0b\uff0c\u6211\u4eec\u53ef\u4ee5\u7b97\u51fa\u5728\u4efb\u4f55\u7ed9\u5b9a\u4ef7\u683c\u4e0b\u6bcf\u4e2a\u6d41\u52a8\u6027\u6c60\u7684\u5927\u5c0f\uff0c\u5047\u8bbe\u603b\u6d41\u52a8\u6027\u4e0d\u53d8\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eth_liquidity_pool = sqrt(constant_product / eth_price)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"token_liquidity_pool = sqrt(constant_product * eth_price)"))),(0,a.kt)("p",null,"\u6240\u4ee5\u8ba9\u6211\u4eec\u770b\u770b\u4ef7\u683c\u53d8\u52a8\u5bf9\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u7684\u5f71\u54cd\u3002\u4e3a\u4e86\u7b80\u5316\u95ee\u9898\uff0c\u5047\u8bbe\u6211\u4eec\u7684\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u5411Uniswap DAI\u4ea4\u6613\u6240\u63d0\u4f9b\u4e861 ETH\u548c100 DAI\uff0c\u8fd9\u4f7f\u4ed6\u4eec\u62e5\u6709\u5305\u542b100 ETH\u548c10,000 DAI\u7684\u8d44\u91d1\u6c60\u76841%\u3002\u8fd9\u610f\u5473\u77401 ETH = 100 DAI\u7684\u4ef7\u683c\u3002\u4ecd\u7136\u5ffd\u7565\u8d39\u7528\uff0c\u5047\u8bbe\u7ecf\u8fc7\u4e00\u4e9b\u4ea4\u6613\u540e\uff0c\u4ef7\u683c\u53d1\u751f\u4e86\u53d8\u5316\uff1b1 ETH\u73b0\u5728\u503c120 DAI\u3002\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u7684\u80a1\u4efd\u65b0\u4ef7\u503c\u662f\u591a\u5c11\uff1f\u5c06\u6570\u5b57\u4ee3\u5165\u4e0a\u8ff0\u516c\u5f0f\uff0c\u6211\u4eec\u5f97\u5230\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eth_liquidity_pool = 91.2871")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dai_liquidity_pool = 10954.4511"))),(0,a.kt)("p",null,"\u201c\u7531\u4e8e\u6211\u4eec\u7684\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u6301\u67091%\u7684\u6d41\u52a8\u6027\u4ee3\u5e01\uff0c\u8fd9\u610f\u5473\u7740\u4ed6\u4eec\u73b0\u5728\u53ef\u4ee5\u4ece\u6d41\u52a8\u6027\u6c60\u4e2d\u7533\u98860.9129 ETH\u548c109.54 DAI\u3002\u4f46\u662f\u7531\u4e8eDAI\u5927\u7ea6\u7b49\u540c\u4e8e\u7f8e\u5143\uff0c\u6211\u4eec\u53ef\u80fd\u66f4\u503e\u5411\u4e8e\u5c06\u6574\u4e2a\u91d1\u989d\u8f6c\u6362\u4e3aDAI\uff0c\u4ee5\u7406\u89e3\u4ef7\u683c\u53d8\u52a8\u7684\u6574\u4f53\u5f71\u54cd\u3002\u5728\u5f53\u524d\u4ef7\u683c\u4e0b\uff0c\u6211\u4eec\u7684\u6d41\u52a8\u6027\u603b\u4ef7\u503c\u4e3a219.09 DAI\u3002\u5982\u679c\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u53ea\u662f\u4fdd\u7559\u4e86\u4ed6\u4eec\u6700\u521d\u76841 ETH\u548c100 DAI\uff0c\u4f1a\u600e\u6837\u5462\uff1f\u597d\u5427\uff0c\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u770b\u5230\uff0c\u5728\u65b0\u4ef7\u683c\u4e0b\uff0c\u603b\u4ef7\u503c\u5c06\u662f220 DAI\u3002\u56e0\u6b64\uff0c\u901a\u8fc7\u5411Uniswap\u63d0\u4f9b\u6d41\u52a8\u6027\u800c\u4e0d\u662f\u4ec5\u4ec5\u6301\u6709\u521d\u59cb\u7684ETH\u548cDAI\uff0c\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u635f\u5931\u4e860.91 DAI\u3002\u201d"),(0,a.kt)("p",null,"\u201c\u5f53\u7136\uff0c\u5982\u679c\u4ef7\u683c\u56de\u5230\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\u6dfb\u52a0\u6d41\u52a8\u6027\u65f6\u7684\u76f8\u540c\u503c\uff0c\u8fd9\u79cd\u635f\u5931\u5c31\u4f1a\u6d88\u5931\u3002",(0,a.kt)("strong",{parentName:"p"},"\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u79f0\u5176\u4e3a"),"\u65e0\u5e38\u635f\u5931",(0,a.kt)("strong",{parentName:"p"},"\u3002"),"\u4f7f\u7528\u4e0a\u9762\u7684\u65b9\u7a0b\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u63a8\u5bfc\u51fa\u4e00\u4e2a\u516c\u5f0f\uff0c\u4ee5\u4f9b\u6db2\u6027\u63d0\u4f9b\u65f6\u548c\u73b0\u5728\u7684\u4ef7\u683c\u6bd4\u7387\u6765\u8868\u793a\u65e0\u5e38\u635f\u5931\u7684\u5927\u5c0f\u3002\u6211\u4eec\u5f97\u5230\u4ee5\u4e0b\u7ed3\u679c\uff1a\u201d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"',(0,a.kt)("inlineCode",{parentName:"p"},"impermanent_loss = 2 * sqrt(price_ratio) / (1+price_ratio) \u2014 1"),'"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u201c\u6211\u4eec\u53ef\u4ee5\u5c06\u5176\u7ed8\u5236\u51fa\u6765\uff0c\u4ee5\u5927\u81f4\u4e86\u89e3\u4e0d\u540c\u4ef7\u683c\u6bd4\u7387\u4e0b\u7684\u65e0\u5e38\u635f\u5931\u89c4\u6a21\uff1a\u201d\n",(0,a.kt)("img",{parentName:"p",src:"https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fdnazarov%2FOscQ_nmzbA.png?alt=media&token=4dff866e-a740-4121-9da4-9c9105baa404",alt:null}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u201c\u6216\u8005\u6362\u53e5\u8bdd\u8bf4\uff1a\u201d"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u201c1.25\u500d\u7684\u4ef7\u683c\u53d8\u52a8\u76f8\u5bf9\u4e8eHODL\u9020\u62100.6%\u7684\u635f\u5931\u201d"),(0,a.kt)("li",{parentName:"ul"},"\u201c1.50\u500d\u7684\u4ef7\u683c\u53d8\u52a8\u76f8\u5bf9\u4e8eHODL\u9020\u62102.0%\u7684\u635f\u5931\u201d"),(0,a.kt)("li",{parentName:"ul"},"\u201c1.75\u500d\u7684\u4ef7\u683c\u53d8\u52a8\u76f8\u5bf9\u4e8eHODL\u9020\u62103.8%\u7684\u635f\u5931\u201d"),(0,a.kt)("li",{parentName:"ul"},"\u201c2\u500d\u7684\u4ef7\u683c\u53d8\u52a8\u76f8\u5bf9\u4e8eHODL\u9020\u62105.7%\u7684\u635f\u5931\u201d"),(0,a.kt)("li",{parentName:"ul"},"\u201c3\u500d\u7684\u4ef7\u683c\u53d8\u52a8\u76f8\u5bf9\u4e8eHODL\u9020\u621013.4%\u7684\u635f\u5931\u201d"),(0,a.kt)("li",{parentName:"ul"},"\u201c4\u500d\u7684\u4ef7\u683c\u53d8\u52a8\u76f8\u5bf9\u4e8eHODL\u9020\u621020.0%\u7684\u635f\u5931\u201d"),(0,a.kt)("li",{parentName:"ul"},"\u201c5\u500d\u7684\u4ef7\u683c\u53d8\u52a8\u76f8\u5bf9\u4e8eHODL\u9020\u621025.5%\u7684\u635f\u5931\u201d"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u201c\u6ce8\uff1a\u65e0\u8bba\u4ef7\u683c\u53d8\u52a8\u7684\u65b9\u5411\u5982\u4f55\uff0c\u635f\u5931\u90fd\u662f\u4e00\u6837\u7684\uff08\u5373\u4ef7\u683c\u7ffb\u500d\u4e0e\u4ef7\u683c\u51cf\u534a\u5bfc\u81f4\u76f8\u540c\u7684\u635f\u5931\uff09\u3002\u201d --\x3e")))))}u.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);