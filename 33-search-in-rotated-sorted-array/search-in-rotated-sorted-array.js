/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    function findRotatedPoint() {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
        return left;
    }
    const rotatedPosition = findRotatedPoint();
    function binSearch(nums) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
    const firstHalf = binSearch(nums.slice(0, rotatedPosition));
    const secondHalf = binSearch(nums.slice(rotatedPosition, nums.length));
    if (firstHalf != -1) return firstHalf;
    if (secondHalf != -1) return secondHalf + rotatedPosition;
    return -1;


};