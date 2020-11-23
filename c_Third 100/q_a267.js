/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);
*/

var convert = function(s, numRows) {
    // We go down row by row and come back up row by row 
    // We repeat this process until we have visited all letters
    let matrix = new Array(numRows).fill("");
    let idx = 0;
    while (idx < s.length) {
        for (let i = 0; i < numRows; i++) { // appends the vertical letters
            if (idx >= s.length) break;
            matrix[i] += s[idx];
            idx++;
        }
        for (let i = numRows-2; i > 0; i--) { // append the letters in diagonal except the top and bottom (which have already been appended by the previous for loop)
            if (idx >= s.length) break;
            matrix[i] += s[idx];
            idx++;
        }       
    }
    return matrix.join("");
    // Time Complexity: O(N), N = length of s
    // Space Complexity: O(N), matrix contains N elements
};