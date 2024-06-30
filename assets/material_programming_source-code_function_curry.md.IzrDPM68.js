import{_ as s,b as i,o as a,a8 as n}from"./chunks/framework.BEMRIPir.js";const C=JSON.parse('{"title":"函数柯理化","description":"","frontmatter":{},"headers":[],"relativePath":"material/programming/source-code/function/curry.md","filePath":"material/programming/source-code/function/curry.md"}'),h={name:"material/programming/source-code/function/curry.md"},k=n(`<h1 id="函数柯理化" tabindex="-1">函数柯理化 <a class="header-anchor" href="#函数柯理化" aria-label="Permalink to &quot;函数柯理化&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>函数柯里化（Currying）是一种编程技术，又称部分求值（Partial Evaluation）。它将一个多参数函数转换成一系列接受单个参数的函数，每次调用返回一个新的函数，直到接收完所有必需的参数后才执行原始函数并返回最终结果。这样做的好处包括：可以更灵活地处理参数、创建特定用途的函数工厂以及更容易实现函数组合。</p><blockquote><p>函数柯理化的基础是<strong>闭包</strong></p></blockquote><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> curry</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">fn</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> judge</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(...</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">args</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">args</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &gt;= </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">fn</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">      return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> fn</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">apply</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">this</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">args</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">else</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">      return</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> function</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (...</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">subArgs</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">        return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> judge</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">apply</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">this</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">args</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">concat</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">subArgs</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">))</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">      }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 一行代码实现</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> currying</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">fn</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> =&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">judge</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = (...</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">args</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">args</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &gt;= </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">fn</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> ? </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">fn</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(...</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">args</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) : (...</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">subArgs</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> judge</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(...</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">args</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">concat</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">subArgs</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">))))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 测试</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> sum</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">c</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> + </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> + </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">c</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> currySum</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">curry</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">sum</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">console</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">currySum</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">3</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)) </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 6，仍然可以被正常调用</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">console</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">currySum</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">3</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)) </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 6，对第一个参数的柯里化</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">console</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">currySum</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">3</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)) </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 6，全柯里化</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="应用案例" tabindex="-1">应用案例 <a class="header-anchor" href="#应用案例" aria-label="Permalink to &quot;应用案例&quot;">​</a></h2><h3 id="在提交用户信息的时候校验手机号、邮箱" tabindex="-1">在提交用户信息的时候校验手机号、邮箱 <a class="header-anchor" href="#在提交用户信息的时候校验手机号、邮箱" aria-label="Permalink to &quot;在提交用户信息的时候校验手机号、邮箱&quot;">​</a></h3><ul><li>校验函数封装</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 非柯里化版本</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> checkByRegExp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">regExp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">string</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> regExp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">test</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">string</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">checkByRegExp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">/</span><span style="--shiki-light:#EE0000;--shiki-dark:#DCDCAA;">^</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">1\\d</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">{10}</span><span style="--shiki-light:#EE0000;--shiki-dark:#DCDCAA;">$</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">/</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;15010001000&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 校验电话号码</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">checkByRegExp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">/</span><span style="--shiki-light:#EE0000;--shiki-dark:#DCDCAA;">^</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">(</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">\\w</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">+</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">(</span><span style="--shiki-light:#EE0000;--shiki-dark:#D7BA7D;">\\.</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">\\w</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">+</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">*</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">@</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">(</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">\\w</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">+</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">((</span><span style="--shiki-light:#EE0000;--shiki-dark:#D7BA7D;">\\.</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">\\w</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">+</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">+</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)</span><span style="--shiki-light:#EE0000;--shiki-dark:#DCDCAA;">$</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">/</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;test@163.com&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 校验邮箱</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在实际使用中，不需要去关注正则是如何匹配的，只需要使用更具体函数去分别校验手机号或者邮箱，这里就需要使用柯里化函数处理：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 进行柯里化</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> _check</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">curry</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">checkByRegExp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 生成工具函数，验证电话号码</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> checkCellPhone</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">_check</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">/</span><span style="--shiki-light:#EE0000;--shiki-dark:#DCDCAA;">^</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">1\\d</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">{10}</span><span style="--shiki-light:#EE0000;--shiki-dark:#DCDCAA;">$</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">/</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 生成工具函数，验证邮箱</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> checkEmail</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">_check</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">/</span><span style="--shiki-light:#EE0000;--shiki-dark:#DCDCAA;">^</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">(</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">\\w</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">+</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">(</span><span style="--shiki-light:#EE0000;--shiki-dark:#D7BA7D;">\\.</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">\\w</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">+</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">*</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">@</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">(</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">\\w</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">+</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">((</span><span style="--shiki-light:#EE0000;--shiki-dark:#D7BA7D;">\\.</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">\\w</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">+</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)</span><span style="--shiki-light:#000000;--shiki-dark:#D7BA7D;">+</span><span style="--shiki-light:#D16969;--shiki-dark:#CE9178;">)</span><span style="--shiki-light:#EE0000;--shiki-dark:#DCDCAA;">$</span><span style="--shiki-light:#811F3F;--shiki-dark:#D16969;">/</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">checkCellPhone</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;18642838455&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 校验电话号码</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">checkCellPhone</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;13109840560&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 校验电话号码</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">checkCellPhone</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;13204061212&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 校验电话号码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">checkEmail</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;test@163.com&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 校验邮箱</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">checkEmail</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;test@qq.com&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 校验邮箱</span></span>
<span class="line"><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">checkEmail</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&#39;test@gmail.com&#39;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 校验邮箱</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,12),l=[k];function p(t,e,D,r,d,g){return a(),i("div",null,l)}const c=s(h,[["render",p]]);export{C as __pageData,c as default};
