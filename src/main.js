// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'
import router from './router'
// import * as types from './store/types.js'
import GlobalVariable from './components/tool/GlobalVariable.js'

require('./mock')
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.config.devtools = true

Vue.prototype.global = GlobalVariable

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
