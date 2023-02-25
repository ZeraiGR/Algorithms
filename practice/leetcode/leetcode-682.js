// Baseball Game
// https://leetcode.com/problems/baseball-game/description/

// Tags: Array, Stack, Simulation

const calPoints = function(operations) {
    let res = [];
    for (let i = 0; i < operations.length; i++) {
        let cur = operations[i];
        if (cur === 'C') {
            res.pop();
        } else if (cur === 'D') {
            res.push(+res[res.length - 1] * 2);
        } else if (cur === '+') {
            res.push(+res[res.length - 1] + +res[res.length - 2]);
        } else {
            res.push(+cur);
        }
    }

    return res.reduce((acc, el) => acc + el, 0);
};