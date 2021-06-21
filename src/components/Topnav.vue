<template>
  <div class="topnav">
    <svg class="icon toggleAside" aria-hidden="true" @click="toggleMenu" >
      <use xlink:href="#icon-yincangmulu"></use>
    </svg>
    <div class="logo" >LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue'

export default {

  setup(){
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    const toggleMenu = ()=>{
      asideVisible.value = !asideVisible.value
    }
    return {toggleMenu,asideVisible}
  }
}
</script>
<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
.toggleAside {
  display: none;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
}
@media (max-width: 500px) {
  .topnav {
    >.menu{
      display: none;
    }
    >.logo{
      margin: 0 auto;
    }
    >.toggleAside{
      display: inline-block;
    }
  }

}
.icon {
  width: 1.5em; height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>