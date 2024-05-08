import{d as C,ap as O,aq as h,b as o,c as g,n as u,E as e,aj as v,j as U,t as x,f as y,e as f,g as w,F as E,ah as R,ak as $,ab as B,ai as k,ao as ne,y as q,D as z,w as A,aL as K,aM as se,ac as re,aN as J,aO as oe,r as H,H as ie,aP as le,aQ as ce,u as ue,aR as de,k as pe,v as ge,aS as Q,aT as me,aU as ye,aw as W,aV as X,aW as fe,aX as he,s as Y,aY as ke}from"./B2UtbIkQ.js";import be from"./DqosGBd4.js";import{_ as ve}from"./B3CPKCLo.js";import"./DUklF3nE.js";import"./ByYe21Rk.js";const xe={class:"flex flex-col lg:flex-row items-start gap-6"},_e={class:"flex-1"},we=C({inheritAttrs:!1,__name:"PageHeader",props:{headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const i={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},l=t,{ui:n,attrs:a}=O("page.header",h(l,"ui"),i,h(l,"class"),!0);return(s,c)=>{var d;const r=B,m=ne;return o(),g("div",$({class:e(n).wrapper},e(a)),[t.headline||s.$slots.headline?(o(),g("div",{key:0,class:u(e(n).headline)},[v(s.$slots,"headline",{},()=>[U(x(t.headline),1)])],2)):y("",!0),f("div",xe,[t.icon||s.$slots.icon?(o(),g("div",{key:0,class:u(e(n).icon.wrapper)},[v(s.$slots,"icon",{},()=>[w(r,{name:t.icon,class:u(e(n).icon.base)},null,8,["name","class"])])],2)):y("",!0),f("div",_e,[f("div",{class:u(e(n).container)},[f("h1",{class:u(e(n).title)},[v(s.$slots,"title",{},()=>[U(x(t.title),1)])],2),(d=t.links)!=null&&d.length||s.$slots.links?(o(),g("div",{key:0,class:u(e(n).links)},[v(s.$slots,"links",{},()=>[(o(!0),g(E,null,R(t.links,(b,p)=>(o(),k(m,$({key:p},{...b,target:b.target||"_blank",color:b.color||"white"},{onClick:b.click}),null,16,["onClick"]))),128))])],2)):y("",!0)],2),t.description||s.$slots.description?(o(),g("p",{key:0,class:u(e(n).description)},[v(s.$slots,"description",{},()=>[U(x(t.description),1)])],2)):y("",!0),v(s.$slots,"default")])])],16)}}}),$e=C({inheritAttrs:!1,__name:"PageLinks",props:{title:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const i=q(),l=z(()=>({wrapper:"space-y-3",title:"text-sm/6 font-semibold flex items-center gap-1.5",container:"space-y-3 lg:space-y-1.5",base:"flex items-center gap-1.5",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{base:"w-5 h-5 flex-shrink-0"},avatar:{base:"self-center",size:"2xs"},externalIcon:{name:i.ui.icons.external,base:"w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"},label:"text-sm/6 font-medium relative"})),n=t,{ui:a,attrs:s}=O("page.links",h(n,"ui"),l,h(n,"class"),!0);return(c,r)=>{const m=B,d=re,b=J;return o(),g("div",$({class:e(a).wrapper},e(s)),[t.title||c.$slots.title?(o(),g("p",{key:0,class:u(e(a).title)},[v(c.$slots,"title",{},()=>[U(x(t.title),1)])],2)):y("",!0),f("div",{class:u(e(a).container)},[v(c.$slots,"default",{},()=>[(o(!0),g(E,null,R(t.links,(p,_)=>(o(),k(b,$({key:_},e(se)(p),{class:e(a).base,"active-class":e(a).active,"inactive-class":e(a).inactive,onClick:p.click}),{default:A(()=>[p.icon?(o(),k(m,{key:0,name:p.icon,class:u(e(K)(e(a).icon.base,p.iconClass))},null,8,["name","class"])):y("",!0),p.avatar?(o(),k(d,$({key:1},{size:e(a).avatar.size,...p.avatar},{class:e(K)(e(a).avatar.base,p.avatarClass)}),null,16,["class"])):y("",!0),f("span",{class:u(e(a).label)},[U(x(p.label)+" ",1),p.target==="_blank"?(o(),k(m,{key:0,name:e(a).externalIcon.name,class:u(e(a).externalIcon.base)},null,8,["name","class"])):y("",!0)],2)]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))])],2)],16)}}}),Se=C({inheritAttrs:!1,__name:"ContentSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const i={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},l=t,{ui:n,attrs:a}=O("content.surround.link",h(l,"ui"),i,h(l,"class"),!0);return(s,c)=>{const r=B,m=oe;return o(),k(m,$({to:t.link._path,class:e(n).wrapper},e(a)),{default:A(()=>[t.icon||t.link.icon?(o(),g("div",{key:0,class:u(e(n).icon.wrapper)},[w(r,{name:t.icon||t.link.icon,class:u(e(n).icon.base)},null,8,["name","class"])],2)):y("",!0),f("p",{class:u(e(n).title)},x(t.link.title),3),f("p",{class:u(e(n).description)},x(t.link.description),3)]),_:1},16,["to","class"])}}}),Ae={key:1,class:"hidden sm:block"},Ce=C({inheritAttrs:!1,__name:"ContentSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const i={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},l=t,{ui:n,attrs:a}=O("content.surround",h(l,"ui"),i,h(l,"class"),!0),[s,c]=l.surround||[];return(r,m)=>{const d=Se;return o(),g("div",$({class:e(n).wrapper},e(a)),[e(s)?(o(),k(d,{key:0,link:e(s),ui:e(n).link,icon:e(n).icon.prev},null,8,["link","ui","icon"])):(o(),g("span",Ae," ")),e(c)?(o(),k(d,{key:2,link:e(c),ui:e(n).link,icon:e(n).icon.next,class:"text-right"},null,8,["link","ui","icon"])):y("",!0)],16)}}}),Oe=C({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const i={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},l=t,{ui:n,attrs:a}=O("page.body",h(l,"ui"),i,h(l,"class"),!0);return(s,c)=>(o(),g("div",$({class:[e(n).wrapper,t.prose&&e(n).prose]},e(a)),[v(s.$slots,"default")],16))}}),Ue=()=>{const t=H(),i=H([]),l=H([]),n=s=>{s.forEach(c=>{const r=c.target.id;c.isIntersecting?i.value=[...i.value,r]:i.value=i.value.filter(m=>m!==r)})},a=s=>{s.forEach(c=>{t.value&&t.value.observe(c)})};return ie(i,(s,c)=>{s.length===0?l.value=c:l.value=s}),le(()=>t.value=new IntersectionObserver(n)),ce(()=>{var s;return(s=t.value)==null?void 0:s.disconnect()}),{visibleHeadings:i,activeHeadings:l,updateHeadings:a}},je=["href","onClick"],Z=C({inheritAttrs:!1,__name:"TocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(t,{emit:i}){const l={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},n=t,a=i,s=ue(),c=pe(),{activeHeadings:r,updateHeadings:m}=Ue(),{ui:d,attrs:b}=O("content.toc.links",h(n,"ui"),l,h(n,"class"),!0);c.hooks.hookOnce("page:finish",()=>{m([...document.querySelectorAll("h2, h3, h4, h5, h6")])});const p=_=>{const j=encodeURIComponent(_);s.push(`#${j}`),a("move",_)};return(_,j)=>{var P;const N=Z;return(P=t.links)!=null&&P.length?(o(),g("ul",$({key:0,class:e(d).wrapper},e(b)),[(o(!0),g(E,null,R(t.links,S=>(o(),g("li",{key:S.text,class:u([e(d).wrapper,e(d).depth])},[f("a",{href:`#${S.id}`,class:u([e(d).base,e(r).includes(S.id)?e(d).active:e(d).inactive]),onClick:de(D=>p(S.id),["prevent"])},x(S.text),11,je),S.children?(o(),k(N,{key:0,links:S.children},null,8,["links"])):y("",!0)],2))),128))],16)):y("",!0)}}}),Ie=C({inheritAttrs:!1,__name:"Toc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const i=q(),l=z(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:i.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),n=t,{ui:a,attrs:s}=O("content.toc",h(n,"ui"),l,h(n,"class"),!0),c=H(!1);return(r,m)=>{var p,_;const d=B,b=Z;return o(),g("nav",$({class:e(a).wrapper},e(s)),[f("div",{class:u([(p=t.links)!=null&&p.length?e(a).container.base:e(a).container.empty])},[v(r.$slots,"top"),(_=t.links)!=null&&_.length?(o(),g("button",{key:0,class:u(e(a).button.base),tabindex:"-1",onClick:m[0]||(m[0]=j=>c.value=!e(c))},[f("span",{class:u(e(a).button.label)},x(t.title),3),w(d,{name:e(a).button.trailingIcon.name,class:u(["lg:!hidden",[e(a).button.trailingIcon.base,e(c)?e(a).button.trailingIcon.active:e(a).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):y("",!0),w(b,{links:t.links,ui:e(a).links,class:u([e(c)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),v(r.$slots,"bottom")],2)],16)}}}),Le={class:"space-y-6"},Te={class:"mb-4"},Re=C({__name:"[...slug]",async setup(t){let i,l;const n=ge(),{docs:a,toc:s,seo:c}=q(),{data:r}=([i,l]=Q(()=>X(n.path,()=>Y(n.path).findOne(),"$aROEKgqrzL")),i=await i,l(),i);if(!r.value)throw me({status:404,statusText:"Page not found"});const{data:m}=([i,l]=Q(()=>X(`${n.path}-surround`,()=>Y().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(ke(n.path)))),i=await i,l(),i);ye({title:r.value.title,ogTitle:`${r.value.title} - ${c==null?void 0:c.siteName}`,description:r.value.description,ogDescription:r.value.description});const d=z(()=>fe(r.value));return(b,p)=>{var M;const _=J,j=we,N=be,P=ve,S=$e,D=Ce,ee=Oe,te=Ie,ae=he;return o(),k(ae,null,W({default:A(()=>{var I,L,T,V;return[w(j,{title:(I=e(r))==null?void 0:I.title,links:(L=e(r))==null?void 0:L.links,headline:e(d)},W({_:2},[(T=e(r))!=null&&T.url?{name:"title",fn:A(()=>[w(_,{to:e(r).url,"active-class":"text-primary",target:"_blank",class:"transition-all duration-300 ease-in-out hover:text-primary"},{default:A(()=>[U(x(e(r).title),1)]),_:1},8,["to"])]),key:"0"}:void 0,(V=e(r))!=null&&V.subTitle?{name:"description",fn:A(()=>[f("p",null,x(e(r).subTitle),1)]),key:"1"}:void 0]),1032,["title","links","headline"]),w(ee,{prose:""},{default:A(()=>{var F,G;return[(F=e(r))!=null&&F.body?(o(),k(N,{key:0,value:e(r)},null,8,["value"])):y("",!0),f("div",Le,[w(P,{type:"dashed"}),f("div",Te,[w(S,{class:"inline-block",links:[{icon:"i-ph-pen-duotone",label:"Edit this page on GitHub",to:`${e(a).github}/${e(a).repo}/edit/${e(a).branch}/${e(a).base_url}/${e(r)._file}`,target:"_blank"}]},null,8,["links"])]),(G=e(m))!=null&&G.length?(o(),k(D,{key:0,class:"mb-4",surround:e(m)},null,8,["surround"])):y("",!0)])]}),_:1})]}),_:2},[((M=e(r))==null?void 0:M.toc)!==!1?{name:"right",fn:A(()=>{var I,L,T;return[w(te,{title:(I=e(s))==null?void 0:I.title,links:(T=(L=e(r).body)==null?void 0:L.toc)==null?void 0:T.links},null,8,["title","links"])]}),key:"0"}:void 0]),1024)}}});export{Re as default};
