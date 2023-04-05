// Maximum Enemy Forts That Can Be Captured
// https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/

// Tags: Array, Two pointers

const captureForts = function(forts) {
    let res = 0, k = 0, j = forts.length - 1;
    let kmax = null, jmax = null;

    for (let i = 0; i < forts.length; i++) {
        if (forts[j] === 1) {
            jmax = 0;
        } else if (forts[j] === 0 && jmax !== null) {
            jmax += 1;
        } else if (forts[j] === -1) {
            
            res = Math.max(jmax, res);
            jmax = null;
        }

        if (forts[k] === 1) {
            kmax = 0;
        } else if (forts[k] === 0 && kmax !== null) {
            kmax += 1;
        } else if (forts[k] === -1) {
            res = Math.max(kmax, res);
            kmax = null;
        }

        j -= 1;
        k += 1;
    }

    return res;
};

console.log(captureForts([-1,0,1,0,0,0]));