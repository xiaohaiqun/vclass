import req from './http.js'

export const CREATEHOMEWORK = params => req('post', 'courses/homeworks', params)
