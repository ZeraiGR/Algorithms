// Path Sum

/*

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

*/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(5, 
  new TreeNode(4, 
    new TreeNode(11, 
      new TreeNode(7, null, null), 
      new TreeNode(2, null, null)), 
    null), 
  new TreeNode(8,
    new TreeNode(13, null, null),
    new TreeNode(4, null,
      new TreeNode(1, null, null))
  )
)

const hasPathSum = function(root, targetSum) {
  function dfs (node, curSum) {
      if (!node) return false;

      curSum += node.val;

      if (!node.left && !node.right) {
        return curSum === targetSum;
      }

      return dfs(node.left, curSum) || dfs(node.right, curSum);
  }

  return dfs(root, 0);
};

console.log(hasPathSum(root, 22));