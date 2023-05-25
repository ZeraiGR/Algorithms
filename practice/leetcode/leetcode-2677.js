// Chunk Array

// Tags: Frontend (javaScript)

const chunk = function(arr, size) {
  let res = [],
      cur = [];

  for (const el of arr) {
    if (cur.length < size) {
      cur.push(el);
    } else {
      res.push(cur);
      cur = [el];
    }
  }

  if (cur.length > 0) {
    res.push(cur);
  }

  return res;
};

console.log(chunk([1,2,3,4,5], 1));
console.log(chunk([1,9,6,3,2], 3));
console.log(chunk([8,5,3,2,6], 6));
console.log(chunk([], 1));