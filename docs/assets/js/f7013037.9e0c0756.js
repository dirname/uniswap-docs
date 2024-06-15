"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[9934],{86404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(83117),a=(t(67294),t(3905));const i={id:"queries",title:"\u67e5\u8be2"},l=void 0,o={unversionedId:"contracts/v2/reference/API/queries",id:"contracts/v2/reference/API/queries",title:"\u67e5\u8be2",description:"\u53ef\u4ee5\u4f7f\u7528\u5b50\u56fe\u6765\u67e5\u8be2\u6709\u5173 Uniswap\u3001\u4ea4\u6613\u5bf9\u3001\u4ee3\u5e01\u3001\u4ea4\u6613\u3001\u7528\u6237\u7b49\u7684\u91cd\u8981\u4fe1\u606f\u3002\u672c\u9875\u9762\u5c06\u63d0\u4f9b\u5e38\u89c1\u67e5\u8be2\u7684\u793a\u4f8b\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v2/reference/API/03-queries.md",sourceDirName:"contracts/v2/reference/API",slug:"/contracts/v2/reference/API/queries",permalink:"/uniswap-docs/contracts/v2/reference/API/queries",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v2/reference/API/03-queries.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"queries",title:"\u67e5\u8be2"},sidebar:"contractsSidebar",previous:{title:"\u5b9e\u4f53",permalink:"/uniswap-docs/contracts/v2/reference/API/entities"},next:{title:"\u6cbb\u7406\u53c2\u8003",permalink:"/uniswap-docs/contracts/v2/reference/Governance/governance-reference"}},p={},s=[{value:"\u5168\u5c40\u6570\u636e",id:"\u5168\u5c40\u6570\u636e",level:3},{value:"\u5168\u5c40\u7edf\u8ba1",id:"\u5168\u5c40\u7edf\u8ba1",level:4},{value:"\u5168\u5c40\u5386\u53f2\u67e5\u627e",id:"\u5168\u5c40\u5386\u53f2\u67e5\u627e",level:4},{value:"\u4ea4\u6613\u5bf9\u6570\u636e",id:"\u4ea4\u6613\u5bf9\u6570\u636e",level:3},{value:"\u4ea4\u6613\u5bf9\u6982\u89c8",id:"\u4ea4\u6613\u5bf9\u6982\u89c8",level:4},{value:"Uniswap \u4e2d\u7684\u6240\u6709\u4ea4\u6613\u5bf9",id:"uniswap-\u4e2d\u7684\u6240\u6709\u4ea4\u6613\u5bf9",level:4},{value:"\u6d41\u52a8\u6027\u6700\u5f3a\u7684\u4ea4\u6613\u5bf9",id:"\u6d41\u52a8\u6027\u6700\u5f3a\u7684\u4ea4\u6613\u5bf9",level:4},{value:"\u4ea4\u6613\u5bf9\u5185\u7684\u6700\u8fd1\u4ea4\u6362",id:"\u4ea4\u6613\u5bf9\u5185\u7684\u6700\u8fd1\u4ea4\u6362",level:4},{value:"\u6bcf\u65e5\u4ea4\u6613\u5bf9\u6c47\u603b",id:"\u6bcf\u65e5\u4ea4\u6613\u5bf9\u6c47\u603b",level:4},{value:"\u4ee3\u5e01\u6570\u636e",id:"\u4ee3\u5e01\u6570\u636e",level:3},{value:"\u4ee3\u5e01\u6982\u89c8",id:"\u4ee3\u5e01\u6982\u89c8",level:4},{value:"Uniswap \u4e2d\u7684\u6240\u6709\u4ee3\u5e01",id:"uniswap-\u4e2d\u7684\u6240\u6709\u4ee3\u5e01",level:4},{value:"\u4ee3\u5e01\u4ea4\u6613",id:"\u4ee3\u5e01\u4ea4\u6613",level:4},{value:"\u4ee3\u5e01\u6bcf\u65e5\u6c47\u603b",id:"\u4ee3\u5e01\u6bcf\u65e5\u6c47\u603b",level:4},{value:"ETH \u4ef7\u683c",id:"eth-\u4ef7\u683c",level:3}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u5b50\u56fe\u6765\u67e5\u8be2\u6709\u5173 Uniswap\u3001\u4ea4\u6613\u5bf9\u3001\u4ee3\u5e01\u3001\u4ea4\u6613\u3001\u7528\u6237\u7b49\u7684\u91cd\u8981\u4fe1\u606f\u3002\u672c\u9875\u9762\u5c06\u63d0\u4f9b\u5e38\u89c1\u67e5\u8be2\u7684\u793a\u4f8b\u3002"),(0,a.kt)("p",null,"\u8981\u5c1d\u8bd5\u8fd9\u4e9b\u67e5\u8be2\u5e76\u8fd0\u884c\u60a8\u81ea\u5df1\u7684\u67e5\u8be2\uff0c\u8bf7\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2"},"\u5b50\u56fe\u6c99\u7bb1"),"\u3002"),(0,a.kt)("h3",{id:"\u5168\u5c40\u6570\u636e"},"\u5168\u5c40\u6570\u636e"),(0,a.kt)("p",null,"\u4e3a\u4e86\u67e5\u8be2\u5168\u5c40\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u4f20\u5165 Uniswap \u5de5\u5382\u5730\u5740\uff0c\u5e76\u4ece\u53ef\u7528\u5b57\u6bb5\u4e2d\u9009\u62e9\u3002"),(0,a.kt)("h4",{id:"\u5168\u5c40\u7edf\u8ba1"},"\u5168\u5c40\u7edf\u8ba1"),(0,a.kt)("p",null,"\u6240\u6709\u65f6\u95f4\u5185\u7684\u7f8e\u5143\u8ba1\u4ef7\u4ea4\u6613\u91cf\u3001\u603b\u6d41\u52a8\u6027\uff08\u4ee5\u7f8e\u5143\u8ba1\uff09\u3001\u6240\u6709\u65f6\u95f4\u5185\u7684\u4ea4\u6613\u6570\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n uniswapFactory(id: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"){\n   totalVolumeUSD\n   totalLiquidityUSD\n   txCount\n }\n}\n')),(0,a.kt)("h4",{id:"\u5168\u5c40\u5386\u53f2\u67e5\u627e"},"\u5168\u5c40\u5386\u53f2\u67e5\u627e"),(0,a.kt)("p",null,"\u4e3a\u4e86\u83b7\u53d6\u8fc7\u53bb\u72b6\u6001\u7684\u5feb\u7167\uff0c\u4f7f\u7528 The Graph \u7684\u533a\u5757\u67e5\u8be2\u529f\u80fd\uff0c\u5e76\u5728\u4e4b\u524d\u7684\u533a\u5757\u8fdb\u884c\u67e5\u8be2\u3002\u53c2\u9605\u6b64\u5e16\u5b50\u4ee5\u83b7\u53d6\u66f4\u591a\u5173\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://blocklytics.org/blog/ethereum-blocks-subgraph-made-for-time-travel/"},"\u4ece\u65f6\u95f4\u6233\u83b7\u53d6\u533a\u5757\u7f16\u53f7")," \u7684\u4fe1\u606f\u3002\u8fd9\u53ef\u4ee5\u7528\u6765\u8ba1\u7b97\u50cf24\u5c0f\u65f6\u4ea4\u6613\u91cf\u8fd9\u6837\u7684\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n uniswapFactory(id: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", block: {number: 10291203}){\n   totalVolumeUSD\n   totalLiquidityUSD\n   txCount\n }\n}\n')),(0,a.kt)("h3",{id:"\u4ea4\u6613\u5bf9\u6570\u636e"},"\u4ea4\u6613\u5bf9\u6570\u636e"),(0,a.kt)("h4",{id:"\u4ea4\u6613\u5bf9\u6982\u89c8"},"\u4ea4\u6613\u5bf9\u6982\u89c8"),(0,a.kt)("p",null,"\u4f7f\u7528\u5e38\u7528\u503c\u83b7\u53d6\u5f53\u524d\u4ea4\u6613\u5bf9\u72b6\u6001\u7684\u5feb\u7167\u3002\u6b64\u793a\u4f8b\u83b7\u53d6 DAI/WETH \u4ea4\u6613\u5bf9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n pair(id: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"){\n     token0 {\n       id\n       symbol\n       name\n       derivedETH\n     }\n     token1 {\n       id\n       symbol\n       name\n       derivedETH\n     }\n     reserve0\n     reserve1\n     reserveUSD\n     trackedReserveETH\n     token0Price\n     token1Price\n     volumeUSD\n     txCount\n }\n}\n')),(0,a.kt)("h4",{id:"uniswap-\u4e2d\u7684\u6240\u6709\u4ea4\u6613\u5bf9"},"Uniswap \u4e2d\u7684\u6240\u6709\u4ea4\u6613\u5bf9"),(0,a.kt)("p",null,"\u76ee\u524d\uff0cThe Graph \u5c06\u6bcf\u4e2a\u67e5\u8be2\u7684\u5b9e\u4f53\u8fd4\u56de\u6570\u91cf\u9650\u5236\u4e3a1000\u3002\u4e3a\u4e86\u83b7\u53d6 Uniswap \u4e0a\u7684\u6240\u6709\u4ea4\u6613\u5bf9\uff0c\u4f7f\u7528\u5faa\u73af\u548c graphql \u8df3\u8fc7\u67e5\u8be2\u6765\u5206\u6279\u83b7\u53d61000\u4e2a\u4ea4\u6613\u5bf9\u3002\u67e5\u8be2\u5c06\u5982\u4e0b\u6240\u793a\uff08\u5176\u4e2d skip \u662f\u4f20\u9012\u5230\u67e5\u8be2\u4e2d\u7684\u67d0\u4e2a\u9012\u589e\u53d8\u91cf\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n query pairs($skip: Int!) {\n   pairs(first: 1000, skip: $skip) {\n     id\n   }\n }\n}\n")),(0,a.kt)("h4",{id:"\u6d41\u52a8\u6027\u6700\u5f3a\u7684\u4ea4\u6613\u5bf9"},"\u6d41\u52a8\u6027\u6700\u5f3a\u7684\u4ea4\u6613\u5bf9"),(0,a.kt)("p",null,"\u6309\u6d41\u52a8\u6027\u6392\u5e8f\u4ee5\u83b7\u53d6 Uniswap \u4e2d\u6d41\u52a8\u6027\u6700\u5f3a\u7684\u4ea4\u6613\u5bf9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n pairs(first: 1000, orderBy: reserveUSD, orderDirection: desc) {\n   id\n }\n}\n")),(0,a.kt)("h4",{id:"\u4ea4\u6613\u5bf9\u5185\u7684\u6700\u8fd1\u4ea4\u6362"},"\u4ea4\u6613\u5bf9\u5185\u7684\u6700\u8fd1\u4ea4\u6362"),(0,a.kt)("p",null,"\u901a\u8fc7\u83b7\u53d6 Swap \u4e8b\u4ef6\u5e76\u4f20\u5165\u4ea4\u6613\u5bf9\u5730\u5740\u6765\u83b7\u53d6\u4ea4\u6613\u5bf9\u4e0a\u6700\u540e100\u6b21\u4ea4\u6362\u3002\u4f60\u901a\u5e38\u8fd8\u4f1a\u60f3\u8981\u4ee3\u5e01\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\nswaps(orderBy: timestamp, orderDirection: desc, where:\n { pair: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11" }\n) {\n     pair {\n       token0 {\n         symbol\n       }\n       token1 {\n         symbol\n       }\n     }\n     amount0In\n     amount0Out\n     amount1In\n     amount1Out\n     amountUSD\n     to\n }\n}\n')),(0,a.kt)("h4",{id:"\u6bcf\u65e5\u4ea4\u6613\u5bf9\u6c47\u603b"},"\u6bcf\u65e5\u4ea4\u6613\u5bf9\u6c47\u603b"),(0,a.kt)("p",null,"\u65e5\u6570\u636e\u5bf9\u4e8e\u6784\u5efa\u56f4\u7ed5\u5b9e\u4f53\u7684\u56fe\u8868\u548c\u5386\u53f2\u89c6\u56fe\u975e\u5e38\u6709\u7528\u3002\u4e3a\u4e86\u83b7\u53d6\u5173\u4e8e\u4ea4\u6613\u5bf9\u7684\u6bcf\u65e5\u7edf\u8ba1\u6570\u636e\uff0c\u6309\u65f6\u95f4\u6233\u8303\u56f4\u67e5\u8be2\u65e5\u5b9e\u4f53\u3002\u6b64\u67e5\u8be2\u83b7\u53d6\u7ed9\u5b9a Unix \u65f6\u95f4\u6233\u540e DAI/WETH \u4ea4\u6613\u5bf9\u7684\u524d100\u5929\u7684\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n pairDayDatas(first: 100, orderBy: date, orderDirection: asc,\n   where: {\n     pairAddress: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",\n     date_gt: 1592505859\n   }\n ) {\n     date\n     dailyVolumeToken0\n     dailyVolumeToken1\n     dailyVolumeUSD\n     reserveUSD\n }\n}\n')),(0,a.kt)("h3",{id:"\u4ee3\u5e01\u6570\u636e"},"\u4ee3\u5e01\u6570\u636e"),(0,a.kt)("p",null,"\u4f7f\u7528\u4ee3\u5e01\u5408\u7ea6\u5730\u5740\u4f5c\u4e3a ID \u6765\u83b7\u53d6\u4ee3\u5e01\u6570\u636e\u3002\u4ee3\u5e01\u6570\u636e\u4f1a\u8de8\u5305\u542b\u8be5\u4ee3\u5e01\u7684\u6240\u6709\u4ea4\u6613\u5bf9\u8fdb\u884c\u805a\u5408\u3002Uniswap \u4e2d\u5305\u542b\u7684\u4efb\u4f55\u4ee3\u5e01\u90fd\u53ef\u4ee5\u88ab\u67e5\u8be2\u3002"),(0,a.kt)("h4",{id:"\u4ee3\u5e01\u6982\u89c8"},"\u4ee3\u5e01\u6982\u89c8"),(0,a.kt)("p",null,"\u83b7\u53d6 Uniswap \u4e2d\u4ee3\u5e01\u7684\u5f53\u524d\u7edf\u8ba1\u4fe1\u606f\u3002\u6b64\u67e5\u8be2\u83b7\u53d6 DAI \u7684\u5f53\u524d\u7edf\u8ba1\u4fe1\u606f\u3002\nallPairs \u5b57\u6bb5\u83b7\u53d6 DAI \u5305\u542b\u7684\u524d200\u4e2a\u4ea4\u6613\u5bf9\uff0c\u6309\u6d3e\u751f USD \u6d41\u52a8\u6027\u6392\u5e8f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n token(id: "0x6b175474e89094c44da98b954eedeac495271d0f"){\n   name\n   symbol\n   decimals\n   derivedETH\n   tradeVolumeUSD\n   totalLiquidity\n }\n}\n')),(0,a.kt)("h4",{id:"uniswap-\u4e2d\u7684\u6240\u6709\u4ee3\u5e01"},"Uniswap \u4e2d\u7684\u6240\u6709\u4ee3\u5e01"),(0,a.kt)("p",null,"\u4e0e\u83b7\u53d6\u6240\u6709\u4ea4\u6613\u5bf9\u7c7b\u4f3c\uff08\u89c1\u4e0a\u6587\uff09\uff0c\u4f60\u53ef\u4ee5\u67e5\u8be2 Uniswap \u4e2d\u7684\u6240\u6709\u4ee3\u5e01\u3002\u56e0\u4e3a The Graph \u670d\u52a1\u5c06\u8fd4\u56de\u5927\u5c0f\u9650\u5236\u4e3a1000\u4e2a\u5b9e\u4f53\uff0c\u6240\u4ee5\u4f7f\u7528 graphql \u8df3\u8fc7\u67e5\u8be2\u3002\uff08\u8bf7\u6ce8\u610f\uff0c\u6b64\u67e5\u8be2\u5728\u56fe\u5f62\u6c99\u7bb1\u4e2d\u4e0d\u4f1a\u8d77\u4f5c\u7528\uff0c\u66f4\u7c7b\u4f3c\u4e8e\u4f20\u9012\u7ed9\u67d0\u4e9b graphql \u4e2d\u95f4\u4ef6\uff08\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/"},"Apollo"),"\uff09\u7684\u67e5\u8be2\u7ed3\u6784\u3002\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n query tokens($skip: Int!) {\n   tokens(first: 1000, skip: $skip) {\n     id\n     name\n     symbol\n   }\n }\n}\n")),(0,a.kt)("h4",{id:"\u4ee3\u5e01\u4ea4\u6613"},"\u4ee3\u5e01\u4ea4\u6613"),(0,a.kt)("p",null,"\u4e3a\u4e86\u83b7\u53d6\u5305\u542b\u4ee3\u5e01\u7684\u4ea4\u6613\uff0c\u60a8\u9700\u8981\u5148\u83b7\u53d6\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u4e2d\u5305\u542b\u4ee3\u5e01\u6240\u5305\u542b\u7684\u4ea4\u6613\u5bf9\uff08\u8fd9\u53ef\u4ee5\u901a\u8fc7 Token \u5b9e\u4f53\u4e0a\u7684 allPairs \u5b57\u6bb5\u5b8c\u6210\u3002\uff09\u4e00\u65e6\u4f60\u6709\u4e86\u5305\u542b\u4ee3\u5e01\u7684\u4ea4\u6613\u5bf9\u6570\u7ec4\uff0c\u5728\u4ea4\u6613\u67e5\u627e\u65f6\u8fc7\u6ee4\u8fd9\u4e2a\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"\u6b64\u67e5\u8be2\u83b7\u53d6\u6d89\u53ca DAI \u7684\u6700\u65b030\u6b21\u94f8\u5e01\u3001\u4ea4\u6362\u548c\u9500\u6bc1\u3002allPairs \u6570\u7ec4\u53ef\u80fd\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff0c\u5176\u4e2d\u6211\u4eec\u5305\u62ec DAI/WETH \u4ea4\u6613\u5bf9\u5730\u5740\u548c DAI/USDC \u4ea4\u6613\u5bf9\u5730\u5740\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'allPairs = [\n "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",\n "0xae461ca67b15dc8dc81ce7615e0320da1a9ab8d5"\n]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"query($allPairs: [String!]) {\n mints(first: 30, where: { pair_in: $allPairs }, orderBy: timestamp, orderDirection: desc) {\n   transaction {\n     id\n     timestamp\n   }\n   to\n   liquidity\n   amount0\n   amount1\n   amountUSD\n }\n burns(first: 30, where: { pair_in: $allPairs }, orderBy: timestamp, orderDirection: desc) {\n   transaction {\n     id\n     timestamp\n   }\n   to\n   liquidity\n   amount0\n   amount1\n   amountUSD\n }\n swaps(first: 30, where: { pair_in: $allPairs }, orderBy: timestamp, orderDirection: desc) {\n   transaction {\n     id\n     timestamp\n   }\n   amount0In\n   amount0Out\n   amount1In\n   amount1Out\n   amountUSD\n   to\n }\n}\n")),(0,a.kt)("h4",{id:"\u4ee3\u5e01\u6bcf\u65e5\u6c47\u603b"},"\u4ee3\u5e01\u6bcf\u65e5\u6c47\u603b"),(0,a.kt)("p",null,"\u4e0e\u4ea4\u6613\u5bf9\u548c\u5168\u5c40\u6bcf\u65e5\u67e5\u627e\u7c7b\u4f3c\uff0c\u4ee3\u5e01\u4e5f\u6709\u53ef\u4ee5\u67e5\u8be2\u7684\u6bcf\u65e5\u5b9e\u4f53\u3002\u6b64\u67e5\u8be2\u83b7\u53d6 DAI \u7684\u6bcf\u65e5\u4fe1\u606f\u3002\u8bf7\u6ce8\u610f\uff0c\u60a8\u53ef\u80fd\u5e0c\u671b\u6309\u5347\u5e8f\u6392\u5e8f\uff0c\u4ee5\u4fbf\u5728\u8fd4\u56de\u6570\u7ec4\u4e2d\u63a5\u6536\u4ece\u6700\u65e7\u5230\u6700\u65b0\u7684\u65e5\u671f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n tokenDayDatas(orderBy: date, orderDirection: asc,\n  where: {\n    token: "0x6b175474e89094c44da98b954eedeac495271d0f"\n  }\n ) {\n    id\n    date\n    priceUSD\n    totalLiquidityToken\n    totalLiquidityUSD\n    totalLiquidityETH\n    dailyVolumeETH\n    dailyVolumeToken\n    dailyVolumeUSD\n }\n}\n')),(0,a.kt)("h3",{id:"eth-\u4ef7\u683c"},"ETH \u4ef7\u683c"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 Bundle \u5b9e\u4f53\u6765\u67e5\u8be2\u57fa\u4e8e\u7a33\u5b9a\u5e01\u52a0\u6743\u5e73\u5747\u7684 Uniswap \u4e2d ETH \u5f53\u524d\u7684\u7f8e\u5143\u4ef7\u683c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n bundle(id: "1" ) {\n   ethPrice\n }\n}\n')))}c.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);