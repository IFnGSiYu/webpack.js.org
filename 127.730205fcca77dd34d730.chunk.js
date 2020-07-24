(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{423:function(n,s,a){"use strict";a.r(s),s.default='<p>The <code>AutomaticPrefetchPlugin</code> discovers <strong>all modules</strong> from the previous compilation upfront while watching for changes, trying to improve the incremental build times. Compared to <a href="/plugins/prefetch-plugin/"><code>PrefetchPlugin</code></a> which discovers a <strong>single module</strong> upfront.</p>\n<blockquote class="warning">\n<p>May or may not have a performance benefit since the incremental build times are pretty fast.</p>\n</blockquote>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>AutomaticPrefetchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n'}}]);