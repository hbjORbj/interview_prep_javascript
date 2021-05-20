/*
3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/*
First Solution (TLE)

Use DFS to enumerate all possible combinations of size 3.
If the elements in the combination add up to zero, push it to result array.
*/
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let set = new Set();
  dfs(nums, 0, [], set);
  let res = [];
  for (let triplet of set) {
    res.push(triplet.split("$"));
  }
  return res;
  // T.C: O(3 * nC3)
  // S.C: O(nC3)
};

const dfs = (nums, start, curPath, set) => {
  if (curPath.length === 3) {
    if (curPath[0] + curPath[1] + curPath[2] === 0) {
      set.add(curPath.join("$"));
    }
    return;
  }
  for (let i = start; i < nums.length; i++) {
    curPath.push(nums[i]);

    dfs(nums, i + 1, curPath, set);

    curPath.pop();
  }
};

// Second Solution
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    // if nums[i] > 0, nums[i] + some two numbers in nums[i+1...end] can never equal 0
    if (nums[i] > 0) {
      break;
    }
    if (i === 0 || nums[i] !== nums[i - 1]) {
      twoSum(nums, i + 1, nums.length - 1, -nums[i], res);
    }
  }
  return res;
  // T.C: O(N^2)
  // S.C: O(N)
};

const twoSum = (nums, low, high, target, res) => {
  while (low < high) {
    let sum = nums[low] + nums[high];
    if (sum < target) {
      low++;
    } else if (sum > target) {
      high--;
    } else {
      res.push([-target, nums[low], nums[high]]);
      low++, high--;
      // to avoid duplicate two sum
      while (low < high && nums[low] === nums[low - 1]) {
        low++;
      }
    }
  }
};
