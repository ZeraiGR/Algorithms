// Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

// Tags: Linked List, Math, Recursion

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function reverseList (list) {
	let prev = null,
			cur = list;

	while (cur !== null) {
		let next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
	}

	return prev;
}

let list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const addTwoNumbers = function(l1, l2) {
	let l1Reversed = reverseList(l1);
	let l2Reversed = reverseList(l2);

	let v1 = [];
	let v2 = [];

	let tail = l1Reversed;
	let tail2 = l2Reversed;

	while (tail) {
		v1.push(tail.val);
		tail = tail.next;
	}

	while (tail2) {
		v2.push(tail2.val);
		tail2 = tail2.next;
	}

	let sum = BigInt(v1.join('')) + BigInt(v2.join(''));
	
	sum = String(sum).split('').map(n => +n).reverse();
    
	let res = new ListNode(sum[0]);
	let resTail = res;

	let i = 1;
	while (i < sum.length) {
			resTail.next = new ListNode(sum[i]);
			i += 1;
			resTail = resTail.next;
	}

	return res;
};

console.log(addTwoNumbers(list1, list2));