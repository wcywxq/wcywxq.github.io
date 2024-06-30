import{_ as s,b as i,o as a,a8 as n}from"./chunks/framework.ZREswijJ.js";const c=JSON.parse('{"title":"解析 url 参数","description":"","frontmatter":{"title":"解析 url 参数"},"headers":[],"relativePath":"code-assessment/2.scene/parse-url-query.md","filePath":"code-assessment/2.scene/parse-url-query.md"}'),h={name:"code-assessment/2.scene/parse-url-query.md"},l=n(`<h2 id="正则-exec" tabindex="-1">正则 + exec <a class="header-anchor" href="#正则-exec" aria-label="Permalink to &quot;正则 + exec&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> parseUrlQuery</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">url</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> reg</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;"> /</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">(?:</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">&amp;</span><span style="--shiki-light:#EE0000;--shiki-dark:#DCDCAA;">|</span><span style="--shiki-light:#EE0000;--shiki-dark:#D7BA7D;">\\/</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">?</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)(</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">\\w</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">+</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">=</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">([^</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">&amp;$</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">]</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">+</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">/</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">g</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> params</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = {};</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  while</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> ((</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">result</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">reg</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">exec</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">url</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">))) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    params</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">result</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">]] = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">result</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">];</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> params</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="正则-match" tabindex="-1">正则 + match <a class="header-anchor" href="#正则-match" aria-label="Permalink to &quot;正则 + match&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> parseUrlQuery</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">url</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> queryNameRegex</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">new</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> RegExp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">\`[?&amp;]</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">\${</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">name</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">}</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">=([^&amp;]*)(&amp;|$)\`</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> queryNameMatch</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">window</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">location</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">search</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">match</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">queryNameRegex</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">  // 一般都会通过 decodeURIComponent 解码处理</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> queryNameMatch</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> ? </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">decodeURIComponent</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">queryNameMatch</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">]) : </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// https://www.baidu.com/?name=%E5%89%8D%E7%AB%AF%E8%83%96%E5%A4%B4%E9%B1%BC&amp;sex=boy</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">console</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">getQueryByName</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;name&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">), </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">getQueryByName</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;sex&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,4),k=[l];function p(e,t,r,D,d,g){return a(),i("div",null,k)}const C=s(h,[["render",p]]);export{c as __pageData,C as default};