import{d as S,ap as A,aq as b,b as o,c as d,n as u,E as e,aj as h,j as U,t as _,f as y,e as f,g as $,F as B,ah as M,ak as k,ab as z,ai as v,ao as ne,l as se,am as re,an as J,ac as q,D as j,aL as R,at as E,y as D,w as O,aM as oe,aN as Y,aO as ie,r as T,H as le,aP as ce,aQ as ue,u as de,aR as pe,k as ge,v as me,aS as K,aT as ye,aU as fe,aw as Q,aV as W,aW as be,aX as ve,s as X,aY as he}from"./By7ifuHr.js";import ke from"./GFrDdhP6.js";import"./qknRT2R2.js";import"./DCm9yqvH.js";const xe={wrapper:{base:"flex items-center align-center text-center w-full",horizontal:"flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},_e={class:"flex flex-col lg:flex-row items-start gap-6"},we={class:"flex-1"},$e=S({inheritAttrs:!1,__name:"PageHeader",props:{headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},l=t,{ui:n,attrs:a}=A("page.header",b(l,"ui"),s,b(l,"class"),!0);return(r,c)=>{var p;const i=z,m=ne;return o(),d("div",k({class:e(n).wrapper},e(a)),[t.headline||r.$slots.headline?(o(),d("div",{key:0,class:u(e(n).headline)},[h(r.$slots,"headline",{},()=>[U(_(t.headline),1)])],2)):y("",!0),f("div",_e,[t.icon||r.$slots.icon?(o(),d("div",{key:0,class:u(e(n).icon.wrapper)},[h(r.$slots,"icon",{},()=>[$(i,{name:t.icon,class:u(e(n).icon.base)},null,8,["name","class"])])],2)):y("",!0),f("div",we,[f("div",{class:u(e(n).container)},[f("h1",{class:u(e(n).title)},[h(r.$slots,"title",{},()=>[U(_(t.title),1)])],2),(p=t.links)!=null&&p.length||r.$slots.links?(o(),d("div",{key:0,class:u(e(n).links)},[h(r.$slots,"links",{},()=>[(o(!0),d(B,null,M(t.links,(x,g)=>(o(),v(m,k({key:g},{...x,target:x.target||"_blank",color:x.color||"white"},{onClick:x.click}),null,16,["onClick"]))),128))])],2)):y("",!0)],2),t.description||r.$slots.description?(o(),d("p",{key:0,class:u(e(n).description)},[h(r.$slots,"description",{},()=>[U(_(t.description),1)])],2)):y("",!0),h(r.$slots,"default")])])],16)}}}),H=re(J.ui.strategy,J.ui.divider,xe),Ce=S({components:{UIcon:z,UAvatar:q},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>H.default.size,validator(t){return Object.keys(H.border.size.horizontal).includes(t)||Object.keys(H.border.size.vertical).includes(t)}},orientation:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},type:{type:String,default:"solid",validator:t=>["solid","dotted","dashed"].includes(t)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:s,attrs:l}=A("divider",b(t,"ui"),H),n=j(()=>R(E(s.value.wrapper.base,s.value.wrapper[t.orientation]),t.class)),a=j(()=>E(s.value.container.base,s.value.container[t.orientation])),r=j(()=>E(s.value.border.base,s.value.border[t.orientation],s.value.border.size[t.orientation][t.size],s.value.border.type[t.type]));return{ui:s,attrs:l,wrapperClass:n,containerClass:a,borderClass:r}}});function Se(t,s,l,n,a,r){const c=z,i=q;return o(),d("div",k({class:t.wrapperClass},t.attrs),[f("div",{class:u(t.borderClass)},null,2),t.label||t.icon||t.avatar||t.$slots.default?(o(),d(B,{key:0},[f("div",{class:u(t.containerClass)},[h(t.$slots,"default",{},()=>[t.label?(o(),d("span",{key:0,class:u(t.ui.label)},_(t.label),3)):t.icon?(o(),v(c,{key:1,name:t.icon,class:u(t.ui.icon.base)},null,8,["name","class"])):t.avatar?(o(),v(i,k({key:2},{size:t.ui.avatar.size,...t.avatar},{class:t.ui.avatar.base}),null,16,["class"])):y("",!0)])],2),f("div",{class:u(t.borderClass)},null,2)],64)):y("",!0)],16)}const Ae=se(Ce,[["render",Se]]),Oe=S({inheritAttrs:!1,__name:"PageLinks",props:{title:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s=D(),l=j(()=>({wrapper:"space-y-3",title:"text-sm/6 font-semibold flex items-center gap-1.5",container:"space-y-3 lg:space-y-1.5",base:"flex items-center gap-1.5",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{base:"w-5 h-5 flex-shrink-0"},avatar:{base:"self-center",size:"2xs"},externalIcon:{name:s.ui.icons.external,base:"w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"},label:"text-sm/6 font-medium relative"})),n=t,{ui:a,attrs:r}=A("page.links",b(n,"ui"),l,b(n,"class"),!0);return(c,i)=>{const m=z,p=q,x=Y;return o(),d("div",k({class:e(a).wrapper},e(r)),[t.title||c.$slots.title?(o(),d("p",{key:0,class:u(e(a).title)},[h(c.$slots,"title",{},()=>[U(_(t.title),1)])],2)):y("",!0),f("div",{class:u(e(a).container)},[h(c.$slots,"default",{},()=>[(o(!0),d(B,null,M(t.links,(g,w)=>(o(),v(x,k({key:w},e(oe)(g),{class:e(a).base,"active-class":e(a).active,"inactive-class":e(a).inactive,onClick:g.click}),{default:O(()=>[g.icon?(o(),v(m,{key:0,name:g.icon,class:u(e(R)(e(a).icon.base,g.iconClass))},null,8,["name","class"])):y("",!0),g.avatar?(o(),v(p,k({key:1},{size:e(a).avatar.size,...g.avatar},{class:e(R)(e(a).avatar.base,g.avatarClass)}),null,16,["class"])):y("",!0),f("span",{class:u(e(a).label)},[U(_(g.label)+" ",1),g.target==="_blank"?(o(),v(m,{key:0,name:e(a).externalIcon.name,class:u(e(a).externalIcon.base)},null,8,["name","class"])):y("",!0)],2)]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))])],2)],16)}}}),Ue=S({inheritAttrs:!1,__name:"ContentSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},l=t,{ui:n,attrs:a}=A("content.surround.link",b(l,"ui"),s,b(l,"class"),!0);return(r,c)=>{const i=z,m=ie;return o(),v(m,k({to:t.link._path,class:e(n).wrapper},e(a)),{default:O(()=>[t.icon||t.link.icon?(o(),d("div",{key:0,class:u(e(n).icon.wrapper)},[$(i,{name:t.icon||t.link.icon,class:u(e(n).icon.base)},null,8,["name","class"])],2)):y("",!0),f("p",{class:u(e(n).title)},_(t.link.title),3),f("p",{class:u(e(n).description)},_(t.link.description),3)]),_:1},16,["to","class"])}}}),je={key:1,class:"hidden sm:block"},ze=S({inheritAttrs:!1,__name:"ContentSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},l=t,{ui:n,attrs:a}=A("content.surround",b(l,"ui"),s,b(l,"class"),!0),[r,c]=l.surround||[];return(i,m)=>{const p=Ue;return o(),d("div",k({class:e(n).wrapper},e(a)),[e(r)?(o(),v(p,{key:0,link:e(r),ui:e(n).link,icon:e(n).icon.prev},null,8,["link","ui","icon"])):(o(),d("span",je," ")),e(c)?(o(),v(p,{key:2,link:e(c),ui:e(n).link,icon:e(n).icon.next,class:"text-right"},null,8,["link","ui","icon"])):y("",!0)],16)}}}),Ie=S({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},l=t,{ui:n,attrs:a}=A("page.body",b(l,"ui"),s,b(l,"class"),!0);return(r,c)=>(o(),d("div",k({class:[e(n).wrapper,t.prose&&e(n).prose]},e(a)),[h(r.$slots,"default")],16))}}),Le=()=>{const t=T(),s=T([]),l=T([]),n=r=>{r.forEach(c=>{const i=c.target.id;c.isIntersecting?s.value=[...s.value,i]:s.value=s.value.filter(m=>m!==i)})},a=r=>{r.forEach(c=>{t.value&&t.value.observe(c)})};return le(s,(r,c)=>{r.length===0?l.value=c:l.value=r}),ce(()=>t.value=new IntersectionObserver(n)),ue(()=>{var r;return(r=t.value)==null?void 0:r.disconnect()}),{visibleHeadings:s,activeHeadings:l,updateHeadings:a}},Pe=["href","onClick"],Z=S({inheritAttrs:!1,__name:"TocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(t,{emit:s}){const l={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},n=t,a=s,r=de(),c=ge(),{activeHeadings:i,updateHeadings:m}=Le(),{ui:p,attrs:x}=A("content.toc.links",b(n,"ui"),l,b(n,"class"),!0);c.hooks.hookOnce("page:finish",()=>{m([...document.querySelectorAll("h2, h3, h4, h5, h6")])});const g=w=>{const I=encodeURIComponent(w);r.push(`#${I}`),a("move",w)};return(w,I)=>{var P;const N=Z;return(P=t.links)!=null&&P.length?(o(),d("ul",k({key:0,class:e(p).wrapper},e(x)),[(o(!0),d(B,null,M(t.links,C=>(o(),d("li",{key:C.text,class:u([e(p).wrapper,e(p).depth])},[f("a",{href:`#${C.id}`,class:u([e(p).base,e(i).includes(C.id)?e(p).active:e(p).inactive]),onClick:pe(V=>g(C.id),["prevent"])},_(C.text),11,Pe),C.children?(o(),v(N,{key:0,links:C.children},null,8,["links"])):y("",!0)],2))),128))],16)):y("",!0)}}}),He=S({inheritAttrs:!1,__name:"Toc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s=D(),l=j(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:s.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),n=t,{ui:a,attrs:r}=A("content.toc",b(n,"ui"),l,b(n,"class"),!0),c=T(!1);return(i,m)=>{var g,w;const p=z,x=Z;return o(),d("nav",k({class:e(a).wrapper},e(r)),[f("div",{class:u([(g=t.links)!=null&&g.length?e(a).container.base:e(a).container.empty])},[h(i.$slots,"top"),(w=t.links)!=null&&w.length?(o(),d("button",{key:0,class:u(e(a).button.base),tabindex:"-1",onClick:m[0]||(m[0]=I=>c.value=!e(c))},[f("span",{class:u(e(a).button.label)},_(t.title),3),$(p,{name:e(a).button.trailingIcon.name,class:u(["lg:!hidden",[e(a).button.trailingIcon.base,e(c)?e(a).button.trailingIcon.active:e(a).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):y("",!0),$(x,{links:t.links,ui:e(a).links,class:u([e(c)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),h(i.$slots,"bottom")],2)],16)}}}),Te={class:"space-y-6"},Be={class:"mb-4"},qe=S({__name:"[...slug]",async setup(t){let s,l;const n=me(),{docs:a,toc:r,seo:c}=D(),{data:i}=([s,l]=K(()=>W(n.path,()=>X(n.path).findOne(),"$aROEKgqrzL")),s=await s,l(),s);if(!i.value)throw ye({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:m}=([s,l]=K(()=>W(`${n.path}-surround`,()=>X().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(he(n.path)))),s=await s,l(),s);fe({title:i.value.title,ogTitle:`${i.value.title} - ${c==null?void 0:c.siteName}`,description:i.value.description,ogDescription:i.value.description});const p=j(()=>be(i.value));return(x,g)=>{const w=Y,I=$e,N=ke,P=Ae,C=Oe,V=ze,ee=Ie,te=He,ae=ve;return o(),v(ae,null,Q({default:O(()=>[$(I,{title:e(i).title,links:e(i).links,headline:e(p)},Q({_:2},[e(i).url?{name:"title",fn:O(()=>[$(w,{to:e(i).url,"active-class":"text-primary",target:"_blank",class:"transition-all duration-300 ease-in-out hover:text-primary"},{default:O(()=>[U(_(e(i).title),1)]),_:1},8,["to"])]),key:"0"}:void 0]),1032,["title","links","headline"]),$(ee,{prose:""},{default:O(()=>{var L;return[e(i).body?(o(),v(N,{key:0,value:e(i)},null,8,["value"])):y("",!0),f("div",Te,[$(P,{type:"dashed"}),f("div",Be,[$(C,{class:"inline-block",links:[{icon:"i-ph-pen-duotone",label:"Edit this page on GitHub",to:`${e(a).github}/${e(a).repo}/edit/${e(a).branch}/${e(a).base_url}/${e(i)._file}`,target:"_blank"}]},null,8,["links"])]),(L=e(m))!=null&&L.length?(o(),v(V,{key:0,class:"mb-4",surround:e(m)},null,8,["surround"])):y("",!0)])]}),_:1})]),_:2},[e(i).toc!==!1?{name:"right",fn:O(()=>{var L,F,G;return[$(te,{title:(L=e(r))==null?void 0:L.title,links:(G=(F=e(i).body)==null?void 0:F.toc)==null?void 0:G.links},null,8,["title","links"])]}),key:"0"}:void 0]),1024)}}});export{qe as default};
