/*
Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:
    - If the group's length is 1, append the character to s.
    - Otherwise, append the character followed by the group's length.

The compressed string s should not be returned separately, but instead be stored in the input character array chars. 
Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.
 
Follow up:
Could you solve it using only O(1) extra space?

Qs:
1. What to return if the input array is empty?
- Leave it unchanged and return 0.
2. If there are no consecutive elements, the output must be the same as the input, right?
- Yes.
*/
var compress = function(chars) {
    let start = 0, end = 0;
    while (end < chars.length) {
        if (chars[end] == chars[end+1]) end++;
        else {
            let len = end-start+1; // number of letters
            if (len == 1) {
                start++, end++;
                continue;
            }
            
            chars.splice(start+1, len-1, ...len.toString().split(""));
            end -= len - 1 - len.toString().length; 
            // move backwards as much as the number of letters 
            // except for one letter char and length chars
            
            start = end; // bring start pointer to end pointer
            start++, end++; // move both pointers to new letter
        }
    }
    return chars.length;
};
/*
Test Cases:
['a','b','b'] => 3 ['a','b','2']
['a','a','b','b','b','b','b','b','b','b','b','b'] => 5 ['a','2','b','1','0']
[] => 0 []

One Pass
Two Pointer
Time Complexity: O(n)
Space Complexity: O(1)
*/