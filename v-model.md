### vue3和vue2使用v-modeld 的区别
* vue3 父组件
  v-model:value 提供的props的名称需要与子组件'update:value'事件名称相对应
  * 如果是v-model:xxx 子组件相对的名称就是update:xxx'
~~~vue
<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
export default {
  components: {Switch},
  setup(){
    const bool = ref(false)
    return {bool}
  }
}
</script>
~~~

* vue3 子组件里面props的名称需要和context.emit的第一个参数相对需为：update:propsName
~~~vue
<template>
    <div>
      <button :class="{checked:value}" @click="toggle">
        <span></span>
      </button>
    </div>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup(props, context){
    const toggle = ()=>{
      context.emit('update:value', !props.value)
    }
    return {toggle}
  }
}
</script>
~~~

* vue2的用法
* 父组件 
* @change="test=$event" 中@change要与子组件中$emit('change',!xxx)对应
* $event=$emit('change',!xxx)的第二个参数!xxx
~~~vue
<template>
  <Switch :xxx="test" @change="test=$event" />
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
export default {
  components: {Switch},
  data(){
    return {
      test:true
    }
  }
}
</script>
~~~

* 子组件
~~~vue
<template>
    <div>
      <button :class="{checked:xxx}" @click="$emit('change',!xxx)">
        <span></span>
      </button>
    </div>
</template>

<script lang="ts">
export default {
  props: {
    xxx:Boolean
  }
}
</script>
~~~