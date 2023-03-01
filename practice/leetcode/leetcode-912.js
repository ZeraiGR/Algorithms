// Sort an Array
// https://leetcode.com/problems/sort-an-array/

// Tags: Array, Divide and Conquer, Sorting, Heap (Priority Queue), Merge Sort, Bucket Sort, Radix Sort

const merge = (arr1, arr2) => {
  const sortedArr = [];
  let i = j = 0;

  while (i < arr1.length && j < arr2.length) {
    sortedArr.push((arr1[i] < arr2[j]) ? arr1[i++] : arr2[j++]);
  }

  return [
    ...sortedArr,
    ...arr1.slice(i),
    ...arr2.slice(j)
  ];
};

const mergeSort = (arr) => {
  if (!arr || arr.length === 0) return null;
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const arr1 = arr.slice(0, mid);
  const arr2 = arr.slice(mid);

  return merge(mergeSort(arr1), mergeSort(arr2));
}

console.log(mergeSort([5,2,3,1]));
console.log(mergeSort([5,1,1,2,0,0]));