<template>
  <div id="login">
    <h1>登录</h1>
    <form>
      <input
        value="userid"
        onfocus="this.value=''"
        type="username"
        name="userid"
        onblur="if (this.value == '') {this.value = 'userid';}"
        v-model="user.userid"
      >
      <br>
      <input
        value="password"
        onfocus="this.value=''"
        type="password"
        name="password"
        onblur="if (this.value == '') {this.value = 'password';}"
        v-model="user.password"
      >
      <br>
      <!-- <input type="submit" value="sign in" @click="login"> -->
      <button @click="login">登录</button>

      <p>使用学/工号登录</p>
    </form>
  </div>
</template>

<script>
import {USERLOGIN} from '../../api/userLogin.js'
import * as types from '../../store/types'
// import store from '../../store/index.js'
// import req from '../../api/http.js'
// import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        userid: '',
        password: ''
      },
      userInfo: {
        authorized_token: '',
        user_id: '',
        user_identifier: 0,
        user_name: ''
      },
      token: '',
      show: false,
      type: 'login'
    }
  },
  methods: {
    login () {
      if (this.user.userid === '' ||
      this.user.password === '') {
        alert('账号或密码不能为空')
      } else {
        let _this = this
        let formData = new FormData()
        formData.append('userid', this.user.userid)
        formData.append('password', this.user.password)
        let test = USERLOGIN(formData)
        console.log('userid:' + this.user.userid)
        test.then(function (res) {
          console.log(res.data)
          _this.userInfo = res.data.data
          _this.$store.commit(types.LOGIN, res.data.data.authorized_token)
          // console.log(localStorage.token)
          // console.log(store.state.token)
          if (_this.userInfo.user_identifier === 0) {
            _this.$router.push('/home')
          } else {
            _this.$router.push('/teacher-home')
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped>
body {
  /* background: url(bg.jpg); */
  font-size: 16px;
  padding: 135px 0px 30px 0px;
  font-family: Segoe Print;
  margin: 0 auto;
}
#login {
  background: #f0f0f0;
  width: 28%;
  margin: 0 auto;
  border-radius: 25px 25px 0px 0px;
  -webkit-border-radius: 25px 25px 25px 25px;
  padding: 40px 60px;
}

#login h1 {
  text-align: center;
}

#login input[type="username"] {
  outline: none;
  font-size: 15px;
  font-weight: 500;
  color: #818181;
  padding: 15px 20px;
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 25px;
  -webkit-border-radius: 15px;
  margin: 0px 0px 12px 0px;
  width: 88%;
  -webkit-appearance: none;
}

#login input[type="password"] {
  outline: none;
  font-size: 15px;
  font-weight: 500;
  color: #818181;
  padding: 15px 20px;
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 25px;
  -webkit-border-radius: 15px;
  margin: 0px 0px 30px 0px;
  width: 88%;
  -webkit-appearance: none;
}

#login input[type="submit"] {
  outline: none;
  font-size: 15px;
  font-family: Segoe Print;
  font-weight: 600;
  color: black;
  padding: 15px 20px;
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 25px;
  -webkit-border-radius: 15px;
  width: 30%;
  margin: 0 auto 0;
  -webkit-appearance: none;
}

#login input[type="submit"]:hover {
  background: yellow;
  cursor: pointer;
}

#login p {
  margin: 40px auto 0 0;
  font-size: 14px;
}
#login a {
  color: #993366;
}
</style>
