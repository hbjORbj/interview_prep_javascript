var countCharacters = function (words, chars) {
  if (words.length === 0 || chars.length === 0) {
    return 0;
  }
  let arr = new Array(26).fill(0);
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    let idx = chars.charCodeAt(i) - 97;
    arr[idx] += 1;
  }
  for (let i = 0; i < words.length; i++) {
    let isGood = true;
    for (let j = 0; j < words[i].length; j++) {
      let idx = words[i].charCodeAt(j) - 97;
      if (arr[idx] === 0) {
        isGood = false;
      }
      arr[idx]--;
    }
    if (isGood) count += words[i].length;
    for (let j = 0; j < words[i].length; j++) {
      let idx = words[i].charCodeAt(j) - 97;
      arr[idx]++;
    }
  }
  return count;
  // T.C: O(2N + M) = O(N + M), N = # of all characters in `words` array, M = length of `chars`
  // S.C: O(1)
};
