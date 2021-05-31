/*
Nested List Weight Sum

You are given a nested list of integers nestedList.

Each element is either an integer or a list whose elements may also be integers or other lists.

The depth of an integer is the number of lists that it is inside of.

For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.

Return the sum of each integer in nestedList multiplied by its depth.
*/

var depthSum = function (nestedList) {
  return listSum(nestedList);
  // T.C: O(N), N = # of all elements
  // S.C: O(maxDepth)
};

function listSum(list, depth = 1) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].isInteger()) {
      sum += depth * list[i].getInteger();
    } else {
      sum += listSum(list[i].getList(), depth + 1);
    }
  }
  return sum;
}
