/* 
Given two strings s and t , write a function to determine if t is an anagram of s.

The string contains lowercase alphabets or unicode characters.
*/

function isAnagram(s,t) {
    if (s.length !== t.length) return false;
    let m = new Map();
    for (let char of s) m.set(char, m.get(char)+1 || 1);
    let counter = m.size;
    for (let char of t) {
        if (m.has(char)) m.set(char, m.get(char)-1);
        if (m.get(char) == 0) counter--;
    }
    return counter == 0;
}

/*
Test Cases: ("abc,.", ",.cba") => true

Idea:
1. Return false if they have different lengths.
2. Create a map and assign every character of s to the map with its frequency as its value.
3. Loop over t and check if every character exists in the map and their frequencies are the same. 
I can achieve this by keeping a counter initialised to the map's size, decrementing each character's frequency by 1 
every time a character is found in the map and decrement counter by 1 once their frequency becomes zero. Because their
frequency being zero means that the particular letter has occurred in t for the same number of times as in s.
4. After the loop is complete, return true if counter is equal to zero, else return false. Counter being zero means that
all letters of s have occurred in t for the same number of times as in s.

Time Complexity: O(n)
Space Complexity: O(n)

Category: Map, String
*/