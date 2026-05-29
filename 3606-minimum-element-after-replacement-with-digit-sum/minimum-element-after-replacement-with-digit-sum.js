/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    const sums = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        const sum = nums[i].toString().split('').map(Number).reduce((a, b) => a + b);
        sums[i] = sum;
    }
    let result = sums[0];
    for (let i = 1; i < sums.length; i++) {
        if (sums[i] < result) result = sums[i];
    }
    return result;
};