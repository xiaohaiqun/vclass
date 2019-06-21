<template>
  <div id="student-homework">
    <el-collapse v-for="homework in homeworkList" :key="homework.hw_id" v-model="activeName" accordion>
      <el-collapse-item :title="homework.hw_title" >
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
            action=''
            :before-upload="beforeUpload(homework)"
            :http-request="uploadFile"
            :homework="homework"
             multiple
            :file-list="fileList">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">上传文件不超过50M</div>
          </el-upload>` 
          <el-button @click="HomeworkSubmit(homework)" type="warning">提交</el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../../store/index'
export default {
  name: 'StudentHomework',
  data () {
    return {
      final: false,
      activeName: '1',
      input: '',
      fileList:[],
      url:''
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
    HomeworkSubmit (homework) {
      // HOMWEWORKSUBMIT
        console.log('submitUrl:'+'http://vclass.finpluto.tech/courses/1610029851/homeworks/'+
        homework.hw_id+'/submit')
        axios.post('http://vclass.finpluto.tech/courses/1610029851/homeworks/'+
        homework.hw_id+'/submit')
    },
    beforeUpload(homework){
      this.url='http://vclass.finpluto.tech/courses/1610029851/homeworks/'+
        homework.hw_id+'/submit'
    },
    doUpload(homework){
      return 'http://vclass.finpluto.tech/courses/1610029851/homeworks/'+
        homework.hw_id+'/submit'
    },
     handleSuccess(response, file, fileList) {
      this.fileList = fileList
     },
 
     uploadFile (files) {
        // 发起请求
       let config = {
        //添加请求头
        headers: { "Content-Type": "multipart/form-data",
                   "Accept":'application/json',
                    "Authorization" : store.state.token 
                    }
       }
       console.log('-------------postUrl-----------')
       console.log(this.url)
       axios.post(this.url, config, {
        transformRequest: [() => {
        let formData = new FormData()
        formData.append('file', files.file)
        return formData
       }
      ]
     }).then(data => {
      console.log(data)
     })
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
