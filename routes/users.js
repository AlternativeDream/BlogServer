var express = require('express');
var baseDao = require('../models/baseDao.js');
var passport = require('../auth/passport_config.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.end();
});

router.post('/login', passport.authenticate("local"), function(req, res) {
  res.send('success');
});

router.post('/register', function(req, res, next) {
  var values = {
    name: req.body.name,
    password: req.body.password,
    table: 'user'
  };
  baseDao.addExceute(values, function(err, result) {
    if(err == null) {
      console.log(result);
      res.send('register success');
    }else {
      res.send(err);
    }
  });
});

router.post('/modify', function(req, res, next) {
  var password = req.body.password;
  var values = {
    nickname: req.body.nickname,
    table: 'user',
    id: {
      id: 'uid',
      value: req.body.uid
    }
  };
  baseDao.modifyExecute(values, function(err, result) {
    if(err == null) {
      res.send('modify success');
    }else {
      res.send(err);
    }
  });
});

// router.get('/test', function(req, res, next) {
//   console.log(req.isAuthenticated());
//   if(req.isAuthenticated()) {
//     next();
//   }
//   res.send('not session');
// });

router.get('/test', function(req, res, next) {
  res.send('has session');
});

module.exports = router;
