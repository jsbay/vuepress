import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端",
    icon: "hot",
    prefix: "/web/",
    children: [
      {
        text: "vue2",
        icon: "vue",
        link: 'vue2',
        // prefix: "vue2/",
        // children: [
        //   { text: "部署", icon: "edit", link: "depoly" },
        //   { text: "文章 2", icon: "edit", link: "article2" },
        //   "article3",
        //   "article4",
        // ],
      },
      {
        text: "CSS",
        icon: "css",
        link: 'CSS',
      }
    ],
  },
  {
    text: "系统",
    icon: "OS",
    prefix: "/sys/",
    children: [
      {
        text: "mac",
        icon: "edit",
        link: 'mac',
      },
      {
        text: "win",
        icon: "windows",
        link: 'win',
      },
      {
        text: "linux",
        icon: "linux",
        link: 'linux',
      }
    ],
  },
  {
    text: "微信",
    icon: "wechat",
    prefix: "/weixin/",
    children: [
      {
        text: "regex",
        icon: "edit",
        link: 'regex',
      },
    ],
  },
  {
    text: "其它",
    icon: "others",
    prefix: "/other/",
    children: [
      {
        text: "collect",
        icon: "ability",
        link: 'collect',
      },
      {
        text: "git",
        icon: "git",
        link: 'git',
      },
      {
        text: "docker",
        icon: "edit",
        link: 'docker',
      },
      {
        text: "薅羊毛",
        icon: "edit",
        link: 'hym',
      },
    ],
  },
]);
