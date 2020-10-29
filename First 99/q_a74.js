/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. 

# means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
*/

var backspaceCompare = function(S, T) {
    let i = S.length-1, j = T.length-1;
    let countS = 0, countT = 0;
    while (i >= 0 || j >= 0) {
        // find the next valid letter in S
        while (i >= 0) {
            if (S[i] == '#') countS++;
            else {
                if (countS == 0) break;
                else countS--;
            }
            i--;
        }
        // find the next valid letter in T
        while (j >= 0) {
            if (T[j] == '#') countT++;
            else {
                if (countT == 0) break;
                else countT--;
            }
            j--;
        }
        if (S[i] != T[j]) return false;
        i--, j--;
    }
    return true;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}