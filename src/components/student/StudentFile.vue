<template>
  <div id="student-file">
    <file-list :courseId="courseId"></file-list>
  </div>
</template>

<script>
import FileList from '../FileList.vue'
export default {
  name: 'StudentFile',
  data () {
    return {
    }
  },
  props: {
    courseId: 0
  },
  components: {
    FileList
  }
}
</script>

<style scoped>
  #student-file {
    margin: 10px 20px;
    height: 580px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
  }
  .el-table {
    width: 95%;
  }
  .el-table -webkit-scrollbar {
    display: none;
  }
</style>
