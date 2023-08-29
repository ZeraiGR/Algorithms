// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Input: n = 1
// Output: ["()"]

const generateParenthesis = function(n) {
  const res = [];

  const go = (l, r, s) => {
    if (s.length === 2 * n) {
      res.push(s);
      return;
    }

    if (l < n) go(l + 1, r, s + '(');
    if (r < l) go(l, r + 1, s + ')');
  };
  
  go(0, 0, '');
  return res;
};

const generateParenthesis2 = function(n) {
  const res = [];
  const stack = [];

  function backtrace(open, closed) {
    if (stack.length === 2 * n) {
      res.push(stack.join(''));
      return;
    }

    if (open < n) {
      stack.push('(');
      backtrace(open + 1, closed);
      stack.pop();
    }

    if (closed < open) {
      stack.push(')');
      backtrace(open, closed + 1);
      stack.pop();
    }
  }
  
  backtrace(0, 0);
  return res;
};

console.log(generateParenthesis2(1));
console.log(generateParenthesis2(2));
console.log(generateParenthesis2(3));
console.log(generateParenthesis2(4));
console.log(generateParenthesis2(5));