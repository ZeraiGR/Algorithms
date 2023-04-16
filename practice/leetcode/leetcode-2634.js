// Filter Elements from Array
// https://leetcode.com/problems/filter-elements-from-array/description/

// Tags: Frontend (javaScript)

const filter = function(arr, fn) {
    let res = [];

    let i = 0;
    for (let item of arr) {
        if (fn(item, i, arr)) res.push(item);
        i++;
    }

    return res;
};