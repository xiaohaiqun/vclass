import req from './http.js'

export const GETCOURSEDETAIL = params => req('get', 'courses', params)
