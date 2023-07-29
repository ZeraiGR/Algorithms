// Minimum Index Sum of Two Lists
// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

// Tags: Array, Hash Table, String

const findRestaurant = function(list1, list2) {
  let cnt = {};

  for (let i = 0; i < list1.length; i++) {

    for (let j = 0; j < list2.length; j++) {

      if (list1[i] === list2[j]) {
        cnt[list1[i]] = i + j;
      }

    }

  }

  cnt = Object.entries(cnt).sort((a,b) => a[1] - b[1]);
  let min = cnt[0][1];

  return cnt.filter(([_, n]) => n === min).map(([str]) => str);
};

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]));
console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"]));
console.log(findRestaurant(["happy","sad","good"], ["sad","happy","good"]));

const findRestaurant2 = function(list1, list2) {
  let res = [];
  let map = new Map();

  let min = Infinity;

  list2.forEach((str, i) => map.set(str, i));

  for (let i = 0; i < list1.length; i++) {
    if (map.has(list1[i])) {
      let sum = i + map.get(list1[i]);  
    
      if (sum === min) {
        res.push(list1[i]);
      } else if (sum < min) {
        min = i + map.get(list1[i]);
        res = [list1[i]];
      }

    }
  }

  return res;
};