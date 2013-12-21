var annotate = require('annotate');
var is = require('annois');
var range = require('annomath').range;

var map = require('./map');


module.exports = annotate('chunk', 'Chunks given array to pieces').
    on(is.number, is.array, function(len, arr) {
        if(len < 1) {
            return arr;
        }
        if(isNaN(len)) {
            return [];
        }

        return map(function(k) {
            return arr.slice(k, k + len);
        }, range(0, arr.length, len));
    });
