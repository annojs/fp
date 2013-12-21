var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('every', 'Performs given check on array. If every check passes, returns true.').
    on(is.fn, is.array, function all(cb, a) {
        return a.map(cb).filter(id).length === a.length;
    });

function id(a) {
    return a;
}
