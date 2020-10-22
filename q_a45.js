/*
Given a String, find the longest substring with unique characters.

Qs to ask:
1. If the input string is empty, what should I return?
- Return [-1, -1].
2. By substring, you mean a contiguous subarray of characters. Am I right?
- Yes.
3. What should I do if there are multiple answers?
- Return any of them.
4. Do we have only alphabets?
- No, there can be any character.
5. Should I consider uppercase letter and lowercase letter of the same alphabet to be the same character?
- No, each of them is unique.
6. How should I return the result?
- Return the start and end indexes of the substring.
*/

function longestUniqueSubstring(str) {
    if (!str) return [-1, -1];
    let start = 0, end = 0;
    let substrLen = 0;
    let res = [0, 0];
    let m = new Map();
    while (end < str.length) {
        while (m.has(str[end])) m.delete(str[start++]);
        m.set(str[end], 1);
        if (substrLen < end-start+1) {
            substrLen = end-start+1;
            res = [start, end];
        }
        end++;
    }
    return res;
}

/*
Test Cases:
"aadeeb" => [1,3]
"" => [-1,-1]
"a" => [0, 0]

Idea:
1. I will use two pointers, one of which represents the start index of a current string's window and the other of which
represents the end index of the window. I will also use a variable to track the length of the longest substring and
a return array to store indices.
2. I will start expanding the end index until the substring is no longer desirable (contains duplicate characters) 
while updating the longest substring's length in our variable. 
I will then begin expanding the start index until the substring becomes desirable again (containing unique characters only).
If the substring becomes desirable, I will go back to expanding the end index again.
3. How am I going to implement this?
I will use a HashMap to check if each character exists in the map.
Every time I encounter a character, I will assign it to the map. So, if it exists in the HashMap, it means the character is already in the substring.
So, while the character exists in the HashMap, I expand the start index.
4. After the while loop is finished, the return array must contain correct start and end indices that point to the longest substring with unique characters.

Time Complexity: O(n)
Space Complexity: O(n)
*/