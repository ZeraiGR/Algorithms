// N-ary Tree Preorder Traversal
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

// Tags: Stack, Tree, DFS

function Node(val, children) {
  this.val = val;
  this.children = children;
};

let node = new Node(1, [
	new Node(3, [
		new Node(5, null),
		new Node(6, null),
	]),
	new Node(2, null),
	new Node(4, null)
]);

// Solution with stack
const preorderStack = function(root) {
	if (!root) return [];
	let stack = [];
	stack.push(root);
	let res = [];

	while (stack.length) {
		let cur = stack.pop();
		res.push(cur.val);
		if (cur.children) {
			stack.push(...cur.children.reverse());
		}
	}

	return res;
}

function preorderRecursive (root) {
	if (!root) return [];
	let res = [];

	const dfs = (tree) => {
		if (!tree) return null;
		res.push(tree.val);

		if (tree.children) {
			for ( const child of tree.children ) {
				dfs(child);
			}
		}
	}

	dfs(root);

	return res;
}

console.log(preorderStack(node));
console.log(preorderRecursive(node));