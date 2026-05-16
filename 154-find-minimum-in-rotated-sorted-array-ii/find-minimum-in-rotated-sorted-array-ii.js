/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    const sortedArr = nums.toSorted((a, b) => a - b);
    return sortedArr[0];
};