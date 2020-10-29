/*
Given an array of strings strs, group the anagrams together. 

You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
*/

function groupAnagrams(strs) {
    let m = new Map();
    for (let str of strs) {
        let sorted = str.split("").sort().join("");
        if (m.has(sorted)) m.set(sorted, [...m.get(sorted), str]);
        else m.set(sorted, [str]);
    }
    return Array.from(m.values());
};

/*
Test Cases: ["abc","cba","bca","elf","fle","bat"] => [["abc","cba","bca"], ["elf","fle"], ["bat"]]

Idea:
1. Initialise an empty map.
2. Loop over every string in the array, sort the string and assign this sorted string to the map 
with an array containing the unsorted, original string as its value. If the map already contains the sorted string as a key,
instead of pushing an array containing the unsorted, original string to the value, push the string to the existing array in the value.
3. Repeat this process until the end of array.

Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
Space Complexity: O(n)
*/

// Assuming strs[i] consists of lower-case English letters, we can do this as well for better time complexity.
function groupAnagrams(strs) {
    let res = {};
    for (let str of strs) {
        let count = new Array(26);
        for (let i = 0; i < count.length; i++) count[i] = 0;
        for (let char of str) count[char.charCodeAt()-97]++;
        let key = count.join("#"); // for "abbc", key looks like "1#2#1#0#0#0#0#0..."
        res[key] ? res[key].push(str) : res[key] = [str];
    }
    return Object.values(res);
    // Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
    // Space Complexity: O(n)
}
