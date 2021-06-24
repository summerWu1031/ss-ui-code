<template>
  <div>Button示例</div>
  <h1>示例</h1>
  <Button @click="onClick"
          @mousemove="over"
          size="small"
          title="button"
  >你好
  </Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi');
    };
    const over = () => {
      console.log('over');
    };
    return {onClick, over};
  }
};
</script>

<style lang="scss" scoped>

</style>