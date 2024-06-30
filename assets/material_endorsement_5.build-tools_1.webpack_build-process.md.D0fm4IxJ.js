import{_ as e,b as t,o,a8 as l}from"./chunks/framework.BEMRIPir.js";const g=JSON.parse('{"title":"构建流程","description":"","frontmatter":{"title":"构建流程"},"headers":[],"relativePath":"material/endorsement/5.build-tools/1.webpack/build-process.md","filePath":"material/endorsement/5.build-tools/1.webpack/build-process.md"}'),r={name:"material/endorsement/5.build-tools/1.webpack/build-process.md"},a=l('<h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><ol><li>初始化：启动构建，读取与合并配置参数，加载 plugin，实例化 Compiler（编译器）</li><li>编译：从 entry（入口文件）出发，针对每个模块串行调用对应的 loader 去翻译文件的内容，再找到该模块依赖的模块，递归的进行编译处理</li><li>输出：将编译后的模块组合成 chunk，将 chunk 转换成文件，输出到文件系统</li></ol><h2 id="完整流程" tabindex="-1">完整流程 <a class="header-anchor" href="#完整流程" aria-label="Permalink to &quot;完整流程&quot;">​</a></h2><p>webpack 的运行是一个串行的流程，webpack 会在执行串行流程的特定时间点广播出特定的事件，plugin 在监听到感兴趣的事件后会执行特定的逻辑，并且 plugin 可以调用 webpack 提供的 api 来改变 webpack 的运行结果。</p><p>从启动到结束依次会执行以下流程：</p><ul><li><strong>初始化参数</strong>：从配置文件和 shell 语句中读取与合并参数，得到最终的参数</li><li><strong>开始编译</strong>：用上一部得到的参数来初始化 Compiler 对象，加载所有配置插件，执行对象的 run 方法开始执行编译</li><li><strong>确定入口</strong>：根据配置中的 entry 找到所有的入口文件</li><li><strong>编译模块</strong>：从入口文件触发，调用所有配置的 Loader 对模块进行编译，再找出该模块依赖的模块，之后递归执行本步骤直到所有入口依赖的文件都经过本步骤的处理</li><li><strong>完成模块编译</strong>：经过上一步之后，使用 Loader 编译完所有模块后，<strong>得到了每个模块编译后的最终内容以及他们之间的依赖关系 - 依赖图</strong></li><li><strong>输出资源</strong>：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 chunk，再把每个 chunk 转换成一个单独的文件加入到输出列表，这一步是可以修改输出内容的最后机会</li><li><strong>输出完成</strong>：在确定好输入内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统</li></ul>',6),i=[a];function n(s,c,d,p,_,u){return o(),t("div",null,i)}const b=e(r,[["render",n]]);export{g as __pageData,b as default};
