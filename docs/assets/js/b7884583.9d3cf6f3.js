"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[9285],{59778:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(83117),a=(n(67294),n(3905));const r={id:"introduction",title:"\u5f15\u8a00"},p=void 0,o={unversionedId:"sdk/v3/guides/advanced/introduction",id:"sdk/v3/guides/advanced/introduction",title:"\u5f15\u8a00",description:"\u5bf9\u4e8e\u67d0\u4e9b\u66f4\u9ad8\u7ea7\u7684\u4f7f\u7528\u573a\u666f\uff0c\u9700\u8981\u4f7f\u7528 Uniswap \u5de5\u5177\u94fe\u4e2d\u7684\u591a\u4e2a\u5de5\u5177\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/sdk/v3/guides/advanced/01-introduction.md",sourceDirName:"sdk/v3/guides/advanced",slug:"/sdk/v3/guides/advanced/introduction",permalink:"/uniswap-docs/sdk/v3/guides/advanced/introduction",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/sdk/v3/guides/advanced/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"\u5f15\u8a00"},sidebar:"sdkSidebar",previous:{title:"\u4ea4\u6362\u4e0e\u6dfb\u52a0\u6d41\u52a8\u6027",permalink:"/uniswap-docs/sdk/v3/guides/liquidity/swap-and-add"},next:{title:"\u83b7\u53d6\u6c60\u6570\u636e",permalink:"/uniswap-docs/sdk/v3/guides/advanced/pool-data"}},s={},c=[{value:"\u7406\u8bba\u80cc\u666f",id:"\u7406\u8bba\u80cc\u666f",level:2},{value:"Solidity \u4e2d\u7684\u6570\u636e\u7c7b\u578b",id:"solidity-\u4e2d\u7684\u6570\u636e\u7c7b\u578b",level:3},{value:"Uniswap \u7684\u5386\u53f2",id:"uniswap-\u7684\u5386\u53f2",level:2}],d={toc:c};function l(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5bf9\u4e8e\u67d0\u4e9b\u66f4\u9ad8\u7ea7\u7684\u4f7f\u7528\u573a\u666f\uff0c\u9700\u8981\u4f7f\u7528 Uniswap \u5de5\u5177\u94fe\u4e2d\u7684\u591a\u4e2a\u5de5\u5177\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u9700\u8981\u4e86\u89e3 SDK \u7684\u7b80\u4ecb\uff0c\u5e76\u60f3\u4e86\u89e3\u66f4\u591a\u8fd9\u4e9b\u6307\u5357\u5982\u4f55\u4e0e\u793a\u4f8b\u4ed3\u5e93\u76f8\u8fde\u7684\u4fe1\u606f\uff0c\u8bf7\u8bbf\u95ee\u6211\u4eec\u7684",(0,a.kt)("a",{parentName:"p",href:"/uniswap-docs/sdk/v3/guides/background"},"\u80cc\u666f"),"\u9875\u9762\uff01"))),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"ethersJS")," \u548c\u5728 The Graph \u6258\u7ba1\u670d\u52a1\u4e0a\u8fd0\u884c\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Uniswap V3 \u5b50\u56fe"),"\u3002\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Uniswap \u7684\u5b50\u56fe\uff0c\u8bf7\u8bbf\u95ee",(0,a.kt)("a",{parentName:"p",href:"/uniswap-docs/api/subgraph/overview"},"API"),"\u90e8\u5206\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u6df1\u5165\u63a2\u8ba8 Uniswap V3 \u534f\u8bae\uff0c\u5e76\u901a\u8fc7\u5b9e\u7528\u793a\u4f8b\u7406\u89e3\u7531 Uniswap \u667a\u80fd\u5408\u7ea6\u5b58\u50a8\u7684\u6570\u636e\u3002\n\u6211\u4eec\u5c06\u63a2\u7d22\u5982\u4f55\u8ba1\u7b97\u7279\u5b9a\u4ef7\u683c\u8303\u56f4\u5185\u7684\u53ef\u7528\u6d41\u52a8\u6027\uff0c\u53ef\u89c6\u5316",(0,a.kt)("strong",{parentName:"p"},"\u6d41\u52a8\u6027\u5bc6\u5ea6"),"\u5728\u6c60\u4e2d\uff0c\u4f7f\u7528 Uniswap \u4f5c\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u4ef7\u683c\u9884\u8a00\u673a"),"\u4ee5\u53ca\u901a\u8fc7\u521b\u5efa",(0,a.kt)("strong",{parentName:"p"},"\u9650\u4ef7\u8ba2\u5355"),"\u8fdb\u884c\u4ea4\u6613\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u6307\u5357\u6bd4\u4e4b\u524d\u7684\u957f\u4e00\u4e9b\uff0c\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u7406\u8bba\u80cc\u666f\u3002"),(0,a.kt)("h2",{id:"\u7406\u8bba\u80cc\u666f"},"\u7406\u8bba\u80cc\u666f"),(0,a.kt)("p",null,"\u8fd9\u91cc\u5c55\u793a\u7684\u4e00\u4e9b\u6307\u5357\u9700\u8981\u4e00\u5b9a\u7684\u7406\u8bba\u548c\u6570\u5b66\u80cc\u666f\u3002\n\u4e3a\u4e86\u5145\u5206\u5229\u7528\u9ad8\u7ea7\u6307\u5357\uff0c\u6211\u4eec\u9f13\u52b1\u4f60\u9000\u4e00\u6b65\uff0c\u9605\u8bfb\u4e00\u4e9b\u5173\u4e8e Uniswap \u534f\u8bae\u80cc\u540e\u7684\u6570\u5b66\u548c\u7406\u8bba\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e Uniswap \u534f\u8bae\u6700\u5168\u9762\u7684\u4fe1\u606f\u6765\u6e90\u662f",(0,a.kt)("a",{parentName:"p",href:"https://uniswapv3book.com/"},"Uniswap V3 \u4e66\u7c4d"),"\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u6587\u6863\u7684",(0,a.kt)("a",{parentName:"p",href:"/uniswap-docs/concepts/uniswap-protocol"},"\u6982\u5ff5"),"\u90e8\u5206\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://uniswap.org/whitepaper-v3.pdf"},"Uniswap V3 \u767d\u76ae\u4e66"),"\u662f\u4e86\u89e3\u8be5\u534f\u8bae\u7684\u4e00\u4e2a\u5f88\u597d\u7684\u5165\u95e8\u8d44\u6599\u3002\n\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u67e5\u9605\u8fc7\uff0c\u5b83\u53ef\u80fd\u6bd4\u4f60\u9884\u671f\u7684\u66f4\u7b80\u6d01\u3001\u66f4\u5bb9\u6613\u7406\u89e3\u3002"),(0,a.kt)("h3",{id:"solidity-\u4e2d\u7684\u6570\u636e\u7c7b\u578b"},"Solidity \u4e2d\u7684\u6570\u636e\u7c7b\u578b"),(0,a.kt)("p",null,"Uniswap V3 \u6c60\u5229\u7528 Solidity \u63d0\u4f9b\u7684\u591a\u79cd\u6570\u636e\u7c7b\u578b\u6765\u9ad8\u6548\u5730\u5b58\u50a8\u5b83\u4eec\u7684\u72b6\u6001\u3002\n\u5982\u679c\u4f60\u5bf9 Solidity \u6570\u636e\u7c7b\u578b\u8fd8\u4e0d\u719f\u6089\uff0c\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.7/types.html#"},"Solidity \u8bed\u8a00\u53c2\u8003"),"\u3002\n\u5bf9\u4e8e\u63a5\u4e0b\u6765\u7684\u6307\u5357\uff0c\u67e5\u770b\u5176\u4e2d\u7684\u4e24\u79cd\u7c7b\u578b\u5c06\u662f\u6709\u76ca\u7684\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u9762\u6982\u8ff0\u5b83\u4eec\u3002"),(0,a.kt)("p",null,"Ticks \u88ab\u5b58\u50a8\u4e3a\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-core/blob/main/contracts/UniswapV3Pool.sol#L93"},"mapping(int24 => Tick.Info)"),"\u3002\nSolidity ",(0,a.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.7/types.html#mapping-types"},"\u6620\u5c04"),"\u975e\u5e38\u7c7b\u4f3c\u4e8e\u54c8\u5e0c\u6620\u5c04\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7\u4e00\u6b21\u8bfb\u53d6\u64cd\u4f5c\u7528\u5176\u952e\u8bbf\u95ee\u4efb\u4f55\u503c\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"Tick.Info")," ","[(https://github.com/Uniswap/v3-core/blob/main/contracts/libraries/Tick.sol#L17)]","\u5b58\u50a8\u4e86\u6211\u4eec\u5904\u7406\u6c60\u65f6\u9700\u8981\u7684 Tick \u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Info {\n        // \u5f15\u7528\u6b64 Tick \u7684\u603b\u4f4d\u7f6e\u6d41\u52a8\u6027\n        uint128 liquidityGross;\n        // \u5f53\u4ece\u5de6\u5230\u53f3\uff08\u6216\u4ece\u53f3\u5230\u5de6\uff09\u8de8\u8d8a Tick \u65f6\uff0c\u6dfb\u52a0\uff08\u51cf\u53bb\uff09\u7684\u51c0\u6d41\u52a8\u6027\uff0c\n        int128 liquidityNet;\n        // \u5728\u8fd9\u4e2a Tick \u7684\u53e6\u4e00\u4fa7\uff08\u76f8\u5bf9\u4e8e\u5f53\u524d Tick\uff09\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u7684\u8d39\u7528\u589e\u957f\n        // \u53ea\u6709\u76f8\u5bf9\u610f\u4e49\uff0c\u6ca1\u6709\u7edd\u5bf9\u610f\u4e49\u2014\u2014\u8be5\u503c\u53d6\u51b3\u4e8e Tick \u521d\u59cb\u5316\u7684\u65f6\u95f4\n        uint256 feeGrowthOutside0X128;\n        uint256 feeGrowthOutside1X128;\n        // Tick \u53e6\u4e00\u4fa7\u7684\u7d2f\u79ef Tick \u503c\n        int56 tickCumulativeOutside;\n        // \u5728\u8fd9\u4e2a Tick \u7684\u53e6\u4e00\u4fa7\uff08\u76f8\u5bf9\u4e8e\u5f53\u524d Tick\uff09\u6bcf\u5355\u4f4d\u6d41\u52a8\u6027\u7684\u79d2\u6570\n        // \u53ea\u6709\u76f8\u5bf9\u610f\u4e49\uff0c\u6ca1\u6709\u7edd\u5bf9\u610f\u4e49\u2014\u2014\u8be5\u503c\u53d6\u51b3\u4e8e Tick \u521d\u59cb\u5316\u7684\u65f6\u95f4\n        uint160 secondsPerLiquidityOutsideX128;\n        // \u5728 Tick \u7684\u53e6\u4e00\u4fa7\u82b1\u8d39\u7684\u79d2\u6570\uff08\u76f8\u5bf9\u4e8e\u5f53\u524d Tick\uff09\n        // \u53ea\u6709\u76f8\u5bf9\u610f\u4e49\uff0c\u6ca1\u6709\u7edd\u5bf9\u610f\u4e49\u2014\u2014\u8be5\u503c\u53d6\u51b3\u4e8e Tick \u521d\u59cb\u5316\u7684\u65f6\u95f4\n        uint32 secondsOutside;\n        // \u5982\u679c Tick \u5df2\u521d\u59cb\u5316\uff0c\u5219\u4e3a\u771f\uff0c\u5373\u8be5\u503c\u4e0e liquidityGross != 0 \u8868\u8fbe\u5f0f\u5b8c\u5168\u7b49\u4ef7\n        // \u8fd9\u4e9b 8 \u4f4d\u88ab\u8bbe\u7f6e\u4ee5\u9632\u6b62\u5728\u8de8\u8d8a\u65b0\u521d\u59cb\u5316\u7684 Tick \u65f6\u51fa\u73b0\u65b0\u7684 sstores\n        bool initialized;\n    }\n")),(0,a.kt)("p",null,"\u5728\u63a5\u4e0b\u6765\u7684\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u8fd9\u4e9b\u503c\u4e2d\u7684\u5927\u90e8\u5206\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5176",(0,a.kt)("inlineCode",{parentName:"p"},"int24"),"\u952e\u8bbf\u95ee\u5b58\u50a8\u5728\u6c60\u4e2d\u7684\u4efb\u4f55",(0,a.kt)("inlineCode",{parentName:"p"},"Tick.Info"),"\u503c\u3002\nTick \u7684\u952e\u901a\u5e38\u88ab\u79f0\u4e3a\u5b83\u7684 ",(0,a.kt)("em",{parentName:"p"},"\u7d22\u5f15"),"\u3002\n\u6620\u5c04\u662f\u4e0d\u53ef\u8fed\u4ee3\u7684\uff0c\u56e0\u6b64\u5982\u679c\u6211\u4eec\u8bd5\u56fe\u83b7\u53d6\u5b58\u50a8\u5728\u6c60\u4e2d\u7684\u6240\u6709 Ticks\uff0c\u6211\u4eec\u4e0d\u80fd\u7b80\u5355\u5730\u904d\u5386\u6620\u5c04\u3002\n\u76f8\u53cd\uff0c\u6211\u4eec\u5fc5\u987b\u77e5\u9053\u6620\u5c04\u7684\u952e\uff08\u7d22\u5f15\uff09\uff0c\u6211\u4eec\u5c06\u5728",(0,a.kt)("a",{parentName:"p",href:"/uniswap-docs/sdk/v3/guides/advanced/pool-data"},"\u6c60\u6570\u636e\u6307\u5357"),"\u4e2d\u63a2\u7d22\u5982\u4f55\u505a\u5230\u8fd9\u4e00\u70b9\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u7406\u89e3\u7684\u7b2c\u4e8c\u4e2a Solidity \u6570\u636e\u7c7b\u578b\u662f\u666e\u901a\u7684\u65e0\u7b26\u53f7",(0,a.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.7/types.html#integers"},"\u6574\u6570"),"\u3002\nSolidity \u652f\u6301\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"uint8"),"\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"uint256"),"\u7684\u65e0\u7b26\u53f7\u6574\u6570\u5927\u5c0f\uff0c\u5206\u522b\u957f8\u4f4d\u548c256\u4f4d\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u4e00\u4e0b V3 \u6c60\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"tickBitmap"),"\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function tickBitmap(\n      int16 wordPosition\n  ) external view returns (uint256)\n")),(0,a.kt)("p",null,"\u7c7b\u4f3c\u4e8e Tick \u6620\u5c04\uff0ctickBitmap \u662f\u7c7b\u578b",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/v3-core/blob/main/contracts/UniswapV3Pool.sol#L95"},"mapping(int16 => uint256)"),"\u7684\u6620\u5c04\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u770b\u5728",(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640#readContract"},"Etherscan"),"\u4e0a\u7684\u4f4e\u8d39\u7528 WETH/USDC \u6c60\u3002\n\u5982\u679c\u6211\u4eec\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"tickBitmap"),"\u51fd\u6570\u5e76\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u6211\u4eec\u5c06\u5f97\u5230\u4ee5\u4e0b\u54cd\u5e94\uff08\u622a\u81f3\u64b0\u5199\u672c\u6587\u65f6\uff09\uff1a"),(0,a.kt)("img",{src:n(76752).Z,alt:"TickBitmapEtherscan","box-shadow":"none"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"uint256"),"\u8fd4\u56de\u503c\u88ab Etherscan \u89e3\u91ca\u4e3a\u4ee3\u8868\u5341\u8fdb\u5236\u6570\u5b57\u7684\u5f62\u5f0f\u3002\n\u5b9e\u9645\u7684\u539f\u59cb\u8fd4\u56de\u503c\u662f256\u4f4d\uff0c\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-raw"},"0x0000 ... \u5927\u91cf\u96f6\u548c\u4e00 ... 000000110000000000\n")),(0,a.kt)("p",null,"\u6211\u4eec\u4e0d\u628a\u8fd9\u4e2a\u96f6\u548c\u4e00\u7684\u5b57\u7b26\u4e32\u89e3\u91ca\u4e3a\u4ee3\u8868\u4e00\u4e2a\u6570\u5b57\u7684\u5f62\u5f0f\uff0c\u800c\u662f\u5c06\u5176\u89c6\u4e3a256\u4e2a\u5e03\u5c14\u503c\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u503c\u7684\u4f4d\u7f6e\u5904\u7684\u503c\u4e3a1\uff0c\u5219\u8be5\u4f4d\u7f6e\u7684 Tick \u662f",(0,a.kt)("strong",{parentName:"p"},"\u5df2\u521d\u59cb\u5316"),"\u7684\uff0c\u610f\u5473\u7740\u5b83\u6301\u6709\u503c\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u6280\u5de7\uff0cV3 \u6c60\u5141\u8bb8\u6211\u4eec\u7528\u4e00\u4e2a\u8c03\u7528\u83b7\u53d6",(0,a.kt)("strong",{parentName:"p"},"256\u4e2a Tick"),"\u7684\u72b6\u6001\u3002\n\u5728\u63a5\u4e0b\u6765\u7684\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u4ece\u83b7\u53d6\u7684 tickBitmaps \u8ba1\u7b97 Tick \u7d22\u5f15\u3002"),(0,a.kt)("h2",{id:"uniswap-\u7684\u5386\u53f2"},"Uniswap \u7684\u5386\u53f2"),(0,a.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u5730\u7406\u89e3 V3 \u534f\u8bae\uff0c\u4e86\u89e3",(0,a.kt)("strong",{parentName:"p"},"\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240"),"\u7684\u5386\u53f2\u4ee5\u53ca\u81ea2018\u5e74\u6210\u7acb\u4ee5\u6765\u7684 Uniswap \u534f\u8bae\u4e5f\u662f\u6709\u76ca\u7684\u3002\n\u4f60\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://hackmd.io/@HaydenAdams/HJ9jLsfTz?type=view#Swaps-vs-Transfers"},"V1"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"https://uniswap.org/whitepaper.pdf"},"V2"),"\u7684\u767d\u76ae\u4e66\u4e2d\u9605\u8bfb\u66f4\u591a\u5173\u4e8e Uniswap \u7684\u65e7\u7248\u672c\uff0c\u4ee5\u53ca\u5408\u540c\u90e8\u5206\u7684",(0,a.kt)("a",{parentName:"p",href:"/uniswap-docs/contracts/v1/overview"},"V1"),"\u548c",(0,a.kt)("a",{parentName:"p",href:"/uniswap-docs/contracts/v2/overview"},"V2"),"\u90e8\u5206\u3002"))}l.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=i.createContext({}),c=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=c(t.components);return i.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=c(n),k=a,m=u["".concat(s,".").concat(k)]||u[k]||l[k]||r;return n?i.createElement(m,p(p({ref:e},d),{},{components:n})):i.createElement(m,p({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,p=new Array(r);p[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,p[1]=o;for(var c=2;c<r;c++)p[c]=n[c];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76752:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/tickBitmap-etherscan-865c516ba55726c9ef7be35a433d4d9c.png"}}]);