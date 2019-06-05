<template>
  <div id="login">
    <h1>登录</h1>
    <form>
      <input
        value="username"
        onfocus="this.value=''"
        type="username"
        name="username"
        onblur="if (this.value == '') {this.value = 'username';}"
        v-model="user.username"
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
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      token: '',
      show: false,
      type: 'login'
    }
  },
  methods: {
    login () {
      let _this = this
      if (this.user.username === '' ||
      this.user.password === '') {
        alert('账号或密码不能为空')
      } else {
        axios({
          method: 'post',
          url: '/api/login',
          data: JSON.stringify(_this.user)
        }).then(res => {
          console.log(res)
          // 当后台返回代码里面显示登录成功之后我们将token进行保存
          if (res.status === 200) {
            // _this.$store.commit('setToken', res.data)
            _this.$notify({
              title: '提示信息',
              message: '登陆成功',
              type: 'success'
            })
          } else {
            _this.$notify({
              title: '提示信息',
              message: '账号或密码错误',
              type: 'error'
            })
          }
          // _this.userToken = 'Bearer' + res.data.token
          // // 将用户token保存到vuex中
          // _this.changeLogin({token: _this.userToken})
          _this.$router.push('/home')
          alert('test')
        }).catch(error => {
          alert('catch error')
          console.log(error)
        })
      }
    }
    // login () {
    //   if (this.username === '') {
    //     this.$message.warning('用户名不能为空哦~~')
    //   } else if (this.password === '') {
    //     this.$message.warning('密码不能为空哦~~')
    //   } else {
    //     this.$store.dispatch('toLogin', {
    //       loginUser: this.username,
    //       loginPassword: this.password
    //     }).then(() => {
    //       this.$store.dispatch('getUser')
    //       let redirectUrl = decodeURIComponent(this.$route.query.redirect || '/')
    //       console.log(redirectUrl)
    //       // 跳转到指定的路由
    //       this.$router.push({
    //         path: redirectUrl
    //       })
    //     }).catch((error) => {
    //       console.log(error.response.data.message)
    //     })
    //   }
    // }
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
