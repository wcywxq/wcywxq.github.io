import{d as x,y as v,D as n,ap as _,aq as g,b0 as l,b as c,c as w,ai as s,w as C,E as t,f as i,n as p,ak as S,e as A,aO as I,ab as B}from"./D9eAJoqd.js";import{r as D}from"./CWjrp0Z1.js";import"./BneCoJRQ.js";const E=A("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),$=x({inheritAttrs:!1,__name:"Callout",props:{icon:{type:String,default:void 0},color:{type:String,default:"primary"},to:{type:String,default:void 0},target:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(o){const m=v(),b=n(()=>({wrapper:"block pl-4 pr-6 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm/6 my-5 last:mb-0 font-normal group relative prose-code:bg-white dark:prose-code:bg-gray-900",to:"hover:border-[--color-light] dark:hover:border-[--color-dark] hover:text-[--color-light] dark:hover:text-[--color-dark] border-dashed hover:border-solid hover:text-gray-800 dark:hover:text-gray-200",icon:{base:"w-4 h-4 mr-2 inline-flex items-center align-sub text-[--color-light] dark:text-[--color-dark]"},externalIcon:{name:m.ui.icons.external,base:"w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"}})),r=o,{ui:a,attrs:y}=_("content.callout",g(r,"ui"),b,g(r,"class"),!0),h=n(()=>{var e;return r.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((e=l[r.color])==null?void 0:e["500"])||l[r.color]||r.color}),k=n(()=>{var e;return r.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((e=l[r.color])==null?void 0:e["400"])||l[r.color]||r.color}),d=n(()=>r.target||(r.to&&r.to.startsWith("http")?"_blank":void 0));return(e,L)=>{const f=I,u=B;return c(),w("div",S({class:[t(a).wrapper,o.to&&t(a).to]},t(y),{style:{"--color-light":t(h),"--color-dark":t(k)}}),[o.to?(c(),s(f,{key:0,to:o.to,target:t(d),class:"focus:outline-none",tabindex:"-1"},{default:C(()=>[E]),_:1},8,["to","target"])):i("",!0),o.icon?(c(),s(u,{key:1,name:o.icon,class:p(t(a).icon.base)},null,8,["name","class"])):i("",!0),o.to&&t(d)==="_blank"?(c(),s(u,{key:2,name:t(a).externalIcon.name,class:p(t(a).externalIcon.base)},null,8,["name","class"])):i("",!0),D(e.$slots,"default",{unwrap:"p"})],16)}}});export{$ as default};
