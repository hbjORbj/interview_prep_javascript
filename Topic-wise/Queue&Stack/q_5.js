/*
Daily Temperatures

Given a list of daily temperatures temperatures, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature.

If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/

/*
First Solution

For each element, we have to find the next greater element.

We will use a stack to implement this. Stack will contain elements waiting to find
their next greater element.

At each element, we check if stack has a smaller element. If so, current element is
the Next Greater Element for that number in stack. 

Hence, we record to result array the distance between current index and popped element's index.

We keep popping from stack until we encounter a number equal to greater than current number.

We will push index of elements into stack instead of elements themselves so that we can fill result array.
*/
var dailyTemperatures = function (temperatures) {
  let res = new Array(temperatures.length).fill(0);
  let stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let popped = stack.pop();
      res[popped] = i - popped;
    }
    stack.push(i);
  }
  return res;
  // T.C: O(N), each element is pushed once and popped once.
  // S.C: O(N)
};

/*
Second Solution

For each element, we want to find the Next Greater Element.

1. Iterate through given array from the back.
2. At each i, keep popping from stack until its last element is greater than current element or empty. If stack is empty, there is no greater element for current element. Else, stack's last element is the next greater element, so we should record the distance between current
index and the index of that element. Hence, we will push indices into stack instead of elements themselves.
3. Repeat this until the start of array and return the result array.
*/
var dailyTemperatures = function (temperatures) {
  if (temperatures === null || temperatures.length === 0) {
    return [];
  }
  let stack = [],
    res = new Array(temperatures.length);
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }
    res[i] = stack.length > 0 ? stack[stack.length - 1] - i : 0;
    stack.push(i);
  }
  return res;
  // T.C: O(N)
  // S.C: O(N)
};
