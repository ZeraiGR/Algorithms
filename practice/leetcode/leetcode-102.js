// Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/

// Tags: Tree, BFS, Binary Tree

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const node = new TreeNode(3);
node.left = new TreeNode(9);
node.right = new TreeNode(20);
node.left.left = new TreeNode(11);
node.left.right = new TreeNode(8);
node.right.left = new TreeNode(15);
node.right.right = new TreeNode(7);
node.right.left.left = new TreeNode(1);
node.right.left.right = new TreeNode(5);

const levelOrder = function(root) {
    if (!root) return [];
    let res = [[root.val]];
    
    function bfs (root) {
        const queue = [];
        if (root.left) queue.push(root.left);
        if (root.right) queue.push(root.right);

        while (queue.length) {
            let part = [];
            let nextPart = [];
						let curLength = queue.length;
						
            for (let i = 0; i < curLength; i++) {
                let elem = queue.shift();

                if (elem) {
                    part.push(elem.val);
                    if (elem.left) nextPart.push(elem.left);
                    if (elem.right) nextPart.push(elem.right);
                }
            }

						
            
            res.push(part);
            queue.push(...nextPart);
        }
    }

    if (root?.left?.val || root?.right?.val) bfs(root);

    return res;
};

console.log(levelOrder(node));