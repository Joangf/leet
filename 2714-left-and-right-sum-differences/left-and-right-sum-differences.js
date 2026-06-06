/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    const leftArr = new Array(nums.length);
    leftArr[0] = 0;
    const rightArr = new Array(nums.length);
    rightArr[nums.length - 1] = 0;
    for (let i = 1; i < nums.length; i++) {
        leftArr[i] = leftArr[i - 1] + nums[i - 1];
        rightArr[nums.length - 1 - i] = rightArr[nums.length - i] + nums[nums.length - i];
    }
    return leftArr.map((num, i) => Math.abs(num - rightArr[i]));
};