// Trapping Rain Water

/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Input: height = [4,2,0,3,2,5]
Output: 9

*/

const trap = function(height) {
    let res = 0;

    let maxHeightIdx = 0;
    let maxHeight = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] > maxHeight) {
            maxHeightIdx = i;
            maxHeight = height[i];
        }
    }

    let temp = 0;
    let curMaxHeight = 0;
    for (let i = 0; i <= maxHeightIdx; i++) {
        let curHeight = height[i];

        if (curHeight >= curMaxHeight) {
            curMaxHeight = curHeight;
            res += temp;
            temp = 0;
        } else {
            temp += curMaxHeight - curHeight;
        }
    }

    temp = 0;
    curMaxHeight = 0;
    for (let i = height.length - 1; i >= maxHeightIdx; i--) {
        let curHeight = height[i];

        if (curHeight >= curMaxHeight) {
            curMaxHeight = curHeight;
            res += temp;
            temp = 0;
        } else {
            temp += curMaxHeight - curHeight;
        }
    }

    return res;
};

const trap2 = function(height) {
  let l = 0;
  let r = height.length - 1;
  let res = 0;

  let lMax = height[l];
  let rMax = height[r];

  while (l < r) {
    if (lMax <= rMax) {
      l++;
      lMax = Math.max(lMax, height[l]);
      res += lMax - height[l];
    } else {
      r--;
      rMax = Math.max(rMax, height[r]);
      res += rMax - height[r];
    }
  }

  return res;
}