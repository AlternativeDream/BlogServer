var express = require('express');
var userDao = require('../models/userDao.js');
var query = require('../models/db.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end("登录失败");
  // var sql = 'select * from test where id = 1';
  // query(sql, function(err,result,fields) {
  //   var data = {};
  //   if(err == null) {
  //       data.code = "200";
  //       data.data = result[0];
  //   }else {
  //       data.code = "201";
  //       data.msg = "用户数据查询失败";
  //   }
  //   res.json(data);
  // });

  // userDao.queryUser({uid: '1'}, function(err, result) {
  //   if(err == null) {
  //     res.json({
  //       code: '200',
  //       data: result[0]
  //     });
  //   }else {
  //     res.json({
  //       code: '201',
  //       msg: err
  //     });
  //   };
  // });
  // userDao.addUser(res, {
  //   name: '123',
  //   nickname: '321',
  //   password: '123456'
  // });
//   userDao.modifyUser({uid: 1, nickname: '老王'}, function(err, result) {
//     if(err == null) {
//       res.json({
//         code: '200',
//         data: '修改成功！'
//       });
//     }else {
//       res.json({
//         code: '201',
//         msg: err
//       });
//     }
//   });
 });

module.exports = router;
