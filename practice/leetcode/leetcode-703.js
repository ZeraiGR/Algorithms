// Kth Largest Element in a Stream
// https://leetcode.com/problems/kth-largest-element-in-a-stream/description/

// Tags: Tree, Design, Binary Search Tree, Heap (Priority Queue), Binary Tree, Data Stream

// brute force

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    this.nums.sort((a,b) => b - a);
    return this.nums[this.k - 1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// todo: Solve with min heap