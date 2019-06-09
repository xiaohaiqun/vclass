<template>
  <div id="student-notice">
    <!-- <notice-list :courseId="courseId"></notice-list> -->
    <div id="notice-list">
      <ul>
        <li v-for="notice in noticeList" :key="notice.id">
          <h3>{{notice.headline}}</h3>
          <p>{{notice.content}}</p>
          <el-divider></el-divider>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import NoticeList from '../NoticeList.vue'
// import global_ from '../tool/Global.vue'
export default {
  name: 'StudentNotice',
  data () {
    return {

    }
  },
  props: {
    courseId: 0,
    noticeList: []
  },
  created () {
    // this.noticeList = global_.noticeList
    console.log('notice created')
    // console.log(this.noticeList)
    // console.log(global.test)
  },
  components: {
  }
}
</script>

<style scoped>
  #student-notice {
    margin: 10px 20px;
    height: 580px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
  }
</style>
