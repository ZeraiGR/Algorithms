// Mean of Array After Removing Some Elements
// https://leetcode.com/problems/mean-of-array-after-removing-some-elements/

// Tags: Array, Sorting

const trimMean = function(arr) {
  arr.sort((a, b) => a - b);
  
  let deleteCnt = Math.round((arr.length / 100) * 5);

  for (let i = 0; i < deleteCnt; i++) {
    arr.shift();
    arr.pop();
  }

  return (arr.reduce((acc, item) => acc + item, 0) / arr.length).toFixed(5);
};

console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]));
console.log(trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]));
console.log(trimMean([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]));