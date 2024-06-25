import{_ as a,b as s,o as i,a8 as e}from"./chunks/framework.BwoOF8WG.js";const y=JSON.parse('{"title":"类数组转换","description":"","frontmatter":{},"headers":[],"relativePath":"material/programming/source-code/array/arraylike-convert.md","filePath":"material/programming/source-code/array/arraylike-convert.md"}'),l={name:"material/programming/source-code/array/arraylike-convert.md"},r=e('<h1 id="类数组转换" tabindex="-1">类数组转换 <a class="header-anchor" href="#类数组转换" aria-label="Permalink to &quot;类数组转换&quot;">​</a></h1><h2 id="call-slice" tabindex="-1">call + slice <a class="header-anchor" href="#call-slice" aria-label="Permalink to &quot;call + slice&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">Array</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">prototype</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">slice</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">call</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arrayLike</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="apply-concat" tabindex="-1">apply + concat <a class="header-anchor" href="#apply-concat" aria-label="Permalink to &quot;apply + concat&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">Array</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">prototype</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">concat</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">apply</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">([], </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arrayLike</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="array-from" tabindex="-1">Array.from <a class="header-anchor" href="#array-from" aria-label="Permalink to &quot;Array.from&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Array</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">from</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arrayLike</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',7),t=[r];function n(h,p,k,d,o,c){return i(),s("div",null,t)}const g=a(l,[["render",n]]);export{y as __pageData,g as default};
