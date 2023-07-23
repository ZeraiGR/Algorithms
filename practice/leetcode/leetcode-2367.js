// Number of Arithmetic Triplets
// https://leetcode.com/problems/number-of-arithmetic-triplets/

// Tags: Array, Hash Table, Two Pointers, Enumeration

// Brute force
const arithmeticTriplets = function(nums, diff) {
  let res = 0;
  
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let cur = nums[i];
    let next = nums[j];

    if (next - cur > diff) continue;

    let cnt = 0;

    while (cnt < 2 && next - cur <= diff && next) {
      if (next - cur < diff) {
        j++;
        next = nums[j];
        continue;
      }

      if (next - cur === diff) {
        cnt++;
        cur = nums[j];
        j++;
        next = nums[j];
      }
    }

    if (cnt === 2) {
      res++;
    }

  }

  return res;
};

console.log(arithmeticTriplets([0,1,4,6,7,10], 3));

// Check [n - diff] and [n - 2 * diff]
function arithmeticTriplets2 (nums, diff) {
  const map = new Array(nums.length + 1).fill(false);
  let res = 0;

  for (const n of nums) {
    if (n >= diff * 2) {
      res += (map[n - diff] && map[n - 2 * diff]) ? 1 : 0; 
    }

    map[n] = true;
  }


  return res;
}