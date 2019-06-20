<template>
  <div id="student-homework">
    <el-collapse v-for="homework in homeworkList" :key="homework.hw_id" v-model="activeName" accordion>
      <el-collapse-item :title="homework.hw_title">
        <div id="homework-submit">
          <!-- <h3>作业标题</h3>
          <p>adhkshdkjhsalfkhkfdshkj</p> -->
          <h3>作业内容</h3>
          <p>{{homework.hw_content}}</p>
          <h3>deadline</h3>
          <p>{{homework.deadline}}</p>
          <hr>
          <h3>作业说明</h3>
          <el-input type="textarea" v-model="input" placeholder="请输入作业说明"></el-input>
          <h3>文件</h3>
          <el-upload
            class="upload-demo"
            :drag= 'true'
            :action="doUpload"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">上传文件不超过50M</div>
          </el-upload>
          <el-button @click="HomeworkSubmit" type="warning">提交</el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'StudentHomework',
  data () {
    return {
      final: false,
      activeName: '1',
      input: ''
    }
  },
  props: {
    homeworkList: {},
    courseId: 0,
    isDetail: false
  },
  created () {
    console.log('homework created')
  },
  methods: {
    HomeworkSubmit () {
      // HOMWEWORKSUBMIT

    },
    doUpload(){
      return 'http://vclass.finpluto.tech/courses/**/homeworks/'+homework.homework_id+'/upload'
    }
  },
  components: {
  }
}
</script>

<style scoped>
  #teacher-homework {
    margin: 10px 20px;
    height: 580px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
  }
  #teacher-homework li {
    list-style: none;
  }
  #teacher-homework p {
    line-height: 1.6;
    margin-top: 20px;
    /* width: 61.8%; */
  }
  .el-collapse {
    margin: 20px 40px;
    width: 95%;
  }
  #homework-submit {
    width: 850px;
  }
  #homework-submit h3 {
    color: indianred;
  }
</style>
