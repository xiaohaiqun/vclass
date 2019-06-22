<template>
  <div id="teacher-file">
    <div id="upload">
    <el-upload
      class="upload-demo"
      drag
      action=''
      :http-request="uploadFile"
      multiple
      :file-list="uploadFileList">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">文件不超过50M</div>
    </el-upload>
  </div>
    <div id="file-list">
      <el-main>
        <el-table :data="fileList" height="500px" @row-click="file_download($event)">
          <el-table-column prop="file_name" label="文件名称" width="140">
          </el-table-column>
          <el-table-column prop="display_path" label="文件位置" width="120">
          </el-table-column>
          <el-table-column prop="upload_user" label="上传者">
          </el-table-column>
          <el-table-column prop="upload_date" label="上传日期">
          </el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope>
              <el-input v-model="search" size="mini" placeholder="输入关键字搜索"></el-input>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="deleteFile(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </div>
  </div>
</template>

<script>
import Upload from './local/Upload.vue'
import axios from 'axios'
import store from '../../store/index'
export default {
  name: 'TeacherFile',
  data () {
    return {
      uploadFileList: []
    }
  },
  props: {
    fileList: [],
    courseId: ''
  },
  components: {
    Upload
  },
  methods: {
    file_download (row) {
      let url = 'http://vclass.finpluto.tech/files/'+row.file_id
      axios({
      method:'get',
      url:url,
      responseType:'blob',
      })
      .then((data) => {
        if (!data) {
            return
        }
        let url = URL.createObjectURL(data.data)
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', row.file_name)
        document.body.appendChild(link)
        link.click()
      })
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
       let _this = this
       let url = 'http://vclass.finpluto.tech/courses/'+_this.courseId+'/sharedfiles'
       console.log('-------------postUrl-----------')
       console.log(url)
       var readyData=_this.$qs.stringify({
        display_path: 'test'
      })
       axios.post(url, config, {
        transformRequest: [() => {
          let formData = new FormData()
          formData.append('file', files.file)
          formData.append('display_path', readyData)
          return formData
        }]
     }).then(res => {
      console.log(res)
      _this.$notify({
          title: '提示',
          message: '文件上传成功'
        })
      _this.updateCourseDetail()
     })
    },

    deleteFile (index, row) {
      let _this = this
      let file_id = row.file_id
      console.log('-----file_id-----')
      console.log(file_id)
      let url = 'http://vclass.finpluto.tech/courses/'+_this.courseId+'/sharedfiles/'+file_id
      axios.delete(url)
      .then(res => {
        _this.$notify({
          title: '提示',
          message: '文件删除成功'
        })
        _this.updateCourseDetail()
      })
    },

    updateCourseDetail () {
      let _this = this      
      console.log('getCourseDetail start')
      axios.get('http://vclass.finpluto.tech/courses/'+_this.courseId)
      .then(res=>{
        _this.fileList=res.data.data.file_list
        _this.$notify({
          title: '提示',
          message: '文件更新'
        })
      })
    }
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
  #file-list {
    margin: 10px 20px;
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
  #upload {
    margin: 20px 40px;
    width: 80%;
  }
</style>
