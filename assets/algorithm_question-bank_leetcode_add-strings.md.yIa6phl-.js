import{_ as a,b as n,e as s,x as l,y as t,a8 as p,o as e}from"./chunks/framework.ZREswijJ.js";const C=JSON.parse('{"title":"No.415 字符串相加","description":"","frontmatter":{"title":"No.415 字符串相加","url":"https://leetcode.cn/problems/add-strings"},"headers":[],"relativePath":"algorithm/question-bank/leetcode/add-strings.md","filePath":"algorithm/question-bank/leetcode/add-strings.md"}'),h={name:"algorithm/question-bank/leetcode/add-strings.md"},k={id:"frontmatter-title",tabindex:"-1"},r=["href"],d=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":`Permalink to "<a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>"`},"​",-1),D=p(`<p>给定两个字符串形式的非负整数 num1 和 num2 ，计算它们的和并同样以字符串形式返回。</p><p>你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。</p><p>示例 1：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：num1 = &quot;11&quot;, num2 = &quot;123&quot;</span></span>
<span class="line"><span>输出：&quot;134&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>示例 2：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：num1 = &quot;456&quot;, num2 = &quot;77&quot;</span></span>
<span class="line"><span>输出：&quot;533&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>示例 3：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：num1 = &quot;0&quot;, num2 = &quot;0&quot;</span></span>
<span class="line"><span>输出：&quot;0&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>提示：</p><ul><li>1 &lt;= num1.length, num2.length &lt;= 10^4</li><li>num1 和 num2 都只包含数字 0-9</li><li>num1 和 num2 都不包含任何前导零</li></ul><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Number</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.MAX_VALUE; </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 1.7976931348623157e+308</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Number</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.MAX_SAFE_INTEGER; </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 9007199254740991</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Number</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.MIN_VALUE; </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// 5e-324</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Number</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.MIN_SAFE_INTEGER; </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">// -9007199254740991</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果想要对一个超大的整数 <code>&gt; Number.MAX_SAFE_INTEGER</code> 进行加法运算，但是又想要输出为一般形式，那么使用 + 是无法做到的，因为一旦数字超过 <code>Number.MAX_SAFE_INTEGER</code> 就会被转换为科学技术法，并且数字精度相比之前会有误差。</p><p>使用算法实现大数相加：</p><ul><li>首先，利用字符串的方式来保存大数，这样数字在数学表示上就不会发生变化；</li><li>第二步，初始化 res、temp 来保存中间的计算结果，并将两个字符串转化为数组，方便进行每一位的加法运算；</li><li>第三步，将两个数组的对应&quot;位&quot;进行相加，两个数相加的结果可能大于 10，所以可能要考虑&quot;进位&quot;，此时需要对 10 进行取余操作，将结果保存在当前位；</li><li>第四步，判断当前位是否大于 9，即判断是否会进位。如果是则将 temp 赋值为 true，因为在加法运算中，true 自动隐式转换为 1，方便下一次相加；</li><li>重复以上操作，直到计算出结果；</li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="大数相加" tabindex="-1">大数相加 <a class="header-anchor" href="#大数相加" aria-label="Permalink to &quot;大数相加&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">/**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> num1</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> num2</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@return</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {string}</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> */</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">var</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> addStrings</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">num1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">num2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> n1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">num1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">toString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">().</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">split</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> n2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">num2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">toString</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">().</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">split</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> res</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> temp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  while</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">n1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> || </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">n2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> || </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">temp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    temp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> += ~~</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">n1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">pop</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">() + ~~</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">n2</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">pop</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    res</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> += </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">temp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> % </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">10</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    temp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">temp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &gt; </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">9</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> res</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">split</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">).</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">reverse</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">().</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">join</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#A31515;--shiki-dark:#CE9178;">&quot;&quot;</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,18);function g(i,u,o,c,y,m){return e(),n("div",null,[s("h1",k,[s("a",{class:"!no-underline",href:i.$frontmatter.url,target:"_blank"},l(i.$frontmatter.title),9,r),t(),d]),D])}const F=a(h,[["render",g]]);export{C as __pageData,F as default};
