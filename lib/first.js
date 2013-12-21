var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('first', 'Returns the first item of the given array').
    on(is.array, function(arr) {
        return arr[0];
    });
