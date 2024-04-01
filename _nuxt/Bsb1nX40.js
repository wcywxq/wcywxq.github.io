import{d as ne,u as Q,r as R,o as oe,_ as ie,a as se,b,c as q,n as ae,F as re,e as f,f as L,g as z,w as H,T as V,t as de,h as W,p as ce,i as le,j as ue,k as X,l as pe,m as fe,q as Z,s as we,v as F,x as D,y as Y,z as ve,A as he,B as J,C as ye}from"./oEdqAeP8.js";const A=i=>(ce("data-v-c046c763"),i=i(),le(),i),me=A(()=>f("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[f("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),_e=A(()=>f("span",null,[f("a",{href:"https://nuxt.studio",target:"_blank",rel:"noopener"},"Nuxt Studio"),ue(": Preview enabled")],-1)),ge={key:0},ke=A(()=>f("div",{id:"__preview_background"},null,-1)),Ce=A(()=>f("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),Ie=A(()=>f("p",null,"Initializing the preview...",-1)),Pe={key:0},xe=A(()=>f("div",{id:"__preview_background"},null,-1)),Se={id:"__preview_loader"},Te=ne({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(i){const a=i,r=["__nuxt_preview","__preview_enabled"],l=X(),m=Q(),w=R(!0),g=R(!1),t=R(!1),p=R("");let d;const v=async()=>{W("previewToken").value="",window.sessionStorage.removeItem("previewToken"),window.sessionStorage.removeItem("previewAPI"),await m.replace({query:{preview:void 0}}),window.location.reload()},P=async x=>{const y=await a.syncPreview(x);if(t.value!==!0){if(!y){setTimeout(()=>P(x),1e3);return}W("previewToken").value&&(t.value=!0,await m.replace({query:{}}),l.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&d.disconnect())}};return oe(async()=>{d=(await ie(()=>import("./CF3NOiUn.js"),[],import.meta.url)).connect(`${a.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:a.previewToken}});let y;d.on("connect",()=>{y=setTimeout(()=>{t.value||(y=setTimeout(()=>{p.value="Preview sync timed out",t.value=!1},3e4),d.emit("draft:requestSync"))},3e4)});const T=()=>{y&&(clearTimeout(y),y=null)};d.on("draft:sync",async _=>{if(T(),!_){try{d.once("draft:ready",()=>{d.emit("draft:requestSync")}),await a.requestPreviewSyncAPI()}catch(N){switch(T(),N.response.status){case 404:p.value="Preview draft not found",t.value=!1;break;default:p.value="An error occurred while syncing preview",t.value=!1}}return}P(_)}),d.on("draft:unauthorized",()=>{T(),p.value="Unauthorized preview token",t.value=!1}),d.on("disconnect",()=>{T()}),document.body.classList.add(...r),d.on("draft:update",_=>{g.value=!0,a.syncPreview(_),g.value=!1})}),se(()=>{document.body.classList.remove(...r)}),(x,y)=>(b(),q("div",null,[w.value?(b(),q("div",{key:0,id:"__nuxt_preview",class:ae({__preview_ready:t.value,__preview_refreshing:g.value})},[t.value?(b(),q(re,{key:0},[me,_e,f("button",{onClick:v}," Close ")],64)):L("",!0)],2)):L("",!0),z(V,{name:"preview-loading"},{default:H(()=>[w.value&&!t.value&&!p.value?(b(),q("div",ge,[ke,f("div",{id:"__preview_loader"},[Ce,Ie,f("button",{onClick:v}," Cancel ")])])):L("",!0)]),_:1}),z(V,{name:"preview-loading"},{default:H(()=>[p.value?(b(),q("div",Pe,[xe,f("div",Se,[f("p",null,de(p.value),1),f("button",{onClick:v}," Exit preview ")])])):L("",!0)]),_:1})]))}}),Ae=pe(Te,[["__scopeId","data-v-c046c763"]]),be=(i=[],a,r)=>{const l=[...a||[]],m=[...r||[]],w=JSON.parse(JSON.stringify(i));for(const t of l)if(t.oldPath)if(m.splice(m.findIndex(d=>d.path===t.oldPath),1),l.find(d=>d.path===t.oldPath))w.push({path:t.path,parsed:t.parsed});else{const d=w.find(v=>v.path===t.oldPath);d&&(d.path=t.path,t.parsed?d.parsed=t.parsed:t.pathMeta&&["_file","_path","_id","_locale"].forEach(v=>{d.parsed[v]=t.pathMeta[v]}))}else if(t.new)w.push({path:t.path,parsed:t.parsed});else{const p=w.find(d=>d.path===t.path);p&&Object.assign(p,{path:t.path,parsed:t.parsed})}for(const t of m)w.splice(w.findIndex(p=>p.path===t.path),1);const g=new Intl.Collator(void 0,{numeric:!0});return w.sort((t,p)=>g.compare(t.path,p.path)),w},C={appConfig:"app.config.ts",nuxtConfig:"nuxt.config.ts",tokensConfig:"tokens.config.ts"},qe=i=>{let a;return r=>(a||(a=i()),a)};function j(i,a){for(const r in i){const l=a[r];r in a||delete i[r],l!==null&&typeof l=="object"&&j(i[r],a[r])}}function ee(i,a){for(const r in a){const l=a[r];l!==null&&typeof l=="object"?Array.isArray(l)&&Array.isArray(i[r])?i[r]=l:(i[r]=i[r]||{},ee(i[r],l)):i[r]=l}}const Re=qe(()=>JSON.parse(JSON.stringify(Y()))),G=ye((i,a,r)=>{if(Array.isArray(i[a])&&Array.isArray(r))return i[a]=r,!0}),Me=()=>{const i=X(),{studio:a,content:r}=fe().public,l={},m=window.sessionStorage.getItem("previewAPI")||(a==null?void 0:a.apiURL),w=Re();let g;const t=Z("studio-client-db",()=>null),p=Z("studio-preview-db-files",()=>[]);t.value||(i.hook("content:storage",n=>{t.value=n}),we("/non-existing-path").findOne());const d=async(n,o)=>{const s=window.sessionStorage.getItem("previewToken"),c=await n.getKeys(`${s}:`);await Promise.all(c.map(e=>n.removeItem(e)));const u=new Set(o.map(e=>e.parsed._id.split(":").shift()));await n.setItem(`${s}$`,JSON.stringify({ignoreSources:Array.from(u)})),await Promise.all(o.map(e=>(l[e.parsed._path]=e.parsed,n.setItem(`${s}:${e.parsed._id}`,JSON.stringify(e.parsed)))))},v=n=>{const o=D(i,Y);o!=null&&o.ui&&(o.ui.icons={...o.ui.icons,dynamic:!0}),ee(o,G(n,w)),n||j(o,w)},P=n=>{var s,c,u,e;const o=(e=(u=(c=(s=i==null?void 0:i.vueApp)==null?void 0:s._context)==null?void 0:c.config)==null?void 0:u.globalProperties)==null?void 0:e.$pinceauTheme;!o||!(o!=null&&o.updateTheme)||(g||(g=JSON.parse(JSON.stringify((o==null?void 0:o.theme.value)||{}))),D(i,o.updateTheme,[G(n,g)]))},x=async n=>{if(p.value=n.files=n.files||p.value||[],!t.value)return!1;const o=be(n.files,n.additions,n.deletions),s=o.filter(e=>![C.appConfig,C.nuxtConfig,C.tokensConfig].includes(e.path));await d(t.value,s);const c=o.find(e=>e.path===C.appConfig);v(c==null?void 0:c.parsed);const u=o.find(e=>e.path===C.tokensConfig);return P(u==null?void 0:u.parsed),$(),!0},y=async()=>{const n=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:m,method:"POST",params:{token:n}})},T=()=>{const n=window.sessionStorage.getItem("previewToken"),o=document.createElement("div");o.id="__nuxt_preview_wrapper",document.body.appendChild(o),ve(Ae,{previewToken:n,apiURL:m,syncPreview:x,requestPreviewSyncAPI:y}).mount(o)},_=async n=>{var c,u,e;const o=window.sessionStorage.getItem("previewToken");if(!n)return null;n=n.replace(/\/$/,"");let s=await((c=t.value)==null?void 0:c.getItem(`${o}:${n}`));return s||(s=await((u=t.value)==null?void 0:u.getItem(`cached:${n}`))),s||(s=s=await((e=t.value)==null?void 0:e.getItem(n))),s||(s=l[n||"/"]),s},N=n=>{var s;const o=window.sessionStorage.getItem("previewToken");t.value&&(l[n.parsed._path]=n.parsed,t.value.setItem(`${o}:${(s=n.parsed)==null?void 0:s._id}`,JSON.stringify(n.parsed)))},U=async n=>{var c;const o=window.sessionStorage.getItem("previewToken"),s=await _(n);if(await((c=t.value)==null?void 0:c.removeItem(`${o}:${n}`)),s){delete l[s._path];const u=await _(s._id);u&&(l[u._path]=u)}},$=async()=>{if(r!=null&&r.documentDriven){const{pages:n}=D(i,he),o=await Promise.all(Object.keys(n.value).map(async s=>{var c;return await _(((c=n.value[s])==null?void 0:c._id)??s)}));n.value=o.reduce((s,c,u)=>(c&&(s[Object.keys(n.value)[u]]=c),s),{})}await i.hooks.callHookParallel("app:data:refresh")};return{apiURL:m,contentStorage:t,syncPreviewFiles:d,syncPreviewAppConfig:v,syncPreviewTokensConfig:P,requestPreviewSynchronization:y,findContentWithId:_,updateContent:N,removeContentWithId:U,requestRerender:$,mountPreviewUI:T,initiateIframeCommunication:te};function te(){if(!window.parent||window.self===window.parent)return;const n=Q(),o=F(),s=R(""),c=e=>({path:e.path,query:J(e.query),params:J(e.params),fullPath:e.fullPath,meta:J(e.meta)});window.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:e.key,metaKey:e.metaKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey}},"*")}),window.addEventListener("message",async e=>{var B;if(!["https://nuxt.studio","https://new.nuxt.studio","https://new.dev.nuxt.studio","https://dev.nuxt.studio","http://localhost:3000",...((B=a==null?void 0:a.iframeMessagingAllowedOrigins)==null?void 0:B.split(",").map(h=>h.trim()))||[]].includes(e.origin))return;const{type:E,payload:O={}}=e.data||{};switch(E){case"nuxt-studio:editor:file-selected":{const h=await _(O.path);h&&(h._partial||h._path!==F().path&&(s.value=h._path,n.push(h._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:h=[],deletions:M=[]}=O;for(const I of h)await N(I);for(const I of M)await U(I.path);$();break}case"nuxt-studio:preview:sync":{x(O);break}case"nuxt-studio:config:file-changed":{const{additions:h=[],deletions:M=[]}=O,I=h.find(S=>S.path===C.appConfig);I&&v(I==null?void 0:I.parsed),M.find(S=>S.path===C.appConfig)&&v(void 0);const K=h.find(S=>S.path===C.tokensConfig);K&&P(K==null?void 0:K.parsed),M.find(S=>S.path===C.tokensConfig)&&P(void 0);break}}}),i.hook("page:finish",()=>{u(),i.payload.prerenderedAt&&$()}),i.hook("content:document-driven:finish",({route:e,page:k})=>{e.meta.studio_page_contentId=k==null?void 0:k._id}),i.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:c(F())},"*"),setTimeout(()=>{u()},100)});function u(){const e=Array.from(window.document.querySelectorAll("[data-content-id]")).map(E=>E.getAttribute("data-content-id")),k=Array.from(new Set([o.meta.studio_page_contentId,...e])).filter(Boolean);if(s.value===k[0]){s.value="";return}window.openContentInStudioEditor(k,{navigate:!0,pageContentId:o.meta.studio_page_contentId})}window.openContentInStudioEditor=(e,k={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...c(o),contentIds:e,...k}},"*")}}};export{Me as useStudio};
