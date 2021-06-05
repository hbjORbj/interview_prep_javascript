/*
Count Number of Teams

There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers amongst them under the following rules:

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).
*/

/*
Stringtly increasing subsequence of size 3 or 
Strictly decreasing subsequence of size 3 is a valid team.
We need to find all such subsequences.
*/
var numTeams = function (rating) {
  // dp1[i] = number of elements less than rating[i] in rating[0...i-1]
  // dp2[i] = number of elements greater than rating[i] in rating[0...i-1]
  let dp1 = new Array(rating.length).fill(0);
  let dp2 = new Array(rating.length).fill(0);
  let count = 0;
  for (let i = 0; i < rating.length; i++) {
    for (let j = 0; j < i; j++) {
      if (rating[j] < rating[i]) {
        dp1[i]++;
        // dp1[j] is the number of elements less than a number, which is less than current number
        // so, if dp1[j] is 1, (lets's say, some number x), then we have a team of (x, rating[j], rating[i])
        // if dp1[j] is 2, (let's say, some number x and y), then we have a team of
        // (x, rating[j], rating[i]) and (y, rating[j], rating[i])
        count += dp1[j];
      }
      if (rating[j] > rating[i]) {
        dp2[i]++;
        count += dp2[j];
      }
    }
  }
  return count;
  // T.C: O(N^2)
  // S.C: O(N)
};
