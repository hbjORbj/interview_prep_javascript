/*
Validate parentheses but string contains single quotations as well.

Question Link: https://leetcode.com/discuss/interview-question/382856/Bloomberg-or-Phone-Screen-or-Valid-Parentheses
*/
function validatePars2(s) {
  s = s.replace(/[^\{\}\']/g, "");
  let stack = [];
  let quot = 0;
  for (let char of s) {
    if (char === "{") {
      stack.push("}");
    } else if (char === "'" && quot === 0) {
      stack.push("'");
      quot++;
    }
    // closing par encountered
    else {
      if (stack.length === 0) return false;
      let popped = stack.pop();
      if (char !== popped) return false;
      if (popped === "'") quot--;
    }
  }
  // stack might contain open pars or quotations that couldn't find its pair
  return stack.length === 0;
  // T.C: O(N)
  // S.C: O(N)
}
console.log(validatePars2("[asdf]{}"));
console.log(validatePars2("{'}'"));
console.log(validatePars2("{''}"));
console.log(validatePars2("{''}''"));
console.log(validatePars2("'{}'"));
