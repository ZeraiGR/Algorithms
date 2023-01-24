// Дана строка (в кодировке UTF-8) - (1 112 064 позиций)
// Найти самый часто встречающийся в ней символ.
// Если несколько символов встречаются одинаково
// часто, то можно вывести любой.

// my solution O(3N) = O(N)
function findMostFrequentSymbol1 (str) {
	if (!str.length) return null;
	const stats = {};

	for (const l of str) {
		if (stats[l]) {
			stats[l]++;
		} else {
			stats[l] = 1;
		}
	}
	
	return Object.entries(stats).sort((a, b) => b[1] - a[1])[0][0];
}

// solution #1 (O^2)
function findMostFrequentSymbol2 (str) {
	let ans = null;
	anscnt = 0;
	for (const i of str) {
		nowcnt = 0;
		for (const j of str) {
			if (i === j) {
				nowcnt++;
			}
		}
		if (nowcnt > anscnt) {
			ans = i;
			anscnt = nowcnt;
		}
	}
	return ans;
}

// solution #2 O(N*K)
// Переберём все символы, встречающиеся в строке, а затем переберём
// все позиции и в случае совпадения прибавим к счётчику единицу.
// Найдём максимальное значение счётчика.
function findMostFrequentSymbol3 (str) {
	let ans = null;
	let anscnt = 0;
	let set = Array.from(new Set(str));
	for (const i of set) {
		let nowcnt = 0;
		for (const j of str) {
			if (i === j) nowcnt++;
		}
		if (nowcnt > anscnt) {
			ans = i; 
			anscnt = nowcnt;
		}
	}
	return ans;
}

// solution #3 O(N+K) -> O(N)
// Заведём словарь, где ключём является символ, а значением - сколько
// раз он встретился. Если символ встретился впервые - создаём
// элемент словаря с ключом, совпадающим с этим символом
// и значением ноль. Прибавляем к элементу словаря с ключом,
// совпадающим с этим символом, единицу
function findMostFrequentSymbol4 (str) {
	let ans = null;
	let anscnt = 0;
	const dct = {};
	for (const now of str) {
		if (!(now in dct)) dct[now] = 0;
		dct[now] += 1;
	}
	for (const key in dct) {
		if (dct[key] > anscnt) {
			anscnt = dct[key];
			ans = key;
		}
	}
	return ans;
}

console.log('1: ', findMostFrequentSymbol1('ababa')); // a
console.log('1: ', findMostFrequentSymbol1('')); // null
console.log('1: ', findMostFrequentSymbol1('fhirhgkrtgrkeghjklrshgtre')); // r

console.log('2: ', findMostFrequentSymbol2('ababa')); // a
console.log('2: ', findMostFrequentSymbol2('')); // null
console.log('2: ', findMostFrequentSymbol2('fhirhgkrtgrkeghjklrshgtre')); // r

console.log('3: ', findMostFrequentSymbol3('ababa')); // a
console.log('3: ', findMostFrequentSymbol3('')); // null
console.log('3: ', findMostFrequentSymbol3('fhirhgkrtgrkeghjklrshgtre')); // r

console.log('4: ', findMostFrequentSymbol4('ababa')); // a
console.log('4: ', findMostFrequentSymbol4('')); // null
console.log('4: ', findMostFrequentSymbol4('fhirhgkrtgrkeghjklrshgtre')); // r