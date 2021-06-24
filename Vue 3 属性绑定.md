### Vue 3 属性绑定
1. 默认所有属性都绑定到根元素
2. 使用 inheritAttrs: false 可以取消默认绑定
3. 使用 $attrs 或者 context.attrs 获取所有属性
4. 使用 v-bind="$attrs" 批量绑定属性
~~~vue
<template>
  <div :size="size">
    <button v-bind="$attrs"> 批量绑定属性，所有的属性都会继承到button上面
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs:false ,
  //父组件的所有属性会继承到根标签上即为在这里的div
  //设置继承属性false则任何标签都不会继承属性
}
</script>
~~~

5. 使用 const {size, level, ...xxx} = context.attrs 将属性分开

~~~vue
<template>
  <div :size="size">
    <button v-bind="rest">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs:false ,
  setup(props, context) {
    const { size, ...rest } = context.attrs
    return { size, rest };
    //使用 const {size, level, ...xxx} = context.attrs 将属性分开
    //...rest表示除size外所有属性
  },
}
</script>
~~~

