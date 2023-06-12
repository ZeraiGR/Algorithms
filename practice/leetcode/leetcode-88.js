// Merge Sorted Array
// 

const merge = function(nums1, m, nums2, n) {
  const sumArr = new Array(n + m).fill(null);

  let inf = Infinity;

  nums1 = nums1.slice(0, m);
  nums2 = nums2.slice(0, n);

  nums1.push(inf);
  nums2.push(inf);

  let j = 0;
  let k = 0;

  for (let i = 0; i < m + n; i++) {
    if (nums1[j] < nums2[k]) {
      sumArr[i] = nums1[j];
      j++;
    } else {
      sumArr[i] = nums2[k];
      k++;
    }
  }

  return sumArr;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
console.log(merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3));