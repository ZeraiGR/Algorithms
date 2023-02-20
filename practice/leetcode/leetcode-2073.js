// Time Needed to Buy Tickets
// https://leetcode.com/problems/time-needed-to-buy-tickets/

// Tags: Array, Queue, Simulation

const timeRequiredToBuy = function(tickets, k) {
  let time = 0;
  let cnt = tickets[k];

  let rest = tickets.slice(k + 1).filter(n => n > cnt).length;
  
  while (cnt > 0) {
    tickets = tickets.filter(t => t > 0);
    let timeNow = tickets.length;
    tickets = tickets.map(t => t - 1).filter(t => t > 0);
    time += timeNow;
    cnt -= 1;
  }

  time -= rest;

  return time;
};

console.log(timeRequiredToBuy([2,3,2], 2));
console.log(timeRequiredToBuy([5,1,1,1], 0));
console.log(timeRequiredToBuy([84,49,5,24,70,77,87,8], 3));
console.log(timeRequiredToBuy([32,90,5,48,69,21,41,55,32], 2));