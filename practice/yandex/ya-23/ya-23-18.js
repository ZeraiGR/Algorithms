// Дек с защитой от ошибок
// Научитесь пользоваться стандартной структурой данных deque для целых чисел.  Напишите программу, содержащую описание дека и моделирующую работу дека, реализовав все указанные здесь методы. Программа считывает последовательность команд и в зависимости от команды выполняет ту или иную операцию. После выполнения каждой команды программа должна вывести одну строчку.

// Возможные команды для программы:

// push_front n
// Добавить (положить) в начало дека новый элемент. Программа должна вывести ok.

// push_back n
// Добавить (положить) в конец дека новый элемент. Программа должна вывести ok.

// pop_front
// Извлечь из дека первый элемент. Программа должна вывести его значение.

// pop_back
// Извлечь из дека последний элемент. Программа должна вывести его значение.

// front
// Узнать значение первого элемента (не удаляя его). Программа должна вывести его значение.

// back
// Узнать значение последнего элемента (не удаляя его). Программа должна вывести его значение.

// size
// Вывести количество элементов в деке.

// clear
// Очистить дек (удалить из него все элементы) и вывести ok.

// exit
// Программа должна вывести bye и завершить работу.

// Гарантируется, что количество элементов в деке в любой момент не превосходит 100. Перед исполнением операций pop_front, pop_back, front, back программа должна проверять, содержится ли в деке хотя бы один элемент. Если во входных данных встречается операция pop_front, pop_back, front, back, и при этом дек пуст, то программа должна вместо числового значения вывести строку error.

// Формат ввода
// Вводятся команды управления деком, по одной на строке.

// Формат вывода
// Требуется вывести протокол работы дека, по одному сообщению на строке

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let commands = fileContent.trim().split('\n').map(c => c.trim());

class Queue {
  #data = [];

  push_front(n) {
    this.#data.unshift(n);
    return 'ok';
  }

  push_back(n) {
    this.#data.push(n);
    return 'ok';
  }

  pop_front () {
    if (this.#data.length) {
      return String(this.#data.shift());
    } else {
      return 'error';
    }
  }

  pop_back () {
    if (this.#data.length) {
      return String(this.#data.pop());
    } else {
      return 'error';
    }
  }

  front() {
    if (this.#data.length) {
      return String(this.#data[0]);
    } else {
      return 'error';
    }
  }

  back() {
    if (this.#data.length) {
      return String(this.#data[this.#data.length - 1]);
    } else {
      return 'error';
    }
  }

  size() {
    return String(this.#data.length);
  }

  clear () {
    this.#data = [];
    return 'ok';
  }

  exit () {
    return 'bye';
  }
}

const queue = new Queue();

let res = [];

for (const command of commands) {
  let parsedCommand = command.split(' ');

  if (parsedCommand.length > 1) {
    res.push(queue[parsedCommand[0]](+parsedCommand[1]));
  } else {
    if (command === 'exit') {
      res.push('bye');
      break;
    } else {
      res.push(queue[parsedCommand[0]]());
    }
  }
}

fs.writeFileSync("output.txt", res.join('\n'));