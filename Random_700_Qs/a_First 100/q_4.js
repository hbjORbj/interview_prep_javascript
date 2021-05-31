/*
Write a program to find the n-th ugly number.
Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 
1 is typically treated as an ugly number.
*/
function nthUglyNumber(n) {
    let idx2 = 0, idx3 = 0, idx5 = 0;
    let next2, next3, next5;
    let next;
    let nums = [1]
    while (nums.length < n) {
        next2 = nums[idx2]*2;
        next3 = nums[idx3]*3;
        next5 = nums[idx5]*5;
        next = Math.min(next2,next3,next5);
        nums.push(next);
        if (next == next2) idx2++;
        if (next == next3) idx3++;
        if (next == next5) idx5++;
    }
    return nums[n-1];
}

/*
Test Cases: (5) => 5, (9) => 10
Time Complexity: O(n)
Space Complexity: O(n)
Category: Three Pointer
*/