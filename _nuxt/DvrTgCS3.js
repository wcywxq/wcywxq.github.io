import{_ as j}from"./XZAwtCKq.js";import{d as w,ap as B,aq as v,b as f,c as b,e as d,n as u,E as t,aj as c,f as A,g as m,ak as P,bn as L,a2 as S,v as V,D as y,ai as $,w as _,bo as x,a$ as z,bp as D,aX as E}from"./BkmHGYpv.js";import{u as O}from"./BZhC-dTW.js";const R={class:"relative"},q=w({inheritAttrs:!1,__name:"Aside",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(h){const s={wrapper:"hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4",top:{wrapper:"sticky -top-8 -mt-8 pointer-events-none z-[1]",header:"h-8 bg-background -mx-4 px-4",body:"bg-background relative pointer-events-auto flex -mx-4 px-4",footer:"h-8 bg-gradient-to-b from-background -mx-4 px-4"}},r=h,{ui:o,attrs:i}=B("aside",v(r,"ui"),s,v(r,"class"),!0);return(a,g)=>{const e=L;return f(),b("aside",P({class:t(o).wrapper},t(i)),[d("div",R,[a.$slots.top?(f(),b("div",{key:0,class:u(t(o).top.wrapper)},[d("div",{class:u(t(o).top.header)},null,2),d("div",{class:u(t(o).top.body)},[c(a.$slots,"top")],2),d("div",{class:u(t(o).top.footer)},null,2)],2)):A("",!0),c(a.$slots,"links",{},()=>[m(e,{links:h.links},null,8,["links"])]),c(a.$slots,"default"),c(a.$slots,"bottom")])],16)}}}),T=w({__name:"docs",setup(h){const s=S("navigation"),r=V(),{navPageFromPath:o}=O();function i(e){var l,n;return{...e,to:(l=e==null?void 0:e.children)!=null&&l.length?i(e.children[0]).to:e.to,active:r.path.startsWith(((n=e.to)==null?void 0:n.toString())||"")}}const a=y(()=>x((s==null?void 0:s.value)||[]).map(i)),g=y(()=>{var n,p;const e=`/${((n=r.params.slug)==null?void 0:n[0])??""}`,l=((p=o(e,(s==null?void 0:s.value)||[]))==null?void 0:p.children)||[];return x(l)});return(e,l)=>{const n=j,p=D,C=q,U=E,N=z;return f(),$(N,null,{default:_(()=>[m(U,null,{left:_(()=>[m(C,{links:t(a)},{default:_(()=>{var k;return[(k=t(g))!=null&&k.length?(f(),$(n,{key:0,type:"dashed",class:"mb-6"})):A("",!0),m(p,{links:t(g)},null,8,["links"])]}),_:1},8,["links"])]),default:_(()=>[c(e.$slots,"default")]),_:3})]),_:3})}}});export{T as default};
