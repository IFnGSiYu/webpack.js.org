(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{411:function(n,a,s){"use strict";s.r(a),a.default='<p><a href="https://npmjs.com/package/source-map-loader"><img src="https://img.shields.io/npm/v/source-map-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/source-map-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/source-map-loader"><img src="https://david-dm.org/webpack-contrib/source-map-loader.svg" alt="deps"></a>\n<a href="https://github.com/webpack-contrib/source-map-loader/actions"><img src="https://github.com/webpack-contrib/source-map-loader/workflows/source-map-loader/badge.svg" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/source-map-loader"><img src="https://codecov.io/gh/webpack-contrib/source-map-loader/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://badges.gitter.im/webpack/webpack.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=source-map-loader"><img src="https://packagephobia.now.sh/badge?p=source-map-loader" alt="size"></a></p>\n<p>从现有的源文件中提取 source maps（从 <code>sourceMappingURL</code> 中提取）。</p>\n<h2 id="getting-started">起步 <a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>安装 <code>source-map-loader</code>：</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> i -D source-map-loader</code></pre>\n<p>添加 plugin 至 <code>webpack</code> 配置。例：</p>\n<p><strong>file.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> css <span class="token keyword">from</span> <span class="token string">\'file.css\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        enforce<span class="token punctuation">:</span> <span class="token string">\'pre\'</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'source-map-loader\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><code>source-map-loader</code> 从 JavaScript 入口提取现有的 source maps.\n这些 source maps 既可以是内联的也可以是通过 URL 链接引入的。\n所有的 source map 数据都按照选定的 <a href="/configuration/devtool/">source map style</a> 交给 webpack 处理，这些选定可以在 <a href="/configuration/">webpack.config.js</a> 的 <code>devtool</code> 选项中配置。\n在使用有自己 source maps 的第三方库时，<code>source-map-loader</code> 就显得尤为重要。\n如果相关 source map 数据没有按照规范提取、处理并注入 webpack bundle, 浏览器有可能无法正确解读这些数据。<code>source-map-loader</code> 允许 webpack 跨库且持续的维护 source map 数据，因而更易于调试。\n<code>source-map-loader</code> 可以从任何 JavaScript 文件中提取，这也包括 <code>node_modules</code> 目录下的 JavaScript 文件。\n在设置 <a href="/configuration/module/#ruleinclude">include</a> 和 <a href="/configuration/module/#ruleexclude">exclude</a> 规则时，要保证构建性能最优。</p>\n<p>最后按偏好运行 <code>webpack</code> 方法。</p>\n<h2 id="examples">示例 <a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="ignoring-warnings">忽略警告 <a href="#ignoring-warnings" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>忽略警告可以使用以下配置：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        enforce<span class="token punctuation">:</span> <span class="token string">\'pre\'</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'source-map-loader\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  stats<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    warningsFilter<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token operator">/</span>Failed to parse source map<span class="token operator">/</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>有关 <code>warningsFilters</code> 选项的详细信息请<a href="/configuration/stats/#statswarningsfilter">参阅</a>；</p>\n<h2 id="contributing">贡献 <a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>如果您尚未了解，建议您阅读以下贡献指引。</p>\n<p><a href="https://github.com/webpack-contrib/source-map-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p>\n<h2 id="license">许可 <a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/source-map-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);