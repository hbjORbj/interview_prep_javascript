/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.
*/
function nextGreaterPermutation(nums) {
    let pivotIdx = -1;
    for (let i = nums.length-1; i >= 0; i--) {
        if (nums[i] > nums[i-1]) {
            pivotIdx = i-1;
            break;
        }
    }
    if (pivotIdx == -1) {
        nums.reverse();
        return;
    }
    for (let j = nums.length-1; j >= pivotIdx; j--) {
        if (nums[pivotIdx] < nums[j]) {
            [nums[pivotIdx], nums[j]] = [nums[j], nums[pivotIdx]];
            break;
        }
    }
    let rSubarray = nums.slice(pivotIdx+1).reverse();
    for (let i = pivotIdx+1; i < nums.length; i++) nums[i] = rSubarray[i-pivotIdx-1];
}
/*
Test Cases: [1,0,4,3,2] => [1,2,0,3,4]

Idea:
[1,0,4,3,2] => [1,2,4,3,0] => [1,2,0,3,4]

1. We loop over every digit from the last index and try to find two consecutive digits where nums[i-1] < nums[i]. 
2. If such digits do not exist, the array is in descending order and therefore we reverse the whole array. Else, we should find a digit just greater than the digit at nums[i-1]. To do this, we loop over the array again from the last index and find a digit greater than our digit at pivot index, swap the two digits, and we reverse the subarray after our pivot index. 
3. Now, replace the elements after the pivot index with this sorted subarray. (This must be sorted in ascending order because in step 1 when we tried to find the pivot index, we moved while nums[i-1] >= nums[i]).

Time Complexity: O(n)
Space Complexity: O(1)
*/