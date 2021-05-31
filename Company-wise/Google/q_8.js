/*
Nested List Weight Sum II

You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists.

The depth of an integer is the number of lists that it is inside of. For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth. Let maxDepth be the maximum depth of any integer.

The weight of an integer is maxDepth - (the depth of the integer) + 1.

Return the sum of each integer in nestedList multiplied by its weight.
*/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function (nestedList) {
  let maxDepth = getMaxDepth(nestedList);
  return listSum(nestedList, maxDepth);
  // T.C: O(N), N = # of all items
  // S.C: O(maxDepth)
};

function listSum(list, maxDepth, depth = 1) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].isInteger()) {
      sum += list[i].getInteger() * (maxDepth - depth + 1);
    } else {
      sum += listSum(list[i].getList(), maxDepth, depth + 1);
    }
  }
  return sum;
}

function getMaxDepth(list, depth = 1) {
  let maxDepth = depth;
  for (let i = 0; i < list.length; i++) {
    if (!list[i].isInteger()) {
      maxDepth = Math.max(maxDepth, getMaxDepth(list[i].getList(), depth + 1));
    }
  }
  return maxDepth;
}
