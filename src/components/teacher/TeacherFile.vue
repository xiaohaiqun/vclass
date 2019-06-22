<template>
  <div id="teacher-file">
    <upload></upload>
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
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
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
export default {
  name: 'TeacherFile',
  data () {
    return {
    }
  },
  props: {
    fileList: []
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
</style>
