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
1. Initialise two pointers l and r both pointing to zero and a map. 
Assign every letter in p to the map and record its frequencies as its value.
2. Expand r pointer until I get a desirable window (window that contains all letters of p). 
If the desirable window's length is equal to the length of p, push the first index of the window to return array.
3. Move l pointer ahead one by one until we no longer have a desirable window, 
and once this happens go back to step 2 and repeat the process.

Test Cases: 
("", "abc") => []
("abcjksdbac", "abc") => [0,7]

Time Complexity: O(n)
Space Complexity: O(n)

Category: Sliding Window, Two Pointer
*/