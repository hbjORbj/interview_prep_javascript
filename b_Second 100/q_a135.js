/*
You are given with a string. 

Your task is to remove at most two substrings of any length from the given string such that 

the remaining string contains vowels ('a','e','i','o','u') only. 

Your aim is the maximise the length of the remaining string. 

Output the length of remaining string after removal of at most two substrings.

NOTE: The answer may be 0, i.e. removing the entire string.
*/

function maxLenRemaining(s) {
    const VOWELS = ['a','e','i','o','u'];
    let leftSubStr = 0, rightSubStr = 0, midSubStr = 0;
    for (let i = 0; i < s.length; i++) { // find the length of left substring
        if (VOWELS.includes(s[i])) leftSubStr++;
        else break;
    }
    for (let i = s.length-1; i >= 0; i--) { // find the length of right substring
        if (VOWELS.includes(s[i])) rightSubStr++;
        else break;
    }

    let subStr = 0;
    for (let i = leftSubStr; i <= s.length-rightSubStr; i++) { // find the max length of middle substring
        if (VOWELS.includes(s[i])) {
            subStr++;
        } else {
            midSubStr = Math.max(midSubStr, subStr);
            subStr = 0;
        }
    }
    return leftSubStr + midSubStr + rightSubStr;
}
// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(maxLenRemaining("abbedecid")) // => 2 ("ae" or "ai")
console.log(maxLenRemaining("abbabba")) // => 3 ("aaa")
console.log(maxLenRemaining("babbaeebbab")) // => 3 ("aee")
console.log(maxLenRemaining("abaieieieababbdbdb")) // => 9 ("aaieieiea")
console.log(maxLenRemaining("")) // => 0 ("")

/*
Best scenario: Vowels [substr] Vowels [substr] Vowels | we can choose three substrings of vowels.
Worst scenario: [substr] Vowels [substr] Vowels [substr] Vowels [substr] | we can choose only one substring of vowels.

The maximum length of vowels remaining = length of left substring of vowels + length of right substring of vowels + length of middle substring
vowels that has the maximum length.

If the first character is NOT vowel, left substring of vowels is zero since we don't have one.
If the last character is NOT vowel, right substring of vowels is zero since we don't have one.
*/