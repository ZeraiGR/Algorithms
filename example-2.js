// Сумма последовательности (особые случаи)

// cumbersome
function seqSum1 (seq) {
	if (seq.length === 0) return 0;
	seq = String(seq).split('').map(n => +n);
	let seqsum = seq.reduce((prev,cur) => prev + cur, 0);
	return seqsum;
} 

// clear
function seqSum2 (seq) {
	let seqsum = 0;
	seq = String(seq).split('').map(n => +n);
	seqsum = seq.reduce((prev,cur) => prev + cur, 0);
	return seqsum;
}

console.log(seqSum2(123)); // 6