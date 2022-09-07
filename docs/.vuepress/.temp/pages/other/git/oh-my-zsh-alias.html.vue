<template><div><h1 id="oh-my-zsh-别名" tabindex="-1"><a class="header-anchor" href="#oh-my-zsh-别名" aria-hidden="true">#</a> oh-my-zsh 别名</h1>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">g</span><span class="token operator">=</span>git
<span class="token assign-left variable">ga</span><span class="token operator">=</span><span class="token string">'git add'</span>
<span class="token assign-left variable">gaa</span><span class="token operator">=</span><span class="token string">'git add --all'</span>
<span class="token assign-left variable">gapa</span><span class="token operator">=</span><span class="token string">'git add --patch'</span>
<span class="token assign-left variable">gb</span><span class="token operator">=</span><span class="token string">'git branch'</span>
<span class="token assign-left variable">gba</span><span class="token operator">=</span><span class="token string">'git branch -a'</span>
<span class="token assign-left variable">gbd</span><span class="token operator">=</span><span class="token string">'git branch -d'</span>
<span class="token assign-left variable">gbda</span><span class="token operator">=</span><span class="token string">'git branch --no-color --merged | command grep -vE "^(\*|\s*(master|develop|dev)\s*$)" | command xargs -n 1 git branch -d'</span>
<span class="token assign-left variable">gbl</span><span class="token operator">=</span><span class="token string">'git blame -b -w'</span>
<span class="token assign-left variable">gbnm</span><span class="token operator">=</span><span class="token string">'git branch --no-merged'</span>
<span class="token assign-left variable">gbr</span><span class="token operator">=</span><span class="token string">'git branch --remote'</span>
<span class="token assign-left variable">gbs</span><span class="token operator">=</span><span class="token string">'git bisect'</span>
<span class="token assign-left variable">gbsb</span><span class="token operator">=</span><span class="token string">'git bisect bad'</span>
<span class="token assign-left variable">gbsg</span><span class="token operator">=</span><span class="token string">'git bisect good'</span>
<span class="token assign-left variable">gbsr</span><span class="token operator">=</span><span class="token string">'git bisect reset'</span>
<span class="token assign-left variable">gbss</span><span class="token operator">=</span><span class="token string">'git bisect start'</span>
<span class="token assign-left variable">gc</span><span class="token operator">=</span><span class="token string">'git commit -v'</span>
<span class="token string">'gc!'</span><span class="token operator">=</span><span class="token string">'git commit -v --amend'</span>
<span class="token assign-left variable">gca</span><span class="token operator">=</span><span class="token string">'git commit -v -a'</span>
<span class="token string">'gca!'</span><span class="token operator">=</span><span class="token string">'git commit -v -a --amend'</span>
<span class="token assign-left variable">gcam</span><span class="token operator">=</span><span class="token string">'git commit -a -m'</span>
<span class="token string">'gcan!'</span><span class="token operator">=</span><span class="token string">'git commit -v -a --no-edit --amend'</span>
<span class="token string">'gcans!'</span><span class="token operator">=</span><span class="token string">'git commit -v -a -s --no-edit --amend'</span>
<span class="token assign-left variable">gcb</span><span class="token operator">=</span><span class="token string">'git checkout -b'</span>
<span class="token assign-left variable">gcd</span><span class="token operator">=</span><span class="token string">'git checkout develop'</span>
<span class="token assign-left variable">gcf</span><span class="token operator">=</span><span class="token string">'git config --list'</span>
<span class="token assign-left variable">gcl</span><span class="token operator">=</span><span class="token string">'git clone --recursive'</span>
<span class="token assign-left variable">gclean</span><span class="token operator">=</span><span class="token string">'git clean -fd'</span>
<span class="token assign-left variable">gcm</span><span class="token operator">=</span><span class="token string">'git checkout master'</span>
<span class="token assign-left variable">gcmsg</span><span class="token operator">=</span><span class="token string">'git commit -m'</span>
<span class="token string">'gcn!'</span><span class="token operator">=</span><span class="token string">'git commit -v --no-edit --amend'</span>
<span class="token assign-left variable">gco</span><span class="token operator">=</span><span class="token string">'git checkout'</span>
<span class="token assign-left variable">gcount</span><span class="token operator">=</span><span class="token string">'git shortlog -sn'</span>
<span class="token assign-left variable">gcp</span><span class="token operator">=</span><span class="token string">'git cherry-pick'</span>
<span class="token assign-left variable">gcpa</span><span class="token operator">=</span><span class="token string">'git cherry-pick --abort'</span>
<span class="token assign-left variable">gcpc</span><span class="token operator">=</span><span class="token string">'git cherry-pick --continue'</span>
<span class="token assign-left variable">gcs</span><span class="token operator">=</span><span class="token string">'git commit -S'</span>
<span class="token assign-left variable">gd</span><span class="token operator">=</span><span class="token string">'git diff'</span>
<span class="token assign-left variable">gdca</span><span class="token operator">=</span><span class="token string">'git diff --cached'</span>
<span class="token assign-left variable">gdct</span><span class="token operator">=</span><span class="token string">'git describe --tags `git rev-list --tags --max-count=1`'</span>
<span class="token assign-left variable">gdt</span><span class="token operator">=</span><span class="token string">'git diff-tree --no-commit-id --name-only -r'</span>
<span class="token assign-left variable">gdw</span><span class="token operator">=</span><span class="token string">'git diff --word-diff'</span>
<span class="token assign-left variable">gf</span><span class="token operator">=</span><span class="token string">'git fetch'</span>
<span class="token assign-left variable">gfa</span><span class="token operator">=</span><span class="token string">'git fetch --all --prune'</span>
<span class="token assign-left variable">gfo</span><span class="token operator">=</span><span class="token string">'git fetch origin'</span>
<span class="token assign-left variable">gg</span><span class="token operator">=</span><span class="token string">'git gui citool'</span>
<span class="token assign-left variable">gga</span><span class="token operator">=</span><span class="token string">'git gui citool --amend'</span>
<span class="token assign-left variable">ggpull</span><span class="token operator">=</span><span class="token string">'git pull origin $(git_current_branch)'</span>
<span class="token assign-left variable">ggpur</span><span class="token operator">=</span>ggu
<span class="token assign-left variable">ggpush</span><span class="token operator">=</span><span class="token string">'git push origin $(git_current_branch)'</span>
<span class="token assign-left variable">ggsup</span><span class="token operator">=</span><span class="token string">'git branch --set-upstream-to=origin/$(git_current_branch)'</span>
<span class="token assign-left variable">ghh</span><span class="token operator">=</span><span class="token string">'git help'</span>
<span class="token assign-left variable">gignore</span><span class="token operator">=</span><span class="token string">'git update-index --assume-unchanged'</span>
<span class="token assign-left variable">gignored</span><span class="token operator">=</span><span class="token string">'git ls-files -v | grep "^[[:lower:]]"'</span>
git-svn-dcommit-push<span class="token operator">=</span><span class="token string">'git svn dcommit &amp;&amp; git push github master:svntrunk'</span>
<span class="token assign-left variable">gk</span><span class="token operator">=</span><span class="token string">'\gitk --all --branches'</span>
<span class="token assign-left variable">gke</span><span class="token operator">=</span><span class="token string">'\gitk --all $(git log -g --pretty=%h)'</span>
<span class="token assign-left variable">gl</span><span class="token operator">=</span><span class="token string">'git pull'</span>
<span class="token assign-left variable">glg</span><span class="token operator">=</span><span class="token string">'git log --stat'</span>
<span class="token assign-left variable">glgg</span><span class="token operator">=</span><span class="token string">'git log --graph'</span>
<span class="token assign-left variable">glgga</span><span class="token operator">=</span><span class="token string">'git log --graph --decorate --all'</span>
<span class="token assign-left variable">glgm</span><span class="token operator">=</span><span class="token string">'git log --graph --max-count=10'</span>
<span class="token assign-left variable">glgp</span><span class="token operator">=</span><span class="token string">'git log --stat -p'</span>
<span class="token assign-left variable">glo</span><span class="token operator">=</span><span class="token string">'git log --oneline --decorate'</span>
<span class="token assign-left variable">globurl</span><span class="token operator">=</span><span class="token string">'noglob urlglobber '</span>
<span class="token assign-left variable">glog</span><span class="token operator">=</span><span class="token string">'git log --oneline --decorate --graph'</span>
<span class="token assign-left variable">gloga</span><span class="token operator">=</span><span class="token string">'git log --oneline --decorate --graph --all'</span>
<span class="token assign-left variable">glol</span><span class="token operator">=</span><span class="token string">'git log --graph --pretty='</span><span class="token punctuation">\</span>'<span class="token string">'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an>%Creset'</span><span class="token punctuation">\</span>'<span class="token string">' --abbrev-commit'</span>
<span class="token assign-left variable">glola</span><span class="token operator">=</span><span class="token string">'git log --graph --pretty='</span><span class="token punctuation">\</span>'<span class="token string">'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an>%Creset'</span><span class="token punctuation">\</span>'<span class="token string">' --abbrev-commit --all'</span>
<span class="token assign-left variable">glp</span><span class="token operator">=</span>_git_log_prettily
<span class="token assign-left variable">glum</span><span class="token operator">=</span><span class="token string">'git pull upstream master'</span>
<span class="token assign-left variable">gm</span><span class="token operator">=</span><span class="token string">'git merge'</span>
<span class="token assign-left variable">gmom</span><span class="token operator">=</span><span class="token string">'git merge origin/master'</span>
<span class="token assign-left variable">gmt</span><span class="token operator">=</span><span class="token string">'git mergetool --no-prompt'</span>
<span class="token assign-left variable">gmtvim</span><span class="token operator">=</span><span class="token string">'git mergetool --no-prompt --tool=vimdiff'</span>
<span class="token assign-left variable">gmum</span><span class="token operator">=</span><span class="token string">'git merge upstream/master'</span>
<span class="token assign-left variable">gp</span><span class="token operator">=</span><span class="token string">'git push'</span>
<span class="token assign-left variable">gpd</span><span class="token operator">=</span><span class="token string">'git push --dry-run'</span>
<span class="token assign-left variable">gpoat</span><span class="token operator">=</span><span class="token string">'git push origin --all &amp;&amp; git push origin --tags'</span>
<span class="token assign-left variable">gpristine</span><span class="token operator">=</span><span class="token string">'git reset --hard &amp;&amp; git clean -dfx'</span>
<span class="token assign-left variable">gpsup</span><span class="token operator">=</span><span class="token string">'git push --set-upstream origin $(git_current_branch)'</span>
<span class="token assign-left variable">gpu</span><span class="token operator">=</span><span class="token string">'git push upstream'</span>
<span class="token assign-left variable">gpv</span><span class="token operator">=</span><span class="token string">'git push -v'</span>
<span class="token assign-left variable">gr</span><span class="token operator">=</span><span class="token string">'git remote'</span>
<span class="token assign-left variable">gra</span><span class="token operator">=</span><span class="token string">'git remote add'</span>
<span class="token assign-left variable">grb</span><span class="token operator">=</span><span class="token string">'git rebase'</span>
<span class="token assign-left variable">grba</span><span class="token operator">=</span><span class="token string">'git rebase --abort'</span>
<span class="token assign-left variable">grbc</span><span class="token operator">=</span><span class="token string">'git rebase --continue'</span>
<span class="token assign-left variable">grbi</span><span class="token operator">=</span><span class="token string">'git rebase -i'</span>
<span class="token assign-left variable">grbm</span><span class="token operator">=</span><span class="token string">'git rebase master'</span>
<span class="token assign-left variable">grbs</span><span class="token operator">=</span><span class="token string">'git rebase --skip'</span>
<span class="token assign-left variable">grep</span><span class="token operator">=</span><span class="token string">'grep  --color=auto --exclude-dir={.bzr,CVS,.git,.hg,.svn}'</span>
<span class="token assign-left variable">grh</span><span class="token operator">=</span><span class="token string">'git reset HEAD'</span>
<span class="token assign-left variable">grhh</span><span class="token operator">=</span><span class="token string">'git reset HEAD --hard'</span>
<span class="token assign-left variable">grmv</span><span class="token operator">=</span><span class="token string">'git remote rename'</span>
<span class="token assign-left variable">grrm</span><span class="token operator">=</span><span class="token string">'git remote remove'</span>
<span class="token assign-left variable">grset</span><span class="token operator">=</span><span class="token string">'git remote set-url'</span>
<span class="token assign-left variable">grt</span><span class="token operator">=</span><span class="token string">'cd $(git rev-parse --show-toplevel || echo ".")'</span>
<span class="token assign-left variable">gru</span><span class="token operator">=</span><span class="token string">'git reset --'</span>
<span class="token assign-left variable">grup</span><span class="token operator">=</span><span class="token string">'git remote update'</span>
<span class="token assign-left variable">grv</span><span class="token operator">=</span><span class="token string">'git remote -v'</span>
<span class="token assign-left variable">gsb</span><span class="token operator">=</span><span class="token string">'git status -sb'</span>
<span class="token assign-left variable">gsd</span><span class="token operator">=</span><span class="token string">'git svn dcommit'</span>
<span class="token assign-left variable">gsi</span><span class="token operator">=</span><span class="token string">'git submodule init'</span>
<span class="token assign-left variable">gsps</span><span class="token operator">=</span><span class="token string">'git show --pretty=short --show-signature'</span>
<span class="token assign-left variable">gsr</span><span class="token operator">=</span><span class="token string">'git svn rebase'</span>
<span class="token assign-left variable">gss</span><span class="token operator">=</span><span class="token string">'git status -s'</span>
<span class="token assign-left variable">gst</span><span class="token operator">=</span><span class="token string">'git status'</span>
<span class="token assign-left variable">gsta</span><span class="token operator">=</span><span class="token string">'git stash save'</span>
<span class="token assign-left variable">gstaa</span><span class="token operator">=</span><span class="token string">'git stash apply'</span>
<span class="token assign-left variable">gstc</span><span class="token operator">=</span><span class="token string">'git stash clear'</span>
<span class="token assign-left variable">gstd</span><span class="token operator">=</span><span class="token string">'git stash drop'</span>
<span class="token assign-left variable">gstl</span><span class="token operator">=</span><span class="token string">'git stash list'</span>
<span class="token assign-left variable">gstp</span><span class="token operator">=</span><span class="token string">'git stash pop'</span>
<span class="token assign-left variable">gsts</span><span class="token operator">=</span><span class="token string">'git stash show --text'</span>
<span class="token assign-left variable">gsu</span><span class="token operator">=</span><span class="token string">'git submodule update'</span>
<span class="token assign-left variable">gts</span><span class="token operator">=</span><span class="token string">'git tag -s'</span>
<span class="token assign-left variable">gtv</span><span class="token operator">=</span><span class="token string">'git tag | sort -V'</span>
<span class="token assign-left variable">gunignore</span><span class="token operator">=</span><span class="token string">'git update-index --no-assume-unchanged'</span>
<span class="token assign-left variable">gunwip</span><span class="token operator">=</span><span class="token string">'git log -n 1 | grep -q -c "\-\-wip\-\-" &amp;&amp; git reset HEAD~1'</span>
<span class="token assign-left variable">gup</span><span class="token operator">=</span><span class="token string">'git pull --rebase'</span>
<span class="token assign-left variable">gupv</span><span class="token operator">=</span><span class="token string">'git pull --rebase -v'</span>
<span class="token assign-left variable">gwch</span><span class="token operator">=</span><span class="token string">'git whatchanged -p --abbrev-commit --pretty=medium'</span>
<span class="token assign-left variable">gwip</span><span class="token operator">=</span><span class="token string">'git add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify -m "--wip--"'</span>
<span class="token assign-left variable">history</span><span class="token operator">=</span><span class="token string">'fc -l 1'</span>
<span class="token assign-left variable">l</span><span class="token operator">=</span><span class="token string">'ls -lah'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


