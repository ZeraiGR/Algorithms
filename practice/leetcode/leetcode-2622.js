// Cache With Time Limit
// https://leetcode.com/problems/cache-with-time-limit/

// Tags: Frontend (javaScript)

const TimeLimitedCache = function() {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
  let found = this.cache.has(key);
  if (found) clearTimeout(this.cache.get(key).ref);
  this.cache.set(key, {
      value,
      ref: setTimeout(() => this.cache.delete(key), duration)
  });
  return found;
};

TimeLimitedCache.prototype.get = function(key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function() {
  return this.cache.size;
};


var obj = new TimeLimitedCache();

console.log(obj.set(1, 42, 50)); // false

setTimeout(() => {
  console.log(obj.set(1, 50, 100));
}, 40);

setTimeout(() => {
  console.log(obj.get(1));
}, 50);

setTimeout(() => {
  console.log(obj.get(1));
}, 120);

setTimeout(() => {
  console.log(obj.get(1));
}, 200);

setTimeout(() => {
  console.log(obj.count());
}, 250);