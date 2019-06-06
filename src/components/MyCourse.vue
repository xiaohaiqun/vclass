<template>
  <div id="my-course">
    <el-aside width="310px" style="background-color: rgb(238, 241, 246)">
      <h3>课程列表</h3>
      <div v-for="course in courseList" :key="course.id">
        <el-divider></el-divider>
        <p @clickcource="changeCourse(courseId)">{{course.courseName}}</p>
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
      currentRow: null,
      courseId: 0
    }
  },
  props: {
    courseList: []
  },
  mounted () {
    // this.courseList = data.courseList
  },
  methods: {
    changeCourse: function ( courseId ) {
      this.courseId = courseId
      alert('click')
      this.$emit('listenToChild', this.courseId)
    },
    getNoticeList: function(courseId) {
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
