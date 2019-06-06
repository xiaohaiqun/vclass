<template>
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
</template>

<script>                                                                  
export default {
  name: 'HomeworkDetail',
  data () {
    return {
      content: '作业内容，由props属性从父组件中获取',
      finishedList: [
        {
          id: '1',
          name: 'wang'
        },
        {
          id: '2',
          name: 'li'
        },
        {
          id: '3',
          name: 'zhang'
        }
      ],
      unfinishedList: [
        {
          id: '1',
          name: 'wang'
        },
        {
          id: '2',
          name: 'li'
        },
        {
          id: '3',
          name: 'zhang'
        }
      ],
      isDetail: false
    }
  },
  methods: {
    change () {
      this.isDetail = !this.isDetail
      this.$emit('toDetail', this.isDetail)
      alert('test')
      this.global.selected_student='name'
      console.log( this.global.selected_student)
    }
  }
}
</script>

<style scoped>
  #homework-detail {
    width: 850px;
  }
  #homework-detail h3 {
    color: indianred;
  }
</style>
