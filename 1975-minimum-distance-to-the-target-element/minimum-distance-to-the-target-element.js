/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    const result = [];
    for(let i=0;i<nums.length;i++) {
        if (nums[i]==target) {
            result.push(Math.abs(i-start));
        }
    }
    return result.toSorted((a,b) => a-b)[0];
};