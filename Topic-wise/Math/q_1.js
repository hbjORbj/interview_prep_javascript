/*
Count Unique Characters of All Substrings of a Given String

Let's define a function countUniqueChars(s) that returns the number of unique characters on s, for example if s = "LEETCODE" then "L", "T","C","O","D" are the unique characters since they appear only once in s, therefore countUniqueChars(s) = 5.

On this problem given a string s we need to return the sum of countUniqueChars(t) where t is a substring of s. Notice that some substrings can be repeated so on this case you have to count the repeated ones too.

Since the answer can be very large, return the answer modulo 10 ^ 9 + 7.
*/

/*
Great explanation from `lee215`:

Think about string "XAXAXXAX" and focus on making the second "A" a unique character.
We can take "XA(XAXX)AX" and between "()" is our substring.
We can see here, to make the second "A" counted as a uniq character, we need to:

insert "(" somewhere between the first and second A
insert ")" somewhere between the second and third A
For step 1 we have "A(XA" and "AX(A", 2 possibility.
For step 2 we have "A)XXA", "AX)XA" and "AXX)A", 3 possibilities.

So there are in total 2 * 3 = 6 ways to make the second A a unique character in a substring.
In other words, there are only 6 substring, in which this A contribute 1 point as unique string.

Instead of counting all unique characters and struggling with all possible substrings,
we can count for every char in S, how many ways it can be found as a unique char.
We count and sum, and it will be our answer.
*/

var uniqueLetterString = function (s) {
  if (s === "") {
    return 0;
  }
  // initialise to -1 because array is 0-indexed
  let lastL = new Array(26).fill(-1);
  let lastR = new Array(26).fill(s.length);
  let contribute = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    let idx = s.charCodeAt(i) - 65;
    let lastOccur = lastL[idx];
    // we get the number of chars between current character and
    // last occurrence of current character (assuming we traverse from left)
    // + 1 (current character)
    contribute[i] = i - lastOccur;
    lastL[idx] = i;
  }
  for (let i = s.length - 1; i >= 0; i--) {
    let idx = s.charCodeAt(i) - 65;
    let lastOccur = lastR[idx];
    // we get the number of chars between current character and
    // last occurrence of current character (assuming we traverse from right)
    // + 1 (current character)
    contribute[i] *= lastOccur - i;
    lastR[idx] = i;
  }
  return contribute.reduce((acc, cur) => acc + cur);
  // T.C: O(N)
  // S.C: O(N)
};
