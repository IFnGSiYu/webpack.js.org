(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{355:function(n,s,a){"use strict";a.r(s),s.default='<p>Plugins grant unlimited opportunity to perform customizations within the webpack build system. This allows you to create custom asset types, perform unique build modifications, or even enhance the webpack runtime while using middleware. The following are some features of webpack that become useful while writing plugins.</p>\n<h2 id="exploring-assets-chunks-modules-and-dependencies">Exploring assets, chunks, modules, and dependencies <a href="#exploring-assets-chunks-modules-and-dependencies" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>After a compilation is sealed, all structures within the compilation may be traversed.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">class</span> <span class="token class-name">MyPlugin</span> <span class="token punctuation">{</span>\n  <span class="token function">apply</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>compilation<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token comment">// Explore each chunk (build output):</span>\n      compilation<span class="token punctuation">.</span>chunks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>chunk <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// Explore each module within the chunk (built inputs):</span>\n        chunk<span class="token punctuation">.</span><span class="token function">getModules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>module <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token comment">// Explore each source file path that was included into the module:</span>\n          module<span class="token punctuation">.</span>buildInfo <span class="token operator">&#x26;&#x26;</span> module<span class="token punctuation">.</span>buildInfo<span class="token punctuation">.</span>fileDependencies <span class="token operator">&#x26;&#x26;</span> module<span class="token punctuation">.</span>buildInfo<span class="token punctuation">.</span>fileDependencies<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>filepath <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token comment">// we\'ve learned a lot about the source structure now...</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// Explore each asset filename generated by the chunk:</span>\n        chunk<span class="token punctuation">.</span>files<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>filename <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token comment">// Get the asset source for each file generated by the chunk:</span>\n          <span class="token keyword">var</span> source <span class="token operator">=</span> compilation<span class="token punctuation">.</span>assets<span class="token punctuation">[</span>filename<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> MyPlugin<span class="token punctuation">;</span></code></pre>\n<ul>\n<li><code>compilation.modules</code>: A set of modules (built inputs) in the compilation. Each module manages the build of a raw file from your source library.</li>\n</ul>\n<blockquote class="warning">\n<p><strong>Deprecation warning</strong>: Array functions will still work.</p>\n</blockquote>\n<ul>\n<li><code>module.fileDependencies</code>: An array of source file paths included into a module. This includes the source JavaScript file itself (ex: <code>index.js</code>), and all dependency asset files (stylesheets, images, etc) that it has required. Reviewing dependencies is useful for seeing what source files belong to a module.</li>\n<li><code>compilation.chunks</code>: A set of chunks (build outputs) in the compilation. Each chunk manages the composition of a final rendered assets.</li>\n</ul>\n<blockquote class="warning">\n<p><strong>Deprecation warning</strong>: Array functions will still work.</p>\n</blockquote>\n<ul>\n<li><code>chunk.getModules()</code>: An array of modules that are included into a chunk. By extension, you may look through each module\'s dependencies to see what raw source files fed into a chunk.</li>\n<li><code>chunk.files</code>: A Set of output filenames generated by the chunk. You may access these asset sources from the <code>compilation.assets</code> table.</li>\n</ul>\n<h3 id="monitoring-the-watch-graph">Monitoring the watch graph <a href="#monitoring-the-watch-graph" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>While running webpack middleware, each compilation includes a <code>fileDependencies</code> <code>Set</code> (what files are being watched) and a <code>fileTimestamps</code> <code>Map</code> that maps watched file paths to a timestamp. These are extremely useful for detecting what files have changed within the compilation:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">class</span> <span class="token class-name">MyPlugin</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>prevTimestamps <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">apply</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>compilation<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> changedFiles <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span>compilation<span class="token punctuation">.</span>fileTimestamps<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>\n        watchfile <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>prevTimestamps<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>watchfile<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>startTime<span class="token punctuation">)</span> <span class="token operator">&#x3C;</span>\n            <span class="token punctuation">(</span>compilation<span class="token punctuation">.</span>fileTimestamps<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>watchfile<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">Infinity</span><span class="token punctuation">)</span>\n          <span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">this</span><span class="token punctuation">.</span>prevTimestamps <span class="token operator">=</span> compilation<span class="token punctuation">.</span>fileTimestamps<span class="token punctuation">;</span>\n      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> MyPlugin<span class="token punctuation">;</span></code></pre>\n<p>You may also feed new file paths into the watch graph to receive compilation triggers when those files change. Add valid file paths into the <code>compilation.fileDependencies</code> <code>Set</code> to add them to the watched files.</p>\n<blockquote class="tip">\n<p>The <code>fileDependencies</code> <code>Set</code> is rebuilt in each compilation, so your plugin must add its own watched dependencies into each compilation to keep them under watch.</p>\n</blockquote>\n<blockquote class="warning">\n<p>Since webpack 5, <code>compilation.fileDependencies</code>, <code>compilation.contextDependencies</code> and <code>compilation.missingDependencies</code> are now a <code>Set</code> instead of a <code>Sortable Set</code> and thus no longer sorted.</p>\n</blockquote>\n<h2 id="changed-chunks">Changed chunks <a href="#changed-chunks" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Similar to the watch graph, it\'s fairly simple to monitor changed chunks (or modules, for that matter) within a compilation by tracking their hashes.</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">class</span> <span class="token class-name">MyPlugin</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>chunkVersions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">apply</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">tapAsync</span><span class="token punctuation">(</span><span class="token string">\'MyPlugin\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>compilation<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">var</span> changedChunks <span class="token operator">=</span> compilation<span class="token punctuation">.</span>chunks<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>chunk <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> oldVersion <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>chunkVersions<span class="token punctuation">[</span>chunk<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>chunkVersions<span class="token punctuation">[</span>chunk<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> chunk<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> chunk<span class="token punctuation">.</span>hash <span class="token operator">!==</span> oldVersion<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> MyPlugin<span class="token punctuation">;</span></code></pre>\n'}}]);