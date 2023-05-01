/*

Соедините типизированные массивы

Дан массив из типизированных массивов Uint8Array. Напишите функцию concat(arrays), которая объединяет эти массивы в один типизированный массив и возвращает его.

*/

const arr = [
  new Uint8Array([1,2,3,4]), 
  new Uint8Array([4,5,6,7]), 
  new Uint8Array([8,9,10,11])
];

function concat (arrays) {
  return new Uint8Array(arrays.flatMap(arr => Array.from(arr)));
}

console.log(concat(arr));