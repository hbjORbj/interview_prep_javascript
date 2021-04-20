/*
Check if a string is a rotation of another.

ex) 
"canada", "dacana" -> true
"canada", "canada" -> true
"canada", "canary" -> false
*/

const findRotation = (str1, str2) => {
  if (str1 === null || str2 === null || str1.length !== str2.length) {
    return false;
  }
  const concatenatedStr1 = str1.concat(str1);
  return concatenatedStr1.includes(str2);
  // Time Complexity: O(n)
  // Space Complexity: O(2n) = O(n)
};

console.log(findRotation("canada", "dacana"));
console.log(findRotation("canada", "canada"));
console.log(findRotation("canada", "canary"));
