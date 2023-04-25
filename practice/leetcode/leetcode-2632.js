// Curry
// https://leetcode.com/problems/curry/

// Tags: Frontend (javaScript)

const curry = function(fn) {
    return function curried(...args) {
      if (fn.length > args.length) {
        return curried.bind(this, ...args);
      } else {
        return fn.call(this, ...args);
      }
    };
};

function sum(a, b) { return a + b; }
const csum = curry(sum);
let res = csum(1)(2); // 3
console.log(res);