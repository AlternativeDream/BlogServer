var passport = require('passport');
var LocalStrategy = require('passport-local');
var baseDao = require('../models/baseDao.js');
var log = require('tracer').colorConsole();

passport.use(new LocalStrategy(function(username, password, done) {
    var values = {
        name: username,
        table: 'user'
    };
    baseDao.queryExceute(values, function(err, result) {
        if(err == null) {
            if(result.length > 0 && password == result[0].password) {
                return done(null, result[0]);
            }else if(result.length > 0) {
                log.error('密码错误');
                return done(null, false, {
                    message: '密码错误'
                });
            }else {
                log.error('用户不存在');
                return done(null, false, {
                    message: '用户不存在'
                });
            }
        }else {
            log.error(err);
            return done(null, false, {
                message: err
            });
        }
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    return done(null, user);
});

module.exports = passport;