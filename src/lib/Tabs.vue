<template>
  <div class="ss-tabs">
    <div class="ss-tabs-nav">
      <!-- 如果当前元素存在，则navItems的第index个=当前元素-->
      <div class="ss-tabs-nav-item"
           v-for="(t,index) in titles" :key="index"
           :ref="el => { if (el) navItems[index] = el }"
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
import {computed, ref, onMounted} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    //获取v-for里面的所有div
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref(null)
    onMounted(() => {
      const divs = navItems.value;
      //获取有class为selected的div
      const result = divs.filter(div => div.classList.contains('selected'))[0];
      // const width = result.getBoundingClientRect().width
      const {width} = result.getBoundingClientRect()
      indicator.value.style.width=width+ 'px'
    });

    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const current = computed(() => {
      console.log('重新 return');
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
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
      current,
      select,
      navItems,
      indicator
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

