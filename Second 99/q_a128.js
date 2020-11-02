/*
Write a function that, given a string S consisting of N characters, returns the maximum number of letters 'a' that
can be inserted into S (including at the front and end of S) so that the resulting string doesn't contain three
consecutive letters 'a'. If string S already contains the substring 'aaa', then your function should return -1.

Qs:
1. The string consists of only lowercase letters?
- Yes.
*/

function maxInserts(S) {
    let numOfAs = 0, numOfConsecutiveAs = 0, inserts = 2;
    for (let i = 0; i < S.length; i++) {
        if (S[i] == 'a') {
            numOfAs++;
            numOfConsecutiveAs++;
        }
        else {
            inserts += 2;
            numOfConsecutiveAs = 0;
        }
        if (numOfConsecutiveAs >= 3) return -1; // 3 or greater consecutive a's exist
    }
    
    return inserts - numOfAs;
}
// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(maxInserts("aabab")); // => 3
console.log(maxInserts("dog")); // => 8
console.log(maxInserts("aa")); // => 0
console.log(maxInserts("baaaa")); // => -1
console.log(maxInserts("a")); // => 1
console.log(maxInserts("")); // => 2
console.log(maxInserts("bababaabbbabab")); // => 12

/*
1. Keep track of number of consecutive a's in order to figure out if there is already a substring of a's of length 
greater than or equal to 3. If so, return -1. Else, continue scanning through the array.
2. The total number of inserts is the number of possible inserts assuming there is no existing a's - the number of a's. 
The number of possible inserts increases by two for every non-a's. 
Our variable "inserts" is initialised to 2, because this is the number of possible inserts assuming no existing a's,
and we can insert two a's at most with no existing a's.
*/