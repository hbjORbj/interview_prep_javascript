/*
A string S of lowercase English letters is given. 

We want to partition this string into as many parts as possible so that each letter appears in at most one part, 

and return a list of integers representing the size of these parts.
*/

var partitionLabels = function(S) {
    if (S.length == 0) return [];
    let intervals = [];
    for (let i = 0; i < 26; i++) {
        let char = String.fromCharCode(97 + i);
        let firstIdx = S.indexOf(char), lastIdx = S.lastIndexOf(char);
        if (firstIdx !== -1 && lastIdx !== -1) {
            intervals.push([firstIdx, lastIdx]);
        }
    }
    intervals.sort((a,b) => a[0] - b[0]); // has a time complexity of O(26*log(26))
    
    // Merge intervals
    let stack = [intervals[0]]; // stack stores merged intervals so far
    
    for (let i = 1; i < intervals.length; i++) {
        let prev = stack.pop(), cur = intervals[i];
        if (prev[1] >= cur[0]) {
            stack.push([prev[0], Math.max(prev[1], cur[1])]);
        } else {
            stack.push(prev, cur);
        }
    }
    return stack.map(interval => interval[1] - interval[0] + 1);
    
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};