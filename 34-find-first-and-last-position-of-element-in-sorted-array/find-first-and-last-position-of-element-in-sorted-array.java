class Solution {
    public int[] searchRange(int[] nums, int target) {
        if(nums.length == 0) return new int[] {-1, -1};
        return new int[] {binSearch(nums, target, true), binSearch(nums, target, false)};
    }
    public int binSearch(int[] nums, int target, boolean isStart) {
        int left = 0;
        int right = nums.length - 1;
        int bound = -1;
        while(left <= right) {
            int mid = (left + right) / 2;
            if(nums[mid] == target) {
                bound = mid;
                if (isStart) {
                    right = mid - 1;
                }
                else left = mid + 1;
            }
            else if(target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        }
        return bound;
    }
}