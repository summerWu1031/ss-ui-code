<template>
  <div>
    <div class="topNavBanner">
      <Topnav/>
      <div class="banner">
        <h1>轱辘UI</h1>
        <h2>一个厉害的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <div class="right">
            <h3>基于 Vue 3</h3>
            <p>骄傲地使用了 Vue 3 Composition API</p>
          </div>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <div class="right">
            <h3>基于 TypeScript </h3>
            <p>源代码采用 TypeScript 书写（非严格检查）</p>
          </div>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <div class="right">
            <h3>代码易读</h3>
            <p>每个组件的源代码都极其简洁</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">


import Topnav from '../Topnav.vue';

export default {
  components: {Topnav}
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.topNavBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  margin: 28px auto;
  width: 100%;
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    > li {
      margin: 16px 0;
      flex-direction: row;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 400px;
      > svg {
        width: 64px;
        height: 64px;
        margin-left: 6px;
        margin-right: 18px;
      }
      > .right {
        margin-right: 6px;

      }
    }

  }

  @media (min-width: 800px) {
    width: 800px;
    > ul {
      justify-content: space-between;
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      justify-content: space-between;
    }
  }
}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
    }

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
