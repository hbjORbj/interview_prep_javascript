/*
Implement a first in first out (FIFO) queue using only two stacks. 

The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
*/

var MyQueue = function() {
    this.stack = [];
    this.temp = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while (this.stack.length > 0) {
        this.temp.push(this.stack.pop());
    }
    this.temp.push(x);
    while (this.temp.length > 0) {
        this.stack.push(this.temp.pop());
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.pop();
};
/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[this.stack.length-1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0;    
};