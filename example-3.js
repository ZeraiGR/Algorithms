// Максимум последовательности (особые случаи)
import { assert } from "./tester.js";

// Danger - а что если все члены последовательности будут отрицательными?
function seqMax1 (seq) {
	let seqmax = 0;
	for (const i of seq) {
		if (i > seqmax) {
			seqmax = i;
		}
	}
	return seqmax;
} 

// Correct
function seqMax2 (seq) {
	if (seq.length === 0) return -Infinity;
	let seqmax = seq[0];

	for (const i of seq) {
		if (i > seqmax) {
			seqmax = i;
		}
	}

	return seqmax;
} 

// Tests
assert(1, seqMax1([1,2,3]), 3);
assert(2, seqMax1([1,-2,3]), 3);
assert(3, seqMax1([]), 0);
assert(4, seqMax1([-1,-2,-3]), -1); // Failed

assert(5, seqMax2([1,3,2]), 3);
assert(6, seqMax2([1,2,3]), 3);
assert(7, seqMax2([3,2,1]), 3);
assert(8, seqMax2([1,1,1]), 1);
assert(9, seqMax2([1,-2,3]), 3);
assert(10, seqMax2([]), -Infinity);
assert(11, seqMax2(''), -Infinity);
assert(13, seqMax2([1]), 1);
assert(12, seqMax2([-2,-3,-1]), -1);