var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('not', 'Returns a function that inverts the output of the given function').
    on(is.fn, function(fn) {
        return function() {
            return !fn.apply(null, arguments);
        };
    });
