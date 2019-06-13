<template>
  <div id="teacher-notice">
    <div id="add-notice">
    发布通知
    <el-button round>发布</el-button>
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
      <li v-for="notice in noticeList" :key="notice.notice_id">
        <h3>{{notice.notice_title}}</h3>
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
export default {
  name: 'TeacherNotice',
  data () {
    return {
      newTitle: '',
      newContent: '',
      headline:"",
      content:""
    }
  },
    props: {
    courseId: 0,
    noticeList: {}
  },
  components: {
    AddNotice
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
</style>
