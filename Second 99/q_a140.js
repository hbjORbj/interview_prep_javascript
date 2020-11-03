/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, 

write a function that will return true if the ransom note can be constructed from the magazines; 

otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Qs:
1. What to return if both strings are empty?
- Return true.
*/

function canConstruct(ransomNote, magazine) {
    let m = new Map();
    for (let char of magazine) m.set(char, m.get(char)+1 || 1);
    for (let char of ransomNote) {
        if (!m.has(char) || m.get(char) == 0) return false; 
        // this letter does not exist in magazine or we already used all occurrences of this letter from magazine
        else m.set(char, m.get(char)-1);
        // we used one occurrence of this letter so decrement availability by one
    }
    return true;
}

console.log(canConstruct("apple", "pppelela")) // => true
console.log(canConstruct("apple", "")) // => false
console.log(canConstruct("", "aa")) // => true