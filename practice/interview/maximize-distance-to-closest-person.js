// Maximize Distance to Closest Person

/*

You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

Return that maximum distance to the closest person.

Input: seats = [1,0,0,0,1,0,1]
Output: 2
Explanation: 
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.

Input: seats = [1,0,0,0]
Output: 3
Explanation: 
If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.

Input: seats = [0,1]
Output: 1

*/

const maxDistToClosest = function(seats) {
  let max = 0;
  let count = 0;
  let i = 0;

  if (seats[i] === 0) {
    while (seats[i] === 0) {
      count++;
      i++;
    }

    max = count;
    count = 0;
  }

  for (; i < seats.length; i++) {

    if (i == seats.length - 1 && seats[i] === 0) {
      count++;
      max = Math.max(max, count);
      break;
    }

    if (seats[i] === 1) {
      count = 0;
    } else {
      count++;
      max = Math.max(max, Math.ceil(count / 2));
    }

  }

  return max;
};