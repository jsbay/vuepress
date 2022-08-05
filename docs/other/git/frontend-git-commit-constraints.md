# 前端项目 git 提交约束

[用 Eslint+Prettier+husky+commitlint+lint-staged+commitizen 快速搭建标准化编程规范项目](https://juejin.cn/post/7041768022284976165)

:::tip

- `commitizen` : 提供 `cli`; 通过`cli`提交， 从而规范标准的 git 提交方式， 一般**全局安装**
- `cz-customizable` : 对 `commitizen` 进行自定义配置
- `lint-staged` : 校验代码格式是否符合 设置的 `eslint` 规则
- `husky`: 针对 git 添加钩子函数
  - 在`commit-msg` 钩子函数内， 通过对 `git commit msg` 进行限制，从而达到规范提交信息
  - 在`pre-commit` 钩子函数中，通过 `npx lint-staged` 对提交的代码进行格式化

:::

## cz-config.js 示例

```js
// .cz-config.js
// https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js
module.exports = {
  types: [
    { value: "init", name: "init:     初始提交" },
    { value: "feat", name: "feat:     新功能" },
    { value: "add", name: "add:      添加依赖" },
    { value: "fix", name: "fix:      修复bug" },
    { value: "ui", name: "ui:       更新 UI" },
    {
      value: "refactor",
      name: "refactor: 重构(既不是增加feature，也不是修复bug)",
    },
    { value: "perf", name: "perf:     性能优化" },
    { value: "docs", name: "docs:     文档变更" },
    { value: "test", name: "test:     增删测试" },
    { value: "chore", name: "chore:    更改配置文件" },
    { value: "style", name: "style:    样式修改不影响逻辑" },
    { value: "revert", name: "revert:   版本回退" },
    { value: "release", name: "release:  发布" },
    { value: "deploy", name: "deploy:   部署" },
  ],
  // 默认的范围池, 不指定的话, 就可以跳过选择 scopes 这一步了
  // scopes: [
  // 	{ name: 'components' },
  // 	{ name: 'utils' },
  // 	{ name: 'styles' },
  // 	{ name: 'deps' },
  // 	{ name: 'other' }
  // ],
  allowCustomScopes: true, // 允许自定义 scope 可以实现 空的 scope
  // 重大变化, type === 'feat' || type === 'fix', 才可能需要填写
  // 即使启动了, 也是可选的
  // allowBreakingChanges: ['feat', 'fix'],
  // 消息步骤
  messages: {
    type: "选择提交类型:",
    scope: "选择修改范围(可选):",
    // 当 allowCustomScopes === true 时, 生效
    customScope: "输入修改范围(可选):",
    subject: "简要描述(必填):",
    body: "详细描述(可选):",
    breaking: "重大变化列表 (可选):",
    footer: "要关闭的issue(可选):",
    confirmCommit: "确认使用以上信息提交？(y/n/e/h)",
  },
  // 跳过问题
  skipQuestions: ["body", "footer"],
  // subject 文字长度默认是72
  subjectLimit: 72,
};
```
