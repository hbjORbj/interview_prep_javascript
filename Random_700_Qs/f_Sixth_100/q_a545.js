/*
Combinations

Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.
*/

var combine = function (n, k) {
  let res = [];
  dfsTraversal(1, [], n, k, res);
  return res;
  // T.C: O(k*nCk), k at the front is due to slice() method
  // S.C: O(nCk), for result array; if we use call stack to determine the space complexity,
  // it would be n because height of tree can be at most n
};

const dfsTraversal = (curIdx, curPath, n, k, res) => {
  if (curPath.length === k) {
    res.push(curPath.slice());
    return;
  }
  for (let i = curIdx; i <= n; i++) {
    curPath.push(i);
    // We only care about what elements we have in combination, so
    // we increment our start index
    // (we no longer regard a node that had already been traversed through in combination)
    dfsTraversal(i + 1, curPath, n, k, res);

    curPath.pop();
  }
};
