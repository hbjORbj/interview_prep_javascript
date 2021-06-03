/*
Input is a string of characters that represents a text message. You need to segment this message into chunks of messages each of length 160 characters and add suffix "(1/5)" (representing pagination) at the end of each segmented message (Length of "(1/5)" is included in 160 length limit).

Input: "njdksjfn jdfnds kjfdklsjf jsdofjsd f jdslkjfgdslkngdslkjg fljksdjflsfdsjfdslkfjdslkfmdsklmfgn ljsdglkdsfg d lkjgdslkgjdsljgdslkjgdsfjngds lkjsdlkgjdsgkldsjgsdlkg lkjdslkgjdslkgjdslgmnds glkjgdslkjgdslkjfgodsjfds g,mdsgkjdsngdlsknfgldsjfglkdsjfglkdsjglkdsjglkdsgjdsklgjdslk lkgjdslkgfjdslkgjdslkgjdsljfgdslkgjmdslkg kljghjdslkjgdslkjfg"

Output: ['njdksjfn jdfnds kjfdklsjf jsdofjsd f jdslkjfgdslkngdslkjg fljksdjflsfdsjfdslkfjdslkfmdsklmfgn ljsdglkdsfg d lkjgdslkgjdsljgdslkjgdsfjngds (1/3)', 'lkjsdlkgjdsgkldsjgsdlkg lkjdslkgjdslkgjdslgmnds glkjgdslkjgdslkjfgodsjfds g,mdsgkjdsngdlsknfgldsjfglkdsjfglkdsjglkdsjglkdsgjdsklgjdslk (2/3)', 'lkgjdslkgfjdslkgjdslkgjdsljfgdslkgjmdslkg kljghjdslkjgdslkjfg(3/3)']

Bonus Points: Pass the large test cases of question 3 without using split() function.
*/

function breakMessage(message) {
  let res = [];
  if (message.length < 160) {
    res.push(message);
    return res;
  }
  let start = 0,
    end = start + 154;
  while (end < message.length) {
    // we need this condition: message[end+1] !== " "
    // because that's how we check if we are in the middle of a word
    // if message[end+1] is space, we are at the end character of a word
    // in such case, we do not want to decrement end
    while (start <= end && message[end] !== " " && message[end + 1] !== " ") {
      end--;
    }
    res.push(message.substring(start, end + 1));
    start = end + 1;
    end = start + 154;
  }
  res.push(message.substring(start, message.length));
  for (let i = 1; i <= res.length; i++) {
    res[i - 1] = res[i - 1] + "(" + i + "/" + res.length + ")";
  }
  return res;
  // T.C: O(N), N = length of message
  // S.C: O(N), new strings due to substring()
}
