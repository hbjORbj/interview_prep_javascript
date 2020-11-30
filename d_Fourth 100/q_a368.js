/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
*/

var validPalindrome = function(s) {
    return isPalindrome(0, s.length-1, 0);
    
    function isPalindrome(start, end, deleted) {
        while (start < end) {
            if (s[start] !== s[end]) {
                if (deleted == 0) {
                    return isPalindrome(start + 1, end, deleted + 1) || 
                        isPalindrome(start, end - 1, deleted + 1);
                }
                else return false;
            }
            start++, end--;
        }
        return true;
    }
    // Time Complexity: O(N), we visit every letter once
    // Space Complexity: O(1), call stack can go as deep as 1
};

