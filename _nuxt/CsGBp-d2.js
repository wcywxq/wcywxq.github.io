import{d as S,ap as O,aq as f,b as o,c as d,n as u,E as e,aj as h,j as U,t as k,f as y,e as b,g as $,F as E,ah as M,ak as x,ab as z,ai as v,ao as ie,l as le,am as ce,an as X,ac as V,D as j,aL as D,at as q,y as F,w as A,aM as ue,aN as ae,aO as de,r as N,H as pe,aP as ge,aQ as me,u as ye,aR as be,k as fe,v as ve,aS as Y,aT as he,aU as ke,aw as Z,aV as ee,aW as xe,aX as _e,s as te,aY as we}from"./DyBKPda-.js";import $e from"./1CgrlMpH.js";import"./BtOEfWVv.js";import"./pyqtJjmX.js";const Ce={wrapper:{base:"flex items-center align-center text-center w-full",horizontal:"flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},Se={class:"flex flex-col lg:flex-row items-start gap-6"},Ae={class:"flex-1"},Oe=S({inheritAttrs:!1,__name:"PageHeader",props:{headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},l=t,{ui:n,attrs:a}=O("page.header",f(l,"ui"),s,f(l,"class"),!0);return(r,c)=>{var p;const i=z,m=ie;return o(),d("div",x({class:e(n).wrapper},e(a)),[t.headline||r.$slots.headline?(o(),d("div",{key:0,class:u(e(n).headline)},[h(r.$slots,"headline",{},()=>[U(k(t.headline),1)])],2)):y("",!0),b("div",Se,[t.icon||r.$slots.icon?(o(),d("div",{key:0,class:u(e(n).icon.wrapper)},[h(r.$slots,"icon",{},()=>[$(i,{name:t.icon,class:u(e(n).icon.base)},null,8,["name","class"])])],2)):y("",!0),b("div",Ae,[b("div",{class:u(e(n).container)},[b("h1",{class:u(e(n).title)},[h(r.$slots,"title",{},()=>[U(k(t.title),1)])],2),(p=t.links)!=null&&p.length||r.$slots.links?(o(),d("div",{key:0,class:u(e(n).links)},[h(r.$slots,"links",{},()=>[(o(!0),d(E,null,M(t.links,(_,g)=>(o(),v(m,x({key:g},{..._,target:_.target||"_blank",color:_.color||"white"},{onClick:_.click}),null,16,["onClick"]))),128))])],2)):y("",!0)],2),t.description||r.$slots.description?(o(),d("p",{key:0,class:u(e(n).description)},[h(r.$slots,"description",{},()=>[U(k(t.description),1)])],2)):y("",!0),h(r.$slots,"default")])])],16)}}}),B=ce(X.ui.strategy,X.ui.divider,Ce),Ue=S({components:{UIcon:z,UAvatar:V},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>B.default.size,validator(t){return Object.keys(B.border.size.horizontal).includes(t)||Object.keys(B.border.size.vertical).includes(t)}},orientation:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},type:{type:String,default:"solid",validator:t=>["solid","dotted","dashed"].includes(t)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:s,attrs:l}=O("divider",f(t,"ui"),B),n=j(()=>D(q(s.value.wrapper.base,s.value.wrapper[t.orientation]),t.class)),a=j(()=>q(s.value.container.base,s.value.container[t.orientation])),r=j(()=>q(s.value.border.base,s.value.border[t.orientation],s.value.border.size[t.orientation][t.size],s.value.border.type[t.type]));return{ui:s,attrs:l,wrapperClass:n,containerClass:a,borderClass:r}}});function je(t,s,l,n,a,r){const c=z,i=V;return o(),d("div",x({class:t.wrapperClass},t.attrs),[b("div",{class:u(t.borderClass)},null,2),t.label||t.icon||t.avatar||t.$slots.default?(o(),d(E,{key:0},[b("div",{class:u(t.containerClass)},[h(t.$slots,"default",{},()=>[t.label?(o(),d("span",{key:0,class:u(t.ui.label)},k(t.label),3)):t.icon?(o(),v(c,{key:1,name:t.icon,class:u(t.ui.icon.base)},null,8,["name","class"])):t.avatar?(o(),v(i,x({key:2},{size:t.ui.avatar.size,...t.avatar},{class:t.ui.avatar.base}),null,16,["class"])):y("",!0)])],2),b("div",{class:u(t.borderClass)},null,2)],64)):y("",!0)],16)}const ze=le(Ue,[["render",je]]),Ie=S({inheritAttrs:!1,__name:"PageLinks",props:{title:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s=F(),l=j(()=>({wrapper:"space-y-3",title:"text-sm/6 font-semibold flex items-center gap-1.5",container:"space-y-3 lg:space-y-1.5",base:"flex items-center gap-1.5",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{base:"w-5 h-5 flex-shrink-0"},avatar:{base:"self-center",size:"2xs"},externalIcon:{name:s.ui.icons.external,base:"w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"},label:"text-sm/6 font-medium relative"})),n=t,{ui:a,attrs:r}=O("page.links",f(n,"ui"),l,f(n,"class"),!0);return(c,i)=>{const m=z,p=V,_=ae;return o(),d("div",x({class:e(a).wrapper},e(r)),[t.title||c.$slots.title?(o(),d("p",{key:0,class:u(e(a).title)},[h(c.$slots,"title",{},()=>[U(k(t.title),1)])],2)):y("",!0),b("div",{class:u(e(a).container)},[h(c.$slots,"default",{},()=>[(o(!0),d(E,null,M(t.links,(g,w)=>(o(),v(_,x({key:w},e(ue)(g),{class:e(a).base,"active-class":e(a).active,"inactive-class":e(a).inactive,onClick:g.click}),{default:A(()=>[g.icon?(o(),v(m,{key:0,name:g.icon,class:u(e(D)(e(a).icon.base,g.iconClass))},null,8,["name","class"])):y("",!0),g.avatar?(o(),v(p,x({key:1},{size:e(a).avatar.size,...g.avatar},{class:e(D)(e(a).avatar.base,g.avatarClass)}),null,16,["class"])):y("",!0),b("span",{class:u(e(a).label)},[U(k(g.label)+" ",1),g.target==="_blank"?(o(),v(m,{key:0,name:e(a).externalIcon.name,class:u(e(a).externalIcon.base)},null,8,["name","class"])):y("",!0)],2)]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))])],2)],16)}}}),Le=S({inheritAttrs:!1,__name:"ContentSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},l=t,{ui:n,attrs:a}=O("content.surround.link",f(l,"ui"),s,f(l,"class"),!0);return(r,c)=>{const i=z,m=de;return o(),v(m,x({to:t.link._path,class:e(n).wrapper},e(a)),{default:A(()=>[t.icon||t.link.icon?(o(),d("div",{key:0,class:u(e(n).icon.wrapper)},[$(i,{name:t.icon||t.link.icon,class:u(e(n).icon.base)},null,8,["name","class"])],2)):y("",!0),b("p",{class:u(e(n).title)},k(t.link.title),3),b("p",{class:u(e(n).description)},k(t.link.description),3)]),_:1},16,["to","class"])}}}),Te={key:1,class:"hidden sm:block"},Pe=S({inheritAttrs:!1,__name:"ContentSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},l=t,{ui:n,attrs:a}=O("content.surround",f(l,"ui"),s,f(l,"class"),!0),[r,c]=l.surround||[];return(i,m)=>{const p=Le;return o(),d("div",x({class:e(n).wrapper},e(a)),[e(r)?(o(),v(p,{key:0,link:e(r),ui:e(n).link,icon:e(n).icon.prev},null,8,["link","ui","icon"])):(o(),d("span",Te," ")),e(c)?(o(),v(p,{key:2,link:e(c),ui:e(n).link,icon:e(n).icon.next,class:"text-right"},null,8,["link","ui","icon"])):y("",!0)],16)}}}),He=S({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},l=t,{ui:n,attrs:a}=O("page.body",f(l,"ui"),s,f(l,"class"),!0);return(r,c)=>(o(),d("div",x({class:[e(n).wrapper,t.prose&&e(n).prose]},e(a)),[h(r.$slots,"default")],16))}}),Be=()=>{const t=N(),s=N([]),l=N([]),n=r=>{r.forEach(c=>{const i=c.target.id;c.isIntersecting?s.value=[...s.value,i]:s.value=s.value.filter(m=>m!==i)})},a=r=>{r.forEach(c=>{t.value&&t.value.observe(c)})};return pe(s,(r,c)=>{r.length===0?l.value=c:l.value=r}),ge(()=>t.value=new IntersectionObserver(n)),me(()=>{var r;return(r=t.value)==null?void 0:r.disconnect()}),{visibleHeadings:s,activeHeadings:l,updateHeadings:a}},Ne=["href","onClick"],ne=S({inheritAttrs:!1,__name:"TocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(t,{emit:s}){const l={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},n=t,a=s,r=ye(),c=fe(),{activeHeadings:i,updateHeadings:m}=Be(),{ui:p,attrs:_}=O("content.toc.links",f(n,"ui"),l,f(n,"class"),!0);c.hooks.hookOnce("page:finish",()=>{m([...document.querySelectorAll("h2, h3, h4, h5, h6")])});const g=w=>{const I=encodeURIComponent(w);r.push(`#${I}`),a("move",w)};return(w,I)=>{var H;const R=ne;return(H=t.links)!=null&&H.length?(o(),d("ul",x({key:0,class:e(p).wrapper},e(_)),[(o(!0),d(E,null,M(t.links,C=>(o(),d("li",{key:C.text,class:u([e(p).wrapper,e(p).depth])},[b("a",{href:`#${C.id}`,class:u([e(p).base,e(i).includes(C.id)?e(p).active:e(p).inactive]),onClick:be(G=>g(C.id),["prevent"])},k(C.text),11,Ne),C.children?(o(),v(R,{key:0,links:C.children},null,8,["links"])):y("",!0)],2))),128))],16)):y("",!0)}}}),Ee=S({inheritAttrs:!1,__name:"Toc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const s=F(),l=j(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:s.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),n=t,{ui:a,attrs:r}=O("content.toc",f(n,"ui"),l,f(n,"class"),!0),c=N(!1);return(i,m)=>{var g,w;const p=z,_=ne;return o(),d("nav",x({class:e(a).wrapper},e(r)),[b("div",{class:u([(g=t.links)!=null&&g.length?e(a).container.base:e(a).container.empty])},[h(i.$slots,"top"),(w=t.links)!=null&&w.length?(o(),d("button",{key:0,class:u(e(a).button.base),tabindex:"-1",onClick:m[0]||(m[0]=I=>c.value=!e(c))},[b("span",{class:u(e(a).button.label)},k(t.title),3),$(p,{name:e(a).button.trailingIcon.name,class:u(["lg:!hidden",[e(a).button.trailingIcon.base,e(c)?e(a).button.trailingIcon.active:e(a).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):y("",!0),$(_,{links:t.links,ui:e(a).links,class:u([e(c)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),h(i.$slots,"bottom")],2)],16)}}}),Re={class:"space-y-6"},qe={class:"mb-4"},Ge=S({__name:"[...slug]",async setup(t){let s,l;const n=ve(),{docs:a,toc:r,seo:c}=F(),{data:i}=([s,l]=Y(()=>ee(n.path,()=>te(n.path).findOne(),"$aROEKgqrzL")),s=await s,l(),s);if(!i.value)throw he({status:404,statusText:"Page not found"});const{data:m}=([s,l]=Y(()=>ee(`${n.path}-surround`,()=>te().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(we(n.path)))),s=await s,l(),s);ke({title:i.value.title,ogTitle:`${i.value.title} - ${c==null?void 0:c.siteName}`,description:i.value.description,ogDescription:i.value.description});const p=j(()=>xe(i.value));return(_,g)=>{var J;const w=ae,I=Oe,R=$e,H=ze,C=Ie,G=Pe,se=He,re=Ee,oe=_e;return o(),v(oe,null,Z({default:A(()=>{var L,T,P,K;return[$(I,{title:(L=e(i))==null?void 0:L.title,links:(T=e(i))==null?void 0:T.links,headline:e(p)},Z({_:2},[(P=e(i))!=null&&P.url?{name:"title",fn:A(()=>[$(w,{to:e(i).url,"active-class":"text-primary",target:"_blank",class:"transition-all duration-300 ease-in-out hover:text-primary"},{default:A(()=>[U(k(e(i).title),1)]),_:1},8,["to"])]),key:"0"}:void 0,(K=e(i))!=null&&K.subTitle?{name:"description",fn:A(()=>[b("p",null,k(e(i).subTitle),1)]),key:"1"}:void 0]),1032,["title","links","headline"]),$(se,{prose:""},{default:A(()=>{var Q,W;return[(Q=e(i))!=null&&Q.body?(o(),v(R,{key:0,value:e(i)},null,8,["value"])):y("",!0),b("div",Re,[$(H,{type:"dashed"}),b("div",qe,[$(C,{class:"inline-block",links:[{icon:"i-ph-pen-duotone",label:"Edit this page on GitHub",to:`${e(a).github}/${e(a).repo}/edit/${e(a).branch}/${e(a).base_url}/${e(i)._file}`,target:"_blank"}]},null,8,["links"])]),(W=e(m))!=null&&W.length?(o(),v(G,{key:0,class:"mb-4",surround:e(m)},null,8,["surround"])):y("",!0)])]}),_:1})]}),_:2},[((J=e(i))==null?void 0:J.toc)!==!1?{name:"right",fn:A(()=>{var L,T,P;return[$(re,{title:(L=e(r))==null?void 0:L.title,links:(P=(T=e(i).body)==null?void 0:T.toc)==null?void 0:P.links},null,8,["title","links"])]}),key:"0"}:void 0]),1024)}}});export{Ge as default};
