var deepeq = require('annoops').deepeq;
var flatten = require('../').flatten;


module.exports = function(op, len, arr) {
    return deepeq(flatten(op(len, arr)), arr);
};
