// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown 
// pivot index k (1 <= k < nums.length) such that the resulting array is 
// [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, 
// return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

#include <vector>

class Solution {
public:
    int search(std::vector<int>& nums, int target) {
        int l = 0, h = nums.size() - 1;
        while (h >= l) {
            int m = (l + h) / 2;
            if (nums[m] == target) return m;
            if (nums[m] >= nums[l]) {
                if (nums[l] <= target && nums[m] >= target) h = m - 1;
                else l = m + 1;
            } else {
                if (nums[m] <= target && nums[h] >= target) l = m + 1;
                else h = m - 1;
            }
        }
        return -1;
    }
};
