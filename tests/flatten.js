var deepeq = require('annoops').deepeq;
var chunk = require('../').chunk;


module.exports = function(op, arr) {
    return deepeq(op(chunk(3, arr)), arr);
};
