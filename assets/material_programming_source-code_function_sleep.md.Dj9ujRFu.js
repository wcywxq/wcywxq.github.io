import{_ as s,b as i,o as a,a8 as n}from"./chunks/framework.BwoOF8WG.js";const c=JSON.parse('{"title":"函数睡眠","description":"","frontmatter":{},"headers":[],"relativePath":"material/programming/source-code/function/sleep.md","filePath":"material/programming/source-code/function/sleep.md"}'),l={name:"material/programming/source-code/function/sleep.md"},p=n(`<h1 id="函数睡眠" tabindex="-1">函数睡眠 <a class="header-anchor" href="#函数睡眠" aria-label="Permalink to &quot;函数睡眠&quot;">​</a></h1><h2 id="回调函数实现" tabindex="-1">回调函数实现 <a class="header-anchor" href="#回调函数实现" aria-label="Permalink to &quot;回调函数实现&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> sleep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">cb</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">timer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> setTimeout</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">cb</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">timer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 调用</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">sleep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">  console</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;sleep exec!&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1000</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="promise-实现" tabindex="-1">Promise 实现 <a class="header-anchor" href="#promise-实现" aria-label="Permalink to &quot;Promise 实现&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> sleep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">timer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> function</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">() {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    return</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> new</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> Promise</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">((</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">resolve</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">reject</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">      setTimeout</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">resolve</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">timer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    })</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> p</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">new</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> Promise</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">resolve</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> =&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">  console</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;first todo&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">})</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  .</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">then</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">sleep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">2000</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">))</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  .</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">then</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    console</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;after sleep 2000&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="generator-实现" tabindex="-1">generator 实现 <a class="header-anchor" href="#generator-实现" aria-label="Permalink to &quot;generator 实现&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function*</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> sleep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">timer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  yield</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> new</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> Promise</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">((</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">resolve</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">reject</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">    setTimeout</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">resolve</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">timer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  })</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">sleep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1000</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  .</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">next</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">()</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  .</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">value</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  .</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">then</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    console</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;sleep exec&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="async-await-实现" tabindex="-1">async/await 实现 <a class="header-anchor" href="#async-await-实现" aria-label="Permalink to &quot;async/await 实现&quot;">​</a></h2><ul><li>例 1</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> sleep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">timer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> new</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> Promise</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">resolve</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> =&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">    setTimeout</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">resolve</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">timer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  })</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">async</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> () </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  await</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> sleep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1000</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">  console</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;sleep exec&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">})()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>例 2</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> sleep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">fn</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">timer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> new</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> Promise</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">resolve</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> =&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">    setTimeout</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(() </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">      resolve</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">fn</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">())</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    }, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">timer</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  })</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> logger</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">input</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> =&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> () </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">  console</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">input</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> input</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">async</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> () </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> name</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">await</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> sleep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">logger</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;test content&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">), </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1000</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> sex</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">await</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> sleep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">logger</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;boy&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">), </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1000</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  const</span><span style="--shiki-light:#0070C1;--shiki-dark:#4FC1FF;"> age</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">await</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> sleep</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">logger</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">100</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">), </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1000</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">})()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// test content 1s later</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// boy 2s later</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 100 3s later</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// test content boy 100</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,12),h=[p];function k(e,t,r,D,d,g){return a(),i("div",null,h)}const C=s(l,[["render",k]]);export{c as __pageData,C as default};
