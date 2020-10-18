/*
Given a string s, return the longest palindromic substring in s.
s consist of only digits and English letters (lower-case and/or upper-case),
*/

function longestPalindrome(s) {
    for (let j = s.length-1; j >= 0; j--) {
        let i = 0, k = j;
        while (k < s.length) {
            let substr = s.substring(i,k+1);
            if (isPalindrome(substr)) return substr;
            i++, k++; // slide the window to the right while keeping the same length of the window
        }
    }
    return ""; // no palindromic substring exists
}

function isPalindrome(str) {
    let  l = 0, r = str.length-1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++, r--;
    }
    return true;
}

/*
Test Cases: ("abacbcab") => "bacbcab"

Idea:
We need to return the longest solution so we will have better time complexity if we
start checking substrings of the longest length to the shortest length.
Therefore, we will loop over s from the end, decrementally reducing our window.
If our window is a palindrome, we return the window, else we slide the window to the right
until the end of s. In this way, we can keep the same length of our window and therefore check every possible
substring of this length. If no window of this length is a palindrome, we decrement our window's length and repeat the process
until we find a palindrome.

Time Complexity:

*/