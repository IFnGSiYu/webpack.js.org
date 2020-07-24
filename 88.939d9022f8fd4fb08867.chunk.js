(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{384:function(n,a,s){"use strict";s.r(a),a.default='<p>首次设置复杂的 webpack 配置可能会很困难。并且编写高级配置来优化性能会更加困难。下面提供的 <code>init</code> 能力，可以让我们使用可自定义的第三方初始化包，来创建 webpack 配置。</p>\n<h2 id="creating-a-scaffold">创建脚手架 <a href="#creating-a-scaffold" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>在编写 <code>webpack-cli</code> 脚手架之前，请先考虑下要实现的目标和要使用的群体：</p>\n<ul>\n<li>是否需要实现一个可被多种应用程序和项目使用的通用脚手架？</li>\n<li>是否需要脚手架支持特定内容，例如同时编写 webpack.config.js 和框架代码的脚手架？</li>\n<li>谁是潜在的用户，脚手架用户将会有什么样的用户体验？</li>\n</ul>\n<p><code>webpack-cli</code> 提供了一种交互式体验，可以对应地自定义输出。例如，询问类似 "你的入口起点是什么？" 这样的问题。</p>\n<h3 id="writing-a-scaffold">编写脚手架 <a href="#writing-a-scaffold" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>如果你想要学习如何编写脚手架，这里有许多资源可以参考，可以阅读 <a href="/contribute/writing-a-scaffold/">编写脚手架</a> 教程作为开始。</p>\n<p><code>webpack-scaffold</code> 是用于创建脚手架的工具套件。它包含一些可用于创建脚手架的功能。</p>\n<h3 id="running-a-scaffold">执行脚手架 <a href="#running-a-scaffold" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>可以使用 <code>webpack-cli init</code> 执行脚手架：</p>\n<pre><code class="hljs language-bash">webpack-cli init <span class="token operator">&#x3C;</span>your-scaffold<span class="token operator">></span></code></pre>\n<h4 id="running-a-scaffold-locally">在本地运行脚手架 <a href="#running-a-scaffold-locally" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>当脚手架 package 位于本地文件系统中时，应将 <code>init</code> 指向其路径：</p>\n<pre><code class="hljs language-bash">webpack-cli init path/to/your/scaffold</code></pre>\n<p>或者，还可以创建一个全局模块并符号链接(symlink)到本地​​模块：</p>\n<ul>\n<li>使用 npm</li>\n</ul>\n<pre><code class="hljs language-bash"><span class="token function">cd</span> path/to/my-scaffold\n<span class="token function">npm</span> <span class="token function">link</span>\nwebpack-cli init my-scaffold</code></pre>\n<ul>\n<li>使用 yarn</li>\n</ul>\n<pre><code class="hljs language-bash"><span class="token function">cd</span> path/to/my-scaffold\nyarn <span class="token function">link</span>\nwebpack-cli init my-scaffold</code></pre>\n<h4 id="running-a-scaffold-from-npm">从 npm 运行脚手架 <a href="#running-a-scaffold-from-npm" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>如果可以从 npm 获得此 package，则其名称必须以 <code>webpack-scaffold</code> 开头，并且可以通过运行以下命令来使用：</p>\n<pre><code class="hljs language-bash">webpack-cli init webpack-scaffold-yourpackage</code></pre>\n<h2 id="api">API <a href="#api" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>要创建一个<code>脚手架</code>，必须创建一个 <a href="http://yeoman.io/authoring/"><code>yeoman-generator</code></a>。感谢它的存在，现在可以选择在它的基础上扩展出你自己的 generator，其中同样包括 Yeoman API 中提供的方法。值得注意的是，我们支持常规 webpack 配置的所有属性。为了实现这一点，需要记住一件事：</p>\n<blockquote class="warning">\n<p>使用字符串创建对象，而使用双字符串(double string)创建字符串。这意味着，为了创建一个字符串，你必须将其包装在另一个字符串中，以便我们正确验证它。</p>\n</blockquote>\n<h3 id="required">必选项 <a href="#required" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li><a href="#optsenvconfigurationrequired"><code>opts.env.configuration</code>(required)</a></li>\n<li><a href="#optsenvconfigurationmyobj-required"><code>opts.env.configuration.myObj</code> (required)</a></li>\n<li><a href="#myobjwebpackoptions-required"><code>myObj.webpackOptions</code> (required)</a></li>\n<li><a href="#writing-required"><code>writing</code> (required)</a></li>\n</ul>\n<h3 id="optional">可选项 <a href="#optional" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<ul>\n<li><a href="#myobjmerge-optional">myObj.merge</a></li>\n<li><a href="#myobjtopscopeoptional">myObj.topScope</a></li>\n<li><a href="#myobjconfignameoptional">myObj.configName</a></li>\n</ul>\n<h3 id="optsenvconfigurationrequired"><code>opts.env.configuration</code>（必选项） <a href="#optsenvconfigurationrequired" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>object</code></p>\n<p>这里是你配置的入口起点，请在 generator 的构造函数中对其进行初始化，以使 CLI 能够正常运行：</p>\n<pre><code class="hljs language-js"><span class="token keyword">class</span> <span class="token class-name">MyScaffold</span> <span class="token keyword">extends</span> <span class="token class-name">Generator</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>args<span class="token punctuation">,</span> opts<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>args<span class="token punctuation">,</span> opts<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    opts<span class="token punctuation">.</span>env<span class="token punctuation">.</span>configuration <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="optsenvconfigurationmyobj-required"><code>opts.env.configuration.myObj</code>（必选项） <a href="#optsenvconfigurationmyobj-required" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>object</code></p>\n<p>这里是你的脚手架，此处添加一些选项，CLI 会将其转换为 webpack 配置。你可以根据自己的喜好命名多种不同的脚手架，它们代表不同的配置，例如 <code>dev.config</code> 或 <code>prod.config</code>：</p>\n<pre><code class="hljs language-js"><span class="token keyword">class</span> <span class="token class-name">MyScaffold</span> <span class="token keyword">extends</span> <span class="token class-name">Generator</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>args<span class="token punctuation">,</span> opts<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>args<span class="token punctuation">,</span> opts<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    opts<span class="token punctuation">.</span>env<span class="token punctuation">.</span>configuration <span class="token operator">=</span> <span class="token punctuation">{</span>\n      dev<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n      prod<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="myobjwebpackoptions-required"><code>myObj.webpackOptions</code>（必选项） <a href="#myobjwebpackoptions-required" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>object</code></p>\n<p>该对象具有与常规 webpack <a href="/configuration/">配置</a> 相同的格式。在此处声明想要预置的属性，例如 <code>entry</code>, <code>output</code> 和 <code>context</code>。可以在 yeoman 方法中对此进行初始化：</p>\n<pre><code class="hljs language-js"><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>env<span class="token punctuation">.</span>configuration<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>webpackOptions <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'\\\'app.js\\\'\'</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="writing-required"><code>writing</code>（必选项） <a href="#writing-required" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>function</code></p>\n<p>为了运行脚手架实例，需要将配置写入一个 <code>.yo-rc.json</code> 文件。可以使用 yeoman generator 中提供的某个生命周期来完成，例如 <code>writing</code> 方法：</p>\n<pre><code class="hljs language-js"><span class="token keyword">class</span> <span class="token class-name">MyScaffold</span> <span class="token keyword">extends</span> <span class="token class-name">Generator</span> <span class="token punctuation">{</span>\n  <span class="token function">writing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token keyword">set</span><span class="token punctuation">(</span><span class="token string">\'configuration\'</span><span class="token punctuation">,</span> myObj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="myobjmerge-optional"><code>myObj.merge</code>（可选项） <a href="#myobjmerge-optional" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>string</code></p>\n<p>如果要使用 <a href="https://github.com/survivejs/webpack-merge"><code>webpack-merge</code></a>，可以将 <code>myObj</code> 的 <code>merge</code> 属性，设置为需要合并的配置的名称：</p>\n<pre><code class="hljs language-js"><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>env<span class="token punctuation">.</span>configuration<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>merge <span class="token operator">=</span> <span class="token string">\'myConfig\'</span><span class="token punctuation">;</span></code></pre>\n<h3 id="myobjtopscopeoptional"><code>myObj.topScope</code>（可选项）<a href="#myobjtopscopeoptional" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>[string]</code></p>\n<p>在 <code>topScope</code> 属性中，可以编写配置所需的所有代码，例如模块导入和函数/变量声明：</p>\n<pre><code class="hljs language-js"><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>env<span class="token punctuation">.</span>configuration<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>topScope <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">\'const webpack = require("webpack");\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'const path = require("path");\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span></code></pre>\n<h3 id="myobjconfignameoptional"><code>myObj.configName</code>（可选项） <a href="#myobjconfignameoptional" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>string</code></p>\n<p><code>configName</code> 允许自定义配置文件的名称。例如，可以将其命名为 <code>webpack.base.js</code>  而不是默认的 <code>webpack.config.js</code>：</p>\n<pre><code class="hljs language-js"><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>env<span class="token punctuation">.</span>configuration<span class="token punctuation">.</span>dev<span class="token punctuation">.</span>configName <span class="token operator">=</span> <span class="token string">\'base\'</span><span class="token punctuation">;</span></code></pre>\n'}}]);