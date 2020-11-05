/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome. 
*/

function makePalindrome(s) {
    let left = 0, right = s.length-1;
    while (left < right) {
        if (s[left] == s[right]) left++, right--;
        else {
            // 1st case: delete left char
            // 2nd case: delete right char
            return (isPalindrome(left+1, right, s) 
                   || isPalindrome(left, right-1, s));
        }
    }
    return true;
    // Time Complexity: O(n)
	// Space Complexity: O(1)
};

function isPalindrome(left, right, s) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++, right--;
    }
    return true;
}

console.log(makePalindrome(""));
console.log(makePalindrome("a"));
console.log(makePalindrome("abba"));
console.log(makePalindrome("abca"));
console.log(makePalindrome("acdba"));

/*
Test Cases:
"" => true
"a" => true
"abba" => true
"abca" => true
"acdba" => false
*/


