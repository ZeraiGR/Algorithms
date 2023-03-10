// В этом году Иван заканчивает школу и поступает в вуз. За время своей учебы он часто участвовал в олимпиадах по информатике и у него накопилось много дипломов. Иван раскладывал дипломы по папкам совершенно бессистемно, то есть любой диплом мог оказаться в любой из папок. К счастью, Иван помнит, сколько дипломов лежит в каждой из папок.

// Иван хочет принести в приемную комиссию выбранного вуза папку, в которой находится диплом Московской олимпиады по программированию (такой диплом у Ивана ровно один). Для того чтобы понять, что в данной папке нужного диплома нет, Ивану нужно просмотреть все дипломы из этой папки. Просмотр одного диплома занимает у него ровно одну секунду и он может мгновенно переходить к просмотру следующей папки после окончания просмотра предыдущей. Порядок просмотра папок Иван может выбирать.

// По заданному количеству дипломов в каждой из папок требуется определить, за какое наименьшее время в худшем случае Иван поймет, в какой папке содержится нужный ему диплом.

// Формат ввода
// В первой строке входного файла записано целое число N (1 ≤ N ≤ 100) - количество папок. Во второй строке записаны N целых чисел a1, a2, ..., aN (1 ≤ ai ≤ 100) - количество дипломов в каждой из папок.

// Формат вывода
// Выведите одно число - минимальное количество секунд, необходимое Ивану в худшем случае для определения того, в какой папке содержится диплом.

const fs = require('fs');
let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );
const [_, ...counter] = fileContent.replace(/\s+/g, ' ').trim().split(' ').map(n => +n);

const maxFolderSize = Math.max(...counter);
const totalSize = counter.reduce((a,b) => a + b, 0);
let res = totalSize - maxFolderSize;

fs.writeFileSync("output.txt", res.toString());