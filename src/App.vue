<template>
  <router-view/>
</template>

<script lang="ts">
import {ref, provide, watch} from 'vue';
import {router} from './router';
import {useRoute} from 'vue-router';

export default {
  name: 'App',
  setup(props, context) {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width <= 500 ? false : true);
    provide('asideVisible', asideVisible);
    router.afterEach((to) => {
      if (width < 500) {
        asideVisible.value = false;

      }
    });
  }
};
</script>
