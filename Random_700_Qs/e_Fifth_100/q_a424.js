/*
Combinations

Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.
*/

var combine = function (n, k) {
  let res = [];
  dfsTraversal(1, [], n, k, res);
  return res;
};

const dfsTraversal = (start, curPath, n, k, res) => {
  if (curPath.length === k) {
    res.push(curPath.slice());
    return;
  }
  for (let i = start; i <= n; i++) {
    // i doesn't start from zero because if we don't regard an element already visited again in combinations;
    // in contrast to permutations, we consider the same set of elements with different ordering the same in combinations
    curPath.push(i);

    dfsTraversal(i + 1, curPath, n, k, res);

    curPath.pop();
  }
};
// T.C: O(C(n,k))
// S.C: O(C(n,k))
