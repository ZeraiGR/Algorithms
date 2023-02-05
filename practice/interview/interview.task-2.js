// Removing duplicates

const array = [1,2,3,5,1,5,9,1,2,8];

function removeDuplicates (arr) {
	return Array.from(new Set(arr));
}

function removeDuplicates2 (arr) {
	return arr.filter((el, pos) => arr.indexOf(el) == pos);
}

function removeDuplicates3 (arr) {
	const dct = new Map();
	for (const el of arr) {
		dct.set(el, (dct.get(el) ?? 0) + 1);
	}
	return [...dct.keys()];
}

console.log(removeDuplicates(array));
console.log(removeDuplicates2(array));
console.log(removeDuplicates3(array));