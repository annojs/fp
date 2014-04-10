module.exports = function(op, a) {
    return [{foo: 'bar'}, undefined, {foo: 'baz'}].filter(op('foo')).length === 2;
};
module.exports.amount = 1;
