<template>
  <div>
    <h1>test page</h1>
    <el-button type="submit" @click="login">提交</el-button>
  </div>
</template>

<script>
// import {USERLOGIN} from '../../api/userLogin.js'
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
    login () {
      axios({
        method: 'post',
        url: 'http://vclass.finpluto.tech/login',
        data: {
          username: '123',
          password: '123'
        }
      }).then((res) => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
