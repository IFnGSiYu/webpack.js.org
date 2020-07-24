(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{374:function(n,s,a){"use strict";a.r(s),s.default='<p>webpack 用于编译 JavaScript 模块。一旦完成 <a href="/guides/installation">安装</a>，你就可以通过 webpack <a href="/api/cli">CLI</a> 或 <a href="/api/node">API</a> 与其配合交互。如果你还不熟悉 webpack，请阅读 <a href="/concepts">核心概念</a> 和 <a href="/comparison">对比</a>，了解为什么要使用 webpack，而不是社区中的其他工具。</p>\n<blockquote class="warning">\n<p>从 webpack v5.0.0-beta.1 开始，需要运行的 Node.js 最低版本是 10.13.0 (LTS)</p>\n</blockquote>\n<h2 id="basic-setup">基本安装 <a href="#basic-setup" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>首先我们创建一个目录，初始化 npm，然后 <a href="/guides/installation#local-installation">在本地安装 webpack</a>，接着安装 webpack-cli（此工具用于在命令行中运行 webpack）：</p>\n<pre><code class="hljs language-bash"><span class="token function">mkdir</span> webpack-demo\n<span class="token function">cd</span> webpack-demo\n<span class="token function">npm</span> init -y\n<span class="token function">npm</span> <span class="token function">install</span> webpack webpack-cli --save-dev</code></pre>\n<blockquote class="tip">\n<p>贯穿整个指南的是，我们将使用 <code>diff</code> 块，来展示对目录、文件和代码所做的修改。</p>\n</blockquote>\n<p>现在，我们将创建以下目录结构、文件和内容：</p>\n<p><strong>project</strong></p>\n<pre><code class="hljs language-diff">  webpack-demo\n  |- package.json\n<span class="token inserted">+ |- index.html</span>\n<span class="token inserted">+ |- /src</span>\n<span class="token inserted">+   |- index.js</span></code></pre>\n<p><strong>src/index.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">function</span> <span class="token function">component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// lodash（目前通过一个 script 引入）对于执行这一行是必需的</span>\n  element<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'Hello\'</span><span class="token punctuation">,</span> <span class="token string">\'webpack\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> element<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\ndocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p><strong>index.html</strong></p>\n<pre><code class="hljs language-html"><span class="token doctype">&#x3C;!doctype html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>title</span><span class="token punctuation">></span></span>起步<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/lodash@4.16.6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>./src/index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>html</span><span class="token punctuation">></span></span></code></pre>\n<p>我们还需要调整 <code>package.json</code> 文件，以便确保我们安装包是 <code>private(私有的)</code>，并且移除 <code>main</code> 入口。这可以防止意外发布你的代码。</p>\n<blockquote class="tip">\n<p>如果你想要了解 <code>package.json</code> 内在机制的更多信息，我们推荐阅读 <a href="https://docs.npmjs.com/files/package.json">npm 文档</a>。</p>\n</blockquote>\n<p><strong>package.json</strong></p>\n<pre><code class="hljs language-diff">  {\n    "name": "webpack-demo",\n    "version": "1.0.0",\n    "description": "",\n<span class="token inserted">+   "private": true,</span>\n<span class="token deleted">-   "main": "index.js",</span>\n    "scripts": {\n      "test": "echo \\"Error: no test specified\\" &#x26;&#x26; exit 1"\n    },\n    "keywords": [],\n    "author": "",\n    "license": "ISC",\n    "devDependencies": {\n      "webpack": "^4.20.2",\n      "webpack-cli": "^3.1.2"\n    },\n    "dependencies": {}\n  }</code></pre>\n<p>在此示例中，<code>&#x3C;script></code> 标签之间存在隐式依赖关系。在 <code>index.js</code> 文件执行之前，还需要在页面中先引入 <code>lodash</code>。这是因为 <code>index.js</code> 并未显式声明它需要 <code>lodash</code>，只是假定推测已经存在一个全局变量 <code>_</code>。</p>\n<p>使用这种方式去管理 JavaScript 项目会有一些问题：</p>\n<ul>\n<li>无法直接体现，脚本的执行依赖于外部库。</li>\n<li>如果依赖不存在，或者引入顺序错误，应用程序将无法正常运行。</li>\n<li>如果依赖被引入但是并没有使用，浏览器将被迫下载无用代码。</li>\n</ul>\n<p>让我们使用 webpack 来管理这些脚本。</p>\n<h2 id="creating-a-bundle">创建一个 bundle <a href="#creating-a-bundle" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>首先，我们稍微调整下目录结构，创建分发代码(<code>/dist</code>)文件夹用于存放分发代码，源代码(<code>/src</code>)文件夹仍存放源代码。源代码是指用于书写和编辑的代码。分发代码是指在构建过程中，经过最小化和优化后产生的输出结果，最终将在浏览器中加载。调整后目录结构如下：</p>\n<p><strong>project</strong></p>\n<pre><code class="hljs language-diff">  webpack-demo\n  |- package.json\n<span class="token inserted">+ |- /dist</span>\n<span class="token inserted">+   |- index.html</span>\n<span class="token deleted">- |- index.html</span>\n  |- /src\n    |- index.js</code></pre>\n<p>要在 <code>index.js</code> 中打包 <code>lodash</code> 依赖，我们需要在本地安装 library：</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save lodash</code></pre>\n<blockquote class="tip">\n<p>在安装一个 package，而此 package 要打包到生产环境 bundle 中时，你应该使用 <code>npm install --save</code>。如果你在安装一个用于开发环境的 package 时（例如，linter, 测试库等），你应该使用 <code>npm install --save-dev</code>。更多信息请查看 <a href="https://docs.npmjs.com/cli/install">npm 文档</a>。</p>\n</blockquote>\n<p>现在，在我们的 script 中 import <code>lodash</code>：</p>\n<p><strong>src/index.js</strong></p>\n<pre><code class="hljs language-diff"><span class="token inserted">+ import _ from \'lodash\';</span>\n<span class="token inserted">+</span>\n  function component() {\n    const element = document.createElement(\'div\');\n\n<span class="token deleted">-   // lodash（目前通过一个 script 引入）对于执行这一行是必需的</span>\n<span class="token inserted">+   // lodash，现在通过一个 script 引入</span>\n    element.innerHTML = _.join([\'Hello\', \'webpack\'], \' \');\n\n    return element;\n  }\n\n  document.body.appendChild(component());</code></pre>\n<p>现在，我们将会打包所有脚本，我们必须更新 <code>index.html</code> 文件。由于现在是通过 <code>import</code> 引入 lodash，所以要将 lodash <code>&#x3C;script></code> 删除，然后修改另一个 <code>&#x3C;script></code> 标签来加载 bundle，而不是原始的 <code>/src</code> 文件：</p>\n<p><strong>dist/index.html</strong></p>\n<pre><code class="hljs language-diff">  &#x3C;!doctype html>\n  &#x3C;html>\n   &#x3C;head>\n     &#x3C;title>起步&#x3C;/title>\n<span class="token deleted">-    &#x3C;script src="https://unpkg.com/lodash@4.16.6">&#x3C;/script></span>\n   &#x3C;/head>\n   &#x3C;body>\n<span class="token deleted">-    &#x3C;script src="./src/index.js">&#x3C;/script></span>\n<span class="token inserted">+    &#x3C;script src="main.js">&#x3C;/script></span>\n   &#x3C;/body>\n  &#x3C;/html></code></pre>\n<p>在这个设置中，<code>index.js</code> 显式要求引入的 <code>lodash</code> 必须存在，然后将它绑定为 <code>_</code>（没有全局作用域污染）。通过声明模块所需的依赖，webpack 能够利用这些信息去构建依赖图，然后使用图生成一个优化过的 bundle，并且会以正确顺序执行。</p>\n<p>可以这样说，执行 <code>npx webpack</code>，会将我们的脚本 <code>src/index.js</code> 作为 <a href="/concepts/entry-points">入口起点</a>，也会生成 <code>dist/main.js</code> 作为 <a href="/concepts/output">输出</a>。Node 8.2/npm 5.2.0 以上版本提供的 <code>npx</code> 命令，可以运行在初次安装的 webpack package 中的 webpack 二进制文件（即 <code>./node_modules/.bin/webpack</code>）：</p>\n<pre><code class="hljs language-bash">npx webpack\n\n<span class="token punctuation">..</span>.\nBuilt at: 13/06/2018 11:52:07\n  Asset      Size  Chunks             Chunk Names\nmain.js  70.4 KiB       0  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  main\n<span class="token punctuation">..</span>.\n\nWARNING <span class="token keyword">in</span> configuration <span class="token punctuation">(</span>配置警告<span class="token punctuation">)</span>\nThe <span class="token string">\'mode\'</span> option has not been set, webpack will fallback to <span class="token string">\'production\'</span> <span class="token keyword">for</span> this value. Set <span class="token string">\'mode\'</span> option to <span class="token string">\'development\'</span> or <span class="token string">\'production\'</span> to <span class="token function">enable</span> defaults <span class="token keyword">for</span> each environment. <span class="token punctuation">(</span><span class="token string">\'mode\'</span> 选项还未设置，webpack 会将其值回退至 <span class="token string">\'production\'</span>。将 <span class="token string">\'mode\'</span> 选项设置为 <span class="token string">\'development\'</span> 或 <span class="token string">\'production\'</span>，来启用对应环境的默认优化设置<span class="token punctuation">)</span>\nYou can also <span class="token keyword">set</span> it to <span class="token string">\'none\'</span> to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/ <span class="token punctuation">(</span>也可以将其设置为 <span class="token string">\'none\'</span>，以禁用所有默认行为。了解更多 https://webpack.js.org/configuration/mode/<span class="token punctuation">)</span></code></pre>\n<blockquote class="tip">\n<p>输出可能会稍有不同，但是只要构建成功，那么你就可以放心继续。并且不要担心警告，稍后我们就会解决。</p>\n</blockquote>\n<p>在浏览器中打开 <code>index.html</code>，如果一切正常，你应该能看到以下文本：\'Hello webpack\'。</p>\n<blockquote class="warning">\n<p>在浏览器中打开 <code>index.html</code>，如果在压缩过后的 JavaScript 中出现语法错误，请设置 <a href="/configuration/mode/#mode-development"><code>development 模式</code></a>，并再次运行 <code>npx webpack</code>。这与最新版本 Node.js (v12.5+) 上运行 <code>npx webpack</code> 有关，和 <a href="https://nodejs.org/en/">LTS 版本</a> 无关。</p>\n</blockquote>\n<h2 id="modules">模块 <a href="#modules" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://babeljs.io/learn-es2015/">ES2015</a> 中的 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"><code>import</code></a> 和 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"><code>export</code></a> 语句已经被标准化。虽然大多数浏览器还无法支持它们，但是 webpack 却能够提供开箱即用般的支持。</p>\n<p>事实上，webpack 在幕后会将代码“转译”，以便旧版本浏览器可以执行。如果你检查 <code>dist/main.js</code>，你可以看到 webpack 具体如何实现，这是独创精巧的设计！除了 <code>import</code> 和 <code>export</code>，webpack 还能够很好地支持多种其他模块语法，更多信息请查看 <a href="/api/module-methods">模块 API</a>。</p>\n<p>注意，webpack 不会更改代码中除 <code>import</code> 和 <code>export</code> 语句以外的部分。如果你在使用其它 <a href="http://es6-features.org/">ES2015 特性</a>，请确保你在 webpack <a href="/concepts/loaders/">loader 系统</a> 中使用了一个像是 <a href="https://babel.docschina.org/">Babel</a> 或 <a href="https://buble.surge.sh/guide/">Bublé</a> 的 <a href="/loaders/#transpiling">transpiler(转译器)</a>。</p>\n<h2 id="using-a-configuration">使用一个配置文件 <a href="#using-a-configuration" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>在 webpack v4 中，可以无须任何配置，然而大多数项目会需要很复杂的设置，这就是为什么 webpack 仍然要支持 <a href="/concepts/configuration">配置文件</a>。这比在 terminal(终端) 中手动输入大量命令要高效的多，所以让我们创建一个配置文件：</p>\n<p><strong>project</strong></p>\n<pre><code class="hljs language-diff">  webpack-demo\n  |- package.json\n<span class="token inserted">+ |- webpack.config.js</span>\n  |- /dist\n    |- index.html\n  |- /src\n    |- index.js</code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'./src/index.js\'</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'main.js\'</span><span class="token punctuation">,</span>\n    path<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>现在，让我们通过新的配置文件再次执行构建：</p>\n<pre><code class="hljs language-bash">npx webpack --config webpack.config.js\n\n<span class="token punctuation">..</span>.\n  Asset      Size  Chunks             Chunk Names\nmain.js  70.4 KiB       0  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  main\n<span class="token punctuation">..</span>.\n\nWARNING <span class="token keyword">in</span> configuration <span class="token punctuation">(</span>配置警告<span class="token punctuation">)</span>\nThe <span class="token string">\'mode\'</span> option has not been set, webpack will fallback to <span class="token string">\'production\'</span> <span class="token keyword">for</span> this value. Set <span class="token string">\'mode\'</span> option to <span class="token string">\'development\'</span> or <span class="token string">\'production\'</span> to <span class="token function">enable</span> defaults <span class="token keyword">for</span> each environment. <span class="token punctuation">(</span><span class="token string">\'mode\'</span> 选项还未设置，webpack 会将其值回退至 <span class="token string">\'production\'</span>。将 <span class="token string">\'mode\'</span> 选项设置为 <span class="token string">\'development\'</span> 或 <span class="token string">\'production\'</span>，来启用对应环境的默认优化设置<span class="token punctuation">)</span>\nYou can also <span class="token keyword">set</span> it to <span class="token string">\'none\'</span> to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/ <span class="token punctuation">(</span>也可以将其设置为 <span class="token string">\'none\'</span>，以禁用所有默认行为。了解更多 https://webpack.js.org/configuration/mode/<span class="token punctuation">)</span></code></pre>\n<blockquote class="tip">\n<p>如果 <code>webpack.config.js</code> 存在，则 <code>webpack</code> 命令将默认选择使用它。我们在这里使用 <code>--config</code> 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用的。</p>\n</blockquote>\n<p>比起 CLI 这种简单直接的使用方式，配置文件具有更多的灵活性。我们可以通过配置方式指定 loader 规则(loader rule)、plugin(插件)、resolve 选项，以及许多其他增强功能。更多详细信息请查看 <a href="/configuration">配置文档</a>。</p>\n<h2 id="npm-scripts">npm scripts <a href="#npm-scripts" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>考虑到用 CLI 这种方式来运行本地的 webpack 副本并不是特别方便，我们可以设置一个快捷方式。调整 <em>package.json</em> 文件，添加一个 <a href="https://docs.npmjs.com/misc/scripts">npm script</a>：</p>\n<p><strong>package.json</strong></p>\n<pre><code class="hljs language-diff">  {\n    "name": "webpack-demo",\n    "version": "1.0.0",\n    "description": "",\n    "scripts": {\n<span class="token deleted">-      "test": "echo \\"Error: no test specified\\" &#x26;&#x26; exit 1"</span>\n<span class="token inserted">+      "test": "echo \\"Error: no test specified\\" &#x26;&#x26; exit 1",</span>\n<span class="token inserted">+      "build": "webpack"</span>\n    },\n    "keywords": [],\n    "author": "",\n    "license": "ISC",\n    "devDependencies": {\n      "webpack": "^4.20.2",\n      "webpack-cli": "^3.1.2"\n    },\n    "dependencies": {\n      "lodash": "^4.17.5"\n    }\n  }</code></pre>\n<p>现在，可以使用 <code>npm run build</code> 命令，来替代我们之前使用的 <code>npx</code> 命令。注意，使用 npm <code>scripts</code>，我们可以像使用 <code>npx</code> 那样通过模块名引用本地安装的 npm packages。这是大多数基于 npm 的项目遵循的标准，因为它允许所有贡献者使用同一组通用脚本（如果必要，每个命令都需要添加 <code>--config</code> flag）。</p>\n<p>现在运行以下命令，然后看看你的脚本别名是否正常运行：</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> run build\n\n<span class="token punctuation">..</span>.\n  Asset      Size  Chunks             Chunk Names\nmain.js  70.4 KiB       0  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  main\n<span class="token punctuation">..</span>.\n\nWARNING <span class="token keyword">in</span> configuration <span class="token punctuation">(</span>配置警告<span class="token punctuation">)</span>\nThe <span class="token string">\'mode\'</span> option has not been set, webpack will fallback to <span class="token string">\'production\'</span> <span class="token keyword">for</span> this value. Set <span class="token string">\'mode\'</span> option to <span class="token string">\'development\'</span> or <span class="token string">\'production\'</span> to <span class="token function">enable</span> defaults <span class="token keyword">for</span> each environment. <span class="token punctuation">(</span><span class="token string">\'mode\'</span> 选项还未设置，webpack 会将其值回退至 <span class="token string">\'production\'</span>。将 <span class="token string">\'mode\'</span> 选项设置为 <span class="token string">\'development\'</span> 或 <span class="token string">\'production\'</span>，来启用对应环境的默认优化设置<span class="token punctuation">)</span>\nYou can also <span class="token keyword">set</span> it to <span class="token string">\'none\'</span> to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/ <span class="token punctuation">(</span>也可以将其设置为 <span class="token string">\'none\'</span>，以禁用所有默认行为。了解更多 https://webpack.js.org/configuration/mode/<span class="token punctuation">)</span></code></pre>\n<blockquote class="tip">\n<p>通过在 <code>npm run build</code> 命令和你的参数之间添加两个中横线，可以将自定义参数传递给 webpack，例如：<code>npm run build -- --colors</code>。</p>\n</blockquote>\n<h2 id="conclusion">结论 <a href="#conclusion" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>现在，你已经有了一个基础构建配置，你应该移至下一章节 <a href="/guides/asset-management"><code>资源管理</code></a> 指南，以了解如何通过 webpack 来管理资源，例如 images、fonts。此刻你的项目看起来应该如下：</p>\n<p><strong>project</strong></p>\n<pre><code class="hljs language-diff">webpack-demo\n|- package.json\n|- webpack.config.js\n|- /dist\n  |- main.js\n  |- index.html\n|- /src\n  |- index.js\n|- /node_modules</code></pre>\n<blockquote class="tip">\n<p>如果你使用的是 npm 5，你可能还会在目录中看到一个 <code>package-lock.json</code> 文件。</p>\n</blockquote>\n<p>如果想要了解 webpack 设计思想，你应该看下 <a href="/concepts">基本概念</a> 和 <a href="/configuration">配置</a> 页面。此外，<a href="/api">API</a> 章节可以深入了解 webpack 提供的各种接口。</p>\n'}}]);