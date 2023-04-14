// Counter
// https://leetcode.com/problems/counter/description/

// Tags: Frontend (javaScript)

var createCounter = function(n) {
    return function() {
        return n++;
    };
};