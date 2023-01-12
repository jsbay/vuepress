import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,e}from"./app.9de8e3ab.js";const t={},i=e(`<h1 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> Mac</h1><h2 id="\u67E5\u770B\u8FDC\u7A0B\u7AEF\u53E3\u662F\u5426\u5F00\u542F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u8FDC\u7A0B\u7AEF\u53E3\u662F\u5426\u5F00\u542F" aria-hidden="true">#</a> \u67E5\u770B\u8FDC\u7A0B\u7AEF\u53E3\u662F\u5426\u5F00\u542F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nc</span> <span class="token parameter variable">-vz</span> <span class="token parameter variable">-w</span> <span class="token number">2</span> <span class="token number">152.67</span>.205.241 <span class="token number">6380</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mac-tree-\u67E5\u770B\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#mac-tree-\u67E5\u770B\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> Mac Tree \u67E5\u770B\u76EE\u5F55\u7ED3\u6784</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>
brew <span class="token function">install</span> tree
<span class="token comment"># \u4F7F\u7528  \u8F93\u51FA\u7B2C\u4E00\u7EA7\u522B\u5230 tree.txt</span>
tree <span class="token parameter variable">-L</span> <span class="token number">1</span> <span class="token operator">&gt;</span> tree.txt

<span class="token comment"># \u8F93\u51FA\u7B2C\u4E00\u7EA7\u522B\u7684\u76EE\u5F55 \u6392\u9664 &#39;node_modules|tests|patche&#39;</span>
tree <span class="token parameter variable">-d</span>  <span class="token parameter variable">-L</span> <span class="token number">1</span> <span class="token parameter variable">-I</span> <span class="token string">&#39;node_modules|tests|patches&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>\u53C2\u6570\u8BF4\u660E</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># tree --help</span>
sage: tree <span class="token punctuation">[</span>-acdfghilnpqrstuvxACDFJQNSUX<span class="token punctuation">]</span> <span class="token punctuation">[</span>-L level <span class="token punctuation">[</span>-R<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-H  baseHREF<span class="token punctuation">]</span>
        <span class="token punctuation">[</span>-T title<span class="token punctuation">]</span> <span class="token punctuation">[</span>-o filename<span class="token punctuation">]</span> <span class="token punctuation">[</span>-P pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>-I pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>--gitignore<span class="token punctuation">]</span>
        <span class="token punctuation">[</span>--matchdirs<span class="token punctuation">]</span> <span class="token punctuation">[</span>--metafirst<span class="token punctuation">]</span> <span class="token punctuation">[</span>--ignore-case<span class="token punctuation">]</span> <span class="token punctuation">[</span>--nolinks<span class="token punctuation">]</span> <span class="token punctuation">[</span>--inodes<span class="token punctuation">]</span>
        <span class="token punctuation">[</span>--device<span class="token punctuation">]</span> <span class="token punctuation">[</span>--sort<span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--dirsfirst<span class="token punctuation">]</span> <span class="token punctuation">[</span>--filesfirst<span class="token punctuation">]</span>
        <span class="token punctuation">[</span>--filelimit <span class="token comment">#] [--si] [--du] [--prune] [--charset X]</span>
        <span class="token punctuation">[</span>--timefmt<span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span>format<span class="token punctuation">]</span> <span class="token punctuation">[</span>--fromfile<span class="token punctuation">]</span> <span class="token punctuation">[</span>--noreport<span class="token punctuation">]</span> <span class="token punctuation">[</span>--version<span class="token punctuation">]</span> <span class="token punctuation">[</span>--help<span class="token punctuation">]</span>
        <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token punctuation">[</span>directory <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
  ------- Listing options -------
  <span class="token parameter variable">-a</span>            All files are listed.
  <span class="token parameter variable">-d</span>            List directories only.
  <span class="token parameter variable">-l</span>            Follow symbolic links like directories.
  <span class="token parameter variable">-f</span>            Print the full path prefix <span class="token keyword">for</span> each file.
  <span class="token parameter variable">-x</span>            Stay on current filesystem only.
  <span class="token parameter variable">-L</span> level      Descend only level directories deep.
  <span class="token parameter variable">-R</span>            Rerun tree when max <span class="token function">dir</span> level reached.
  <span class="token parameter variable">-P</span> pattern    List only those files that match the pattern given.
  <span class="token parameter variable">-I</span> pattern    Do not list files that match the given pattern.
  <span class="token parameter variable">--gitignore</span>   Filter by using .gitignore files.
  --ignore-case Ignore <span class="token keyword">case</span> when pattern matching.
  <span class="token parameter variable">--matchdirs</span>   Include directory names <span class="token keyword">in</span> <span class="token parameter variable">-P</span> pattern matching.
  <span class="token parameter variable">--metafirst</span>   Print meta-data at the beginning of each line.
  <span class="token parameter variable">--info</span>        Print information about files found <span class="token keyword">in</span> .info files.
  <span class="token parameter variable">--noreport</span>    Turn off file/directory count at end of tree listing.
  <span class="token parameter variable">--charset</span> X   Use charset X <span class="token keyword">for</span> terminal/HTML and indentation line output.
  <span class="token parameter variable">--filelimit</span> <span class="token comment"># Do not descend dirs with more than # files in them.</span>
  <span class="token parameter variable">-o</span> filename   Output to <span class="token function">file</span> instead of stdout.
  ------- File options -------
  <span class="token parameter variable">-q</span>            Print non-printable characters as <span class="token string">&#39;?&#39;</span><span class="token builtin class-name">.</span>
  <span class="token parameter variable">-N</span>            Print non-printable characters as is.
  <span class="token parameter variable">-Q</span>            Quote filenames with double quotes.
  <span class="token parameter variable">-p</span>            Print the protections <span class="token keyword">for</span> each file.
  <span class="token parameter variable">-u</span>            Displays <span class="token function">file</span> owner or <span class="token environment constant">UID</span> number.
  <span class="token parameter variable">-g</span>            Displays <span class="token function">file</span> group owner or GID number.
  <span class="token parameter variable">-s</span>            Print the size <span class="token keyword">in</span> bytes of each file.
  <span class="token parameter variable">-h</span>            Print the size <span class="token keyword">in</span> a <span class="token function">more</span> human readable way.
  <span class="token parameter variable">--si</span>          Like -h, but use <span class="token keyword">in</span> SI <span class="token function">units</span> <span class="token punctuation">(</span>powers of <span class="token number">1000</span><span class="token punctuation">)</span>.
  <span class="token parameter variable">-D</span>            Print the <span class="token function">date</span> of last modification or <span class="token punctuation">(</span>-c<span class="token punctuation">)</span> status change.
  <span class="token parameter variable">--timefmt</span> <span class="token operator">&lt;</span>f<span class="token operator">&gt;</span> Print and <span class="token function">format</span> <span class="token function">time</span> according to the <span class="token function">format</span> <span class="token operator">&lt;</span>f<span class="token operator">&gt;</span>.
  <span class="token parameter variable">-F</span>            Appends <span class="token string">&#39;/&#39;</span>, <span class="token string">&#39;=&#39;</span>, <span class="token string">&#39;*&#39;</span>, <span class="token string">&#39;@&#39;</span>, <span class="token string">&#39;|&#39;</span> or <span class="token string">&#39;&gt;&#39;</span> as per <span class="token function">ls</span> -F.
  <span class="token parameter variable">--inodes</span>      Print inode number of each file.
  <span class="token parameter variable">--device</span>      Print device ID number to <span class="token function">which</span> each <span class="token function">file</span> belongs.
  ------- Sorting options -------
  <span class="token parameter variable">-v</span>            Sort files alphanumerically by version.
  <span class="token parameter variable">-t</span>            Sort files by last modification time.
  <span class="token parameter variable">-c</span>            Sort files by last status change time.
  <span class="token parameter variable">-U</span>            Leave files unsorted.
  <span class="token parameter variable">-r</span>            Reverse the order of the sort.
  <span class="token parameter variable">--dirsfirst</span>   List directories before files <span class="token punctuation">(</span>-U disables<span class="token punctuation">)</span>.
  <span class="token parameter variable">--filesfirst</span>  List files before directories <span class="token punctuation">(</span>-U disables<span class="token punctuation">)</span>.
  <span class="token parameter variable">--sort</span> X      Select sort: name,version,size,mtime,ctime.
  ------- Graphics options -------
  <span class="token parameter variable">-i</span>            Don&#39;t print indentation lines.
  <span class="token parameter variable">-A</span>            Print ANSI lines graphic indentation lines.
  <span class="token parameter variable">-S</span>            Print with CP437 <span class="token punctuation">(</span>console<span class="token punctuation">)</span> graphics indentation lines.
  <span class="token parameter variable">-n</span>            Turn colorization off always <span class="token punctuation">(</span>-C overrides<span class="token punctuation">)</span>.
  <span class="token parameter variable">-C</span>            Turn colorization on always.
  ------- XML/HTML/JSON options -------
  <span class="token parameter variable">-X</span>            Prints out an XML representation of the tree.
  <span class="token parameter variable">-J</span>            Prints out an JSON representation of the tree.
  <span class="token parameter variable">-H</span> baseHREF   Prints out HTML <span class="token function">format</span> with baseHREF as <span class="token function">top</span> directory.
  <span class="token parameter variable">-T</span> string     Replace the default HTML title and H1 header with string.
  <span class="token parameter variable">--nolinks</span>     Turn off hyperlinks <span class="token keyword">in</span> HTML output.
  ------- Input options -------
  <span class="token parameter variable">--fromfile</span>    Reads paths from files <span class="token punctuation">(</span>.<span class="token operator">=</span>stdin<span class="token punctuation">)</span>
  ------- Miscellaneous options -------
  <span class="token parameter variable">--version</span>     Print version and exit.
  <span class="token parameter variable">--help</span>        Print usage and this <span class="token builtin class-name">help</span> message and exit.
  --            Options processing terminator.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,6),p=[i];function l(r,o){return a(),s("div",null,p)}const d=n(t,[["render",l],["__file","index.html.vue"]]);export{d as default};
