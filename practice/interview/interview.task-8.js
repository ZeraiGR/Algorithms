// Написать функции debounce и throttle

function debounce(fn, ms) {
  let cooldown = false;
  return function (...args) {
    if (cooldown) return;
    fn.apply(this, args);
    cooldown = true;
    setTimeout(() => cooldown = false, ms);
  }
}

function debounce(fn, ms) {
  let timeout;
  return function (...args) {
    let callFn = () => { fn.apply(this, args) };
    clearTimeout(timeout);
    timeout = setTimeout(callFn, ms);
  }
}

function debounce (fn, ms, immediate) {
  let timer,
      cancel;

  return function(...args) {
    if (timer == null && immediate) {
      timer = setTimeout(() => {
        timer = null;
      }, ms);

      return new Promise((resolve) => resolve(fn.call(this, ...args)));
    }

    if (timer != null) {
      clearTimeout(timer);
      cancel?.(new Error('Cancelled!'));
    }

    return new Promise((resolve, reject) => {
      cancel = reject;

      timer = setTimeout(() => {
        timer = null;
        try {
          resolve(fn.call(this, ...args));
        } catch (error) {
          reject(error);
        }
      }, ms);
    });
  }
}

function throttle (fn, ms) {
  let cooldown = false,
  lastThis = null,
  lastArgs = null;
  return function wrapper(...args) {
    if (cooldown) {
      lastThis = this;
      lastArgs = args;
      return;
    }
    fn.apply(this, args);
    cooldown = true;
    setTimeout(() => {
      cooldown = false;
      if (lastArgs) {
        wrapper.apply(lastThis, lastArgs);
        lastThis = lastArgs = null;
      }
    }, ms);
  }
}

function throttle (fn, ms) {
  let lastScrollCall = 0;
  return function (...args) {
    let now = Date.now();
    if(now > lastScrollCall + ms){
      fn.apply(this, args)
      lastScrollCall = now;
    }
  }
}

function throttle (fn, ms) {
  let timer,
      lastArgs;

  return function (...args) {
    if (timer == null) {
      timer = setTimeout(() => {
        timer = null;

        if (lastArgs != null) {
          try {
            fn.call(...lastArgs);
          } finally {
            lastArgs = null;
          }
        }

      }, ms);

      return fn.call(this, ...args);
    }

    lastArgs = [this, ...args];
  }
}

let fn = () => console.log('ooo');

let throttledFn = throttle(fn, 200);

setTimeout(() => {
  throttledFn();
  throttledFn();
  throttledFn();
  throttledFn();
}, 0);

setTimeout(() => {
  throttledFn();
  throttledFn();
  throttledFn();
  throttledFn();
}, 50);

setTimeout(() => {
  throttledFn();
  throttledFn();
  throttledFn();
  throttledFn();
}, 100);

setTimeout(() => {
  throttledFn();
  throttledFn();
  throttledFn();
  throttledFn();
}, 150);

setTimeout(() => {
  throttledFn();
  throttledFn();
  throttledFn();
  throttledFn();
}, 200);

setTimeout(() => {
  throttledFn();
  throttledFn();
  throttledFn();
  throttledFn();
}, 300);

