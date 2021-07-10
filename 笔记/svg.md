### 如果在tszhong 引用svg标签
1. 在shrims-vue.d.ts文件中加入,否在无法import svg文件
~~~
declare module "*.svg" {
   const content: any;
   export default content;
   }
~~~
2.安装 svg sprite loader
~~~
yarn add svg-sprite-loader -D
~~~
3. 在vue.config.js配置
~~~
const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config =>{
    const dir = path.resolve(__dirname, 'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() // 包含 icons 目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录
  }
}
~~~
4. 如何使用 #logo为文件名
~~~
    <svg>
      <use xlink:href="#logo"/>
    </svg>
~~~
5. 封装一个Icon组件
~~~
<template>
  <svg class="icon">
    <use :xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">
  let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
  export default {
    props: ['name'],
    name: 'Icon'
  };
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
~~~

6. 直接引用 Icon组件
~~~
<template>
    <Icon name='iconName'/>
</template>

<script>
    import Icon from './Icon.vue';
    export default {
        components: {Icon},
    }
</script>
~~~
