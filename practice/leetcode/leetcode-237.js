// Delete Node in a Linked List
// https://leetcode.com/problems/delete-node-in-a-linked-list/

// Tags: Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  let cur = node,
      next = node.next,
      prev = null;

  while(next) {
    cur.val = next.val;
    prev = cur;
    cur = next;
    next = next.next;
  }

  prev.next = null;
};