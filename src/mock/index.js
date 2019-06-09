const Mock = require('mockjs')
// 格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/api/login', 'get', require('./json/user'))
Mock.mock('/api/login', 'post', require('./json/user'))
Mock.mock('/api/home', 'get', require('./json/courseList'))
Mock.mock('/api/courseDetail', 'get', require('./json/courseDetail'))
Mock.mock('/api/noticeList', 'get', require('./json/noticeList'))
Mock.mock('/api/homeworkList', 'get', require('./json/homeworkList'))
Mock.mock('/api/fileList', 'get', require('./json/fileList'))
