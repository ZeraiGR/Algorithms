// Swap Nodes in Pairs
// https://leetcode.com/problems/swap-nodes-in-pairs/

// Tags: Linked List, Recursion

const swapPairs = function(head) {
  if (head == null) return null;
  if (head.next == null) return head;
  
  if (head.next.next == null) {
    let prev = head;
    head = head.next;
    head.next = prev;
    prev.next = null;
    return head;
  }

  let next = head.next.next;
  let prev = head;
  head = head.next;
  head.next = prev;
  prev.next = swapPairs(next);
  return head;
};