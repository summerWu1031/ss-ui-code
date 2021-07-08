<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Component :is="Switch1"/>
      </div>
      <div class="demo-actions">
        <Button @click="toggle1">查看代码</Button>
      </div>
      <div class="demo-code" v-if="button1">
        <pre class="language-html" v-html="Prism.highlight(Switch1.__sourceCode, Prism.languages.html, 'html')"/>
      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled </h2>
      <div class="demo-component">
        <Component :is="Switch2"/>
      </div>
      <div class="demo-actions">
        <Button @click="toggle2">查看代码</Button>
      </div>
      <div class="demo-code" v-if="button2">
        <pre class="language-html" v-html="Prism.highlight(Switch2.__sourceCode, Prism.languages.html, 'html')"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import Switch1 from './Switch1.demo.vue';
import Switch2 from './Switch2.demo.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';

const Prism = (window as any).Prism;

export default {
  components: {Switch, Button},
  setup() {
    const bool = ref(false);
    const button1 = ref(false);
    const toggle1 = () => {
      button1.value = !button1.value;
    };
    const button2 = ref(false);
    const toggle2 = () => {
      button2.value = !button2.value;
    };

    return {bool, Switch2, Switch1, toggle1, button1, toggle2, button2,Prism};
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>