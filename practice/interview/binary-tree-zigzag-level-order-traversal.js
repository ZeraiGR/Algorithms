// Binary Tree Zigzag Level Order Traversal

/*

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

*/

const zigzagLevelOrder = function(root) {
  const res = [];
  const queue = [];

  if (root) {
    queue.push(root);
  }

  while (queue.length > 0) {
    const curSize = queue.length;
    const level = [];

    for (let i = 0; i < curSize; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      
      if (node.right) {
        queue.push(node.right);
      }
    }

    if (res.length % 2 === 0) {
      level.reverse();
    }

    res.push(level);
  }

  return res;
};