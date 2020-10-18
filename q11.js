/*
Given a non-empty array of integers, return the k most frequent elements.

Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.
*/

function mostFrequent(nums, k) {
    let m = new Map(), res = [];
    nums.forEach(num => m.set(num, m.get(num)+1 || 1));
    
    for (let i = 0; i < k; i++) {
        let max = 0, maxNum;
        for (let [num, freq] of m) {
            if (freq > max && !res.includes(num)) {
                max = freq;
                maxNum = num;
            }
        }
        res.push(maxNum);
    }
    return res;
}
/*
Test Cases: ([7,3,2,9,2,2,10,7], 2) => [2,7]

Idea:
1. Create a map, loop over the array and assign all elements to the map with their occurrence as their value.
2. Loop over the map for k times to find numbers that has the biggest occurrences. 
I will keep an array to store numbers already chosen so they are not picked again. 
3. Return this array.

Time Complexity: O(n)
Space Complexity: O(n)

Category: Array, Map
*/