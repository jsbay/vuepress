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
  ],
  "/sys/mac/": [],
  "/sys/win/": ['nginx2service'],
  "/sys/linux/": [],
  "/other/git/": ['oh-my-zsh-alias', 'multiple-remote', 'frontend-git-commit-constraints'],
});
