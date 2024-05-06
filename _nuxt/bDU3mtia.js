import{_ as I,a5 as _,a6 as v,d as $,a8 as x,a9 as y,c as l,ax as j,ac as B,S as s,$ as c,a0 as m,U as p,V as i,a1 as f,X as d,a2 as w,aT as L,ap as O,aS as g,u as t,Y as S,W as E,aA as N,K as T}from"./BIcG77xO.js";import{r as V}from"./Bdhyj4YX.js";import"./BneCoJRQ.js";const F={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},W=_(v.ui.strategy,v.ui.card,F),z=$({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:r,attrs:u}=x("card",y(e,"ui"),W),a=l(()=>j(B(r.value.base,r.value.rounded,r.value.divide,r.value.ring,r.value.shadow,r.value.background),e.class));return{ui:r,attrs:u,cardClass:a}}});function J(e,r,u,a,o,b){return s(),c(L(e.$attrs.onSubmit?"form":e.as),w({class:e.cardClass},e.attrs),{default:m(()=>[e.$slots.header?(s(),p("div",{key:0,class:i([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[f(e.$slots,"header")],2)):d("",!0),e.$slots.default?(s(),p("div",{key:1,class:i([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[f(e.$slots,"default")],2)):d("",!0),e.$slots.footer?(s(),p("div",{key:2,class:i([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[f(e.$slots,"footer")],2)):d("",!0)]),_:3},16,["class"])}const K=I(z,[["render",J]]),M=S("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),q=$({inheritAttrs:!1,__name:"Card",props:{icon:{type:String,default:void 0},color:{type:String,default:"primary"},to:{type:String,default:void 0},target:{type:String,default:void 0},title:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r=O(),u=l(()=>({wrapper:"relative group overflow-hidden flex items-center rounded-lg",to:"hover:ring-1 hover:ring-[--color-light] dark:hover:ring-[--color-dark] hover:bg-gray-100/50 dark:hover:bg-gray-800/50",icon:{base:"w-6 h-6 mb-4 inline-flex items-center text-[--color-light] dark:text-[--color-dark] pointer-events-none"},body:{base:"flex-1"},externalIcon:{name:r.ui.icons.external,base:"w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"},title:"text-gray-900 dark:text-white font-semibold text-base my-0",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0"})),a=e,{ui:o,attrs:b}=x("content.card",y(a,"ui"),u,y(a,"class"),!0),C=l(()=>{var n;return a.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((n=g[a.color])==null?void 0:n["500"])||g[a.color]||a.color}),A=l(()=>{var n;return a.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((n=g[a.color])==null?void 0:n["400"])||g[a.color]||a.color}),h=l(()=>a.target||(a.to&&a.to.startsWith("http")?"_blank":void 0));return(n,P)=>{const U=N,k=T,D=K;return s(),c(D,w({class:[t(o).wrapper,e.to&&t(o).to]},t(b),{ui:t(o),style:{"--color-light":t(C),"--color-dark":t(A)}}),{default:m(()=>[e.to?(s(),c(U,{key:0,to:e.to,target:t(h),class:"focus:outline-none",tabindex:"-1"},{default:m(()=>[M]),_:1},8,["to","target"])):d("",!0),e.icon?(s(),c(k,{key:1,name:e.icon,class:i(t(o).icon.base)},null,8,["name","class"])):d("",!0),e.to&&t(h)==="_blank"?(s(),c(k,{key:2,name:t(o).externalIcon.name,class:i(t(o).externalIcon.base)},null,8,["name","class"])):d("",!0),S("p",{class:i(t(o).title)},E(e.title),3),n.$slots.default?(s(),p("p",{key:3,class:i(t(o).description)},[V(n.$slots,"default",{unwrap:"p"})],2)):d("",!0)]),_:3},16,["class","ui","style"])}}});export{q as default};