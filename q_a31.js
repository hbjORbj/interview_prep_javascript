/*
You are a professional robber planning to rob houses along a street. 

Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is
that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses
were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, 
determine the maximum amount of money you can rob tonight without alerting the police.
*/

function rob(nums) {
    if (!nums.length) return 0;
    let prevMax = 0, curMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp = curMax;
        curMax = Math.max(prevMax+nums[i], curMax);
        prevMax = temp;
    }
    return curMax;
}
/*
Test Cases: [8,3,1,3,5] => 14

Time Complexity: O(n)
Space Complexity: O(1)

Category: Dynamic Programming
*/