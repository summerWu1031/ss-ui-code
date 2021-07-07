<template>
  <div class="topnav" >
    <div class="logo" v-if="home" >
      <svg class="icon toggleAside" aria-hidden="true" @click="toggleMenu" >
        <use xlink:href="#icon-tool"></use>
      </svg>
    </div>
    <ul class="menu">
      <li class="doc">
        <router-link to="/doc">文档</router-link>
      </li>
      <li>
        <router-link to="/">
          <svg class="icon toggleAside" aria-hidden="true" @click="toggleMenu" >
            <use xlink:href="#icon-home"></use>
          </svg>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue'

export default {
  props:{
    home:{
      type:Boolean,
      default:true
    }
  },
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
$color: #007974;
.topnav {
  color: #61f6f9;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg {
      width: 32px;
      height: 32px;
      &:hover {
        border-bottom: 1px solid transparent;
        cursor: pointer;
      }
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    justify-content: right;
    > li {
      margin: 0 1em;
      &.doc{
        background-color: rgba(112, 158, 255,0.8);
        border-radius: 24px;
        padding:2px 18px;
        color: #fff;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
  >.toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
}

@media (max-width: 500px) {
  .topnav {
    >.menu{
      //>.doc{
      //  display: none;
      //}
    }
    //>.logo{
    //  margin: 0 auto;
    //}
    >.toggleAside{
      display: inline-block;
    }
  }

}

</style>