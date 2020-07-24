(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{452:function(n,e,s){"use strict";s.r(e),e.default='<p><code>object = { boolean activeModules = true, boolean entries = false, function (number percentage, string message, [string] ...args) handler, boolean modules = true, number modulesCount = 500, boolean profile = false }</code></p>\n<p><code>function (number percentage, string message, [string] ...args)</code></p>\n<p>The <code>ProgressPlugin</code> provides a way to customize how progress is reported during a compilation.</p>\n<h2 id="usage">Usage <a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Create an instance of <code>ProgressPlugin</code> and provide one of the allowed params.</p>\n<h3 id="providing-function">Providing <code>function</code> <a href="#providing-function" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Provide a handler function which will be called when hooks report progress. <code>handler</code> function arguments:</p>\n<ul>\n<li><code>percentage</code>: a number between 0 and 1 indicating the completion percentage of the compilation</li>\n<li><code>message</code>: a short description of the currently-executing hook</li>\n<li><code>...args</code>: zero or more additional strings describing the current progress</li>\n</ul>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>percentage<span class="token punctuation">,</span> message<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// e.g. Output each progress message directly to the console:</span>\n  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>percentage<span class="token punctuation">,</span> message<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProgressPlugin</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="providing-object">Providing <code>object</code> <a href="#providing-object" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>When providing an <code>object</code> to the <code>ProgressPlugin</code>, following properties are supported:</p>\n<ul>\n<li><code>activeModules</code> (<code>boolean = false</code>): Shows active modules count and one active module in progress message.</li>\n<li><code>entries</code> (<code>boolean = true</code>): Shows entries count in progress message.</li>\n<li><code>handler</code> (See <a href="#providing-function">Providing function</a>)</li>\n<li><code>modules</code> (<code>boolean = true</code>): Shows modules count in progress message.</li>\n<li><code>modulesCount</code> (<code>number = 5000</code>): A minimum modules count to start with. Takes effect when <code>modules</code> property is enabled.</li>\n<li><code>profile</code> (<code>boolean = false</code>): Tells <code>ProgressPlugin</code> to collect profile data for progress steps.</li>\n<li><code>dependencies</code> (<code>boolean = true</code>): Shows the count of dependencies in progress message.</li>\n<li><code>dependenciesCount</code> (<code>number = 10000</code>): A minimum dependencies count to start with. Takes effect when <code>dependencies</code> property is enabled.</li>\n<li><code>percentBy</code> (<code>string = null: \'entries\' | \'dependencies\' | \'modules\' | null</code>): Tells <code>ProgressPlugin</code> how to calculate progress percentage.</li>\n</ul>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProgressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  activeModules<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  entries<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token function">handler</span><span class="token punctuation">(</span>percentage<span class="token punctuation">,</span> message<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// custom logic</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  modules<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  modulesCount<span class="token punctuation">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>\n  profile<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  dependencies<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  dependenciesCount<span class="token punctuation">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>\n  percentBy<span class="token punctuation">:</span> <span class="token keyword">null</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="percentage-calculation">Percentage calculation <a href="#percentage-calculation" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>By default, progress percentage is calculated based on built modules count and total modules count: <code>built / total</code></p>\n<p>The total modules count is unknown in advance and changes during the build. This may cause inaccurate progress percentage.</p>\n<p>To solve this problem <code>ProgressPlugin</code> caches the last known total modules count and reuses this value on the next build. The first build will warm the cache but the following builds will use and update this value.</p>\n<blockquote>\n<p>We recommend using <code>percentBy: \'entries\'</code> setting for projects with <a href="/configuration/entry-context/#entry">multiple configured entry points</a>. Percentage calculation will become more accurate because the amount of entry points is known in advance.</p>\n</blockquote>\n<h2 id="supported-hooks">Supported Hooks <a href="#supported-hooks" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The following hooks report progress information to <code>ProgressPlugin</code>.</p>\n<blockquote class="tip">\n<p><em>Hooks marked with * allow plugins to report progress information using <code>reportProgress</code>. For more, see <a href="/api/plugins/#reporting-progress">Plugin API: Reporting Progress</a></em></p>\n</blockquote>\n<p><strong>Compiler</strong></p>\n<ul>\n<li>compilation</li>\n<li>emit*</li>\n<li>afterEmit*</li>\n<li>done</li>\n</ul>\n<p><strong>Compilation</strong></p>\n<ul>\n<li>buildModule</li>\n<li>failedModule</li>\n<li>succeedModule</li>\n<li>finishModules*</li>\n<li>seal*</li>\n<li>optimizeDependenciesBasic*</li>\n<li>optimizeDependencies*</li>\n<li>optimizeDependenciesAdvanced*</li>\n<li>afterOptimizeDependencies*</li>\n<li>optimize*</li>\n<li>optimizeModulesBasic*</li>\n<li>optimizeModules*</li>\n<li>optimizeModulesAdvanced*</li>\n<li>afterOptimizeModules*</li>\n<li>optimizeChunksBasic*</li>\n<li>optimizeChunks*</li>\n<li>optimizeChunksAdvanced*</li>\n<li>afterOptimizeChunks*</li>\n<li>optimizeTree*</li>\n<li>afterOptimizeTree*</li>\n<li>optimizeChunkModulesBasic*</li>\n<li>optimizeChunkModules*</li>\n<li>optimizeChunkModulesAdvanced*</li>\n<li>afterOptimizeChunkModules*</li>\n<li>reviveModules*</li>\n<li>optimizeModuleOrder*</li>\n<li>advancedOptimizeModuleOrder*</li>\n<li>beforeModuleIds*</li>\n<li>moduleIds*</li>\n<li>optimizeModuleIds*</li>\n<li>afterOptimizeModuleIds*</li>\n<li>reviveChunks*</li>\n<li>optimizeChunkOrder*</li>\n<li>beforeChunkIds*</li>\n<li>optimizeChunkIds*</li>\n<li>afterOptimizeChunkIds*</li>\n<li>recordModules*</li>\n<li>recordChunks*</li>\n<li>beforeHash*</li>\n<li>afterHash*</li>\n<li>recordHash*</li>\n<li>beforeModuleAssets*</li>\n<li>beforeChunkAssets*</li>\n<li>additionalChunkAssets*</li>\n<li>record*</li>\n<li>additionalAssets*</li>\n<li>optimizeChunkAssets*</li>\n<li>afterOptimizeChunkAssets*</li>\n<li>optimizeAssets*</li>\n<li>afterOptimizeAssets*</li>\n<li>afterSeal*</li>\n</ul>\n<h2 id="source">Source <a href="#source" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><a href="https://github.com/webpack/webpack/blob/master/lib/ProgressPlugin.js"><code>ProgressPlugin</code> source</a></li>\n</ul>\n'}}]);