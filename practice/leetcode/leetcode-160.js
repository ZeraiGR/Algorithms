// Intersection of Two Linked Lists
// https://leetcode.com/problems/intersection-of-two-linked-lists/

// Tags: Hash Table, Linked List, Two Pointers

// Brute force
const getIntersectionNode = function(headA, headB) {
  let dummy = new ListNode(0);
  let result = dummy;
  let dynHeadA = headA;
  let isFounded = false;

  while(headB) {
    
    while (dynHeadA) {
      if (dynHeadA === headB) {
        isFounded = true;
        dummy.next = dynHeadA;
        break;
      } else {
        dynHeadA = dynHeadA.next;
      }
    }

    if (isFounded) break;

    dynHeadA = headA;
    headB = headB.next;
  }

  return result.next;
};

// Solution without knowing the difference in len
const getIntersectionNode2 = function(headA, headB) {
  if (headA == null || headB == null) return null;

  let a = headA;
  let b = headB;

  while (a != b) {
    a = a == null ? headB : a.next;
    b = b == null ? headA : b.next;
  }

  return a;
};
