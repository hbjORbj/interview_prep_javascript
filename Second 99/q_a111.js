/*
Q: You have a bag of ids and you are allowed to take out m items from the bag. 

Return the minimum number of unique ids in your bag after you take out m items from the bag.

ex) (ids: [2,3,1,1,1,3,4], m: 2) => 2 (you can take out 2 and 4)
*/

function minUniqueIds(ids, m) {
    if (ids.length == 0) return 0;
    let map = new Map();
    for (let id of ids) {
        map.set(id, map.get(id)+1 || 1);
    }
    let numOfUniqueIds = map.size;
    let frequencies = Array.from(map.values()).sort((a,b) => a-b);
    let i = 0;
    while (m > 0 && i < frequencies.length) { // runs n (length of ids) times in the worst case
        if (frequencies[i] > m) {
            break;
        }
        m -= frequencies[i++];
        numOfUniqueIds--;
    }
    return numOfUniqueIds;
}
// Time Complexity: O(nlog(n))
// Space Complexity: O(n)
console.log(minUniqueIds([2,3,1,1,1,3,4], 2));
console.log(minUniqueIds([], 2));
console.log(minUniqueIds([2,3], 2));
console.log(minUniqueIds([1,1,1,1,2,2,2,2,2], 3 ));
console.log(minUniqueIds([1,1,1,1,2,2,2,2,2], 7 ));
console.log(minUniqueIds([2,3], 100));

// [2,3,1,1,1,3,4], 2 => 2
// [], 2 => 0
// [2,3], 2 => 0
// [1,1,1,1,2,2,2,2,2], 3  => 2
// [1,1,1,1,2,2,2,2,2], 7 => 1
// [2,3], 100 => 0