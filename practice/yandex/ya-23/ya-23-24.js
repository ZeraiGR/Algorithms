// Покупка билетов
// За билетами на премьеру нового мюзикла выстроилась очередь из N человек, каждый из которых хочет купить 1 билет. На всю очередь работала только одна касса, поэтому продажа билетов шла очень медленно, приводя «постояльцев» очереди в отчаяние. Самые сообразительные быстро заметили, что, как правило, несколько билетов в одни руки кассир продаёт быстрее, чем когда эти же билеты продаются по одному. Поэтому они предложили нескольким подряд стоящим людям отдавать деньги первому из них, чтобы он купил билеты на всех.

// Однако для борьбы со спекулянтами кассир продавала не более 3-х билетов в одни руки, поэтому договориться таким образом между собой могли лишь 2 или 3 подряд стоящих человека.

// Известно, что на продажу i-му человеку из очереди одного билета кассир тратит Ai секунд, на продажу двух билетов — Bi секунд, трех билетов — Ci секунд. Напишите программу, которая подсчитает минимальное время, за которое могли быть обслужены все покупатели.

// Обратите внимание, что билеты на группу объединившихся людей всегда покупает первый из них. Также никто в целях ускорения не покупает лишних билетов (то есть билетов, которые никому не нужны).

// Формат ввода
// На вход программы поступает сначала число N — количество покупателей в очереди (1 ≤ N ≤ 5000). Далее идет N троек натуральных чисел Ai, Bi, Ci. Каждое из этих чисел не превышает 3600. Люди в очереди нумеруются, начиная от кассы.

// Формат вывода
// Требуется вывести одно число — минимальное время в секундах, за которое могли быть обслужены все покупатели.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [n, ...times] = fileContent.trim().split('\n');
let dp = [0, 0, 0];
let arrA = [Infinity, Infinity, Infinity];
let arrB = [Infinity, Infinity, Infinity];
let arrC = [Infinity, Infinity, Infinity];

for (let time of times) {
  time = time.split(' ').map(n => +n);
  let [a, b, c] = time;
  arrA.push(a);
  arrB.push(b);
  arrC.push(c);
}

for (let i = 0; i < n; i++) {
  dp[i+3] = Math.min(dp[i+2] + arrA[i+3], dp[i+1] + arrB[i+2], dp[i] + arrC[i+1]);
}

let res = dp[dp.length -1];

fs.writeFileSync("output.txt", String(res));