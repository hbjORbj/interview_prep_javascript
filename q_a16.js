/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. 
Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. 
You should minimize the number of calls to the API.
*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
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
        let l = 1, r = n, mid;
        while (l < r) {
            mid = Math.floor((l+r)/2);
            if (isBadVersion(mid)) r = mid;
            else l = mid+1;
        }
        return l;
    };
};

/*
Test Cases: 5, [1,2,3,4,5] => if (2,3,4,5 Bad), return 2

Idea:
We can use binary search here because we can consider the versions array to be sorted.
It will always be in the form (good, ..., good, bad, ..., bad).
So, if median is bad version, we will search the left half including the median since the median could be the
first bad version, and if median is not bad version, we will search the right half excluding the median.
We repeat this process until two pointers l and r become the same.

Time Complexity: O(log(n))
Space Complexity: O(1)

Category: Binary Search
*/