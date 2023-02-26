// Maximum Nesting Depth of the Parentheses
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/

// Tags: String, Stack

const maxDepth = function(s) {
    let cnt = 0;
    let res = 0;
    s.split('').forEach(l => {
        if (l === '(') {
            cnt += 1;
        } else if (l === ')') {
            cnt -= 1;
        }
        res = Math.max(res, cnt);
    });

    return res;
};