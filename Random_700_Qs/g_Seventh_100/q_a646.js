/*
Twilio | Validate parentheses with self closing symbols

Question Link: https://leetcode.com/discuss/interview-question/347178/Twilio-or-Validate-parentheses-with-self-closing-symbols/

Validate parentheses, possible values are: [ , ], <, > and self closing pipe |

There can be any number of characters in between, we should skip them during analysis.
*/

function validatePars(s) {
  let stack = [];
  let selfPar = 0;
  s = s.replace(/[^\[\]\<\>\|]/g, "");
  for (let char of s) {
    if (char === "[") stack.push("]");
    else if (char === "<") stack.push(">");
    else if (char === "|" && selfPar === 0) {
      stack.push("|");
      selfPar++;
    }
    // closing par encountered
    else {
      if (stack.length === 0) return false;
      let popped = stack.pop();
      if (char !== popped) return false;
      if (popped === "|") selfPar--;
    }
  }
  // stack might contain open pars that couldn't find its pair
  return stack.length === 0;
  // T.C: O(N)
  // S.C: O(N)
}

// invalid cases
console.log(validatePars("[abc|cde]"));
console.log(validatePars("]nn|"));
console.log(validatePars("><"));
console.log(validatePars(">||<"));
console.log(validatePars("|||"));
console.log(validatePars("[...|...]|"));
console.log(validatePars("|<|[<>]|>|"));

// valid cases
console.log(validatePars("|this is valid|"));
console.log(validatePars("|[also valid]|"));
console.log(validatePars("<||>"));
console.log(validatePars("|[[]]|"));
console.log(validatePars("|[v<a<l>i>d]|"));
