// Сортировка событий

// На парковке в торговом центре N мест (занумерованных от 1 до N).
// За день в ТЦ приезжало M автомобилей, при этом некоторые из них
// длинные и занимали несколько подряд идущих парковочных мест.
// Для каждого автомобиля известно время приезда и отъезда, а также
// два числа - с какого по какое парковочное места он занимал.
// Если в какой-то момент времени один автомобиль уехал
// с парковочного места, то место считается освободившимся
// и в тот же момент времени на его место может встать другой.

// Необходимо определить, был ли момент, в который были заняты все
// парковочные места и определить минимальное количество автомобилей,
// которое заняло все места, а также номера этих автомобилей
// (в том порядке, как они перечисляются в списке). Если парковка
// никогда не была занята полностью вернуть пустой список.

// Решение (неэффективное)
// Добавим в событие номер автомобиля в списке. При обновлении
// минимума просто копируем текущее состояние в ответ.

function minCarsSonFullParking (cars, n) {
	let events = [];
	for (let i = 0; i < cars.length; i++) {
		let [timein, timeout, placefrom, placeto] = cars[i];
		// -1 (маркер для события о том, что машина уехала с парковки)
		// 1 (маркер для события о том, что машина приехала на парковку)
		events.push([timein, 1, placeto - placefrom + 1, i]);
		events.push([timeout, -1, placeto - placefrom + 1, i]);
	}
	events.sort();
	let occuoied = 0;
	let nowcars = 0;
	let mincars = cars.length + 1;
	let carNums = new Set();
	let bestcarNums = new Set();
	for (let i = 0; i < events.length; i++) {
		if (events[i][1] === -1) {
			occuoied -= events[i][2];
			nowcars -= 1;
			carNums.delete(events[i][3]);
		} else if (events[i][1] === 1) {
			occuoied += events[i][2];
			nowcars += 1;
			carNums.add(events[i][3]);
		}
		if (occuoied === n && nowcars < mincars) {
			bestcarNums = new Set([...carNums.values()]);
			mincars = nowcars;
		}
	}
	return bestcarNums;
}

// Решение (эффективное)

function minCarsSonFullParking2 (cars, n) {
	let events = [];
	for (let i = 0; i < cars.length; i++) {
		let [timein, timeout, placefrom, placeto] = cars[i];
		// -1 (маркер для события о том, что машина уехала с парковки)
		// 1 (маркер для события о том, что машина приехала на парковку)
		events.push([timein, 1, placeto - placefrom + 1, i]);
		events.push([timeout, -1, placeto - placefrom + 1, i]);
	}
	events.sort();
	let occuoied = 0;
	let nowcars = 0;
	let mincars = cars.length + 1;
	for (let i = 0; i < events.length; i++) {
		if (events[i][1] === -1) {
			occuoied -= events[i][2];
			nowcars -= 1;
		} else if (events[i][1] === 1) {
			occuoied += events[i][2];
			nowcars += 1;
		}
		if (occuoied === n && nowcars < mincars) {
			mincars = nowcars;
		}
	}
	let carNums = new Set();
	nowcars = 0;
	for (let i = 0; i < events.length; i++) {
		if (events[i][1] === -1) {
			occuoied -= events[i][2];
			nowcars -= 1;
			carNums.delete(events[i][3]);
		} else if (events[i][1] === 1) {
			occuoied += events[i][2];
			nowcars += 1;
			carNums.add(events[i][3]);
		}
		if (occuoied === n && nowcars === mincars) {
			return carNums;
		}
	}
	return new Set();
}