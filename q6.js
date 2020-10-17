/*
In an array A of 0s and 1s, how many non-empty subarrays have sum S?
*/
function binarySubarrays(A, S) {
    let lLow = 0, lHigh = 0, r = 0;
    let sum = 0, res = 0;
    while (r < A.length) {
        sum += A[r];
        while (lLow < r && sum > S) sum -= A[lLow++];
        lHigh = lLow;
        while (lHigh < r && A[lHigh] == 0) lHigh++;
        if (sum == S) res += lHigh-lLow+1;
        r++;
    }
    return res;
}
/*
Idea:
1. Initialise three pointers (lLow, lHigh, r) to zero.
2. Expand r pointer until we get a desirable window. 
3. Start incrementing return value by 1 while expanding r pointer until we get an undesirable window.
3. Move lLow pointer until we get a desirable window. Use lHigh pointer to count
subarrays possible within the window (bounded by lLow and r). 
5. Repeat from step 3.

Test Cases: ([1,0,1,1,0,1,1], 2) => 8
Time Complexity: O(n)
Space Complexity: O(1)
*/


