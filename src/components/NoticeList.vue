<template>
  <div id="notice-list">
    <ul>
      <li v-for="notice in noticeList" :key="notice.id">
        <h3>{{notice.headline}}</h3>
        <p>{{notice.content}}</p>
        <el-divider></el-divider>
      </li>
    </ul>
  </div>
</template>

<script>
// import data from '../../static/data.json'
import axios from 'axios'
export default {
  name: 'NoticeList',
  data () {
    return {
      noticeList: []
    }
  },
  props: {
    courseId: 0
  },
  created () {
    this.getNoticeList()
  },
  methods: {
    getNoticeList () {
      let _this = this
      axios.get('/api/home/noticeList', {
        params: {
          courseId: _this.courseId
        }
      }).then(res => {
        _this.noticeList = res.data.noticeList
      })
    }
  }
}
</script>

<style scoped>
  #notice-list {
    margin: 10px 20px;
    width: 600px;
  }
  #notice-list li {
    list-style: none;
  }
</style>
