function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./kYkWNZSZ.js","./TNgDJcvg.js","./entry.C5XlDHs1.css","./bNaE6FFb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as f}from"./TNgDJcvg.js";import{v as y,t as d}from"./rzSvhA-G.js";import"./BZY5YapO.js";import"./Cpj98o6Y.js";import"./BneCoJRQ.js";function N(i){const e=i;return async r=>{const h=[],o=[];y(r,s=>{var t,l;return["pre","code"].includes(s.tagName)&&!!((t=s.properties)!=null&&t.language||(l=s.properties)!=null&&l.highlights)},s=>{const t=s,l=typeof t.properties.highlights=="string"?t.properties.highlights.split(/[,\s]+/).map(Number):Array.isArray(t.properties.highlights)?t.properties.highlights.map(Number):[],c=e.highlighter(d(s),t.properties.language,e.theme,{highlights:l.filter(Boolean),meta:t.properties.meta}).then(({tree:n,className:m,style:a,inlineStyle:u})=>{var g;t.properties.className=((t.properties.className||"")+" "+m).trim(),t.properties.style=((t.properties.style||"")+" "+u).trim(),((g=t.children[0])==null?void 0:g.tagName)==="code"?t.children[0].children=n:t.children=n[0].children||n,a&&o.push(a)});h.push(c)}),h.length&&(await Promise.all(h),r.children.push({type:"element",tagName:"style",children:[{type:"text",value:_(o.join(""))}],properties:{}}))}}const _=i=>{const e=i.split("}").filter(r=>!!r.trim()).map(r=>r.trim()+"}");return Array.from(new Set(e)).join("")},p={theme:{},async highlighter(i,e,r,h){var o,s;try{return window.sessionStorage.getItem("mdc-shiki-highlighter")==="browser"?f(()=>import("./kYkWNZSZ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.default(i,e,r,h)).catch(()=>({})):await $fetch("/api/_mdc/highlight",{params:{code:i,lang:e,theme:JSON.stringify(r),options:JSON.stringify(h)}})}catch(t){if(((o=t==null?void 0:t.response)==null?void 0:o.status)===404)return window.sessionStorage.setItem("mdc-shiki-highlighter","browser"),(s=this.highlighter)==null?void 0:s.call(this,i,e,r,h)}return Promise.resolve({tree:[{type:"text",value:i}],className:"",style:""})}};function k(i={}){const e={...p,...i};return typeof e.highlighter!="function"&&(e.highlighter=p.highlighter),N(e)}const A={},x={highlight:{instance:k,options:{}}},I={theme:{light:"slack-ochin",default:"slack-ochin",dark:"ayu-dark"}};export{I as highlight,x as rehypePlugins,A as remarkPlugins};
