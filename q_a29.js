/*
Given two arrays, write a function to compute their intersection.

Questions to ask:
1. Can the input arrays contain duplicates?
- Yes, but each element in the result must be unique.
2. Can I return the output array in any order?
*/
function intersectionOfTwoArrays(arr1, arr2) {
    let firstSet = new Set(arr1), intersectionSet = new Set();
    for (let num of arr2) {
        if (firstSet.has(num)) intersectionSet.add(num);
    }
    return Array.from(intersectionSet);
}
/*
Test Cases: ([-1,3,0,2], [2,0,0]) => [0,2]

Idea:
1. Initialise two sets with the given input arrays.
2. Loop over every number in one set, and if the number exists in the other set, push the number to the return array,
else continue.
3. Return the array. 

Time Complexity: O(n+k) where n is the number of elements in arr1 and k is the number of elements that intersect
Space Complexity: O(n+k)
*/

/*
Constraints: 

O(n) time and O(1) space (the resulting array of intersections is not taken into consideration).
You are told the lists are sorted.

Cases to take into consideration include:
duplicates, negative values, single value lists, 0's, and empty list arguments.
*/
function intersectionOfTwoSortedArrays(arr1, arr2) {

}