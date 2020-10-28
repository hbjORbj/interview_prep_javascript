/*
As an assignment, a student is given two strings s and t. Create a function that performs per the following rules.

Find whether string s is divisible by string t. A string s divisible by string t if string t can be concatenated some number of times to obtain the string s.
If s is divisible, find the smallest string u such that it can be concatenated some number of times to obtain both s and t.
If it is not divisible, set the return value to -1.
Finally, return the length of the string u or -1.

Example 1:

s = "bcdbcdbcdbcd"

t = "bcdbcd"

If string t is concatenated twice, the result is "bcdbcdbcdbcd" which is equal to the string s. The string s is divisible by string t.

Since it passes the first test, look for the smallest string u that can be concatenated to create both strings s and t.

The string "bcd" is the smallest string that can be concatenated to create both strings s and t.

The length of the string u is 3, the integer value to return.
*/

function findRepeatingSubstr(s, t) {
    if (s.length == 0 || t.length == 0) return -1;
    let repeatN = s.length / t.length;
    if (s !== t.repeat(repeatN)) return -1; // s is not divisible by t
    let substr = "";
    for (let char of t) {
        substr += char;
        repeatN = t.length / substr.length;
        if (substr.repeat(repeatN) === t) return substr.length;
    }
    return -1;
}

console.log(findRepeatingSubstr("bcdbcdbcdbcd", "bcdbcd"));
console.log(findRepeatingSubstr("bcdbcdbcd", "bcdbcd"));
console.log(findRepeatingSubstr("aaaa", "aa"));

// "bcdbcdbcdbcd", "bcdbcd" => 3
// "bcdbcdbcd", "bcdbcd" => -1
// "aaaa", "aa" => 1