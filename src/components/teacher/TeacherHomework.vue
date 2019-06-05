<template>
  <div id="teacher-homework">
    <add-homework></add-homework>
    <el-collapse v-for="homework in homeworkList" :key="homework.id" v-model="activeName" accordion>
      <el-collapse-item title="作业标题">
        <homework-detail v-on:toDetail="childByValue"></homework-detail>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import HomeworkDetail from './local/HomeworkDetail.vue'
import AddHomework from './local/AddHomework.vue'
import axios from 'axios'
// import data from '../../static/data.json'
export default {
  name: 'Homework',
  data () {
    return {
      homeworkList: [],
      final: false,
      activeName: '1'
    }
  },
  props: {
    courseId: 0,
    isDetail: false
  },
  created () {
    let _this = this
    axios.get('/api/home/homeworkList', {
      params: {
        courseId: _this.courseId
      }
    }).then(res => {
      _this.homeworkList = res.data.homeworkList
    })
  },
  methods: {
    childByValue: function (isDetail) {
      this.isDetail = isDetail
      this.$emit('toDetail', this.isDetail)
    }
  },
  components: {
    HomeworkDetail,
    AddHomework
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
