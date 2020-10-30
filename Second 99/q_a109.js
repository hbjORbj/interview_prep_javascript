/*
Given a string, what is the minimum number of adjacent swaps required to convert a string into a palindrome. 

If not possible, return -1.

Qs:
1. What to return for an empty string?
- Return 0.
*/

function minAdjSwaps(s) {
    if (s.length == 0) return 0;
    if (isPalindromePossible(s) == false) return -1;
    s = s.split("");
    let start = 0, end = s.length-1, swapCount = 0;
    while (start < end) {
        if (s[start] === s[end]) {
            start++, end--;
        } else {
            let mid = end;
            while (mid > start && s[start] !== s[mid]) {
                mid--;
            }
            if (mid == start) { // The front char has no conjugate pair within the window; should be put into the middle eventually  
                [s[start], s[start+1]] = [s[start+1], s[start]]; // swap the front letter with its right neighbour
                swapCount++;
                continue;
            }
            while (mid < end) {
                [s[mid], s[mid+1]] = [s[mid+1], s[mid]];
                swapCount++;
                mid++;
            }
            start++, end--;
        }
        console.log(s)
    }
    return swapCount;
    // Time Complexity: O(n^2)
    // Space Complexity: O(n) due to helper function
}

function isPalindromePossible(str) {
    let m = new Map();
    for (let char of str) {
        m.set(char, m.get(char)+1 || 1);
    }
    let oddFreqCount = 0;
    for (let [char, freq] of m) {
        if (freq % 2 == 1) oddFreqCount++;
        if (oddFreqCount > 1) return false;
    }
    return true;
}

console.log(minAdjSwaps("accab"));
console.log(minAdjSwaps(""));
console.log(minAdjSwaps("bdefg"));
console.log(minAdjSwaps("damam"));

/*
Test cases:
"accab" => 2 ("acbca")
"" => 0
"bdefg" => -1
"damam" => 3

Idea:
1. Use two pointers (one pointing to start of window and the other pointing to end of window) 
to make each letter at each end the same. 
- If they are already the same, reduce the window size and continue.
- Else, find the right-most char that matches the front letter and make swaps until we put it at the end of our window.
Reduce the window size and continue. 
    - If we couldn't find the right-most char, it means that the front letter does not have its conjugate within this window.
    which means this front letter should be put in the middle. So, to bring it closer to the middle, we swap the front letter
    with its right neighbour and continue without reducing the window size (because our front letter and back letter are not matching yet).
*/

