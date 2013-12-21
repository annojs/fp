var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('some', 'Performs given check on array. If any of the checks pass, returns true.').
on(is.fn, is.array, function(cb, a) {
    return a.map(cb).filter(id).length > 0;
});

function id(a) {
    return a;
}
