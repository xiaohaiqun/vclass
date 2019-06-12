<template>
  <div id="student">
    <el-container>
      <el-header>vclass</el-header>

      <el-container style="height: 680px; border: 1px solid #eee">
        <my-course :courseList="courseList" v-on:listenToChild="changeCourse"></my-course>
        <el-main>
          <course-detail :courseId="courseId"></course-detail>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import global_ from '../../components/tool/Global.vue'
import MyCourse from '../../components/MyCourse.vue'
import CourseDetail from '../../components/student/StudentCourseDetail.vue'
import axios from 'axios'
import {GETCOURSES} from '../../api/courses.js'
export default {
  name: 'Index',
  data () {
    return {
      courseList: [],
      noticeList: [],
      homeworkList: [],
      fileList: [],
      courseId: 1,
      test: 0
    }
  },
  components: {
    MyCourse,
    CourseDetail
  },
  beforeCreate () {
  },
  created () {
    this.getData()
    // this.getCourseList()
    console.log(' index created')
    // this.getCourseDetail()
    console.log('index created end')
    global_.test = 100
    console.log(global_.test)
    console.log(global_.fileList)
  },
  methods: {
    getData () {
      let promise = GETCOURSES({course_id: this.courseId})
      console.log('test')
      console.log(promise)
      promise.then(function (res) {
        console.log(res)
      })
      
      console.log(promise.data.courseList)
    },
    getCourseList () {
      axios({
        method: 'get',
        url: '/api/home'
      }).then((res) => {
        this.courseList = res.data.courseList
        console.log('getcourselist')
      }).catch(error => {
        alert('获取课程失败')
        console.log(error)
      })
    },  
    getCourseDetail () {
      let _this = this
      console.log('getCourseDetail start')
      axios({
        method: 'get',
        url: '/api/courseDetail'
      }).then(res => {
        _this.noticeList = res.data.noticeList
        _this.homeworkList = res.data.homeworkList
        _this.fileList = res.data.fileList
        global_.noticeList = res.data.noticeList
        global_.homeworkList = res.data.homeworkList
        global_.fileList = res.data.fileList
        global_.test = 100
      })
      console.log('getCourseDetail end')
    },
    changeCourse (courseId) {
      this.courseId = courseId
    }
  }
}
</script>

<style scoped>
  #student {
    overflow: hidden;
  }
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
