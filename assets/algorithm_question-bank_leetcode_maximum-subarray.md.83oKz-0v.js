import{_ as a,b as n,e as s,x as l,y as e,a8 as p,o as t}from"./chunks/framework.ZREswijJ.js";const C=JSON.parse('{"title":"No.53 最大子序和","description":"","frontmatter":{"title":"No.53 最大子序和","url":"https://leetcode.cn/problems/maximum-subarray"},"headers":[],"relativePath":"algorithm/question-bank/leetcode/maximum-subarray.md","filePath":"algorithm/question-bank/leetcode/maximum-subarray.md"}'),h={name:"algorithm/question-bank/leetcode/maximum-subarray.md"},k={id:"frontmatter-title",tabindex:"-1"},r=["href"],d=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":`Permalink to "<a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>"`},"​",-1),D=p(`<p>给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</p><p>子数组 是数组中的一个连续部分。</p><p>示例 1：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：nums = [-2,1,-3,4,-1,2,1,-5,4]</span></span>
<span class="line"><span>输出：6</span></span>
<span class="line"><span>解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>示例 2：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：nums = [1]</span></span>
<span class="line"><span>输出：1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>示例 3：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：nums = [5,4,-1,7,8]</span></span>
<span class="line"><span>输出：23</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>提示：</p><ul><li>1 &lt;= nums.length &lt;= 105</li><li>-104 &lt;= nums[i] &lt;= 104</li></ul><p>进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。</p><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="动态规划" tabindex="-1">动态规划 <a class="header-anchor" href="#动态规划" aria-label="Permalink to &quot;动态规划&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">/**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {number[]}</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> nums</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@return</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {number}</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> */</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">var</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> maxSubArray</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">nums</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> dp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = [];</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">  dp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">] = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">nums</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">];</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> res</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">dp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">];</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  for</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">; </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &lt; </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">nums</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">; </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">++) {</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    dp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">] = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Math</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">max</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">dp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> - </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">] + </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">nums</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">], </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">nums</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">]);</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    res</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">Math</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">max</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">res</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">dp</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">]);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> res</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,15);function g(i,c,y,o,u,m){return t(),n("div",null,[s("h1",k,[s("a",{class:"!no-underline",href:i.$frontmatter.url,target:"_blank"},l(i.$frontmatter.title),9,r),e(),d]),D])}const F=a(h,[["render",g]]);export{C as __pageData,F as default};
