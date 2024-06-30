import{_ as s,b as i,o as a,a8 as n}from"./chunks/framework.BEMRIPir.js";const g=JSON.parse('{"title":"随机数","description":"","frontmatter":{"title":"随机数"},"headers":[],"relativePath":"code-assessment/2.scene/random-number.md","filePath":"code-assessment/2.scene/random-number.md"}'),e={name:"code-assessment/2.scene/random-number.md"},t=n('<h2 id="获取两个数之间任意随机数" tabindex="-1">获取两个数之间任意随机数 <a class="header-anchor" href="#获取两个数之间任意随机数" aria-label="Permalink to &quot;获取两个数之间任意随机数&quot;">​</a></h2><p>由于 Math.random()函数总是返回 0 到 1 之间的一个随机数，我们可以把 0 看成最小数，把 1 看成最大数。假设最小数是 min，最大数是 max，通过下面的公式我们便可得出任意两个数之间的随机数：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Math</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">random</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">() * (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">max</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> - </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">min</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) + </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">min</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果要指定小数位数，可以使用 Math.round() 函数。如下面的公式返回任意两个整数之间的随机数，结果保留 1 位小数：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Math</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">round</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">((</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Math</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">random</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">() * (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">max</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> - </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">min</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) + </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">min</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) * </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">10</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) / </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">10</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',5),h=[t];function l(k,p,r,d,D,o){return a(),i("div",null,h)}const m=s(e,[["render",l]]);export{g as __pageData,m as default};