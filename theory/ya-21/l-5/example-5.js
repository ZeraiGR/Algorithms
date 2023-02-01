// Два указателя
import { assert } from "../../../tester.js";

// Даны две отсортированные последовательности чисел
// (длиной N и M соответсвенно)

// Необходимо слить их в одну отсортированную последовательность

// Решение
// Поставим два указателя на начало каждой из последовательностей.
// Выберем тот, который указывает на меньшее число, запишем это
// число в результат и сдвинем указатель

function merge (nums1, nums2) {
	let merged = new Array(nums1.length + nums2.length).fill(0);
	let first1 = 0;
	let first2 = 0;
	let inf = Math.max(nums1[nums1.length - 1], nums2[nums2.length - 1]) + 1;
	nums1.push(inf);
	nums2.push(inf);
	for (let i = 0; i < nums1.length + nums2.length - 2; i++) {
		if (nums1[first1] <= nums2[first2]) {
			merged[i] = nums1[first1];
			first1 += 1;
		} else {
			merged[i] = nums2[first2];
			first2 += 1;
		}
	}
	nums1.pop();
	nums2.pop();
	return merged;
}

console.log(merge([1,3,5,6,7,8], [2,3,4,4,5,9,10,12]));

// Более близкая к идеалу реализация
function merged2(nums1, nums2) {
	const totalLength = nums1.length + nums2.length;
	const merged = new Array(totalLength).fill(0);
	let first1 = 0,
			first2 = 0;
	for (let i = 0; i < totalLength; i++) {
		if (first1 !== nums1.length && (first2 === nums2.length) || nums1[first1] <= nums2[first2]) {
			merged[i] = nums1[first1];
			first1 += 1;
		} else {
			merged[i] = nums2[first2];
			first2 += 1;
		}
	}
	return merged;
}

console.log(merged2([1,3,5,6,7,8], [2,3,4,4,5,9,10,12]));