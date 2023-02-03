// Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

// Tags: Linked List

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

// Iteration approach
function mergeTwoLists (list1, list2) {
	const dummy = { val: 0, next: null };
	let tail = dummy;

	while(list1 && list2) {
		if (list1.val > list2.val) {
			tail.next = list2;
			list2 = list2.next;
		} else {
			tail.next = list1;
			list1 = list1.next;
		}
		tail = tail.next;
	}

	tail.next = list1 || list2;
	return dummy.next;
}

// recursion approach

function mergeTwoListsRec (list1, list2) {
	if (!list1) return list2;
	if (!list2) return list1;

	if (list1.val > list2.val) {
		list2.next = mergeTwoListsRec(list1, list2.next);
		return list2;
	} else {
		list1.next = mergeTwoListsRec(list1.next, list2);
		return list1;
	}
}