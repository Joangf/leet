/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // If the middle element is greater than the rightmost element,
        // the minimum must be in the right half.
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } 
        // Otherwise, the minimum is in the left half (and could be mid itself).
        else {
            right = mid;
        }
    }

    // When left === right, we've converged on the minimum element.
    return nums[left];
};