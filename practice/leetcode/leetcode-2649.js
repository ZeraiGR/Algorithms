// Nested Array Generator
// https://leetcode.com/problems/nested-array-generator/

// Tags: Frontend (javaScript)

const inorderTraversal = function*(arr) {
  yield * arr.flat(Infinity);
};

const inorderTraversal2 = function*(arr) {
  for (const el of arr) {
    if (Array.isArray(el)) {
      yield* inorderTraversal2(el);
    } else {
      yield el;
    }
  }
};

