function logDFS (obj) {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      logDFS(obj[key])
    } else {
      console.log(obj[key]);
    }
  }
}

function logBFS (obj) {
  const queue = [];
  queue.push(obj);

  while (queue.length > 0) {
    const now = queue.shift();

    for (let key in now) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }

      if (typeof now[key] === 'object' && obj[key] !== null) {
        queue.push(now[key]);
      } else {
        console.log(now[key]);
      }
    }
  }
}

function logStack (obj) {
  const stack = [intoIter(obj)];

  while (stack.length > 0) {
    const iter = stack.pop();

    for (let val of iter) {
      if (typeof val === 'object' && val !== null) {
        stack.push(iter);
        stack.push(intoIter(val));
        break;
      } else {
        console.log(val);
      }
    }
  }

  function intoIter(obj) {
    return Object.values(obj).values();
  }
}

logStack({
  a: {
    r: {t: 8},
    i: 1,
  },
  c: {
    d: 2,
    e: {f: 7}
  },
  j: 4
});
