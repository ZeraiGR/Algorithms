// Reverse Linked List

/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

*/

const reverseList = function(head) {
  let prev = null, cur = head;

  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};