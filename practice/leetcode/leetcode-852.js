// Peak Index in a Mountain Array
// https://leetcode.com/problems/peak-index-in-a-mountain-array/

// Tags: Array, Binary Search

const peakIndexInMountainArray = function(arr) {
  let left = 1;
  let right = arr.length - 2;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    let prev = arr[mid-1];
    let cur = arr[mid];
    let next = arr[mid+1];

    if (prev < cur && cur > next) {
      return mid;
    } else if (prev > cur) {
      right = mid - 1
    } else {
      left = mid + 1;
    }

  }

  return lBinSearch(left, right, check, arr);
};

console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]));