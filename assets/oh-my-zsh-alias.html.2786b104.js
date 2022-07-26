import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as n,a as e}from"./app.eaae2e04.js";const t={},l=e(`<h1 id="oh-my-zsh-\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#oh-my-zsh-\u522B\u540D" aria-hidden="true">#</a> oh-my-zsh \u522B\u540D</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">g</span><span class="token operator">=</span>git
<span class="token assign-left variable">ga</span><span class="token operator">=</span><span class="token string">&#39;git add&#39;</span>
<span class="token assign-left variable">gaa</span><span class="token operator">=</span><span class="token string">&#39;git add --all&#39;</span>
<span class="token assign-left variable">gapa</span><span class="token operator">=</span><span class="token string">&#39;git add --patch&#39;</span>
<span class="token assign-left variable">gb</span><span class="token operator">=</span><span class="token string">&#39;git branch&#39;</span>
<span class="token assign-left variable">gba</span><span class="token operator">=</span><span class="token string">&#39;git branch -a&#39;</span>
<span class="token assign-left variable">gbd</span><span class="token operator">=</span><span class="token string">&#39;git branch -d&#39;</span>
<span class="token assign-left variable">gbda</span><span class="token operator">=</span><span class="token string">&#39;git branch --no-color --merged | command grep -vE &quot;^(\\*|\\s*(master|develop|dev)\\s*$)&quot; | command xargs -n 1 git branch -d&#39;</span>
<span class="token assign-left variable">gbl</span><span class="token operator">=</span><span class="token string">&#39;git blame -b -w&#39;</span>
<span class="token assign-left variable">gbnm</span><span class="token operator">=</span><span class="token string">&#39;git branch --no-merged&#39;</span>
<span class="token assign-left variable">gbr</span><span class="token operator">=</span><span class="token string">&#39;git branch --remote&#39;</span>
<span class="token assign-left variable">gbs</span><span class="token operator">=</span><span class="token string">&#39;git bisect&#39;</span>
<span class="token assign-left variable">gbsb</span><span class="token operator">=</span><span class="token string">&#39;git bisect bad&#39;</span>
<span class="token assign-left variable">gbsg</span><span class="token operator">=</span><span class="token string">&#39;git bisect good&#39;</span>
<span class="token assign-left variable">gbsr</span><span class="token operator">=</span><span class="token string">&#39;git bisect reset&#39;</span>
<span class="token assign-left variable">gbss</span><span class="token operator">=</span><span class="token string">&#39;git bisect start&#39;</span>
<span class="token assign-left variable">gc</span><span class="token operator">=</span><span class="token string">&#39;git commit -v&#39;</span>
<span class="token string">&#39;gc!&#39;</span><span class="token operator">=</span><span class="token string">&#39;git commit -v --amend&#39;</span>
<span class="token assign-left variable">gca</span><span class="token operator">=</span><span class="token string">&#39;git commit -v -a&#39;</span>
<span class="token string">&#39;gca!&#39;</span><span class="token operator">=</span><span class="token string">&#39;git commit -v -a --amend&#39;</span>
<span class="token assign-left variable">gcam</span><span class="token operator">=</span><span class="token string">&#39;git commit -a -m&#39;</span>
<span class="token string">&#39;gcan!&#39;</span><span class="token operator">=</span><span class="token string">&#39;git commit -v -a --no-edit --amend&#39;</span>
<span class="token string">&#39;gcans!&#39;</span><span class="token operator">=</span><span class="token string">&#39;git commit -v -a -s --no-edit --amend&#39;</span>
<span class="token assign-left variable">gcb</span><span class="token operator">=</span><span class="token string">&#39;git checkout -b&#39;</span>
<span class="token assign-left variable">gcd</span><span class="token operator">=</span><span class="token string">&#39;git checkout develop&#39;</span>
<span class="token assign-left variable">gcf</span><span class="token operator">=</span><span class="token string">&#39;git config --list&#39;</span>
<span class="token assign-left variable">gcl</span><span class="token operator">=</span><span class="token string">&#39;git clone --recursive&#39;</span>
<span class="token assign-left variable">gclean</span><span class="token operator">=</span><span class="token string">&#39;git clean -fd&#39;</span>
<span class="token assign-left variable">gcm</span><span class="token operator">=</span><span class="token string">&#39;git checkout master&#39;</span>
<span class="token assign-left variable">gcmsg</span><span class="token operator">=</span><span class="token string">&#39;git commit -m&#39;</span>
<span class="token string">&#39;gcn!&#39;</span><span class="token operator">=</span><span class="token string">&#39;git commit -v --no-edit --amend&#39;</span>
<span class="token assign-left variable">gco</span><span class="token operator">=</span><span class="token string">&#39;git checkout&#39;</span>
<span class="token assign-left variable">gcount</span><span class="token operator">=</span><span class="token string">&#39;git shortlog -sn&#39;</span>
<span class="token assign-left variable">gcp</span><span class="token operator">=</span><span class="token string">&#39;git cherry-pick&#39;</span>
<span class="token assign-left variable">gcpa</span><span class="token operator">=</span><span class="token string">&#39;git cherry-pick --abort&#39;</span>
<span class="token assign-left variable">gcpc</span><span class="token operator">=</span><span class="token string">&#39;git cherry-pick --continue&#39;</span>
<span class="token assign-left variable">gcs</span><span class="token operator">=</span><span class="token string">&#39;git commit -S&#39;</span>
<span class="token assign-left variable">gd</span><span class="token operator">=</span><span class="token string">&#39;git diff&#39;</span>
<span class="token assign-left variable">gdca</span><span class="token operator">=</span><span class="token string">&#39;git diff --cached&#39;</span>
<span class="token assign-left variable">gdct</span><span class="token operator">=</span><span class="token string">&#39;git describe --tags \`git rev-list --tags --max-count=1\`&#39;</span>
<span class="token assign-left variable">gdt</span><span class="token operator">=</span><span class="token string">&#39;git diff-tree --no-commit-id --name-only -r&#39;</span>
<span class="token assign-left variable">gdw</span><span class="token operator">=</span><span class="token string">&#39;git diff --word-diff&#39;</span>
<span class="token assign-left variable">gf</span><span class="token operator">=</span><span class="token string">&#39;git fetch&#39;</span>
<span class="token assign-left variable">gfa</span><span class="token operator">=</span><span class="token string">&#39;git fetch --all --prune&#39;</span>
<span class="token assign-left variable">gfo</span><span class="token operator">=</span><span class="token string">&#39;git fetch origin&#39;</span>
<span class="token assign-left variable">gg</span><span class="token operator">=</span><span class="token string">&#39;git gui citool&#39;</span>
<span class="token assign-left variable">gga</span><span class="token operator">=</span><span class="token string">&#39;git gui citool --amend&#39;</span>
<span class="token assign-left variable">ggpull</span><span class="token operator">=</span><span class="token string">&#39;git pull origin $(git_current_branch)&#39;</span>
<span class="token assign-left variable">ggpur</span><span class="token operator">=</span>ggu
<span class="token assign-left variable">ggpush</span><span class="token operator">=</span><span class="token string">&#39;git push origin $(git_current_branch)&#39;</span>
<span class="token assign-left variable">ggsup</span><span class="token operator">=</span><span class="token string">&#39;git branch --set-upstream-to=origin/$(git_current_branch)&#39;</span>
<span class="token assign-left variable">ghh</span><span class="token operator">=</span><span class="token string">&#39;git help&#39;</span>
<span class="token assign-left variable">gignore</span><span class="token operator">=</span><span class="token string">&#39;git update-index --assume-unchanged&#39;</span>
<span class="token assign-left variable">gignored</span><span class="token operator">=</span><span class="token string">&#39;git ls-files -v | grep &quot;^[[:lower:]]&quot;&#39;</span>
git-svn-dcommit-push<span class="token operator">=</span><span class="token string">&#39;git svn dcommit &amp;&amp; git push github master:svntrunk&#39;</span>
<span class="token assign-left variable">gk</span><span class="token operator">=</span><span class="token string">&#39;\\gitk --all --branches&#39;</span>
<span class="token assign-left variable">gke</span><span class="token operator">=</span><span class="token string">&#39;\\gitk --all $(git log -g --pretty=%h)&#39;</span>
<span class="token assign-left variable">gl</span><span class="token operator">=</span><span class="token string">&#39;git pull&#39;</span>
<span class="token assign-left variable">glg</span><span class="token operator">=</span><span class="token string">&#39;git log --stat&#39;</span>
<span class="token assign-left variable">glgg</span><span class="token operator">=</span><span class="token string">&#39;git log --graph&#39;</span>
<span class="token assign-left variable">glgga</span><span class="token operator">=</span><span class="token string">&#39;git log --graph --decorate --all&#39;</span>
<span class="token assign-left variable">glgm</span><span class="token operator">=</span><span class="token string">&#39;git log --graph --max-count=10&#39;</span>
<span class="token assign-left variable">glgp</span><span class="token operator">=</span><span class="token string">&#39;git log --stat -p&#39;</span>
<span class="token assign-left variable">glo</span><span class="token operator">=</span><span class="token string">&#39;git log --oneline --decorate&#39;</span>
<span class="token assign-left variable">globurl</span><span class="token operator">=</span><span class="token string">&#39;noglob urlglobber &#39;</span>
<span class="token assign-left variable">glog</span><span class="token operator">=</span><span class="token string">&#39;git log --oneline --decorate --graph&#39;</span>
<span class="token assign-left variable">gloga</span><span class="token operator">=</span><span class="token string">&#39;git log --oneline --decorate --graph --all&#39;</span>
<span class="token assign-left variable">glol</span><span class="token operator">=</span><span class="token string">&#39;git log --graph --pretty=&#39;</span><span class="token punctuation">\\</span>&#39;<span class="token string">&#39;%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset&#39;</span><span class="token punctuation">\\</span>&#39;<span class="token string">&#39; --abbrev-commit&#39;</span>
<span class="token assign-left variable">glola</span><span class="token operator">=</span><span class="token string">&#39;git log --graph --pretty=&#39;</span><span class="token punctuation">\\</span>&#39;<span class="token string">&#39;%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset&#39;</span><span class="token punctuation">\\</span>&#39;<span class="token string">&#39; --abbrev-commit --all&#39;</span>
<span class="token assign-left variable">glp</span><span class="token operator">=</span>_git_log_prettily
<span class="token assign-left variable">glum</span><span class="token operator">=</span><span class="token string">&#39;git pull upstream master&#39;</span>
<span class="token assign-left variable">gm</span><span class="token operator">=</span><span class="token string">&#39;git merge&#39;</span>
<span class="token assign-left variable">gmom</span><span class="token operator">=</span><span class="token string">&#39;git merge origin/master&#39;</span>
<span class="token assign-left variable">gmt</span><span class="token operator">=</span><span class="token string">&#39;git mergetool --no-prompt&#39;</span>
<span class="token assign-left variable">gmtvim</span><span class="token operator">=</span><span class="token string">&#39;git mergetool --no-prompt --tool=vimdiff&#39;</span>
<span class="token assign-left variable">gmum</span><span class="token operator">=</span><span class="token string">&#39;git merge upstream/master&#39;</span>
<span class="token assign-left variable">gp</span><span class="token operator">=</span><span class="token string">&#39;git push&#39;</span>
<span class="token assign-left variable">gpd</span><span class="token operator">=</span><span class="token string">&#39;git push --dry-run&#39;</span>
<span class="token assign-left variable">gpoat</span><span class="token operator">=</span><span class="token string">&#39;git push origin --all &amp;&amp; git push origin --tags&#39;</span>
<span class="token assign-left variable">gpristine</span><span class="token operator">=</span><span class="token string">&#39;git reset --hard &amp;&amp; git clean -dfx&#39;</span>
<span class="token assign-left variable">gpsup</span><span class="token operator">=</span><span class="token string">&#39;git push --set-upstream origin $(git_current_branch)&#39;</span>
<span class="token assign-left variable">gpu</span><span class="token operator">=</span><span class="token string">&#39;git push upstream&#39;</span>
<span class="token assign-left variable">gpv</span><span class="token operator">=</span><span class="token string">&#39;git push -v&#39;</span>
<span class="token assign-left variable">gr</span><span class="token operator">=</span><span class="token string">&#39;git remote&#39;</span>
<span class="token assign-left variable">gra</span><span class="token operator">=</span><span class="token string">&#39;git remote add&#39;</span>
<span class="token assign-left variable">grb</span><span class="token operator">=</span><span class="token string">&#39;git rebase&#39;</span>
<span class="token assign-left variable">grba</span><span class="token operator">=</span><span class="token string">&#39;git rebase --abort&#39;</span>
<span class="token assign-left variable">grbc</span><span class="token operator">=</span><span class="token string">&#39;git rebase --continue&#39;</span>
<span class="token assign-left variable">grbi</span><span class="token operator">=</span><span class="token string">&#39;git rebase -i&#39;</span>
<span class="token assign-left variable">grbm</span><span class="token operator">=</span><span class="token string">&#39;git rebase master&#39;</span>
<span class="token assign-left variable">grbs</span><span class="token operator">=</span><span class="token string">&#39;git rebase --skip&#39;</span>
<span class="token assign-left variable">grep</span><span class="token operator">=</span><span class="token string">&#39;grep  --color=auto --exclude-dir={.bzr,CVS,.git,.hg,.svn}&#39;</span>
<span class="token assign-left variable">grh</span><span class="token operator">=</span><span class="token string">&#39;git reset HEAD&#39;</span>
<span class="token assign-left variable">grhh</span><span class="token operator">=</span><span class="token string">&#39;git reset HEAD --hard&#39;</span>
<span class="token assign-left variable">grmv</span><span class="token operator">=</span><span class="token string">&#39;git remote rename&#39;</span>
<span class="token assign-left variable">grrm</span><span class="token operator">=</span><span class="token string">&#39;git remote remove&#39;</span>
<span class="token assign-left variable">grset</span><span class="token operator">=</span><span class="token string">&#39;git remote set-url&#39;</span>
<span class="token assign-left variable">grt</span><span class="token operator">=</span><span class="token string">&#39;cd $(git rev-parse --show-toplevel || echo &quot;.&quot;)&#39;</span>
<span class="token assign-left variable">gru</span><span class="token operator">=</span><span class="token string">&#39;git reset --&#39;</span>
<span class="token assign-left variable">grup</span><span class="token operator">=</span><span class="token string">&#39;git remote update&#39;</span>
<span class="token assign-left variable">grv</span><span class="token operator">=</span><span class="token string">&#39;git remote -v&#39;</span>
<span class="token assign-left variable">gsb</span><span class="token operator">=</span><span class="token string">&#39;git status -sb&#39;</span>
<span class="token assign-left variable">gsd</span><span class="token operator">=</span><span class="token string">&#39;git svn dcommit&#39;</span>
<span class="token assign-left variable">gsi</span><span class="token operator">=</span><span class="token string">&#39;git submodule init&#39;</span>
<span class="token assign-left variable">gsps</span><span class="token operator">=</span><span class="token string">&#39;git show --pretty=short --show-signature&#39;</span>
<span class="token assign-left variable">gsr</span><span class="token operator">=</span><span class="token string">&#39;git svn rebase&#39;</span>
<span class="token assign-left variable">gss</span><span class="token operator">=</span><span class="token string">&#39;git status -s&#39;</span>
<span class="token assign-left variable">gst</span><span class="token operator">=</span><span class="token string">&#39;git status&#39;</span>
<span class="token assign-left variable">gsta</span><span class="token operator">=</span><span class="token string">&#39;git stash save&#39;</span>
<span class="token assign-left variable">gstaa</span><span class="token operator">=</span><span class="token string">&#39;git stash apply&#39;</span>
<span class="token assign-left variable">gstc</span><span class="token operator">=</span><span class="token string">&#39;git stash clear&#39;</span>
<span class="token assign-left variable">gstd</span><span class="token operator">=</span><span class="token string">&#39;git stash drop&#39;</span>
<span class="token assign-left variable">gstl</span><span class="token operator">=</span><span class="token string">&#39;git stash list&#39;</span>
<span class="token assign-left variable">gstp</span><span class="token operator">=</span><span class="token string">&#39;git stash pop&#39;</span>
<span class="token assign-left variable">gsts</span><span class="token operator">=</span><span class="token string">&#39;git stash show --text&#39;</span>
<span class="token assign-left variable">gsu</span><span class="token operator">=</span><span class="token string">&#39;git submodule update&#39;</span>
<span class="token assign-left variable">gts</span><span class="token operator">=</span><span class="token string">&#39;git tag -s&#39;</span>
<span class="token assign-left variable">gtv</span><span class="token operator">=</span><span class="token string">&#39;git tag | sort -V&#39;</span>
<span class="token assign-left variable">gunignore</span><span class="token operator">=</span><span class="token string">&#39;git update-index --no-assume-unchanged&#39;</span>
<span class="token assign-left variable">gunwip</span><span class="token operator">=</span><span class="token string">&#39;git log -n 1 | grep -q -c &quot;\\-\\-wip\\-\\-&quot; &amp;&amp; git reset HEAD~1&#39;</span>
<span class="token assign-left variable">gup</span><span class="token operator">=</span><span class="token string">&#39;git pull --rebase&#39;</span>
<span class="token assign-left variable">gupv</span><span class="token operator">=</span><span class="token string">&#39;git pull --rebase -v&#39;</span>
<span class="token assign-left variable">gwch</span><span class="token operator">=</span><span class="token string">&#39;git whatchanged -p --abbrev-commit --pretty=medium&#39;</span>
<span class="token assign-left variable">gwip</span><span class="token operator">=</span><span class="token string">&#39;git add -A; git rm $(git ls-files --deleted) 2&gt; /dev/null; git commit --no-verify -m &quot;--wip--&quot;&#39;</span>
<span class="token assign-left variable">history</span><span class="token operator">=</span><span class="token string">&#39;fc -l 1&#39;</span>
<span class="token assign-left variable">l</span><span class="token operator">=</span><span class="token string">&#39;ls -lah&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[l];function p(r,o){return a(),n("div",null,i)}var v=s(t,[["render",p],["__file","oh-my-zsh-alias.html.vue"]]);export{v as default};
