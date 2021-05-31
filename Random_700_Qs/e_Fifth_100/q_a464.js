/*
One Away

There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.

Given two strings, write a function to check if they are one edit (or zero edits) away.

EXAMPLE
pale, ple -> true pales, pale -> true pale, bale -> true pale, bake -> false
*/

const zeroOrOneEditAway = (str1, str2) => {
  if (str1 === null || str2 === null) {
    return false;
  }
  // Zero edit away
  if (str1 === str2) {
    return true;
  }
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  // the condition to check for insert, delete, replace is the same
  // insert: (shorter string + one char == longer string) => all characters equal except one
  // delete: (shorter string == longer string - one char) => all characters equal except one
  // replace: one character difference between same-length two strings => all characters equal except one
  let m = new Map();
  let longer = str1.length > str2.length ? str1 : str2;
  let shorter = str1.length < str2.length ? str1 : str2;
  let diff = 0;
  for (let i = 0; i < longer.length; i++) {
    m.set(longer[i], m.get(longer[i]) + 1 || 1);
  }
  for (let i = 0; i < shorter.length; i++) {
    if (m.has(shorter[i])) {
      m.set(shorter[i], m.get(shorter[i]) - 1);
      common++;
      if (m.get(shorter[i]) === 0) {
        m.delete(shorter[i]);
      }
    } else {
      m.set(shorter[i], 1);
      diff++;
    }
  }
  return (
    (diff === 0 && Math.abs(str1.length - str2.length) === 1) ||
    (diff === 1 && str1.length === str2.length)
  );
};
