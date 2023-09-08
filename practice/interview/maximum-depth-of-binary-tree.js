// Maximum Depth of Binary Tree

/*

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

*/

var maxDepth = function(root) {
    const dfs = (node) => {
      if (node === null) return 0;

      return Math.max(dfs(node.left), dfs(node.right)) + 1;
    }

    let res = dfs(root);

    return res;
};