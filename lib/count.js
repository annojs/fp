var annotate = require('annotate');
var is = require('annois');

var keys = require('./keys');


module.exports = annotate('count', 'Counts the amount of items in given object').
    on(is.array, function(o) {
        return o.length;
    }).
    on(is.object, function(o) {
        return keys(o).length;
    });
