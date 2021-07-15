## vue3如何把自己的库上传到npm
### 打包库文件,vite 对此功能不支持，需要自行配置 rollup

1. 把库整理成一个js/ts文件，作为导出
~~~ts
export { default as Switch } from './Switch.vue';
export { default as Button } from './Button.vue';
export { default as Tabs } from './Tabs.vue';
export { default as Tab } from './Tab.vue';
export { default as Dialog } from './Dialog.vue';
export { openDialog as openDialog } from './openDialog';
~~~

2. 配置rollup.config.js
* 把库里面的index.ts文件转化为dist/lib/xx.js
* 运行 rollup -c 命令
* 就会发现dist目录下面多了lib目录
~~~js
// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"

export default {
    input: 'src/lib/index.ts',
    output: {
        globals: {
            vue: 'Vue'
        },
        name: 'projectName',
        file: 'dist/lib/projectName.js',
        format: 'umd',
        plugins: [terser()]
    },
    plugins: [
        scss({ include: /\.scss$/, sass: dartSass }),
        esbuild({
            include: /\.[jt]s$/,
            minify: process.env.NODE_ENV === 'production',
            target: 'es2015'
        }),
        vue({
            include: /\.vue$/,
        })
    ],
}
~~~

3.配置package.json
* name 会为npm上面库的名称，不能与已有名称重复
* 每修改一次，version必须变动
* 运行 nmp login 命令 安装提示依次输入用户名、密码、邮箱登录（如果没有注册需要先去npm官网注册，并在邮箱认证）
* 运行 nmp publish 即可发布
* 如果npm为淘宝源需要切换到官方的源
~~~
npm config get registry
npm config set registry https://registry.npmjs.org/
~~~
~~~
{
  "name": "库的名称",
  "version": "0.0.8",
  "files": [
    "dist/lib/*"
  ],
  "main": "dist/lib/projectName.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
~~~

#### 一些细节
1. name
* package 的 name 必须是小写字母，可用 - 或 _ 连接
* package 的 name 不能跟 npm 上现有的 name 重名
2. 注册  npmjs.com 账号
* 用网页注册，然后在命令行使用 npm login 登录
* 登录之后才能 npm publish
* 使用 npm logout 可以退出登录
3. version
* 每次 publish 的版本不能与上一次的相同
* 所以从第二次开始，必须先改 version 再 publish
4. nrm 快速切换源
* 安装命令：npm i -g nrm --registry https://registry.npm.taobao.org
* nrm ls 可以查看所有源
* nrm use taobao 切到淘宝源
* nrm use npm 切到 npm 官方源

