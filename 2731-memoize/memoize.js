/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const memo = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        let value = memo.get(key);
        if (value != undefined) return value;
        value = fn(...args);
        memo.set(key, value);
        return value;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */