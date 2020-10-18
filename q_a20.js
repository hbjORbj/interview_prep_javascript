/*
Given a string s, find the length of the longest substring without repeating characters.
*/
function longestSubstring(s) {
    let m = new Map(), l = 0, r = 0;
    let res = 0;
    while (r < s.length) {
        let char = s[r];
        while (m.has(char)) {
            if (m.has(s[l])) m.delete(s[l]);
            l++;
        }
        m.set(char, 1);
        res = Math.max(res, r-l+1);
        r++;
    }
    return res;
}

/*
Test Cases: ("aabcbcbd") => 3 ("abc", "cbd")

Idea:
1. Create an empty map and two pointers l and r both pointing to zero.
2. Loop over every character of the string by expanding r pointer, and 
check if the character already exists in the map. If it does not exist, we assign the letter
to the map and update our return variable (the length of the longest substring). If it exists, we move l pointer ahead one by one
and delete the character pointer l is pointing to until this character is no longer in the map. 
3. Once the character is no longer in the map, we go back to step 2 and repeat the process.

Time Complexity: O(n)
Space Complexity: O(n)

Category: Two Pointer, Sliding Window
*/