// Is Object Empty
// https://leetcode.com/problems/is-object-empty/description/

// Tags: Frontend (javaScript)

const isEmpty = function(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else {
        return Object.values(obj).length === 0;
    }
};