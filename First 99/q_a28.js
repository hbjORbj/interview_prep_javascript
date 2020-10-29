/*
Given an unsorted integer array nums, find the smallest missing positive integer.

Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space?

Questions to ask:
1. Could the input array contain duplicates?
2. Could the input array contain negative integers or zero?

I will assume YES to both questions above.
*/
function firstMissingPositive(nums) {
    let i = 1;
    while (true) {
        if (!nums.includes(i)) return i;
        i++;
    }
}
/*
Test Cases: [-1, 9,-3,6,1,5] => 2

Idea:
Naive approach is to loop over every positive integer from 1 until finding one that does not exist in the array.
*/