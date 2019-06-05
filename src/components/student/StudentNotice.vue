<template>
  <div id="student-notice">
    <notice-list :courseId="courseId"></notice-list>
  </div>
</template>

<script>
import NoticeList from '../NoticeList.vue'
export default {
  name: 'StudentNotice',
  data () {
    return {
    }
  },
  props: {
    courseId: 0
  },
  created () {
    // alert(this.GLOBAL.courseId)
  },
  components: {
    NoticeList
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
