<template>
  <div id="app">
    <upload></upload>
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
</style>
