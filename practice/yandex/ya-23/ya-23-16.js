// Очередь с защитой от ошибок
// Научитесь пользоваться стандартной структурой данных queue для целых чисел. Напишите программу, содержащую описание очереди и моделирующую работу очереди, реализовав все указанные здесь методы. 

// Программа считывает последовательность команд и в зависимости от команды выполняет ту или иную операцию. После выполнения каждой команды программа должна вывести одну строчку.

// Возможные команды для программы:

// push n
// Добавить в очередь число n (значение n задается после команды). Программа должна вывести ok.

// pop
// Удалить из очереди первый элемент. Программа должна вывести его значение.

// front
// Программа должна вывести значение первого элемента, не удаляя его из очереди.

// size
// Программа должна вывести количество элементов в очереди.

// clear
// Программа должна очистить очередь и вывести ok.

// exit
// Программа должна вывести bye и завершить работу.

// Перед исполнением операций front и pop программа должна проверять, содержится ли в очереди хотя бы один элемент. Если во входных данных встречается операция front или pop, и при этом очередь пуста, то программа должна вместо числового значения вывести строку error.

// Формат ввода
// Вводятся команды управления очередью, по одной на строке

// Формат вывода
// Требуется вывести протокол работы очереди, по одному сообщению на строке

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let commands = fileContent.trim().split('\n').map(c => c.trim());

class Queue {
  #data = [];

  push(n) {
    this.#data.push(n);
    return 'ok';
  }

  pop () {
    if (this.#data.length) {
      return String(this.#data.shift());
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