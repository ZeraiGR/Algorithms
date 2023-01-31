// Узник замка Иф

// За многие годы заточения узник замка Иф проделал в стене
// прямоугольное отверстие размером D * E. Замок Иф сложен из кирпичей,
// Размером A * B * С. Определите, сможет ли узник выбрасывать кирпичи в
// море через это отверстие, если стороны кирпича должны быть параллельны
// сторонам отверстия.

const fs = require('fs');

let fileContent = fs.readFileSync("input.txt", {encoding: 'utf-8'} );

const [a,b,c,d,e] = fileContent.replace(/\s+/g, ' ').trim().split(' ').map(n => +n);

let [A,B,C] = [a,b,c].sort((a,b) => a-b);
let max = Math.max(d,e);
let min = Math.min(d,e);
let res = null;

if (min >= A && max >= B) {	
	res = true;
} else {
	res = false;
}

fs.writeFileSync("output.txt", res.toString());