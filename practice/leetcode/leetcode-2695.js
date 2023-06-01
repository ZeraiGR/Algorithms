// Array Wrapper
// https://leetcode.com/problems/array-wrapper/

// Tags: Frontend (javaScript)

var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((acc, el) => acc + el, 0);
}

ArrayWrapper.prototype.toString = function() {
    return '[' + this.nums.join(',') + ']';
}