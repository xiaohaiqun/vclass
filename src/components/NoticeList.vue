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
// import axios from 'axios'
import global_ from './tool/Global.vue'
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
    this.noticeList = global_.noticeList
    console.log('notice created')
    console.log(this.noticeList)
  },
  methods: {
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
