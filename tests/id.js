module.exports = function(op, a) {
    if(isNaN(a)) return true;

    return op(a) === a;
};

