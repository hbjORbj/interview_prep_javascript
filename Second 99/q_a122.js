/*
You are given a string S. Deletion of the K-th letter of S costs C[K].
After deleting a letter, the costs of deleting other letters do not change.
For example, for S = "ab" and C = [1,3], after deleting 'a', deletion of 'b' will still cost 3.

You want to delete some letters from S to obtain a string without two identical letters next to each other.
What is the minimum total cost of deletions to achieve such a string?

Write a function that, given string S and array C of integers, both of length N, returns the minimum cost
of all necessary deletions.

Ex) 
( S = "abccbd", C = [0,1,2,3,4,5] ) => 2
( S = "aabbcc", C = [1,2,1,2,1,2] ) => 3
( S = "aaaa", C = [3,4,5,6] ) => 12
( S = "ababa", C = [10,5,10,5,10] ) => 0
( S = "asdffff", C = [1,1,1,8,7,6,5] ) => 18

Qs:
1. Can a cost be negative?
- No.
*/

function minDeletionCost(S, C) {
    let start = 0, end = 0;
    let totalCost = 0;
    let maxCost = 0, costSum = 0;
    while (end < S.length) {
        costSum += C[end]; // keep track of total cost within current window
        maxCost = Math.max(maxCost, C[end]); // keep track of maximum cost within current window
        if (S[end] !== S[end+1]) { // no more consecutive, same character within current window
            if (end-start+1 >= 2) { // no need to delete for substring of length less than 2
                totalCost += (costSum - maxCost);
            } 
            maxCost = 0, costSum = 0; // re-initialise to zero since we are done checking this substring and want to move on for the next substring
            while (start <= end) start++; // slide our window to look for new substring
        }
        end++; // expand our window to the right by one
    }
    return totalCost;
}
// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(minDeletionCost("abccbd", [0,1,2,3,4,5]));
console.log(minDeletionCost("aabbcc", [1,2,1,2,1,2]));
console.log(minDeletionCost("aaaa", [3,4,5,6]));
console.log(minDeletionCost("ababa", [10,5,10,5,10]));
console.log(minDeletionCost("asdffff", [1,1,1,8,7,6,5]));