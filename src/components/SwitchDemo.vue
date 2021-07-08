<template>
  <div >
    <h1>Switch 组件示例 </h1>
    <Demo title="常规用法" :component="Switch1"/>
    <Demo title="支持 displayed" :component="Switch2"/>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import Switch1 from './Switch1.demo.vue';
import Switch2 from './Switch2.demo.vue';
import Demo from './Demo.vue';


export default {
  components: {Demo, Switch, Button},
  setup() {
    const bool = ref(false);

    return {bool, Switch2, Switch1};
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