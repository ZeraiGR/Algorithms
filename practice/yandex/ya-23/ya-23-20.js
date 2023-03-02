// Пирамидальная сортировка
// Отсортируйте данный массив. Используйте пирамидальную сортировку.

// Формат ввода
// Первая строка входных данных содержит количество элементов в массиве N, N ≤ 10^5. Далее задаются N целых чисел, не превосходящих по абсолютной величине 10^9.

// Формат вывода
// Выведите эти числа в порядке неубывания.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [n, arr] = fileContent.trim().split('\n');

arr = arr.split(' ').map(n => +n);

class Heap {
  constructor(array) {
    this.heap = [0];
    this.sorted = [];
    while (array.length > 0) {
      this.add(array.pop());
    }
  }
  add (value) {
    this.heap.push(value);
    let index = this.heap.length - 1;
    while (index > 1 && this.heap[index] < this.heap[Math.trunc(index / 2)]) {
      let tmp = this.heap[index];
      this.heap[index] = this.heap[Math.trunc(index / 2)];
      this.heap[Math.trunc(index / 2)] = tmp;
      index = Math.trunc(index / 2);
    }
  }
  delete(i) {
    if (this.heap.length > 2) {
      let value = this.heap[i];
      this.heap[i] = this.heap.pop();
      let k = i;
      let n = this.heap.length - 1;
      while (k * 2 <= n) {
        let min_element = k * 2;
        if (min_element + 1 <= n && this.heap[min_element] > this.heap[min_element + 1]) {
          min_element += 1;
        }
        if (this.heap[k] > this.heap[min_element]) {
          let tmp = this.heap[k];
          this.heap[k] = this.heap[min_element];
          this.heap[min_element] = tmp;
        }
        k = min_element;
      }
      return value;
    } else if (this.heap.length === 2) {
      return this.heap.pop();
    } else {
      return null;
    }
  }
  sort () {
    while (this.heap.length > 1) {
      let value = this.delete(1);
      this.sorted.push(value);
    }
    return this.sorted;
  }
}

let heap = new Heap(arr);

let res = heap.sort();

fs.writeFileSync("output.txt", res.join(' '));