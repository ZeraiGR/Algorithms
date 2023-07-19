// Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

// Tags: Hash Table, Linked List, Two Pointers

const hasCycle = function(head) {
  let curId = 0;

  let current = head;

  if (current === null) {
    return false;
  }

  while (current.next !== null) {
    if (current.id) {
      return true;
    }

    current.id = curId;
    curId++;

    current = current.next;
  }

  return false;
};

const hasCycle2 = function(head) {
  if (!head) return false;

  let slow = fast = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }

  }

  return false;
};