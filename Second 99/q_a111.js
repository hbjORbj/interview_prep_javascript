/*
Q: You have a bag of ids and you are allowed to take out m items from the bag. 

Return the minimum number of unique ids in your bag after you take out m items from the bag.

ex) (ids: [2,3,1,1,1,3,4], m: 2) => 2 (you can take out 2 and 4)
*/

function minUniqueIds(ids, m) {
    let map = new Map();
    for (let id of ids) {
        map.set(id, map.get(id)+1 || 1);
    }
    let numOfUniqueIds = map.size;
    let frequencies = Array.from(map.values()).sort((a,b) => a-b);
    let j = 0;
    for (let i = 0; i < m; i++) {
        frequencies[j]--;
        if (frequencies[j] == 0) {
            numOfUniqueIds--;
            j++;
        }
    }
    return numOfUniqueIds;
}

console.log(minUniqueIds([2,3,1,1,1,3,4], 2));
console.log(minUniqueIds([], 2));
console.log(minUniqueIds([2,3], 2));
console.log(minUniqueIds([1,1,1,1,2,2,2,2,2], 3 ));

// [2,3,1,1,1,3,4], 2 => 2
// [], 2 => 0
// [2,3], 2 => 0
// [1,1,1,1,2,2,2,2,2], 3  => 2