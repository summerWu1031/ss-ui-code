<template>
    <div>
      <button :class="{checked}" @click="toggle">
        <span></span>
      </button>
    </div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  setup(){
    const checked = ref(false)
    const toggle = ()=>{
      checked.value = !checked.value
    }
    return {checked,toggle}
  }
}
</script>

<style lang="scss" scoped>
  $h:22px;
  $h2:$h - 4px;
  button{
    height: $h; 
    width: $h*2;
    border: none;
    background-color: gray;
    border-radius: $h/2;
    position: relative;
  }
  button.checked >span{
    left: calc(100% - #{$h2} - 2px);
  }
  button.checked{
    background-color: rgb(77,116,242) ;

  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    background-color: #fff;
    border-radius: $h2/2;
  }
</style>