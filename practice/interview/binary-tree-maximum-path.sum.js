// Binary Tree Maximum Path Sum

/*

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

*/

const maxPathSum = function(root) {
  let res = root.val;

  function dfs(node) {
    if (!node) return 0;

    let leftSum = dfs(node.left);
    let rightSum = dfs(node.right);
    leftSum = Math.max(leftSum, 0);
    rightSum = Math.max(rightSum, 0);

    // compute max path sum WITH splitting
    res = Math.max(res, node.val + leftSum + rightSum);

    // return max path sum WITHOUT splitting
    return node.val + Math.max(leftSum, rightSum);
  }

  dfs(root);

  return res;
};