// Partition Array Into Three Parts With Equal Sum
// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/

// Array, Greedy

const canThreePartsEqualSum = function(arr) {
  let totalSum = arr.reduce((acc, el) => acc += el, 0);
  let partSum = totalSum / 3;
  if (partSum % 1 !== 0) return false;

  let i = 0;
  let leftSum = 0;

  for (let j = i; j < arr.length; j++) {
    leftSum += arr[j];
    i += 1;
    if (leftSum === partSum) break;
  }

  if (leftSum !== partSum || i >= arr.length - 1) return false;
  
  let middleSum = 0;

  for (let j = i; j < arr.length; j++) {
    middleSum += arr[j];
    i += 1;
    if (middleSum === partSum) break;
  }

  if (middleSum !== partSum || i >= arr.length) return false;

  let rightSum = 0;
  for (let j = i; j < arr.length; j++) {
    rightSum += arr[j];
  }

  if (leftSum === rightSum && leftSum === middleSum) return true;
  return false;
};

console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1])); // true
console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1])); // false
console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4])); // true
console.log(canThreePartsEqualSum([18,12,-18,18,-19,-1,10,10]));  // true
console.log(canThreePartsEqualSum([2,8,15,-5,0,9,-3,4])); // true
console.log(canThreePartsEqualSum([1,-1,1,-1])); // false
console.log(canThreePartsEqualSum([0,0,0,0]));  // true
