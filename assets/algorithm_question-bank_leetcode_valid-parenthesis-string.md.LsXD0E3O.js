import{_ as a,b as n,e as s,x as l,y as p,a8 as h,o as t}from"./chunks/framework.BEMRIPir.js";const F=JSON.parse('{"title":"No.678 有效的括号字符串","description":"","frontmatter":{"title":"No.678 有效的括号字符串","url":"https://leetcode.cn/problems/valid-parenthesis-string"},"headers":[],"relativePath":"algorithm/question-bank/leetcode/valid-parenthesis-string.md","filePath":"algorithm/question-bank/leetcode/valid-parenthesis-string.md"}'),e={name:"algorithm/question-bank/leetcode/valid-parenthesis-string.md"},k={id:"frontmatter-title",tabindex:"-1"},r=["href"],D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":`Permalink to "<a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>"`},"​",-1),d=h(`<p>给你一个只包含三种字符的字符串，支持的字符类型分别是 &#39;(&#39;、&#39;)&#39; 和 &#39;*&#39;。请你检验这个字符串是否为有效字符串，如果是有效字符串返回 true 。</p><p>有效字符串符合如下规则：</p><ul><li>任何左括号 &#39;(&#39; 必须有相应的右括号 &#39;)&#39;。</li><li>任何右括号 &#39;)&#39; 必须有相应的左括号 &#39;(&#39; 。</li><li>左括号 &#39;(&#39; 必须在对应的右括号之前 &#39;)&#39;。</li><li>&#39;*&#39; 可以被视为单个右括号 &#39;)&#39; ，或单个左括号 &#39;(&#39; ，或一个空字符串。</li><li>一个空字符串也被视为有效字符串。</li></ul><p>示例 1：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：s = &quot;()&quot;</span></span>
<span class="line"><span>输出：true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>示例 2：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：s = &quot;(*)&quot;</span></span>
<span class="line"><span>输出：true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>示例 3：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：s = &quot;(*))&quot;</span></span>
<span class="line"><span>输出：true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>提示：</p><ul><li>1 &lt;= s.length &lt;= 100</li><li>s[i] 为 &#39;(&#39;、&#39;)&#39; 或 &#39;*&#39;</li></ul><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="双栈" tabindex="-1">双栈 <a class="header-anchor" href="#双栈" aria-label="Permalink to &quot;双栈&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">/**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> s</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@return</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {boolean}</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> */</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">var</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> checkValidString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">s</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> leftStack</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = [];</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> starStack</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = [];</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  for</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">; </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &lt; </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">s</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">; </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">++) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">s</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">] === </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;(&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">      leftStack</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">push</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">else</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;"> if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">s</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">] === </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;*&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">      starStack</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">push</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">else</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">      if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">leftStack</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        leftStack</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">pop</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">      } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">else</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;"> if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">starStack</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">        starStack</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">pop</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">      } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">else</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">        return</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> false</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">      }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  while</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">leftStack</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &amp;&amp; </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">starStack</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">leftStack</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">pop</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">() &gt; </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">starStack</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">pop</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">()) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">      return</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;"> false</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> !</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">leftStack</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="贪心" tabindex="-1">贪心 <a class="header-anchor" href="#贪心" aria-label="Permalink to &quot;贪心&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">/**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> s</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@return</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {boolean}</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> */</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">var</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> checkValidString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">s</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="动态规划" tabindex="-1">动态规划 <a class="header-anchor" href="#动态规划" aria-label="Permalink to &quot;动态规划&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">/**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> s</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@return</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {boolean}</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> */</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">var</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> checkValidString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">s</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,19);function g(i,c,y,C,b,o){return t(),n("div",null,[s("h1",k,[s("a",{class:"!no-underline",href:i.$frontmatter.url,target:"_blank"},l(i.$frontmatter.title),9,r),p(),D]),d])}const m=a(e,[["render",g]]);export{F as __pageData,m as default};