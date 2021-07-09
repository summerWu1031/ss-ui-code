<template>
      <div >
        <div class="topNavBanner">
          <Topnav :home="false"/>
          <div class="banner">
            <h1>轱辘UI</h1>
            <h2>一个厉害的 UI 框架</h2>
            <p class="actions">
              <a href="https://github.com">GitHub</a>
              <router-link to="/doc">开始</router-link>
            </p>
          </div>
          <img src="../assets/backgroundImg.png" alt="">
        </div>
        <div class="features">
          <ul>
            <li>
              <svg>
                <use xlink:href="#icon-vue"></use>
              </svg>
              <h3>基于 Vue 3</h3>
              <p>骄傲地使用了 Vue 3 Composition API</p>
            </li>
            <li>
              <svg>
                <use xlink:href="#icon-ts"></use>
              </svg>
              <h3>基于 TypeScript </h3>
              <p>源代码采用 TypeScript 书写（非严格检查）</p>
            </li>
            <li>
              <svg>
                <use xlink:href="#icon-light"></use>
              </svg>
              <h3>代码易读</h3>
              <p>每个组件的源代码都极其简洁</p>
            </li>
          </ul>
        </div>
      </div>


</template>
<script lang="ts">


import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav}
};
</script>

<style lang="scss" scoped>
$border-radius: 4px;

.topNavBanner {
  background: rgb(232,218,243);
  background: linear-gradient(354deg, rgba(232,218,243,1) 0%, rgba(165,182,255,1) 61%, rgba(141,171,255,1) 100%);
  position: relative;
  >img{
    width:180px;
    position: absolute;
    top: 100%;
    right: 3%;
    transform: translateY(-50%);
  }
}

.features {
  margin: 32px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    >ul {
      >li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    >ul {
      >li {
        width: 33.3333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    >li{
      margin: 16px 0;
      display: grid;
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      grid-template-areas:
          "icon title"
          "icon text";
      justify-content: start;
      align-content: space-between;
      >svg{
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3{
        grid-area: title;
        font-size: 24px;
      }
      >p{
        grid-area: text;
      }
    }
  }


}

.banner {
  color: #ffffff;
  padding: 80px 0 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >h1{
    padding: 6px 0;
  }
  >h2{
    padding-bottom: 6px;
  }
  > .actions {
    padding: 6px 0;
    a {
      margin: 0 8px;
      background-color:rgba(142, 114, 215,0.3);
      color: #fff;
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
