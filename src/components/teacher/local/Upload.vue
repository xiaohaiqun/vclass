<template>
  <div id="upload">
    <el-upload
      class="upload-demo"
      drag
      action="https://localhost:8080/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">文件不超过50M</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  #upload {
    margin: 20px 40px;
    width: 80%;
  }
</style>
