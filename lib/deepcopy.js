var annotate = require('annotate');
var is = require('annois');

var copy = require('./copy');


var deepcopy = annotate('deepcopy', 'Returns a deep copy').
    on(is.array, function(o) {
        return copy(o);
    }).
    on(is.object, function(o) {
        var copy = o;

        for(var k in o) {
            copy[k] = deepcopy(o[k]);
        }

        return copy;
    }).
    on(is.any, id);

module.exports = deepcopy;

function id(a) {
    return a;
}
