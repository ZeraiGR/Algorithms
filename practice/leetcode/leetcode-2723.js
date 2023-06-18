// Add Two Promises
// https://leetcode.com/problems/add-two-promises/

// Tags: Frontend (javaScript)

const addTwoPromises = async function(promise1, promise2) {
  const [r1, r2] = await Promise.all([promise1, promise2]);
  return r1 + r2;
};