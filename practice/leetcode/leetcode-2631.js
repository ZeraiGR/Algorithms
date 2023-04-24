// Group By
// https://leetcode.com/problems/group-by/

// Tags: Frontend (javaScript)

Array.prototype.groupBy = function(fn) {
  const res = {};

  for (const elem of this) {
    if(Array.isArray(res[fn(elem)])) {
      res[fn(elem)].push(elem);
    } else {
      res[fn(elem)] = [fn(elem)];
    }
  }

  return res;
};