// To Be Or Not To Be
// https://leetcode.com/problems/to-be-or-not-to-be/

// Tags: Frontend (javaScript)

const expect = function(val) {
  return {
        toBe: (test) => {
            if (test !== val)
                throw new Error("Not Equal");

            return true;
        },
        notToBe: (test) => {
            if (test === val)
                throw new Error("Equal");

            return true;
        }
    }
};