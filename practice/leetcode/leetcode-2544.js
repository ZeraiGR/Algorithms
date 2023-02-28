// Alternating Digit Sum
// https://leetcode.com/problems/alternating-digit-sum/description/

// Tags: Math

const alternateDigitSum = function(n) {
    let sign = 1;
    let res = 0;
    String(n).split('').forEach(n => {
        if (sign === 1) {
            res += +n;
            sign = 0;
        } else {
            res -= +n;
            sign = 1;
        }
    });
    return res;
};