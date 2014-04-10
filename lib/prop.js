var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('prop', 'Returns a function that gets given property').
    on(is.string, function(name) {
        return function(o) {
            return o && o[name];
        };
    });
