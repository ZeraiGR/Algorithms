// Longest Valid Parentheses
// https://leetcode.com/problems/longest-valid-parentheses/

// Tags: String, Dynamic Programming, Stack

const longestValidParentheses = function(s) {
  let ans = 0,
      stack = [-1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }

  return ans;
};

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses("(())"));
console.log(longestValidParentheses(")(()))"));
console.log(longestValidParentheses("()(()"));