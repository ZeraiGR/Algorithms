// Красивая строка
// Красотой строки назовем максимальное число идущих подряд одинаковых букв. (красота строки abcaabdddettq равна 3)
// Сделайте данную вам строку как можно более красивой, если вы можете сделать не более k операций замены символа.

// Формат ввода
// В первой строке записано одно целое число k (0 ≤ k ≤ 10^9)
// Во второй строке дана непустая строчка S (|S| ≤ 2 ⋅ 10^5). Строчка S состоит только из маленьких латинских букв.

// Формат вывода
// Выведите одно число — максимально возможную красоту строчки, которую можно получить.

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [n, string] = fileContent.trim().split('\n');

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let res = 0;
string = string.split('');

for (const letter of alphabet) {
  let j = 0;
  let k = n;
  let cnt = 0;

  for (let i = 0; i < string.length; i++) {
  	if (i > 0) {
      cnt -= 1;
      if (string[i - 1] !== letter) k += 1;
    }
    while (k > 0 && j < string.length || k === 0 && string[j] === letter && j < string.length) {
      if (string[j] === letter) {
        cnt += 1;
      } else {
        if (k > 0) {
          cnt += 1;
          k -= 1;
        }
      }
      j += 1;
    }
    res = Math.max(res, cnt);
  } 
}

fs.writeFileSync("output.txt", String(res));