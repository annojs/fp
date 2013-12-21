var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('id', 'Returns the given parameter').
    on(is.any, function(a) {
        return a;
    });
