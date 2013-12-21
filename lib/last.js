var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('last', 'Returns the last item of the given array').
    on(is.array, function(arr) {
        return arr[arr.length - 1];
    });
