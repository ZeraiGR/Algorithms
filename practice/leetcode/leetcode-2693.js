// Call Function with Custom Context

// Tags: Frontend (javaScript)

Function.prototype.callPolyfill = function(context, ...args) {
  const executor = this.bind(context, ...args);
  return executor();
}

function increment() { this.count++; return this.count; }
console.log(increment.callPolyfill({count: 1})); // 2