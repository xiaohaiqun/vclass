<template>
  <div id="course-detail">
    <el-tabs type="border-card" stretch v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="通知" name="first">
        <student-notice></student-notice>
      </el-tab-pane>
      <el-tab-pane label="作业" name="second">
        <student-homework></student-homework>
      </el-tab-pane>
      <el-tab-pane label="文件" name="third">
        <student-file></student-file>
      </el-tab-pane>
      <el-tab-pane label="其它" name="fourth">
        <else></else>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import StudentNotice from './StudentNotice.vue'
import StudentHomework from './StudentHomework.vue'
import StudentFile from './StudentFile.vue'
import Else from '../Else.vue'
export default {
  name: 'CourseDetail',
  data () {
    return {
      activeName: 'first',
      isDetail: false
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    changePage: function (isDetail) {
      this.isDetail = isDetail
    }
  },
  components: {
    StudentNotice,
    StudentHomework,
    StudentFile,
    Else
  }
}
</script>

<style scoped>
  .el-tab {
    height: 590px;
  }
</style>
