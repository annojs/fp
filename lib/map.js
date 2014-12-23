var annotate = require('annotate');
var is = require('annois');
var zip = require('annozip');

var each = require('./each');
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
        var objectKeys = keys(o);
        var ret = [];

        each(function(v, i) {
            ret.push(cb(v[0], v[1], i));
        }, zip(objectKeys, values(o)));

        return zip.toObject(zip(objectKeys, ret));
    });
