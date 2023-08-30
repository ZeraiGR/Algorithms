// Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
**/

var addTwoNumbers = function(l1, l2) {
  const dummy = new ListNode();
  let cur = dummy;

  let rest = 0;
  while (l1 || l2 || rest) {
    let v1 = l1 ? l1.val : 0; 
    let v2 = l2 ? l2.val : 0;

    let val = v1 + v2 + rest;
    rest = Math.floor(val / 10);
    val = val % 10;
    cur.next = new ListNode(val);

    // update pointers
    cur = cur.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
};