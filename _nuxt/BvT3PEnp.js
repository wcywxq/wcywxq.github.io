import{_ as C}from"./-Ssogd3B.js";import{d as B,aU as S,a8 as $,a9 as w,r as I,c as b,S as l,U as p,Y as y,F as U,Z as V,u as a,V as m,$ as A,aT as D,a2 as F,ae as G,W as N}from"./BIcG77xO.js";const P=["onClick"],E=B({inheritAttrs:!1,__name:"CodeGroup",props:{class:{type:[String,Object,Array],default:void 0}},setup(g,{expose:v}){const _={wrapper:"relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",header:"flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",tab:{base:"px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",active:"bg-gray-100 dark:bg-gray-800",inactive:"hover:bg-gray-50 dark:hover:bg-gray-800/50",icon:{base:""}}},h=g,d=S(),{ui:t,attrs:k}=$("content.codeGroup",void 0,_,w(h,"class"),!0),n=I(0);v({selectedIndex:n});function u(e,r){var i,c,o,s;return typeof e.type=="symbol"?(i=e.children)==null?void 0:i.map(u):{label:((c=e.props)==null?void 0:c.filename)||((o=e.props)==null?void 0:o.label)||`${r}`,icon:(s=e.props)==null?void 0:s.icon,component:e}}const f=b(()=>{var e,r;return((r=(e=d.default)==null?void 0:e.call(d))==null?void 0:r.flatMap(u).filter(Boolean))||[]}),x=b(()=>f.value.find((e,r)=>r===n.value));return(e,r)=>{var c;const i=C;return l(),p("div",F({class:a(t).wrapper},a(k)),[y("div",{class:m(a(t).header)},[(l(!0),p(U,null,V(a(f),(o,s)=>(l(),p("button",{key:s,tabindex:"-1",class:m([a(t).tab.base,a(n)===s?a(t).tab.active:a(t).tab.inactive]),onClick:T=>n.value=s},[G(i,{icon:o.icon,filename:o.label,class:m(a(t).tab.icon.base)},null,8,["icon","filename","class"]),y("span",null,N(o.label),1)],10,P))),128))],2),(l(),A(D((c=a(x))==null?void 0:c.component),{key:a(n),"hide-header":""}))],16)}}});export{E as default};
