/*
Reverse the words in a sentence.

ex) "this is a string" -> "string a is this"

Q. Can I assume that words are separated by a single space?
- Yes.

Solution: 
1. Reverse the entire string.
2. Reverse each word.

* String is an immutable data type in JS so we can't modify in-place unless the given input is an array
* Thus, time complexity and space complexity are both O(n) in this case, but space complexity is O(1) if
* given input is an array of characters
*/

const reverseChars = (startIdx, endIdx, arr) => {
  while (startIdx < endIdx) {
    [arr[startIdx], arr[endIdx]] = [arr[endIdx], arr[startIdx]];
    startIdx++, endIdx--;
  }
};

const reverseWords = (sentence) => {
  if (sentence === null || sentence === "") {
    return sentence;
  }
  const arr = sentence.split("");
  reverseChars(0, arr.length - 1, arr);
  let startIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 === arr.length || arr[i + 1] === " ") {
      reverseChars(startIdx, i, arr);
      startIdx = i + 2;
    }
  }
  return arr.join("");
};

console.log(reverseWords("this is a string"));
