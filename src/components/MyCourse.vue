<template>
  <div id="my-course">
    <el-aside width="310px" style="background-color: rgb(238, 241, 246)">
      <h3>课程列表</h3>
      <div id="course-list">
      <div v-for="course in courseList" :key="course.id">
        <el-divider></el-divider>
        <p type="text" @click="changeCourse(course.id)">{{course.courseName}}</p>
      </div>
      </div>
    </el-aside>
  </div>
</template>

<script>
// import axios from 'axios'
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
    changeCourse (courseId) {
      this.courseId = courseId
      this.$emit('listenToChild', this.courseId)
    }
  }
}
</script>

<style scoped>
  #my-course {
    color: #660000;
  }
  #my-course h3, p, a, span {
    text-align: center;
  }
  #my-course p {
    cursor: pointer;
  }
  #course-list {
    overflow: scroll;
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
</style>
