// Minimum Number of Moves to Seat Everyone
// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

// Tags: Array, Sorting

const minMovesToSeat = function(seats, students) {
  let res = 0;
  let n = seats.length;
  let _seats = [...seats].sort((a, b) => a - b);
  let _students = [...students].sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    res += Math.abs(_seats[i] - _students[i]);
  }
  return res;
};