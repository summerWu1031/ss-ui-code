<template>
  <div class="ss-tabs">
    <div class="ss-tabs-nav">
      <div class="ss-tabs-nav-item"
           v-for="(t,index) in titles" :key="index"
           :class="{selected: selected===t}"
           @click="select(t)"
      >{{ t }}
      </div>
    </div>
    <div class="ss-tabs-content">
      <component class="ss-tabs-content-item"
                 :is="current"
      />
      {{ current }}
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子标签必须是Tab');
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (t: string) => {
      return context.emit('update:selected', t);
    };
    const current = computed(() => {
      return defaults.filter((i) => {
        return i.props.title === props.selected;
      })[0];
    });

    return {
      defaults, titles, select, current
    };
  }
};
</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.ss-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

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
  }

  &-content {
    padding: 8px 0;
  }
}
</style>