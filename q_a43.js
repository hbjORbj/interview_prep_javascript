/*
Implement a first in first out (FIFO) queue using only two stacks. 

The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Questions to ask:
1. If calls to pop() and peek() are called for an empty array, should I return an error or null?
- Return an error.
*/

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = [];
    this.tempStack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (!this.stack.length) throw new Error("Queue is empty.");
    while (this.stack.length) {
        this.tempStack.push(this.stack.pop());
    }
    let elemToPop = this.tempStack.pop();
    while (this.tempStack.length) {
        this.stack.push(this.tempStack.pop());
    }
    return elemToPop;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (!this.stack.length) throw new Error("Queue is empty.");
    while (this.stack.length) {
        this.tempStack.push(this.stack.pop());
    }
    let elemToPeek = this.tempStack[this.tempStack.length-1];
    while (this.tempStack.length) {
        this.stack.push(this.tempStack.pop());
    }
    return elemToPeek;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length == 0;
};

// Time Complexity: O(n)
// Space Complexity: O(n)