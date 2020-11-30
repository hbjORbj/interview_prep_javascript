/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.
*/

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/ig, '');
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++, r--;
    }
    return true;
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};