// Sum of Left Leaves

/*

Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

*/

const sumOfLeftLeaves = function(root) {
  let total = 0;

  function dfs (node, isLeft) {
      if (!node) return;

      dfs(node.left, true);
      dfs(node.right, false);

      if (!node.left && !node.right && isLeft) {
          total += node.val;
      }
      
  } 

  dfs(root, false);

  return total;
};