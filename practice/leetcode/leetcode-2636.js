// Promise Pool
// https://leetcode.com/problems/promise-pool/

// Tags: Frontend (javaScript)

const promisePool = async function(functions, n) {
  const iterator = functions[Symbol.iterator]();

  async function worker() {
    for (const fn of iterator) {
      await fn();
    }
  } 

  const workers = [];

  while (n-- > 0) {
    workers.push(worker());
  }

  return Promise.all(workers);
};

const sleep = (t) => new Promise(res => setTimeout(res, t));
promisePool([() => sleep(500), () => sleep(400)], 1)
.then(console.log) // After 900ms