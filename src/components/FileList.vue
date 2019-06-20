<template>
  <div id="file">
    <el-main>
      <el-table :data="fileList" height="500px">
        <el-table-column prop="filename" label="文件名称" width="140">
        </el-table-column>
        <el-table-column prop="filesize" label="文件大小" width="120">
        </el-table-column>
        <el-table-column prop="uploader" label="上传者">
        </el-table-column>
        <el-table-column prop="" label="上传日期">
        </el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope>
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索"></el-input>
          </template>
          <template slot-scope="scope">
            <!-- <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button> -->
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script>
// import axios from 'axios'
import axios from 'axios'
import global_ from './tool/Global.vue'
export default {
  name: 'FileList',
  data () {
    return {
      fileList: [],
      search: ''
    }
  },
  props: {
    courseId: 0
  },
  created () {
    console.log('fileList created')
    this.fileList = global_.fileList
  },
  methods: {
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped>
  #file {
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
