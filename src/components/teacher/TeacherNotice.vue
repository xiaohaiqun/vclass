<template>
  <div id="teacher-notice">
    <add-notice></add-notice>
    <notice-list></notice-list>
  </div>
</template>

<script>
import AddNotice from './local/AddNotice.vue'
import NoticeList from '../NoticeList.vue'
export default {
  name: 'TeacherNotice',
  data () {
    return {
    }
  },
  components: {
    AddNotice,
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
