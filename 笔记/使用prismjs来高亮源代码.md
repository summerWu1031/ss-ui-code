## 如何高亮源代码
* 可以使用prism.js这个库
~~~
yarn add prismjs
~~~
1. 引入
~~~vue
<script lang="ts">
import 'prismjs';
import 'prismjs/themes/prism.css';
const Prism = (window as any).Prism;

export default {
  setup() {
    return {Prism};
  }
};
</script>
~~~
2.使用
* class="language-html" 添加背景色 可以根据需求为"language-css","language-javascript"
* Prism.highlight(code, Prism.languages.javascript, 'javascript');
* code 为要高亮的源代码
* Prism.languages.javascript 可以改为Prism.languages.html Prism.languages.css 等
~~~html
<pre class="language-html" v-html="Prism.highlight(code, Prism.languages.html, 'html')"/>
~~~