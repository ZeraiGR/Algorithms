// Remove Outermost Parentheses
// https://leetcode.com/problems/remove-outermost-parentheses/

// Tags: String, Stack

const removeOuterParentheses = function(s) {
    let isParent = false;
    let stack = [];
    let res = [];
    s.split('').forEach(p => {
        if (stack.length === 0 && p === '(') {
            isParent = true;
            stack.push(p);
        } else if (stack.length === 1 && p === ')') {
          stack.pop();
          isParent = false;
        } else if (isParent) {
          res.push(p);
          if (p === '(') {
              stack.push(p);
          } else if (p === ')') {
              stack.pop(p);
          }
        } 
    });

    return res.join('');
};

console.log(removeOuterParentheses('(()())(())'));
console.log(removeOuterParentheses('(()())(())(()(()))'));
console.log(removeOuterParentheses('()()'));