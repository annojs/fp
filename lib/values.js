var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('values', 'Returns values of the given object').
    on(is.object, function(o) {
        var ret = [];

        for(var k in o) {
            if(o.hasOwnProperty(k)) {
                ret.push(o[k]);
            }
        }

        return ret;
    });
