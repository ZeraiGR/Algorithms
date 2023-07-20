// Minimum Depth of Binary Tree
// https://leetcode.com/problems/minimum-depth-of-binary-tree/

// Tags: Tree, DFS, BFS, Binary Tree

const minDepth = function(root) {
  if (root == null) {
    return 0;
  }

  if (root.left == null && root.right == null) {
    return 1;
  }

  if (root.left == null) {
    return minDepth(root.right) + 1;
  }

  if (root.right == null) {
    return minDepth(root.left) + 1;
  }

  let res = Math.min(minDepth(root.left), minDepth(root.right));
  return res + 1;
};