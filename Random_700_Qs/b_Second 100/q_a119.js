/*
Write a function solution that, given an array A consisting of N integers, 

returns the maximum sum of two numbers whose digits add up to an equal sum. 

If there are no two numbers whose digits have an equal sum, the function should return -1.

Examples:
- Given A = [51, 71, 17, 42], the function should return 93.
- Given A = [42, 33, 60], the function should return 102. 
- Given A = [51, 32, 43], the function should return -1.

Qs:
1. Can there be negative integers or zeros?
- No. There are only positive integers.
*/

console.log(maxSumWithEqualDigitSum([51, 71, 17, 42])); // => 93
console.log(maxSumWithEqualDigitSum([42, 33, 60])); // => 102
console.log(maxSumWithEqualDigitSum([51, 32, 43])); // => -1
console.log(maxSumWithEqualDigitSum([1, 2, 3])); // => -1
console.log(maxSumWithEqualDigitSum([51, 4000, 1030])); // => 5030
console.log(maxSumWithEqualDigitSum([51293, 2332, 433])); // => 2765
console.log(maxSumWithEqualDigitSum([])); // => -1

function maxSumWithEqualDigitSum(A) {
    let m = new Map();
    let maxSum = -1;
    for (let num of A) {
        let digitSum = addDigits(num);
        if (m.has(digitSum)) {
            let prevMax = m.get(digitSum);
            maxSum = Math.max(maxSum, prevMax + num);
            m.set(digitSum, Math.max(prevMax, num));
        }
        else {
            m.set(digitSum, num);
        }
    }
    return maxSum;
}

// Time Complexity: O(n)
// Space Complexity: O(n)

function addDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}