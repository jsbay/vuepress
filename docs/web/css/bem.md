# CSS 命名规范之 BEM

## BEM

> BEM（block、element、modifier）是一种基于组件的 Web 开发方法。其背后的想法是将用户界面划分为独立的块。这使得界面开发变得简单和快速，即使是在复杂的用户界面中，它也允许在不复制和粘贴的情况下重用现有代码。

## 概念

```html
.block__element-modifier
```

- Block
  块，可重用的功能独立的页面组件。
- element
  块的子元素，不能单独使用。
- modifier
  定义块或元素的外观、状态或行为

## 举例

1. element 不能嵌套 element, 例如：`block__elem1__elem2`

```html
<!--
    Incorrect. The structure of the full element name doesn't follow the pattern:
    `block-name__element-name`
-->
<form class="search-form">
  <div class="search-form__content">
    <!-- Recommended: `search-form__input` or `search-form__content-input` -->
    <input class="search-form__content__input" />

    <!-- Recommended: `search-form__button` or `search-form__content-button` -->
    <button class="search-form__content__button">Search</button>
  </div>
</form>
```

2. modifier 前面不一定有 element

- `block-name_modifier-name`
- `block-name__element-name_modifier-name`

3. modifier 可以是键值对

- `block-name_modifier-name_modifier-value`
- `block-name__element-name_modifier-name_modifier-value`

```html
<form class="search-form search-form_theme_islands">
  <input class="search-form__input" />

  <!-- The `button` element has the `size` modifier with the value `m` -->
  <button class="search-form__button search-form__button_size_m">Search</button>
</form>
```

## 参考

1. [CSS 规范 BEM](https://juejin.cn/post/7036346662473711646)
2. 👍 [用了这些 css 命名小技巧，我的代码优雅了不少](https://juejin.cn/post/7126505567408881677) 这个里面有命名规则推荐
3. [CSS 命名-BEM 方法](https://juejin.cn/post/6872592470866133000)
