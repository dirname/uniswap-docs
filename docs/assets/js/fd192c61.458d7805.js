"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[7556],{13616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=t(83117),r=(t(67294),t(3905));const i={id:"using-the-api",title:"\u4f7f\u7528 API"},o=void 0,p={unversionedId:"contracts/v2/guides/interface-integration/using-the-api",id:"contracts/v2/guides/interface-integration/using-the-api",title:"\u4f7f\u7528 API",description:"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a Web \u754c\u9762\uff0c\u7528\u4e8e\u6d88\u8d39\u548c\u663e\u793a\u6765\u81ea Uniswap \u5b50\u56fe\u7684\u6570\u636e\u3002\u76ee\u6807\u662f\u63d0\u4f9b\u4e00\u4e2a\u5feb\u901f\u6982\u89c8\uff0c\u60a8\u53ef\u4ee5\u5728\u6b64\u57fa\u7840\u4e0a\u6269\u5c55\u4ee5\u521b\u5efa\u81ea\u5df1\u7684 UI \u548c\u56f4\u7ed5 Uniswap \u6570\u636e\u7684\u5206\u6790\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contracts/v2/guides/interface-integration/01-using-the-api.md",sourceDirName:"contracts/v2/guides/interface-integration",slug:"/contracts/v2/guides/interface-integration/using-the-api",permalink:"/uniswap-docs/contracts/v2/guides/interface-integration/using-the-api",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v2/guides/interface-integration/01-using-the-api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"using-the-api",title:"\u4f7f\u7528 API"},sidebar:"contractsSidebar",previous:{title:"\u7814\u7a76",permalink:"/uniswap-docs/contracts/v2/concepts/advanced-topics/research"},next:{title:"\u81ea\u5b9a\u4e49\u94fe\u63a5",permalink:"/uniswap-docs/contracts/v2/guides/interface-integration/custom-interface-linking"}},l={},c=[{value:"\u8bbe\u7f6e\u4e0e\u5b89\u88c5",id:"\u8bbe\u7f6e\u4e0e\u5b89\u88c5",level:3},{value:"GraphQL \u5ba2\u6237\u7aef",id:"graphql-\u5ba2\u6237\u7aef",level:3},{value:"\u7f16\u5199\u67e5\u8be2",id:"\u7f16\u5199\u67e5\u8be2",level:3},{value:"\u83b7\u53d6\u6570\u636e",id:"\u83b7\u53d6\u6570\u636e",level:3},{value:"\u683c\u5f0f\u5316\u54cd\u5e94",id:"\u683c\u5f0f\u5316\u54cd\u5e94",level:3},{value:"\u5728 UI \u4e2d\u663e\u793a",id:"\u5728-ui-\u4e2d\u663e\u793a",level:3},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:3},{value:"\u56de\u987e",id:"\u56de\u987e",level:3}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e00\u4e2a Web \u754c\u9762\uff0c\u7528\u4e8e\u6d88\u8d39\u548c\u663e\u793a\u6765\u81ea Uniswap \u5b50\u56fe\u7684\u6570\u636e\u3002\u76ee\u6807\u662f\u63d0\u4f9b\u4e00\u4e2a\u5feb\u901f\u6982\u89c8\uff0c\u60a8\u53ef\u4ee5\u5728\u6b64\u57fa\u7840\u4e0a\u6269\u5c55\u4ee5\u521b\u5efa\u81ea\u5df1\u7684 UI \u548c\u56f4\u7ed5 Uniswap \u6570\u636e\u7684\u5206\u6790\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u8bb8\u591a\u4e0d\u540c\u7684\u5e93\u6765\u521b\u5efa\u754c\u9762\u5e76\u8fde\u63a5\u5230\u5b50\u56fe\u7684 graphql \u7aef\u70b9\uff0c\u4f46\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," \u4f5c\u4e3a\u754c\u9762\uff0c\u5e76\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/"},"Apollo Client")," \u6765\u53d1\u9001\u67e5\u8be2\u3002\u6211\u4eec\u8fd8\u5c06\u4f7f\u7528 yarn \u8fdb\u884c\u4f9d\u8d56\u9879\u7ba1\u7406\u3002"),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u4e0e\u5b89\u88c5"},"\u8bbe\u7f6e\u4e0e\u5b89\u88c5"),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u4e3a\u5e94\u7528\u7a0b\u5e8f\u521b\u5efa\u57fa\u672c\u6846\u67b6\u3002\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/create-a-new-react-app.html"},"create-react-app")," \u6765\u5b8c\u6210\u6b64\u64cd\u4f5c\u3002\u6211\u4eec\u8fd8\u9700\u8981\u6dfb\u52a0\u6240\u9700\u7684\u4f9d\u8d56\u9879\u3002\u5728\u547d\u4ee4\u884c\u4e2d\u5bfc\u822a\u5230\u60a8\u7684\u6839\u4f4d\u7f6e\u5e76\u8fd0\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"yarn create react-app uniswap-demo\ncd uniswap-demo\nyarn add  apollo-client apollo-cache-inmemory apollo-link-http graphql graphql-tag @apollo/react-hooks\nyarn start\n")),(0,r.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u60a8\u5e94\u8be5\u770b\u5230\u9ed8\u8ba4\u7684 React \u5e94\u7528\u7a0b\u5e8f\u6b63\u5728\u8fd0\u884c\u3002\u5728\u6587\u672c\u7f16\u8f91\u5668\u4e2d\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," \u5e76\u5c06\u5185\u5bb9\u66ff\u6362\u4e3a\u8fd9\u4e2a\u7cbe\u7b80\u7684\u6837\u677f\u4ee3\u7801\u3002\u6211\u4eec\u5c06\u9010\u6b65\u6dfb\u52a0\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport './App.css'\n\nfunction App() {\n  return <div></div>\n}\n\nexport default App\n")),(0,r.kt)("h3",{id:"graphql-\u5ba2\u6237\u7aef"},"GraphQL \u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u4e00\u4e9b\u4e2d\u95f4\u4ef6\u4ee5\u4fbf\u5411 Uniswap \u5b50\u56fe\u53d1\u51fa\u8bf7\u6c42\u5e76\u63a5\u6536\u6570\u636e\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 Apollo \u5e76\u521b\u5efa\u4e00\u4e2a graphql \u5ba2\u6237\u7aef\u6765\u5904\u7406\u6b64\u64cd\u4f5c\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e0b\u9762\u6240\u793a\u7684\u5bfc\u5165\uff0c\u5e76\u5b9e\u4f8b\u5316\u4e00\u4e2a\u65b0\u7684\u5ba2\u6237\u7aef\u3002\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u5728\u8fd9\u91cc\u4f7f\u7528\u4e86\u6307\u5411 Uniswap \u5b50\u56fe\u7684\u94fe\u63a5\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport './App.css'\nimport { ApolloClient } from 'apollo-client'\nimport { InMemoryCache } from 'apollo-cache-inmemory'\nimport { HttpLink } from 'apollo-link-http'\n\nexport const client = new ApolloClient({\n  link: new HttpLink({\n    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',\n  }),\n  cache: new InMemoryCache(),\n})\n\nfunction App() {\n  return <div></div>\n}\n\nexport default App\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6211\u4eec\u8fd8\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a\u4e0a\u4e0b\u6587\uff0c\u4ee5\u4fbf Apollo \u53ef\u4ee5\u6b63\u786e\u5904\u7406\u8bf7\u6c42\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js")," \u6587\u4ef6\u4e2d\uff0c\u5bfc\u5165\u9002\u5f53\u7684\u63d0\u4f9b\u8005\u5e76\u50cf\u8fd9\u6837\u5c06\u5176\u5305\u88f9\u5728\u6839\u76ee\u5f55\u4e2d\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport App from './App'\nimport registerServiceWorker from './registerServiceWorker'\nimport './index.css'\nimport { ApolloProvider } from 'react-apollo'\nimport { client } from './App'\n\nReactDOM.render(\n  <ApolloProvider client={client}>\n    <App />\n  </ApolloProvider>,\n  document.getElementById('root')\n)\nregisterServiceWorker()\n")),(0,r.kt)("h3",{id:"\u7f16\u5199\u67e5\u8be2"},"\u7f16\u5199\u67e5\u8be2"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u6784\u5efa\u67e5\u8be2\u5e76\u83b7\u53d6\u6570\u636e\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u83b7\u53d6\u6709\u5173 Uniswap V2 \u4e0a Dai \u4ee3\u5e01\u7684\u4e00\u4e9b\u6570\u636e\u3002\u6211\u4eec\u5c06\u83b7\u53d6\u5f53\u524d\u4ef7\u683c\u548c\u6240\u6709\u5bf9\u4e2d\u7684\u603b\u6d41\u52a8\u6027\u3002\u6211\u4eec\u5c06\u4f7f\u7528 Dai \u5730\u5740\u4f5c\u4e3a\u6b64\u67e5\u8be2\u4e2d\u7684 ID\u3002\u6211\u4eec\u8fd8\u5c06\u83b7\u53d6 ETH \u7684\u7f8e\u5143\u4ef7\u683c\uff0c\u4ee5\u5e2e\u52a9\u4e3a Dai \u6570\u636e\u521b\u5efa\u7f8e\u5143\u8f6c\u6362\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u67e5\u8be2\u672c\u8eab\u3002\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"gql")," \u5c06\u67e5\u8be2\u5b57\u7b26\u4e32\u89e3\u6790\u4e3a GraphQL AST \u6807\u51c6\u3002\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"gql")," \u8f85\u52a9\u5de5\u5177\u5bfc\u5165\u5230\u5e94\u7528\u4e2d\uff0c\u5e76\u4f7f\u7528\u5b83\u6765\u521b\u5efa\u67e5\u8be2\u3002\u5c06\u4ee5\u4e0b\u5185\u5bb9\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"App.js")," \u6587\u4ef6\u4e2d\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import gql from 'graphql-tag'\n\nconst DAI_QUERY = gql`\n  query tokens($tokenAddress: Bytes!) {\n    tokens(where: { id: $tokenAddress }) {\n      derivedETH\n      totalLiquidity\n    }\n  }\n`\n\nconst ETH_PRICE_QUERY = gql`\n  query ethPrice {\n    bundle(id: \"1\") {\n      ethPrice\n    }\n  }\n`\n")),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," \u4f5c\u4e3a bundle \u7684 id\uff0c\u56e0\u4e3a\u5b50\u56fe\u4e2d\u53ea\u6709\u4e00\u4e2a\u786c\u7f16\u7801\u7684 bundle\u3002"),(0,r.kt)("h3",{id:"\u83b7\u53d6\u6570\u636e"},"\u83b7\u53d6\u6570\u636e"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u51c6\u5907\u4f7f\u7528\u8fd9\u4e9b\u67e5\u8be2\u4ece Uniswap V2 \u5b50\u56fe\u83b7\u53d6\u6570\u636e\u3002\u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," \u94a9\u5b50\uff0c\u5b83\u4f7f\u7528\u6211\u4eec\u7684\u5ba2\u6237\u7aef\u5b9e\u4f8b\u83b7\u53d6\u6570\u636e\uff0c\u5e76\u7ed9\u6211\u4eec\u5173\u4e8e\u8bf7\u6c42\u72b6\u6001\u7684\u5b9e\u65f6\u4fe1\u606f\u3002\u4e3a\u6b64\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useQuery } from '@apollo/react-hooks'\n\nconst { loading, error, data: ethPriceData } = useQuery(ETH_PRICE_QUERY)\nconst {\n  loading: daiLoading,\n  error: daiError,\n  data: daiData,\n} = useQuery(DAI_QUERY, {\n  variables: {\n    tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',\n  },\n})\n")),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u6b63\u5728\u4f7f\u7528 Dai \u4ee3\u5e01\u5730\u5740\u6765\u83b7\u53d6\u6709\u5173 Dai \u7684\u6570\u636e\u3002"),(0,r.kt)("h3",{id:"\u683c\u5f0f\u5316\u54cd\u5e94"},"\u683c\u5f0f\u5316\u54cd\u5e94"),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6709\u4e86\u6570\u636e\uff0c\u6211\u4eec\u53ef\u4ee5\u683c\u5f0f\u5316\u5b83\u5e76\u5728 UI \u4e2d\u663e\u793a\u3002\u9996\u5148\uff0c\u6211\u4eec\u89e3\u6790\u8fd4\u56de\u6570\u636e\u4ee5\u83b7\u53d6\u6211\u4eec\u5b9e\u9645\u60f3\u8981\u7684\u6570\u636e\u3002\u7136\u540e\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u5b83\u6765\u83b7\u53d6 Dai \u7684\u7f8e\u5143\u4ef7\u683c\u3002\u6700\u540e\uff0c\u6211\u4eec\u5c06\u628a\u8fd9\u4e9b\u6570\u636e\u63d2\u5165\u5230 UI \u672c\u8eab\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u67e5\u8be2\u5c06\u4e3a\u6bcf\u4e2a\u67e5\u8be2\u8fd4\u56de\u4e00\u4e2a\u54cd\u5e94\u5bf9\u8c61\u3002\u5728\u6bcf\u4e00\u4e2a\u4e2d\uff0c\u6211\u4eec\u5bf9\u5728\u67e5\u8be2\u5b9a\u4e49\u4e2d\u5b9a\u4e49\u7684\u6839\u5b57\u6bb5\u611f\u5174\u8da3\u3002\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"daiData")," \u54cd\u5e94\uff0c\u6211\u4eec\u5c06\u5176\u5b9a\u4e49\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"tokens"),"\uff0c\u800c\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"ethPriceData")," \u67e5\u8be2\uff0c\u6211\u4eec\u5c06\u5176\u5b9a\u4e49\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ethPrice"),"\u3002\u5728\u6bcf\u4e00\u4e2a\u4e2d\uff0c\u6211\u4eec\u5c06\u5f97\u5230\u4e00\u4e2a\u7ed3\u679c\u6570\u7ec4\u3002\u56e0\u4e3a\u6211\u4eec\u53ea\u67e5\u8be2\u5355\u4e2a\u5b9e\u4f53\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u5f15\u7528\u6570\u636e\u6570\u7ec4\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," \u7d22\u5f15\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u884c\u6765\u89e3\u6790\u54cd\u5e94\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const daiPriceInEth = daiData && daiData.tokens[0].derivedETH\nconst daiTotalLiquidity = daiData && daiData.tokens[0].totalLiquidity\nconst ethPriceInUSD = ethPriceData && ethPriceData.bundles[0].ethPrice\n")),(0,r.kt)("h3",{id:"\u5728-ui-\u4e2d\u663e\u793a"},"\u5728 UI \u4e2d\u663e\u793a"),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u89e3\u6790\u540e\u7684\u54cd\u5e94\u6570\u636e\u586b\u5145 UI\u3002\u6211\u4eec\u5c06\u5206\u4e24\u6b65\u8fdb\u884c\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u52a0\u8f7d\u72b6\u6001\u3002\u8981\u68c0\u6d4b\u67e5\u8be2\u662f\u5426\u4ecd\u5728\u7b49\u5f85\u54cd\u5e94\uff0c\u6211\u4eec\u53ef\u4ee5\u5f15\u7528\u5df2\u7ecf\u5b9a\u4e49\u7684\u52a0\u8f7d\u53d8\u91cf\u3002\u6211\u4eec\u5c06\u6dfb\u52a0\u4e24\u4e2a\u52a0\u8f7d\u72b6\u6001\uff0c\u4e00\u4e2a\u7528\u4e8e Dai \u4ef7\u683c\uff0c\u53e6\u4e00\u4e2a\u7528\u4e8e Dai \u603b\u6d41\u52a8\u6027\u3002\u8fd9\u4e9b\u53ef\u80fd\u4f1a\u5feb\u901f\u95ea\u70c1\uff0c\u56e0\u4e3a\u67e5\u8be2\u65f6\u95f4\u5f88\u5feb\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u52a0\u8f7d\u6570\u636e\u586b\u5145\u3002\u4e00\u65e6\u68c0\u6d4b\u5230\u67e5\u8be2\u5df2\u505c\u6b62\u52a0\u8f7d\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u771f\u5b9e\u6570\u636e\u586b\u5145 UI\u3002"))),(0,r.kt)("p",null,"\u4e3a\u6b64\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," \u6587\u4ef6\u7684\u8fd4\u56de\u51fd\u6570\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"return (\n  <div>\n    <div>\n      Dai \u4ef7\u683c\uff1a{' '}\n      {ethLoading || daiLoading\n        ? '\u6b63\u5728\u52a0\u8f7d\u4ee3\u5e01\u6570\u636e...'\n        : '$' +\n          // \u5c06\u54cd\u5e94\u89e3\u6790\u4e3a\u6d6e\u70b9\u6570\u5e76\u56fa\u5b9a\u4e3a\u4e24\u4f4d\u5c0f\u6570\n          (parseFloat(daiPriceInEth) * parseFloat(ethPriceInUSD)).toFixed(2)}\n    </div>\n    <div>\n      Dai \u603b\u6d41\u52a8\u6027\uff1a{' '}\n      {daiLoading\n        ? '\u6b63\u5728\u52a0\u8f7d\u4ee3\u5e01\u6570\u636e...'\n        : // \u663e\u793a\u5206\u5e03\u5728\u6240\u6709\u6c60\u4e2d\u7684 DAI \u603b\u91cf\n          parseFloat(daiTotalLiquidity).toFixed(0)}\n    </div>\n  </div>\n)\n")),(0,r.kt)("h3",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,r.kt)("p",null,"\u8fd9\u5e94\u8be5\u6e32\u67d3\u4e00\u4e2a\u975e\u5e38\u57fa\u7840\u7684\u9875\u9762\uff0c\u5176\u4e2d\u5305\u542b\u5173\u4e8e Uniswap \u5185\u90e8 Dai \u4ee3\u5e01\u7684\u8fd9\u4e24\u4e2a\u7edf\u8ba1\u6570\u636e\u3002\u8fd9\u662f\u4f7f\u7528 Uniswap \u5b50\u56fe\u53ef\u4ee5\u505a\u7684\u4e00\u4e2a\u975e\u5e38\u57fa\u7840\u7684\u4f8b\u5b50\uff0c\u6211\u4eec\u9f13\u52b1\u60a8\u6784\u5efa\u66f4\u590d\u6742\u548c\u6709\u8da3\u7684\u5de5\u5177\uff01"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u8bbf\u95ee\u6211\u4eec\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://uniswap.info/"},"\u5206\u6790\u7ad9\u70b9")," \u67e5\u770b\u4e00\u4e2a\u66f4\u9ad8\u7ea7\u7684\u5206\u6790\u9875\u9762\uff0c\u6216\u8005\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/uniswap-info"},"GitHub")," \u67e5\u770b\u4f7f\u7528 Uniswap \u5b50\u56fe\u521b\u5efa UI \u7684\u66f4\u591a\u8be6\u7ec6\u793a\u4f8b\u3002"),(0,r.kt)("h3",{id:"\u56de\u987e"},"\u56de\u987e"),(0,r.kt)("p",null,"\u6700\u7ec8\uff0c\u60a8\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," \u6587\u4ef6\u5e94\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { useEffect } from 'react'\nimport './App.css'\nimport { ApolloClient } from 'apollo-client'\nimport { InMemoryCache } from 'apollo-cache-inmemory'\nimport { HttpLink } from 'apollo-link-http'\nimport { useQuery } from '@apollo/react-hooks'\nimport gql from 'graphql-tag'\n\nexport const client = new ApolloClient({\n  link: new HttpLink({\n    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',\n  }),\n  fetchOptions: {\n    mode: 'no-cors',\n  },\n  cache: new InMemoryCache(),\n})\n\nconst DAI_QUERY = gql`\n  query tokens($tokenAddress: Bytes!) {\n    tokens(where: { id: $tokenAddress }) {\n      derivedETH\n      totalLiquidity\n    }\n  }\n`\n\nconst ETH_PRICE_QUERY = gql`\n  query bundles {\n    bundles(where: { id: \"1\" }) {\n      ethPrice\n    }\n  }\n`\n\nfunction App() {\n  const { loading: ethLoading, data: ethPriceData } = useQuery(ETH_PRICE_QUERY)\n  const { loading: daiLoading, data: daiData } = useQuery(DAI_QUERY, {\n    variables: {\n      tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',\n    },\n  })\n\n  const daiPriceInEth = daiData && daiData.tokens[0].derivedETH\n  const daiTotalLiquidity = daiData && daiData.tokens[0].totalLiquidity\n  const ethPriceInUSD = ethPriceData && ethPriceData.bundles[0].ethPrice\n\n  return (\n    <div>\n      <div>\n        Dai \u4ef7\u683c\uff1a{' '}\n        {ethLoading || daiLoading\n          ? '\u6b63\u5728\u52a0\u8f7d\u4ee3\u5e01\u6570\u636e...'\n          : '$' +\n            // \u5c06\u54cd\u5e94\u89e3\u6790\u4e3a\u6d6e\u70b9\u6570\u5e76\u56fa\u5b9a\u4e3a\u4e24\u4f4d\u5c0f\u6570\n            (parseFloat(daiPriceInEth) * parseFloat(ethPriceInUSD)).toFixed(2)}\n      </div>\n      <div>\n        Dai \u603b\u6d41\u52a8\u6027\uff1a{' '}\n        {daiLoading\n          ? '\u6b63\u5728\u52a0\u8f7d\u4ee3\u5e01\u6570\u636e...'\n          : // \u663e\u793a\u5206\u5e03\u5728\u6240\u6709\u6c60\u4e2d\u7684 DAI \u603b\u91cf\n            parseFloat(daiTotalLiquidity).toFixed(0)}\n      </div>\n    </div>\n  )\n}\n\nexport default App\n")))}d.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);