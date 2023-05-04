// Allow One Function Call
// https://leetcode.com/problems/allow-one-function-call/description/

// Tags: Frontend (javaScript)

const once = function(fn) {
    let isCalled = false;
    return function(...args){
        if (!isCalled) {
            isCalled = true;
            return fn.call(this, ...args);
        }  
    }
};