// Debounce
// https://leetcode.com/problems/debounce/

// Tags: Frontend (javaScript)

const debounce = function(fn, t) {
    let id = null;
    return function(...args) {
      if (id) clearTimeout(id);

      id = setTimeout(() => {
        fn.call(this, ...args);
      }, t);
    }
};

function debounceWithCooldown(fn, ms) {
  let cooldown = false;
  return function (...args) {
    if (cooldown) return;
    fn.apply(this, args);
    cooldown = true;
    setTimeout(() => cooldown = false, ms);
  }
}