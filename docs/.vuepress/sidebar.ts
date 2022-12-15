import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/web/vue2/": [
    "PWA",
    "depoly",
    "router-lazyload",
    "dynamic-components",
    "v-for-v-if",
    "excel",
    "eslint",
    "webpack",
    "mock",
    "page-custom",
    "provide-inject"
  ],
  "/web/css/": [
    "bem",
  ],
  "/sys/mac/": [],
  "/sys/win/": ['nginx2service'],
  "/sys/linux/": [],
  "/other": ['git', 'docker', 'hym'],
  "/other/git/": ['oh-my-zsh-alias', 'multiple-remote', 'frontend-git-commit-constraints'],
  "/other/docker/": ['oracle'],
  "/other/hym/": ['ql-panel', ],
});
