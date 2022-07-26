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
