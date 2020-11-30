/*
Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.
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
var depthSum = function(nestedList) {
    let total = 0;
    for (let i = 0; i < nestedList.length; i++) {
        total += getSum(nestedList[i], 1);
    }
    return total;
    // Time Complexity: O(m + n), m = # of nesting and n = number of integers
    // Space Complexity: O(m), call stack can go as deep as the depth of nesting
};

function getSum(nestedInt, depth) {
    if (nestedInt.isInteger()) {
        return depth * nestedInt.getInteger();
    }
    let sum = 0;
    let list = nestedInt.getList();
    for (let i = 0; i < list.length; i++) {
        sum += getSum(list[i], depth + 1);
    }
    return sum;
}