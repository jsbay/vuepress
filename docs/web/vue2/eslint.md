# eslint

## 常用的 eslint 规则

```json
// 0 - off; 1 - warning; 2 - error
{
	"rules": {
    // tempalte 缩进校验 https://eslint.vuejs.org/rules/html-indent.html
		"vue/html-indent": ["error", 2, { attribute: 1, baseIndent: 1, closeBracket: 0, alignAttributesVertically: true, ignores: [] }],

    // html 中的{{}} 两边必须有空格  https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
		"vue/mustache-interpolation-spacing": ["error", "always" | "never"],

    // 单行属性最多 https://eslint.vuejs.org/rules/max-attributes-per-line.html
		"vue/max-attributes-per-line": ["error", { singleline: 3, multiline: { max: 1, allowFirstLine: false } }],

    // 属性排序 https://eslint.vuejs.org/rules/attributes-order.html
		"vue/attributes-order": ["error", { order: ["DEFINITION", "LIST_RENDERING", "CONDITIONALS", "RENDER_MODIFIERS", "GLOBAL", "UNIQUE", "TWO_WAY_BINDING", "OTHER_DIRECTIVES", "OTHER_ATTR", "EVENTS", "CONTENT"], alphabetical: true }],

    // 组件名命名规则 https://eslint.vuejs.org/rules/component-definition-name-casing.html
		"vue/component-definition-name-casing": ["error", "PascalCase" | "kebab-case"],
    // export default {
    //   <!-- ✗ BAD -->
    //   name: 'my-component'
    // }

    // 组件在 template 的使用 https://eslint.vuejs.org/rules/component-name-in-template-casing.html
		"vue/component-name-in-template-casing": ["error", "PascalCase" | "kebab-case", { "registeredComponentsOnly": true, "ignores": [] }],
    // <template>
    //   <!-- ✓ GOOD -->
    //   <CoolComponent />
    //   <!-- ✗ BAD -->
    //   <cool-component />
    //   <coolComponent />
    //   <Cool-component />
    // </template>
	}
}
```

## eslint 一键修复

```bash
# 一键修复 src 下 js/vue 文件的格式错误
npx eslint --ext .js,.vue src --fix
```

:::info 参数说明
eslint [options] file.js [file.js] [dir]

Basic configuration:

- --no-eslintrc Disable use of configuration from .eslintrc.\_
- -c, --config path::String Use this configuration, overriding .eslintrc.\_ config options if present
- --env [String] Specify environments
- --ext [String] Specify JavaScript file extensions - default: .js
- --global [String] Define global variables
- --parser String Specify the parser to be used
- --parser-options Object Specify parser options
- --resolve-plugins-relative-to path::String A folder where plugins should be resolved from, CWD by default

Specifying rules and plugins:

- --rulesdir [path::String] Use additional rules from this directory
- --plugin [String] Specify plugins
- --rule Object Specify rules

Fixing problems:

- --fix Automatically fix problems
- --fix-dry-run Automatically fix problems without saving the changes to the file system
- --fix-type Array Specify the types of fixes to apply (problem, suggestion, layout)

Ignoring files:

- --ignore-path path::String Specify path of ignore file
- --no-ignore Disable use of ignore files and patterns
- --ignore-pattern [String] Pattern of files to ignore (in addition to those in .eslintignore)

Using stdin:

- --stdin Lint code provided on \<STDIN> - default: false
- --stdin-filename String Specify filename to process STDIN as

Handling warnings:

- --quiet Report errors only - default: false
- --max-warnings Int Number of warnings to trigger nonzero exit code - default: -1

Output:

- -o, --output-file path::String Specify file to write report to
- -f, --format String Use a specific output format - default: stylish
- --color, --no-color Force enabling/disabling of color

Inline configuration comments:

- --no-inline-config Prevent comments from changing config or rules
- --report-unused-disable-directives Adds reported errors for unused eslint-disable directives

Caching:

- --cache Only check changed files - default: false
- --cache-file path::String Path to the cache file. Deprecated: use --cache-location - default: .eslintcache
- --cache-location path::String Path to the cache file or directory

Miscellaneous:

- --init Run config initialization wizard - default: false
- --env-info Output execution environment information - default: false
- --debug Output debugging information
- -h, --help Show help
- -v, --version Output the version number
- --print-config path::String Print the configuration for the given file
  :::
