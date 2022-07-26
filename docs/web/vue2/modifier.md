# vue2 修饰符

## .sync 跨组件中的使用

> 参考 https://www.zhihu.com/question/62685904?from=singlemessage

```vue
<template>
  <div>
    <button @click="localModal = true">show</button>
    <item :modal.sync="localModal"></item>
  </div>
</template>

<script>
export default {
  name: "item",
  props: ["modal"],
  data() {
    return {
      localModal: this.modal,
    };
  },
  watch: {
    modal(val) {
      this.localModal = val;
    },
    localModal(val) {
      this.$emit("update:modal", val);
    },
  },
};
</script>
```
