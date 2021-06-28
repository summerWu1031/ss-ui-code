<template>
  <div class="ss-tabs">
    <div class="ss-tabs-nav" ref="container">
      <!-- 如果当前元素存在，则navItems的第index个=当前元素-->
      <div class="ss-tabs-nav-item"
           v-for="(t,index) in titles" :key="index"
           :ref="el => {  if (t===selected) selectedItem = el }"
           @click="select(t)"
           :class="{selected: t=== selected}"> {{ t }}
      </div>
      <div class="ss-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="ss-tabs-content">
      <component class="ss-tabs-content-item"
                 :class="{selected: c.props.title === selected }"
                 v-for="c in defaults" :is="c"/>

    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed, ref,  onMounted, watchEffect} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    //获取v-for里面的所有div
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    onMounted(()=>{
      //watchEffect在挂载前就会运行，所以需要先挂载再wactchEffect，不然selectedItem.value为null会报错
      //watchEffect挂载前，挂载中，更新时都会出现
      watchEffect(()=>{
        // const width = result.getBoundingClientRect().width
        const {width} = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {left: left1} = container.value.getBoundingClientRect();
        const {left: left2} = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + 'px';
      })
    });
    // 另一种解决方法 用if判断，不为null再执行
    // watchEffect(()=>{
    //   if(selectedItem.value && indicator.value){
    //     // const width = result.getBoundingClientRect().width
    //     const {width} = selectedItem.value.getBoundingClientRect();
    //     indicator.value.style.width = width + 'px';
    //     const {left: left1} = container.value.getBoundingClientRect();
    //     const {left: left2} = selectedItem.value.getBoundingClientRect();
    //     const left = left2 - left1;
    //     indicator.value.style.left = left + 'px';
    //   }
    // })


    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };


    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container
    };
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.ss-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }

}


</style>

