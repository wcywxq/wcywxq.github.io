import{l as I,am as L,an as v,d as $,ap as w,aq as y,D as l,aL as O,at as U,b as s,ai as c,w as b,c as p,n as i,aj as f,f as d,ak as x,b1 as B,y as E,b0 as g,E as a,e as C,t as _,aO as N,ab as F}from"./CYxtrLxh.js";import{r as T}from"./Crd_wGLV.js";import"./BneCoJRQ.js";const V={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},q=L(v.ui.strategy,v.ui.card,V),z=$({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:r,attrs:u}=w("card",y(e,"ui"),q),t=l(()=>O(U(r.value.base,r.value.rounded,r.value.divide,r.value.ring,r.value.shadow,r.value.background),e.class));return{ui:r,attrs:u,cardClass:t}}});function J(e,r,u,t,o,m){return s(),c(B(e.$attrs.onSubmit?"form":e.as),x({class:e.cardClass},e.attrs),{default:b(()=>[e.$slots.header?(s(),p("div",{key:0,class:i([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[f(e.$slots,"header")],2)):d("",!0),e.$slots.default?(s(),p("div",{key:1,class:i([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[f(e.$slots,"default")],2)):d("",!0),e.$slots.footer?(s(),p("div",{key:2,class:i([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[f(e.$slots,"footer")],2)):d("",!0)]),_:3},16,["class"])}const M=I(z,[["render",J]]),P=C("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),K=$({inheritAttrs:!1,__name:"Card",props:{icon:{type:String,default:void 0},color:{type:String,default:"primary"},to:{type:String,default:void 0},target:{type:String,default:void 0},title:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r=E(),u=l(()=>({wrapper:"relative group overflow-hidden flex items-center rounded-lg",to:"hover:ring-1 hover:ring-[--color-light] dark:hover:ring-[--color-dark] hover:bg-gray-100/50 dark:hover:bg-gray-800/50",icon:{base:"w-6 h-6 mb-4 inline-flex items-center text-[--color-light] dark:text-[--color-dark] pointer-events-none"},body:{base:"flex-1"},externalIcon:{name:r.ui.icons.external,base:"w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"},title:"text-gray-900 dark:text-white font-semibold text-base my-0",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0"})),t=e,{ui:o,attrs:m}=w("content.card",y(t,"ui"),u,y(t,"class"),!0),S=l(()=>{var n;return t.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((n=g[t.color])==null?void 0:n["500"])||g[t.color]||t.color}),A=l(()=>{var n;return t.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((n=g[t.color])==null?void 0:n["400"])||g[t.color]||t.color}),k=l(()=>t.target||(t.to&&t.to.startsWith("http")?"_blank":void 0));return(n,R)=>{const D=N,h=F,j=M;return s(),c(j,x({class:[a(o).wrapper,e.to&&a(o).to]},a(m),{ui:a(o),style:{"--color-light":a(S),"--color-dark":a(A)}}),{default:b(()=>[e.to?(s(),c(D,{key:0,to:e.to,target:a(k),class:"focus:outline-none",tabindex:"-1"},{default:b(()=>[P]),_:1},8,["to","target"])):d("",!0),e.icon?(s(),c(h,{key:1,name:e.icon,class:i(a(o).icon.base)},null,8,["name","class"])):d("",!0),e.to&&a(k)==="_blank"?(s(),c(h,{key:2,name:a(o).externalIcon.name,class:i(a(o).externalIcon.base)},null,8,["name","class"])):d("",!0),C("p",{class:i(a(o).title)},_(e.title),3),n.$slots.default?(s(),p("p",{key:3,class:i(a(o).description)},[T(n.$slots,"default",{unwrap:"p"})],2)):d("",!0)]),_:3},16,["class","ui","style"])}}});export{K as default};
