var annotate = require('annotate');


module.exports = annotate('noop', 'Does nothing').
    on(function() {});
