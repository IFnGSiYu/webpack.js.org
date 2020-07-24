(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{440:function(n,e,a){"use strict";a.r(e),e.default='<p>webpack 的 i18n（本地化）插件</p>\n<h2 id="install">安装 <a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> i -D i18n-webpack-plugin</code></pre>\n<h2 id="usage">使用 <a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>该插件会在 bundle 的生成过程中进行文案翻译，因此你可以直接将翻译后的 bundle 交付给用户。</p>\n<p>具体示例可见 <a href="https://github.com/webpack/webpack/tree/master/examples/i18n">webpack/webpack/examples/i18n</a>.</p>\n<h2 id="options">插件配置 <a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code>plugins: [\n  ...\n  new I18nPlugin(languageConfig, optionsObj)\n],\n</code></pre>\n<ul>\n<li><code>optionsObj.functionName</code>: 默认值为 <code>__</code>，你可以将其修改为其他函数名。</li>\n<li><code>optionsObj.failOnMissing</code>：默认值为 <code>false</code>，如果要翻译的文本缺失，插件会展示警告信息。若设置为 <code>true</code>，在上述情况下插件将会抛出错误信息。</li>\n<li><code>optionsObj.hideMessage</code>：默认值为 <code>false</code>，插件可以展示警告/报错信息. 若设置为 <code>true</code>，插件将会隐藏相关的警告或报错信息。</li>\n<li><code>optionsObj.nested</code>：默认值为 <code>false</code>。如果设置为 <code>true</code>，<code>languageConfig</code> 中键值的编写可以嵌套。该选项当且仅当参数 <code>languageConfig</code> 的类型不是一个函数时才能生效.</li>\n</ul>\n<h2 id="maintainers">维护者 <a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/166921?v=3&s=150">\n        </br>\n        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars2.githubusercontent.com/u/8420490?v=3&s=150">\n        </br>\n        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/533616?v=3&s=150">\n        </br>\n        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/3408176?v=3&s=150">\n        </br>\n        <a href="https://github.com/TheLarkInn">Sean Larkin</a>\n      </td>\n    </tr>\n  <tbody>\n</table>\n'}}]);