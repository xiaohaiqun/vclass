<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Index from './pages/student-home/Index.vue'
export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
