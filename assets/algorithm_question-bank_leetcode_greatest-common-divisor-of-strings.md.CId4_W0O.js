import{_ as a,b as n,e as s,x as l,y as t,a8 as h,o as p}from"./chunks/framework.ZREswijJ.js";const F=JSON.parse('{"title":"No.1071 字符串的最大公因子","description":"","frontmatter":{"title":"No.1071 字符串的最大公因子","url":"https://leetcode.cn/problems/greatest-common-divisor-of-strings"},"headers":[],"relativePath":"algorithm/question-bank/leetcode/greatest-common-divisor-of-strings.md","filePath":"algorithm/question-bank/leetcode/greatest-common-divisor-of-strings.md"}'),k={name:"algorithm/question-bank/leetcode/greatest-common-divisor-of-strings.md"},e={id:"frontmatter-title",tabindex:"-1"},r=["href"],D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":`Permalink to "<a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>"`},"​",-1),d=h(`<p>对于字符串 s 和 t，只有在 s = t + t + t + ... + t + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。</p><p>给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 x 能除尽 str2 。</p><p>示例 1：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：str1 = &quot;ABCABC&quot;, str2 = &quot;ABC&quot;</span></span>
<span class="line"><span>输出：&quot;ABC&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>示例 2：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：str1 = &quot;ABABAB&quot;, str2 = &quot;ABAB&quot;</span></span>
<span class="line"><span>输出：&quot;AB&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>示例 3：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：str1 = &quot;LEET&quot;, str2 = &quot;CODE&quot;</span></span>
<span class="line"><span>输出：&quot;&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>提示：</p><ul><li>1 &lt;= str1.length, str2.length &lt;= 1000</li><li>str1 和 str2 由大写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><p>最大公约数 + 数学法，计算前缀串，若 str1 + str2 = str2 + str1，那么一定存在符合条件的 x</p><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="完整逻辑" tabindex="-1">完整逻辑 <a class="header-anchor" href="#完整逻辑" aria-label="Permalink to &quot;完整逻辑&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">/**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> str1</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> str2</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@return</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> */</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">var</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> gcdOfStrings</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">  // 求最大公约数</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> gcd</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">    let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> rest</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> % </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    while</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">rest</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> !== </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">      a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">      b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">rest</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">      rest</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> % </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> + </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> !== </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> + </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">return</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> &quot;&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> str1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">substring</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">gcd</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">));</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="简化逻辑" tabindex="-1">简化逻辑 <a class="header-anchor" href="#简化逻辑" aria-label="Permalink to &quot;简化逻辑&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">/**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> str1</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> str2</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@return</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> */</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">var</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> gcdOfStrings</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">  // 求最大公约数</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  function</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> gcd</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">    let</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> [</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">x</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">y</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">] = [</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">a</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">b</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">];</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    while</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">y</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> !== </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">      [</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">x</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">y</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">] = [</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">y</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">x</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> % </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">y</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">];</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> x</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> + </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> !== </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> + </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">return</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;"> &quot;&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> str1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">substring</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">gcd</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">str2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">));</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,17);function g(i,y,C,c,o,b){return p(),n("div",null,[s("h1",e,[s("a",{class:"!no-underline",href:i.$frontmatter.url,target:"_blank"},l(i.$frontmatter.title),9,r),t(),D]),d])}const m=a(k,[["render",g]]);export{F as __pageData,m as default};
