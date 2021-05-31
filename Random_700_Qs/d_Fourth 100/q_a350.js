/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 

Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

var letterCombinations = function(digits) {
    if (digits.length == 0) return [];
    let phone = {2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno",
                 7: "pqrs", 8: "tuv", 9: "wxyz"};
    let res = [], queue = [""], idx = 0;
    while (queue.length > 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let str = queue.shift();
            if (idx < digits.length) {
                let chars = phone[digits[idx]];
                for (let j = 0; j < chars.length; j++) {
                    queue.push(str + chars[j]);
                }
            } else {
                res.push(str);
            }
        }
        idx++;
    }
    return res;
    // Time Complexity: O(3^m * 4^n),
    // m = the number of digits that have 3 chars and n = the number of digits that have 4 chars
    // Space Complexity: O(3^m * 4^n), queue can contain at most O(3^m * 4^n) elements
};