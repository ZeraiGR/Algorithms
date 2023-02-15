// Count Operations to Obtain Zero
// https://leetcode.com/problems/count-operations-to-obtain-zero/

// Tags: Math, Simulation

const countOperations = function(num1, num2) {
  if (num1 === 0 || num2 === 0) return 0;
  if (num1 === num2) return 1;

  let res = 0;

  while (num1 >= 0 || num2 >= 0) {
    if (num1 === num2) return res + 1;

    if (num1 >= num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
    
    res += 1;
  }
};

console.log(countOperations(10, 10));
console.log(countOperations(2, 3));
console.log(countOperations(0, 0));