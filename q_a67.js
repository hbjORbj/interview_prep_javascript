/*
Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.
*/

var removeDuplicates = function(s, k) {
    while (s.length > 0) {
        let newStr = "", substr = "";
        for (let i = 0; i < s.length; i++) {
            substr += s[i];
            if (s[i] != s[i+1] && substr.length !== k) {
                newStr += substr;
                substr = "";
            }
            if (substr.length == k) substr = "";
        }
        if (newStr == s) return s; // no element was deleted
        else s = newStr;    
    }
    return "";
    /*
    Test Cases:
    "", 3 => ""
    "abcd", 2 => "abcd"
    "deeedbbcccbdaa", 3 => aa
    
    Time Complexity: O(n)
    Space Complexity: O(n)
    */
};