/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let result = [];
    for(let num of nums) {
        const temp = num.toString().split('');
        result = result.concat(temp);
    }
    return result.map(Number);
};