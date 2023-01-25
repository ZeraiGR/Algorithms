// Линейный поиск
import { assert } from "../../../tester.js";

// Игра PitCraft происходит в двумерном мире, который состоит
// из блоков размером 1 на 1 метр. Остров игрока представляет
// собой набор столбцов различной высоты, состоящих из блоков
// камня и окруженный морем. Над островом прошёл сильный
// дождь, который заполнил водой все низины, а не поместившаяся
// в них вода стекла в море, не увеличив его уровень

// По ландшафту острова определите, сколько блоков воды осталось
// после дождя в низинах на острове.

function isleflood (h) {
	maxpos = 0;
	for (let i = 0; i < h.length; i++) {
		if (h[i] > h[maxpos]) {
			maxpos = i;
		}
	}
	let ans = 0;
	let nowm = 0;
	for (let i = 0; i < maxpos; i++) {
		if (h[i] > nowm) nowm = h[i];
		ans += nowm - h[i];
	}
	nowm = 0;
	for (let i = h.length - 1; i > maxpos; i--) {
		if (h[i] > nowm) nowm = h[i];
		ans += nowm - h[i];
	}
	return ans;
}