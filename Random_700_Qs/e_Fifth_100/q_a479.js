/*
Q: You have a bag of ids and you are allowed to take out m items from the bag.

Return the minimum number of unique ids in your bag after you take out m items from the bag.

ex) (ids: [2,3,1,1,1,3,4], m: 2) => 2 (you can take out 2 and 4)
*/

/*
Solution:

We should use our chances of taking out m items wisely.
We should delete the maximum number of unique keys using m chances of taking out items.

*/

const minUniqueIds = (ids, m) => {
  let map = new Map();
  for (let i = 0; i < ids.length; i++) {
    map.set(ids[i], map.get(ids[i]) + 1 || 1);
  }
  // entry in m: (id, # of occurrences)
  let entries = Array.from(map.entries());
  let numOfUniqueIds = map.size;
  entries.sort((a, b) => a[1] - b[1]); // Sort the entries in ascending order of occurrence
  for (let i = 0; i < entries.length; i++) {
    let [id, frequency] = entries[i];
    if (frequency <= m) {
      m -= frequency;
      numOfUniqueIds--;
    } else {
      break;
    }
  }
  return numOfUniqueIds;
};

console.log(minUniqueIds([2, 3, 1, 1, 1, 3, 4], 1));
console.log(minUniqueIds([2, 3, 1, 1, 1, 3, 4], 2));
console.log(minUniqueIds([2, 3, 1, 1, 1, 3, 4], 3));
console.log(minUniqueIds([2, 3, 1, 1, 1, 3, 4], 4));
