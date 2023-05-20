// Throttle
// https://leetcode.com/problems/throttle/

// Tags: Frontend (javaScript)

const throttle = function(fn, t) {
  let cooldown = false,
      lastArgs = null;
  return function wrapper (...args) {
    if (cooldown) {
      lastArgs = [this, ...args];
      return;
    }
    cooldown = true;
    fn.call(this, ...args);
    setTimeout(() => {
      cooldown = false;
      if (lastArgs) {
        wrapper.call(...lastArgs);
        lastArgs = null;
      }
    }, t);
  }
};