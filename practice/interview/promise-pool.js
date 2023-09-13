// Promise Pool

/*

Given an array of asynchronous functions functions and a pool limit n, return an asynchronous function promisePool. It should return a promise that resolves when all the input functions resolve.

The Pool limit is defined as the maximum number of promises that can be pending at once. promisePool should begin execution of as many functions as possible and continue executing new functions when old promises resolve. promisePool should execute functions[i] then functions[i + 1] then functions[i+2], etc. When the last promise resolves, promisePool should also resolve.

For example, if n = 1, promisePool will execute one function at a time in a series. However, if n = 2, it first executes two functions. When either of the two functions resolves, a 3rd function should be executed (if available), and so on until there are no functions left to execute.
You can assume all functions never reject. It is acceptable for promisePool to return a promise that resolves any value.

*/

/** 
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
*/

const promisePool = async function (functions, n) {
  if (functions.length === 0) {
    return Promise.resolve([[], 0]);
  }

  let results = []; // store the results of each function
  let currentIndex = 0; // keep track of the current index
  let activePromises = 0; // keep track of the number of active promises

  return new Promise((resolve, reject) => {
    const executeNext = async () => {
      if (currentIndex < functions.length) {
        activePromises++;
        let currentFunction = functions[currentIndex++];

        try {
          let result = await currentFunction();
          results.push(result);
          activePromises--;
        } catch (error) {
          reject(error);
        }

        if (activePromises < n) {
          executeNext();
        }

      }

      if (activePromises === 0) {
        resolve([results, Math.max(...results)]);
      }

    }

    for (let i = 0; i < Math.min(n, functions.length); i++) {
      executeNext();
    }

  });
}

const promisePool2 = async function (functions, n) {
  return new Promise ((resolve, reject) => {
    let i = 0;
    let inProgress = 0;
    let res = [];

    function callback (){
      if (i === functions.length && inProgress === 0) {
        resolve(res);
      }

      while (i < functions.length && inProgress < n) {
        functions[i++]()
          .then((ans) => {
            res.push(ans);
            inProgress--;
            callback();
          })
          .catch(reject);
        inProgress++;
      }

    }

    callback();
  });
}

const promisePool3 = async function (urls, n) {
  const cache = new Map();

  return new Promise ((resolve, reject) => {
    let i = 0;
    let inProgress = 0;
    let res = [];

    function callback (){
      if (i === urls.length && inProgress === 0) {
        resolve(res);
      }

      while (i < functions.length && inProgress < n) {
        if (cache.has(urls[i])) {
          i++;
          res.push(cache.get(urls[i]));
          if (i === urls.length && inProgress === 0) resolve(res);
        } else {
          fetch(urls[i])()
            .then((ans) => {
              cache.set(urls[i], ans);
              res.push(ans);
              inProgress--;
              callback();
            })
            .catch(reject);
          inProgress++;
        }
      }
    }

    callback();
  });
}