// Два указателя
import { assert } from "../../../tester.js";

// Игрок в футбол обладает одной числовой характеристикой -
// профессионализмом. Команда называется сплоченной, если
// профессионализм любого игрока не превосходит суммарный
// профессионализм любых двух других игроков из команды.
// Команда может состоять из любого количества игроков.
// Дана отсортированная последовательность чисел длиной N -
// профессионализм игроков.

// Необходимо найти максимальный суммарный профессионализм
// сплоченной команды.

function bestTeamSum (players) {
	players.sort((a,b) => a-b);
	let bestsum = 0,
	nowsum = 0,
	last = 0;
	for (let first = 0; first <= players.length; first++) {
		while (last < players.length && (last === first || players[first] + players[first + 1] >= players[last])) {
			nowsum += players[last];
			last += 1;
		}
		bestsum = Math.max(bestsum, nowsum);
		nowsum -= players[first];
	}
	return bestsum;
}

assert(1, bestTeamSum([1,1,2,3,4,6,7,11]), 24);
