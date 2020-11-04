/*
Design a stack that supports push, pop, top, and retrieving the maximum element in constant time.
- push(x) -- Push element x onto stack.
- pop() -- Removes the element on top of the stack.
- top() -- Get the top element.
- getMax() -- Retrieve the maximum element in the stack.
*/

var MaxStack = function() {
    this.stack = [];
    this.max = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    let max = this.max.length > 0 ? this.max[this.max.length-1] : -Infinity;
    this.stack.push(x);
    this.max.push(Math.max(x, max));
};

/**
 * @return {void}
 */
MaxStack.prototype.pop = function() {
    this.stack.pop();
    this.max.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MaxStack.prototype.getMax = function() {
    return this.max[this.max.length-1];
};