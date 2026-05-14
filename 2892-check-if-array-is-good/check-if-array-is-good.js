/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    nums.sort((x,y)=>y-x);
    const max = nums[0];
    let current = {value: nums[0], occurence:0};
    if(nums.length < max + 1) return false;
    for(const num of nums) {
        if (num == max && current.occurence < 2) {
            current.occurence++;
        }
        else if (num == current.value - 1) {
            current.value = num;
        }
        else return false;
    }
    return true;
};