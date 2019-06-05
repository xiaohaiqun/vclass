<template>
  <div>
    <el-container>
      <el-header>vclass</el-header>

      <el-container style="height: 680px; border: 1px solid #eee">
        <my-course :courseList="courseList"></my-course>
        <el-main>
          <course-detail></course-detail>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MyCourse from '../../components/MyCourse.vue'
import CourseDetail from '../../components/student/StudentCourseDetail.vue'
import axios from 'axios'
export default {
  name: 'Index',
  data () {
    return {
      courseList: []
    }
  },
  components: {
    MyCourse,
    CourseDetail
  },
  created () {
    axios({
      method: 'get',
      url: '/api/home'
    }).then((res) => {
      this.courseList = res.data.courseList
    }).catch(error => {
      alert('获取课程失败')
      console.log(error)
    })
  }
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    min-height: 100%
  }
  .el-main {
    padding: 0;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
