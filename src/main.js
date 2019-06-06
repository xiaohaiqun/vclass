// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import store from './store/index.js'
import * as types from './store/types.js'

import global_ from './global_data.vue' //引用文件
 Vue.prototype.global = global_         //挂载到Vue实例上面

require('./mock')
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.config.devtools = true

//全局变量测试
var selected_student='null'

// axios.defaults.baseURL = 'http://127.0.0.1:8080'
axios.interceptors.request.use(function (config) {
  if (store.state.token) {
    config.headers.Authorization = `token ${store.state.token}`
  }
  return config
}, function (err) {
  return Promise.reject(err)
})

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          store.commit(types.LOGOUT)
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
