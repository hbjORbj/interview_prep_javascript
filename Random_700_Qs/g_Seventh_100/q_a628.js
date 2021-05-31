/*
A company sells dumbbells in pairs. These are weights for exercising. They receive a shipment of dumbbells weighing anywhere from 1 unit up to a certain maximum.

A pair can only be sold if their weights are sufficiently close: no greater than 1 unit difference.

Given an inventory of various weights, determine the maximum number of pairs the company can sell.

For example, if there are 2 dumbbells of weight 1, 4 of weight 2, 3 of weight 3 and 1 of weight 4,

they can be paired as [1,1], [2,2], [2,2], [3,3], [3,4] for a total of 5 pairs.

i-th element is the number of dumbbells with a weight of i+1.
*/

/*
1. Iterate through given array. At each dumbbell, we compute the number of possible pairs using adjacent dumbbell.
That is, using dumbbell with one less weight and using dumbbell with one greater weight, respectively.
We take the greater of the two and update dumbbell numbers accordingly. We repeat this until the end of array.
2. So far, we've computed the maximum number of pairs using two different dumbbells. Now, we will compute the number
of pairs using the same dumbbell. Hence, at each i, after making pairs, there will be either 0 or 1 dumbbell remaining.
Therefore, we will also check if there is a previous dumbbell remaining and if there is one current dumbell remaining.
If so, we can make one more pair. Repeat this for every i until the end of array.
*/
function maxPairs(freq) {
  if (freq === null || freq.length === 0) {
    return 0;
  }
  let count = 0;
  for (let i = 1; i < freq.length - 1; i++) {
    let pairs1 = Math.min(freq[i - 1], freq[i]);
    let pairs2 = Math.min(freq[i], freq[i + 1]);
    if (pairs1 >= pairs2) {
      count += pairs1;
      freq[i] -= pairs1;
      freq[i - 1] -= pairs1;
    } else {
      count += pairs2;
      freq[i] -= pairs2;
      freq[i + 1] -= pairs2;
    }
  }
  for (let i = 0; i < freq.length; i++) {
    let pairs = Math.floor(freq[i] / 2);
    count += pairs;
    freq[i] = freq[i] % 2 === 0 ? 0 : 1;
    if (i > 0 && freq[i - 1] === 1 && freq[i] === 1) {
      count += 1;
      freq[i - 1] = 0;
      freq[i] = 0;
    }
  }
  return count;
  // T.C: O(N)
  // S.C: O(1)
}
