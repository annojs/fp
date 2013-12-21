var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('keys', 'Returns keys of the given object.').
    on(is.object, function(o) {
        return Object.keys(o);
    });
