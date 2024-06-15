"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[571],{57521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(83117),i=(n(67294),n(3905));const a={id:"iframe-integration",title:"Iframe Integration"},o=void 0,s={unversionedId:"contracts/v1/guides/iframe-integration",id:"contracts/v1/guides/iframe-integration",title:"Iframe Integration",description:"Uniswap can be used within other sites as an iframe. An iframe shows an exact version of the app.uniswap.org site and can have custom prefilled settings.",source:"@site/docs/contracts/v1/guides/05-iframe-integration.md",sourceDirName:"contracts/v1/guides",slug:"/contracts/v1/guides/iframe-integration",permalink:"/uniswap-docs/en/contracts/v1/guides/iframe-integration",editUrl:"https://github.com/uniswap/uniswap-docs/tree/main/docs/contracts/v1/guides/05-iframe-integration.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"iframe-integration",title:"Iframe Integration"},sidebar:"contractsSidebar",previous:{title:"Custom Linking",permalink:"/uniswap-docs/en/contracts/v1/guides/custom-linking"},next:{title:"Token Listing",permalink:"/uniswap-docs/en/contracts/v1/guides/token-listing"}},u={},p=[],c={toc:p};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Uniswap can be used within other sites as an iframe. An iframe shows an exact version of the app.uniswap.org site and can have custom prefilled settings."),(0,i.kt)("h1",{id:"why-you-may-want-this"},"Why You May Want This"),(0,i.kt)("p",null,"Integrating the Uniswap site directly into your web application can be useful for a variety of reasons."),(0,i.kt)("p",null,"v1.app.uniswap.org allows users to buy, sell, send, or provide liquidity for ERC20 tokens. An iframe integration may be useful if your application provides services around these ERC20 tokens. ","(","For example, users can buy DAI through a Uniswap iframe on your site, then allow users to lend that DAI on your site",")","."),(0,i.kt)("p",null,"It can also be useful if your application requires users to acquire some token in order to use some service ","(",'For example, allow users to buy "REP" token so they can engage in prediction markets on the Augur Dapp',")","."),(0,i.kt)("h1",{id:"iframe-vs-custom-ui"},"iframe vs. custom UI"),(0,i.kt)("p",null,"One benefit of an iframe integration is that the your site will automatically keep up with any improvements/additions to the v1.app.uniswap.org site. After the initital integration is setup no further work is needed to pull in updates as the exchange site is updated over time."),(0,i.kt)("h1",{id:"live-example"},"Live Example"),(0,i.kt)("p",null,"An example of an Iframe integration can be found on the FOAM site ",(0,i.kt)("a",{parentName:"p",href:"https://map.foam.space/#/at/?lng=-74.0045300&lat=40.6771800&zoom=5.00"},"https://map.foam.space/")),(0,i.kt)("p",null,'To see the Iframe click the dropdown in the top right and click "get foam".'),(0,i.kt)("h1",{id:"add-to-your-site"},"Add To Your Site"),(0,i.kt)("p",null,"To include a Uniswap iframe within your site just add an iframe element within your website code and link to the Uniswap exchange."),(0,i.kt)("p",null,"Linking to a ETH ","<","-",">",' DAI swap page would look something like this. To link to a token of your choice replace the address after "outputCurrency" with the token address of the token you want to link to.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'<iframe\n  src="https://app.uniswap.org/#/swap?use=v1?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"\n  height="660px"\n  width="100%"\n  style="\n    border: 0;\n    margin: 0 auto;\n    display: block;\n    border-radius: 10px;\n    max-width: 600px;\n    min-width: 300px;\n  "\n  id="myId"\n/>\n')),(0,i.kt)("p",null,"You can customize the selected page, selected custom tokens and more using URL query parameters. See ",(0,i.kt)("a",{parentName:"p",href:"custom-linking"},"Custom Linking"),"."))}l.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);