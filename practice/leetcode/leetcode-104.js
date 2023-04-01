// Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Tags: Tree, DFS, BFS, Binary tree

// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val)
//   this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }

const maxDepth = function(root) {
  const dfs = (node) => {
    if (node === null) return 0;

    return Math.max(dfs(node.left), dfs(node.right)) + 1;
  }

  let res = dfs(root);

  return res;
};