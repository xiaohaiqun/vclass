<template>
  <div id="teacher-notice">
    <notice-list></notice-list>
  </div>
</template>

<script>
import NoticeList from '../NoticeList.vue'
export default {
  name: 'TeacherNotice',
  data () {
    return {
    }
  },
  components: {
    NoticeList
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
