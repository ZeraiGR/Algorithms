// Counter II
// https://leetcode.com/problems/counter-ii/

// Tags: Frontend (javaScript)

const createCounter = function(init) {
  let val = init;
  return {
    increment() {
      return ++val;
    },
    decrement() {
      return --val;
    },
    reset() {
      return val = init;
    }
  }
};
