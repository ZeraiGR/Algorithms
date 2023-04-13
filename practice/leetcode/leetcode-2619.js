// Array Prototype Last
// https://leetcode.com/problems/array-prototype-last/description/

// Tags: Frontend (javaScript)

Array.prototype.last = function() {
    return this[this.length - 1] ?? -1;
};