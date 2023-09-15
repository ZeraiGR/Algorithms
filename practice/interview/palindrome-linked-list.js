// Palindrome Linked List

/*

Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.

*/

const isPalindrome = function(head) {
  let mid = getMidNode(head);
  let reversed = reverseList(mid);
  let curr = head;

  while (curr.next) {
      if (reversed.val !== curr.val) {
          return false;
      }

      reversed = reversed.next;
      curr = curr.next;
  }

  return true;
};

function getMidNode (head) {
  let fast = slow = head;

  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
  }

  return slow;
}

function reverseList (head) {
  let prev = null;
  let curr = head;

  while (curr) {
      let ntx = curr.next;
      curr.next = prev;
      prev = curr;
      curr = ntx;
  }

  return prev;
}