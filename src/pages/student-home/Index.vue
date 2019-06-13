<template>
  <div id="student">
    <el-container>
      <el-header>vclass</el-header>

      <el-container style="height: 680px; border: 1px solid #eee">
        <!-- <my-course :courseList="courseList" v-on:listenToChild="changeCourse"></my-course> -->
        <el-aside width="310px" style="background-color: rgb(238, 241, 246)">
          <el-container id="my-course">
            <el-header>课程列表</el-header>
            <el-main id="course-list">
            <div>
              <!-- <div v-for="course in courseList" :key="course.course_id">
                <el-divider></el-divider>
                <p type="text" @click="changeCourse(course.course_id)">{{course.course_name}}</p>
              </div> -->
              <el-table :data=courseList @row-click="changeCourse($event)" style="width:100%"  highlight-current-row >
                <el-table-column prop="course_name" style="height:0px">
                </el-table-column>
              </el-table>
            </div>
            </el-main>
          </el-container>
        </el-aside>
        <el-main>
          <div id="course-detail">
            <!-- @tab-click="handleClick" -->
            <el-tabs type="border-card" stretch v-model="activeName" >
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
// import axios from 'axios'
import notice from '../../components/student/StudentNotice.vue'
import homework from '../../components/student/StudentHomework.vue'
import file from '../../components/student/StudentFile.vue'
import {GETCOURSES} from '../../api/courses.js'
import req from '../../api/http.js'
import axios from 'axios'
export default {
  name: 'Index',
  data () {
    return {
      courseList: [],
      noticeList: [],
      homeworkList: [],
      fileList: [],
      courseId: '',
      test: 0,
      activeName: 'first',
      isDetail: false
    }
  },
  components: {
    notice,
    homework,
    file
  },
  beforeCreate () {
  },
  created () {
    this.getCourses()
    this.getCourseDetail()
    // console.log('index created end')
    // console.log(' index created')
  },
  methods: {
    getCourses () {
      let _this = this
      let promise = GETCOURSES()
      // console.log('test')
      // console.log(promise)
      // console.log(localStorage.token)
      promise.then(function (res) {
        // console.log(res)
        // console.log(res.data.data)
        console.log('------------------getcourse--------------------:')
        
        _this.courseList = res.data.data.course_list
        _this.courseId = _this.courseList[0].course_id
        console.log(_this.courseId)
      })
      // this.axios({
      //   method: "get",
      //   url: 'http://vclass.finpluto.tech/',
      //   headers: {
      //     Authorization: window.localStorage.getItem("token")
      //   }
      //   }).then(function(res) {
      //     console.log('asjkdasdasdsadsa')
      //     console.log(res)
      //   })
    },
    getCourseDetail () {
      let _this = this
      console.log('---------------------getCourseDetail start--------------------')
      let promise = req('get', 'courses/' + _this.courseId)
      // console.log(promise)
      promise.then(res => {
        // console.log('res.data.data')
        // console.log(res.data.data)
        _this.noticeList = res.data.data.notice_list
        _this.homeworkList = res.data.data.hw_list
        _this.fileList = res.data.data.file_list
        console.log('-------noticelist:----------')
        console.log(_this.noticeList)
      })
    },
    changeCourse (row) {
      console.log('---------changecourse------------------')
      this.courseId = row.course_id
      console.log(this.courseId)
      this.getCourseDetail()
    },
    handleClick(){
      console.log('------------handclick---------------')
      getCourseDetail()
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
