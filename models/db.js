var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'myblog',
    port: 3306
});

var query = function(sql,callback) {
    pool.getConnection(function(err, conn){
        if (err) {
            callback(err,null,null);
        }else {
            conn.query(sql,function(err,result,fields){
                conn.release();
                callback(err,result,fields);
            });
        }
    });
}

module.exports = query;