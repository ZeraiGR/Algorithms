// https://leetcode.com/problems/balanced-binary-tree/description/
// Tags: Tree, DFS, Binary tree

// Given a binary tree, determine if it is height-balanced.

// * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/

const isBalanced = (root) => {
	if (!root) return true;
	let res = true;

	const dfs = (tree) => {
		if (!tree) return 1;

		const leftcnt = dfs(tree.left);
		const rightcnt =	dfs(tree.right);

		if (Math.abs(leftcnt - rightcnt) > 1) res = false;

		return Math.max(leftcnt, rightcnt) + 1;
	}

	dfs(root);

	return res;
};