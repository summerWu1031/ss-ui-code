### Teleport标签
* <Teleport to="body"></Teleport>等于传送门 to传送到body下面
~~~vue
<template>
  <Teleport to="body">
    <template v-if="visible">
      <div class="ss-dialog-overlay" @click="onClickOverlay"></div>
      <div class="ss-dialog-wrapper">
        <div class="ss-dialog">
          <header>
            <slot name="title"/>
            <div class="ss-dialog-close-wrapper">
              <span class="ss-dialog-close" @click="close">x</span>
            </div>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button level="main" @click="ok">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </template>
  </Teleport>

</template>
~~~
~~~vue
<template>
  <div>DialogDemo</div>
  <h1>示例</h1>
  <div style="position: relative; z-index: 1;">
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x"
            :onClickOverlay="false"
            :ok="f1"
            :cancel="f2"
    >
      <template v-slot:title>
        <strong>123</strong>
      </template>
      <template v-slot:content>
        <div>hello</div>
        <div>world</div>
      </template>
    </Dialog>
  </div>
  <div style="position: relative; z-index: 2; width: 300px; height: 300px; background: red;"></div>
</template>
~~~
* 传送到body下面不受原本的层级困扰
![img.png](img.png)
  * 如果不传送到body下面则为这种效果
  ![img_1.png](img_1.png)