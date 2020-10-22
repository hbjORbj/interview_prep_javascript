/*
Given an array of integers A, find the sum of each sliding window of size K.
Variation:​ Instead of an array, what if you were presented with a ​stream​ of numbers. 
A new number can be added anytime. You want to find the sum of the last K elements.
Note​: The above problem can be solved without a Queue as well - just maintain a sum with 2 pointers. 
However, a queue is needed for the Variation problem. We use this problem to illustrate the sliding window concept.

Qs to ask:
1. How do you want the output?
- As an array.
2. Is K provided as input?
- Yes.
3. Can the input array contain negative integers?
- Yes.
4. If K is greater than the input array's length, should I return an empty array?
- Yes.
5. If the input array is empty, should I return an empty array?
*/

function slidingWindow(nums, K) {
    let start = 0, end = 0;
    let sum = 0, sumArr = [];
    while (end < nums.length) {
        sum += nums[end++];
        if (end-start == K) {
            sumArr.push(sum);
            sum -= nums[start++];
        }
    }
    return sumArr;
}

/*
Test Cases:
([1,-1,3,5], 2) => [0, 2, 8]
([], 2) => []
([1], 1) => [1]

Time Complexity: O(n)
Space Complexity: O(1)
*/