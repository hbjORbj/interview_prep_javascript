/*
3Sum Smaller

Given an array of n integers nums and an integer target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.
*/

var threeSumSmaller = function (nums, target) {
  nums.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let targetTwoSum = target - nums[i];
    total += twoSum(nums, i + 1, nums.length - 1, targetTwoSum);
  }
  return total;
  // T.C: O(N^2)
  // S.C: O(N)
};

const twoSum = (nums, low, high, target) => {
  let count = 0;
  while (low < high) {
    let sum = nums[low] + nums[high];
    if (sum >= target) {
      high--;
    } else {
      // Suppose low: 0, high: 2, target: 4
      // nums[low] + nums[high] is less than target, which means
      // nums[low] + nums[low+1], nums[low] + nums[low+2],
      // .... nums[low] + nums[high] all have a sum less than target
      // Hence, number of possible two sums with nums[low] as the first number
      // of the sum is high - low.
      count += high - low;
      low++;
    }
  }
  return count;
};
