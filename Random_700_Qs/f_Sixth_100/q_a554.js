/*
Russian Doll Envelopes

You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

Note: You cannot rotate an envelope.
*/

var maxEnvelopes = function (envelopes) {
  if (envelopes === null || envelopes.length === 0) {
    return 0;
  }
  // dp[i] is the max # of envelopes you can Russian doll with envelopes[i] as the outer-most envelope
  let dp = new Array(envelopes.length);

  // We sort envelopes in ascending order of length (or width) because we want to
  // encounter envelopes with greater length (or width) as late as possible in order to
  // contain all smaller envelopes
  envelopes.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < envelopes.length; i++) {
    // initial max number of envelope is 1
    let max = 1;
    for (let j = 0; j < i; j++) {
      if (
        envelopes[j][0] < envelopes[i][0] &&
        envelopes[j][1] < envelopes[i][1]
      ) {
        // the current envelope becomes the outer-most envelope
        max = Math.max(max, dp[j] + 1);
      }
    }
    dp[i] = max;
  }
  return Math.max(...dp);
  // T.C: O(N^2)
  // S.C: O(N)
};
