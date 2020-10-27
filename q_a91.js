/*
Given an integer N, 
return the maximum possible value obtained by inserting one '5' digit inside the decimal representation of integer N.
*/

function insertFive(N) {
    let num = N.toString();
    let insertIdx = getInsertIdx(num, N);

    let newNum = num.substring(0,insertIdx) + '5' + num.substring(insertIdx);
    return Number(newNum);
}

function getInsertIdx(num, N) {
    let insertIdx = -1;
    for (let i = 0; i < num.length; i++) {
        if (N < 0) {
            if (5 < Number(num[i])) {
                insertIdx = i;
                break;
            }
        }
        else {
            if (5 > Number(num[i])) {
                insertIdx = i;
                break;
            }
        }
    }
    return insertIdx;
}

console.log(insertFive(268));
console.log(insertFive(680));
console.log(insertFive(0));
console.log(insertFive(-999));

/*
Test Cases:
268 => 5268
680 => 6850
0 => 50
-999 => -5999

Idea:
1. For positive numbers, put 5 before the first smaller number
2. For negative numbers, put 5 before the first larger number

Time Complexity: O(1)
Space Complexity: O(1)
*/