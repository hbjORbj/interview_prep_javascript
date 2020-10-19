/*
Given a string, find the first non-repeating character in it and return its index. 

If it doesn't exist, return -1.
*/

function findNonRepeatingChar(s) {
    let m = new Map();
    for (let i = 0; i < s.length; i++) {
        (m.has(s[i])) ? m.set(s[i], -1) : m.set(s[i], i);
    }
    for (let [num, idx] of m) {
        if (idx !== -1) return idx;
    }
    return -1; // Every character repeats in the string.
}

/*
Test Cases: "ahbabdeb" => 1

Idea:
1. Initialise an empty map.
2. Start looping over every character of given string. If a character does not exist in the map, assign the character 
to the map with its index as its value. Else, change the value of the character in the map to -1 because this character 
is a repeating character.
3. Loop over the map and return the first index that is not -1.
*/