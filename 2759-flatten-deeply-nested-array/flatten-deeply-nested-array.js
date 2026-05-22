/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    // Base cases: stop if n is 0 or if there are no nested arrays left to flatten
    if (n <= 0 || !arr.some(Array.isArray)) return arr;
    
    let result = [];
    for (const item of arr) {
        if (!Array.isArray(item)) {
            result.push(item); // Using push is faster than concat in a loop
        } else {
            // Flatten this item by 1 level, and pass down n - 1
            result.push(...flat(item, n - 1));
        }
    }
    return result;
};