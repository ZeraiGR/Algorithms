// Promise Time Limit
// https://leetcode.com/problems/promise-time-limit/description/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

const timeLimit = function (fn, t) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args).then(resolve).catch(reject);
      setTimeout(() => {
        reject('Time limit exceeded');
      }, t);
    });
  }
}