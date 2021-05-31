/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. 

Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. 

You should minimize the number of calls to the API.
*/

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let low = 1, high = n;
        while (low < high) {
            let mid = low + Math.floor((high - low) / 2);
            if (isBadVersion(mid)) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return low; 
        // Explanation:
        // we have reduced the search space until we only have one element left
        // we can return either low or high as they will both point to the element left
        // and this element must be the first bad version as we made sure that our space doesn't include
        // any good version and we also made sure that our space has a bad version
        // Time Complexity: O(log(n)) assuming that isBadVersion() has a time complexity of O(1)
        // Space Complexity: O(1)
    };
};
// Idea:
// we're looking for the left-most bad version
// we will use binary search to approach this
// if mid is good, we search the right half
// if mid is bad, we search the left half but include this index in our search space
// since this could be the left-most bad version