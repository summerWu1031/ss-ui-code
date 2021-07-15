<template>
    <div>
      <button class="ss-switch" :class="{checked:value,'disabled':disabled}" @click="toggle" :disabled="disabled">
        <span></span>
      </button>
    </div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, context){
    const toggle = ()=>{
      context.emit('update:value', !props.value)
    }
    return {toggle}
  }
}
</script>

<style lang="scss" >
  $h:22px;
  $h2:$h - 4px;
  .ss-switch{
    height: $h; 
    width: $h*2;
    border: none;
    background-color: #bfbfbf;
    border-radius: $h/2;
    position: relative;
    >span{
        position: absolute;
        top: 2px;
        left: 2px;
        width: $h2;
        height: $h2;
        background-color: #fff;
        border-radius: $h2/2;
        transition: all 250ms;
    }
    &.disabled{
      :hover{
        cursor: not-allowed;
      }
      :active{

      }
    }
    &.checked{
      background-color: rgba(77,116,242,0.5) ;
      >span{
        left: calc(100% - #{$h2} - 2px);
      }
    }
    &:active{
      >span{
        width: $h2+4px;
      }
    }
    &.checked:active{
      >span{
        width: $h2+4px;
        margin-left: -4px;
      }
    }
  }


</style>