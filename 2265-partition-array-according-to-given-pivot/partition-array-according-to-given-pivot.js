/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const left = nums.filter((num) => num < pivot);
    const mid = nums.filter((num) => num == pivot);
    const right = nums.filter((num) => num > pivot);
    return left.concat(mid).concat(right);
};