/*
Question Link: https://leetcode.com/discuss/interview-question/609179/Twilio-OA-2020
*/
function twilioOA1(codes, numbers) {
  const phone = new Array(26);
  const blocks = new Set();
  let res = new Set();
  for (let i = 0; i < 26; i++) {
    if (i <= 2) phone[i] = 2;
    else if (i <= 5) phone[i] = 3;
    else if (i <= 8) phone[i] = 4;
    else if (i <= 11) phone[i] = 5;
    else if (i <= 14) phone[i] = 6;
    else if (i <= 18) phone[i] = 7;
    else if (i <= 21) phone[i] = 8;
    else if (i <= 25) phone[i] = 9;
  }
  for (let code of codes) {
    code = code.toLowerCase();
    let block = "";
    for (let char of code) {
      let idx = char.charCodeAt() - 97;
      block += phone[idx];
    }
    blocks.add(block);
  }
  for (let number of numbers) {
    for (let block of blocks) {
      if (number.includes(block)) res.add(number);
    }
  }
  res = Array.from(res);
  res.sort((a, b) => a - b);
  return res;
  // T.C: O(Nlog(N) + M*N), M = length of codes, N = length of numbers
  // S.C: O(M + N)
}
