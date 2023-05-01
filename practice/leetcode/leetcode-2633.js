// Convert Object to JSON String
// https://leetcode.com/problems/convert-object-to-json-string/

// Tags: Frontend (javaScript)

const jsonStringify = function(object) {
  if (object === null) return 'null';

  if (typeof object === 'string') return `"${object}"`;

  if (typeof object === 'boolean' || typeof object === 'number') {
    return object;
  }

  if (Array.isArray(object)) {
    let res = object.map(el => jsonStringify(el)).join(',');
    return '[' + res + ']';
  }

  if (typeof object === 'object') {
    let keys = Object.keys(object);
    let res = keys.map(key => `"${key}"` + ":" + jsonStringify(object[key])).join(',');
    return '{' + res + '}';
  }
};

console.log(jsonStringify({"y":1,"x":2}));
console.log(jsonStringify({"a":"str","b":-12,"c":true,"d":null}));
console.log(jsonStringify({"key":{"a":1,"b":[{},null,"Hello"]}}));