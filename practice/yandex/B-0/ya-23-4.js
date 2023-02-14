// Контрольная работа

// Петя и Вася — одноклассники и лучшие друзья, поэтому они во всём помогают друг другу. Завтра у них контрольная по математике, и учитель подготовил целых K вариантов заданий.

// В классе стоит один ряд парт, за каждой из них (кроме, возможно, последней) на контрольной будут сидеть ровно два ученика. Ученики знают, что варианты будут раздаваться строго по порядку: правый относительно учителя ученик первой парты получит вариант 1, левый — вариант 2, правый ученик второй парты получит вариант 3 (если число вариантов больше двух) и т.д. Так как K может быть меньше чем число учеников N, то после варианта K снова выдаётся вариант 1. На последней парте в случае нечётного числа учеников используется только место 1.

// Петя самым первым вошёл в класс и сел на своё любимое место. Вася вошёл следом и хочет получить такой же вариант, что и Петя, при этом сидя к нему как можно ближе. То есть между ними должно оказаться как можно меньше парт, а при наличии двух таких мест с равным расстоянием от Пети Вася сядет позади Пети, а не перед ним. Напишите программу, которая подскажет Васе, какой ряд и какое место (справа или слева от учителя) ему следует выбрать. Если же один и тот же вариант Вася с Петей писать не смогут, то выдайте одно число  - 1.

// Формат ввода
// В первой строке входных данных находится количество учеников в классе 2 ≤ N ≤ 10^9. Во второй строке — количество подготовленных для контрольной вариантов заданий 2 ≤ K ≤ N. В третьей строке — номер ряда, на который уже сел Петя, в четвёртой — цифра 1, если он сел на правое место, и 2, если на левое.

// Формат вывода
// Если Вася никак не сможет писать тот же вариант, что и Петя, то выведите  - 1. Если решение существует, то выведите два числа — номер ряда, на который следует сесть Васе, и 1, если ему надо сесть на правое место, или 2, если на левое. Разрешается использовать только первые N мест в порядке раздачи вариантов.

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [n, k, r, d] = fileContent.trim().split('\n').map(n => +n.trim());

let petyaPlace = r * 2;
if (d % 2 !== 0) {
  petyaPlace = petyaPlace - 1;
} 

let vasyaPlace;
let vasyaPlaceBefore = petyaPlace - k;
let vasyaPlaceAfter = petyaPlace + k;
let ans = [-1];

if (vasyaPlaceBefore > 0 && vasyaPlaceAfter <= n) {
  let tablesBeforeBetween = getTablesBetween(vasyaPlaceBefore, petyaPlace);
  let tablesAfterBetween = getTablesBetween(petyaPlace, vasyaPlaceAfter);

  if (tablesBeforeBetween === tablesAfterBetween) {
    vasyaPlace = vasyaPlaceAfter;
  } else if (tablesBeforeBetween < tablesAfterBetween) {
    vasyaPlace = vasyaPlaceBefore;
  } else {
    vasyaPlace = vasyaPlaceAfter;
  }
} else if (vasyaPlaceBefore > 0 && vasyaPlaceAfter > n) {
  vasyaPlace = vasyaPlaceBefore;
} else if (vasyaPlaceBefore <= 0 && vasyaPlaceAfter <= n) {
  vasyaPlace = vasyaPlaceAfter;
} else {
  vasyaPlace = null;
}

if (vasyaPlace) {
  let vasyaRow = Math.ceil(vasyaPlace / 2);
  let vasyaSide = (vasyaPlace / 2) % 1 !== 0 ? 1 : 2;
  ans = [vasyaRow, vasyaSide];
}

function getTablesBetween (start, end) {
  if (start % 2 !== 0) start += 1;
  if (end % 2 === 0) end -= 1;
  return (end - 1 - start) / 2;
}

fs.writeFileSync("output.txt", ans.join(' '));