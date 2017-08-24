var query = require('./db.js');
var Valid = require('./AntiSqlValid.js');

var queryArticle = function(values, callback) {
    var sql = 'select * from article where 1=1';
    if(Valid(values)) {
        callback("参数含有非法字符");
        return;
    }
    for(key in values) {
        sql = sql + ' and ' + key + '=' + values[key];
    }
    query(sql, callback);
};

var addArticle = function(values, callback) {
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
}