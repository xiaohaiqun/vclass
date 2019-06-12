<template>
  <div id="student">
    <el-container>
      <el-header>vclass</el-header>

      <el-container style="height: 680px; border: 1px solid #eee">
        <!-- <my-course :courseList="courseList" v-on:listenToChild="changeCourse"></my-course> -->
        <el-aside width="310px" style="background-color: rgb(238, 241, 246)">
          <el-content id="my-course">
            <el-header>课程列表</el-header>
            <el-main id="course-list">
            <div>
              <div v-for="course in courseList" :key="course.id">
                <el-divider></el-divider>
                <p type="text" @click="changeCourse(course.id)">{{course.courseName}}</p>
              </div>
            </div>
            </el-main>
          </el-content>
        </el-aside>
        <el-main>
          <div id="course-detail">
            <el-tabs type="border-card" stretch v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="通知" name="first">
                <notice :noticeList = "noticeList" :courseId="courseId"></notice>
              </el-tab-pane>
              <el-tab-pane label="作业" name="second">
                <homework :homeworkList = "homeworkList" :courseId="courseId"></homework>
              </el-tab-pane>
              <el-tab-pane label="文件" name="third">
                <file :fileList = "fileList" :courseId="courseId"></file>
              </el-tab-pane>
              <el-tab-pane label="其它" name="fourth">
                <else></else>
              </el-tab-pane>
            </el-tabs>
          </div>
          <!-- <course-detail :courseId="courseId"></course-detail> -->
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
import notice from '../../components/student/StudentNotice.vue'
import homework from '../../components/student/StudentHomework.vue'
import file from '../../components/student/StudentFile.vue'
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
      test: 0,
      activeName: 'first',
      isDetail: false
    }
  },
  components: {
    MyCourse,
    CourseDetail,
    notice,
    homework,
    file
  },
  beforeCreate () {
  },
  created () {
    // this.getCourseList()
    this.getData()
    console.log(' index created')
    // this.getCourseDetail()
    console.log('index created end')
    console.log(global_.fileList)
  },
  methods: {
    getData () {
      let promise = GETCOURSES({course_id: this.courseId})
      console.log('test')
      console.log(promise)
      promise.then(function (res) {
        console.log(res)
        console.log(res.data)
        this.courseList = res.data.courseList
      })
    },
    getCourseDetail () {
      let _this = this
      console.log('getCourseDetail start')
      axios({
        method: 'get',
        // params: {courseId: _this.courseId},
        url: '/api/courseDetail'
        // url: 'http://vclass.finpluto.tech/courses/'
      }).then(res => {
        if (res.data.code === 200) {
          _this.noticeList = res.data.noticeList
          _this.homeworkList = res.data.homeworkList
          _this.fileList = res.data.fileList
          console.log('get course-detail return 200')
        } else if (res.data.code === 401) {
          console.log('get course-detail return 401')
        } else if (res.data.code === 403) {
          console.log('get course-detail return 403')
        } else {
          console.log('get course-detail return 404')
        }
      }).catch(error => {
        console.log(error)
        console.log('get course-detail error')
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
    height: 100%;
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
    line-height: 30px;
  }
  .el-main {
    padding: 0;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  #my-course {
    color: #660000;
    overflow: hidden;
  }
  #my-course h3, p, a, span {
    text-align: center;
  }
  #my-course p {
    cursor: pointer;
  }
  #course-list {
    overflow-y: scroll;
  }
  .el-divider {
    margin: 10px;
  }
  .el-button {
    text-align: center
  }
  .el-table {
    text-align: center;
  }
  .el-table-column {
    text-align: center;
  }
  .scroll-area::-webkit-scrollbar {/*滚动条整体样式*/
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .scroll-area::-webkit-scrollbar-thumb {/*滚动条方块*/
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px #ff2323;
      background: #ff2323;
  }
  .scroll-area::-webkit-scrollbar-track {/*滚动条里面轨道*/
      /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2); */
      /* border-radius: 10px; */
      /* background: #EDEDED; */
      border: none;
      background: none;
  }
</style>
