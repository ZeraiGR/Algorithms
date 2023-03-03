// Хипуй

// В этой задаче вам необходимо самостоятельно (не используя соответствующие классы и функции стандартной библиотеки) организовать структуру данных Heap для хранения целых чисел, над которой определены следующие операции: a) Insert(k) – добавить в Heap число k ; b) Extract достать из Heap наибольшее число (удалив его при этом).

// Формат ввода
// В первой строке содержится количество команд N (1 ≤ N ≤ 100000), далее следуют N команд, каждая в своей строке. Команда может иметь формат: “0 <число>” или “1”, обозначающий, соответственно, операции Insert(<число>) и Extract. Гарантируется, что при выполенении команды Extract в структуре находится по крайней мере один элемент.

// Формат вывода
// Для каждой команды извлечения необходимо отдельной строкой вывести число, полученное при выполнении команды Extract.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [n, ...commands] = fileContent.trim().split('\n');

commands = commands.map(c => c.trim().split(' '));

class MaxHeap {
  constructor(){
    this.values = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return (index * 2) + 1;
  }

  rightChild(index) {
      return (index * 2) + 2;
  }

  isLeaf(index) {
    return (
        index >= Math.floor(this.values.length / 2) && index <= this.values.length - 1
    )
  }

  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
  }

  add(element) {
    this.values.push(element);
    this.heapifyUp(this.values.length - 1);
  }

  heapifyUp(index) {
    let currentIndex = index,
        parentIndex = this.parent(currentIndex);

    while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.parent(parentIndex);
    }
  }

  extractMax() {
    if (this.values.length > 1) {
      const max = this.values[0];
      const end = this.values.pop();
      this.values[0] = end;
      this.heapifyDown(0);
      return max;
    } else {
      return this.values.pop();
    }
  }

  heapifyDown(index) {
    if (!this.isLeaf(index)) {
      let leftChildIndex = this.leftChild(index),
          rightChildIndex = this.rightChild(index),

          largestIndex = index;

      if (this.values[leftChildIndex] > this.values[largestIndex]) {
          largestIndex = leftChildIndex;
      }

      if (this.values[rightChildIndex] >= this.values[largestIndex]) {
          largestIndex = rightChildIndex;
      }

      if (largestIndex !== index) {
        this.swap(index, largestIndex);
        this.heapifyDown(largestIndex);
      }
    }
  }
}

let heap = new MaxHeap();
let res = [];

for (const command of commands) {
  if (command.length > 1) {
    heap.add(+command[1]);
  } else {
    res.push(heap.extractMax());
  }
}

fs.writeFileSync("output.txt", res.join('\n'));