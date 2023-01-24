export function assert (num, fn, res) {
	if (fn === res) {
		console.log(num, ' Test passed!');
	} else {
		console.error(num, 'Test failed!');
	}
}
