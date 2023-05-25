// Array of Objects to Matrix
// https://leetcode.com/problems/array-of-objects-to-matrix/

// Tags: Frontend (javaScript) 

const jsonToMatrix = function(arr) {
  const isObject = o => (typeof o === 'object' && o !== null);

  function getKeys (object) {
    if (!isObject(object)) return [''];
    let ans = [];

    for (const key of Object.keys(object)) {
      const childkeys = getKeys(object[key]);
      for (const childkey of childkeys) {
        ans.push(childkey ? `${key}.${childkey}` : key);
      }
    }
    
    return ans;
  }

  const keysSet = arr.reduce((acc, curr) => {
    getKeys(curr).forEach((k) => acc.add(k));
    return acc;
  }, new Set());

  const keys = Array.from(keysSet).sort();

  const getValue = (obj, path) => {
    const paths = path.split('.');
    let i = 0;
    let value = obj;
    while (i < paths.length) {
      if (!isObject(value)) break;
      value = value[paths[i++]];
    }
    if (i < paths.length || isObject(value) || value === undefined) return '';
    return value;
  }

  const matrix = [keys];
  arr.forEach(obj => {
    matrix.push(keys.map(key => getValue(obj, key)));
  });

  return matrix;
};

console.log(jsonToMatrix([
  {"b": 1, "a": 2},
  {"b": 3, "a": 4}
]));

console.log(jsonToMatrix([
  {"a": 1, "b": 2},
  {"c": 3, "d": 4},
  {}
]));

console.log(jsonToMatrix([
  {"a": {"b": 1, "c": 2}},
  {"a": {"b": 3, "d": 4}}
]));

console.log(jsonToMatrix([
  [{"a": null}],
  [{"b": true}],
  [{"c": "x"}]
]));

console.log(jsonToMatrix([
  {},
  {},
  {},
]));

console.log(jsonToMatrix([{"0":1},[1]]));

console.log(jsonToMatrix([[[[1]]],[[2]],[3]]));