/*
Given an array nums, 

write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/

function moveZeroes(nums) {
    let idxForNonZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[idxForNonZero], nums[i]] = [nums[i], nums[idxForNonZero]];
            idxForNonZero++;
            // no need to check the swapped number because we are scanning through the array from the left so it is guaranteed that 
            // the element at the idxForNonZero is zero (not non-zero).
        }
    }
    return nums;
}

console.log(moveZeroes([]));
console.log(moveZeroes([1]));
console.log(moveZeroes([1,2,3]));
console.log(moveZeroes([0,3,0,0,2,1,2,3]));
// we want to have two partitions. The first partition has only non-zeros and the second partition has only zeroes.
// If we push all non-zeroes to the first partition, zeroes will be automatically moved to the second partition.
// So, we keep an index where the next non-zero will go into and this index starts from zero. Every time we encounter a non-zero, 
// we swap this element with the number at the index for the next non-zero.