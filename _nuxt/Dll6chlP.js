import{d as m,bl as f,y as I,D as r,bm as d,b as x,c as v,al as S,l as _}from"./Bw4bgmt_.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({77575554:p.value}));const t=I(),s=u,l=r(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[s.name]?t.nuxtIcon.aliases[s.name]:s.name}),c=r(()=>d(l.value)),p=r(()=>{var o,a;const e=(a=(o=t.nuxtIcon)==null?void 0:o.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=r(()=>{var n,o,a;if(!s.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((o=t.nuxtIcon)!=null&&o.size))return;const e=s.size||((a=t.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(x(),v("span",{style:S({width:i.value,height:i.value})},null,4))}}),b=_(y,[["__scopeId","data-v-6e4545fa"]]);export{b as default};
