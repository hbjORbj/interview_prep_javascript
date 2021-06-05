/*
Min Steps to Make Piles Equal Height

Alexa is given n piles of equal or unequal heights.

In one step, Alexa can remove any number of boxes from the pile which has the maximum height and try to make it

equal to the one which is just lower than the maximum height of the stack. Determine the minimum number of steps

required to make all of the piles equal in height.

ex)
Input: piles = [5, 2, 1]
Output: 3
Explanation:
Step 1: reducing 5 -> 2 [2, 2, 1]
Step 2: reducing 2 -> 1 [2, 1, 1]
Step 3: reducing 2 -> 1 [1, 1, 1]
So final number of steps required is 3.
*/

function minSteps(piles) {
  // sort piles in ascending order
  piles.sort((a, b) => a - b);
  let count = 0;
  // iterate through piles backwards
  for (let i = piles.length - 1; i > 0; i--) {
    if (piles[i - 1] < piles[i]) {
      // piles[i] ... piles[piles.length-1] all have the same maximum height
      // so we require (piles.length - i) steps to change all these piles' height to the new height: piles[i-1]
      count += piles.length - i;
    }
  }
  return count;
  // T.C: O(Nlog(N))
  // S.C: O(1)
}
console.log(minSteps([5, 2, 1]));
console.log(minSteps([1, 7, 3, 2, 1]));
console.log(minSteps([150, 210, 210, 80, 110]));
console.log(minSteps([843, 247]));
console.log(minSteps([2]));
