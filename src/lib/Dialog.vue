<template>
  <Teleport to="body">
    <template v-if="visible">
      <div class="ss-dialog-overlay" @click="onClickOverlay"></div>
      <div class="ss-dialog-wrapper">
        <div class="ss-dialog">
          <header>
            <slot name="title"/>
            <div class="ss-dialog-close-wrapper">
              <span class="ss-dialog-close" @click="close">x</span>
            </div>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button level="main" @click="ok">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </template>
  </Teleport>

</template>
<script lang="ts">
import Button from './Button.vue';

export default {
  components: {Button},
  props:{
    visible:{
      type:Boolean,
      default:false
    },
    onClickOverlay:{
      type:Boolean,
      default: true
    },
    ok:{
      type:Function
    },
    cancel:{
      type:Function
    }
  },
  setup(props,context){
    const close = ()=>{
      context.emit('update:visible',false)
    }
    const onClickOverlay = ()=>{
      if(props.onClickOverlay){
        close()
      }
    }
    const  ok = ()=>{
      if(props.ok && props.ok() !== false){
        close()
      }
    }
    const cancel =()=>{
      if(props.cancel && props.cancel() !== false){
        close()
      }
    }
    return{close,onClickOverlay,ok,cancel}
  }
};
</script>

<style lang="scss" scoped>
$radius: 4px;
$border-color: #d9d9d9;
.ss-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 16em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    position: relative;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: center;
  }

  &-close-wrapper {
    background-color: #ddd;
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    top: -8px;
    right: -8px;
    >.ss-dialog-close{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>