// LRU Cache
// https://leetcode.com/problems/lru-cache/

// Tags: Hash Table, Linked List, Design, Doubly-Linked List

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) return -1;

  const v = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, v);
  return this.cache.get(key);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);
  if (this.cache.size > this.capacity) {
    this.cache.delete(this.cache.keys().next().value);
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1));    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2));    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1));    // return -1 (not found)
console.log(lRUCache.get(3));    // return 3
console.log(lRUCache.get(4));    // return 4

class LRUCache {
  constructor (capacity) {
    this.capacity = capacity;
    this.keys = [];
    this.cache = new Map();
  }

  get (key) {
    if (this.cache.has(key)) {
      let index = this.keys.indexOf(key);

      this.keys.splice(index, 1);
      this.keys.unshift(key);

      return this.cache.get(key);
    }

    return -1;
  }

  put (key, val) {
    if (this.cache.has(key)) {
      let index = this.keys.indexOf(key);

      this.keys.splice(index, 1);
      this.keys.unshift(key);

      return;
    }

    if (this.keys.length >= this.capacity) {
      const lastKey = this.keys.pop();
      this.cache.delete(lastKey);
    }

    this.cache.set(key, val);
    this.keys.unshift(key);
  }
}