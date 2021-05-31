/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.
*/

function findAllAnagrams(s, p) {
    let l = 0, r = 0, res = [];
    let m = new Map();
    for (let letter of p) m.set(letter, m.get(letter)+1 || 1);
    let counter = m.size; // we can think of this as the number of distinct letters to collect

    while (r < s.length) {
        let letter = s[r];
        if (m.has(letter)) m.set(letter, m.get(letter)-1);
        if (m.get(letter) == 0) counter--;

        while (counter == 0) {
            if (r-l+1 == p.length) res.push(l);
            if (m.has(s[l])) m.set(s[l], m.get(s[l])+1);
            if (m.get(s[l]) > 0) counter++;
            l++;
        }
        r++;
    }
    return res;
}
/*
Idea:
1. Initialise two pointers l and r and also a map that assigns every letter in p to the map with its frequency as the value.
2. Expand r pointer until I get a desirable window (window containing all letters of p). If this desirable window's length is equal
to the length of p, push the first index of the window to return array. Else, move l pointer ahead one by one until our window is no longer desirable.
While doing so, keep checking if the window's updated length equals the length of p, because if so we'll push the first index of the window to the return array.
3. Once our window is no longer desirable, Go back to step 2 and repeat the process until r reaches the end of s.

Test Cases: 
("", "abc") => []
("abcjksdbac", "abc") => [0,7]

Time Complexity: O(n)
Space Complexity: O(n)

Category: Sliding Window, Two Pointer
*/