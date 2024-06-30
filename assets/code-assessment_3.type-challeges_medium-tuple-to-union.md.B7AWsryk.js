import{_ as s,b as i,o as a,a8 as n}from"./chunks/framework.BEMRIPir.js";const y=JSON.parse('{"title":"No.10 元组转合集(联合类型)","description":"","frontmatter":{"title":"No.10 元组转合集(联合类型)"},"headers":[],"relativePath":"code-assessment/3.type-challeges/medium-tuple-to-union.md","filePath":"code-assessment/3.type-challeges/medium-tuple-to-union.md"}'),e={name:"code-assessment/3.type-challeges/medium-tuple-to-union.md"},t=n(`<p>实现泛型<code>TupleToUnion&lt;T&gt;</code>，它返回元组所有值的合集。</p><p>例如</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">type</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> Arr</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = [</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;1&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;2&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;3&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">type</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> Test</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">TupleToUnion</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">Arr</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&gt;; </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// expected to be &#39;1&#39; | &#39;2&#39; | &#39;3&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="method-1" tabindex="-1">method 1 <a class="header-anchor" href="#method-1" aria-label="Permalink to &quot;method 1&quot;">​</a></h2><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">type</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> TupleToUnion</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">T</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> extends</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> any</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[]&gt; = </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">number</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">];</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="method-2" tabindex="-1">method 2 <a class="header-anchor" href="#method-2" aria-label="Permalink to &quot;method 2&quot;">​</a></h2><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">type</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> TupleToUnion</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">T</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> extends</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> unknown</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[]&gt; = </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">T</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> extends</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> [</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">infer</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> P</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, ...</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">infer</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> R</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">]</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  ? </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">P</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> | </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">TupleToUnion</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">R</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  : </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">never</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="method-3" tabindex="-1">method 3 <a class="header-anchor" href="#method-3" aria-label="Permalink to &quot;method 3&quot;">​</a></h2><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">type</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> TupleToUnion</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&lt;</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">T</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">&gt; = </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">T</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> extends</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">infer</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> P</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)[] ? </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">P</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> : </span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;">never</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,9),h=[t];function l(p,k,d,r,o,g){return a(),i("div",null,h)}const c=s(e,[["render",l]]);export{y as __pageData,c as default};
