/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    return (max - min) * k;
};