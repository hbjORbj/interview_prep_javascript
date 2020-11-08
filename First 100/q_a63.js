/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

Qs to ask:
1. What to do if pop, top and getMin operations are called on empty stacks?
- They will be called on non-empty stacks.
*/

var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.min.length == 0) this.min.push(x);
    else this.min.push(Math.min(x, this.getMin()));
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1];
};

/*
Time Complexity: O(1)
Space Complexity: O(n)
*/