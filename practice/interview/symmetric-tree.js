// Symmetric Tree

/*

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Definition for a binary tree node.

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

*/

const isSymmetric = function(root) {
  // 1) root не важно какой
  // 2) left.val должно быть равно right.val
  // 3) Противоположные ноды должны быть равны

  function dfs (left, right) {
    if (left == null && right == null) {
      return true;
    }

    if (left == null || right == null) {
      return false;
    }

    return left.val == right.val && dfs(left.left, right.right) && dfs(left.right, right.left);
  }

  return dfs(root.left, root.right);
};