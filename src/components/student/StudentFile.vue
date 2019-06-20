<template>
  <div id="student-file">
    <!-- <file-list :courseId="courseId"></file-list> -->
    <div id="file">
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
        </el-table-column>
      </el-table>
    </el-main>
  </div>
  </div>
</template>

<script>
// import FileList from '../FileList.vue'
// import global_ from '../tool/Global.vue'
import axios from 'axios'
export default {
  name: 'StudentFile',
  data () {
    return {
      search: ''
    }
  },
  props: {
    fileList: {},
    courseId: 0
  },
  created () {
    // this.fileList = global_.fileList
    console.log('file created')
    // console.log(this.fileList)
  },
  methods: {
    file_download(row){
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
        let url = window.URL.createObjectURL(data.data)
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', row.file_name)
        document.body.appendChild(link)
        link.click()
      })
    }  
  },
  components: {
    // FileList
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
