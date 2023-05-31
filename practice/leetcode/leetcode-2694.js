// Event Emitter
// https://leetcode.com/problems/event-emitter/

// Tags: Frontend (javaScript)

class EventEmitter {
  #subs = new Map();
  // {"click": [fn1, fn2, ...]}

  subscribe(event, cb) {
    if (this.#subs.has(event)) {
        this.#subs.get(event).push(cb);
    } else {
        this.#subs.set(event, [cb]);
    }
    
    return {
        unsubscribe: () => {
            this.#subs.set(event, this.#subs.get(event).filter((fn) => fn !== cb));
        }
    };
  }

  emit(event, args = []) {
    return this.#subs.get(event)?.map((cb) => {
        return cb(...args);
    }) ?? [];
  }
}

// const emitter = new EventEmitter();
// Subscribe to the onClick event with onClickCallback
// function onClickCallback() { return 99 }
// const sub = emitter.subscribe('onClick', onClickCallback);

// console.log(emitter.emit('onClick')); 
// [99]
// console.log(sub.unsubscribe()); 
// undefined
// console.log(emitter.emit('onClick')); 
// []

const emitter = new EventEmitter();
console.log(emitter.emit("firstEvent")); // [], no callback are subscribed yet
emitter.subscribe("firstEvent", function cb1() { return 5; });
emitter.subscribe("firstEvent", function cb2() { return 6; });
console.log(emitter.emit("firstEvent")); // [5, 6], returns the output of cb1 and cb2