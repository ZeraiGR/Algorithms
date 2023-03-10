// На Новом проспекте построили подряд 10 зданий. Каждое здание может быть либо жилым домом, либо магазином, либо офисным зданием.

// Но оказалось, что жителям некоторых домов на Новом проспекте слишком далеко приходится идти до ближайшего магазина. Для разработки плана развития общественного транспорта на Новом проспекте мэр города попросил вас выяснить, какое же наибольшее расстояние приходится преодолевать жителям Нового проспекта, чтобы дойти от своего дома до ближайшего магазина.

// Формат ввода
// Программа получает на вход десять чисел, разделенных пробелами. Каждое число задает тип здания на Новом проспекте: число 1 обозначает жилой дом, число 2 обозначает магазин, число 0 обозначает офисное здание. Гарантируется, что на Новом проспекте есть хотя бы один жилой дом и хотя бы один магазин.

// Формат вывода
// Выведите одно целое число: наибольшее расстояние от дома до ближайшего к нему магазина. Расстояние между двумя соседними домами считается равным 1 (то есть если два дома стоят рядом, то между ними расстояние 1, если между двумя домами есть еще один дом, то расстояние между ними равно 2 и т.д.)

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

const seq = fileContent.replace(/\s+/g, ' ').trim().split(' ').map(n => +n);

let shops = [];
for (let i = 0; i < seq.length; i++) {
	if (seq[i] === 2) shops.push(i);
}

let resArr = [];
for (let i = 0; i < seq.length; i++) {
	if (seq[i] === 1) {
		let min = Infinity;
		for (const j of shops) {
			if (Math.abs(i - j) < min) {
				min = Math.abs(i - j);
			}
		}
		resArr.push(min);
	}
}

const res = Math.max(...resArr);

fs.writeFileSync("output.txt", res.toString())

// Another way to solve

// let shoppos = -Infinity;
// let left = new Array(seq.length).fill(0);
// for (let i = 0; i < seq.length; i++) {
// 	if (seq[i] === 2) shoppos = i;
// 	if (seq[i] === 1) left[i] = i - shoppos;
// }
// let ans = 0;
// shoppos = Infinity;
// for(let i = seq.length - 1; i <= 0; --i) {
// 	if (seq[i] === 2) shoppos = i;
// 	if (seq[i] === 1) {
// 		let mindist = Math.min(shoppos - i, left[i]);
// 		ans = Math.max(ans, mindist);
// 	}
// }