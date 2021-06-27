### vue组件中的样式属性：scoped，在父组件中无法修改子组件样式
* 此时component组件里面的文字并不会变成红色，因为scoped限制，无法修改引入的子组件的样式
~~~vue
<template>
  <div class="tabs">
    <component class="tabs-content-item"/>
  </div>
</template>

<style lang="scss" scoped>
.ss-tabs-content-item{
  color: red;
}
</style>
~~~
* 可以使用深度选择器::v-deep 解决
~~~vue
<style lang="scss" scoped>
.tabs::v-deep .tabs-content-item{
  color: red;
}
</style>
~~~

* 或者不用scoped,给class都添加独特的标识
~~~vue
<template>
  <div class="ss-tabs">
    <component class="ss-tabs-content-item"/>
  </div>
</template>

<style lang="scss" >
.ss-tabs-content-item{
  color: red;
}
</style>
~~~

* 给特定标识的组件添加全局样式
* class 为"ss-"开始的 例如class='ss-nav'
* class 为（空格）ss-的
例如 class='red ss-title'
~~~scss
//ss.scss
[class^="ss-"], [class*=" ss-"] {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica,
  "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB",
  "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN",
  "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti",
  SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
}
~~~
~~~ts
//main.ts
import './lib/ss.scss';
import './index.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
~~~
