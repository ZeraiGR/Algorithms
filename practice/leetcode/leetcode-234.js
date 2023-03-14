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

// Solution with O(1) extra space
const isPalindrome2 = function(head) {
    let fast = head, slow = head, prev, temp;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    prev = slow;
    slow = slow.next;
    prev.next = null;
    while (slow) {
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    fast = head;
    slow = prev;
    while (slow) {
        if (slow.val !== fast.val) return false;
        else fast = fast.next; slow = slow.next;
    }
    return true;
};