/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. 
In other words, one of the first string's permutations is the substring of the second string.
*/

function includePermutation(s1, s2) {
    let m = new Map();
    for (let letter of s1) m.set(letter, m.get(letter)+1 || 1);
    let l = 0, r = 0, counter = m.size;
    while (r < s2.length) {
        let letter = s2[r];
        if (m.has(letter)) m.set(letter, m.get(letter)-1);
        if (m.get(letter) == 0) counter--;

        while (counter == 0) {
            if (r-l+1 == s1.length) return true;
            if (m.has(s2[l])) m.set(s2[l], m.get(s2[l])+1);
            if (m.get(s2[l]) > 0) counter++;
            l++;
        }
        r++;
    }
    return false;
}

/*
Test Cases: ("abcd", "eodmcbad") => true

Idea:
We need to check if s2 has a window that contains all letters of s1 and whose length equals the length of s1.
1. Create a map and assign every letter of s1 to the map with its frequency as the value.
2. Initialise two pointers l and r both pointing to zero and start searching s2.
3. Expand r pointer until we get a desirable window (window that contains all letters of s1). 
4. If the window's length is equal to the length of s1, return true. Else, move l pointer ahead one by one 
until we no longer have a desirable window. While doing so, keep checking if the window's updated length equals 
the length of p, because if so we'll return true;
5. Once we no longer have a desirable window, go back to step 3 and repeat the process.

Time Complexity: O(n)
Space Complexity: O(n)

Category: Two Pointer
*/