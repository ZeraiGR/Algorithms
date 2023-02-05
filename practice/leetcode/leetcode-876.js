// Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/

// Tags: Linked List, Two pointers

const middleNode = function(head) {
  let depth = 0;
	let tail = head;
	while (tail) {
		tail = tail.next;
		depth++;
	}
	let mid = Math.ceil(depth / 2);
	tail = head;
	if (depth % 2 !== 0) mid -= 1;
	for (let i = 0; i < mid; i++) tail = tail.next;
	return tail;
};

// Fast and slow pointer
const middleNode2 = function (head) {
	let slow = fast = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}