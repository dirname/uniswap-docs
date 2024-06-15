"use strict";(self.webpackChunk_uniswap_docs=self.webpackChunk_uniswap_docs||[]).push([[6103],{36828:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(67294),n=a(86010),r=a(92729),i=a(88746);const s="sidebar_a9qW",o="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD";var u=a(11614);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(s,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:m},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}function h(e){const{sidebar:t,toc:a,children:i,...s}=e,o=t&&t.items.length>0;return l.createElement(r.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},50528:(e,t,a)=>{a.d(t,{Z:()=>P});var l=a(67294),n=a(86010),r=a(3905),i=a(11614),s=a(88746),o=a(51402),m=a(8656),c=a(79861),d=a(89818),g=a(7267);const u="blogPostTitle_rzP5",p="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j";var b=a(45642);const v="image_o0gy";function E(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function _(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:i,email:s}=t,o=r||s&&`mailto:${s}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(E,{href:o},l.createElement("img",{className:v,src:i,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(E,{href:o,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}const N="authorCol_FlmR",f="imageOnlyAuthorRow_trpF",Z="imageOnlyAuthorCol_S2np";function k(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",r?f:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!r&&"col col--6",r?Z:N),key:t},l.createElement(_,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function P(e){const t=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.C)(),{children:v,frontMatter:E,assets:_,metadata:N,truncated:f,isBlogPostPage:Z=!1}=e,{date:P,formattedDate:L,permalink:C,tags:T,readingTime:w,title:y,editUrl:I,authors:x}=N,A=_.image??E.image,M=!Z&&f,R=T.length>0,H=Z?"h1":"h2";return l.createElement("article",{className:Z?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(H,{className:u,itemProp:"headline"},Z?y:l.createElement(s.Z,{itemProp:"url",to:C},y)),l.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},l.createElement("time",{dateTime:P,itemProp:"datePublished"},L),void 0!==w&&l.createElement(l.Fragment,null," \xb7 ",t(w))),l.createElement(k,{authors:x,assets:_})),A&&l.createElement("meta",{itemProp:"image",content:a(A,{absolute:!0})}),l.createElement("div",{id:Z?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:d.Z},v)),(R||f)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[h]:Z})},R&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":M})},l.createElement(b.Z,{tags:T})),Z&&I&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.Z,{editUrl:I})),M&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":R})},l.createElement(s.Z,{to:N.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:y})},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},85982:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(67294),n=a(37027),r=a(36828),i=a(50528),s=a(83117),o=a(11614),m=a(61428);function c(e){const{nextItem:t,prevItem:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.Z,(0,s.Z)({},a,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.Z,(0,s.Z)({},t,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var d=a(8656),g=a(73010);function u(e){const{content:t,sidebar:a}=e,{assets:s,metadata:o}=t,{title:m,description:u,nextItem:p,prevItem:h,date:b,tags:v,authors:E,frontMatter:_}=o,{hide_table_of_contents:N,keywords:f,toc_min_heading_level:Z,toc_max_heading_level:k}=_,P=s.image??_.image;return l.createElement(r.Z,{wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage,sidebar:a,toc:!N&&t.toc&&t.toc.length>0?l.createElement(g.Z,{toc:t.toc,minHeadingLevel:Z,maxHeadingLevel:k}):void 0},l.createElement(n.Z,{title:m,description:u,keywords:f,image:P},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:b}),E.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:E.map((e=>e.url)).filter(Boolean).join(",")}),v.length>0&&l.createElement("meta",{property:"article:tag",content:v.map((e=>e.label)).join(",")})),l.createElement(i.Z,{frontMatter:_,assets:s,metadata:o,isBlogPostPage:!0},l.createElement(t,null)),(p||h)&&l.createElement(c,{nextItem:p,prevItem:h}))}},7267:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(67294),n=a(11614),r=a(83117),i=a(86010);const s="iconEdit_dcUD";function o(e){let{className:t,...a}=e;return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var m=a(8656);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},l.createElement(o,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},61428:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(67294),n=a(88746);function r(e){const{permalink:t,title:a,subLabel:r}=e;return l.createElement(n.Z,{className:"pagination-nav__link",to:t},r&&l.createElement("div",{className:"pagination-nav__sublabel"},r),l.createElement("div",{className:"pagination-nav__label"},a))}},73010:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(83117),n=a(67294),r=a(86010),i=a(14569);const s="tableOfContents_cNA8";function o(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},n.createElement(i.Z,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},14569:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(83117),n=a(67294),r=a(8656);function i(e){let{toc:t,className:a,linkClassName:l,isChild:r}=e;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function s(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:c,...d}=e;const g=(0,r.LU)(),u=m??g.tableOfContents.minHeadingLevel,p=c??g.tableOfContents.maxHeadingLevel,h=(0,r.b9)({toc:t,minHeadingLevel:u,maxHeadingLevel:p}),b=(0,n.useMemo)((()=>{if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:u,maxHeadingLevel:p}}),[s,o,u,p]);return(0,r.Si)(b),n.createElement(i,(0,l.Z)({toc:h,className:a,linkClassName:s},d))}},45642:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(67294),n=a(86010),r=a(11614),i=a(88746);const s="tag_hD8n",o="tagRegular_D6E_",m="tagWithCount_i0QQ";function c(e){const{permalink:t,name:a,count:r}=e;return l.createElement(i.Z,{href:t,className:(0,n.Z)(s,{[o]:!r,[m]:r})},a,r&&l.createElement("span",null,r))}const d="tags_XVD_",g="tag_JSN8";function u(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(d,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:g},l.createElement(c,{name:t,permalink:a}))}))))}}}]);