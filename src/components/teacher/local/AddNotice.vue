<template>
  <div id="add-notice">
    发布通知
    <el-button round>发布</el-button>
    <el-input v-model="headline" placeholder="标题"></el-input>
    <el-input
      type="textarea"
      :rows="3"
      autosize
      placeholder="请输入内容"
      v-model="content">
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'AddNotice',
  data () {
    return {
      headline: '',
      content: ''
    }
  }
}
</script>

<style scoped>
  #add-notice {
    margin: 20px 40px;
    width: 80%;
  }
  .el-button {
    float: right;
  }
</style>
