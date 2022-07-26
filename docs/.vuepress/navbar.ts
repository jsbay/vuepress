import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端",
    icon: "web",
    prefix: "/web/",
    children: [
      {
        text: "vue2",
        icon: "edit",
        link: 'vue2',
        // prefix: "vue2/",
        // children: [
        //   { text: "部署", icon: "edit", link: "depoly" },
        //   { text: "文章 2", icon: "edit", link: "article2" },
        //   "article3",
        //   "article4",
        // ],
      }
    ],
  },
  {
    text: "系统",
    icon: "web",
    prefix: "/sys/",
    children: [
      {
        text: "mac",
        icon: "edit",
        link: 'mac',
      },
      {
        text: "win",
        icon: "edit",
        link: 'win',
      },
      {
        text: "linux",
        icon: "edit",
        link: 'linux',
      }
    ],
  },
]);
