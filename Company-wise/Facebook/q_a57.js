/*
Read N Characters Given Read4

Given a file and assume that you can only read the file using a given method read4, implement a method to read n characters.

https://leetcode.com/problems/read-n-characters-given-read4/
*/

/**
 * Definition for read4()
 *
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function (buf, n) {
    let eof = false;
    let ptr = 0;
    while (!eof) {
      const buf4 = [];
      read4(buf4);
      for (let i = 0; i < buf4.length && ptr < n; i++) {
        buf[ptr++] = buf4[i];
      }
      // ptr === n means we've read n characters
      // buf4.length < 4 means we've read every character in file
      if (ptr === n || buf4.length < 4) eof = true;
    }
    return n;
  };
};
