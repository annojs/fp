'use strict';

var names = [
    'chain', 'chunk', 'copy', 'count', 'deepcopy', 'each', 'every',
    'filter', 'first', 'flatten', 'id', 'keys', 'last', 'map',
    'merge', 'noop', 'not', 'partial', 'prop', 'reduce', 'some',
    'values'
];
var modules = {};

names.forEach(function(name) {
    modules[name] = require('./' + name);
});

module.exports = modules;
