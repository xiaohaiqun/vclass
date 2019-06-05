<template>
  <div id="teacher-file">
    <upload></upload>
    <file-list></file-list>
  </div>
</template>

<script>
import FileList from '../FileList.vue'
import Upload from './local/Upload.vue'
export default {
  name: 'TeacherFile',
  data () {
    return {
    }
  },
  components: {
    FileList,
    Upload
  }
}
</script>

<style scoped>
  #teacher-file {
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
