<template>
  <div id="teacher-homework">
    <div id="add-notice">
      发布作业
      <el-button round @click="addHomework">发布</el-button>
      <el-input v-model="headline" placeholder="标题"></el-input>
      <el-input
        type="textarea"
        :rows="3"
        autosize
        placeholder="请输入内容"
        v-model="content">
      </el-input>
      <div class="block">
        <span class="demonstration">截止日期</span>
        <el-date-picker
          v-model="deadline"
          align="right"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"
          :picker-options="pickerOptions">
        </el-date-picker>
      </div>
    </div>
    <el-collapse v-for="homework in homeworkList" :key="homework.id" v-model="activeName" accordion>
      <el-collapse-item :title="homework.hw_title">
        <div id="homework-detail">
          <h3>作业内容</h3>
          <p>{{content}}</p>
          <h3>已交名单</h3>
          <el-table :data="finishedList">
            <el-table-column prop="name" label="" @click="change"></el-table-column>
          </el-table>
          <h3>未交名单</h3>
          <el-table :data="unfinishedList">
            <el-table-column prop="name" label=""></el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import HomeworkDetail from './local/HomeworkDetail.vue'
import axios from 'axios'
// import data from '../../static/data.json'
export default {
  name: 'Homework',
  data () {
    return {
      final: false,
      activeName: '1',
      headline: '',
      content: '',
      deadline: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '明天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() + 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周后',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }, {
          text: '两周后',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
    }
  },
  props: {
    courseId: 0,
    isDetail: false,
    homeworkList: []
  },
  created: {

  },
  methods: {
    childByValue: function (isDetail) {
      this.isDetail = isDetail
      this.$emit('toDetail', this.isDetail)
    },
    addHomework () {
      let _this = this
      console
      console.log('------courseId---------')
      console.log(_this.courseId)
      let url = 'http://vclass.finpluto.tech/courses/'+_this.courseId+'/homeworks'
      console.log('------url-----------')
      console.log(url)

      var readyData=_this.$qs.stringify({
        hw_content: _this.content,
        hw_title: _this.headline,
        deadline: String(_this.deadline)
      })
      console.log('----------time--------')
      console.log(_this.deadline)
      axios.post(url, readyData)
      .then(res => {
        console.log('------addHomework res-------')
        console.log(res)
        _this.$notify({
          title: '提示',
          message: '作业发布成功'
        })
        _this.content = ''
        _this.headline = ''
        _this.deadline = ''
      }).catch(error => {
        console.log(error)
      })
    }
  },
  components: {
    HomeworkDetail
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
  #add-notice {
    margin: 20px 40px;
    width: 80%;
  }
  .el-button {
      float: right;
    }
  .el-collapse {
    margin: 20px 40px;
    width: 95%;
  }
</style>
