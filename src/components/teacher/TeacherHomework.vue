<template>
  <div id="teacher-homework">
    <div id="add-homework">
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

    <div id="homework-list">
    <el-collapse v-for="(homework,index) in homeworkList" :key="homework.hw_id" v-model="activeName" accordion>
      <el-collapse-item :title="homework.hw_title" >
        <div id="homework-detail">
          <el-button type="danger" size="mini" @click="deleteHomework(index)">删除</el-button>
          <h3>作业内容</h3>
          <p>{{homework.hw_content}}</p>
          <label><b>截止日期：{{homework.deadline}}</b></label>
          <h3 @click="getRatings(homework.hw_id)">名单</h3>
          <el-table :data="ratingList">
            <el-table-column prop="username" label="姓名" @click="dialogTableVisible = true"></el-table-column>
            <el-table-column prop="grade" label="得分"></el-table-column>
            <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
              <!-- <el-table :data="gridData">
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
              </el-table> -->
            </el-dialog>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import store from '../../store/index'
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
          return time.getTime() < Date.now();
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
      hw_id: '',
      show: false,
      ratingList: [],
      dialogTableVisible: false,
      newHomeworkList: []
    }
  },
  props: {
    courseId: '',
    isDetail: false,
    homeworkList: {}
  },

  beforeCreate () {
    axios.defaults.baseURL = 'http://vclass.finpluto.tech/'
    axios.defaults.headers.common['Authorization'] =store.state.token
  },
  created () {
    this.newHomeworkList = this.homeworkList
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
        _this.updateCourseDetail()
      }).catch(error => {
        console.log(error)
      })
    },
    deleteHomework (index) {
      console.log('---------deleteHomework--------')
      let _this = this
      let homework_id = _this.homeworkList[index].hw_id
      console.log('----homework_id-----')
      console.log(homework_id)
      let url = 'http://vclass.finpluto.tech/courses/**/homeworks/'+homework_id
      axios.delete(url)
      .then(res => {
        console.log('------deletehomework res-------')
        console.log(res)
        _this.$notify({
          title: '提示',
          message: '作业删除成功'
        })
        _this.updateCourseDetail()
      }).catch(error => {
        console.log(error)
      })
    },
    getRatings (hw_id) {
      let _this = this
      _this.hw_id = hw_id
      _this.show = !_this.show
      let url = 'http://vclass.finpluto.tech/courses/'+_this.courseId+'/homeworks/'+_this.hw_id+'/ratings'
      console.log(store.state.token)
      console.log(_this.hw_id)
      console.log(_this.courseId)
      console.log('---------url------')
      console.log(url)
      axios.get(url)
      .then(res => {
        console.log(res)
        _this.ratingList = res.data.data.rating_list
      })
    },
    rateHomework (row) {
      let user_id = row.userid
      let _this = this
      // 跳转到批改页面
    },
    updateCourseDetail () {
      let _this = this      
      console.log('getCourseDetail start')
      axios.get('http://vclass.finpluto.tech/courses/'+_this.courseId)
      .then(res=>{
        _this.HomeworkList=res.data.data.hw_list
        _this.$notify({
          title: '提示',
          message: '作业更新'
        })
      })
    },
  },
  components: {
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
  #add-homework {
    margin: 20px 40px;
    width: 80%;
  }
  #homework-list {
    width: 80%
  }
  .el-button {
      float: right;
    }
  .el-collapse {
    margin: 20px 40px;
    width: 95%;
  }
  .el-button {
    float: right;
  }
  .el-table {
    font-weight:300
  }
</style>
