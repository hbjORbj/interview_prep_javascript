/*
In an array, elements at any two indices can be swapped in a single operation called a move. 

For example, if the array is arr = [17, 4, 8], swap arr[0] = 17 and arr[2] = 8 to get arr' = [8, 4, 17] in a single move. 

Determine the minimum number of moves required to sort an array such that all of the even elements are at the beginning of the array and 
all of the odd elements are at the end of the array.

Example:

arr = [6, 3, 4, 5]

The following four arrays are valid custom-sorted arrays:
    a = [6, 4, 3, 5]
    a = [4, 6, 3, 5]
    a = [6, 4, 5, 3]
    a = [4, 6, 5, 3]

The most efficient sorting requires 1 move: swap the 4 and the 3.
*/

function moveOdds(nums) {
    let idxForEven = 0, move = 0;
    for (let i = nums.length-1; i >= 0; i--) {
        if (nums[i] % 2 == 0) {
            while (nums[idxForEven] % 2 == 0 && idxForEven < i) {
                idxForEven++;
            }
            if (idxForEven < i) {
                [nums[idxForEven], nums[i]] = [nums[i], nums[idxForEven]];
                idxForEven++;
                move++;
            }
        }
    }
    return move;
    // We scan through the array from the back as this allows us to find the minimum number of moves
    // If we loop from the back, we know that there is no other even number behind us. However, if we loop from the start,
    // we don't know whether there will be other even number in the rest of array. Therefore, looping from the back, we can make more optimal
    // choice and minimise moves.
};
// We want two partitions: the first partition with evens and the second partition with odds.
// If we move all evens to the beginning, all odds are automatically moved to the end.
// So, we need to find the minimum number of moves required to move all evens to the beginning.

console.log(moveOdds([6, 3, 4, 5])) // => 1
console.log(moveOdds([5, 4, 3, 2, 1])) // => 1
console.log(moveOdds([1, 0, 1, 2, 3, 0, 2])) // => 2
console.log(moveOdds([4, 9, 9, 4, 3, 7])) // => 1
console.log(moveOdds([0, 9, 10, 2, 4, 5])) // => 1
console.log(moveOdds([5, 7, 4, 9, 2, 3, 1])) // => 2
console.log(moveOdds([5, 7, 3, 1, 2, 4, 6, 8])) // => 4
