/*
Suppose you have a random list of people standing in a queue. 

Each person is described by a pair of integers (h, k), where h is the height of the person and 
k is the number of people in front of this person who have a height greater than or equal to h. 

Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.
*/

var reconstructQueue = function(people) {
    people.sort((a,b) => (a[0] !== b[0]) ? b[0]-a[0] : a[1]-b[1]);
    let res = [];
    for (let i = 0; i < people.length; i++) {
        let insertIdx = people[i][1];
        res.splice(insertIdx, 0, people[i]);
    }
    return res;
    // Time Complexity: O(n^2) due to splice() function
    // Space Complexity: O(1)
};