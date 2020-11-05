/*
Given an array of integers, 

write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2.
*/

function pythagoreanTriplets(nums) {
    let set = new Set(nums.map(num => num*num));
    console.log(set)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let num1 = nums[i], num2 = nums[j];
            if (set.has(num1**2 + num2**2)) {
                return true;
            }
        }
    }
    return false;
}

console.log(pythagoreanTriplets([1,2,5,9,13,12])); // => true
console.log(pythagoreanTriplets([1,2,3,4,5])); // => true
console.log(pythagoreanTriplets([1,2,3])); // => false

