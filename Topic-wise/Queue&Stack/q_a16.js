/*
Max Stack

Design a max stack data structure that supports the stack operations and supports finding the stack's maximum element.

Implement the MaxStack class:

MaxStack() Initializes the stack object.
void push(int x) Pushes element x onto the stack.
int pop() Removes the element on top of the stack and returns it.
int top() Gets the element on the top of the stack without removing it.
int peekMax() Retrieves the maximum element in the stack without removing it.
int popMax() Retrieves the maximum element in the stack and removes it. If there is more than one maximum element, only remove the top-most one.
*/

// T.C: O(1) for init and all methods except popMax(), O(N) for popMax()
// S.C: O(N) as we use one stack (and temp stack in popMax())
var MaxStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
  let max = this.stack.length === 0 ? x : this.stack[this.stack.length - 1].max;
  this.stack.push({ val: x, max: Math.max(max, x) });
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
  return this.stack.pop().val;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  return this.stack[this.stack.length - 1].max;
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
  if (this.stack.length === 0) return null;
  let max = this.stack[this.stack.length - 1].max;
  let tempStack = [];
  while (
    this.stack.length > 0 &&
    this.stack[this.stack.length - 1].val !== max
  ) {
    tempStack.push(this.stack.pop());
  }
  this.stack.pop();
  while (tempStack.length > 0) {
    let item = tempStack.pop();
    let prevMax =
      this.stack.length > 0 ? this.stack[this.stack.length - 1].max : item.val;
    item.max = Math.max(prevMax, item.val);
    this.stack.push(item);
  }
  return max;
};
