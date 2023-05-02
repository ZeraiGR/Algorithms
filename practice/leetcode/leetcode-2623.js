// Memoize
// https://leetcode.com/problems/memoize/

// Tags: Frontend (javaScript)

function memoize(fn) {
    const cash = {};

    return function(...args) {
      atob
      let key = args.join(',');
      if (key in cash) return cash[key];
      const res = fn.call(this, ...args);
      cash[key] = res;
      return res;
    }
}