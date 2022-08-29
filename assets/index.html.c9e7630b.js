import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.0fbfc58f.js";const i={},t=e(`<h1 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> Mac</h1><h2 id="\u67E5\u770B\u8FDC\u7A0B\u7AEF\u53E3\u662F\u5426\u5F00\u542F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u8FDC\u7A0B\u7AEF\u53E3\u662F\u5426\u5F00\u542F" aria-hidden="true">#</a> \u67E5\u770B\u8FDC\u7A0B\u7AEF\u53E3\u662F\u5426\u5F00\u542F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nc</span> -vz -w <span class="token number">2</span> <span class="token number">152.67</span>.205.241 <span class="token number">6380</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mac-tree-\u67E5\u770B\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#mac-tree-\u67E5\u770B\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> Mac Tree \u67E5\u770B\u76EE\u5F55\u7ED3\u6784</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>
brew <span class="token function">install</span> tree
<span class="token comment"># \u4F7F\u7528  \u8F93\u51FA\u7B2C\u4E00\u7EA7\u522B\u5230 tree.txt</span>
tree -L <span class="token number">1</span> <span class="token operator">&gt;</span> tree.txt

<span class="token comment"># \u8F93\u51FA\u7B2C\u4E00\u7EA7\u522B\u7684\u76EE\u5F55 \u6392\u9664 &#39;node_modules|tests|patche&#39;</span>
tree -d  -L <span class="token number">1</span> -I <span class="token string">&#39;node_modules|tests|patches&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>\u53C2\u6570\u8BF4\u660E</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># tree --help</span>
sage: tree <span class="token punctuation">[</span>-acdfghilnpqrstuvxACDFJQNSUX<span class="token punctuation">]</span> <span class="token punctuation">[</span>-L level <span class="token punctuation">[</span>-R<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>-H  baseHREF<span class="token punctuation">]</span>
        <span class="token punctuation">[</span>-T title<span class="token punctuation">]</span> <span class="token punctuation">[</span>-o filename<span class="token punctuation">]</span> <span class="token punctuation">[</span>-P pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>-I pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>--gitignore<span class="token punctuation">]</span>
        <span class="token punctuation">[</span>--matchdirs<span class="token punctuation">]</span> <span class="token punctuation">[</span>--metafirst<span class="token punctuation">]</span> <span class="token punctuation">[</span>--ignore-case<span class="token punctuation">]</span> <span class="token punctuation">[</span>--nolinks<span class="token punctuation">]</span> <span class="token punctuation">[</span>--inodes<span class="token punctuation">]</span>
        <span class="token punctuation">[</span>--device<span class="token punctuation">]</span> <span class="token punctuation">[</span>--sort<span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span><span class="token operator">&lt;</span>name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>--dirsfirst<span class="token punctuation">]</span> <span class="token punctuation">[</span>--filesfirst<span class="token punctuation">]</span>
        <span class="token punctuation">[</span>--filelimit <span class="token comment">#] [--si] [--du] [--prune] [--charset X]</span>
        <span class="token punctuation">[</span>--timefmt<span class="token punctuation">[</span><span class="token operator">=</span><span class="token punctuation">]</span>format<span class="token punctuation">]</span> <span class="token punctuation">[</span>--fromfile<span class="token punctuation">]</span> <span class="token punctuation">[</span>--noreport<span class="token punctuation">]</span> <span class="token punctuation">[</span>--version<span class="token punctuation">]</span> <span class="token punctuation">[</span>--help<span class="token punctuation">]</span>
        <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token punctuation">[</span>directory <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
  ------- Listing options -------
  -a            All files are listed.
  -d            List directories only.
  -l            Follow symbolic links like directories.
  -f            Print the full path prefix <span class="token keyword">for</span> each file.
  -x            Stay on current filesystem only.
  -L level      Descend only level directories deep.
  -R            Rerun tree when max <span class="token function">dir</span> level reached.
  -P pattern    List only those files that match the pattern given.
  -I pattern    Do not list files that match the given pattern.
  --gitignore   Filter by using .gitignore files.
  --ignore-case Ignore <span class="token keyword">case</span> when pattern matching.
  --matchdirs   Include directory names <span class="token keyword">in</span> -P pattern matching.
  --metafirst   Print meta-data at the beginning of each line.
  --info        Print information about files found <span class="token keyword">in</span> .info files.
  --noreport    Turn off file/directory count at end of tree listing.
  --charset X   Use charset X <span class="token keyword">for</span> terminal/HTML and indentation line output.
  --filelimit <span class="token comment"># Do not descend dirs with more than # files in them.</span>
  -o filename   Output to <span class="token function">file</span> instead of stdout.
  ------- File options -------
  -q            Print non-printable characters as <span class="token string">&#39;?&#39;</span><span class="token builtin class-name">.</span>
  -N            Print non-printable characters as is.
  -Q            Quote filenames with double quotes.
  -p            Print the protections <span class="token keyword">for</span> each file.
  -u            Displays <span class="token function">file</span> owner or <span class="token environment constant">UID</span> number.
  -g            Displays <span class="token function">file</span> group owner or GID number.
  -s            Print the size <span class="token keyword">in</span> bytes of each file.
  -h            Print the size <span class="token keyword">in</span> a <span class="token function">more</span> human readable way.
  --si          Like -h, but use <span class="token keyword">in</span> SI <span class="token function">units</span> <span class="token punctuation">(</span>powers of <span class="token number">1000</span><span class="token punctuation">)</span>.
  -D            Print the <span class="token function">date</span> of last modification or <span class="token punctuation">(</span>-c<span class="token punctuation">)</span> status change.
  --timefmt <span class="token operator">&lt;</span>f<span class="token operator">&gt;</span> Print and <span class="token function">format</span> <span class="token function">time</span> according to the <span class="token function">format</span> <span class="token operator">&lt;</span>f<span class="token operator">&gt;</span>.
  -F            Appends <span class="token string">&#39;/&#39;</span>, <span class="token string">&#39;=&#39;</span>, <span class="token string">&#39;*&#39;</span>, <span class="token string">&#39;@&#39;</span>, <span class="token string">&#39;|&#39;</span> or <span class="token string">&#39;&gt;&#39;</span> as per <span class="token function">ls</span> -F.
  --inodes      Print inode number of each file.
  --device      Print device ID number to <span class="token function">which</span> each <span class="token function">file</span> belongs.
  ------- Sorting options -------
  -v            Sort files alphanumerically by version.
  -t            Sort files by last modification time.
  -c            Sort files by last status change time.
  -U            Leave files unsorted.
  -r            Reverse the order of the sort.
  --dirsfirst   List directories before files <span class="token punctuation">(</span>-U disables<span class="token punctuation">)</span>.
  --filesfirst  List files before directories <span class="token punctuation">(</span>-U disables<span class="token punctuation">)</span>.
  --sort X      Select sort: name,version,size,mtime,ctime.
  ------- Graphics options -------
  -i            Don&#39;t print indentation lines.
  -A            Print ANSI lines graphic indentation lines.
  -S            Print with CP437 <span class="token punctuation">(</span>console<span class="token punctuation">)</span> graphics indentation lines.
  -n            Turn colorization off always <span class="token punctuation">(</span>-C overrides<span class="token punctuation">)</span>.
  -C            Turn colorization on always.
  ------- XML/HTML/JSON options -------
  -X            Prints out an XML representation of the tree.
  -J            Prints out an JSON representation of the tree.
  -H baseHREF   Prints out HTML <span class="token function">format</span> with baseHREF as <span class="token function">top</span> directory.
  -T string     Replace the default HTML title and H1 header with string.
  --nolinks     Turn off hyperlinks <span class="token keyword">in</span> HTML output.
  ------- Input options -------
  --fromfile    Reads paths from files <span class="token punctuation">(</span>.<span class="token operator">=</span>stdin<span class="token punctuation">)</span>
  ------- Miscellaneous options -------
  --version     Print version and exit.
  --help        Print usage and this <span class="token builtin class-name">help</span> message and exit.
  --            Options processing terminator.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,6),o=[t];function l(c,p){return s(),a("div",null,o)}var d=n(i,[["render",l],["__file","index.html.vue"]]);export{d as default};
