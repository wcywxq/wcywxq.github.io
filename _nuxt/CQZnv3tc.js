const __vite__fileDeps=["./CLERgp61.js","./G2C4QHLJ.js","./entry.BSnwTZx1.css","./bNaE6FFb.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as f}from"./G2C4QHLJ.js";import{v as y,t as d}from"./BNtmD4KC.js";import"./gsJi07Df.js";import"./Cpj98o6Y.js";import"./BneCoJRQ.js";function v(i){const e=i;return async r=>{const h=[],o=[];y(r,s=>{var t,l;return["pre","code"].includes(s.tagName)&&!!((t=s.properties)!=null&&t.language||(l=s.properties)!=null&&l.highlights)},s=>{const t=s,l=typeof t.properties.highlights=="string"?t.properties.highlights.split(/[,\s]+/).map(Number):Array.isArray(t.properties.highlights)?t.properties.highlights.map(Number):[],m=e.highlighter(d(s),t.properties.language,e.theme,{highlights:l.filter(Boolean),meta:t.properties.meta}).then(({tree:n,className:c,style:g,inlineStyle:u})=>{var a;t.properties.className=((t.properties.className||"")+" "+c).trim(),t.properties.style=((t.properties.style||"")+" "+u).trim(),((a=t.children[0])==null?void 0:a.tagName)==="code"?t.children[0].children=n:t.children=n[0].children||n,g&&o.push(g)});h.push(m)}),h.length&&(await Promise.all(h),r.children.push({type:"element",tagName:"style",children:[{type:"text",value:N(o.join(""))}],properties:{}}))}}const N=i=>{const e=i.split("}").filter(r=>!!r.trim()).map(r=>r.trim()+"}");return Array.from(new Set(e)).join("")},p={theme:{},async highlighter(i,e,r,h){var o,s;try{return window.sessionStorage.getItem("mdc-shiki-highlighter")==="browser"?f(()=>import("./CLERgp61.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.default(i,e,r,h)).catch(()=>({})):await $fetch("/api/_mdc/highlight",{params:{code:i,lang:e,theme:JSON.stringify(r),options:JSON.stringify(h)}})}catch(t){if(((o=t==null?void 0:t.response)==null?void 0:o.status)===404)return window.sessionStorage.setItem("mdc-shiki-highlighter","browser"),(s=this.highlighter)==null?void 0:s.call(this,i,e,r,h)}return Promise.resolve({tree:[{type:"text",value:i}],className:"",style:""})}};function _(i={}){const e={...p,...i};return typeof e.highlighter!="function"&&(e.highlighter=p.highlighter),v(e)}const A={},x={highlight:{instance:_,options:{}}},I={theme:{light:"vitesse-light",default:"vitesse-light",dark:"vitesse-dark"}};export{I as highlight,x as rehypePlugins,A as remarkPlugins};
