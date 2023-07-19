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

const isPalindrome3 = function (head) {
  if (!head) return false;

  const getMidNode = (head) => {
    let fast = slow = head;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow;
  };

  const reverseList = (head) => {
    let prev = null,
        cur = head;

    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }

    return prev;
  };

  const midNode = getMidNode(head);
  let reverse = reverseList(midNode);
  let current = head;

  while (current.next) {
    if (reverse.val !== current.val) {
      return false;
    }

    reverse = reverse.next;
    current = current.next;
  }

  return true;
}