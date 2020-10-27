/*
Given two integers A and B, 
return the number of integers from the range [A,,,B] inclusive that can be expressed as the product of two consecutive integers.

Qs:
1. Can A and B be negative?
- No, there will be positive.
2. If B is less than A, what to return?
- 0.
*/
function countProducts(A, B) {
    let start = Math.floor(Math.sqrt(A));
    let end = Math.floor(Math.sqrt(B));
    let count = 0;
    while (start <= end) {
        let product = start*(start+1);
        if (product >= A && product <= B) {
            count++;
        }
        start++;
    }
    return count;
}
console.log(countProducts(6, 20))
console.log(countProducts(1, 20))
console.log(countProducts(1, 1))
console.log(countProducts(0, 0))
/*
Test Cases:
(6, 20) => 3 [6,12,20]
(1, 20) => 4 [2, 6,12,20]
(1, 1) => 0 []
(0, 0) => 1 [0]

Consecutive numbers less than Math.sqrt(A) cannot produce products that are greater than or equal to A
Consecutive numbers greater than Math.sqrt(B) cannot produce products that are less than or equal to B
*/