// Design Cancellable Function
// https://leetcode.com/problems/design-cancellable-function/

// Tags: Frontend (javaScript)

const cancellable = function(generator) {
  let cancel;
  const cancelPromise = new Promise((_, reject) => {
    cancel = () => reject("Cancelled");
  });

  const promise = (async () => {
    let next = generator.next();

    while (!next.done) {
      try {
        next = generator.next(await Promise.race([cancelPromise, next.value]));
      } catch (err) {
        next = generator.throw(err);
      }
    }

    return next.value;
  })();

  return [cancel, promise];
};

generatorFunction = function*() { 
  yield new Promise(res => setTimeout(res, 200));
  return "Success"; 
}

const [cancel, promise] = cancellable(generatorFunction());
console.log(promise);
setTimeout(cancel, 100);
promise.catch((err) => {
  console.log('rejected with ', err);
}); // logs "Cancelled" at t=50ms