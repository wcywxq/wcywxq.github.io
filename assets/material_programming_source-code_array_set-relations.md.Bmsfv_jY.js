import{_ as s,b as i,o as a,a8 as h}from"./chunks/framework.BEMRIPir.js";const C=JSON.parse('{"title":"数组集合关系","description":"","frontmatter":{},"headers":[],"relativePath":"material/programming/source-code/array/set-relations.md","filePath":"material/programming/source-code/array/set-relations.md"}'),n={name:"material/programming/source-code/array/set-relations.md"},k=h(`<h1 id="数组集合关系" tabindex="-1">数组集合关系 <a class="header-anchor" href="#数组集合关系" aria-label="Permalink to &quot;数组集合关系&quot;">​</a></h1><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> arr1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = [</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">3</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">4</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">5</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">6</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">];</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> arr2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = [</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">4</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">6</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">8</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">10</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="交集" tabindex="-1">交集 <a class="header-anchor" href="#交集" aria-label="Permalink to &quot;交集&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> intersect</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arr1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">filter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">((</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">v</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> arr2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">indexOf</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">v</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) &gt; -</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="差集" tabindex="-1">差集 <a class="header-anchor" href="#差集" aria-label="Permalink to &quot;差集&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> minus</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arr1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">filter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">((</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">v</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> arr2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">indexOf</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">v</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) === -</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="并集" tabindex="-1">并集 <a class="header-anchor" href="#并集" aria-label="Permalink to &quot;并集&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> union</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = [...</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arr1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, ...</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arr2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">].</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">filter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">((</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">v</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> arr1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">indexOf</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">v</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) === -</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="补集" tabindex="-1">补集 <a class="header-anchor" href="#补集" aria-label="Permalink to &quot;补集&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> newArr1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arr1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">filter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">((</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">v</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> arr2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">indexOf</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">v</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) === -</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> newArr2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arr2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">filter</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">((</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">v</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> arr1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">indexOf</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">v</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) === -</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> complement</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = [...</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">newArr1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, ...</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">newArr2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,10),t=[k];function l(p,e,r,D,d,g){return a(),i("div",null,t)}const o=s(n,[["render",l]]);export{C as __pageData,o as default};
