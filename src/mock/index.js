const Mock = require('mockjs')
// 格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/api/login', 'get', require('./json/user'))
Mock.mock('/api/login', 'post', require('./json/user'))
Mock.mock('/api/home', 'get', require('./json/courseList'))
Mock.mock('/api/home/noticeList', 'get', require('./json/noticeList'))
Mock.mock('/api/home/homeworkList', 'get', require('./json/homeworkList'))
Mock.mock('/api/home/fileList', 'get', require('./json/fileList'))
