import{d,b9 as l,D as v,q as f,A as p,aV as g,ba as m,a_ as h,b2 as _,U as i,aO as y}from"./CLBuArnU.js";const b=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:a}=l(u),n=v(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&f("dd-navigation").value){const{navigation:t}=p();return{navigation:t}}const{data:o}=await g(`content-navigation-${h(n.value)}`,()=>m(n.value));return{navigation:o}},render(u){const a=_(),{navigation:n}=u,o=e=>i(y,{to:e._path},()=>e.title),t=(e,r)=>i("ul",r?{"data-level":r}:null,e.map(s=>s.children?i("li",null,[o(s),t(s.children,r+1)]):i("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}}),C=b;export{C as default};
