/* 

Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.

Пример
class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

метод hasOwnProperty от Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true

Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?

В чем разница?

Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit extends Object {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // Ошибка

*/

// В случае явного наследования от объекта у наследуемой функции появляется доступ к статическим методам Object, таким как getOwnPropertyNames итд.

// Object в данном случае считается как функция-конструктор и её прототип равен Function.prototype

// Цепочка следующая: Object => Function.prototype => Object.prototype => null

class Rabbit extends Object {
  constructor(name) {
    super(); // must have
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') );