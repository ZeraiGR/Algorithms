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

const removeElementsWithDummyNode = function (head, val) {
  let dummy, cur;
  dummy = new ListNode(null, head);
  cur = dummy;

  while (cur.next !== null) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}