//  Function Composition
// https://leetcode.com/problems/function-composition/

// Tags: Frontend (javaScript)

const compose = function(functions) {
	return function(x) {
    let res = x;
    for (fn of functions.reverse()) {
      res = fn(res);
    }
    return res;
  }
};

const compose2 = function(functions) {
    return x => functions.reduceRight((acc, f) => f(acc), x);
};

let fn = compose2([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4));