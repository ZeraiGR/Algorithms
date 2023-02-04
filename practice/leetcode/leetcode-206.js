// Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/

// Tags: Linked List, Recursion

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
let test = node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);
test.next.next = test;
test.next = null;
console.log(node);
console.log(node.next);
console.log(node.next.next);
console.log(node.next.next.next);

// Iterative approach
function reverseList (head) {
	let prev = null,
			curr = head;

	while (curr) {
		let next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	return prev;
}

// Recursion approach
function reverseList2 (head) {
	if (head === null || head.next === null) return head;
	let res = reverseList2(head.next);
	head.next.next = head;
	head.next = null;
	return res;
}

// Recursion approach 2
function reverseList3 (head, prev = null) {
	if (!head) return prev;
	let next = head.next;
	head.next = prev;
	return reverseList3(next, head);
}