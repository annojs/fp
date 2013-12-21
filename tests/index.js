var generate = require('annogenerate');
var fuzz = require('annofuzz')(generate);
var is = require('annois');


module.exports = execute();

function execute() {
    var tests = require('require-dir')('.');

    Object.keys(tests).forEach(function(name) {
        var test = tests[name];
        var module = require('../')[name];

        fuzz._amount = 100;
        fuzz(module, test);
    });
}
