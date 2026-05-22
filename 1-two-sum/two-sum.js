/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    nums.forEach((item, index) => map.set(item, index));
    for (let i=0 ;i<nums.length;i++) {
        const result = [i];
        const key = target-nums[i];
        if(map.has(key) && map.get(key) != i) {
            return result.concat(map.get(key));
        }
    }
    return -1;
};