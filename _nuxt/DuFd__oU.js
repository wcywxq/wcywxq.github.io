import{_ as p}from"./BaAAICJs.js";import{d as l,bb as m,D as o,b as i,ai as b,E as v}from"./m3Ru-uQM.js";const _=l({__name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})}},setup(a){const e=a,d=m().isEnabled(),r=o(()=>{let t=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(t=e.value.excerpt),t}),c=o(()=>{const{body:t,excerpt:u,...n}=e.value;return{...n,...e.data}}),s=o(()=>({...e.components,...c.value._components||{}}));return(t,u)=>{const n=p;return i(),b(n,{body:r.value,data:c.value,tag:a.tag,components:s.value,"data-content-id":v(d)?a.value._id:void 0},null,8,["body","data","tag","components","data-content-id"])}}});export{_};
