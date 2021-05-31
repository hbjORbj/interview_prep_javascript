/*
Design Phone Directory

Design a phone directory that initially has maxNumbers empty slots that can store numbers. 

The directory should store numbers, check if a certain slot is empty or not, and empty a given slot.

Implement the PhoneDirectory class:

PhoneDirectory(int maxNumbers) Initializes the phone directory with the number of available slots maxNumbers.
int get() Provides a number that is not assigned to anyone. Returns -1 if no number is available.
bool check(int number) Returns true if the slot number is available and false otherwise.
void release(int number) Recycles or releases the slot number.
*/

/**
 * Initialize your data structure here
   @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
  this.dir = new Array(maxNumbers).fill(false);
  this.avail = [];
  for (let i = 0; i < maxNumbers; i++) {
    this.avail.push(i);
  }
  // T.C: O(N) for init, O(1) for methods
  // S.C: O(N) for init, O(1) for methods
};

/**
 * Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function () {
  if (this.avail.length === 0) {
    return -1;
  }
  let idx = this.avail.pop();
  this.dir[idx] = true;
  return idx;
};

/**
 * Check if a number is available or not.
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
  return number >= 0 && number < this.dir.length && this.dir[number] === false;
};

/**
 * Recycle or release a number.
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
  if (number >= 0 && number < this.dir.length && this.dir[number] === true) {
    this.dir[number] = false;
    this.avail.push(number);
  }
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
