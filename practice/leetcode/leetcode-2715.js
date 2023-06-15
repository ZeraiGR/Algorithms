// Execute Cancellable Function With Delay
// https://leetcode.com/problems/execute-cancellable-function-with-delay/

// Tags: Frontend (javaScript)

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
  let isCancaled = false;

  setTimeout(() => {
    if (!isCancaled) {
      fn.call(this, ...args);
    }
  }, t);

  return () => {
    isCancaled = true;
  };
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const log = (...argsArr) => {
 *      result.push(fn(...argsArr))
 *  }
 *       
 *  const cancel = cancellable(fn, args, t);
 *           
 *  setTimeout(() => {
 *     cancel()
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, cancelT)
 */