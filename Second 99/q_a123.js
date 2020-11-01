/*
Alexa is given n piles of equal or unequal heights. 

In one step, Alexa can remove any number of boxes from the pile which has the maximum height and try to
make it equal to the one which is just lower than the maximum height of the stack.

Determine the minimum number of steps required to make all of the piles equal in height.
*/

function minStepsForEqualHeight(piles) {
    piles.sort((a,b) => b-a);
    let m = new Map();
    for (let pile of piles) {
        m.set(pile, m.get(pile)+1 || 1); // JS Map preserves the insertion order
    }
    let steps = 0;
    let heights = m.keys();
    let cur = heights.next().value; // maximum height
    let next = heights.next().value; // second maximum height
    while (m.size > 1) { // map's size == 1 means that every pile has equal heights
        m.set(next, m.get(next) + m.get(cur)); // all piles with maximum height now have the second maximum height
        steps += m.get(cur); // number of piles whose heights we just changed
        m.delete(cur); // there is no pile with such height anymore 
        cur = next; // the maximum height changed
        next = heights.next().value; // the second maximum height changed
    }
    return steps;
}
// Time Complexity: O(nlog(n))
// Space Complexity: O(n)

// console.log(minStepsForEqualHeight([5,2,1])); // => 3
// console.log(minStepsForEqualHeight([1,5,2,5])); // => 5
// console.log(minStepsForEqualHeight([])); // => 0
// console.log(minStepsForEqualHeight([9,4,3,3,2,4,2])); // => 9

function minStepsForEqualHeight2(piles) {
    piles.sort((a,b) => b-a); // sort the heights from greatest to smallest
    let steps = 0;
    let tempSteps = 0;
    for (let i = 0; i < piles.length; i++) {
        if (piles[i] !== piles[i-1]) { // means there is a smaller height
            steps += tempSteps; // need to change all heights so far to this smaller height
        }
        tempSteps++; // potential heights to change
    }
    return steps;
}
// Time Complexity: O(nlog(n))
// Space Complexity: O(1)

console.log(minStepsForEqualHeight2([5,2,1])); // => 3
console.log(minStepsForEqualHeight2([1,5,2,5])); // => 5
console.log(minStepsForEqualHeight2([])); // => 0
console.log(minStepsForEqualHeight2([9,4,3,3,2,4,2])); // => 9