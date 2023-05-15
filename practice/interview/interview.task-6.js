// Промифицировать функцию открытия файла.

function openFile(file, cb) {
  fs.readFile(file, cb);
}

const openFilePromise = promisify(openFile);

openFilePromise('foo.txt').then(
  console.log,
  console.error
);

function promisify (fn) {
  const argsCnt = fn.length;

  return function (...args) {
    return new Promise((resolve, reject) => {
      if (argsCnt.length !== argsCnt - 1) 
        return Promise.reject('agrs error!');

      const callback = (err, res) => err ? reject(err) : resolve(res);
      
      fn.call(this, ...args, callback);
    });
  };
}