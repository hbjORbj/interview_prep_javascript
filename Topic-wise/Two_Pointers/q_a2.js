/*
3Sum Closest

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers. You may assume that each input would have exactly one solution.
*/

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let targetTwoSum = target - nums[i];
    closestSum = closerNumber(
      closestSum,
      nums[i] + twoSum(nums, i + 1, nums.length - 1, targetTwoSum),
      target
    );
  }
  return closestSum;
  // T.C: O(N^2)
  // S.C: O(N)
};

const twoSum = (nums, low, high, target) => {
  let closest = Infinity;
  while (low < high) {
    let sum = nums[low] + nums[high];
    closest = closerNumber(closest, sum, target);
    if (sum > target) {
      high--;
    } else if (sum < target) {
      low++;
    } else {
      return target;
    }
  }
  return closest;
};

const closerNumber = (num1, num2, target) => {
  let diff1 = Math.abs(num1 - target);
  let diff2 = Math.abs(num2 - target);
  if (diff1 < diff2) {
    return num1;
  } else {
    return num2;
  }
};
