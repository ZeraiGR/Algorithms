// Стек с защитой от ошибок

// Научитесь пользоваться стандартной структурой данных stack для целых чисел. Напишите программу, содержащую описание стека и моделирующую работу стека, реализовав все указанные здесь методы. Программа считывает последовательность команд и в зависимости от команды выполняет ту или иную операцию. После выполнения каждой команды программа должна вывести одну строчку. Возможные команды для программы:

// push n
// Добавить в стек число n (значение n задается после команды). Программа должна вывести ok.

// pop
// Удалить из стека последний элемент. Программа должна вывести его значение.

// back
// Программа должна вывести значение последнего элемента, не удаляя его из стека.

// size
// Программа должна вывести количество элементов в стеке.

// clear
// Программа должна очистить стек и вывести ok.

// exit
// Программа должна вывести bye и завершить работу.

// Перед исполнением операций back и pop программа должна проверять, содержится ли в стеке хотя бы один элемент. Если во входных данных встречается операция back или pop, и при этом стек пуст, то программа должна вместо числового значения вывести строку error.

// Формат ввода
// Вводятся команды управления стеком, по одной на строке

// Формат вывода
// Программа должна вывести протокол работы стека, по одному сообщению на строке

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let commands = fileContent.trim().split('\n').map(c => c.trim());

class Stack {
  #data = [];

  push (n) {
    this.#data.push(n);
    return 'ok';
  }

  pop () {
    if (this.#data.length) {
      return String(this.#data.pop());
    } else {
      return 'error';
    }
  }

  back () {
    if (this.#data.length) {
      return String(this.#data[this.#data.length - 1]);
    } else {
      return 'error';
    }
  }

  size () {
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

const stack = new Stack();

let res = [];

for (const command of commands) {
  let parsedCommand = command.split(' ');

  if (parsedCommand.length > 1) {
    res.push(stack[parsedCommand[0]](+parsedCommand[1]));
  } else {
    if (command === 'exit') {
      res.push('bye');
      break;
    } else {
      res.push(stack[parsedCommand[0]]());
    }
  }
}

fs.writeFileSync("output.txt", res.join('\n'));