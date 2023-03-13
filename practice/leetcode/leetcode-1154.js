// Day of the Year
// https://leetcode.com/problems/day-of-the-year/description/

// Tags: Math, String

const months = [31,28,31,30,31,30,31,31,30,31,30,31];
const monthsLeap = [31,29,31,30,31,30,31,31,30,31,30,31];

const dayOfYear = function(date) {
  let res = 0;
  let [year, month, day] = date.split('-');
  if (isLeapYear(+year)) {
      res = monthsLeap.reduce((acc, m, i) => {
          if ((month - 1) > i) acc += m;
          return acc;
      }, 0) + +day;
  } else {
      res = months.reduce((acc, m, i) => {
          if ((month - 1) > i) acc += m;
          return acc;
      }, 0) + +day;
  }
  return res;
};

function isLeapYear (year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}