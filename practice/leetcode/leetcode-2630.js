// Memoize II
// https://leetcode.com/problems/memoize-ii/

// Tags: Frontend (javaScript)

function memoize(fn) {
  const RES = Symbol("result");
  const globalCache = new Map();
  
  return function(...args) {
    let currentCache = globalCache;

    for (const arg of args) {
      if (!currentCache.has(arg)) {
        currentCache.set(arg, new Map());
      }
      currentCache = currentCache.get(arg);
    }

    if (currentCache.has(RES)) return currentCache.get(RES);

    const ans = fn(...args);

    currentCache.set(RES, ans);
    
    return ans;
  }
}

