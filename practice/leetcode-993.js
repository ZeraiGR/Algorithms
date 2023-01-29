// https://leetcode.com/problems/cousins-in-binary-tree/
import { assert } from "../tester.js";

// Tree, DFS, BFS, Binary tree

function isCousins (root, x, y) {
  let parentX = null;
  let parentY = null;

  const getParentsDFS = (tree) => {
		if (tree?.left?.val === x || tree?.right?.val === x) parentX = tree.val;
		if (tree?.left?.val === y || tree?.right?.val === y) parentY = tree.val;
		if (tree.left) getParentsDFS(tree.left);
		if (tree.right) getParentsDFS(tree.right);
	}

	getParentsDFS(root);

	const depthX = getDepthBFS(root, x);
	const depthY = getDepthBFS(root, y);

	if (depthX > 1 && depthY > 1 && depthX === depthY && parentX !== parentY) {
			return true;
	} else {
			return false;
	}
}

function getDepthBFS (root, x) {
	if (root.val === x) return 0;
	
	const queue = [];
	if (root.left) queue.push([root.left, 1]);
	if (root.right) queue.push([root.right, 1]);
	
	while (queue.length !== 0) {
		const elem = queue.shift();

		if (elem[0].val === x) {
			return elem[1];
		} else {
			let curDepth = elem[1];
			if (elem[0].left) queue.push([elem[0].left, curDepth + 1]);
			if (elem[0].right) queue.push([elem[0].right, curDepth + 1]);
		}
	}

	return null;
};


// Tests
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root1 = new TreeNode(1);
root1.left = new TreeNode(2, null, new TreeNode(4, null, null));
root1.right = new TreeNode(3, null, new TreeNode(5, null, null));

const root2 = new TreeNode(1);
root2.left = new TreeNode(2, new TreeNode(4, null, null), null);
root2.right = new TreeNode(3, null, null);

assert(1, isCousins(root1, 5, 4), true);
assert(2, isCousins(root1, 4, 5), true);
assert(3, isCousins(root1, 4, 3), false);
assert(4, isCousins(root1, 2, 3), false);
assert(5, isCousins(root2, 4, 3), false);