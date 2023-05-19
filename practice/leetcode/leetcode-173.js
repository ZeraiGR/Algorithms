// Binary Search Tree Iterator
// https://leetcode.com/problems/binary-search-tree-iterator/

// Tags: Stack, Tree, Design, Binary Search Tree, Binary Tree, Iterator

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
const BSTIterator = function(root) {
  if(!root){
    this.data = [];
    return;
  }

  let visited = [];

  function traverse(node){
    if(node.left) traverse(node.left);
    visited.push(node.val);
    if(node.right) traverse(node.right);
  }

  traverse(root);

  this.data = visited.reverse();
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.data.pop();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.data.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

function BSTIterator (root) {
  const stack = [];
  return {hasNext, next};

  function hasNext() {
    return root || stack.length;
  }

  function next() {
    while(root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    let res = root.val;
    root = root.right;
    return res;
  }
}