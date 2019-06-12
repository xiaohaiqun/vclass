import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login'
import Home from '../pages/student-home/Index1'
import TeacherHome from '../pages/teacher-home/Index'

// import store from '../store/index'
// import Correction from '../components/Correction'

Vue.use(Router)

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   redircet: '/login'
    // },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/teacher-home',
      component: TeacherHome
    }
  ]
})

// 注册全局钩子用来拦截导航
// router.beforeEach((to, from, next) => {
//   let token = window.localStorage.getItem('token')
//   if (to.meta.requiresAuth) {
//     if (token) {
//       store.dispatch('getUser')
//       next()
//     } else {
//       store.dispatch('logOut')
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
