// Remove Linked List Elements
// https://leetcode.com/problems/remove-linked-list-elements/

// Tags: Linked List, Recursion

// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

const removeElements = function(head, val) {
  let prev, cur, next;
  cur = head;
  prev = new ListNode(null, null);
  next = cur.next;

  while (cur?.val) {
    if (cur.val === val) {
      prev.next = next;
      cur.next = null;
      if (cur === head) head = next;
      cur = next;
      next = next?.next;
    } else {
      prev = cur;
      cur = next;
      next = next.next;
    }
  }

  return head;
};