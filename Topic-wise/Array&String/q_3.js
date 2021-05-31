/*
You have to basically get the frequency of a token in a message.

But the message is split into multiple chunks for optimization.

public int getFrequency(String token, List<String> chunks) {
	// Write the function to return frequency of token
}
Note : You can't join the chunks for solution

Example 1:
Input: token = "foo", chunks = ["foo bar", "foo_fizz bar foo food"]
Output: 3
Explanation: 1 for 1st chunk 2 for the 2nd chunk. We have to split by the nonalphanumeric characters for tokens. 
Also complete token is needed, not substring.

Example 2:
Input: token = "expanse", chunks: ["abc exp", "anse"]
Output: 1
Explanation: The first chunk and 2nd chunk joined give 1 instance
We need to provide optimal solution keeping in mind massive amount of chunks.
*/

function findTokens(token, chunks) {
  let count = 0;
  let word = "";
  chunks.forEach((chunk) => {
    // replace all non-alphanumeric characters with white space
    let arr = chunk.replace(/[^0-9a-zA-Z]/g, " ").split(" ");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === token) {
        count += 1;
      }
    }
    if (word !== "" && word + arr[0] === token) count++;
    word = arr[arr.length - 1];
  });
  return count;
  // T.C: O(k*N), where N is the number of words and k is max length of message
  // S.C: O(k)
}

console.log(findTokens("expanse", ["abc exp", "anse"]));
console.log(findTokens("foo", ["foo bar", "foo_fizz bar foo food"]));
