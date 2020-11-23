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

function getInsertIdx(numAsStr, N) {
    let insertIdx = numAsStr.length; 
    // in case that there is no smaller number in positive number
    // in case that there is no larger number in negative number
    for (let i = 0; i < numAsStr.length; i++) {
        if (N < 0) {
            if (5 < Number(numAsStr[i])) {
                insertIdx = i;
                break;
            }
        }
        else {
            if (5 > Number(numAsStr[i])) {
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
console.log(insertFive(-444));
console.log(insertFive(666));


/*
Test Cases:
268 => 5268
680 => 6850
0 => 50
-999 => -5999
-444 => -4445
666 => 6665

Idea:
1. For positive numbers, put 5 before the first smaller number
- if there is no smaller number, we put 5 in the end
2. For negative numbers, put 5 before the first larger number
- if there is no greater number, we put 5 in the end

Time Complexity: O(1)
Space Complexity: O(1)
*/
