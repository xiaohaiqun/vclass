<template>
  <div id="teacher-notice">
    <div id="add-notice">
    发布通知
    <el-button round @click="addNotice">发布</el-button>
    <el-input v-model="headline" placeholder="标题"></el-input>
    <el-input
      type="textarea"
      :rows="3"
      autosize
      placeholder="请输入内容"
      v-model="content">
    </el-input>
  </div>
    <div id="notice-list">
    <ul>
      <li v-for="(notice,index) in noticeList" :key="notice.notice_id">
        <h3>{{notice.notice_title}}</h3>
        <el-button type="danger" size="mini" @click="deleteNotice(index)">删除</el-button>
        <p>{{notice.notice_content}}</p>
        <el-divider></el-divider>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
import AddNotice from './local/AddNotice.vue'
import NoticeList from '../NoticeList.vue'
import axios from 'axios'
import store from '../../store/index'
import { constants } from 'fs';

export default {
  name: 'TeacherNotice',
  data () {
    return {
      newTitle: '',
      newContent: '',
      headline:'',
      content:'',
      newNoticeList: []
    }
  },
  props: {
    courseId: '',
    noticeList: {}
  },
  components: {
    AddNotice
  },
  beforeCreate () {
    axios.defaults.baseURL = 'http://vclass.finpluto.tech/'
    // axios.defaults.headers.common['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGci'
    // +'OiJIUzI1NiJ9.eyJleHAiOjE1NjA1MjE5NzMsInVzZXJuYW1lIjoiMjAxNjExMTQwMDEwIn0.IF_Aib6TKVrrYlsC7GiGrMi_UPCkewHUik7i-hxIDWg'
    axios.defaults.headers.common['Authorization'] =store.state.token
    console.log(store.state.token)
  },
  created () {
    this.newNoticeList = this.noticeList
  },
  methods: {
    updateCourseDetail () {
      let _this = this      
      console.log('getCourseDetail start')
      axios.get('http://vclass.finpluto.tech/courses/'+_this.courseId)
      .then(res=>{
        _this.noticeList=res.data.data.notice_list
        _this.$notify({
          title: '提示',
          message: '通知更新'
        })
      })
    },

    addNotice () {
      let _this = this
      console.log('------courseId---------')
      console.log(_this.courseId)
      let url = 'http://vclass.finpluto.tech/courses/'+_this.courseId+'/notices'
      console.log('------url-----------')
      console.log(url)

      var readyData=_this.$qs.stringify({
        notice_content: _this.content,
        notice_title: _this.headline
      })
      
      axios.post(url, readyData)
      .then(res => {
        console.log('------addnotice res-------')
        console.log(res)
        _this.$notify({
          title: '提示',
          message: '发布通知成功'
        })
        _this.content = ''
        _this.headline = ''
      }).catch(error => {
        console.log(error)
      })
      _this.updateCourseDetail()
    },

    deleteNotice (index) {
      console.log('---------deleteNotice--------')
      let _this = this
      let notice_id = _this.noticeList[index].notice_id
      console.log('----notice_id-----')
      console.log(notice_id)
      let url = 'http://vclass.finpluto.tech/courses/**/notices/'+notice_id
      axios.delete(url)
      .then(res => {
        console.log('------deleteNotice res-------')
        console.log(res)
        _this.$notify({
          title: '提示',
          message: '通知删除成功'
        })
      _this.updateCourseDetail()
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  #teacher-notice {
    margin: 10px 20px;
    height: 580px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
  }
  ul {
    list-style-type: none;
  }
  #add-notice {
    margin: 20px 40px;
    width: 80%
  }
  .el-input {
    
  }
  .el-button {
    float: right;
  }
</style>
