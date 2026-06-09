/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    const sortedNums = nums.toSorted((a, b) => a - b);
    return (sortedNums[nums.length - 1] - sortedNums[0]) * k;
};