## vue3不使用webpack，如何在组件中引入md文件

1. 创建md.ts

~~~
yarn add github-markdown-css
yarn add --dev marked
~~~

~~~ts
// @ts-nocheck
import path from 'path'
import fs from 'fs'
import marked from 'marked'

const mdToJs = str => {
    const content = JSON.stringify(marked(str))
    return `export default ${content}`
}

export function md() {
    return {
        configureServer: [ // 用于开发
            async ({app}) => {
                app.use(async (ctx, next) => { // koa
                    if (ctx.path.endsWith('.md')) {
                        ctx.type = 'js'
                        const filePath = path.join(process.cwd(), ctx.path)
                        ctx.body = mdToJs(fs.readFileSync(filePath).toString())
                    } else {
                        await next()
                    }
                })
            },
        ],
        transforms: [{  // 用于 rollup // 插件
            test: context => context.path.endsWith('.md'),
            transform: ({code}) => mdToJs(code)
        }]
    }
}
~~~

2. 在组件中引入
* class="markdown-body" 可以自动引入markdown的样式
* v-html="md" 把md文件的内容转化为组件的html
~~~vue
<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script lang="ts">
import md from './intro.md';
export default {
  data() {
    return {
      md
    }
  }
};
</script>
~~~