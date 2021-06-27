### Context

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