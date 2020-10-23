/*
You​ ​are​ ​given​ ​an​ ​array​ ​of​ ​integers​ ​and​ ​an​ ​index​ ​X.​ ​Rearrange​ ​the​ ​array​ ​in​ ​the following​ ​order:
[all​ ​elements​ ​less​ ​than​ ​a[X],​ ​elements​ ​equal​ ​to​ ​a[X],​ ​elements​ ​greater​ ​than​ ​a[X]], 
Similar​ ​to​ ​the​ ​Dutch​ ​National​ ​Flag​ ​(DNF).

Qs:
1. What to do if the input array is empty?
- Return null
2. What to do if X is invalid?
- Return null
3. If it's a signle-element array, should I leave it unchanged?
- Yes.
*/

function threePartitions(nums, X) {
    if (!nums.length || X < 0 || X >= nums.length) return null;
    let pivot = nums[X];
    let lowerB = 0, upperB = nums.length-1;
    for (let i = 0; i <= upperB; i++) {
        // upperBoundary represents the index where the next element greater than pivot "will" be placed at
        // so currently at this index, there might be a number less than pivot which we need to move to the beginning
        // so we should include this in our range!
        if (nums[i] > pivot) {
            [nums[i], nums[upperB]] = [nums[upperB], nums[i]];
            upperB--;
            i--;
        } else if (nums[i] < pivot) {
            [nums[i], nums[lowerB]] = [nums[lowerB], nums[i]];
            lowerB++;
        }
    }
    return nums;
}

/*
Test Cases:
[3,1,2,7,2,5,6], 0 => [1,2,2,3,5,6,7]
[], 2 => null
[1,2], 2 => null
[1], 0 => [1]

Time Complexity: O(n)
Space Complexity: O(1)
*/