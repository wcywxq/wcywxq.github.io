import{_ as s,b as i,o as a,a8 as n}from"./chunks/framework.BEMRIPir.js";const y=JSON.parse('{"title":"Promise 缓存","description":"","frontmatter":{"title":"Promise 缓存"},"headers":[],"relativePath":"code-assessment/2.scene/1.promise/promise-cache.md","filePath":"code-assessment/2.scene/1.promise/promise-cache.md"}'),h={name:"code-assessment/2.scene/1.promise/promise-cache.md"},l=n(`<p>promise 缓存可以解决接口多次调用而对服务器造成资源浪费的问题</p><ul><li>装饰器模式</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> cacheMap</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">new</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> Map</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">()</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> enableCache</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">target</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">descriptor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> val</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">descriptor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">value</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">  descriptor</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">value</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">async</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> function</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (...</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">args</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">    const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> cacheKey</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> + </span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;">JSON</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">stringify</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">args</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (!</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">cacheMap</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">get</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">cacheKey</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">      const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> cacheValue</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">Promise</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">resolve</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">val</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">apply</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">this</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">args</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">))</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">        .</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">catch</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">err</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> =&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">          cacheMap</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">set</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">cacheKey</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">null</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">        })</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">      cacheMap</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">set</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">cacheKey</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">cacheValue</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> cacheMap</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">get</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">cacheKey</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> descriptor</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">class</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> PromiseClass</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  @</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">enableCache</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  static</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> async</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> getInfo</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">() { }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">PromiseClass</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">getInfo</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">()</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">PromiseClass</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">getInfo</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,3),p=[l];function k(e,t,D,r,d,g){return a(),i("div",null,p)}const C=s(h,[["render",k]]);export{y as __pageData,C as default};
