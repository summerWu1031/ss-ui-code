### Vue3 中 Context的用法

Context 传递给 setup 函数的第二个参数是 context。context 是一个普通的 JavaScript 对象，它暴露组件的三个 property：

~~~vue
// MyBook.vue

export default {
setup(props, context) {
// Attribute (非响应式对象)
console.log(context.attrs)

// 插槽 (非响应式对象)
console.log(context.slots)

// 触发事件 (方法)
console.log(context.emit)
}
}
~~~
### 用JS获取插槽内容
~~~vue
const defaults = context.slots.default()
~~~
### context.slots.default()确认运行时子组件的类型
~~~vue
//  TagsDemo

<template>
  <div>TagsDemo</div>
  <h1>示例1</h1>
  <Tabs>
    <Tab>内容1</Tab>
    <Tab>内容2</Tab>
  </Tabs>
</template>
~~~
~~~vue
// Tab
<template>
  <div>
    Tab组件
  </div>
</template>
~~~
~~~vue
// Tags
<template>
  <div>
    Tabs组件
    <component :is="defaults[0]"/>
    <component :is="defaults[1]"/>
  </div>
</template>

<script lang="ts">
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    console.log(defaults);
    return {
      defaults
    };
  }
};
</script>
~~~
* context.slots.default() log出来显示除一个数组，长度为2。
对应Tags组件里面有两个Tag组件
~~~vue 
  <component :is="defaults[0]"/>
~~~
* 可以把Tag组件里面的内容展示是出来
![img_2.png](img_2.png)
  
### 用 defaults[0].type来判断子组件的类型
~~~vue
<script lang="ts">
import Tab from './Tab.vue';
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    console.log(defaults[0].type===Tab);
    console.log(defaults[1].type===Tab);
    return {
      defaults
    };
  }
};
</script>
~~~
![img_3.png](img_3.png)

### context.attrs对比props
~~~vue
<template>
  <div >
    <button >
      <slot/>
    </button>
  </div>
</template>
~~~
使用该组件
~~~vue
<Button @click="xxx" @focus="yyy" size="small">I'm button</Button>
~~~
以上例子中，click、focus事件的作用范围是组件的根结点`<div>`，而通常，我们是想在`<button>`上绑定事件。

所以要取消事件，然后再手动绑定到`<button>`上。
1. 的选项中设置：`inheritAttrs:false `,取消所有继承
2. 手动绑定到想要绑定的组件某元素上， 即：
   `<div><button v-bind="$attrs"></button></div>`
3. $attrs=context.attrs
4. 可以分离不同属性，到对应的节点
   如下面代码div 继承size, button继承其余的属性
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

* 总结
1. 对于属性size而言，如果在组件中props声明过size，那么$attrs里就不会出现size了。

2. props 是父类向子类传递并且需要子类主动接收的属性

3. props不包含事件；
4. $attrs 默认是父类传递到子类根元素的属性，子类不用主动接收，会直接放在子类根元素上。 而$attrs 的这种默认行为，可以通过设置inheritAttrs:false，这些默认行为将会被取消。
