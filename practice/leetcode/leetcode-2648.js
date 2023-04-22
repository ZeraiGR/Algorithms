// Generate Fibonacci Sequence
// https://leetcode.com/problems/generate-fibonacci-sequence/description/

// Tags: Frontend (javaScript)

const fibGenerator = function*() {
    yield 0;
    yield 1;
    let cur = 1;
    let prev = 0;
    while (true) {
        yield cur + prev;
        let temp = cur + prev;
        prev = cur;
        cur = temp;
    }
};

const fibGenerator2 = function*() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}