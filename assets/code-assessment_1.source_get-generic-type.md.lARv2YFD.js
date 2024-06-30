import{_ as s,b as i,o as a,a8 as n}from"./chunks/framework.BwoOF8WG.js";const c=JSON.parse('{"title":"获取通用类型","description":"","frontmatter":{"title":"获取通用类型"},"headers":[],"relativePath":"code-assessment/1.source/get-generic-type.md","filePath":"code-assessment/1.source/get-generic-type.md"}'),p={name:"code-assessment/1.source/get-generic-type.md"},e=n(`<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> getGenericType</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">s</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> r</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">Object</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">prototype</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">toString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">call</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">s</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> r</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">replace</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">/</span><span style="--shiki-light:#EE0000;--shiki-dark:#D7BA7D;">\\[</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">object </span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">(</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">.</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">*?</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)</span><span style="--shiki-light:#EE0000;--shiki-dark:#D7BA7D;">\\]</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">/</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;$1&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">).</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">toLowerCase</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">()</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">console</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">  getGenericType</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(),</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">  getGenericType</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">null</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">),</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">  getGenericType</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">),</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">  getGenericType</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;1&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">),</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">  getGenericType</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">true</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">),</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">  getGenericType</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">Symbol</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;zs&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)),</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">  getGenericType</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">({}),</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">  getGenericType</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">([]),</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">  getGenericType</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {}),</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">  getGenericType</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">n</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,1),l=[e];function h(k,t,r,D,d,g){return a(),i("div",null,l)}const C=s(p,[["render",h]]);export{c as __pageData,C as default};