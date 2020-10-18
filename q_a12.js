/*
Implement the .indexOf() function, but allow for anagrams of letters.

"actor".anagrammedIndexOf("cat") = 0 
"actor".anagrammedIndexOf("rot") = 2 
"actor".anagrammedIndexOf("car") = -1 
*/

function findAnagramIndex(s, p) {
    let l = 0, r = 0;
    let m = new Map();
    for (let letter of p) m.set(letter, m.get(letter)+1 || 1);
    let counter = m.size; // we can think of this as the number of distinct letters to collect

    while (r < s.length) {
        let letter = s[r];
        if (m.has(letter)) m.set(letter, m.get(letter)-1);
        if (m.get(letter) == 0) counter--;

        while (counter == 0) {
            if (r-l+1 == p.length) return l;
            if (m.has(s[l])) m.set(s[l], m.get(s[l])+1);
            if (m.get(s[l]) > 0) counter++;
            l++;
        }
        r++;
    }
    return -1;
}

/*
Idea:
1. Initialise two pointers l and r and also a map that assigns every letter in p to the map with its frequency as the value.
2. Expand r pointer until I get a desirable window (window containing all letters of p). If this desirable window's length is equal
to the length of p, return the first index of the window. Else, move l pointer ahead one by one until our window is no longer desirable.
3. Once our window is no longer desirable, Go back to step 2 and repeat the process until r reaches the end of s.
*/