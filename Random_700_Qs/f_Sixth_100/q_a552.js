/*
Binary Watch

A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.

For example, the below binary watch reads "4:51".

Given an integer turnedOn which represents the number of LEDs that are currently on, return all possible times the watch could represent. You may return the answer in any order.

The hour must not contain a leading zero.

For example, "01:00" is not valid. It should be "1:00".
The minute must be consist of two digits and may contain a leading zero.

For example, "10:2" is not valid. It should be "10:02".
 */

/*
Use DFS to get possible combinations of hours and minutes separately given a particular number of buttons and get combinations of these hours and minutes

It is important to consider constraints; for example, sum of minutes shouldn't exceed 59 and sum of hours shouldn't exceed 11
*/
var readBinaryWatch = function (turnedOn) {
  // hour buttons turned on - maximum: 3, minimum: 0
  // minute buttons turned on - maximum: 5, minimum: 0
  if (turnedOn > 8) {
    return [];
  }
  let hours = [1, 2, 4, 8];
  let minutes = [1, 2, 4, 8, 16, 32];
  let res = [];
  for (let i = 0; i <= turnedOn; i++) {
    let hourButtons = i;
    let minuteButtons = turnedOn - i;
    let possibleHours = [],
      possibleMinutes = [];
    dfs(0, hours, hourButtons, 0, possibleHours, 0);
    dfs(0, minutes, minuteButtons, 0, possibleMinutes, 0);
    for (let i = 0; i < possibleHours.length; i++) {
      for (let j = 0; j < possibleMinutes.length; j++) {
        res.push(possibleHours[i] + possibleMinutes[j]);
      }
    }
  }
  return res;
};

const dfs = (sum, nodes, k, depth, res, startIdx) => {
  if (nodes.length === 4 && k > 3) {
    return;
  }
  if (nodes.length === 6 && k > 5) {
    return;
  }
  if (depth === k) {
    if (nodes.length === 4 && sum < 12) {
      res.push(sum + ":");
    } else if (nodes.length === 6 && sum < 60) {
      sum < 10 ? res.push("0" + sum) : res.push("" + sum);
    }
    return;
  }
  for (let i = startIdx; i < nodes.length; i++) {
    dfs(sum + nodes[i], nodes, k, depth + 1, res, i + 1);
  }
};
