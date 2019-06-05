<template>
  <div id="my-course">
    <el-aside width="310px" style="background-color: rgb(238, 241, 246)">
      <!-- <el-table
        :data="courseList"
        height="680px"
        highlight-current-row
        @current-change="handleCurrentChange"
        @row-click="handleCurrentChange">
        <el-table-column prop="courseName" label="我的课程">
        </el-table-column>
      </el-table> -->
      <h3>课程列表</h3>
      <div v-for="course in courseList" :key="course.id">
        <el-divider></el-divider>
        <p>{{course.courseName}}</p>
      </div>
    </el-aside>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MyCourse',
  data () {
    return {
      courseDetail: {},
      currentRow: null
    }
  },
  props: {
    courseList: []
  },
  mounted () {
    // this.courseList = data.courseList
  },
  method: {
    handleCurrentChange (val) {
      console.log('handle success')
    },
    getNoticeList (courseId) {
      return axios.get('api/home/noticeList', {
        params: {
          courseId: this.courseId
        }
      })
    }
  }
}
</script>

<style scoped>
  #my-course {
    color: #660000;
    overflow: scroll;
  }
  #my-course h3, p, a, span {
    text-align: center;
  }
  .el-divider {
    margin: 10px;
  }
  .el-table {
    text-align: center;
  }
  .el-table-column {
    text-align: center;
  }
</style>
