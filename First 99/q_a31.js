/*
You are a professional robber planning to rob houses along a street. 

Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is
that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses
were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, 
determine the maximum amount of money you can rob tonight without alerting the police.

Q:
1. If the input array is empty, should I return 0?
- Yes.
2. Can the input array contain negative numbers?
- No.
*/

function rob(nums) {
    let prevMax = 0, curMax = 0;
    for (let i = 0; i < nums.length; i++) {
        let temp = curMax;
        curMax = Math.max(prevMax+nums[i], curMax);
        prevMax = temp;
    }
    return curMax;
}

/*
Test Cases: 
[8,3,1,3,5] => 14
[] => 0
[8,3] => 8
[8] => 8

Idea:
While looping over the houses, we keep track of the maximum money we could rob, before (or except) the previous house.

The reason we do not include the previous house in this tracking variable is because 
if we want to rob the current house, we should exclude the money we robbed in the previous house.
So, we compare the sum of the maximum money before the previous house and money in the current house with
the maximum money we could rob so far.

We do this comparison until the end of the houses.

There has not been any house yet so we initialise prevMax to zero and curMax to zero.
As explained above, prevMax represents the maximum money robbed before the previous house, and
curMax represents the maximum money we could rob so far.

Time Complexity: O(n)
Space Complexity: O(1)

Category: Dynamic Programming
*/