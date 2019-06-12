import req from './http.js'

// export const LOGIN = function (req) {
//   return req('post', '/login', params)
// }
export const USERLOGIN = params => req('post', 'login', params)
