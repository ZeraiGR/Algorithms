// Check if Object Instance of Class
// https://leetcode.com/problems/check-if-object-instance-of-class/description/

// Tags: Frontend (javaScript)

// Brute force dirty solution
const checkIfInstanceOf = function(obj, classFunction) {
    if (!classFunction || !classFunction?.prototype) return false;
    if (typeof obj === 'object' || typeof obj === 'function') {
    return obj instanceof classFunction;
    } else {
        return {}.toString.call(obj).slice(8, -1) === classFunction.name || classFunction.name === 'Object' && obj !== null && obj !== undefined;
    }
};

// Clean best practice solution
const checkIfInstanceOf2 = function (obj, classFunction) {
  while (obj != null) {
    if (obj.constructor === classFunction) return true;
    obj = Object.getPrototypeOf(obj);
  }
  return false;
}