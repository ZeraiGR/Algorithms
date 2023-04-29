// Snail Traversal
// https://leetcode.com/problems/snail-traversal/

// Tags: Frontend (javaScript)

Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return [];

    let res = [];

    let k = 0;
    for (let i = 0; i < colsCount; i++) {
        res.push([]);
        for (let j = 0; j < rowsCount; j++) {
            res[i].push(this[k]);
            k++;
        }
    }

    for (let i = 0; i < res.length; i++) {
      if (i % 2 === 0) res[i].reverse();
    }

    for (const arr of res) {
      arr.reverse();
    }

    let ans = [];

    for (let i = 0; i < res[0].length; i++) {
      ans.push([]);
      for (let j = 0; j < res.length; j++) {
        ans[i].push(res[j][i]);
      }
    }

    return ans;
}

const arr = [1,2,3,4];
arr.snail(1,4); // [[1,2,3,4]]