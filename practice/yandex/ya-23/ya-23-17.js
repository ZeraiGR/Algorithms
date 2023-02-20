// Игра в пьяницу
// В игре в пьяницу карточная колода раздается поровну двум игрокам. Далее они вскрывают по одной верхней карте, и тот, чья карта старше, забирает себе обе вскрытые карты, которые кладутся под низ его колоды. Тот, кто остается без карт – проигрывает. Для простоты будем считать, что все карты различны по номиналу, а также, что самая младшая карта побеждает самую старшую карту ("шестерка берет туза"). Игрок, который забирает себе карты, сначала кладет под низ своей колоды карту первого игрока, затем карту второго игрока (то есть карта второго игрока оказывается внизу колоды). Напишите программу, которая моделирует игру в пьяницу и определяет, кто выигрывает. В игре участвует 10 карт, имеющих значения от 0 до 9, большая карта побеждает меньшую, карта со значением 0 побеждает карту 9.

// Формат ввода
// Программа получает на вход две строки: первая строка содержит 5 чисел, разделенных пробелами — номера карт первого игрока, вторая – аналогично 5 карт второго игрока. Карты перечислены сверху вниз, то есть каждая строка начинается с той карты, которая будет открыта первой.

// Формат вывода
// Программа должна определить, кто выигрывает при данной раздаче, и вывести слово first или second, после чего вывести количество ходов, сделанных до выигрыша. Если на протяжении 10^6 ходов игра не заканчивается, программа должна вывести слово botva.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

let [deck1, deck2] = fileContent.trim().split('\n').map(d => d.trim().split(' ').map(n => +n));

let i = 0;

while (deck1.length > 0 && deck2.length > 0 && i < 100000) {
  let card1 = deck1.shift(); 
  let card2 = deck2.shift();

  if (card1 === 9 && card2 === 0) {
    deck2.push(card1, card2);
  } else if (card1 === 0 && card2 === 9) {
    deck1.push(card1, card2);
  } else if (card1 > card2) {
    deck1.push(card1, card2);
  } else {
    deck2.push(card1, card2);
  }

  i++;
}

let res;

if (i === 100000) {
  res = 'botva';
} else {
  if (!deck1.length) {
    res = `second ${i}`;
  } else {
    res = `first ${i}`;
  }
}

fs.writeFileSync("output.txt", res);