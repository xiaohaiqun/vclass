<template>
  <div id="correction">
    <h3>文件</h3>
    <el-table :data="StudentHomework.files" >
      <el-table-column prop="filename" label="文件名称" width="140">
      </el-table-column>
      <el-table-column prop="filesize" label="文件大小" width="120">
      </el-table-column>
      <el-table-column prop="uploader" label="上传者">
      </el-table-column>
    </el-table>
    <h3>说明</h3>
    <p>{{StudentHomework.explain}}</p>
  </div>
</template>

<script>
export default {
  name: 'Correction',
  data () {
    return {
      StudentHomework: {
        headline: '',
        content: '',
        files: [],
        explain: '',
        state: false,
        score: 0,
        feedback: ''
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
