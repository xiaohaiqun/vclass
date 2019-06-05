<template>
  <div id="homework-submit">
    <!-- <h3>作业标题</h3>
    <p>adhkshdkjhsalfkhkfdshkj</p> -->
    <h3>情况</h3>
    <p>提交状态:<span>已交</span></p>
    <h3>作业说明</h3>
    <el-input type="textarea" v-model="input" placeholder="请输入作业说明"></el-input>
    <h3>文件</h3>
    <el-upload
      class="upload-demo"
      drag="true"
      action="https://127.0.0.1/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传不超过50M</div>
    </el-upload>
    <el-button @click="homeworkSubmit" type="warning">提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'HomeworkSubmit',
  data () {
    return {
      homeworkSubmit: [
        {
          id: 1,
          headline: '标题1',
          content: '内容askhdkjgsajdflkjsadfkjhlakshfkjhdsakfhlkjdsahkjflsdhflhsakdhf',
          state: true,
          star: 90,
          feedback: '不错'
        }
      ],
      input: ''
    }
  }
}
</script>

<style scoped>
  #homework-submit {
    width: 850px;
  }
  #homework-submit h3 {
    color: indianred;
  }
</style>
