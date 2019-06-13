// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import router from './router'
import axios from 'axios'
// import * as types from './store/types.js'
import GlobalVariable from './components/tool/GlobalVariable.js'

axios.defaults.headers.common['Authentication'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjA0NDc0MzIsInVzZXJuYW1lIjoiMjAxNjExMTQwMDEwIn0.7zIX5tDdWzYkrO4XFcPB-SBFTiO4udyhiv4qiSPOcUU'

// require('./mock')
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.config.devtools = true

Vue.prototype.global = GlobalVariable

// 请求拦截器 忽略
// axios.interceptors.request.use(
//   config => {
//     if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
//       config.headers.Authorization = `Bearer ${store.state.token}`
//     }
//     return config
//   },
//   err => {
//     return Promise.reject(err)
//   }
// )

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
