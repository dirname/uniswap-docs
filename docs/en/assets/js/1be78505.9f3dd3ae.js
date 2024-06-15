"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[9514,2004],{22812:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var n=a(67294),l=a(3905),o=a(18790),c=a(92729),r=a(86010),i=a(8656),s=a(90974),d=a(83117);function m(e){return n.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var u=a(11614),p=a(88746),b=a(71699),h=a(34396);const E="menuHtmlItem_fVIQ";var f=a(5730);function g(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(_,(0,d.Z)({item:t},a));case"html":return n.createElement(v,(0,d.Z)({item:t},a));default:return n.createElement(k,(0,d.Z)({item:t},a))}}function _(e){let{item:t,onItemClick:a,activePath:l,level:o,index:c,...s}=e;const{items:m,label:b,collapsible:h,className:E,href:g}=t,_=function(e){const t=(0,f.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),v=(0,i._F)(t,l),k=(0,i.Mg)(g,l),{collapsed:C,setCollapsed:S}=(0,i.uR)({initialState:()=>!!h&&(!v&&t.collapsed)});!function(e){let{isActive:t,collapsed:a,setCollapsed:l}=e;const o=(0,i.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:v,collapsed:C,setCollapsed:S});const{expandedItem:I,setExpandedItem:N}=(0,i.fP)();function T(e){void 0===e&&(e=!C),N(e?null:c),S(e)}const{autoCollapseSidebarCategories:M}=(0,i.LU)();return(0,n.useEffect)((()=>{h&&I&&I!==c&&M&&S(!0)}),[h,I,c,S,M]),n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":C},E)},n.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(p.Z,(0,d.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":h&&!g,"menu__link--active":v}),onClick:h?e=>{null==a||a(t),g?T(!1):(e.preventDefault(),T())}:()=>{null==a||a(t)},"aria-current":k?"page":void 0,href:h?_??"#":_},s),b),g&&h&&n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:b}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),T()}})),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},n.createElement(Z,{items:m,tabIndex:C?-1:0,onItemClick:a,activePath:l,level:o+1})))}function v(e){let{item:t,level:a,index:l}=e;const{value:o,defaultStyle:c,className:s}=t;return n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(a),c&&`${E} menu__list-item`,s),key:l,dangerouslySetInnerHTML:{__html:o}})}function k(e){let{item:t,onItemClick:a,activePath:l,level:o,index:c,...s}=e;const{href:m,label:u,className:E}=t,f=(0,i._F)(t,l);return n.createElement("li",{className:(0,r.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",E),key:u},n.createElement(p.Z,(0,d.Z)({className:(0,r.Z)("menu__link",{"menu__link--active":f}),"aria-current":f?"page":void 0,to:m},(0,b.Z)(m)&&{onClick:a?()=>a(t):void 0},s),(0,b.Z)(m)?u:n.createElement("span",null,u,n.createElement(h.Z,null))))}var C=a(89849),S=a(55625);function I(e){return n.createElement(n.Fragment,null,n.createElement(C.M8,{events:[S.TM.onClick],element:e.item.href,name:S.Gz.MENU_CLICKED,shouldLogImpression:"link"===e.item.type},n.createElement("div",{onClick:e=>{e.stopPropagation()}},n.createElement(g,e))))}function N(e){let{items:t,...a}=e;return n.createElement(i.D_,null,t.map(((e,t)=>n.createElement(I,(0,d.Z)({key:t,item:e,index:t},a)))))}const Z=(0,n.memo)(N),T="sidebar_CW9Y",M="sidebarWithHideableNavbar_FoYL",y="sidebarHidden_D64r",L="sidebarLogo_FJUI",x="menu_SkdO",w="menuWithAnnouncementBar_x19h",A="collapseSidebarButton_cwdi",F="collapseSidebarButtonIcon_xORG";function P(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",A),onClick:t},n.createElement(m,{className:F}))}function B(e){let{path:t,sidebar:a,onCollapse:l,isHidden:o}=e;const c=function(){const{isActive:e}=(0,i.nT)(),[t,a]=(0,n.useState)(e);return(0,i.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}(),{navbar:{hideOnScroll:d},hideableSidebar:m}=(0,i.LU)();return n.createElement("div",{className:(0,r.Z)(T,{[M]:d,[y]:o})},d&&n.createElement(s.Z,{tabIndex:-1,className:L}),n.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",x,{[w]:c})},n.createElement("ul",{className:(0,r.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:a,activePath:t,level:1}))),m&&n.createElement(P,{onClick:l}))}const D=e=>{let{toggleSidebar:t,sidebar:a,path:l}=e;return n.createElement("ul",{className:(0,r.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:a,activePath:l,onItemClick:e=>{"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function H(e){return n.createElement(i.Cv,{component:D,props:e})}const R=n.memo(B),W=n.memo(H);function Y(e){const t=(0,i.iP)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(R,e),l&&n.createElement(W,e))}var z=a(89818),U=a(12004);const q="backToTopButton_RiI4",G="backToTopButtonShow_ssHd";function K(){const e=(0,n.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const a=document.documentElement.scrollTop;a>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*a)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>null==e.current?void 0:e.current()}}function O(){const[e,t]=(0,n.useState)(!1),a=(0,n.useRef)(!1),{smoothScrollTop:l,cancelScrollToTop:o}=K();return(0,i.RF)(((e,n)=>{let{scrollY:l}=e;const c=null==n?void 0:n.scrollY;if(!c)return;if(a.current)return void(a.current=!1);const r=l<c;if(r||o(),l<300)t(!1);else if(r){const e=document.documentElement.scrollHeight;l+window.innerHeight<e&&t(!0)}else t(!1)})),(0,i.SL)((e=>{e.location.hash&&(a.current=!0,t(!1))})),n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.kM.common.backToTopButton,q,{[G]:e}),type:"button",onClick:()=>l()})}var V=a(76775);const X={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"};var J=a(32411);function Q(e){let{currentDocRoute:t,versionMetadata:a,children:o,sidebarName:s}=e;const d=(0,i.Vq)(),{pluginId:p,version:b}=a,[h,E]=(0,n.useState)(!1),[f,g]=(0,n.useState)(!1),_=(0,n.useCallback)((()=>{f&&g(!1),E((e=>!e))}),[f]);return n.createElement(c.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:b,tag:(0,i.os)(p,b)}},n.createElement("div",{className:X.docPage},n.createElement(O,null),d&&n.createElement("aside",{className:(0,r.Z)(i.kM.docs.docSidebarContainer,X.docSidebarContainer,{[X.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(X.docSidebarContainer)&&h&&g(!0)}},n.createElement(Y,{key:s,sidebar:d,path:t.path,onCollapse:_,isHidden:f}),f&&n.createElement("div",{className:X.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},n.createElement(m,{className:X.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,r.Z)(X.docMainContainer,{[X.docMainContainerEnhanced]:h||!d})},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",X.docItemWrapper,{[X.docItemWrapperEnhanced]:h})},n.createElement(l.Zo,{components:z.Z},o)))))}function $(e){const{route:{routes:t},versionMetadata:a,location:l}=e,c=t.find((e=>(0,V.LX)(l.pathname,e)));if(!c)return n.createElement(U.default,null);const r=c.sidebar,s=r?a.docsSidebars[r]:null;return n.createElement(n.Fragment,null,n.createElement(J.Z,null,n.createElement("html",{className:a.className})),n.createElement(i.qu,{version:a},n.createElement(i.bT,{sidebar:s},n.createElement(Q,{currentDocRoute:c,versionMetadata:a,sidebarName:r},(0,o.H)(t,{versionMetadata:a})))))}},12004:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),l=a(92729),o=a(11614);function c(){return n.createElement(l.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);