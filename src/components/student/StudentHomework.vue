<template>
  <div id="student-homework">
    <el-collapse v-for="homework in homeworkList" :key="homework.id" v-model="activeName" accordion>
      <el-collapse-item title="作业标题">
        <homework-submit v-on:toDetail="childByValue"></homework-submit>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import HomeworkSubmit from './local/HomeworkSubmit.vue'
import global_ from '../tool/Global.vue'
export default {
  name: 'StudentHomework',
  data () {
    return {
      final: false,
      activeName: '1'
    }
  },
  props: {
    homeworkList: [],
    courseId: 0,
    isDetail: false
  },
  created () {
    console.log('homework created')
    // this.homeworkList = global_.homeworkList
    console.log(global_.homeworkList)
  },
  methods: {
    childByValue: function (isDetail) {
      this.isDetail = isDetail
      this.$emit('toDetail', this.isDetail)
    }
  },
  components: {
    HomeworkSubmit
  }
}
</script>

<style scoped>
  #teacher-homework {
    margin: 10px 20px;
    height: 580px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
  }
  #teacher-homework li {
    list-style: none;
  }
  #teacher-homework p {
    line-height: 1.6;
    margin-top: 20px;
    /* width: 61.8%; */
  }
  .el-collapse {
    margin: 20px 40px;
    width: 95%;
  }
</style>
