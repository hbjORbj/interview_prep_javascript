/*
Permutations II

Given a collection of numbers, nums, that might contain duplicates,

return all possible unique permutations in any order.
*/

var permuteUnique = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }
  let res = [];
  dfsTraversal(new Set(nums), [], res, map, nums.length);
  return res;
  // T.C: O(N!)
  // S.C: O(N)
};

const dfsTraversal = (nums, curPath, res, map, targetLen) => {
  if (curPath.length === targetLen) {
    res.push(curPath.slice());
    return;
  }
  for (let num of nums) {
    if (map.get(num) > 0) {
      curPath.push(num);
      map.set(num, map.get(num) - 1);

      dfsTraversal(nums, curPath, res, map, targetLen);

      curPath.pop();
      map.set(num, map.get(num) + 1);
    }
  }
};
