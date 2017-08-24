var query = require('./db.js');
var Valid = require('./AntiSqlValid.js');

/** 
 * 检索数据
 * @param {*} values 检索条件
 * @param function{*} callback 回调函数 
 */
var queryExceute = function(values, callback) {
    var table = values.table;
    delete values.table;
    var sql = 'select * from '+ table +' where 1=1';
    if(Valid(values)) {
        callback("参数含有非法字符");
        return;
    }
    for(key in values) {
        sql = sql + ' and ' + key + '=' + values[key];
    }
    query(sql, callback);
};

/**
 * 添加数据
 * @param {*} values 添加数据
 * @param function{*} callback 回调函数 
 */
var addExceute = function(values, callback) {
    var table = values.table;
    delete values.table;
    var sql = 'insert into '+ table +' set';
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

/**
 * 删除数据
 * @param {*} values 删除条件
 * @param function{*} callback 回调函数
 */
var deleteExecute = function(values, callback) {
    var table = values.table;
    delete values.table;
    var sql = 'delete from '+ table +' where 1=1';
    if(Valid(values)) {
        callback("参数含有非法字符");
        return;
    }
    for(key in values) {
        sql = sql + ' and ' + key + '=' + values[key];
    }
    query(sql, callback);
};

/**
 * 更新数据
 * @param {*} values 更新数据 更新条件
 * @param function{*} callback 回调函数
 */
var modifyExecute = function(values, callback) {
    var table = values.table;
    delete values.table;
    var sql = 'update '+ table +' set';
    if(Valid(values)) {
        callback("参数含有非法字符");
        return;
    }
    for(key in values) {
        if(key.indexOf('id') == -1 ) {
            sql = sql + ' ' + key + '="' + values[key] + '",';
        }
    }
    sql = sql.substr(0,sql.length - 1) + ' where ' + values['id'].id + '=' + values['id'].value;
    console.log(sql);
    query(sql, callback);
};

module.exports = {
    queryExceute: queryExceute,
    addExceute: addExceute,
    deleteExecute: deleteExecute,
    modifyExecute: modifyExecute
}