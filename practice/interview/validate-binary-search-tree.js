// Validate Binary Search Tree

/*

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

- The left subtree of a node contains only nodes with keys less than the node's key.

- The right subtree of a node contains only nodes with keys greater than the node's key.

- Both the left and right subtrees must also be binary search trees.

*/

const isValidBST = function(root) {
  function valid (node, left, right) {
    if (!node) return true;
    
    if (!(node.val > left && node.val < right)) {
      return false;
    }

    return valid(node.left, left, node.val) && valid(node.right, node.val, right);
  } 

  return valid(root, -Infinity, Infinity);
};