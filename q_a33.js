/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.
*/
function nextGreaterPermutation(nums) {

}
/*
Test Cases: [1,0,4,3,2] => [1,2,0,3,4]

Idea:
[1,0,4,3,2] => [1,2,4,3,0] => [1,2,0,3,4]
1. I will convert the array into string and consider it as one integer.
2. Loop over every digit from the last index, and when I find a smaller digit, I will compute the difference between the 
original number and the number after switching the two digits, and if the difference is the minimum so far, store this new number in
a variable and also the smaller digit's index, because we will use this as a pivot index later. Reduce the window to the left by 1 and
repeat this search from every digit.
3. After step 2, we have a number that had the smallest difference after switching two digits and its pivot index.
4. We will sort the digits after the pivot index in ascending order. Then we have the next greater number.
5. Return this number in form of array.
*/