<template>
  <div id="app">
    <upload></upload>
    <!-- 组件渲染的位置 -->
    <div></div>
    <router-view id="test"></router-view>
  </div>
</template>

<script>
import upload from '@/components/upload.vue'
export default {
  name: 'App',
  components: { upload }
}
</script>

<style>
#app{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  /* align-items: center; */
}
#test{
  background-color: red;
}
</style>
