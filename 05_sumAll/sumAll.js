const sumAll = function(x, y) {
    if (typeof x === 'number' && typeof y === 'number' && x > 0 && y > 0) {
        let num1 = Math.min(x,y);
        let num2 = Math.max(x,y);
        let sum = num1-1;
        for (let i = num1; i <= num2; i++) {
            sum = sum + i;
            num1 = num1 + i;
            }
        return sum
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;