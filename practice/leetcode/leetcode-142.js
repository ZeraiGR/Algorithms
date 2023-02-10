// Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii/

// Tags: Hash Table, Linked List, Two Pointers

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let node = new ListNode(3);
node.next = new ListNode(2);
node.next.next = new ListNode(0); 
node.next.next.next = new ListNode(-4); 
node.next.next.next.next = node.next;

// let node = new ListNode(1);
// node.next = new ListNode(2);
// node.next.next = node;

const detectCycle = function(head) {
	if (!head) return null;
	if (!head.next) return null;

	let res = null;

	let tail = head;
	let map = new Map();

	while (!map.has(tail)) {
		map.set(tail, (map.get(tail) ?? 0) + 1);
		if (tail.next) {
			tail = tail.next;
		} else {
			break;
		}
	}

	if (tail.next) res = tail;

	return res;
};

console.log(detectCycle(node));
