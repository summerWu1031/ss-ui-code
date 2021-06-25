<template>
  <div>DialogDemo</div>
  <h1>示例</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x"
            :onClickOverlay="false"
            :ok="f1"
            :cancel="f2"
    >
      <template v-slot:title>
        <strong>123</strong>
      </template>
      <template v-slot:content>
        <div>hello</div>
        <div>world</div>
      </template>
    </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">

import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {h, ref} from 'vue';
import {openDialog} from '../lib/openDialog'
export default {
  components: {Button, Dialog},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      console.log('ok');
    };
    const f2 = () => {
      console.log('cancel')
    };
    const showDialog = ()=>{
      openDialog({
        title:h('strong',{},'标题'),
        content:'Hello World',
        ok(){
          console.log('ok');
        },
        cancel(){
          console.log('cancel');
        }
      })
    }
    return {x, toggle, f1, f2,showDialog};
  }
};
</script>

<style lang="scss" scoped>

</style>