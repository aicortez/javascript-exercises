const repeatString = function(str, times) {
    if (times >= 0) {
        return str.repeat(times);
    } else {
        return 'ERROR';
    }
}

// Do not edit below this line
module.exports = repeatString;