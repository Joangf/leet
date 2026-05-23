class Solution {
    public boolean check(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            int current = nums[i];
            boolean sorted = true;
            for (int j = i + 1; j % nums.length != i; j++) {
                if (nums[j % nums.length] >= current) {
                    current = nums[j % nums.length];
                } else {
                    sorted = false;
                    break;
                }
            }
            if (sorted)
                return true;
        }
        return false;
    }
}