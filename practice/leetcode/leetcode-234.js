// Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/description/

// Tags: Linked List, Two pointers, Stack, Recursion

/*
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
*/

const isPalindrome = function(head) {
    let arr = [];
    let cur = head;
    while (cur) {
        arr.push(cur.val);
        cur = cur.next;
    }
    let arr2 = [...arr];
    arr2.reverse();
    return arr.join('') === arr2.join('');
};