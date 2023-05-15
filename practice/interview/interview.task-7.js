// Написать функцию, которая принимает DOM-элемент и название события и возвращает асинхронный итератор.

const { EventEmitter} = require('events');

const emmiter = new EventEmitter();

function on (elem, event) {
  let cb;
  const buffer = [];

  elem.addListener(event, (e) => {
    if (cb != null) {
      cb(e);
      cb = null;
    } else {
      buffer.push(e);
    }
  });

  return {
    [Symbol.asyncIterator]() {
      let promise;

      return {
        [Symbol.asyncIterator]() {
          return this;
        },
        next() {
          if (promise != null) {
            return promise;
          }

          if (buffer.length > 0) {
            return Promise.resolve({value: buffer.shift(), done: false});
          }

          promise = new Promise((resolve) => {
            cb = (e) => {
              promise = null;
              resolve({value: e, done: false});
            };
          });

          return promise;
        }
      }
    },
  }
}

(async () => {
  for await (const e of on(emmiter, 'click')) {
    console.log(e);
  }
})();

emmiter.emit('click', 'boom!!');
emmiter.emit('click', 'house!');
emmiter.emit('click', 'lol!');

