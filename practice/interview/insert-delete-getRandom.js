// Insert Delete GetRandom O(1)

/*

Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.

*/

var RandomizedSet = function() {
  this.numMap = new Map();
  this.numArr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  let res = this.numMap.has(val);

  if (!res) {
    this.numMap.set(val, this.numArr.length);
    this.numArr.push(val);
  }

  return !res;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  let res = this.numMap.has(val);

  if (res) {
    let idx = this.numMap.get(val);
    let latest = this.numArr.at(-1);
    this.numArr[idx] = latest;
    this.numArr.pop();
    this.numMap.set(latest, idx);
    this.numMap.delete(val);
  }

  return res;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  let start = 0;
  let end = this.numArr.length - 1;

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  let randomIndex = randomInteger(start, end);
  return this.numArr[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */