<template>
  <div :size="size">
<!--    <button v-bind="$attrs"> 批量绑定属性，所有的属性都会继承到button上面-->
    <button v-bind="rest">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs:false ,
  //父组件的所有属性会继承到根标签上即为在这里的div
  //设置继承属性false则任何标签都不会继承属性
  setup(props, context) {
    const { size, ...rest } = context.attrs
    return { size, rest };
    //使用 const {size, level, ...xxx} = context.attrs 将属性分开
  },
}
</script>

<style lang="scss" scoped>
div{
  border: 1px solid red;
}
</style>