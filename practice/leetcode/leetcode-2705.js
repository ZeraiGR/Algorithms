// Compact Object
// https://leetcode.com/problems/compact-object/

// Tags: Frontend (javaScript)

const compactObject = function(obj) {
  if (Array.isArray(obj)) {
    let res = [];

    for (const val of obj) {
      
      if (val !== null && typeof val === 'object') {
        res.push(compactObject(val));
        continue;
      }

      
      if (Boolean(val)) {
        res.push(val);
      }
    }

    return res;
  } else {
    let res = {};

    for (const [key, val] of Object.entries(obj)) {

      if (val !== null && typeof val === 'object') {
        res[key] = compactObject(val);
        continue;
      }

      if (Boolean(val)) {
        res[key] = val;
      }
    }

    return res;
  }
};

console.log(compactObject([null, 0, false, 1]));
console.log(compactObject({"a": null, "b": [false, 1]}));
console.log(compactObject([null, 0, 5, [0], [false, 16]]));