import{_ as s,b as i,o as a,a8 as n}from"./chunks/framework.BwoOF8WG.js";const y=JSON.parse('{"title":"关键字 instanceof","description":"","frontmatter":{},"headers":[],"relativePath":"material/programming/source-code/native-api/instanceof.md","filePath":"material/programming/source-code/native-api/instanceof.md"}'),t={name:"material/programming/source-code/native-api/instanceof.md"},h=n(`<h1 id="关键字-instanceof" tabindex="-1">关键字 instanceof <a class="header-anchor" href="#关键字-instanceof" aria-label="Permalink to &quot;关键字 instanceof&quot;">​</a></h1><ol><li>首先获取原型的类型</li><li>然后获取对象的类型</li><li>然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> _instanceof</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">target</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">origin</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">typeof</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> target</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> !== </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;object&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> || </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">target</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> === </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">null</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">return</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> false</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">typeof</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> origin</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> !== </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;function&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    throw</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> new</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> TypeError</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;origin must be function&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> proto</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Object</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">getPrototypeOf</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">target</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">); </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 相当于: proto = target.__proto__</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  while</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">proto</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">proto</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> === </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">origin</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">prototype</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">return</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> true</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    proto</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Object</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">getPrototypeOf</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">proto</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> false</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,3),l=[h];function p(k,e,r,D,d,g){return a(),i("div",null,l)}const c=s(t,[["render",p]]);export{y as __pageData,c as default};
