var SQLValid = function(res, field) {
    var result = false;
    var res = /select|update|delete|exec|count|drop|'|"|;/i;
    for(key in field) {
        if( res.test(field[key]) ) {
            result = true;
            break;
        }
    }
    return result;
}

module.exports = SQLValid;