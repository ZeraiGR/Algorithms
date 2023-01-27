// Наше собственное множество

// x % setsize - хеш-функция
// myset - хеш-таблица
// Совпадение значений хеш-функции для разных параметров - коллизия

class Lots {
	setsize = 10;
	myset = [];

	constructor(size = 10) {
		this.setsize = size;
		this.create(this.setsize);
	}

	show() {
		console.log(this.myset);
	}

	create(x) {
		for (let i = 0; i < x; i++) {
			this.myset[i] = new Array();
		}
	}

	add(x) {
		if (!this.find(x)) {
			this.myset[x % this.setsize].push(x);
		}
	}

	find(x) {
		for (const now of this.myset[x % this.setsize]) {
			if (now === x) return true;
		}
		return false;
	}

	delete(x) {
		let xlist = this.myset[x % this.setsize];
		for (let i = 0; i < xlist.length - 1; i++) {
			if (xlist[i] === x) {
				xlist[i] = xlist[xlist.length - 1];
				xlist.pop();
				return;
			}
		}
	}
}

const set = new Lots();

set.add(3);
set.add(27);
set.add(17);
set.add(87);
set.add(87);
set.show();
console.log(set.find(87));
console.log(set.find(20));
set.delete(27);
set.show();
