var annotate = require('annotate');
var is = require('annois');
var zip = require('annozip');

var each = require('./each');
var map = require('./map');
var keys = require('./keys');
var values = require('./values');


module.exports = annotate('map', 'Maps using given callback')
    .on(is.fn, is.array, function(cb, o) {
        var ret = [];

        each(function(v, i) {
            ret.push(cb(v, i));
        }, o);

        return ret;
    })
    .on(is.fn, is.object, function(cb, o) {
        return zip.toObject(zip(keys(o), map(cb, values(o))));
    });

