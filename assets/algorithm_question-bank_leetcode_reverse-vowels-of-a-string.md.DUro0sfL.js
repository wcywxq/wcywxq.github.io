import{_ as a,b as n,e as s,x as l,y as h,a8 as e,o as t}from"./chunks/framework.ZREswijJ.js";const F=JSON.parse('{"title":"No.345 反转字符串中的元音字母","description":"","frontmatter":{"title":"No.345 反转字符串中的元音字母","url":"https://leetcode.cn/problems/reverse-vowels-of-a-string"},"headers":[],"relativePath":"algorithm/question-bank/leetcode/reverse-vowels-of-a-string.md","filePath":"algorithm/question-bank/leetcode/reverse-vowels-of-a-string.md"}'),p={name:"algorithm/question-bank/leetcode/reverse-vowels-of-a-string.md"},k={id:"frontmatter-title",tabindex:"-1"},r=["href"],D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":`Permalink to "<a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>"`},"​",-1),d=e(`<p>给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。</p><p>元音字母包括 &#39;a&#39;、&#39;e&#39;、&#39;i&#39;、&#39;o&#39;、&#39;u&#39;，且可能以大小写两种形式出现不止一次。</p><p>示例 1：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：s = &quot;hello&quot;</span></span>
<span class="line"><span>输出：&quot;holle&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>示例 2：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：s = &quot;leetcode&quot;</span></span>
<span class="line"><span>输出：&quot;leotcede&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>提示：</p><ul><li>1 &lt;= s.length &lt;= 3 * 10^5</li><li>s 由 可打印的 ASCII 字符组成</li></ul><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="双指针" tabindex="-1">双指针 <a class="header-anchor" href="#双指针" aria-label="Permalink to &quot;双指针&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">/**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> s</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@return</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> */</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">var</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> reverseVowels</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">s</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> vowels</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;aeiouAEIOU&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> arr</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Array</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">from</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">s</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> l</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> r</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">s</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> - </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  while</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">l</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &lt; </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">r</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">    let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> lIndex</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">vowels</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">indexOf</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arr</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">l</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">]);</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">    let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> rIndex</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">vowels</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">indexOf</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arr</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">r</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">]);</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">lIndex</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> === -</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">      l</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">++;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">else</span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;"> if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">rIndex</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> === -</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">      r</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">--;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    } </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">else</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">      [</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arr</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">l</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">], </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arr</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">r</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">]] = [</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arr</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">r</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">], </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">arr</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">l</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">]];</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">      l</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">++;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">      r</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">--;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> arr</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">join</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,12);function g(i,y,o,c,C,b){return t(),n("div",null,[s("h1",k,[s("a",{class:"!no-underline",href:i.$frontmatter.url,target:"_blank"},l(i.$frontmatter.title),9,r),h(),D]),d])}const m=a(p,[["render",g]]);export{F as __pageData,m as default};