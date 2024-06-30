import{_ as a,b as n,e as s,x as l,y as e,a8 as t,o as h}from"./chunks/framework.BEMRIPir.js";const F=JSON.parse('{"title":"No.102 二叉树的层序遍历","description":"","frontmatter":{"title":"No.102 二叉树的层序遍历","url":"https://leetcode.cn/problems/binary-tree-level-order-traversal"},"headers":[],"relativePath":"algorithm/question-bank/leetcode/binary-tree-level-order-traversal.md","filePath":"algorithm/question-bank/leetcode/binary-tree-level-order-traversal.md"}'),p={name:"algorithm/question-bank/leetcode/binary-tree-level-order-traversal.md"},k={id:"frontmatter-title",tabindex:"-1"},r=["href"],d=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":`Permalink to "<a class='!no-underline' :href="$frontmatter.url" target="_blank">{{ $frontmatter.title }}</a>"`},"​",-1),D=t(`<p>给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。</p><p>示例 1：</p><p><img src="https://raw.githubusercontent.com/wcywxq/image-store/master/ssg/code_leetcode_No.102_sample_1.png" alt="sample_1"></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：root = [3,9,20,null,null,15,7]</span></span>
<span class="line"><span>输出：[[3],[9,20],[15,7]]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>示例 2：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：root = [1]</span></span>
<span class="line"><span>输出：[[1]]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>示例 3：</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span>输入：root = []</span></span>
<span class="line"><span>输出：[]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>提示：</p><ul><li>树中节点数目在范围 [0, 2000] 内</li><li>-1000 &lt;= Node.val &lt;= 1000</li></ul><h2 id="解题思路" tabindex="-1">解题思路 <a class="header-anchor" href="#解题思路" aria-label="Permalink to &quot;解题思路&quot;">​</a></h2><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="深度优先搜索-bfs" tabindex="-1">深度优先搜索 - bfs <a class="header-anchor" href="#深度优先搜索-bfs" aria-label="Permalink to &quot;深度优先搜索 - bfs&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes light-plus dark-plus vp-code" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;" tabindex="0"><code><span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;">/**</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@param</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {TreeNode}</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> root</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> * </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">@return</span><span style="--shiki-light:#267F99;--shiki-dark:#4EC9B0;"> {number[][]}</span></span>
<span class="line"><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"> */</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">var</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;"> levelOrder</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">root</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (!</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">root</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">return</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> [];</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> res</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = [];</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">  let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> queue</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = [</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">root</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">];</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  while</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">queue</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">    let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> len</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">queue</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">length</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">    let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> level</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = [];</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">    for</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#098658;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">; </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> &lt; </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">len</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">; </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">i</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">++) {</span></span>
<span class="line"><span style="--shiki-light:#0000FF;--shiki-dark:#569CD6;">      let</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> node</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> = </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">queue</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">shift</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">();</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">      level</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">push</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">node</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">val</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">      if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">node</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">left</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">queue</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">push</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">node</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">left</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">      if</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">node</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">right</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">queue</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">push</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">node</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">right</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">    res</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">.</span><span style="--shiki-light:#795E26;--shiki-dark:#DCDCAA;">push</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;">level</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">);</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">  }</span></span>
<span class="line"><span style="--shiki-light:#AF00DB;--shiki-dark:#C586C0;">  return</span><span style="--shiki-light:#001080;--shiki-dark:#9CDCFE;"> res</span><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,14);function g(i,o,y,c,C,b){return h(),n("div",null,[s("h1",k,[s("a",{class:"!no-underline",href:i.$frontmatter.url,target:"_blank"},l(i.$frontmatter.title),9,r),e(),d]),D])}const m=a(p,[["render",g]]);export{F as __pageData,m as default};