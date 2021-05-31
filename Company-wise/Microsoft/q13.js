/*
Meeting Rooms

Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
*/

/*
1. Sort the array in ascending order of start times
2. If start time of current meeting is greater than or equal to end time of previous
meeting, we can attend the current meeting. Else, we can't.
*/
var canAttendMeetings = function (intervals) {
  if (intervals.length === 0) {
    return true;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }
  return true;
  // T.C: O(Nlog(N))
  // S.C: O(1)
};
