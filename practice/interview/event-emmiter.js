// Event Emitter

class EventEmitter {
  #subs = new Map();
  // {"click": [fn1, fn2, ...]}

  subscribe(event, cb) {
    if (!this.#subs.has(event)) {
      this.#subs.set(event, [cb]);
    } else {
      this.#subs.get(event).push(cb);
    }

    return {
      unsubscribe: () => {
        let filtered = this.#subs.get(event).filter(el => el !== cb);
        this.#subs.set(event, filtered);
      }
    };
  }

  emit(event, args = []) {
    let res = [];

    if (this.#subs.has(event)) {
      for (const cb of this.#subs.get(event)) {
        res.push(cb(...args));
      }
    }

    return res;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */