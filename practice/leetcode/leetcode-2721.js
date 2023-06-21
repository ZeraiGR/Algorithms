// Execute Asynchronous Functions in Parallel
// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/

// Tags: Frontend (javaScript)

const promiseAll = async function(functions) {
  if (functions.length === 0) {
    return Promise.resolve([]);
  }

  let promises = functions.map(fn => fn());

  return new Promise((resolve, reject) => {
      const ans = new Array(promises.length);
      let cnt = 0;
      for (let i = 0; i < promises.length; i++) {
          let promise = Promise.resolve(promises[i]);

          promise.then(res => {
              ans[i] = res;
              cnt++;

              if (cnt === promises.length) {
                  resolve(ans);
              }

          }).catch(reject);

      }
  });
};