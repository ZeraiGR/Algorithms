// Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const intersection = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const res = [];

  let left = right = 0;

  while (left < nums1.length && right < nums2.length) {
    let num1 = nums1[left];
    let num2 = nums2[right];

    if (num1 === num2) {
      res.push(num1);
      left++;
      right++;
      continue;
    }

    if (num1 > num2) {
      right++;
      continue;
    }

    if (num2 > num1) {
      left++;
      continue;
    }
  }

  return res;
}

const intersection2 = function(nums1, nums2) {
  const cnt = {};
  const res = [];

  for (let num of nums1) {
    cnt[num] = (cnt[num] ?? 0) + 1;
  }

  for (let num of nums2) {
    if (cnt[num] > 0) {
      res.push(num);
      cnt[num]--;
    }
  }

  return res;
}