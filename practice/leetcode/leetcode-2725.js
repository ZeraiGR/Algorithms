// Interval Cancellation
// https://leetcode.com/problems/interval-cancellation/

// Tags: Frontend (javaScript)

const cancellable = function(fn, args, t) {
    fn.call(this, ...args);
    
    let id = setTimeout(function tick () {
      fn.call(this, ...args);
      id = setTimeout(tick, t);
    }, t);

    const cancelFn = () => {
        clearTimeout(id);
    }

    return cancelFn;
};


