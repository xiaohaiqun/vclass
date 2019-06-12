import req from './http.js'

export const GETCOURSES = params => req('get', 'home', params)
export const CREATEHOMEWORK = params => req('post', 'courses/homeworks', params)
export const CREATENOTICE = params => req('post', 'courses/notices', params)
export const UPLOADSHAREDFILES = params => req('post', 'courses/sharedfiles', params)
export const CREATEHOMEWORKRATING = params => req('post', 'courses/homeworks/ratings', params)
export const GETHOMEWORKRATINGS = params => req('get', 'courses/homeworks/ratings', params)
export const GETCOURSELIST = params => req('get', 'home', params)
export const GETCOURSEDETAIL = params => req('get', 'courses', params)
