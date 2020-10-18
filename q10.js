/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

function twoSum(nums, target) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (m.has(complement)) return [i, m.get(complement)];
        else m.set(nums[i], i);
    }
    return [];
}

/*
Test Cases: ([2,4,6,3,1], 8) => [0, 2]

Idea:
Initialise a Map and loop over the array and check if current number's complement (target - current number) 
exists in the map. If it exists, return the complement's index and current index as an array. Else, set current number to the map
with its index as the value.

Time Complexity: O(n)
Space Complexity: O(n)
*/