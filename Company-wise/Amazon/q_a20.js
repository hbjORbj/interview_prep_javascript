/*
Maximum Frequency Stack

Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

Implement the FreqStack class:
- FreqStack() constructs an empty frequency stack.
- void push(int val) pushes an integer val onto the top of the stack.
- int pop() removes and returns the most frequent element in the stack.
- If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
*/

var FreqStack = function () {
  this.stackList = [];
  this.freqMap = new Map();
  // T.C: O(1)
  // S.C: O(N)
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  this.freqMap.set(val, this.freqMap.get(val) + 1 || 1);
  let freq = this.freqMap.get(val);
  if (this.stackList[freq]) {
    this.stackList[freq].push(val);
  } else {
    this.stackList[freq] = [val];
  }
  // T.C: O(1)
  // S.C: O(1)
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  let mostFreqStack = this.stackList[this.stackList.length - 1];
  let mostFreq = mostFreqStack.pop();
  this.freqMap.set(mostFreq, this.freqMap.get(mostFreq) - 1);
  if (mostFreqStack.length === 0) {
    this.stackList.pop();
  }
  return mostFreq;
  // T.C: O(1)
  // S.C: O(1)
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
