const f=e=>{if(!e.children)return e._path;for(const t of(e==null?void 0:e.children)||[]){const r=f(t);if(r)return r}},s=(e,t)=>{for(const r of t){if(r._path===e&&!r._id)return r.children;if(r.children){const n=s(e,r.children);if(n)return n}}},u=(e,t)=>{for(const r of t){if(r._path===e)return r;if(r.children){const n=u(e,r.children);if(n)return n}}},d=(e,t,r)=>{let n;const i=(c,l)=>{for(const o of l)if(!(c!=="/"&&o._path==="/")){if(c!=null&&c.startsWith(o._path)&&o[t]&&(n=o[t]),o._path===c)return;o.children&&i(c,o.children)}};return i(e,r),n},h=()=>({navBottomLink:f,navDirFromPath:s,navPageFromPath:u,navKeyFromPath:d});export{h as u};
