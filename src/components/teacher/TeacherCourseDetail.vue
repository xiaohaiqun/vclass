<template>
  <div id="course-detail">
    <el-tabs type="border-card" stretch v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="通知" name="first">
        <teacher-notice></teacher-notice>
      </el-tab-pane>
      <el-tab-pane label="作业" name="second">
        <teacher-homework></teacher-homework>
      </el-tab-pane>
      <el-tab-pane label="文件" name="third">
        <teacher-file></teacher-file>
      </el-tab-pane>
      <el-tab-pane label="其它" name="fourth">
        <else></else>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TeacherNotice from './TeacherNotice.vue'
import TeacherHomework from './TeacherHomework.vue'
import Correction from './local/Correction.vue'
import TeacherFile from './TeacherFile.vue'
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
    TeacherNotice,
    TeacherHomework,
    TeacherFile,
    Else,
    Correction
  }
}
</script>

<style scoped>
  .el-tab {
    height: 590px;
  }
</style>
