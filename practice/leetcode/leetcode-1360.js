// Number of Days Between Two Dates
// https://leetcode.com/problems/number-of-days-between-two-dates/

// Tags: Math, String

const daysBetweenDates = function(date1, date2) {
    return Math.abs(f(date1) - f(date2));
};

const months = [31,28,31,30,31,30,31,31,30,31,30,31];
const monthsLeap = [31,29,31,30,31,30,31,31,30,31,30,31];

function f(date) {
    let res = 0;
    let [year, month, day] = date.split('-').map(n => +n);
    for (let i = 1900; i < year; i++) {
        if (leapYear(i)) {
            res += 366
        } else {
            res += 365
        }
    }
    for (let i = 0; i < month - 1; i++) {
        if (leapYear(year)) {
            res += monthsLeap[i];
        } else {
            res += months[i];
        }
    }
    res += day;
    return res;
}

function leapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}