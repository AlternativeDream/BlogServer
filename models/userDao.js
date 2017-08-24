var query = require('./db.js');
var Valid = require('./AntiSqlValid.js');

var queryUser = function(values, callback) {
    var sql = 'select uid,nickname,avator,gender,blo from user where 1=1';
    if(Valid(values)) {
        callback("参数含有非法字符");
        return;
    }
    for(key in values) {
        sql = sql + ' and ' + key + '=' + values[key];
    }
    query(sql, callback);
};

var addUser = function(values, callback) {
    var sql = 'insert into user set';
    if(Valid(values)) {
        callback("参数含有非法字符");
        return;
    }
    for(key in values) {
        sql = sql + ' ' + key + '="' + values[key] + '",';
    }
    sql = sql.substr(0,sql.length - 1);
    query(sql, callback);
};

var deleteUser = function(values, callback) {
    var sql = 'delete from user where uid=';
    if(Valid(values)) {
        callback("参数含有非法字符");
        return;
    }
    sql = sql + values['uid'];
    query(sql, callback);
};

var modifyUser = function(values, callback) {
    var sql = 'update user set';
    if(Valid(values)) {
        callback("参数含有非法字符");
        return;
    }
    for(key in values) {
        if(key != 'uid') {
            sql = sql + ' ' + key + '="' + values[key] + '",';
        }
    }
    sql = sql.substr(0,sql.length - 1) + ' where uid=' + values['uid'];
    console.log(sql);
    query(sql, callback);
};

module.exports = {
    queryUser: queryUser,
    addUser: addUser,
    modifyUser: modifyUser
}