// Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/description/

// Tags: Tree, DFS, BFS, Binary tree

/*
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
*/

function isEqual(r1, r2) {
  
  if (!r1 || !r2) {
    return r1 === r2;
  }

  if (r1.val === r2.val) {
    return isEqual(r1.left === r2.right) && isEqual(r1.right === r2.left);
  }

  return false;
}

const isSymmetric = function(root) {
  return isEqual(root.left, root.right);
};